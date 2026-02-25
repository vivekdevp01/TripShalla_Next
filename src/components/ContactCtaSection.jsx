import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function ContactCTASection() {
  const phoneNumber = "+917454875874"; // replace
  const whatsappNumber = "917454875874"; // replace
  const whatsappMessage =
    "Hi, I’m interested in trekking / rafting packages in Uttarakhand.";

  return (
    <section className="bg-gradient-to-br from-emerald-700 to-teal-800 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center text-white space-y-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Need Help Planning Your Adventure?
        </h2>

        <p className="text-emerald-100 max-w-2xl mx-auto">
          Talk directly to our local Uttarakhand experts for treks, rafting,
          camps, hotels, bike rentals & adventure activities.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
          {/* Call Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-emerald-800 font-bold text-lg shadow-lg hover:scale-105 transition"
          >
            <Phone />
            Call Now
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-lime-400 text-emerald-900 font-bold text-lg shadow-lg hover:scale-105 transition"
          >
            <MessageCircle />
            WhatsApp Us
          </a>
        </div>

        {/* Trust Text */}
        <p className="text-sm text-emerald-100 mt-6">
          ✔ Instant response • ✔ No spam • ✔ Local experts only
        </p>
      </div>
    </section>
  );
}
