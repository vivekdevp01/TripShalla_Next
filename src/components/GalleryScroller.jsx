import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryDoubleRowScroller({
  title = "Explore Moments",
  subtitle = "Beautiful places captured by our travelers",
  images = [
    { src: "/assets/1.jpg" },
    { src: "/assets/2.jpg" },
    { src: "/assets/3.jpg" },
    { src: "/assets/4.jpg" },
    { src: "/assets/5.jpg" },
    { src: "/assets/6.jpg" },
    { src: "/assets/7.jpg" },
    { src: "/assets/8.jpg" },
  ],
}) {
  const scrollerRef = useRef(null);
  const [activeImage, setActiveImage] = useState(null);

  /* 🔒 Lock background scroll when modal open */
  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [activeImage]);

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">
            {title}
          </h2>
          <p className="text-slate-500 text-sm mt-2">{subtitle}</p>
        </div>

        {/* MOBILE — Clean vertical cards */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveImage(img)}
              className="rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-white"
            >
              <img
                src={img.src}
                alt=""
                loading="lazy"
                className="w-full h-60 object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* DESKTOP — Horizontal gallery */}
        <div className="relative hidden md:block">
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar px-2"
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                onClick={() => setActiveImage(img)}
                className="flex-none w-[320px] rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-white"
              >
                <img
                  src={img.src}
                  alt=""
                  loading="lazy"
                  className="w-full h-[220px] object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔍 FULLSCREEN IMAGE VIEWER */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-5 right-5 text-white text-3xl font-light hover:scale-110 transition"
            >
              ✕
            </button>

            {/* Image */}
            <motion.img
              src={activeImage.src}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-[95%] max-h-[90%] rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scrollbar hide */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
      `}</style>
    </section>
  );
}
