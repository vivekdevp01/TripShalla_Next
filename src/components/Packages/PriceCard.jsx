import React from "react";
import { Tag, Sparkles, Clock, ChevronRight } from "lucide-react";

export default function PriceCard({ pricing }) {
  const phoneNumber = "917454875874";

  if (!pricing) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 text-center w-full">
        <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-3">
          <Clock className="text-slate-300" size={24} />
        </div>
        <p className="text-slate-500 font-medium">
          Pricing will be updated soon.
        </p>
      </div>
    );
  }

  const { title, price, final_price, discount_percent, duration } = pricing;
  const cleanFinalPrice = Math.floor(final_price);
  const cleanOriginalPrice = Math.floor(price);
  const cleanSavings = cleanOriginalPrice - cleanFinalPrice;

  // Dynamic WhatsApp message based on the package title
  const whatsappMessage = encodeURIComponent(
    `Hi Tripshalla! I want to book the "${title || "Standard Package"}" for ₹${final_price}. Please share the availability.`,
  );

  return (
    /* Removed potential hidden classes and ensured w-full for mobile */
    <div className="relative w-full overflow-hidden bg-white rounded-[2rem] p-5 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50 block">
      {/* Decorative Gradient Flare */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full -mr-10 -mt-10 blur-2xl" />

      <div className="relative z-10 space-y-4">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F7A325] mb-1">
              Best Value Rate
            </h3>
            <p className="text-lg font-bold text-slate-800 leading-tight">
              {title || "Standard Package"}
            </p>
          </div>
          {discount_percent > 0 && (
            <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-black tracking-tighter flex items-center gap-1 shadow-lg shadow-emerald-500/20">
              <Sparkles size={10} />
              SAVE {discount_percent}%
            </div>
          )}
        </div>

        <hr className="border-slate-50" />

        {/* Pricing Section */}
        <div className="space-y-1">
          {discount_percent > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400 line-through">
                INR {cleanOriginalPrice.toLocaleString()}
              </span>
              <span className="text-[9px] md:text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                You save INR {cleanSavings.toLocaleString()}
              </span>
            </div>
          )}

          <div className="flex items-end gap-1.5">
            <span className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">
              ₹{cleanFinalPrice.toLocaleString()}
            </span>
            <span className="text-[10px] font-bold text-slate-500 mb-1.5 md:mb-2 uppercase tracking-widest">
              / Person
            </span>
          </div>
        </div>

        {/* Duration & Availability */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 py-2 border-y border-slate-50">
          <div className="flex items-center gap-1.5 text-slate-600">
            <Clock size={14} className="text-[#F7A325]" />
            <span className="text-[10px] font-bold uppercase tracking-wide">
              {duration || "Flexible"}
            </span>
          </div>
          <div className="hidden md:block h-4 w-[1px] bg-slate-200" />
          <div className="flex items-center gap-1.5 text-slate-600">
            <Tag size={14} className="text-[#F7A325]" />
            <span className="text-[10px] font-bold uppercase tracking-wide">
              Instant Booking
            </span>
          </div>
        </div>

        {/* Clickable WhatsApp Booking Button */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block group pt-2"
        >
          <div className="bg-[#F7A325] group-hover:bg-[#e08f1d] transition-colors rounded-2xl p-4 flex items-center justify-between text-white shadow-xl shadow-orange-500/20">
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase tracking-widest opacity-80">
                Limited Time Offer
              </span>
              <span className="text-sm font-black uppercase tracking-tight">
                Book Now
              </span>
            </div>
            <div className="bg-white/20 group-hover:bg-white/30 px-3 py-2 rounded-xl text-[10px] font-black backdrop-blur-sm flex items-center gap-1 transition-all group-hover:translate-x-1">
              WHATSAPP <ChevronRight size={12} />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
