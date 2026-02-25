import React from "react";

/**
 * Left image + right content card used inside TrendingSection.
 * Props:
 * - image, title, category, body, ctaText, ctaHref
 */
export default function TrendingCard({ image, title, category, body, ctaText = "Read more", ctaHref = "#" }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-1/2 w-full h-80 md:h-[400px] overflow-hidden rounded-lg ">
          <img src={image} alt={title} className="w-full h-80 md:h-full object-cover " />
        </div>

        {/* Content */}
        <div className="md:w-1/2 w-full p-8">
          <div className="mb-4">
            <span className="inline-block text-sm font-medium text-gray-500 uppercase">{category}</span>
          </div>

          <h3 className="text-3xl site-serif font-semibold text-gray-800 mb-4">{title}</h3>

          <div className="prose max-w-none text-gray-600 mb-6">
            <p>{body}</p>
          </div>

          <a
            href={ctaHref}
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-medium shadow hover:bg-green-700 transition"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
}
