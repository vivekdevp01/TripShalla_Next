import React from "react";
import { Link } from "react-router-dom";

/**
 * BlogCard - clickable card used in the blog/news grid
 * Props:
 * - id: string|number (used for route)
 * - image: string (url or /images/...)
 * - title: string
 * - excerpt: string
 * - date: string
 * - category: string
 * - tags: string[] (optional)
 * - to: string (optional) - prefer route path; if provided, will use this instead of `/post/:id`
 */
export default function BlogCard({
  id,
  image,
  title,
  excerpt,
  date,
  category,
  tags = [],
  to,
}) {
  const href = to || `/post/${id}`;

  return (
    <Link
      to={href}
      className="block w-full max-w-[320px] bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition transform hover:-translate-y-1 duration-200"
    >
      {/* image */}
      <div className="relative h-40">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* category badge */}
        {category && (
          <span className="absolute left-3 top-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded">
            {category}
          </span>
        )}
      </div>

      {/* content */}
      <div className="p-4">
        <div className="text-xs text-red-500 mb-2">{date}</div>
        <h3 className="font-semibold text-gray-800 leading-snug mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{excerpt}</p>

        {/* tags + CTA row */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-green-600 font-medium">Read more</span>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-600">
              ➜
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
