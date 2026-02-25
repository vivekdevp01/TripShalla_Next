'use client'
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  HiOutlinePhotograph,
  HiX,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

export default function ExplorationGrid({ media = [] }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });
  const controls = useAnimation();

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (isInView) controls.start("show");
  }, [isInView, controls]);

  // ---------- MEDIA GROUPING ----------
  const hero = media.find((m) => m.media_role === "hero");
  const destination = media.find((m) => m.media_role === "destination");
  const stay = media.find((m) => m.media_role === "stay");
  const activity = media.find((m) => m.media_role === "activity");
  const gallery = media.filter((m) => m.media_role === "gallery");

  const previewItems = [
    hero?.media_url,
    destination?.media_url,
    stay?.media_url,
    activity?.media_url,
    gallery?.[0]?.media_url,
  ].filter(Boolean);

  const allImages = media.map((m) => m.media_url);

  // ---------- NAVIGATION ----------
  const nextImage = () =>
    setActiveIndex((prev) => (prev + 1) % allImages.length);

  const prevImage = () =>
    setActiveIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));

  // ---------- KEYBOARD ----------
  useEffect(() => {
    function handleKey(e) {
      if (activeIndex === null) return;
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  // ---------- ANIMATION ----------
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      {/* ================= GRID ================= */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6" ref={containerRef}>
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
              About This Trip
            </h2>
            <p className="text-slate-500 mt-3 max-w-2xl">
              Destinations, stays, and experiences you’ll enjoy on this journey.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            // className="grid grid-cols-1 md:grid-cols-4 gap-5 h-[640px]"
            className="
  grid gap-4
  grid-cols-1
  md:grid-cols-4 md:grid-rows-2
  md:h-[640px]
"
          >
            {/* HERO IMAGE */}
            <motion.div
              variants={itemVariants}
              onClick={() => setActiveIndex(0)}
              className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden cursor-pointer group shadow-xl relative"
            >
              <img
                src={previewItems[0]}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className="absolute bottom-6 left-6 text-white text-xl font-bold">
                Trip Highlights
              </span>
            </motion.div>

            {/* SMALL CARDS */}
            {previewItems.slice(1, 4).map((src, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                onClick={() => setActiveIndex(i + 1)}
                className="rounded-3xl overflow-hidden cursor-pointer group shadow-lg relative"
              >
                <img
                  src={src}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/40" />
              </motion.div>
            ))}

            {/* VIEW ALL */}
            {gallery.length > 0 && (
              <motion.div
                variants={itemVariants}
                onClick={() => setActiveIndex(0)}
                className="rounded-3xl overflow-hidden cursor-pointer shadow-lg relative"
              >
                <img
                  src={gallery[0].media_url}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white">
                  <HiOutlinePhotograph className="text-4xl mb-2" />
                  <span className="font-semibold text-lg">View All Photos</span>
                  <span className="text-sm opacity-80">
                    {allImages.length} Images
                  </span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ================= FULLSCREEN MODAL ================= */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setActiveIndex(null)} // click outside = close
        >
          {/* LEFT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 text-white text-5xl hover:scale-110 transition"
          >
            <HiChevronLeft />
          </button>

          {/* IMAGE */}
          <img
            src={allImages[activeIndex]}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
          />

          {/* RIGHT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 text-white text-5xl hover:scale-110 transition"
          >
            <HiChevronRight />
          </button>

          {/* CLOSE */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(null);
            }}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <HiX />
          </button>
        </div>
      )}
    </>
  );
}
