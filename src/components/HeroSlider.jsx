// src/components/HeroSlider.jsx
import React, { useEffect, useState, useRef } from "react";

export default function HeroSlider({
  slides: propSlides = null,
  autoplay = true,
  interval = 3000,
  centeredText = null, // { title, subtitle } OR null
}) {
  // fallback slides (your original ones)
  const defaultSlides = [
    { id: 1, image: "/src/assets/6.jpg", title: "Char Dham Yatra", subtitle: "Shri Hemkund Sahib Yatra" },
    { id: 2, image: "/src/assets/7.jpg", title: "Explore Uttarakhand", subtitle: "Mountains · Rivers · Adventure" },
    { id: 3, image: "/src/assets/8.jpg", title: "Wildlife & Nature", subtitle: "Jim Corbett & more" },
  ];

  const slides = propSlides && propSlides.length ? propSlides : defaultSlides;

  const [index, setIndex] = useState(0);
  const length = slides.length;
  const timerRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (!autoplay) return;
    startTimer();
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, autoplay]);

  function startTimer() {
    stopTimer();
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setIndex((i) => (i + 1) % length);
      }
    }, interval);
  }

  function stopTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function goTo(i) {
    setIndex(i % length);
  }
  function prev() {
    setIndex((i) => (i - 1 + length) % length);
  }
  function next() {
    setIndex((i) => (i + 1) % length);
  }

  return (
    <section
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      className="w-full relative select-none"
      aria-roledescription="carousel"
    >
      {/* Slides */}
      <div className="relative h-[68vh] md:h-[72vh] lg:h-[76vh] overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={s.id ?? i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={i === index ? "false" : "true"}
          >
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: `url(${s.image})`,
                filter: "brightness(0.45)",
              }}
            />
            {/* if slides have per-slide title/subtitle, you can render them here */}
            {s.title && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-6">
                <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">{s.title}</h2>
                {s.subtitle && <p className="text-lg md:text-2xl mt-2 drop-shadow-md">{s.subtitle}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-green-500/90 hover:scale-110 shadow-lg transition-all duration-300 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-green-500/90 hover:scale-110 shadow-lg transition-all duration-300 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* center overlay text (used for trek pages) */}
      {centeredText && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">{centeredText.title}</h1>
            {centeredText.subtitle && <p className="mt-2 text-lg md:text-2xl drop-shadow-md">{centeredText.subtitle}</p>}
          </div>
        </div>
      )}

      {/* indicators */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex items-center gap-3 z-20 pointer-events-auto">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none ${i === index ? "bg-green-500 w-4 h-4" : "bg-white/70"}`}
          />
        ))}
      </div>
    </section>
  );
}
