'use client'
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bed, MapPin, Bell, ArrowLeft, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Header3 from "../components/Header3"
export default function ComingSoonHotels() {
  const router = useRouter();
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = () => {
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address");
      return;
    }

    localStorage.setItem("hotelNotifyEmail", email); // purely frontend storage
    setError("");
    setSubmitted(true);
    setEmail("");

    setTimeout(() => {
      setSubmitted(false);
      setShowInput(false);
    }, 3000);
  };

  return (
    <>
    <Header3/>
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans">
      {/* 1. Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
      </div>

      {/* 2. Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl w-full px-6 text-center"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 md:p-16 shadow-2xl">
          {/* Icon Header */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-20 h-20 bg-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-amber-500/30"
          >
            <Bed className="text-white" size={40} />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Something <span className="text-amber-400">Cozy</span> is Coming.
          </h1>

          <p className="text-lg text-white/80 mb-10 leading-relaxed font-medium">
            We're handpicking the finest hotels and most vibrant hostels for
            your next adventure. Stay tuned for stays that feel like home.
          </p>

          {/* Simple Interaction */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/")}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:bg-amber-500 hover:text-white transition-all active:scale-95"
            >
              <ArrowLeft size={18} />
              Back to Explore
            </button>

            <button
              onClick={() => setShowInput(true)}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all backdrop-blur-md"
            >
              <Bell size={18} />
              Notify Me
            </button>
          </div>
          <AnimatePresence>
            {showInput && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8"
              >
                {!submitted ? (
                  <>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-4 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                    {error && (
                      <p className="text-red-400 text-sm mt-2">{error}</p>
                    )}
                    <button
                      onClick={handleSubmit}
                      className="mt-4 w-full px-6 py-3 bg-amber-500 rounded-xl font-bold hover:bg-amber-400 transition"
                    >
                      Submit
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-3 text-green-400 font-semibold">
                    <CheckCircle size={28} />
                    You're on the list! We’ll notify you soon.
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Location Badge */}
          <div className="mt-12 flex items-center justify-center gap-2 text-white/50 text-sm uppercase tracking-[0.3em] font-bold">
            <MapPin size={14} className="text-amber-500" />
            <span>Rishikesh • Manali • Kasol</span>
          </div>
        </div>

        {/* Footer Credit */}
        <p className="mt-8 text-white/40 text-xs font-black uppercase tracking-widest">
          © 2026 Travlla Adventure Corp
        </p>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-amber-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-emerald-500/20 rounded-full blur-[120px]" />
    </div>
    </>
    
  );
}
