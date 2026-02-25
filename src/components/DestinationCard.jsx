// DestinationCard.jsx
'use client'
import React, { useState } from "react";

export default function DestinationCard({ image, title }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative inline-block w-[340px] h-[520px] rounded-3xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-3 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
      aria-label={title}
    >
      {/* Image wrapper (keeps rounded corners) */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden="true"
        />
      </div>

      {/* Pill Caption */}
      <div className="absolute left-6 right-6 bottom-6">
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
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
    </div>
  );
}
