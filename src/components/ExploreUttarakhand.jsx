"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mountain, Tent, Waves, Hotel, Bike, Kayak } from "lucide-react";


const categories = [
  {
    title: "Trek",
    icon: Mountain,
    slug: "/treks",
    desc: "Himalayan treks & guided trails",
  },
  {
    title: "Campings",
    icon: Tent,
    slug: "/packages/camp",
    desc: "Riverside & alpine camps",
  },
  {
    title: "Rafting",
    icon: Waves,
    slug: "/raftings",
    desc: "White water rafting in Rishikesh",
  },
  {
    title: "Adventure",
    icon: Kayak,
    slug: "/bungee",
    desc: "Bungee, zipline & more",
  },
  {
    title: "Hotels & Hostels",
    icon: Hotel,
    slug: "/stays",
    desc: "Budget to premium stays",
  },
  {
    title: "Bike & Scooty Rentals",
    icon: Bike,
    slug: "/guide",
    desc: "Easy local transport",
  },
];

export default function ExploreUttarakhand() {
const router = useRouter();
  return (
    <section id="explore" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Added Animation for Consistency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Explore <span className="text-orange-500">Uttarakhand</span> With Us
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            From treks and camps to stays and rentals — everything you need for
            your Uttarakhand adventure.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                // SNAPPY ANIMATION
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                // Removed 'delay: i * 0.07' for instant mobile response
                transition={{ duration: 0.4 }}
                // PREMIMUM HOVER (Matches your favorite style)
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
               onClick={() => router.push(cat.slug)}
                className="group cursor-pointer rounded-3xl border border-slate-200 p-8 hover:border-orange-400 hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {cat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
