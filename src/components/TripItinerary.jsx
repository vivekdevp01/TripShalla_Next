'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Car,
  Hotel,
  Utensils,
  Moon,
} from "lucide-react";

export default function PackageItinerary({ days = [] }) {
  const pathname = usePathname();
  const isCamp = pathname.startsWith('/trek/');


  const [openDay, setOpenDay] = useState(0);
  const [activeImage, setActiveImage] = useState({});

  const nextImage = (dayId, total) => {
    setActiveImage((prev) => ({
      ...prev,
      [dayId]: ((prev[dayId] || 0) + 1) % total,
    }));
  };

  const prevImage = (dayId, total) => {
    setActiveImage((prev) => ({
      ...prev,
      [dayId]:
        (prev[dayId] || total - 1) === 0 ? total - 1 : (prev[dayId] || 0) - 1,
    }));
  };

  if (!days.length) {
    return (
      <div className="text-center py-20 text-slate-500">
        Detailed itinerary will be updated soon.
      </div>
    );
  }

  return (
    <section className="space-y-12">
      {/* Header */}
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Day-wise Itinerary
        </h2>
        <p className="text-slate-500 mt-2 max-w-xl">
          A carefully planned journey to give you the best experience every day
        </p>
      </div>

      {days.map((item, idx) => {
        const isOpen = openDay === idx;
        const images = item.images || [];
        const currentImage = activeImage[item.id] || 0;

        return (
          <div
            key={item.id}
            className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden"
          >
            {/* HEADER */}
            <button
              onClick={() => setOpenDay(isOpen ? null : idx)}
              className="w-full p-6 flex justify-between items-start text-left bg-gradient-to-r from-orange-50 to-white"
            >
              <div>
                <span className="inline-block bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full mb-2">
                  {isCamp ?"Day":"Step"} {item.day}
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Tap to explore the day’s plan
                </p>
              </div>

              <ChevronDown
                className={`mt-2 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-orange-500" : "text-slate-400"
                }`}
              />
            </button>

            {/* CONTENT */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 md:p-8 space-y-10">
                    {/* DESCRIPTION */}
                    <p className="text-slate-600 leading-relaxed text-[15px]">
                      {item.description}
                    </p>

                    {/* IMAGE CAROUSEL */}
                    {images.length > 0 && (
                      <div className="relative rounded-2xl overflow-hidden">
                        <img
                          src={images[currentImage].media_url}
                          className="w-full h-64 md:h-80 object-cover"
                          alt=""
                        />

                        {/* Arrows */}
                        {images.length > 1 && (
                          <>
                            <button
                              onClick={() => prevImage(item.id, images.length)}
                              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow"
                            >
                              <ChevronLeft size={18} />
                            </button>

                            <button
                              onClick={() => nextImage(item.id, images.length)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow"
                            >
                              <ChevronRight size={18} />
                            </button>
                          </>
                        )}

                        {/* Dots */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                          {images.map((_, i) => (
                            <span
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i === currentImage ? "bg-white" : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* TRANSFER */}
                    {item.transfer && (
                      <div className="rounded-2xl bg-orange-50 p-5 flex gap-4">
                        <Car className="text-orange-500 mt-1" size={20} />
                        <div>
                          <p className="font-semibold text-slate-800">
                            Transfer Included
                          </p>
                          <p className="text-sm text-slate-700">
                            {item.transfer.vehicle}
                          </p>
                          <p className="text-sm text-slate-500 mt-1">
                            {item.transfer.from_location} →{" "}
                            {item.transfer.to_location}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* STAY */}
                    {item.stay && (
                      <div className="rounded-2xl bg-blue-50 p-5 flex gap-4">
                        <Hotel className="text-blue-500 mt-1" size={20} />
                        <div>
                          <p className="font-semibold text-slate-800">
                            Stay Included
                          </p>
                          <p className="text-sm text-slate-700">
                            {item.stay.hotel_name}
                          </p>
                          <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                            {item.stay.nights} <Moon size={12} />
                          </p>
                        </div>
                      </div>
                    )}

                    {/* MEALS */}
                    {(item.meals?.breakfast ||
                      item.meals?.lunch ||
                      item.meals?.dinner) && (
                      <div className="rounded-2xl bg-green-50 p-5 flex gap-4">
                        <Utensils className="text-green-600 mt-1" size={20} />
                        <div>
                          <p className="font-semibold text-slate-800">
                            Meals Included
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2 text-sm">
                            {item.meals.breakfast && (
                              <span className="bg-white px-3 py-1 rounded-full border">
                                🍳 Breakfast
                              </span>
                            )}
                            {item.meals.lunch && (
                              <span className="bg-white px-3 py-1 rounded-full border">
                                🥗 Lunch
                              </span>
                            )}
                            {item.meals.dinner && (
                              <span className="bg-white px-3 py-1 rounded-full border">
                                🍲 Dinner
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </section>
  );
}
