"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { navigation } from "@/lib/data";
import { siteConfig } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      <div className="bg-primary-900 text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone size={12} /> {siteConfig.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={12} /> {siteConfig.email}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
              Instagram
            </a>
            <Link href="/admin" className="hover:text-gold-400 transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-gold-400">
                <Image src="/images/MPTC1.jpeg" alt="MPTC Logo" width={48} height={48} className="object-cover w-full h-full" />
              </div>
              <div className="hidden sm:block">
                <div className="font-poppins font-bold text-primary-900 text-sm md:text-base leading-tight">
                  Model Polytechnic College
                </div>
                <div className="text-gold-500 text-xs font-semibold">Karunagappally</div>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-0.5">
              {navigation.slice(0, 10).map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-2.5 py-2 text-sm font-medium text-slate-700 hover:text-primary-500 transition-colors rounded-lg hover:bg-primary-50"
                    >
                      {item.label}
                      <ChevronDown size={14} className="opacity-60" />
                    </Link>
                    <div
                      className={cn(
                        "absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200",
                        openDropdown === item.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-slate-600 hover:text-primary-500 hover:bg-primary-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-2.5 py-2 text-sm font-medium text-slate-700 hover:text-primary-500 transition-colors rounded-lg hover:bg-primary-50"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/admissions" className="hidden md:inline-flex btn-gold text-sm py-2 px-4">
                Apply Now
              </Link>
              <button
                className="xl:hidden p-2 text-primary-900"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 max-h-[70vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-2.5 px-3 font-medium text-slate-700 hover:bg-primary-50 rounded-lg"
                    onClick={() => !item.children && setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 px-3 text-sm text-slate-500 hover:text-primary-500"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
