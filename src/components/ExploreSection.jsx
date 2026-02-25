import React from "react";
import { Link } from "react-router-dom";

const exploreData = [
  {
    image: "/src/assets/1.jpg",
    title: "Wildlife",
    text: "Conservation reserves, world heritage sites and national parks teeming with varied flora and fauna - Uttarakhand has it all.",
    link: "/wildlife",
  },
  {
    image: "/src/assets/2.jpg",
    title: "Adventure",
    text: "From camping, skiing and river rafting to stargazing, trekking and bungee jumping - Uttarakhand is a heaven for thrill seekers.",
    link: "/adventure",
  },
  {
    image: "/src/assets/3.jpg",
    title: "Wellness",
    text: "Touted as the yoga capital of the world, Uttarakhand boasts a number of centres run by professionals and is known for spiritual wellness as well.",
    link: "/wellness",
  },
  {
    image: "/src/assets/4.jpg",
    title: "Spirituality",
    text: "Known as Devbhumi or land of the Gods, the state holds a prominent position in the country’s religious map.",
    link: "/spirituality",
  },
  {
    image: "/src/assets/5.jpg",
    title: "Leisure",
    text: "Uttarakhand is home to warm and friendly people whose cultures and traditions are likely to be seen or experienced anywhere else.",
    link: "/leisure",
  },
];

export default function ExploreSection() {
  return (
    <section
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/src/assets/8.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0b2e4d]/70 mix-blend-multiply" />

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold site-serif mb-12 relative inline-block">
          <span className="absolute -left-24 top-1/2 w-20 h-[2px] bg-green-500" />
          Explore Uttarakhand
          <span className="absolute -right-24 top-1/2 w-20 h-[2px] bg-green-500" />
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-10">
          {exploreData.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="group block bg-white text-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-center group-hover:text-green-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {item.text}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0b2e4d] to-transparent" />
    </section>
  );
}
