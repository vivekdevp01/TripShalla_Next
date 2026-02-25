import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export default function PackageSummary({ inclusions = [], exclusions = [] }) {
  if (!inclusions.length && !exclusions.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6">
      {/* Decorative Title */}
      <div className="relative flex items-center justify-center mb-14">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
        <h2
          className="relative px-6 text-3xl md:text-4xl font-medium text-orange-500 bg-[#FAFAFA]"
          style={{ fontFamily: "'Kaushan Script', cursive" }}
        >
          End of Trip
        </h2>
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          relative
          bg-white
          rounded-[36px]
          border border-slate-200
          shadow-[0_40px_80px_rgba(0,0,0,0.08)]
          px-6 py-10 md:px-12 md:py-14
        "
      >
        {/* Header */}
        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 text-center mb-12">
          What’s Included in Your Experience
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Vertical divider */}
          <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-slate-100" />

          {/* Inclusions */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-100">
                <CheckCircle2 className="text-emerald-600" size={20} />
              </span>
              <h4 className="text-lg font-bold text-slate-900">Inclusions</h4>
            </div>

            <ul className="space-y-4">
              {inclusions.map((item, idx) => (
                <li
                  key={idx}
                  className="
                    group
                    flex items-start gap-4
                    rounded-2xl
                    border border-emerald-100
                    bg-gradient-to-r from-emerald-50/80 to-white
                    px-5 py-4
                    transition
                    hover:shadow-sm
                  "
                >
                  <CheckCircle2
                    className="text-emerald-500 mt-0.5 shrink-0"
                    size={18}
                  />
                  <span className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-rose-100">
                <XCircle className="text-rose-600" size={20} />
              </span>
              <h4 className="text-lg font-bold text-slate-900">Exclusions</h4>
            </div>

            <ul className="space-y-4">
              {exclusions.map((item, idx) => (
                <li
                  key={idx}
                  className="
                    group
                    flex items-start gap-4
                    rounded-2xl
                    border border-rose-100
                    bg-gradient-to-r from-rose-50/80 to-white
                    px-5 py-4
                    transition
                    hover:shadow-sm
                  "
                >
                  <XCircle
                    className="text-rose-500 mt-0.5 shrink-0"
                    size={18}
                  />
                  <span className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
