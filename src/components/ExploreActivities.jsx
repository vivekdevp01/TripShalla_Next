import { motion } from "framer-motion";
import { Mountain, Tent, Waves, Zap } from "lucide-react";

const activities = [
  {
    title: "Treks",
    desc: "Guided Himalayan treks for beginners & pros",
    icon: Mountain,
    // Icon Background: Adventure Green
    color: "bg-[#00796B]",
  },
  {
    title: "Camps",
    desc: "Mountain & riverside camping experiences",
    icon: Tent,
    // Icon Background: Mountain Orange
    color: "bg-[#F7A325]",
  },
  {
    title: "Rafting",
    desc: "White-water rafting in Rishikesh",
    icon: Waves,
    // Icon Background: Adventure Green
    color: "bg-[#00796B]",
  },
  {
    title: "Adventure",
    desc: "Bungee, Zipline, Cliff Jumping & more",
    icon: Zap,
    // Icon Background: Compass Charcoal
    color: "bg-[#1A1D1F]",
  },
];

export default function ExploreActivities() {
  return (
    // Background changed to white for clean contrast
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* Main title text: Deep Charcoal */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1D1F]">
            What We Specialize In
          </h2>
          <p className="mt-3 text-slate-600">
            Experiences crafted by locals & adventure experts
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 cursor-pointer"
              >
                {/* Icon Container: Using mapping color */}
                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${item.color} text-white mb-6`}>
                  <Icon size={28} />
                </div>

                {/* Title: Deep Charcoal */}
                <h3 className="text-xl font-semibold text-[#1A1D1F]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}