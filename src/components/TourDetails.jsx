import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
} from "react-icons/hi";

export default function TourDetails({
  title,
  highlight,
  summary = [],
  amenities = [],
  durations = [],
  details = null,
}) {
  const [selectedDuration, setSelectedDuration] = useState(
    durations?.[0]?.id || null,
  );

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-12"
      >
        {/* ================= HEADER ================= */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            {title}
          </h1>

          {highlight && (
            <p className="mt-3 text-orange-500 text-lg font-semibold">
              {highlight}
            </p>
          )}

          {summary.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-6">
              {summary.map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-bold"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ================= QUICK FACTS ================= */}
        {details && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <FactCard
              icon={<HiOutlineSparkles />}
              label="Best Time"
              value={details.best_time}
            />
            <FactCard
              icon={<HiOutlineUsers />}
              label="Capacity"
              value={`${details.capacity}+ Guests`}
            />
            <FactCard
              icon={<HiOutlineClock />}
              label="Check-in"
              value={details.check_in_time}
            />
            <FactCard
              icon={<HiOutlineClock />}
              label="Check-out"
              value={details.check_out_time}
            />
          </div>
        )}

        {/* ================= AMENITIES ================= */}
        {amenities.length > 0 && (
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6">What’s Included</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {amenities.map((a, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50"
                >
                  <span className="text-xl text-orange-500">{a.icon}</span>
                  <span className="font-medium text-slate-700">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= HIGHLIGHTS ================= */}
        {details?.highlights?.length > 0 && (
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Camp Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50"
                >
                  <HiOutlineCheckCircle className="text-emerald-600 text-xl mt-0.5" />
                  <span className="text-slate-700">{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= PACKAGE OPTIONS ================= */}
        {durations.length > 0 && (
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Choose Package Option</h3>

            <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">
              {durations.map((item) => {
                const isSelected = selectedDuration === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedDuration(item.id)}
                    className={`min-w-[180px] rounded-2xl overflow-hidden cursor-pointer border-2 transition
                      ${
                        isSelected
                          ? "border-orange-500 shadow-lg"
                          : "border-slate-100 hover:border-orange-300"
                      }`}
                  >
                    <div className="relative h-36">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                        <span className="text-white font-bold text-sm">
                          {item.title}
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <p className="text-[11px] uppercase text-slate-400">
                        Starting From
                      </p>
                      <p className="text-lg font-extrabold text-orange-600">
                        ₹{item.final_price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= IDEAL FOR ================= */}
        {details?.ideal_for?.length > 0 && (
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Ideal For</h3>
            <div className="flex flex-wrap gap-3">
              {details.ideal_for.map((i, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ================= BOOKING NOTES ================= */}
        {details?.booking_notes?.length > 0 && (
          <div className="bg-orange-50 border border-orange-200 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-4 text-orange-700">
              Important Notes
            </h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              {details.booking_notes.map((n, i) => (
                <li key={i}>• {n}</li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </section>
  );
}

/* ================= FACT CARD ================= */
function FactCard({ icon, label, value }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
      <span className="text-3xl text-orange-500">{icon}</span>
      <div>
        <p className="text-xs uppercase text-slate-400">{label}</p>
        <p className="font-bold text-slate-800">{value}</p>
      </div>
    </div>
  );
}
