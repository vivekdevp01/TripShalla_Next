import { RotateCcw, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function PackageFilters({ filters, setFilters }) {
  /* 🎯 Animated Placeholder */
  const placeholders = [
    "Search for treks",
    "Search for camps",
    "Search for rafting",
    "Search for adventures",
  ];

  const [placeholder, setPlaceholder] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = placeholders[wordIndex];

    let speed = isDeleting ? 40 : 70; // deleting slightly faster

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // typing
        setPlaceholder(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          // immediately start deleting (no long pause)
          setTimeout(() => setIsDeleting(true), 400); // small, smooth delay
        }
      } else {
        // deleting
        setPlaceholder(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % placeholders.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className="bg-white/90 backdrop-blur rounded-3xl border border-slate-200 shadow-xl p-6 space-y-6">
      {/* 🔍 SEARCH */}
      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder={placeholder}
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="
            w-full pl-11 pr-4 py-3 rounded-2xl text-sm
            border border-slate-200
            bg-white
            focus:border-orange-400
            focus:ring-4 focus:ring-orange-100
            transition-all duration-300 outline-none
          "
        />
      </div>

      {/* FILTER GRID */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
        {/* 💰 BUDGET */}
        <div className="md:col-span-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-slate-700">Budget</span>
            <span className="text-sm font-bold text-orange-500">
              ₹{filters.budget}
            </span>
          </div>
          <input
            type="range"
            min="1100"
            max="10000"
            step="300"
            value={filters.budget}
            onChange={(e) =>
              setFilters({ ...filters, budget: Number(e.target.value) })
            }
            className="w-full accent-orange-500"
          />
        </div>

        {/* ⏱ DURATION */}
        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2 block">
            Duration
          </label>
          <select
            value={filters.duration?.[0] || ""}
            onChange={(e) =>
              setFilters({
                ...filters,
                duration: e.target.value ? [e.target.value] : [],
              })
            }
            className="
              w-full rounded-xl px-3 py-2 text-sm
              border border-slate-200
              focus:border-orange-400 focus:ring-4 focus:ring-orange-100
              transition-all outline-none
            "
          >
            <option value="">All</option>
            <option value="short">1–3 Days</option>
            <option value="medium">4–6 Days</option>
            <option value="long">7+ Days</option>
          </select>
        </div>

        {/* 🧗 DIFFICULTY */}
        {/* <div>
          <label className="text-sm font-semibold text-slate-700 mb-2 block">
            Difficulty
          </label>
          <select
            value={filters.difficulty?.[0] || ""}
            onChange={(e) =>
              setFilters({
                ...filters,
                difficulty: e.target.value ? [e.target.value] : [],
              })
            }
            className="
              w-full rounded-xl px-3 py-2 text-sm
              border border-slate-200
              focus:border-orange-400 focus:ring-4 focus:ring-orange-100
              transition-all outline-none
            "
          >
            <option value="">All</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="hard">Hard</option>
          </select>
        </div> */}

        {/* 🔃 SORT */}
        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2 block">
            Sort by Price
          </label>
          <div className="flex gap-2">
            {[
              { key: "price-low", label: "Low → High" },
              { key: "price-high", label: "High → Low" },
            ].map((opt) => (
              <button
                key={opt.key}
                onClick={() => setFilters({ ...filters, sortBy: opt.key })}
                className={`
                  px-4 py-2 rounded-xl text-xs font-semibold
                  transition-all duration-300
                  ${
                    filters.sortBy === opt.key
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-orange-100"
                  }
                `}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ♻️ RESET */}
      <div className="flex justify-end">
        <button
          onClick={() =>
            setFilters({
              search: "",
              budget: 10000,
              duration: [],
              difficulty: [],
              sortBy: "popularity",
            })
          }
          className="
            flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold
            text-slate-600 hover:text-orange-600
            hover:bg-orange-50 transition-all
          "
        >
          <RotateCcw size={16} />
          Reset Filters
        </button>
      </div>
    </div>
  );
}
