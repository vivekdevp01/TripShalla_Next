import { X } from "lucide-react";

export default function ResultsSummary({ total, filters, onClear }) {
  if (total === null) return null;

  const activeFilters = [];

  if (filters.search) activeFilters.push(`Search: "${filters.search}"`);
  if (filters.budget < 100000) activeFilters.push(`Under ₹${filters.budget}`);
  if (filters.duration?.length)
    activeFilters.push(
      filters.duration[0] === "short"
        ? "1–3 Days"
        : filters.duration[0] === "medium"
          ? "4–6 Days"
          : "7+ Days",
    );

  return (
    <div
      className="
        flex flex-col md:flex-row md:items-center md:justify-between
        gap-3
        bg-slate-50 border rounded-2xl px-5 py-4
      "
    >
      {/* LEFT */}
      <div className="text-sm text-slate-700">
        <span className="font-semibold text-slate-900">{total}</span> package
        {total !== 1 && "s"} found
        {activeFilters.length > 0 && (
          <span className="text-slate-500"> • {activeFilters.join(" • ")}</span>
        )}
      </div>

      {/* RIGHT */}
      {activeFilters.length > 0 && (
        <button
          onClick={onClear}
          className="
            inline-flex items-center gap-2
            text-sm font-semibold text-orange-600
            hover:text-orange-700 transition
          "
        >
          <X size={16} />
          Clear filters
        </button>
      )}
    </div>
  );
}
