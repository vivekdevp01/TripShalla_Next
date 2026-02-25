'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ShieldCheck,
  RotateCcw,
  Ban,
  CreditCard,
} from "lucide-react";

const POLICIES = [
  {
    id: "confirmation",
    title: "Confirmation Policy",
    icon: ShieldCheck,
    points: [
      "You will receive a confirmation voucher via email within 24 hours of successful booking.",
      "If preferred slots are unavailable, an alternate schedule will be arranged.",
      "Bookings can be cancelled before confirmation for a full refund.",
    ],
  },
  {
    id: "refund",
    title: "Refund Policy",
    icon: RotateCcw,
    points: [
      "Refunds are processed within 7–10 business days after approval.",
      "Refunds are credited back to the original payment source or wallet.",
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation Policy",
    icon: Ban,
    points: [
      "30+ days before travel: 25% cancellation fee.",
      "15–30 days before travel: 50% cancellation fee.",
      "0–15 days before travel: 100% cancellation fee.",
      "No cash refunds for cancellations due to weather or natural calamities.",
    ],
  },
  {
    id: "payment",
    title: "Payment Policy",
    icon: CreditCard,
    points: ["100% of the tour cost must be paid at the time of booking."],
  },
];

export default function PolicyAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.06)] px-6 md:px-10 py-10">
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Policies
          </h2>
          <p className="text-slate-500 mt-2 max-w-xl">
            Please read the following policies carefully before booking your
            trek.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-3">
          {POLICIES.map((policy, index) => {
            const isOpen = openIndex === index;
            const Icon = policy.icon;

            return (
              <div
                key={policy.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "border-orange-300 bg-orange-50/40"
                    : "border-slate-200 bg-white"
                }`}
              >
                {/* HEADER */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isOpen
                          ? "bg-orange-500 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <h3
                      className={`text-base md:text-lg font-semibold ${
                        isOpen ? "text-orange-600" : "text-slate-800"
                      }`}
                    >
                      {policy.title}
                    </h3>
                  </div>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-orange-500" : "text-slate-400"
                    }`}
                  />
                </button>

                {/* CONTENT */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1">
                        <ul className="space-y-4">
                          {policy.points.map((point, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-slate-600"
                            >
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                              <p className="leading-relaxed text-[15px]">
                                {point}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
