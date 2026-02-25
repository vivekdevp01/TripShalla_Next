import React, { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { useInView } from "react-intersection-observer";

/**
 * StatsAndReviewsSection
 * - Clean trust-building section
 * - Animated stats
 * - Real-looking reviews
 * - Strong CTA
 */

export default function StatsAndReviewsSection({ onOpenEnquiry }) {
  return (
    <section className="bg-[#0D6773] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* ---------- HEADER ---------- */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Adventures You Can Trust. Experiences You’ll Remember.
          </h2>

          <p className="text-teal-100 mt-4">
            Whether it’s high-adrenaline activities, peaceful riverside camping,
            comfortable stays or guided Himalayan journeys, we focus on safety,
            quality and unforgettable moments.
          </p>
        </div>

        {/* ---------- STATS ---------- */}
        <StatsGrid />

        {/* ---------- REVIEWS ---------- */}
        <ReviewsGrid />

        {/* ---------- CTA ---------- */}
        <div className="text-center">
          <button
            onClick={onOpenEnquiry} // This triggers the modal
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-400 text-teal-900 font-bold hover:bg-amber-300 transition-all hover:-translate-y-1 shadow-lg active:scale-95"
          >
            Plan My Adventure
          </button>
        </div>
      </div>
    </section>
  );
}

/* ======================================================
   STATS GRID
====================================================== */

function StatsGrid() {
  const stats = [
    { label: "Happy Adventurers", value: 850, suffix: "+" },
    { label: "Rafting & Adventure Trips", value: 420, suffix: "+" },
    { label: "Certified Instructors", value: 12, suffix: "+" },
    { label: "Average Rating", value: 4.9, suffix: "/5" },
  ];

  const { ref, inView } = useInView({ triggerOnce: true });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!inView) return;

    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 1200;
      const stepTime = 16;
      const increment = end / (duration / stepTime);

      const timer = setInterval(() => {
        start += increment;
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] =
            stat.value % 1 === 0
              ? Math.min(Math.round(start), end)
              : Math.min(start.toFixed(1), end);
          return updated;
        });

        if (start >= end) clearInterval(timer);
      }, stepTime);
    });
  }, [inView]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
    >
      {stats.map((s, i) => (
        <div key={i}>
          <div className="text-3xl md:text-4xl font-extrabold text-amber-400">
            {counts[i]}
            <span className="text-xl ml-1">{s.suffix}</span>
          </div>
          <div className="text-sm mt-2 text-teal-100">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ======================================================
   REVIEWS GRID
====================================================== */

function ReviewsGrid() {
  const reviews = [
    {
      name: "Aman Sharma",
      location: "Delhi",
      rating: 5,
      text: "Did river rafting and camping with friends. Safety briefing was very clear and guides were experienced. Everything was properly managed.",
    },
    {
      name: "Priya Mehta",
      location: "Mumbai",
      rating: 5,
      text: "Tried Splash Bungy for the first time and it was thrilling yet safe. Staff was supportive and professional throughout.",
    },
    {
      name: "Vikas Yadav",
      location: "Jaipur",
      rating: 5,
      text: "Clean riverside camp, good food and smooth booking process. Perfect weekend adventure getaway.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {reviews.map((r, i) => (
        <div
          key={i}
          className="bg-white text-slate-800 rounded-2xl p-6 shadow-lg relative"
        >
          <Quote className="absolute top-4 right-4 text-slate-200" />

          <div className="flex items-center gap-2 mb-3">
            {Array.from({ length: r.rating }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-amber-400 text-amber-400"
              />
            ))}
          </div>

          <p className="text-sm leading-relaxed mb-4">“{r.text}”</p>

          <div className="text-sm font-semibold">
            {r.name}
            <span className="text-slate-400 font-normal"> • {r.location}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
