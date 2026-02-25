// StepsSection.jsx
import React from "react";
import StepCard from "./StepCard";

/* Inline SVG icons used in the badges — swap with your own if you want */
const IconLocation = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-700">
    <path d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="#0f766e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1118 0z" stroke="#0f766e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconCard = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" y="6" width="19" height="12" rx="2" stroke="#0f766e" strokeWidth="1.6"/>
    <path d="M2.5 10h19" stroke="#0f766e" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const IconBag = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 7V6a6 6 0 0112 0v1" stroke="#0f766e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 8h-16l2 12h12l2-12z" stroke="#0f766e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function StepsSection() {
  return (
    <section className="py-16 bg-white">
      {/* heading */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-amber-400 mr-2">Easy Steps</span>
          <span className="text-emerald-800">For Booking</span>
        </h3>
        <p className="text-sm text-slate-500 mt-3">Destinations worth exploring! Here are a few popular spots</p>
      </div>

      {/* cards grid */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          <StepCard
            number="01"
            title="Choose Destination"
            body="All you have to do is, first select your preferred destination and proceed"
            icon={IconLocation}
          />
          <StepCard
            number="02"
            title="Make Payment"
            body="You are important to us. We pay attention to the quality of every service we provide to you."
            icon={IconCard}
          />
          <StepCard
            number="03"
            title="Ready For Travelling"
            body="We have seen that you have fulfilled all the requirements, now you are ready to travel."
            icon={IconBag}
          />
        </div>
      </div>

      {/* small script font / plane dotted line decorative row (optional) */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <div className="flex justify-center">
          <svg width="240" height="28" viewBox="0 0 240 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
            <path d="M4 18c50-20 80 10 120 0 40-10 60 20 120 0" stroke="#BFDCDC" strokeWidth="1.6" strokeDasharray="6 6" strokeLinecap="round" />
            <path d="M140 8c0 0 8-4 12-3" stroke="#BFDCDC" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
