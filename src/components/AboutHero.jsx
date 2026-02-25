import React from "react";

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-b from-emerald-50 to-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT – Text */}
        <div>
          <p className="text-amber-500 font-semibold tracking-wide uppercase">
            About Tripshalla
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-emerald-900 leading-tight">
            Built for the Adventure. <br />
            Designed for Real Journeys.
          </h1>

          <p className="mt-6 text-lg text-slate-700 max-w-xl">
            At{" "}
            <span className="font-semibold text-emerald-800">
              Tripshalla
            </span>
            , we believe travel should be smooth, honest, and deeply connected
            to the places you visit — not rushed, confusing, or commercial.
          </p>

          <p className="mt-4 text-slate-600 max-w-xl leading-relaxed">
            Born from real travel experiences, we created Tripshalla to fix
            what most trips get wrong. From transparent planning to dependable
            on-ground support, our focus is on delivering genuine journeys —
            especially across Rishikesh and off-beat destinations.
          </p>

          <p className="mt-6 font-medium text-emerald-700">
            Planned by travelers. Guided by experience. Delivered with care.
          </p>

          {/* Soft CTA */}
          <div className="mt-8 flex items-center gap-6">
            <a
              href="#who-we-are"
              className="text-emerald-700 font-semibold hover:underline"
            >
              Learn our story →
            </a>
            <a
              href="#team"
              className="text-emerald-700 font-semibold hover:underline"
            >
              Meet the team →
            </a>
          </div>
        </div>

        {/* RIGHT – Visual */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-emerald-100 rounded-full blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/assets/1.jpg"
              alt="Himalayan travel experience"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
