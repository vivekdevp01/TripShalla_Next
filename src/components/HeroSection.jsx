"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  const handleScrollToExplore = () => {
    if (window.location.pathname === "/") {
      const element = document.getElementById("explore");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#explore");
    }
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <img
        src="/assets/1.jpg"
        alt="Himalayan Trekking"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Discover <span className="text-amber-400">Rishikesh</span>
            <br />
            Beyond The Ordinary
          </h1>
          <p className="mt-6 text-lg text-white/90">
            From adrenaline-filled adventures and riverside camping to scenic
            stays — experience travel crafted for thrill, comfort and unforgettable memories.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={handleScrollToExplore}
              className="bg-amber-400 text-teal-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-300 transition"
            >
              Explore Experiences
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-teal-900 transition"
            >
              Plan My Trip
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}