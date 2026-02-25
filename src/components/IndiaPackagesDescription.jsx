"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const CONTENT_BY_CATEGORY = {
  trek: {
    title: "Camping Experiences in India",
    intro: `
      Escape city life and reconnect with nature through Tripshalla’s curated camping
      experiences set in the most scenic landscapes of India.
    `,
    body: `
      Our camping packages offer riverside stays, forest clearings, mountain camps,
      and starry-night experiences combined with bonfires, local food, and guided activities.
    `,
    extra: `
      Whether you are traveling with friends, family, or solo, our camps are safe,
      comfortable, and perfect for relaxation and adventure alike.
    `,
  },
  camp: {
    title: "Trekking Packages in India",
    intro: `
      HimalayanGoats brings you handpicked trekking packages across the Indian Himalayas,
      designed for adventure seekers who want raw nature, challenge, and unforgettable views.
    `,
    body: `
      Our trekking experiences take you through snow-covered passes, alpine meadows,
      remote villages, and sacred trails. From beginner-friendly treks like Nag Tibba
      to high-altitude adventures like Kedarkantha and Brahmatal, every trek is curated
      with safety, comfort, and authentic mountain experiences in mind.
    `,
    extra: `
      With Tripshalla, you trek with experienced local guides, well-planned itineraries,
      and complete on-ground support—making every step memorable and safe.
    `,
  },

  rafting: {
    title: "River Rafting Adventures",
    intro: `
      Tripshalla offers adrenaline-pumping river rafting experiences across India’s
      most thrilling river stretches.
    `,
    body: `
      From the roaring rapids of the Ganges in Rishikesh to scenic Himalayan rivers,
      our rafting packages combine adventure, safety, and expert guidance.
    `,
    extra: `
      Perfect for first-timers and thrill-seekers alike, our rafting trips are conducted
      with certified instructors and international safety standards.
    `,
  },

  tour: {
    title: "India Tour Packages",
    intro: `
      Explore the cultural, spiritual, and natural diversity of India with Tripshalla’s
      thoughtfully designed tour packages.
    `,
    body: `
      From Himalayan hill stations to royal Rajasthan and serene southern landscapes,
      our tours blend comfort, exploration, and local experiences.
    `,
    extra: `
      Each itinerary is customizable, ensuring you travel at your pace while discovering
      the true essence of India.
    `,
  },
};

export default function PackagesDescription() {
  const { category } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);

  const content = CONTENT_BY_CATEGORY[category] || CONTENT_BY_CATEGORY.trek;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-[#F9F9F9] border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          {content.title}
        </h2>

        <div className="text-slate-600 text-[15px] leading-relaxed">
          <p className="mb-4">{content.intro}</p>
          <p>{content.body}</p>

          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4"
            >
              <p>{content.extra}</p>
            </motion.div>
          )}

          <div className="flex justify-end mt-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-slate-800 font-bold hover:text-orange-600 transition-colors text-sm"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
