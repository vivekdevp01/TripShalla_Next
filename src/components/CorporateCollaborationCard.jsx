import { Briefcase, Users, Phone, BadgePercent } from "lucide-react";

export default function CorporateCollaborationCard() {
  return (
    <div className="mt-14 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-6 md:py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      {/* LEFT */}
      <div>
        <h4 className="text-xl font-black text-emerald-800">
          Corporate & Team Adventure Programs
        </h4>

        <p className="text-sm text-emerald-700 mt-1 max-w-xl">
          Planning a corporate outing, startup offsite, or bulk adventure
          booking? We create <strong>customized adventure packages</strong> with
          <strong> special corporate pricing</strong>, flexible scheduling, and
          priority slots.
        </p>

        <div className="flex flex-wrap gap-3 mt-3">
          <Tag icon={<Users size={14} />} text="Team & Offsite Programs" />
          <Tag icon={<Briefcase size={14} />} text="HR / Startup Tie-ups" />
          <Tag icon={<BadgePercent size={14} />} text="Negotiated Pricing" />
        </div>
      </div>

      {/* RIGHT CTA */}
      <div className="flex gap-3 w-full md:w-auto">
        <a
          href="tel:+917454875874"
          className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition"
        >
          <Phone size={16} />
          Call
        </a>

        <a
          href="https://wa.me/917454875874?text=Hi, we are looking for a customized corporate or team adventure package with special pricing."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 md:flex-none px-5 py-3 rounded-xl border-2 border-emerald-600 text-emerald-700 font-bold hover:bg-emerald-600 hover:text-white transition"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

function Tag({ icon, text }) {
  return (
    <span className="flex items-center gap-1.5 bg-white text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-200">
      {icon}
      {text}
    </span>
  );
}
