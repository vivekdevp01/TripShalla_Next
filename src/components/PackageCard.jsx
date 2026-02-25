import { Phone, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PackageCard({ pkg, onEnquiry, showActions = true }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/trek/${pkg.slug}`)}
      className="h-[520px] relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
    >
      <img
        src={pkg?.image}
        alt={pkg?.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
        {/* Top meta */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs bg-black/40 px-3 py-1 rounded-full">
            {pkg?.duration_days} Days
          </span>
          <span className="flex items-center gap-1 text-xs bg-black/40 px-2 py-1 rounded-full">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            {pkg?.rating}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-2">{pkg?.name}</h3>
        <p className="text-xs opacity-80 mb-4">{pkg?.tagline}</p>

        <div className="flex items-end gap-2 mb-4">
          <span className="text-2xl font-black">₹ {pkg?.starting_price}</span>
          <span className="text-xs line-through opacity-60">
            ₹ {pkg?.old_price}
          </span>
        </div>

        {showActions && (
          <div className="flex gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = "tel:+91XXXXXXXXXX";
              }}
              className="p-3 bg-white/10 hover:bg-orange-500 rounded-xl"
            >
              <Phone size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onEnquiry(pkg.id);
              }}
              className="flex-1 bg-white text-black font-bold py-3 rounded-xl hover:bg-orange-600 hover:text-white"
            >
              Request Callback
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
