import React from "react";

export default function GroupOfferBanner({ onClick }) {
  return (
    <section className="w-full py-6">
      <div className="max-w-6xl mx-auto px-2">
        <div
          className="relative overflow-hidden rounded-2xl
                     bg-gradient-to-r from-orange-400 to-orange-300
                     grid grid-cols-1 md:grid-cols-3"
        >
          {/* LEFT CONTENT */}
          <div className="p-10 md:col-span-2 text-white">
            <h2 className="text-xl md:text-2xl font-extrabold leading-tight">
              Bigger Group? Get special offers up to <br />
              <span className="text-white/90">50% Off!</span>
            </h2>

            <p className="mt-4 text-white/90 max-w-lg">
              We create unforgettable adventures, customised for your group.
            </p>

            <button
              onClick={onClick}
              className="mt-6 bg-white text-orange-600
                         px-8 py-3 rounded-xl font-bold
                         hover:scale-105 transition"
            >
              Get A Callback
            </button>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1521334884684-d80222895322"
              className="absolute inset-0 w-full h-full object-cover
                         clip-path-[polygon(18%_0,100%_0,100%_100%,0_100%)]"
              alt="Group Travel"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
