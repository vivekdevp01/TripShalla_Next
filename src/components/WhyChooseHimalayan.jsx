import { motion } from "framer-motion";
import { Heart, Star, PhoneCall, BadgeCheck } from "lucide-react";

const items = [
  {
    title: "70+ Verified Adventures",
    desc: "From Himalayan treks to riverside camps, all experiences are quality-checked.",
    icon: Heart,
  },
  {
    title: "Top Rated Experiences",
    desc: "Highly rated by travelers for safety, comfort & memorable moments.",
    icon: Star,
  },
  {
    title: "Carefully Curated Packages",
    desc: "Every itinerary is crafted with attention to detail and real traveler needs.",
    icon: BadgeCheck,
  },
  {
    title: "Dedicated Trip Assistance",
    desc: "Our team is available 24/7 to ensure a smooth and stress-free journey.",
    icon: PhoneCall,
  },
];

export default function WhyChooseHimalayan() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-14">
          Why Choose Tripshalla
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 mb-6 flex items-center justify-center
                           rounded-2xl bg-orange-50 text-orange-500
                           group-hover:bg-orange-100 transition"
              >
                <item.icon size={28} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
