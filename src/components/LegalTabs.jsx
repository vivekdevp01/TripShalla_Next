'use client'; // Required for usePathname

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Copyright Policies", path: "/copyright" },
];

export default function LegalTabs() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex gap-8 text-sm font-medium h-14 items-center">
          {tabs.map((tab) => {
            // Check if the current path matches the tab path
            const isActive = pathname === tab.path;

            return (
              <Link key={tab.path} href={tab.path} className="relative">
                <div
                  className={`relative pb-1 transition-colors ${
                    isActive
                      ? "text-orange-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.name}

                  {/* Active underline */}
                  <span
                    className={`absolute left-0 -bottom-[18px] h-[2px] w-full transition-all ${
                      isActive ? "bg-orange-500" : "bg-transparent"
                    }`}
                  />
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
