import React from "react";
import VideoModal from "./VideoModal";
import PhotoGallery from "./PhotoGallery";
import TreksByCategories from "./TreksByCategories";

// SAFER ASSET HANDLING (optional but recommended)
// If you’re using Vite/CRA, import images instead of /src paths.
// Or move them to /public and reference as "/images/…".
import img1 from "/assets/1.jpg";
import img2 from "/assets/2.jpg";
import img3 from "/assets/3.jpg";
import img4 from "/assets/4.jpg";
import img5 from "/assets/5.jpg";
import img6 from "/assets/6.jpg";
import thumb from "/assets/9.jpg";

const categories = [
  // … your data (unchanged) …
   {
    key: "month",
    title: "Treks by Month",
    icon: "calendar",
    items: [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December",
    ].map((m) => ({ label: m, to: `/treks?month=${m.toLowerCase()}` })),
  },
  {
    key: "difficulty",
    title: "Treks by Difficulty",
    icon: "gauge",
    items: [
      "Easy","Easy - Moderate","Moderate","Moderate - Difficult","Difficult",
    ].map((d) => ({ label: d, to: `/treks?difficulty=${encodeURIComponent(d)}` })),
  },
  {
    key: "experience",
    title: "Treks by Experience",
    icon: "medal",
    items: [
      "Family Treks","Stargazing Treks","Senior Treks","Adventure Therapy","Summer Camps",
    ].map((x) => ({ label: x, to: `/treks?experience=${encodeURIComponent(x)}` })),
  },
  {
    key: "season",
    title: "Treks by Season",
    icon: "sun",
    items: ["Spring","Summer","Monsoon","Autumn","Winter"].map((s) => ({
      label: s, to: `/treks?season=${s.toLowerCase()}`
    })),
  },
  {
    key: "duration",
    title: "Treks by Duration",
    icon: "clock",
    items: ["2 days","3 days","4 days","5 days","6 days","7+ days"].map((d) => ({
      label: d, to: `/treks?duration=${encodeURIComponent(d)}`
    })),
  },
  {
    key: "region",
    title: "Treks by Region",
    icon: "pin",
    items: [
      "Uttarakhand","Himachal Pradesh","Lahaul and Spiti","Jammu & Kashmir","Sikkim",
      "West Bengal","Chhattisgarh","Madhya Pradesh","Karnataka",
      "Tamil Nadu","Nepal","Georgia","Indonesia",
    ].map((r) => ({ label: r, to: `/treks?region=${encodeURIComponent(r)}` })),
  }
];

const trek = {
  photos: [
    { id: "kk1", url: img1, caption: "Trek to Kedarkantha Summit during winter" },
    { id: "kk2", url: img2, caption: "Snow-covered pine forests near Juda Ka Talab" },
    { id: "kk3", url: img3, caption: "Morning view from the basecamp at Kotgaon" },
    { id: "kk4", url: img4, caption: "Trekkers enjoying sunset at the campsite" },
    { id: "kk5", url: img5, caption: "Local villagers preparing for winter trek season" },
    { id: "kk6", url: img6, caption: "Kedarkantha peak after fresh snowfall" },
  ],
};

export default function TrekDetailPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* GRID: article + sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Article */}
        <article className="lg:col-span-8 space-y-6 text-gray-800 leading-relaxed">
          <header>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              The finest summit climb for beginners
            </h1>
          </header>

          <p>
            Kedarkantha is one of the most iconic summit treks in India. It provides the perfect
            opportunity for beginners to feel the thrill of climbing a mountain peak.
          </p>
          <p>
            We can hardly think of any other peak trek that can be attempted by beginners. Maybe
            Deoriatal Chandrashila comes close. But it is more about the views from the summit and
            the forests leading to it. The final push, being on a pilgrim trail, doesn’t feel as wild
            and raw as it is at Kedarkantha.
          </p>

          {/* Video inside article flow — no extra containers */}
          <VideoModal
            thumbnail={thumb}                      // or "/images/kedarkantha-thumb.jpg"
            videoUrl="https://www.youtube.com/watch?v=IISwqPtMd8o"
            className="mt-2"
          />

          <p>
            You catch your first glimpse of the Kedarkantha peak right at the start of the trek.
            Soon after, the trail leads you into a beautiful forest that briefly hides the summit
            from view. As you emerge from the forest, the peak looms over you again. It is from the
            Bhoja Dadi campsite that the steep climb to the summit begins. It’s a tough ascent,
            especially in winter snow. But it feels more thrilling than daunting—a challenge that
            draws you in rather than holds you back. Reaching the summit is a deeply rewarding
            experience.
          </p>

          <p>
            In winter, when most Himalayan summits are shut down by heavy snow, Kedarkantha remains
            open. It’s a one-of-a-kind chance to summit a Himalayan peak in peak winter. That’s what
            makes it special. That’s what makes Kedarkantha India’s most popular winter trek.
          </p>

          <p>
            In spring, the forests above Kotgaon burst to life with blooming rhododendrons and
            birdsong. By summer, the clearings at Khujai and Bhoja Dadi, along with the surrounding
            forests, turn lush and green. As the season moves on, wildflowers start to show up along
            the trail. In autumn, the whole landscape changes again.
          </p>
        </article>

        {/* Right: Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg shadow p-5">
            <h2 className="text-lg font-semibold text-gray-900">Trek Fee</h2>
            <p className="text-3xl font-bold mt-2">₹ 11,450</p>
            <ul className="mt-2 text-sm text-gray-700 space-y-1">
              <li>+ 5% GST</li>
              <li>+ ₹180 Trek Insurance</li>
              <li>+ ₹2,200 for transport to and from basecamp</li>
            </ul>

            <div className="mt-3 border-t border-yellow-200 pt-3">
              <p className="text-sm font-medium text-gray-800 mb-1">Optional Additions</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>₹750 Indiahikes Shield 🛡️</li>
                <li>₹1,600 Backpack Offloading 🎒</li>
              </ul>
            </div>

            <div className="mt-3 text-xs text-gray-600">
              Central Govt. Employees can avail Special Casual Leave for this trek.{" "}
              <a href="#" className="text-blue-700 underline">Find out how.</a>
            </div>

            <div className="mt-3 text-xs text-blue-700 space-x-2">
              <a href="#">Inclusions & Exclusions</a>•
              <a href="#">Cancellation Policy</a>•
              <a href="#">Terms & Conditions</a>•
              <a href="#">Scholarships & Waivers</a>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
            <h3 className="font-semibold mb-3 text-gray-800 text-sm">
              SELECT DATE TO REGISTER – 2025
            </h3>
            <select className="w-full border rounded px-3 py-2 mb-3 text-sm">
              <option>November 2025 — Clearest Views</option>
              <option>December 2025</option>
            </select>

            <h3 className="font-semibold mb-3 text-gray-800 text-sm">
              SELECT DATE TO REGISTER – 2026
            </h3>
            <select className="w-full border rounded px-3 py-2 text-sm">
              <option>January 2026 — Big Snow Season</option>
              <option>February 2026 — Big Snow Season</option>
              <option>March 2026</option>
              <option>April 2026</option>
              <option>Family Trek with Children</option>
            </select>
          </div>
        </aside>
      </div>

      {/* Full-width sections below grid */}
      <div className="mt-12 space-y-12">
        <PhotoGallery photos={trek.photos} />
        <TreksByCategories categories={categories} />
      </div>
    </section>
  );
}
