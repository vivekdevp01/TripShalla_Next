import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  { label: "All", value: "all" },
  // { label: "Trek", value: "trek" },
  { label: "Camp", value: "camp" },
  { label: "Rafting", value: "rafting" },
  { label: "Adventure", value: "adventure" },
];

const IMAGES = [
  { src: "/assets/camp2.webp", category: "camp" },
  { src: "/assets/raft1.webp", category: "rafting" },
  { src: "/assets/adv1.webp", category: "adventure" },
  { src: "/assets/camp1.webp", category: "camp" },
  { src: "/assets/adv2.webp", category: "adventure" },
  { src: "/assets/adv5.webp", category: "adventure" },
  { src: "/assets/raft5.webp", category: "rafting" },
  { src: "/assets/adv3.webp", category: "adventure" },
  { src: "/assets/adv4.webp", category: "adventure" },
  { src: "/assets/103.webp", category: "adventure" },
  { src: "/assets/105.webp", category: "adventure" },
  { src: "/assets/110.webp", category: "adventure" },
  { src: "/assets/raft2.webp", category: "rafting" },
  { src: "/assets/35.webp", category: "rafting" },
  { src: "/assets/raft4.webp", category: "rafting" },
  { src: "/assets/raft6.webp", category: "rafting" },
  { src: "/assets/raft7.webp", category: "rafting" },
  { src: "/assets/33.webp", category: "rafting" },
  { src: "/assets/34.webp", category: "rafting" },
  { src: "/assets/room2.webp", category: "camp" },
  { src: "/assets/camp3.webp", category: "camp" },
  { src: "/assets/room3.webp", category: "camp" },
  { src: "/assets/room4.webp", category: "camp" },
  { src: "/assets/room5.webp", category: "camp" },
];

export default function GallerySection2() {
  const [activeImage, setActiveImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  /* 🔒 Lock background scroll ONLY for modal */
  useEffect(() => {
    document.body.style.overflow = activeImage ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [activeImage]);

  const filteredImages = useMemo(() => {
    return activeCategory === "all"
      ? IMAGES
      : IMAGES.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">
            Moments From Our Journeys
          </h2>
          <p className="mt-4 text-slate-500 text-sm md:text-base">
            Experiences we offer, memories we create
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200
                ${
                  activeCategory === cat.value
                    ? "bg-emerald-700 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid (even rhythm, calm motion) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={() => setActiveImage(img)}
                className="relative cursor-pointer overflow-hidden rounded-3xl shadow-lg bg-slate-100"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-[260px] object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/25 opacity-0 hover:opacity-100 transition-opacity flex items-end p-5">
                  <p className="text-white text-sm tracking-wide">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Fullscreen Viewer (NO layout animation here) */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-white text-3xl hover:scale-110 transition"
            >
              ✕
            </button>

            <motion.img
              src={activeImage.src}
              alt={activeImage.alt}
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="max-w-[95%] max-h-[90%] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
