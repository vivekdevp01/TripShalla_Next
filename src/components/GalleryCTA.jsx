import React from "react";
import { motion } from "framer-motion";

export default function GalleryCTA({
  title = "Ready to Create Your Own Journey?",
  subtitle = "From treks to camps and river adventures — let us plan something unforgettable for you.",
  primaryText = "Plan My Trip",
  secondaryText = "Talk to an Expert",
  onPrimaryClick,
  onSecondaryClick,
}) {
  return (
    <section className="py-20 bg-emerald-900 relative overflow-hidden">
      {/* Soft background accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900 via-emerald-800 to-emerald-700 opacity-90" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-4 text-sm md:text-base text-white/90"
        >
          {subtitle}
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onPrimaryClick}
            className="px-8 py-4 rounded-full bg-white text-emerald-900 font-semibold shadow-lg hover:bg-slate-100 transition"
          >
            {primaryText}
          </button>

          <button
            onClick={onSecondaryClick}
            className="px-8 py-4 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition"
          >
            {secondaryText}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
