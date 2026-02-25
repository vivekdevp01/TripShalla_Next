'use client'
import { Waves, ShieldAlert, ChevronDown } from "lucide-react";
import { useState } from "react";

const gradeColors = {
  "Grade I": "bg-green-100 text-green-700",
  "Grade I–II": "bg-green-100 text-green-700",
  "Grade II": "bg-emerald-100 text-emerald-700",
  "Grade II–III": "bg-emerald-100 text-emerald-700",
  "Grade III": "bg-amber-100 text-amber-700",
  "Grade III–IV": "bg-orange-100 text-orange-700",
  "Grade IV": "bg-red-100 text-red-700",
  "Grade IV+": "bg-red-100 text-red-700",
};

export default function RapidsSection({ rapids = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!rapids.length) return null;

  return (
    <section className="bg-white rounded-3xl p-6 md:p-10 shadow-sm">
      {/* SECTION HEADER */}
      <div className="mb-10">
        <h3 className="text-3xl font-extrabold flex items-center gap-3">
          <Waves className="text-emerald-600" size={30} />
          Rapids You’ll Experience
        </h3>
        <p className="text-slate-500 mt-2 max-w-2xl">
          Each rapid on this stretch has its own personality — from playful wave
          trains to powerful drops. Here’s exactly what you’ll face on the
          river.
        </p>
      </div>

      {/* RAPIDS LIST */}
      <div className="space-y-6">
        {rapids.map((rapid, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-slate-200 rounded-2xl overflow-hidden transition hover:shadow-lg"
            >
              {/* RAPID HEADER (CLICKABLE) */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div>
                  <h4 className="text-xl font-bold">{rapid.name}</h4>

                  <div className="flex flex-wrap gap-2 mt-2">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        gradeColors[rapid.grade] ||
                        "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {rapid.grade}
                    </span>

                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {rapid.difficulty}
                    </span>

                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                      {rapid.rapid_type}
                    </span>
                  </div>
                </div>

                <ChevronDown
                  className={`transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* EXPANDABLE CONTENT */}
              {isOpen && (
                <div className="px-6 pb-6 space-y-5">
                  {/* DESCRIPTION */}
                  <p className="text-slate-600 leading-relaxed">
                    {rapid.description}
                  </p>

                  {/* WHY THIS NAME */}
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                    <p className="text-sm text-slate-700">
                      <strong>Why it’s called this:</strong>{" "}
                      {rapid.why_this_name}
                    </p>
                  </div>

                  {/* WHAT TO EXPECT */}
                  <div>
                    <p className="font-semibold mb-2">
                      What to expect on this rapid:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600">
                      {rapid.what_to_expect.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SAFETY NOTE */}
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4 rounded-xl">
                    <ShieldAlert
                      className="text-red-500 mt-1 shrink-0"
                      size={18}
                    />
                    <p className="text-sm text-red-700">
                      <strong>Safety note:</strong> {rapid.safety_notes}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
