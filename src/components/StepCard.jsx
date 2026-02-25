// StepCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function StepCard({ number, title, body, icon, index = 0 }) {
  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: index * 0.15 },
    },
    hover: { y: -8, transition: { duration: 0.25 } },
  };

  return (
    <motion.div
      className="relative bg-white rounded-2xl overflow-visible px-6 py-8 md:px-10 md:py-12 shadow-[0_28px_50px_rgba(6,78,73,0.06)]"
      variants={cardVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      whileHover="hover"
    >

      {/* NUMBER — now on TOP */}
      <div className="w-14 h-14 rounded-xl bg-emerald-900 text-white font-bold text-xl
        flex items-center justify-center"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {number}
      </div>

      {/* TITLE */}
      <h4
        className="text-xl md:text-2xl font-semibold text-emerald-800 mt-5"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {title}
      </h4>

      {/* DESCRIPTION */}
      <p className="text-sm md:text-base text-slate-500 mt-3 leading-relaxed">
        {body}
      </p>

{/* SOFT RIGHT CURVED OVERLAY */}
<div className="
  absolute right-0 top-0 h-full 
  w-32 md:w-40    /* narrower */
  z-0             /* BEHIND text */
  pointer-events-none
">
  <svg
    viewBox="0 0 120 400"
    className="h-full w-full"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="stepFade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="rgba(255,255,255,0)" />
        <stop offset="100%" stopColor="rgba(224,252,249,0.65)" /> 
      </linearGradient>
    </defs>

    {/* much softer & narrower curve */}
    <path
      d="M0 0 H80 Q115 200 80 400 H0 Z"
      fill="url(#stepFade)"
    />
  </svg>
</div>

{/* ICON BADGE (corrected alignment) */}
<div className="absolute -top-7 right-8 z-30">
  <div className="
      w-16 h-16 rounded-full bg-white 
      border-[5px] border-amber-400 
      shadow-md flex items-center justify-center
    ">
    {icon}
  </div>
</div>


    </motion.div>
  );
}
