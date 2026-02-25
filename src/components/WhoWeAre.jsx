import React from "react";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-amber-500 font-semibold uppercase tracking-wide">
            Who We Are
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-emerald-900">
            Friends, Trekkers, and Believers in Real Travel
          </h2>
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Text */}
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
              We are a group of final-year college friends who discovered a
              shared love for trekking and being close to nature. What started
              as weekend escapes soon became something much deeper — a way to
              disconnect from noise and reconnect with ourselves.
            </p>

            <p>
              During our own journeys, we noticed the same problems again and
              again — poorly chosen routes, rushed itineraries, unnecessary
              expenses, and experiences that felt commercial rather than
              genuine.
            </p>

            <p>
              Instead of accepting this as “how travel works,” we decided to
              change it. That decision became{" "}
              <span className="font-semibold text-emerald-700">
                Tripshalla
              </span>
              .
            </p>
          </div>

          {/* Right Highlight Box */}
          <div className="bg-emerald-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-emerald-900 mb-4">
              What We Aim To Do
            </h3>

           <ul className="space-y-4 text-slate-700">
  <li className="flex gap-3">
    <span className="text-orange-500 font-bold">•</span>
    <span>Curate high-safety, high-thrill rafting runs through the best Ganga rapids</span>
  </li>
  <li className="flex gap-3">
    <span className="text-orange-500 font-bold">•</span>
    <span>Hand-pick riverside and jungle camps that balance nature with essential comforts</span>
  </li>
  <li className="flex gap-3">
    <span className="text-orange-500 font-bold">•</span>
    <span>Maintain honest, transparent pricing for adventure sports without hidden costs</span>
  </li>
  <li className="flex gap-3">
    <span className="text-orange-500 font-bold">•</span>
    <span>Deliver authentic mountain experiences—from sunrise treks to evening bonfires</span>
  </li>
  <li className="flex gap-3">
    <span className="text-orange-500 font-bold">•</span>
    <span>Promote 'Clean Rishikesh' by respecting the river and our local Himalayan trails</span>
  </li>
</ul>
          </div>
        </div>

        {/* Closing Line */}
        <p className="mt-12 text-center text-emerald-800 font-medium text-lg">
          We don’t promise perfection — we promise honesty, care, and a journey
          you’ll truly feel.
        </p>
      </div>
    </section>
  );
}
