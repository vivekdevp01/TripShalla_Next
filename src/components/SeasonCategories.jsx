// SeasonCardsSection.jsx

// SeasonCardsSection.jsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Two-card seasonal switcher with wiggle/tilt animation on hover.
 * - Uses uploaded background at /mnt/data/c3887266-9f6a-494b-b325-644bb1ef2949.png
 * - Two cards visible (left/right) — arrows cycle seasons
 * - Cards wiggle while hovered
 */

export default function SeasonCardsSection() {
  const bg = "/src/assets/9.jpg";

  // Replace these placeholders with your real asset paths or imports
  const seasons = [
    { key: "summer", title: "Summer", img: "/src/assets/1.jpg" },
    { key: "winter", title: "Winter", img: "/src/assets/2.jpg" },
    { key: "rainy", title: "Rainy", img: "/src/assets/3.jpg" },
    { key: "monsoon", title: "Monsoon", img: "/src/assets/4.jpg" },
  ];

  const [current, setCurrent] = useState(0);
  const n = seasons.length;
  const leftIdx = current % n;
  const rightIdx = (current + 1) % n;

  const handlePrev = () => setCurrent((s) => (s - 1 + n) % n);
  const handleNext = () => setCurrent((s) => (s + 1) % n);

  const leftKey = useMemo(
    () => `${seasons[leftIdx].key}-${leftIdx}`,
    [leftIdx, seasons],
  );
  const rightKey = useMemo(
    () => `${seasons[rightIdx].key}-${rightIdx}`,
    [rightIdx, seasons],
  );

  // wiggle while hovered: small rotate back-and-forth; repeat only while hovered
  const wiggleHover = {
    rotate: [-3, 3, -3],
    scale: 1.02,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  };

  return (
    <section
      className="relative w-full bg-cover bg-center py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      aria-label="Tour categories - seasonal cards"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="md:flex md:items-center md:gap-8">
          {/* Left text block */}
          <div className="md:w-1/3 text-left z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-teal-800">
              <span className="text-amber-400">Wildlife</span> Tourism
            </h2>
            <p className="mt-4 text-sm text-slate-700 max-w-md">
              Observing animals in their natural habitats like tiger safaris or
              birdwatching. Choose a season to discover the right experience.
            </p>
            <button className="mt-6 bg-lime-400 text-teal-900 px-5 py-2 rounded-full font-semibold shadow hover:bg-lime-300 transition">
              View More
            </button>
          </div>

          {/* Cards area (center) */}
          <div className="md:flex-1 md:pl-8 mt-10 md:mt-0 relative flex items-center justify-center">
            {/* Left arrow */}
            <button
              onClick={handlePrev}
              aria-label="previous season"
              className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full shadow-lg bg-white flex items-center justify-center transition hover:scale-105"
            >
              <ChevronLeft className="text-amber-400" />
            </button>

            {/* Two cards container: fixed minHeight prevents layout jumps */}
            <div
              className="relative flex items-center justify-center gap-8 w-full"
              style={{ minHeight: 420 }}
            >
              {/* LEFT CARD */}
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={leftKey}
                  initial={{ x: -120, opacity: 0, rotate: -8, scale: 0.98 }}
                  animate={{ x: -20, opacity: 1, rotate: -3, scale: 1 }}
                  exit={{ x: -200, opacity: 0, rotate: -12, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 220, damping: 28 }}
                  className="w-72 md:w-[360px] bg-white rounded-[26px] shadow-xl overflow-hidden"
                  style={{ transformOrigin: "center" }}
                  whileHover={wiggleHover}
                  // transition={wiggleTransition}
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={seasons[leftIdx].img}
                      alt={seasons[leftIdx].title}
                      className="w-full h-full object-cover block"
                    />
                  </div>
                  <div className="py-3 text-center">
                    <h3 className="text-lg font-semibold text-teal-800">
                      {seasons[leftIdx].title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* RIGHT CARD */}
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={rightKey}
                  initial={{ x: 120, opacity: 0, rotate: 8, scale: 0.98 }}
                  animate={{ x: 20, opacity: 1, rotate: 4, scale: 1 }}
                  exit={{ x: 200, opacity: 0, rotate: 12, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 220, damping: 28 }}
                  className="w-72 md:w-[360px] bg-white rounded-[26px] shadow-xl overflow-hidden"
                  style={{ transformOrigin: "center" }}
                  whileHover={wiggleHover}
                >
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={seasons[rightIdx].img}
                      alt={seasons[rightIdx].title}
                      className="w-full h-full object-cover block"
                    />
                  </div>
                  <div className="py-3 text-center">
                    <h3 className="text-lg font-semibold text-teal-800">
                      {seasons[rightIdx].title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right arrow */}
            <button
              onClick={handleNext}
              aria-label="next season"
              className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full shadow-lg bg-white flex items-center justify-center transition hover:scale-105"
            >
              <ChevronRight className="text-amber-400" />
            </button>
          </div>
        </div>

        {/* bottom CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-amber-400">
            TOUR CATEGORIES
          </h2>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
