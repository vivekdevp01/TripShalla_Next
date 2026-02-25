// import React, { useState } from "react";
"use client";
import {
  MapPin,
  Clock,
  Phone,
  Bike,
  Leaf,
  Coffee,
  Sparkles,
} from "lucide-react";
import guide from "../json/Guides.json";
import Header3 from "../components/Header3";
import { useRef, useState } from "react";
export default function RishikeshGuide() {
  const [expanded, setExpanded] = useState({});
  const categoryIcons = {
    nature: Leaf,
    spiritual: Sparkles,
    cafes: Coffee,
  };
  const [activeImage, setActiveImage] = useState(null);
  const sectionRefs = useRef({});

  return (
    <>
      <Header3 />
      <main className="bg-[#FAFAFA] text-slate-800">
        {/* HERO */}
        <section className="relative h-[75vh] overflow-hidden">
          <img
            src="/assets/63.jpg"
            alt="Rishikesh"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          <div className="relative h-full flex items-center justify-center px-6">
            <div className="max-w-4xl text-center text-white">
              <span className="inline-block mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-xs font-bold tracking-widest">
                UTTARAKHAND • INDIA
              </span>

              <h1 className="text-4xl md:text-6xl font-black">
                {guide.hero.title}
              </h1>

              <p className="mt-4 text-lg opacity-90">{guide.hero.subtitle}</p>

              <p className="mt-3 text-sm opacity-80 max-w-2xl mx-auto">
                {guide.hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-black mb-10 text-center">
            📍 Explore Rishikesh on Map
          </h2>

          <div className="group relative max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-emerald-200/60 hover:-translate-y-2">
            <img
              src="/assets/rishikeshmap.webp"
              alt="Rishikesh Tourist Map"
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />

            {/* Soft gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
          </div>
        </section>

        {/* WHY SCOOTY */}
        <section className="bg-gradient-to-b from-emerald-50 to-white border-y">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h3 className="text-3xl md:text-4xl font-black mb-12 flex items-center gap-3">
              <Bike /> {guide.whyScooty.title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {guide.whyScooty.points.map((p, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-6 shadow hover:-translate-y-1 transition flex gap-4"
                >
                  <Sparkles className="text-emerald-600 mt-1" />
                  <p className="font-semibold">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* QUICK RENTAL CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-12 mb-20">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-2xl">
            {/* soft glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/20 rounded-full blur-3xl" />

            <div className="relative p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* TEXT */}
              <div>
                <span className="inline-block mb-2 text-xs font-black tracking-widest text-emerald-100">
                  SCOOTY & BIKE RENTAL
                </span>

                <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                  Need a Scooty or Bike in Rishikesh?
                </h3>

                <p className="mt-2 text-emerald-100 max-w-xl text-sm sm:text-base">
                  Explore waterfalls, temples & viewpoints easily with our
                  trusted local rental service.
                </p>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href={`tel:${guide.bikeRental.cta.call}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-emerald-700 font-black px-6 py-4 rounded-xl hover:scale-[1.03] transition"
                >
                  📞 Call Now
                </a>

                <a
                  href={`https://wa.me/${guide.bikeRental.cta.call.replace(
                    "+",
                    "",
                  )}?text=${encodeURIComponent(guide.bikeRental.cta.whatsappText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white/90 px-6 py-4 rounded-xl font-black hover:bg-white hover:text-emerald-700 transition"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PLACES */}
        {guide.categories.map((cat) => {
          const Icon = categoryIcons[cat.icon];
          const isExpanded = expanded[cat.id];
          const placesToShow = isExpanded ? cat.places : cat.places.slice(0, 3);

          return (
            <section
              key={cat.id}
              ref={(el) => (sectionRefs.current[cat.id] = el)}
              className="max-w-7xl mx-auto px-6 py-16 last:pb-24"
            >
              {/* HEADING */}
              <div className="mb-10">
                <h3 className="text-3xl md:text-4xl font-black flex items-center gap-3">
                  {Icon && <Icon className="text-emerald-600" />}
                  {cat.title}
                </h3>

                <p className="mt-3 text-slate-600 max-w-2xl">
                  {cat.id === "spiritual" &&
                    "Ancient temples, ghats & peaceful spiritual landmarks of Rishikesh."}
                  {cat.id === "nature" &&
                    "Waterfalls, scenic viewpoints & peaceful nature escapes best reached by scooty."}
                  {cat.id === "cafes" &&
                    "Relaxing cafés with river views, great coffee & calm vibes."}
                </p>
              </div>

              {/* CARDS */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {placesToShow.map((place, i) => (
                  <div
                    key={i}
                    className="group  relative bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    {/* BADGE */}
                    {/* {(cat.id === "nature" || place.scooty_friendly) && (
                    <span className="absolute top-4 right-4 bg-emerald-50 text-emerald-700 text-[11px] font-bold px-3 py-1 rounded-full">
                      🛵 Scooty Friendly
                    </span>
                  )} */}

                    {/* TOP */}
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-black text-slate-900 leading-snug">
                          {place.name}
                        </h4>

                        <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-4">
                          {place.description}
                        </p>
                      </div>

                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-24 h-24 rounded-xl object-cover cursor-pointer shrink-0 transition-transform duration-300 group-hover:scale-105"
                        onClick={() => setActiveImage(place.image)}
                      />
                    </div>

                    {/* META */}
                    <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                      <span className="flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-full">
                        <Clock size={13} /> {place.best_time}
                      </span>

                      <span className="flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-full">
                        <MapPin size={13} /> {place.distance}
                      </span>
                    </div>

                    {/* TIP */}
                    {place.tips && (
                      <div className="mt-4 bg-amber-50 border-l-4 border-amber-400 px-4 py-2 text-sm font-medium text-amber-900 rounded-r-lg">
                        {place.tips}
                      </div>
                    )}

                    {/* FOOTER (push to bottom) */}
                    <div className="mt-auto pt-5 flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">
                        Best explored by scooty
                      </span>

                      <a
                        href={place.map_link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-black text-emerald-700 hover:text-emerald-900 transition"
                      >
                        Open in Maps →
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* VIEW MORE */}
              {cat.places.length > 3 && (
                <div className="mt-14 text-center">
                  <button
                    onClick={() => {
                      setExpanded((prev) => ({
                        ...prev,
                        [cat.id]: !prev[cat.id],
                      }));

                      setTimeout(() => {
                        sectionRefs.current[cat.id]?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 120);
                    }}
                    className="px-10 py-3 rounded-full border-2 border-emerald-600 text-emerald-700 font-black hover:bg-emerald-600 hover:text-white transition"
                  >
                    {isExpanded ? "View Less ↑" : "View More ↓"}
                  </button>
                </div>
              )}
            </section>
          );
        })}

        {/* LOCAL TIPS */}
        <section className="bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h3 className="text-3xl md:text-4xl font-black mb-12 flex items-center gap-3">
              🌟 Local Travel Tips
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {guide.localTips.map((tip, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <span className="text-emerald-600 font-black text-lg">
                    Tip #{i + 1}
                  </span>
                  <p className="mt-3 text-slate-700 font-semibold leading-relaxed">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCOOTY & BIKE RENTAL CTA */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white shadow-xl">
            {/* Soft decorative glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl" />

            <div className="relative grid md:grid-cols-3 gap-10 p-8 md:p-12 items-center">
              {/* LEFT CONTENT */}
              <div className="md:col-span-2">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-xs font-black tracking-wide mb-4">
                  <Bike size={14} />
                  LOCAL RENTAL SERVICE
                </span>

                <h3 className="text-3xl md:text-4xl font-black text-slate-900">
                  {guide.bikeRental.title}
                </h3>

                <p className="mt-4 text-slate-600 max-w-2xl text-lg">
                  {guide.bikeRental.description}
                </p>

                {/* FEATURES */}
                <div className="mt-6 grid sm:grid-cols-2 gap-4 max-w-xl">
                  {guide.bikeRental.features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT CTA */}
              <div className="flex flex-col gap-4">
                <a
                  href={`tel:${guide.bikeRental.cta.call}`}
                  className="flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 text-white font-black py-4 px-6 hover:bg-emerald-700 transition transform hover:scale-[1.03]"
                >
                  <Phone size={18} />
                  Call for Scooty / Bike
                </a>

                <a
                  href={`https://wa.me/${guide.bikeRental.cta.call.replace(
                    "+",
                    "",
                  )}?text=${encodeURIComponent(
                    guide.bikeRental.cta.whatsappText,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl border-2 border-emerald-600 text-emerald-700 font-black py-4 px-6 hover:bg-emerald-600 hover:text-white transition"
                >
                  WhatsApp for Availability
                </a>

                <p className="text-xs text-slate-500 text-center">
                  Helmets included • Flexible timing • Local support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE MODAL */}
        {activeImage && (
          <div
            className="fixed inset-0 z-200 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <button
                className="absolute -top-10 right-0 text-white text-3xl font-black"
                onClick={() => setActiveImage(null)}
              >
                ×
              </button>

              <img
                src={activeImage}
                alt="Preview"
                className="w-full max-h-[85vh] object-contain rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
