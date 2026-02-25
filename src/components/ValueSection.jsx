import React from "react";

const values = [
  {
    title: "Nature Comes First",
    description:
      "We respect the mountains and the communities around them, planning journeys that preserve natural beauty and culture.",
    icon: "🌿",
  },
  {
    title: "Safety Over Shortcuts",
    description:
      "Proper planning, essential facilities, and responsible decisions always come before speed or profit.",
    icon: "🛡️",
  },
  {
    title: "Honesty & Transparency",
    description:
      "Clear communication and fair pricing — no hidden costs, no last-minute surprises.",
    icon: "💬",
  },
  {
    title: "Genuine Experiences",
    description:
      "We focus on real trails, peaceful moments, and meaningful travel rather than rushed or commercial trips.",
    icon: "🤝",
  },
  {
    title: "Accessible Adventure",
    description:
      "Thoughtfully designed treks that are affordable without compromising on experience or care.",
    icon: "🎒",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-emerald-50 py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-amber-500 font-semibold uppercase tracking-wide">
            Our Values
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-emerald-900">
            What Guides Every Journey We Create
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            These values shape how we plan treks, treat travelers, and
            experience the mountains ourselves.
          </p>
        </div>

        {/* Values Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition group"
            >
              <div className="text-4xl mb-4">{value.icon}</div>

              <h3 className="text-lg font-semibold text-emerald-900 mb-2">
                {value.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {value.description}
              </p>

              {/* subtle hover underline */}
              <div className="mt-4 h-[2px] w-0 bg-emerald-600 group-hover:w-12 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="mt-20 text-center text-emerald-800 font-medium text-lg">
          These values aren’t written for the website — they’re practiced on
          every trek.
        </p>
      </div>
    </section>
  );
}
