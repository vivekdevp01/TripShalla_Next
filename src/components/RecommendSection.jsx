import React from "react";
import { NavLink } from "react-router-dom";

export default function RecommendSection({
  circle1 = "/src/assets/4.jpg",
  circle2 = "/src/assets/2.jpg",
  circle3 = "/src/assets/3.jpg",
}) {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT – Image Story */}
        <div className="relative h-[520px] flex items-center justify-center">
          {/* soft background blob */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-emerald-50 -z-10" />

          {/* main image */}
          <div className="w-[340px] h-[340px] rounded-full overflow-hidden ring-8 ring-white shadow-xl">
            <img src={circle1} className="w-full h-full object-cover" />
          </div>

          {/* floating images */}
          <div className="absolute -top-6 right-16 w-36 h-36 rounded-full overflow-hidden ring-6 ring-white shadow-lg">
            <img src={circle2} className="w-full h-full object-cover" />
          </div>

          <div className="absolute bottom-6 left-12 w-24 h-24 rounded-full overflow-hidden ring-6 ring-white shadow-lg">
            <img src={circle3} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* RIGHT – Content */}
        <div>
          <p className="text-amber-500 font-semibold tracking-wide uppercase">
            Handpicked Experiences
          </p>

          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-emerald-900 leading-tight">
            We Recommend <br />
            Beautiful Destinations <br />
            Every Month
          </h2>

          <p className="mt-6 text-slate-600 max-w-lg leading-relaxed">
            Inspired by real trekkers and explorers, we curate destinations that
            offer authentic experiences, breathtaking landscapes, and safe
            adventures — month after month.
          </p>

          {/* Info points */}
          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">
                  Trusted Travel Expertise
                </h4>
                <p className="text-sm text-slate-500">
                  Route research, safety checks, and on-ground insights from
                  experts.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                ★
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">
                  Purpose-Driven Journeys
                </h4>
                <p className="text-sm text-slate-500">
                  We focus on sustainability, learning, and meaningful travel.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex items-center gap-6">
            <NavLink
              to="/discover"
              className="px-7 py-3 rounded-full bg-emerald-700 text-white font-medium hover:bg-emerald-800 transition"
            >
              Discover Treks
            </NavLink>

            <div>
              <div className="text-emerald-700 font-bold text-lg">3.5k+</div>
              <div className="text-xs text-slate-500 tracking-wide">
                HAPPY TREKKERS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
