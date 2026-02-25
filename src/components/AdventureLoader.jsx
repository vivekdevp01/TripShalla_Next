import React from 'react';
import { motion } from 'framer-motion';

const AdventureLoader = () => {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white">
      <div className="relative flex items-center justify-center">
        
        {/* Outer Rotating Sun Ring (Broken line for modern feel) */}
        <motion.div
          className="absolute h-36 w-36 rounded-full border-4 border-dashed border-[#F7A325]/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner Solid Pulsing Sun Ring */}
        <motion.div
          className="absolute h-28 w-28 rounded-full border-2 border-[#F7A325]"
          animate={{ scale: [1, 1.1, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Central Logo Symbol: The Mountains */}
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <svg
              className="h-16 w-16 text-[#00796B]"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Modern Triple Peak Mountain Path */}
              <path d="M4 21L10 7L13 13L16 9L21 21H4Z" />
              {/* Sun/Point element */}
              <circle cx="17" cy="6" r="2.5" className="text-[#F7A325]" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Brand Text Content */}
      <motion.div 
        className="mt-12 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-3xl font-black tracking-tighter text-[#1A1D1F] uppercase italic">
          Tripshalla
        </h2>
        
        {/* Progress Bar Style Loader */}
        <div className="relative h-1 w-32 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#F7A325]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-2">
          Mapping your adventure
        </p>
      </motion.div>
    </div>
  );
};

export default AdventureLoader;