import React from "react";
import { ShieldCheck, Globe2, HeartHandshake, CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Verified Reviews",
      desc: "500+ pictures and reviews shared by our community.",
      icon: <ShieldCheck size={20} />,
    },
    {
      title: "100+ Adventures",
      desc: "Curated experiences across Rishikesh for every traveler.",
      icon: <Globe2 size={20} />,
    },
    {
      title: "Customer Delight",
      desc: "24/7 dedicated support to ensure a hassle-free journey.",
      icon: <HeartHandshake size={20} />,
    },
  ];

  return (
    <div className="bg-white rounded-[2rem] shadow-lg border border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 px-8 py-6">
        <h3 className="text-white font-bold text-xl tracking-tight">
          Why Choose <span className="text-orange-500">Tripshalla</span>
        </h3>
      </div>

      {/* Content */}
      <div className="p-8 space-y-8">
        {benefits.map((item, index) => (
          <div key={index} className="flex gap-4 group">
            {/* Icon Container */}
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
              {item.icon}
            </div>

            {/* Text */}
            <div className="pt-1">
              <p className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-1">
                {item.title}
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

        {/* Bottom Trust Tag */}
        <div className="pt-6 mt-2 border-t border-slate-50 flex items-center justify-center gap-2">
          <CheckCircle2 size={14} className="text-emerald-500" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            100% Secure Bookings
          </span>
        </div>
      </div>
    </div>
  );
}