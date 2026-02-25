'use client'
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

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

export default function Header({
  links,
  variant = "default",
  title = "ABOUT US",
  subtitle,
  badges = [],
  bgImage = "/assets/15.png",
}) {
  const logosrc = '/assets/Mountains.png'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = links || [
    { key: "home", label: "HOME", to: "/" },
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
    { key: "blog", label: "GALLERY", to: "/gallery" },
    { key: "about", label: "ABOUT", to: "/aboutus" },
    { key: "contact", label: "CONTACT", to: "/contact" },
  ];

  return (
    <header className="relative w-full h-[58vh] sm:h-[65vh] md:h-[80vh] overflow-hidden font-sans">
      {/* 1. HERO BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

      {/* 2. NAVIGATION BAR */}
      <nav className="absolute top-6 left-0 right-0 z-40 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl px-6 py-3 flex items-center relative h-16 md:h-20">
          {/* LEFT: Desktop Links */}
          <div className="hidden md:flex flex-1 items-center">
            <ul className="flex gap-6 items-center text-sm">
              {navLinks.map((item) => (
                <li
                  key={item.key}
                  className="relative group cursor-pointer py-2"
                  onMouseEnter={() => item.hasDropdown && setIsDropdownOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsDropdownOpen(false)}
                >
                  {item.hasDropdown ? (
                    <div className="flex items-center gap-1 text-slate-700 text-sm font-bold transition-colors group-hover:text-amber-500">
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                  ) : (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `text-sm font-bold ${isActive ? "text-amber-500" : "text-slate-700 hover:text-amber-500"}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}

                  {item.hasDropdown && isDropdownOpen && (
                    <div className="absolute top-full left-0 w-48 bg-white border border-slate-100 rounded-xl shadow-2xl py-2 z-[60]">
                      {item.subLinks.map((sub) => (
                        <NavLink
                          key={sub.to}
                          to={sub.to}
                          className="block px-4 py-2.5 text-xs font-black uppercase text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CENTER: LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 z-50">
            <div className="bg-white rounded-b-[70%] flex items-center justify-center w-36 md:w-44 h-20 md:h-24 border-t-0">
              <Link href="/">
                <img
                  src={logosrc}
                  alt="Travlla Logo"
                  className="h-14 md:h-18 w-auto object-contain"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT: Socials & Hamburger */}
          <div className="flex-1 flex justify-end items-center ml-auto">
            <div className="hidden md:flex items-center gap-4 text-slate-700 mr-2">
              <Link href="#" className="hover:text-amber-500 transition-colors">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-amber-500 transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 5.92c-.62.28-1.28.47-1.98.55a3.47 3.47 0 001.52-1.92 6.93 6.93 0 01-2.2.84 3.45 3.45 0 00-5.88 3.14A9.79 9.79 0 013 4.87a3.45 3.45 0 001.07 4.6c-.5-.02-.98-.15-1.4-.38v.04a3.45 3.45 0 002.76 3.38c-.48.13-.99.13-1.48.05a3.46 3.46 0 003.22 2.4A6.92 6.92 0 012 18.58a9.76 9.76 0 005.29 1.55c6.34 0 9.81-5.25 9.81-9.8v-.45c.67-.49 1.26-1.1 1.72-1.79-.62.28-1.29.47-1.98.55z" />
                </svg>
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-100 hover:bg-slate-100 transition-all"
              aria-label="Toggle Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* 3. MOBILE SIDEBAR MENU */}
      <div className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ${isMobileMenuOpen ? "visible" : "invisible"}`}>
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-6 flex justify-between items-center border-b">
            <span className="font-black text-emerald-800 italic text-xl">Tripshalla</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-900">
              <X size={20} />
            </button>
          </div>
          <div className="p-8">
            <ul className="flex flex-col gap-8">
              {navLinks.map((item) => (
                <li key={item.key}>
                  {item.hasDropdown ? (
                    <div className="space-y-4">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                      <div className="flex flex-col gap-4 pl-4 border-l-2 border-amber-500">
                        {item.subLinks.map((sub) => (
                          <NavLink
                            key={sub.to}
                            to={sub.to}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-bold text-slate-800 hover:text-amber-500"
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={item.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-2xl font-black block ${isActive ? "text-amber-500" : "text-slate-900 hover:text-amber-500"}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 4. HERO CONTENT */}
      <div className="relative z-20 h-full flex items-center px-6 pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            {variant === "tour" ? (
              <div className="pt-10">
                <h1 className="text-3xl md:text-5xl xl:text-6xl font-black text-white leading-[1.1] drop-shadow-2xl">
                  {title.split("–")[0]}
                  <br />
                  <span className="text-white/90">– {title.split("–")[1]}</span>
                </h1>
                {subtitle && (
                  <p className="mt-4 text-white/80 text-sm md:text-lg font-medium">{subtitle}</p>
                )}
                <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
                  {badges.map((b, i) => (
                    <span key={i} className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-sm">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white drop-shadow-2xl">
                {title}
              </h1>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}