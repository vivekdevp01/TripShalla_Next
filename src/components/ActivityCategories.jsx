import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    key: "trek",
    title: "Himalayan Treks",
    subtitle: "Snow treks · High altitude · Guided",
    image: "/src/assets/1.jpg",
    gradient: "from-black/70 via-black/40 to-transparent",
  },
  {
    key: "camp",
    title: "Camping Experiences",
    subtitle: "Riverside · Forest · Luxury camps",
    image: "/src/assets/2.jpg",
    gradient: "from-emerald-900/70 via-emerald-900/40 to-transparent",
  },
  {
    key: "rafting",
    title: "River Rafting",
    subtitle: "Ganga · Thrilling rapids · Certified guides",
    image: "/src/assets/3.jpg",
    gradient: "from-blue-900/70 via-blue-900/40 to-transparent",
  },
  {
    key: "adventure",
    title: "Adventure Activities",
    subtitle: "Bungee · Zipline · Cliff jumping",
    image: "/src/assets/4.jpg",
    gradient: "from-orange-900/70 via-orange-900/40 to-transparent",
  },
  {
    key: "adventure",
    title: "Adventure Activities",
    subtitle: "Bungee · Zipline · Cliff jumping",
    image: "/src/assets/5.jpg",
    gradient: "from-orange-900/70 via-orange-900/40 to-transparent",
  },
];

export default function ActivityCategories() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Choose Your <span className="text-orange-500">Adventure</span>
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            From Himalayan treks to adrenaline-packed adventures — we’ve got it
            all.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.key}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              onClick={() => navigate(`/packages/${cat.key}`)}
              className="relative h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-lg group"
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${cat.gradient}`}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold">{cat.title}</h3>
                <p className="text-sm opacity-90 mt-1">{cat.subtitle}</p>

                <button
                  className="mt-5 w-fit px-5 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold
                             group-hover:bg-orange-500 group-hover:text-white transition"
                >
                  Explore →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
