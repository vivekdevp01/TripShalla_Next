import { Phone, MessageCircle, Clock } from "lucide-react";

export default function GotAQuestionCard() {
  const phoneNumber = "+91 7454875874";

  return (
    <div className="relative overflow-hidden bg-white rounded-[2rem] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-50">
      {/* Subtle Background Accent */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-50 rounded-full blur-3xl opacity-60" />

      <div className="relative z-10">
        {/* Header with Status */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 mb-1">
              Expert Support
            </h3>
            <h4 className="text-xl font-black text-slate-800 tracking-tight">
              Got a Question?
            </h4>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Online</span>
          </div>
        </div>

        <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">
          Our destination expert will be happy to help you resolve your queries for this tour.
        </p>

        {/* Contact Method: Phone */}
        <a 
          href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
          className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl group hover:bg-orange-500 transition-all duration-300 mb-3"
        >
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
            <Phone className="text-orange-500" size={20} />
          </div>
          <div>
            <p className="text-sm font-black text-slate-800 group-hover:text-white transition-colors">
              {phoneNumber}
            </p>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 group-hover:text-white/80 transition-colors uppercase font-bold tracking-wide">
              <Clock size={10} />
              <span>10:30 AM – 8:00 PM</span>
            </div>
          </div>
        </a>

        {/* Contact Method: WhatsApp (Bonus for better UX) */}
        <button className="w-full py-3 rounded-xl border-2 border-slate-100 flex items-center justify-center gap-2 text-slate-600 hover:border-emerald-400 hover:text-emerald-600 transition-all text-xs font-bold uppercase tracking-widest">
          <MessageCircle size={16} />
          Chat on WhatsApp
        </button>

        <p className="text-center text-[9px] text-slate-300 mt-4 uppercase tracking-[0.2em] font-bold">
          Typical response time: &lt; 5 mins
        </p>
      </div>
    </div>
  );
}