// Original file (uploaded): /mnt/data/TopDestination.jsx

import React, { useRef, useEffect, useState, useCallback } from "react";
import DestinationCard2 from "./DestinationCard2";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images from src/assets so bundler resolves them
import img1 from "/assets/1.jpg";
import img2 from "/assets/2.jpg";
// import img3 from "/assets/3.jpg";
import img3 from "/assets/3.jpg";
import img4 from "/assets/4.jpg";
import img5 from "/assets/5.jpg";
import u1 from "/assets/1.jpg";
import u2 from "/assets/2.jpg";
// import u3 from "/assets/3.jpg";
import u3 from "/assets/3.jpg";

/**
 * TopDestination.jsx
 * Improved, UI-matching version of the Top Destination section
 * - Uses bundler-friendly image imports
 * - Green rounded hero block with large typographic treatment
 * - Autoplay slider with pause-on-hover
 * - Left/right arrows outside the panel; arrows become amber only while pressed
 * - Smooth looping behavior
 * - Cards use scroll-snap for neat alignment
 */
export default function TopDestination({ autoplayInterval = 3000 }) {
  const sliderRef = useRef(null);
  const autoplayRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const cards = [
    { img: img1, title: "Paris", listings: "28 Listing" },
    { img: img2, title: "Kashmir", listings: "32 Listing", featured: true },
    { img: img3, title: "Thailand", listings: "20 Listing" },
    { img: img4, title: "Maldives", listings: "40 Listing" },
    { img: img5, title: "Indonesia", listings: "80 Listing" },
  ];

  // compute an appropriate scroll amount (cards widths may vary)
  const pageScrollAmount = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return 600;
    // aim to scroll ~70% of visible width
    return Math.max(el.clientWidth * 0.7, 300);
  }, []);

  const scroll = useCallback(
    (dir = "right") => {
      const el = sliderRef.current;
      if (!el) return;
      const amount = pageScrollAmount();

      // detect boundaries
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 6;
      const atStart = el.scrollLeft <= 4;

      if (dir === "right") {
        if (atEnd) {
          // quick smooth to start
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: amount, behavior: "smooth" });
        }
      } else {
        if (atStart) {
          el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
        } else {
          el.scrollBy({ left: -amount, behavior: "smooth" });
        }
      }
    },
    [pageScrollAmount],
  );

  // autoplay
  useEffect(() => {
    function start() {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        if (!isHovering) scroll("right");
      }, autoplayInterval);
    }
    start();
    return () => clearInterval(autoplayRef.current);
  }, [autoplayInterval, isHovering, scroll]);

  // pause on window blur
  useEffect(() => {
    const onBlur = () => setIsHovering(true);
    const onFocus = () => setIsHovering(false);
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);
    return () => {
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  // arrow press state (only amber while pressing)
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);

  return (
    <section className="py-16 bg-[#E1F3F1]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0D6773] rounded-[30px] p-8 md:p-12 relative overflow-hidden">
          <div className="md:flex md:items-start md:gap-10">
            <div className="md:w-1/2 z-10 relative">
              <motion.h2
                initial={{ y: 12, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-extrabold text-white/95"
              >
                <span className="text-amber-400">Most Favorite</span>{" "}
                <span className="text-white">Tour Place!</span>
              </motion.h2>

              <p className="text-teal-100 mt-4 text-sm leading-relaxed max-w-lg">
                Choosing a destination can be exciting but also a bit
                overwhelming with so many amazing places out there! Let's narrow
                it down a little. Are you dreaming of peaceful nature, buzzing
                cities, historical wonders, or relaxing beaches?
              </p>

              <div className="flex items-center gap-4 mt-5">
                <div className="flex -space-x-3">
                  <img
                    src={u1}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    alt="user 1"
                  />
                  <img
                    src={u2}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    alt="user 2"
                  />
                  <img
                    src={u3}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    alt="user 3"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold">3.5k</div>
                  <div className="text-xs text-teal-100">HAPPY CUSTOMER</div>
                </div>
              </div>

              <button className="mt-6 bg-lime-400 text-teal-900 px-5 py-2 rounded-full font-semibold shadow hover:bg-lime-300 transition">
                View More Destinations
              </button>
            </div>

            <div className="md:w-1/2 relative hidden md:block">
              <h1 className="absolute right-12 top-6 text-[90px] md:text-[110px] font-extrabold text-white/10 select-none pointer-events-none">
                DESTINATION
              </h1>
              <h1 className="absolute right-12 top-24 text-[40px] md:text-[72px] font-extrabold text-amber-400 select-none pointer-events-none">
                TOP!
              </h1>
            </div>
          </div>
        </div>

        {/* slider area: green panel + scroller */}
        <div className="relative mt-10">
          {/* left arrow (floating outside) */}
          <button
            aria-label="Scroll left"
            onMouseDown={() => setLeftActive(true)}
            onMouseUp={() => setLeftActive(false)}
            onMouseLeave={() => setLeftActive(false)}
            onTouchStart={() => setLeftActive(true)}
            onTouchEnd={() => setLeftActive(false)}
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full shadow flex items-center justify-center transition-transform ${
              leftActive ? "bg-amber-400 scale-95" : "bg-white"
            }`}
          >
            <ChevronLeft
              className={`${leftActive ? "text-white" : "text-amber-400"}`}
            />
          </button>

          <div className="rounded-3xl bg-[#0D6773] px-6 py-8 overflow-visible">
            <div
              ref={sliderRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6 px-4"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {cards.map((c, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0"
                  style={{ scrollSnapAlign: "center" }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.06 }}
                  >
                    <DestinationCard2
                      img={c.img}
                      title={c.title}
                      listings={c.listings}
                      featured={c.featured}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* right arrow (floating outside) */}
          <button
            aria-label="Scroll right"
            onMouseDown={() => setRightActive(true)}
            onMouseUp={() => setRightActive(false)}
            onMouseLeave={() => setRightActive(false)}
            onTouchStart={() => setRightActive(true)}
            onTouchEnd={() => setRightActive(false)}
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full shadow flex items-center justify-center transition-transform ${
              rightActive ? "bg-amber-400 scale-95" : "bg-white"
            }`}
          >
            <ChevronRight
              className={`${rightActive ? "text-white" : "text-amber-400"}`}
            />
          </button>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
