import React, { useState } from "react";


/**
 * BookingCard: sticky price / booking widget
 * Replace icons as you prefer. This uses Tailwind.
 */
export default function BookingCard({ price = 11450, feeDetails = [], additions = [], onBook }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">Trek Fee</h3>
          <p className="text-4xl font-bold mt-3">₹ {price.toLocaleString()}</p>
          <div className="text-sm text-gray-600 mt-2 space-y-1">
            {feeDetails.map((f, i) => (
              <div key={i}>• {f}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 border-t pt-4 space-y-3">
        <div className="text-sm text-gray-700">Optional Additions</div>
        <div className="flex gap-2 flex-wrap">
          {additions.map((a) => (
            <div key={a.label} className="text-xs px-2 py-1 bg-white rounded-full text-gray-800 border">
              {a.label} • ₹{a.price}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm text-gray-700 mb-2">Select date</label>
        <div className="flex gap-2">
          <select
            value={selectedDate || ""}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="flex-1 border rounded px-3 py-2 bg-white"
            aria-label="Select trek date"
          >
            <option value="">Choose a month</option>
            <option value="2025-11">November 2025 (Clearest Views)</option>
            <option value="2025-12">December 2025</option>
            <option value="2026-01">January 2026</option>
          </select>
          <button
            onClick={() => setOpen((s) => !s)}
            className="bg-white p-2 rounded shadow-sm"
            aria-expanded={open}
            aria-label="Toggle date info"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={onBook}
          className="flex-1 bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 transition"
        >
          Book Now
        </button>
        <button
          onClick={() => alert("Share link copied")}
          className="w-12 h-12 rounded-full bg-white border flex items-center justify-center"
          aria-label="share"
        >
          🔗
        </button>
      </div>

      <div className="mt-3 text-xs text-gray-600">
        <a href="#" className="text-blue-700 underline">Inclusions & Exclusions</a> • <a href="#" className="text-blue-700 underline">Cancellation Policy</a>
      </div>
    </div>
  );
}
