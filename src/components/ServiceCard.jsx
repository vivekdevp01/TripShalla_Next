// ServiceCard.jsx
import React from "react";

/*
props:
 - image: string (background image url)
 - title: string
 - onClick: optional
*/
export default function ServiceCard({ image, title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-48 sm:w-56 md:w-64 h-40 md:h-44 rounded-xl overflow-hidden bg-white shadow-lg transform transition hover:-translate-y-2 focus:outline-none"
      aria-label={title}
    >
      {/* Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />

      {/* white inner frame to create the inset margin like screenshot */}
      <div className="absolute inset-3 rounded-lg bg-white/90 pointer-events-none" />

      {/* caption pill */}
      <div className="absolute left-4 right-4 bottom-4">
        <div className="mx-auto rounded-full px-4 py-2 max-w-[220px] text-center text-sm md:text-base font-medium text-emerald-800 bg-white shadow-sm">
          {title}
        </div>
      </div>

      {/* subtle overlay when hovered */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition pointer-events-none" />
    </button>
  );
}
