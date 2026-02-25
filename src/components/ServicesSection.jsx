// ServicesSection.jsx
import React from "react";
import ServiceCard from "./ServiceCard";

/*
Usage:
const list = [
  { image: "/src/assets/service1.jpg", title: "Tour Guide" },
  ...
];

<ServicesSection items={list} />
*/

export default function ServicesSection({
  items = [
    { image: "/src/assets/service1.jpg", title: "Tour Guide" },
    { image: "/src/assets/service2.jpg", title: "Entertainment" },
    { image: "/src/assets/service3.jpg", title: "Safe Flight" },
    { image: "/src/assets/service4.jpg", title: "Taxi & Metro" },
    { image: "/src/assets/service5.jpg", title: "Delicious Food" },
    { image: "/src/assets/service6.jpg", title: "Spa & Massages" },
    { image: "/src/assets/service7.jpg", title: "Interesting Rest" },
    { image: "/src/assets/service8.jpg", title: "Pickup and Drop" },
  ],
}) {
  return (
    <section className="relative bg-[#076169] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* small heading */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            <span className="text-amber-400">Our Amazing</span>{" "}
            <span className="text-white">Services</span>
          </h3>
          <p className="text-sm text-emerald-200/80 mt-2">Destinations worth exploring! Here are a few popular spots</p>
        </div>

        {/* big rounded card containing grid */}
        <div className="bg-emerald-50/90 rounded-2xl p-6 md:p-8 shadow-[inset_0_6px_18px_rgba(0,0,0,0.06)]">
          {/* inner rounded panel to create white framed gap */}
          <div className="rounded-xl bg-emerald-50 p-6 md:p-8 shadow-lg">
            {/* grid 4x2 on md+, wraps on small screens */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {items.map((it, idx) => (
                <div key={idx} className="flex items-center justify-center">
                  <ServiceCard image={it.image} title={it.title} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* bottom CTA title similar to screenshot */}
        <div className="mt-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-400">SERVICES WE OFFER</h2>
        </div>
      </div>
    </section>
  );
}

