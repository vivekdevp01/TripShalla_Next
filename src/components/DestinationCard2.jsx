// DestinationCard.jsx
import React, { useState } from "react";

export default function DestinationCard2({ img, title, listings, featured = false }) {
  const [hovered, setHovered] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="group relative inline-block w-[340px] h-[560px] rounded-3xl overflow-visible transform transition-all duration-300 hover:-translate-y-3 cursor-pointer flex-shrink-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
      aria-label={title}
    >
      {/* main card area */}
      <div className="relative rounded-3xl overflow-hidden h-full shadow-xl bg-transparent">

        {/* IMAGE top section */}
        <div className="w-full h-[420px] md:h-[440px] bg-slate-100">
          {img && !hasError ? (
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover block"
              loading="lazy"
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-300">
              <span className="text-slate-500">Image not found</span>
            </div>
          )}
        </div>

        {/* bottom section */}
        <div className="px-6 pb-6 pt-4">
          {/* pill caption */}
          <div
            className={
              "mx-auto rounded-full px-7 py-3 max-w-[260px] text-center text-lg font-semibold transition-all duration-300 " +
              (hovered
                ? "bg-emerald-800 text-white shadow-2xl scale-105"
                : "bg-white text-slate-700 shadow-sm")
            }
          >
            {title}
          </div>

          {/* listing text — optional */}
          {listings && (
            <p className="text-center text-sm mt-2 text-white/90">
              {listings}
            </p>
          )}
        </div>

        {/* fade overlay on hover */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: hovered ? "rgba(0,0,0,0.06)" : "transparent",
          }}
        />
      </div>
    </div>
  );
}
