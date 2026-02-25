import React from "react";

const teamMembers = [
  {
    name: "Vivek Pundir",
    role: " Developer",
    image: "/assets/dev2.jpeg",
  },
  {
    name: "Harshit Rawat",
    role: "Developer",
    image: "/assets/dev1.jpeg",
  },
  {
    name: "Aditya Pundir",
    role: "Content & Social Media",
    image: "/src/assets/team/abhinav.jpg",
  },
  {
    name: "Sahil Bhatt",
    role: "Content & Social Media",
    image: "/src/assets/team/tushar.jpg",
  },
  {
    name: "Gourav Kerni",
    role: "Content & Social Media",
    image: "/assets/dev4.PNG",
  },
  {
    name: "Shubham Bisht",
    role: "Content & Social Media",
    image: "/assets/dev3.jpeg",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-amber-500 font-semibold uppercase tracking-wide">
            Our Team
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-emerald-900">
            The People Behind Tripshalla
          </h2>
          <p className="mt-4 text-slate-600">
            A close-knit team of engineers, creators, and trekkers building
            genuine travel experiences.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="group text-center">
              {/* Avatar */}
              <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden shadow-sm border border-slate-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-emerald-900/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium px-3">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="mt-4 font-semibold text-slate-800">
                {member.name}
              </h3>
              <p className="text-sm text-emerald-700">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="mt-20 text-center text-emerald-800 font-medium text-lg">
          Different skills. One shared love for the mountains.
        </p>
      </div>
    </section>
  );
}
