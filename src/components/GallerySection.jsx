// src/components/GallerySection.jsx
import React, { useRef, useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";

const cardsData = [
  { image: "/assets/1.jpg", title: "Valley Of Flowers", category: "Events" },
  { image: "/assets/2.jpg", title: "Raja Ji National Park", category: "Wildlife" },
  { image: "/assets/3.jpg", title: "Rishikesh", category: "Events" },
  { image: "/assets/4.jpg", title: "Badrinath Temple", category: "Pilgrimage" },
  { image: "/assets/5.jpg", title: "Nainital Lake", category: "Nature" },
];

export default function GallerySection({ auto = true, delay = 3500 }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const cardWidth = 360; // must match card + gap used below

  // scroll helper
  const scrollByAmount = (amount) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  const scrollLeft = () => scrollByAmount(-cardWidth);
  const scrollRight = () => scrollByAmount(cardWidth);

  // update active index based on scrollLeft
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    // Round to nearest card (cardWidth used as approx)
    const idx = Math.round(el.scrollLeft / cardWidth);
    // keep index in bounds
    const bounded = Math.max(0, Math.min(cardsData.length - 1, idx));
    setActiveIndex(bounded);
  };

  // autoplay effect: advance one card every `delay` ms, pause on hover
  useEffect(() => {
    if (!auto) return;
    const interval = setInterval(() => {
      if (isHovering) return;
      const el = scrollRef.current;
      if (!el) return;

      // if near the end, scroll back to start smoothly
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft + cardWidth >= maxScrollLeft - 5) {
        // smooth jump back to 0
        el.scrollTo({ left: 0, behavior: "smooth" });
        setActiveIndex(0);
      } else {
        scrollRight();
      }
    }, delay);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auto, delay, isHovering]);

  // when user clicks indicator, jump to card
  const goTo = (i) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: i * cardWidth, behavior: "smooth" });
    setActiveIndex(i);
  };

  return (
    <section
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/src/assets/6.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius:"rounded"
      }}
    >
      {/* optional overlay for contrast */}
      <div className="absolute inset-0 bg-black/35" />

      {/* inner content centered */}
      <div
        className="relative max-w-7xl mx-auto px-6 py-20 text-center"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Title with side lines */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 site-serif relative inline-block">
          <span className="absolute -left-28 top-1/2 w-20 h-[2px] bg-green-500" />
          Latest Gallery Highlights
          <span className="absolute -right-28 top-1/2 w-20 h-[2px] bg-green-500" />
        </h2>

        {/* carousel container */}
        <div className="relative mt-8">
          {/* Left arrow */}
          <button
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/80 text-gray-800 hover:bg-green-600 hover:text-white shadow-md transition"
          >
            ‹
          </button>

          {/* scrollable strip */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto scrollbar-hide px-4 md:px-8 py-6 scroll-smooth"
            style={{
              scrollSnapType: "x mandatory",
              // ensure horizontal filling but allow full-width background to show
            }}
          >
            {cardsData.map((card, idx) => (
              <div key={idx} className="snap-start" style={{ scrollSnapAlign: "center" }}>
                <GalleryCard {...card} />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/80 text-gray-800 hover:bg-green-600 hover:text-white shadow-md transition"
          >
            ›
          </button>
        </div>

        {/* indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {cardsData.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to card ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none ${
                i === activeIndex ? "bg-green-500 w-4 h-4" : "bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* view all */}
        <div className="mt-10">
          <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition">
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
}
