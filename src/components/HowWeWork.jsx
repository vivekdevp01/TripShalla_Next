import React from "react";

const steps = [
  {
    step: "01",
    title: "Vetted Adventures",
    description:
      "We choose river stretches and campsites based on safety protocols, water levels, and crowd-free locations — not just popularity.",
  },
  {
    step: "02",
    title: "Adventure Logistics",
    description:
      "From certified rafting gear to hygienic riverside meals, we plan the essentials that make your journey smooth and safe.",
  },
  {
    step: "03",
    title: "Clear Communication",
    description:
      "Clear pricing with no hidden river permits or transport fees. You know exactly what’s included before you hit the water.",
  },
  {
    step: "04",
    title: "On-Ground Support",
    description:
      "Our IRF-trained guides and camp staff manage the logistics and safety, letting you focus on the experience, not the gear.",
  },
  {
    step: "05",
    title: "Continuous Improvement",
    description:
      "We learn from every season and always travel with deep respect for the Ganga and the local Rishikesh communities.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-amber-500 font-semibold uppercase tracking-wide">
            How We Work
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-emerald-900">
            Our Approach to Creating Meaningful Adventures
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            A simple, honest process shaped by real river experience and care
            for every traveler.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group bg-emerald-50 rounded-2xl p-8 hover:shadow-md transition"
            >
              <div className="text-emerald-700 font-bold text-xl mb-3">
                {item.step}
              </div>

              <h3 className="text-lg font-semibold text-emerald-900 mb-2">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 h-[2px] w-0 bg-emerald-600 group-hover:w-14 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="mt-20 text-center text-emerald-800 font-medium text-lg">
          Simple process. Honest intent. Adventures done the right way.
        </p>
      </div>
    </section>
  );
}