'use client'
import React, { useState } from "react";

const places = [
  {
    "id": 1,
    "name": "Jim Corbett National Park",
    "category": "wildlife",
    "x": 420,
    "y": 310
  },
  {
    "id": 2,
    "name": "Valley of Flowers",
    "category": "nature",
    "x": 330,
    "y": 180
  },
  {
    "id": 3,
    "name": "Kedarnath Temple",
    "category": "religious",
    "x": 410,
    "y": 190
  },
  {
    "id": 4,
    "name": "Rishikesh Rafting",
    "category": "adventure",
    "x": 470,
    "y": 370
  }
]


const categories = [
  { key: "all", label: "All", color: "bg-pink-600" },
  { key: "wildlife", label: "Wildlife", color: "bg-yellow-600" },
  { key: "adventure", label: "Adventure", color: "bg-green-600" },
  { key: "nature", label: "Nature", color: "bg-blue-600" },
  { key: "religious", label: "Religious", color: "bg-gray-600" },
];

export default function ExploreMapSection() {
  const [filter, setFilter] = useState("all");

  const visiblePlaces = places.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-24 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/src/assets/9.jpg')",
      }}
    >
      {/* dim overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* heading */}
        <h2 className="text-4xl md:text-5xl font-bold site-serif mb-12 relative inline-block z-10">
          <span className="absolute -left-20 top-1/2 w-16 h-[2px] bg-green-500" />
          Explore the Unexplored
          <span className="absolute -right-20 top-1/2 w-16 h-[2px] bg-green-500" />
        </h2>

        <div className="flex justify-center items-center gap-8 mt-12 relative z-10">
          {/* left filters */}
          <div className="flex flex-col gap-4">
            {categories.slice(0, Math.ceil(categories.length / 2)).map((c) => (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                className={`px-3 py-2 rounded-full font-semibold text-sm transition ${
                  filter === c.key
                    ? `${c.color} text-white`
                    : "bg-white/90 text-gray-800 hover:bg-white"
                }`}
                aria-pressed={filter === c.key}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* map */}
          <div className="relative">
            {/* SVG map - make sure svg width matches coordinates system used in places.json */}
            <img
              src="/src/assets/ukmap2.svg"
              alt="Uttarakhand Map"
              className="w-[520px] md:w-[640px] drop-shadow-2xl"
            />

            {/* marker overlay (absolute) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              {visiblePlaces.map((p) => (
                <button
                  key={p.id}
                  // pointer-events-auto so buttons are clickable despite parent pointer-events-none
                  className="group pointer-events-auto absolute flex items-center justify-center"
                  style={{
                    left: `${p.x}px`,
                    top: `${p.y}px`,
                    transform: "translate(-50%, -50%)",
                    // ensure markers sit above the map
                    zIndex: 40,
                  }}
                  onClick={() => alert(`${p.name}`)} // replace with nicer popup or router navigation
                  aria-label={p.name}
                >
                  {/* ping / ripple effect (expanding circle) */}
                  <span
                    className="absolute inline-flex rounded-full opacity-70"
                    style={{
                      width: 42,
                      height: 42,
                      // place behind core dot
                    }}
                    aria-hidden="true"
                  >
                    <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-40 animate-ping" />
                  </span>

                  {/* core marker */}
                  <span
                    className="relative z-50 inline-block w-4 h-4 rounded-full bg-green-600 border-2 border-white shadow-lg"
                    tabIndex={0} // allow keyboard focus
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.currentTarget.click();
                      }
                    }}
                  />

                  {/* Tooltip - shows on hover and focus */}
                  <div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-md text-xs bg-black/85 text-white opacity-0 scale-95 transform transition-all duration-150 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100"
                    role="tooltip"
                  >
                    {p.name}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* right filters */}
          <div className="flex flex-col gap-4">
            {categories.slice(Math.ceil(categories.length / 2)).map((c) => (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                className={`px-3 py-2 rounded-full font-semibold text-sm transition ${
                  filter === c.key
                    ? `${c.color} text-white`
                    : "bg-white/90 text-gray-800 hover:bg-white"
                }`}
                aria-pressed={filter === c.key}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
