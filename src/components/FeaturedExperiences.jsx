import { useState } from "react";
// import TourSlider from "./TourSlider";
import BookingTrustCard from "./BookingTrustCard";
import TourSlider from "./PackageGrid";

const categories = [
  // { key: "trek", label: "Treks" },
  { key: "camp", label: "Camps" },
  // { key: "rafting", label: "Rafting" },
  // { key: "adventure", label: "Adventure" },
];

export default function FeaturedExperiences() {
  const [active, setActive] = useState("camp");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Trending Experiences
          </h2>
          <p className="text-slate-500 mt-2">
            Handpicked adventures loved by travelers
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                active === c.key
                  ? "bg-orange-500 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Slider */}
        <TourSlider category={active} />

        {/* Trust / BCard */}
        <div className="mt-14">
          <BookingTrustCard />
        </div>
      </div>
    </section>
  );
}
