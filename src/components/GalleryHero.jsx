import React from "react";
import { motion } from "framer-motion";

export default function GalleryHero({
  image = "/assets/camp1.webp",
  title = "Travel Moments",
  subtitle = "Discover places that feel like dreams",
}) {
  return (
    <header className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden bg-black">
      {/* Background Image */}
      <motion.img
        src={image}
        alt="Gallery Hero"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Overlay (same language as HeroHeader) */}
      <div
        className="absolute inset-0 bg-gradient-to-t
          from-black/80 via-black/40 to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-white max-w-2xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
            {title}
          </h1>

          <p className="mt-4 text-sm md:text-base text-white/90">{subtitle}</p>

          {/* Subtle divider */}
          <div className="mt-8 flex justify-center">
            <span className="w-14 h-[2px] bg-amber-400 rounded-full" />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
