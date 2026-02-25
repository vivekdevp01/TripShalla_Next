'use client'
// ContactFullCard.jsx
import React from "react";
import { motion } from "framer-motion";
import ContactFormCard from "./ContactFormCard";
// import {ContactFormCard} from "./ContactFormCard";

export default function ContactFullCard({
  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7912.087235399928!2d78.69014637792219!3d30.18641301775502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1763101999789!5m2!1sen!2sin",
  address = "Rishikesh, Uttarakhand",
}) {
  // motion variants
  const leftVariant = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  const rightVariant = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // curtain animation for map: slides up and fades out
  const curtain = {
    hidden: { opacity: 1, y: 0 },
    show: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.9, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section className="bg-[#EFFFFF] py-16 px-4">
      {/* BIG WHITE CARD */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-[0_10px_30px_rgba(6,78,59,0.06)] p-6 md:p-10">
        {/* ---------- TOP: FIND US + MAP ---------- */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-xl font-semibold text-emerald-700">
                Find Us
              </h4>
              <p className="text-sm text-slate-500">
                We are here — drop by or send a message
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-amber-50 rounded-full text-slate-700 text-sm">
              <svg
                className="w-4 h-4 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 11.5a2 2 0 100-4 2 2 0 000 4z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1118 0z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
              <span>{address}</span>
            </div>
          </div>

          {/* MAP with curtain overlay */}
          <div className="relative rounded-xl overflow-hidden border border-emerald-50 h-64 md:h-96 mb-10">
            {/* iframe map */}
            <iframe
              src={mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company location"
            />

            {/* decorative curtain (motion) - covers map initially then slides up & fades */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={curtain}
            >
              {/* curtain visual: subtle gradient + soft blur for a nice reveal */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(239,250,247,0.6) 40%, rgba(239,255,255,0.0) 100%)",
                  backdropFilter: "blur(6px)",
                }}
              />
              {/* optional subtle stripe for extra polish */}
              <div
                aria-hidden="true"
                className="absolute left-0 right-0 bottom-6 h-20 md:h-28"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.5), rgba(255,255,255,0))",
                  mixBlendMode: "screen",
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* ---------- BOTTOM: FORM + CONTACT DETAILS (animated) ---------- */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* FORM (slides in from left) */}
          <motion.div
            className="w-full md:w-[55%]"
            variants={leftVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ContactFormCard />
          </motion.div>

          {/* CONTACT DETAILS (slides in from right) */}
          <motion.div
            className="md:w-[45%]"
            variants={rightVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-emerald-800">
                Contact <span className="text-amber-500">Detail</span>
              </h3>

              <p className="text-slate-600 text-sm mt-2 max-w-sm">
                Tripshalla is a multi-award-winning strategy and content
                creation agency specializing in travel marketing.
              </p>

              <div className="mt-8 space-y-6">
                {/* PHONE */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Phone</p>
                    <p className="text-slate-600 text-sm">7454 8758 74</p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-700">
                    ✉️
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Email</p>
                    <p className="text-slate-600 text-sm">
                      tripshalla@gmail.com
                    </p>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Address</p>
                    <p className="text-slate-600 text-sm">{address}</p>
                  </div>
                </div>
              </div>

              {/* MAN IMAGE */}
              <img
                src="/assets/TRIPSHALA.png"
                className="w-60 mt-10 mx-auto md:mx-0"
                alt="contact man"
              />

              {/* FOOTER TEXT */}
              {/* <div className="text-center mt-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-700">
                  Let’s <span className="text-amber-500">Talk</span> About You !
                </h2>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
