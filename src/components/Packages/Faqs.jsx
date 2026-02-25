'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQs({
  title = "Package",
  type = "package", // trek | camp | tour | expedition
  faqs = [],
  initialCount = 4,
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const [expanded, setExpanded] = useState(false);

  // If no FAQs, render nothing (safe)
  if (!faqs?.length) return null;

  // Dynamic label based on package type
  const typeLabelMap = {
    trek: "trek",
    camp: "camping experience",
    tour: "tour",
    expedition: "expedition",
    package: "package",
  };

  const typeLabel = typeLabelMap[type] || "package";

  const visibleFaqs = expanded ? faqs : faqs.slice(0, initialCount);

  return (
    <section className="w-full">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.06)] px-6 md:px-10 py-10">
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            {title} FAQs
          </h2>
          <p className="text-slate-500 mt-2">
            Everything you need to know before booking this {typeLabel}.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {visibleFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition ${
                  isOpen
                    ? "border-orange-300 bg-orange-50/40"
                    : "border-slate-200 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <h3 className="font-semibold text-slate-800 text-base md:text-lg">
                    {item.q}
                  </h3>

                  {isOpen ? (
                    <Minus className="text-orange-500 shrink-0" />
                  ) : (
                    <Plus className="text-slate-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* VIEW MORE */}
        {faqs.length > initialCount && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-8 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
            >
              {expanded ? "View Less FAQs" : "View All FAQs"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
