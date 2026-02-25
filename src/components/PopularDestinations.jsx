// PopularDestinations.jsx
'use client'
import React, { useRef, useState, useEffect } from "react";
import DestinationCard from "./DestinationCard";

/*
Usage:
<PopularDestinations items={[ { image, title }, ... ]} />
*/

export default function PopularDestinations({
  items = [
    { image: "/src/assets/1.jpg", title: "Paris" },
    { image: "/src/assets/2.jpg", title: "Maldives" },
    { image: "/src/assets/3.jpg", title: "Hong Kong" },
    { image: "/src/assets/4.jpg", title: "Thailand" },
  ],
}) {
  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // update arrow states
  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  // inside component, replace useEffect with this improved version:
useEffect(() => {
  const el = scrollerRef.current;
  if (!el) return;

  const onScroll = () => updateArrows();
  const onResize = () => updateArrows();

  // initial check (run now and shortly after to allow layout/images to settle)
  updateArrows();
  const raf = requestAnimationFrame(updateArrows);
  const t = setTimeout(updateArrows, 200);

  el.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);

  return () => {
    cancelAnimationFrame(raf);
    clearTimeout(t);
    el.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
  };
}, []);

  // page scroll by visible width (shows next group of cards)
  const pageScroll = (direction = "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const pageWidth = el.clientWidth;
    const gap = 32; // px gap between cards
    const offset = direction === "right" ? pageWidth + gap : - (pageWidth + gap);
    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="relative bg-emerald-50/30 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-800">
            <span className="text-amber-400 mr-2">Popular</span> Destinations
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Destinations worth exploring! Here are a few popular spots
          </p>
        </div>

        {/* Slider area (increased height) */}
        <div className="relative">
          {/* Overlay left arrow */}
        <button
  onClick={() => pageScroll("left")}
  disabled={!canScrollLeft}
  aria-label="Previous"
  className={`absolute left-2 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full shadow-lg transition ${
    canScrollLeft ? "bg-white hover:scale-105 pointer-events-auto" : "bg-white/60 cursor-not-allowed pointer-events-none"
  }`}
>
  <svg className={`w-6 h-6 ${canScrollLeft ? "text-amber-400" : "text-amber-200"}`} viewBox="0 0 24 24" fill="none">
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
</button>

          {/* Scroller: single row, no wrap, hide scrollbar */}
          <div
            ref={scrollerRef}
            className="flex gap-8 overflow-x-auto no-scrollbar px-10 py-6"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              whiteSpace: "nowrap",
            }}
          >
            {items.map((it, idx) => (
              <div key={idx} className="inline-block">
                <DestinationCard image={it.image} title={it.title} />
              </div>
            ))}
          </div>

          {/* Overlay right arrow */}
        <button
  onClick={() => pageScroll("right")}
  disabled={!canScrollRight}
  aria-label="Next"
  className={`absolute right-2 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full shadow-lg transition ${
    canScrollRight ? "bg-white hover:scale-105 pointer-events-auto" : "bg-white/60 cursor-not-allowed pointer-events-none"
  }`}
>
  <svg className={`w-6 h-6 ${canScrollRight ? "text-amber-400" : "text-amber-200"}`} viewBox="0 0 24 24" fill="none">
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
</button>
        </div>
      </div>

      {/* hide default scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
