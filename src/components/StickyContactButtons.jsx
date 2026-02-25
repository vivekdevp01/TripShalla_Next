// StickyContactButtons.jsx
import { Phone, MessageCircle } from "lucide-react";

export default function StickyContactButtons() {
  const phoneNumber = "+917454875874";
  const whatsappNumber = "917454875874";
  const whatsappMessage = "Hi, I want details about Uttarakhand adventures.";

  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-50 md:hidden
        bg-white border-t border-gray-200
        safe-area-bottom
      "
    >
      <div className="flex">
        {/* Call */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex-1 flex items-center justify-center gap-2 py-4
                     text-white bg-emerald-700 font-semibold"
        >
          <Phone size={18} />
          Call Now
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappMessage,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4
                     text-emerald-900 bg-[#25D366] font-semibold"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
