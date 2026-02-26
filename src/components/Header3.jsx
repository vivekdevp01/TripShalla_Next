'use client'
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

function NavLink({ to, children, className, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === to;
  const resolvedClass = typeof className === "function" ? className({ isActive }) : className;
  return (
    <Link href={to} className={resolvedClass} onClick={onClick}>
      {children}
    </Link>
  );
}

const Header3 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logosrc = '/assets/TRIPSHALA.png';

  const item = {
    key: "packages",
    label: "Packages",
    hasDropdown: true,
    subLinks: [
      { label: "Camps", to: "/packages/camp" },
      { label: "Adventure", to: "/bungee" },
      { label: "Rafting", to: "/raftings" },
    ],
  };

  const navLinks = [
    { label: "HOME", to: "/" },
    { label: "GALLERY", to: "/gallery" },
    { label: "ABOUT", to: "/aboutus" },
    { label: "CONTACT", to: "/contact" },
  ];

  return (
    <nav className="w-full bg-white border-b border-slate-100 px-6 py-2 sticky top-0 z-[100] shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto h-16">

        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="flex items-center gap-3 group">
           <Image src={logosrc} alt="Tripshalla Logo" width={120} height={48} className="object-contain transition-transform group-hover:scale-105" />
            <span className="text-2xl font-black text-[#F7A325] tracking-tighter uppercase italic">Tripshalla</span>
          </Link>
        </div>

        <ul className="hidden md:flex items-center mx-auto space-x-8 text-[#1A1D1F] font-bold text-[13px] uppercase tracking-wider">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-[#F7A325]" : "hover:text-[#F7A325] transition-colors"}>
              Home
            </NavLink>
          </li>

          <li
            className="relative flex items-center gap-1 cursor-pointer transition-colors"
            onMouseEnter={() => setIsDropdownOpen && setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen && setIsDropdownOpen(false)}
          >
            <span className={`transition-colors ${isDropdownOpen ? "text-[#F7A325]" : "hover:text-[#F7A325]"}`}>{item.label}</span>
            <FiChevronDown className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-[#F7A325]" : ""}`} />

            {isDropdownOpen && (
              <div className="absolute top-full left-0 pt-4 w-48 z-50">
                <div className="bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden py-2">
                  {item.subLinks.map((sub, index) => (
                    <NavLink key={index} to={sub.to} className={({ isActive }) => `block px-6 py-3 text-[12px] font-bold transition-colors uppercase ${isActive ? "bg-orange-50 text-[#F7A325]" : "text-slate-600 hover:bg-slate-50 hover:text-[#F7A325]"}`}>
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </li>

          {navLinks.slice(1).map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={({ isActive }) => isActive ? "text-[#F7A325]" : "hover:text-[#F7A325] transition-colors"}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#1A1D1F] text-2xl p-2 focus:outline-none">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsMenuOpen(false)} />

      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[110] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-black text-[#F7A325] uppercase italic">Tripshalla</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-2xl text-[#1A1D1F]"><FiX /></button>
          </div>

          <ul className="flex flex-col space-y-6 text-[#1A1D1F] font-bold uppercase tracking-wider text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "text-[#F7A325]" : "hover:text-[#F7A325]"}>
                  {link.label}
                </NavLink>
              </li>
            ))}

            <li className="pt-4 border-t border-slate-100">
              <p className="text-[10px] text-slate-400 mb-4 tracking-[0.2em]">OUR PACKAGES</p>
              <div className="flex flex-col space-y-4 pl-2">
                {item.subLinks.map((sub) => (
                  <NavLink key={sub.to} to={sub.to} onClick={() => setIsMenuOpen(false)} className="text-[#00796B] hover:text-[#F7A325] capitalize">
                    {sub.label}
                  </NavLink>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header3;