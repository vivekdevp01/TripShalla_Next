import React from "react";
import PopularActivitiesCard from "./PopularActivitiesCard";

const PopularActivitiesCardGrid = () => {
  const activities = [
    {
      id: "rafting",
      name: "River Rafting",
      category: "Adventure",
      price: "₹999",
      rating: 4.8,
      image: "/assets/36.jpg",
      route: "/raftings",
    },
    {
      id: "bungee",
      name: "Bungee Jumping",
      category: "Extreme Adventure",
      price: "₹3,499",
      rating: 4.9,
      image: "/assets/20.jpg",
      route: "/bungee",
    },
    // {
    //   id: "camping",
    //   name: "Camping",
    //   category: "Stay Experience",
    //   price: "₹1,499",
    //   rating: 4.7,
    //   image: "/src/assets/9.jpg",
    //   route: "/camping",
    // },
    {
      id: "scooty",
      name: "Scooty Rental",
      category: "Local Travel",
      price: "₹499",
      rating: 4.6,
      image: "/assets/65.jpg",
      route: "/guide",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Top Adventure Activities
        </h2>
        <p className="text-slate-500 mt-3 text-sm md:text-base">
          Book the most thrilling experiences in Rishikesh
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {activities.map((item) => (
          <PopularActivitiesCard
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            rating={item.rating}
            image={item.image}
            route={item.route}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularActivitiesCardGrid;
