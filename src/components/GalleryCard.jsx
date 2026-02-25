import React from "react";

export default function GalleryCard({ image, title, category }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-[340px] flex-shrink-0 border border-gray-100">
      <div className="relative h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-md">
          {category}
        </span>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
    </div>
  );
}
