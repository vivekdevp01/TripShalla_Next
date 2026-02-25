import { motion } from "framer-motion";
import { Mountain, Home, Bike, Headset, Map, ShieldCheck } from "lucide-react";

const advantages = [
  {
    title: "Local Uttarakhand Experts",
    desc: "Born & based teams who know terrain, weather & routes",
    icon: Mountain,
  },
  {
    title: "Camps, Hostels & Stays",
    desc: "Trusted local partners & handpicked properties",
    icon: Home,
  },
  {
    title: "Bike & Scooty Rentals",
    desc: "Easy rentals for local exploration & flexibility",
    icon: Bike,
  },
  {
    title: "24/7 On-Trip Support",
    desc: "Call or WhatsApp us anytime during your journey",
    icon: Headset,
  },
  {
    title: "Curated Itineraries",
    desc: "Not copied plans — real routes & experiences",
    icon: Map,
  },
  {
    title: "Safety-First Adventures",
    desc: "Verified guides, equipment & backup planning",
    icon: ShieldCheck,
  },
];

export default function LocalAdvantageSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading - Animated for consistency */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Why Travel With <span className="text-orange-500">Us</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-sm">
            We are not a marketplace — we are your local travel partner in
            Uttarakhand
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                // SNAPPY SCROLL REVEAL
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                // SMOOTH INTERACTION
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-md border border-slate-100 cursor-default group transition-shadow duration-300 hover:shadow-xl"
              >
                {/* Icon Container with Interaction */}
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors duration-300">
                  <Icon className="text-orange-500 group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                
                <h3 className="font-bold text-slate-800 text-lg group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}