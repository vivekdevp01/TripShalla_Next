
import { useParams, useNavigate } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import TrekDetailPage from "../components/TrekDetailPage";

// src/data/treks.js
 const treks = [
  {
    id: "kedarkantha",
    title: "Kedarkantha Trek",
    subtitle: "The finest summit climb for beginners",
    thumbnail: "/images/kedarkantha-thumb.jpg",
    images: ["/src/assets/7.jpg", "/src/assets/7.jpg", "/src/assets/7.jpg"],
    excerpt: "A 6-day family-friendly snow trek in the Himalayas.",
    difficulty: "Easy Moderate",
    duration: "6 days",
    distance: "23 kms",
    altitude: "12,500 feet",
    basecamp: "Kotgaon / Gaichawan Gaon, Uttarakhand",
    pickup: "Live Free Hostel, Dehradun — 6:30 AM",
    drop: "Live Free Hostel, Dehradun — 6:00 PM",
    accommodation: "Tents",
    fitness: "5 km in 38 mins",
    suitableFor: "8 years and above",
    offloading: "Available",
    cloakroom: "Available",
  },
  // more treks...
];


function Icon({ name, className = "w-10 h-10" }) {
  // small, optimized inline svgs – add more as needed
  const icons = {
    difficulty: (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
        <rect x="3" y="13" width="3" height="6" rx="1" fill="#E6E7E9" />
        <rect x="8" y="9" width="3" height="10" rx="1" fill="#D4D7DA" />
        <rect x="13" y="5" width="3" height="14" rx="1" fill="#C8D6A4" />
        <rect x="18" y="3" width="3" height="16" rx="1" fill="#9ED14E" />
      </svg>
    ),
    duration: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <circle cx="12" cy="12" r="9" fill="#FFF5E6" stroke="#F6C54A" strokeWidth="1" />
        <path d="M12 7v6l4 2" stroke="#F6C54A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    altitude: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path d="M3 17l6-8 4 6 8-10v12H3z" fill="#FFEFD6" stroke="#E5A800" strokeWidth="1" />
      </svg>
    ),
    distance: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path d="M4 12h16" stroke="#D8F0D3" strokeWidth="3" strokeLinecap="round" />
        <circle cx="6" cy="12" r="2" fill="#9ED14E" />
        <circle cx="18" cy="12" r="2" fill="#9ED14E" />
      </svg>
    ),
    basecamp: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path d="M12 3L3 9v9h18V9L12 3z" fill="#FFF8E6" stroke="#F6C54A" strokeWidth="1" />
        <rect x="9" y="12" width="6" height="6" rx="1" fill="#F6C54A" />
      </svg>
    ),
    accommodation: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path d="M4 10l8-6 8 6v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8z" fill="#FFF0E6" stroke="#F08A00" strokeWidth="1" />
        <rect x="9" y="12" width="6" height="5" rx="1" fill="#F08A00" />
      </svg>
    ),
    pickup: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path d="M3 12h18M7 12v6M17 12v6" stroke="#B3E6C0" strokeWidth="2" strokeLinecap="round" />
        <circle cx="7" cy="8" r="2" fill="#9ED14E" />
      </svg>
    ),
    drop: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path d="M3 6h18M7 6v6M17 6v6" stroke="#F7D0D0" strokeWidth="2" strokeLinecap="round" />
        <circle cx="17" cy="3.5" r="1.5" fill="#F04A4A" />
      </svg>
    ),
    default: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <circle cx="12" cy="12" r="10" fill="#EEE" />
      </svg>
    ),
  };

  return icons[name] || icons.default;
}

function InfoItem({ icon, label, value }) {
  const isLink = value && typeof value === "object" && value.href;
  const text = isLink ? value.text : value;

  return (
    <div className="flex gap-4 items-start">
      <div className="shrink-0">
        <Icon name={icon} />
      </div>

      <div>
        <div className="text-xs font-semibold text-gray-700 uppercase">{label}</div>

        {isLink ? (
          <a href={value.href} className="text-blue-600 underline text-sm block mt-1" target="_blank" rel="noreferrer">
            {value.text}
          </a>
        ) : (
          <div className="text-sm text-gray-800 mt-1">{text}</div>
        )}
      </div>
    </div>
  );
}

 export function InfoGrid({ trek = {} }) {
  // normalise fields - pass object or strings/links
  const items = [
    { icon: "difficulty", label: "Trek Difficulty", value: trek.difficulty || "Easy · Moderate" },
    { icon: "duration", label: "Trek Duration", value: trek.duration || "6 days" },
    { icon: "altitude", label: "Highest Altitude", value: trek.altitude || "12,500 feet" },
    { icon: "distance", label: "Total Trek Distance", value: trek.distance || "23 kms" },

    {
      icon: "basecamp",
      label: "Basecamp",
      value:
        trek.basecampUrl && trek.basecampName
          ? { href: trek.basecampUrl, text: `${trek.basecampName}, ${trek.basecampState || ""}` }
          : trek.basecamp || "Kotgaon / Gaichawan Gaon",
    },

    { icon: "accommodation", label: "Accommodation Type", value: trek.accommodation || "Tents" },

    {
      icon: "pickup",
      label: "Pickup details",
      value:
        trek.pickupUrl && trek.pickupText
          ? { href: trek.pickupUrl, text: trek.pickupText }
          : trek.pickup || "Live Free Hostel, Dehradun at 6.30 AM",
    },

    {
      icon: "drop",
      label: "Dropoff details",
      value:
        trek.dropUrl && trek.dropText
          ? { href: trek.dropUrl, text: trek.dropText }
          : trek.drop || "Live Free Hostel, Dehradun at 6.00 PM",
    },

  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
        {items.map((it) => (
          <div key={it.label} className="bg-white/0">
            <InfoItem icon={it.icon} label={it.label} value={it.value} />
          </div>
        ))}
      </div>
    </div>
  );
}




export default function TrekDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const trek = treks.find((t) => t.id === id);

  if (!trek) return <div className="py-20 text-center">Trek not found</div>;

  // map trek.images to objects for slider if you like (id + image)
  const slidesForHero = trek.images.map((img, idx) => ({ id: `${id}-${idx}`, image: img }));

  return (
    <div>
      {/* hero slider using your existing component */}
      <HeroSlider slides={slidesForHero} autoplay interval={4000} centeredText={{ title: trek.title, subtitle: trek.subtitle }} />

      {/* details */}
      <main className="py-12">
        <InfoGrid trek={trek} />
        <TrekDetailPage/>
      
      </main>
    </div>
  );
}
