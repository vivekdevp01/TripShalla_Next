import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Users, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Certified guides, quality equipment & strict safety protocols on every trip.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Our trek leaders & instructors have years of on-ground experience.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    desc: "We operate with local partners for authentic routes & hidden gems.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    desc: "No hidden costs. What you see is what you pay — guaranteed.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Why Travel With <span className="text-orange-500">Us</span>?
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            Thousands of travelers trust us for unforgettable trekking, camping
            & adventure experiences across India.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#FAFAFA] rounded-3xl p-6 text-center shadow-sm hover:shadow-lg transition"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5">
                  <Icon size={28} />
                </div>

                <h3 className="text-lg font-semibold text-slate-800">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
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
