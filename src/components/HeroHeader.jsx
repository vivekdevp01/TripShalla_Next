"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import EnquiryModal from "./Packages/EnquiryModal";
import { usePathname } from "next/navigation";
import { FiX } from "react-icons/fi";
import Image from "next/image";

// import HeroSearch from "./HeroSearch";
export default function HeroHeader({
  slides = [
    {
      url: "/assets/camp1.webp",
      title: "INDIA Tour Packages",
      discount: "40% OFF",
      price: "1,000",
    },
    {
      url: "/assets/camp7.webp",
      title: "SIKKIM Adventure",
      discount: "30% OFF",
      price: "1,000",
    },
    {
      url: "/assets/camp10.webp",
      title: "SIKKIM Adventure",
      discount: "30% OFF",
      price: "1,000",
    },
    {
      url: "/assets/camp11.webp",
      title: "SIKKIM Adventure",
      discount: "30% OFF",
      price: "1,000",
    },
    {
      url: "/assets/camp12.webp",
      title: "SIKKIM Adventure",
      discount: "30% OFF",
      price: "1,000",
    },
  ],
  videoID,
}) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const pathname = usePathname();
  const priceList = {
    "/packages/camp": "2500",
    "/bungee": "3000",
  };
  const price = priceList[pathname] || "1200";
  const pathSegment = pathname.split("/").pop();
  // Auto-scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // const stats = [
  //   { label: "TRIP ADVISOR", rating: "4.5/5", icon: "🦉" },
  //   { label: "SITEJABBER", rating: "4.2/5", icon: "🚀" },
  //   { label: "GOOGLE", rating: "4.4/5", icon: "G" },
  //   { label: "REVIEWS.IO", rating: "4.6/5", icon: "★" },
  // ];

  return (
    <header className="relative overflow-hidden h-screen w-full bg-black">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
         <Image
  src={slides[currentIndex].url}
  alt="Hero Background"
  fill
  priority={currentIndex === 0}
  className="object-cover opacity-70"
/>
          <div
            className={`absolute inset-0 bg-gradient-to-t
    from-black/80 via-black/40 to-transparent
    ${isEnquiryOpen ? "" : "backdrop-blur-[2px]"}`}
            style={{
              maskImage: "linear-gradient(to top, black 60%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, black 60%, transparent 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
      >
        <ChevronRight size={32} />
      </button>

      {/* Central Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        {/* Change your current p tag to this */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-xl md:text-2xl font-medium mb-2 tracking-wide text-gray-100"
        >
          {slides[currentIndex].tagline || "Experience the thrill of"}
          <span className="text-yellow-400 font-bold ml-2">
            {slides[currentIndex].discount}
          </span>
        </motion.p>

        {/* Replace your current h1 with this conditional logic */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight"
        >
          {pathSegment === "bungee" ? (
            <>
              <span className="text-yellow-400">ADVENTURE</span> Tour Packages
            </>
          ) : pathSegment === "rafting" ? (
            <>
              <span className="text-yellow-400">White Water</span> Rafting
            </>
          ) : (
            <>
              <span className="text-yellow-400">{pathSegment}</span> Tour
              Packages
            </>
          )}
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative 
             backdrop-blur-2xl 
             bg-black/60 
             border border-white/10
             rounded-3xl 
             px-6 sm:px-8 md:px-10 
             py-6 sm:py-7
             shadow-[0_30px_80px_rgba(0,0,0,0.7)] 
             flex flex-col items-center 
             text-center
             w-full max-w-md sm:max-w-lg"
          >
            {/* Subtle glow */}
            <div className="absolute -inset-1 rounded-3xl bg-yellow-400/10 blur-2xl opacity-50 pointer-events-none" />

            {/* Badge */}
            <span
              className="absolute -top-4 
               bg-yellow-400 text-black 
               text-[10px] sm:text-xs font-bold 
               px-4 py-1.5 
               rounded-full shadow-lg 
               tracking-wide"
            >
              LIMITED OFFER
            </span>

            <p className="text-xs sm:text-sm text-gray-400 tracking-[0.25em] uppercase mt-2">
              Starting From
            </p>

            <div className="flex items-end justify-center gap-2 sm:gap-3 mt-4">
              {/* Old Price */}
              <span className="text-gray-500 line-through text-base sm:text-lg">
                ₹{price}
              </span>

              {/* New Price */}
              <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
                ₹{slides[currentIndex].price}
              </span>

              <span className="text-gray-300 text-xs sm:text-sm mb-1">
                / Adult
              </span>
            </div>

            <p className="text-[11px] sm:text-xs text-gray-400 mt-3">
              Taxes included • Instant confirmation
            </p>
          </motion.div>
          {/* <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative backdrop-blur-xl bg-white/10 border border-white/20 
             rounded-2xl px-8 py-5 shadow-2xl flex flex-col items-center"
          >
            <span
              className="absolute -top-3 bg-yellow-400 text-black text-xs font-bold 
                   px-3 py-1 rounded-full shadow-md"
            >
              LIMITED OFFER
            </span>

            <p className="text-sm text-gray-300 tracking-wide">Starting From</p>

            <div className="flex items-end gap-3 mt-1">
              <span className="text-gray-400 line-through text-lg">
                ₹{price}
              </span>

              <span className="text-4xl font-extrabold text-white">
                ₹{slides[currentIndex].price}
              </span>
              <span className="text-gray-300 text-sm mb-1">/ Adult</span>
            </div>

            <p className="text-xs text-gray-400 mt-1">
              Taxes included • Instant confirmation
            </p>
          </motion.div> */}

          {/* <p className="text-lg text-gray-200">
            Starting at{" "}
            <span className="line-through opacity-60 mr-2">INR {price}</span>
            <span className="text-2xl font-bold text-white">
              INR {slides[currentIndex].price}
            </span>{" "}
            /Adult
          </p> */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Primary CTA - Expert Connect */}
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-orange-900/40 transition-all transform hover:scale-105 active:scale-95"
            >
              Connect With An Expert
            </button>

            {/* Secondary CTA - Video Preview */}
            {pathSegment === "bungee" || pathSegment === "rafting" ? (
              <button
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 active:scale-95"
              >
                <div className="w-6 h-6 bg-white text-orange-600 rounded-full flex items-center justify-center">
                  <div className="ml-0.5 w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-current border-b-[5px] border-b-transparent" />
                </div>
                {pathSegment === "bungee" ? "Watch Jump" : "Watch Rapids"}
              </button>
            ) : null}
          </div>
          {/* Logic to show the Modal */}
          <EnquiryModal
            isOpen={isEnquiryOpen}
            onClose={() => setIsEnquiryOpen(false)}
            packageId={null}
          />
        </motion.div>

        {/* Dash Indicators */}
        <div className="absolute bottom-32 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-1 w-8 transition-all duration-300 ${currentIndex === i ? "bg-white" : "bg-white/30"}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Ratings Bar */}
      {/* Bottom Ratings Bar with Soft Blur Transition */}
      <div
        className={`absolute bottom-0 w-full px-4 pb-10 pt-20
    ${isEnquiryOpen ? "pointer-events-none" : ""}`}
      >
        {/* ⛔ REMOVE blur when modal is open */}
        <div
          className={`absolute inset-0 bg-gradient-to-t
      from-black/80 via-black/40 to-transparent
      ${isEnquiryOpen ? "" : "backdrop-blur-[2px]"}`}
          style={{
            maskImage: "linear-gradient(to top, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 60%, transparent 100%)",
          }}
        />

        {/* <div className="relative z-10 max-w-7xl mx-auto flex flex-wrap justify-around gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{stat.rating}</p>
                <p className="text-[10px] text-gray-400 tracking-widest">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div> */}
        {/* <HeroSearch /> */}
      </div>
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4"
          >
            {/* 1. Close Button (Added FiX check) */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-orange-500 transition-colors z-[210]"
            >
              <FiX size={40} />
            </button>

            {/* 2. Background Overlay (Click anywhere outside video to close) */}
            <div
              className="absolute inset-0"
              onClick={() => setIsVideoOpen(false)}
            />

            {/* 3. The Video Frame */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              <iframe
                width="100%"
                height="100%"
                // We use a backup ID (Rickroll) just to prove the variable is working
                src={`https://www.youtube.com/embed/${videoID ? videoID : "dQw4w9WgXcQ"}?autoplay=1&mute=1&rel=0`}
                title="Adventure Preview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
