"use client";
import React, { useEffect, useState, useMemo, useRef } from "react";
import { Phone, Star } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useParams, useRouter, usePathname } from "next/navigation";
import EnquiryModal from "./Packages/EnquiryModal";
import { motion } from "framer-motion";
import AdventureLoader from "./AdventureLoader";

const overlayByCategory = {
  overlayColor: "from-amber-900/90 via-amber-900/40 to-transparent",
};

export default function PackageGrid({
  filters = {},
  setFilters,
  category: propCategory,
  onCountChange, // 👈 ADD THIS
}) {
  const pathname = usePathname(); // 👈 Get current path

  // Logic to determine initial limit: 3 for Home, 100 for others
  const isHomePage = pathname === "/";
  const initialLimit = isHomePage ? 3 : 100;
  const [visibleCount, setVisibleCount] = useState(initialLimit);

  const params = useParams();
  const router = useRouter();
  const categoryParam = Array.isArray(params?.category)
    ? params.category[0]
    : params?.category;
  const resolvedCategory = propCategory || categoryParam || "trek";

  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState(null);
  const gridTopRef = useRef(null);

  /* ---------------- FETCH PACKAGES ---------------- */
  useEffect(() => {
    fetchPackages();
  }, [resolvedCategory]);

  useEffect(
    () => {
      setVisibleCount(initialLimit);
    },
    [resolvedCategory],
    pathname,
  );
  async function fetchPackages() {
    setLoading(true);

    const { data: packagesData, error } = await supabase
      .from("packages")
      .select(
        `
        id,
        name,
        slug,
        tagline,
        duration_days,
        starting_price,
        old_price,
        rating,
        review_count
      `,
      )
      .eq("category", resolvedCategory)
      .eq("is_active", true);

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    const ids = packagesData.map((p) => p.id);

    const { data: mediaData } = await supabase
      .from("media")
      .select("entity_id, media_url")
      .eq("entity_type", "package")
      .eq("media_role", "cover")
      .in("entity_id", ids);

    const merged = packagesData.map((pkg) => ({
      ...pkg,
      image:
        mediaData?.find((m) => m.entity_id === pkg.id)?.media_url ||
        "/fallback.jpg",
    }));

    setPackages(merged);
    setLoading(false);
  }

  /* ---------------- FILTER LOGIC ---------------- */
  const filteredPackages = useMemo(() => {
    let list = [...packages];

    // 🔍 SEARCH
    if (filters.search?.trim()) {
      const q = filters.search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline?.toLowerCase().includes(q),
      );
    }

    // 💰 BUDGET
    if (filters.budget) {
      list = list.filter((p) => p.starting_price <= filters.budget);
    }

    // ⏱ DURATION
    if (filters.duration?.length) {
      list = list.filter((p) => {
        if (p.duration_days <= 3) return filters.duration.includes("short");
        if (p.duration_days <= 6) return filters.duration.includes("medium");
        return filters.duration.includes("long");
      });
    }

    // 🔃 SORT
    if (filters.sortBy === "price-low") {
      list.sort((a, b) => a.starting_price - b.starting_price);
    }
    if (filters.sortBy === "price-high") {
      list.sort((a, b) => b.starting_price - a.starting_price);
    }

    return list;
  }, [packages, filters]);

  /* ---------------- UI ---------------- */
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <AdventureLoader forceLoading={loading}>
      {/* ✅ SCROLL ANCHOR */}
      <div ref={gridTopRef} />
      {/* HEADING */}
      <div className="mb-8 md:mb-10 px-2">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
          {/* Use inline-flex and items-baseline to keep text on the same visual line */}
          <span className="inline-flex flex-wrap items-baseline gap-x-2">
            <span className="text-orange-500 whitespace-nowrap">
              {resolvedCategory.toUpperCase()}
            </span>
            <span className="text-slate-800">Packages of the Week ✨</span>
          </span>
        </h2>

        <p className="text-gray-400 text-xs md:text-sm mt-2 flex items-center gap-1">
          <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          Price updated as of 21st Jan
        </p>
      </div>

  

      {/* NO RESULTS */}
      {!loading && filteredPackages.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <h3 className="text-2xl font-bold text-slate-700">
            No packages found 😕
          </h3>
          <p className="text-sm text-slate-500 mt-2 max-w-md">
            Try adjusting your search, budget, duration or sorting options.
          </p>

          {setFilters && (
            <button
              onClick={() =>
                setFilters({
                  search: "",
                  budget: 100000,
                  duration: [],
                  difficulty: [],
                  sortBy: "popularity",
                })
              }
              className="mt-6 px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600"
            >
              Reset Filters
            </button>
          )}
        </div>
      )}

      {/* GRID */}
      {!loading && filteredPackages.length > 0 && (
        <>
          <div
            className="
            grid gap-8
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
          "
          >
            {filteredPackages.slice(0, visibleCount).map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => router.push(`/trek/${pkg.slug}`)}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group h-[460px] sm:h-[500px] xl:h-[540px]"
              >
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="
  absolute inset-0 w-full h-full object-cover
  transition-transform duration-500
  group-hover:scale-110
  active:scale-105
"
                />

                {/* <div
                  className={`absolute inset-0 bg-gradient-to-t ${overlayByCategory.overlayColor}`}
                /> */}
                {/* 1️⃣ Soft readability overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* 2️⃣ Bottom gradient (content anchor) */}
                <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

                {/* 3️⃣ Hover polish */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="flex justify-between mb-3">
                    <span className="text-xs bg-black/30 px-3 py-1 rounded-full">
                      {pkg.duration_days} Days
                    </span>
                    <span className="flex items-center gap-1 text-xs bg-black/30 px-2 py-1 rounded-full">
                      <Star
                        size={14}
                        className="text-yellow-400 fill-yellow-400"
                      />
                      {pkg.rating}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-xs opacity-80 mb-4">{pkg.tagline}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-end gap-3">
                      {/* Final Price */}
                      <span
                        className="
      text-3xl sm:text-4xl 
      font-extrabold 
      text-orange-400 
      drop-shadow-md
    "
                      >
                        ₹{pkg.starting_price}
                      </span>

                      {/* Old Price */}
                      {pkg.old_price && (
                        <span
                          className="
        text-sm sm:text-base
        line-through
        text-red-400
        opacity-70
        font-medium
      "
                        >
                          ₹{pkg.old_price}
                        </span>
                      )}
                    </div>

                    {/* Discount Badge */}
                    {pkg.old_price && (
                      <span
                        className="
      bg-orange-500 
      text-white 
      text-xs 
      font-bold 
      px-3 py-1 
      rounded-full 
      shadow-lg
      animate-pulse
    "
                      >
                        {Math.round(
                          ((pkg.old_price - pkg.starting_price) /
                            pkg.old_price) *
                            100,
                        )}
                        % OFF
                      </span>
                    )}
                  </div>
                  {/* <div className="flex items-end gap-2 mb-4">
                    <span className="text-2xl font-black italic">
                      ₹{pkg.starting_price}
                    </span>
                    <span className="text-xs line-through opacity-60">
                      ₹{pkg.old_price}
                    </span>
                  </div> */}

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = "tel:+91XXXXXXXXXX";
                      }}
                      className="p-3 bg-white/10 hover:bg-orange-500 rounded-xl"
                    >
                      <Phone size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPackageId(pkg.id);
                        setIsModalOpen(true);
                      }}
                      className="
  flex-1 bg-white text-slate-900 font-semibold
  py-2.5 sm:py-3 rounded-xl
  hover:bg-orange-600 hover:text-white
  active:scale-95 transition
"
                    >
                      Request Callback
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
      {/* show less */}
      {/* MODAL */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageId={selectedPackageId}
      />
      </AdventureLoader>
    </section>
  );
}
