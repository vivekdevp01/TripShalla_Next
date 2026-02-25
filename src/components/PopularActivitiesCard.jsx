import React from "react";
import { Star, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const PopularActivitiesCard = ({
  name,
  category,
  price,
  rating,
  image,
  route,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(route)}
      className="group relative cursor-pointer rounded-3xl overflow-hidden
      shadow-xl hover:shadow-2xl transition-all duration-500
      transform hover:-translate-y-3"
    >
      {/* IMAGE */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Smooth Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90" />

        {/* Subtle Shine Effect */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
          translate-x-[-100%] group-hover:translate-x-[100%]
          transition duration-1000 ease-in-out"
        />

        {/* CATEGORY BADGE */}
        <div
          className="absolute top-5 left-5 bg-orange-500/95 text-white
          text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm"
        >
          {category}
        </div>

        {/* RATING BADGE */}
        <div
          className="absolute top-5 right-5 bg-white/90 backdrop-blur-md
          px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md"
        >
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-semibold text-slate-800">{rating}</span>
        </div>

        {/* BOTTOM GLASS PANEL */}
        <div
          className="absolute bottom-0 w-full p-4
          backdrop-blur-md bg-white/10 border-t border-white/20"
        >
          <h3 className="text-2xl font-bold text-white drop-shadow-lg">
            {name}
          </h3>

          <div className="flex items-center justify-between mt-4">
            <p className="text-white text-lg font-semibold">
              <span className="text-sm opacity-80">Starting </span>
              {price}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm group-hover:text-orange-300 transition">
              Explore
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Soft Border Glow */}
      <div
        className="absolute inset-0 rounded-3xl border border-white/10
        group-hover:border-orange-400/40 transition duration-500 pointer-events-none"
      />
    </div>
  );
};

export default PopularActivitiesCard;
