import React from "react";

export default function MissionSection() {
  return (
    <section className="bg-emerald-50 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-amber-500 font-semibold uppercase tracking-wide">
          Our Mission
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-emerald-900">
          Honest Travel. Real Facilities. Fair Pricing.
        </h2>

        {/* Mission Text */}
        <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
          At{" "}
          <span className="font-semibold text-emerald-800">Tripshalla</span>
          , Our mission is to make authentic Rishikesh adventures accessible, comfortable, and affordable—from the roar of the rapids to the peace of the riverside—without compromising on safety, transparency, or the sanctity of the Ganga.
        </p>

        <p className="mt-4 max-w-3xl mx-auto text-slate-600 leading-relaxed">
         We focus on providing the best essential facilities—from certified rafting gear to hygienic riverside camps—at fair prices, removing unnecessary extras and hidden costs. Every adventure we host is designed to be safe, well-supported, and deeply connected to the spirit of the Ganga and the mountains around you.
        </p>

        {/* Mission Pillars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h4 className="font-semibold text-emerald-900 mb-2">
              Genuine Experiences
            </h4>
            <p className="text-sm text-slate-600">
              Carefully chosen routes that highlight natural beauty, not tourist
              crowds.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h4 className="font-semibold text-emerald-900 mb-2">
              Affordable & Transparent
            </h4>
            <p className="text-sm text-slate-600">
              Clear pricing with no hidden costs — you pay only for what truly
              matters.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h4 className="font-semibold text-emerald-900 mb-2">
              Safety & Care
            </h4>
            <p className="text-sm text-slate-600">
              Essential facilities, planning, and support that let you trek with
              confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
