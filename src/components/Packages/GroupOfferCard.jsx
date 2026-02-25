import React from "react";
import { Users, Sparkles, ChevronRight } from "lucide-react";

export default function GroupOfferCard() {
  return (
    <div className="group relative overflow-hidden bg-slate-900 rounded-[2rem] shadow-xl shadow-orange-900/20 transition-all duration-300 hover:-translate-y-1">
      {/* 1. Background Pattern/Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-[50px] -mr-16 -mt-16 group-hover:bg-orange-500/30 transition-colors" />
      
      <div className="p-6">
        <div className="flex gap-5">
          {/* Image with Accent Border */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-orange-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
            <img
              src="/assets/1.jpg"
              alt="Group travel"
              className="relative w-20 h-20 rounded-2xl object-cover border-2 border-slate-900 shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-orange-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">
                Flash Offer
              </span>
              <div className="flex items-center gap-1 text-orange-400">
                <Users size={12} />
                <span className="text-[10px] font-bold uppercase tracking-tight">Group of 5+</span>
              </div>
            </div>
            
            <h3 className="font-black text-xl text-white leading-tight">
              Bigger Group? <br />
              <span className="text-orange-500 text-2xl">Upto 50% OFF</span>
            </h3>
          </div>
        </div>

        <p className="text-sm text-slate-400 mt-4 leading-relaxed font-medium">
          Unforgettable adventures, <span className="text-white">perfectly customized</span> for your squad.
        </p>
      </div>

      {/* 2. Interactive CTA Button */}
      {/* <button className="relative w-full group/btn flex items-center justify-center gap-2 bg-orange-500 py-4 text-white font-black text-xs uppercase tracking-[0.2em] overflow-hidden transition-all hover:bg-orange-600">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
        
        <Sparkles size={16} className="text-white" />
        <span>Get a Callback</span>
        <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
      </button> */}

      {/* Custom Shimmer Animation added via style tag or Tailwind config */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}