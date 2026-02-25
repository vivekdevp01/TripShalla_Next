'use client'
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { ChevronDown } from "lucide-react";

export default function BaseHeader({ links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const logosrc = '/assets/TRIPSHALA.png';

  const navLinks = links || [
    { key: "home", label: "Home", to: "/" },
    {
      key: "packages",
      label: "PACKAGES",
      hasDropdown: true,
      subLinks: [
        { label: "Camps", to: "/packages/camp" },
        { label: "Adventure", to: "/bungee" },
        { label: "Rafting", to: "/raftings" },
      ],
    },
    { key: "gallery", label: "Gallery", to: "/gallery" },
    { key: "about", label: "About", to: "/aboutus" },
    { key: "contact", label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 z-[100] px-6 bg-white shadow-sm border-b border-slate-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20 relative">

        {/* LOGO */}
        <div className="flex-shrink-0 relative z-[110]">
          <Link href="/">
            <img src={logosrc} alt="Tripshalla" className="h-10 md:h-14 w-auto object-contain transition-transform hover:scale-105" />
          </Link>
        </div>

        {/* DESKTOP LINKS */}
        <ul className="hidden lg:flex items-center gap-8 text-[13px] font-black uppercase tracking-wider">
          {navLinks.map((l) => (
            <li
              key={l.key}
              className="relative group py-2"
              onMouseEnter={() => l.hasDropdown && setIsDropdownOpen(true)}
              onMouseLeave={() => l.hasDropdown && setIsDropdownOpen(false)}
            >
              {l.hasDropdown ? (
                <div className={`flex items-center gap-1 cursor-pointer transition-all ${isDropdownOpen ? "text-[#F7A325]" : "text-[#1A1D1F] hover:text-[#F7A325]"}`}>
                  {l.label}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </div>
              ) : (
                <Link href={l.to} className={`transition-all duration-200 ${pathname === l.to ? "text-[#F7A325]" : "text-[#1A1D1F] hover:text-[#F7A325]"}`}>
                  {l.label}
                </Link>
              )}

              {l.hasDropdown && isDropdownOpen && (
                <div className="absolute top-[100%] left-0 w-48 z-[120] pt-2" onMouseEnter={() => setIsDropdownOpen(true)}>
                  <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 py-2 overflow-hidden">
                    {l.subLinks.map((sub) => (
                      <Link key={sub.to} href={sub.to} className="block px-5 py-2.5 text-[11px] font-black tracking-widest text-[#1A1D1F] hover:bg-[#F7A325] hover:text-white transition-all duration-200 uppercase">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4 relative z-[110]">
          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-[#1A1D1F] p-2 focus:outline-none">
            <FiMenu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white text-slate-900 z-[150] shadow-2xl transform transition-transform duration-500 ease-in-out lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full p-8 pt-10">
          <div className="flex justify-between items-center mb-10">
            <span className="font-black text-[#00796B] italic text-xl tracking-tighter uppercase">tripshalla</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-slate-900">
              <FiX className="w-7 h-7" />
            </button>
          </div>

          <ul className="flex flex-col gap-5 text-lg font-black uppercase tracking-widest">
            {navLinks.map((l) => (
              <li key={l.key} className="border-b border-slate-50 pb-3">
                {l.hasDropdown ? (
                  <div className="flex flex-col gap-3">
                    <span className="text-slate-400 text-[10px] tracking-[0.2em]">{l.label}</span>
                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-[#F7A325]">
                      {l.subLinks.map((sub) => (
                        <Link key={sub.to} href={sub.to} onClick={() => setIsMenuOpen(false)} className="text-base font-black text-slate-900">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={l.to} onClick={() => setIsMenuOpen(false)} className={`block ${pathname === l.to ? "text-[#F7A325]" : "text-slate-900"}`}>
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}