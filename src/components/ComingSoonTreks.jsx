'use client'
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Mountain,
  MapPin,
  Bell,
  ArrowLeft,
  Wind,
  CheckCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
export default function ComingSoonTreks() {
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

    localStorage.setItem("trekNotifyEmail", email); // purely frontend storage
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
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans">
      {/* 1. Background Image with Gritty Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px]" />
      </div>

      {/* 2. Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl w-full px-6 text-center"
      >
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-16 shadow-2xl">
          {/* Icon Header - Adventure Green with Orange Glow */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-20 h-20 bg-[#00796B] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-900/40"
          >
            <Mountain className="text-white" size={40} />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic">
            New Summits <span className="text-[#F7A325]">Awaiting.</span>
          </h1>

          <p className="text-lg text-white/80 mb-10 leading-relaxed font-medium">
            Our explorers are currently mapping out high-altitude trails and
            hidden basecamps. From the Garhwal Himalayas to the jagged peaks of
            Himachal, your ultimate trek starts soon.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/")}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#F7A325] hover:text-white transition-all active:scale-95 shadow-xl"
            >
              <ArrowLeft size={16} />
              Back to Base
            </button>

            <button
              onClick={() => setShowInput(true)}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white/20 transition-all backdrop-blur-md"
            >
              <Bell size={16} />
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

          {/* Trek Stats/Location Badge */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-2 text-[#F7A325] text-xs uppercase tracking-[0.3em] font-black">
              <MapPin size={14} />
              <span>Kedarkantha • Valley of Flowers • Hampta Pass</span>
            </div>

            <div className="flex gap-6 text-white/30">
              <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest">
                <Wind size={12} /> High Altitude
              </div>
              <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest">
                <Mountain size={12} /> Expert Guides
              </div>
            </div>
          </div>
        </div>

        {/* Footer Credit */}
        <p className="mt-8 text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">
          © 2026 Tripshalla Adventure Co.
        </p>
      </motion.div>

      {/* Atmospheric Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#00796B]/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#F7A325]/20 rounded-full blur-[120px]" />
    </div>
    </>
  );
}
