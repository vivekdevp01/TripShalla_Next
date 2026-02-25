// TreksByCategories.jsx
import React from "react";
import { Link } from "react-router-dom";

const icons = {
  calendar: (
    <svg viewBox="0 0 24 24" className="w-24 h-24 opacity-10" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" fill="#22c55e" />
      <path d="M3 9h18" stroke="white" strokeWidth="2" />
      <path d="M8 3v4M16 3v4" stroke="white" strokeWidth="2" />
    </svg>
  ),
  gauge: (
    <svg viewBox="0 0 24 24" className="w-24 h-24 opacity-10" aria-hidden>
      <path d="M12 4a8 8 0 1 0 8 8" fill="#22c55e" />
      <path d="M12 12l5-3" stroke="white" strokeWidth="2" />
    </svg>
  ),
  medal: (
    <svg viewBox="0 0 24 24" className="w-24 h-24 opacity-10" aria-hidden>
      <circle cx="12" cy="8" r="5" fill="#22c55e" />
      <path d="M8 13l4 7 4-7" fill="#22c55e" />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 24 24" className="w-24 h-24 opacity-10" aria-hidden>
      <circle cx="12" cy="12" r="5" fill="#22c55e" />
      <g stroke="#22c55e" strokeWidth="2">
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M19.8 4.2l-2.1 2.1M6.3 17.7l-2.1 2.1"/>
      </g>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" className="w-24 h-24 opacity-10" aria-hidden>
      <circle cx="12" cy="12" r="9" fill="#22c55e" />
      <path d="M12 7v5l3 2" stroke="white" strokeWidth="2" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" className="w-24 h-24 opacity-10" aria-hidden>
      <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" fill="#22c55e" />
      <circle cx="12" cy="10" r="3.5" fill="white" />
    </svg>
  ),
};

export default function TreksByCategories({ categories = [] }) {
  return (
    <section className="mt-16">
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Treks by Categories</h2>
        <div className="h-1 w-40 bg-emerald-500 mt-2 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.key}
            className="relative rounded-2xl border border-gray-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            {/* top accent line */}
            <div className="h-1 w-full bg-gradient-to-r from-emerald-400 to-lime-400" />

            {/* content */}
            <div className="p-6 relative">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{cat.title}</h3>

              {/* IMPORTANT: block items with spacing & word wrapping */}
              <ul className="list-none m-0 p-0 space-y-3">
                {cat.items.map((item) => (
                  <li key={item.to} className="block">
                    <Link
                      to={item.to}
                      className="block text-gray-700 hover:text-emerald-700 transition-colors whitespace-normal break-words leading-6"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* faint corner icon */}
              <div className="absolute -bottom-6 -right-6 pointer-events-none">
                {icons[cat.icon] || null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
