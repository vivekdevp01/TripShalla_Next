import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactMappCard({
  title = "Let’s Plan Your Next Adventure",
  subtitle = "We’re real people, based in India — and always happy to help.",
  phone = "+91 7454875874",
  email = "tripshalla@gmail.com",
  location = "Rishikesh, Uttarakhand, India",
  mapUrl = "https://www.google.com/maps?q=Rishikesh,+Uttarakhand&output=embed",
  onEnquiryClick,
}) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
        >
          {/* Map */}
          <div className="relative h-[300px] md:h-auto">
            <iframe
              src={mapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0"
              title="Location Map"
            />
          </div>

          {/* Info */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-900">
              {title}
            </h3>
            <p className="mt-4 text-slate-600 text-sm md:text-base">
              {subtitle}
            </p>

            {/* Details */}
            <div className="mt-8 space-y-4 text-sm md:text-base">
              <div className="flex items-center gap-3 text-slate-700">
                <MapPin className="text-emerald-700" size={20} />
                <span>{location}</span>
              </div>

              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 text-slate-700 hover:text-emerald-700 transition"
              >
                <Phone className="text-emerald-700" size={20} />
                <span>{phone}</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-slate-700 hover:text-emerald-700 transition"
              >
                <Mail className="text-emerald-700" size={20} />
                <span>{email}</span>
              </a>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button
                onClick={onEnquiryClick}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full
                  bg-emerald-800 text-white font-semibold shadow-lg
                  hover:bg-emerald-900 transition"
              >
                Talk to a Travel Expert
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
