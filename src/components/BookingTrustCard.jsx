import { ShieldCheck, Headphones, Star, Wallet } from "lucide-react";

export default function BookingTrustCard() {
  const items = [
    {
      icon: ShieldCheck,
      title: "100% Safe Booking",
      desc: "Verified operators & secure payments",
    },
    {
      icon: Headphones,
      title: "24x7 Support",
      desc: "Call or WhatsApp anytime",
    },
    {
      icon: Wallet,
      title: "Best Price Guarantee",
      desc: "No hidden charges",
    },
    {
      icon: Star,
      title: "Top Rated Experiences",
      desc: "4.5+ rated adventures",
    },
  ];

  return (
    <div className="bg-[#FFF7ED] rounded-3xl p-8 md:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                <Icon size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">{item.title}</h4>
                <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
