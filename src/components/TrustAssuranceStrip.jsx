import { ShieldCheck, Wallet, BadgeCheck, Headset } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure Payments",
    desc: "All payments are protected with industry-grade encryption.",
  },
  {
    icon: Wallet,
    title: "No Hidden Charges",
    desc: "What you see is what you pay. Zero surprises later.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Experiences",
    desc: "All treks & activities are operated by trusted partners.",
  },
  {
    icon: Headset,
    title: "24/7 Human Support",
    desc: "Talk to a real expert before, during & after your trip.",
  },
];

export default function TrustAssuranceStrip() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Card Container */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8
            bg-white rounded-3xl border border-slate-200
            px-6 py-10 shadow-[0_15px_40px_rgba(0,0,0,0.06)]
          "
        >
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4"
            >
              {/* Icon */}
              <div
                className="
                  w-12 h-12 shrink-0
                  rounded-xl bg-orange-50 text-orange-500
                  flex items-center justify-center
                "
              >
                <item.icon size={22} />
              </div>

              {/* Text */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
