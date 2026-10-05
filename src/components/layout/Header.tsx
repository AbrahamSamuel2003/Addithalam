"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Globe, Menu, X, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // If mobile menu is open, ensure header stays visible
      if (mobileMenuOpen) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Hide when scrolling DOWN past 80px; reveal when scrolling UP
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navT = t.nav;

  const navLinks = [
    { href: "/", label: navT.home },
    { href: "/about", label: navT.about },
    { href: "/programs", label: navT.programs },
    { href: "/impact", label: navT.impact },
    { href: "/team", label: navT.team },
    { href: "/contact", label: navT.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#EFECE8] py-2.5"
          : "bg-[#FAF8F5] border-b border-[#EFECE8] py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Official Brand Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 focus:outline-none"
          aria-label="Addithalam Foundation Home"
        >
          <div className="relative h-10 sm:h-11 w-44 sm:w-48">
            <Image
              src="/images/logo/addithalam-logo.png"
              alt="Addithalam Foundation"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 640px) 176px, 192px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#F68632] bg-[#FFF2E7] font-bold"
                    : "text-[#231F20] hover:text-[#F68632] hover:bg-black/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Language Switch & Donate Button */}
        <div className="hidden lg:flex items-center space-x-3">
          {/* Language Toggle Button */}
          <button
            onClick={toggleLang}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-[#231F20] border border-slate-300 bg-white hover:bg-slate-50 transition-colors focus:outline-none"
            title="Switch Language / மொழியை மாற்றவும்"
            aria-label="Switch between English and Tamil"
          >
            <Globe className="w-3.5 h-3.5 text-[#F68632]" />
            <span>{lang === "en" ? "தமிழ்" : "English"}</span>
          </button>

          {/* Tax-Exempt Donate CTA */}
          <Link
            href="/donate"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#F68632] text-white text-sm font-bold hover:bg-[#E07418] active:scale-[0.98] transition-all shadow-xs"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>{navT.donate}</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 text-xs font-semibold text-[#231F20] border border-slate-300 rounded bg-white"
            aria-label="Switch Language"
          >
            {lang === "en" ? "தமிழ்" : "EN"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-[#231F20] hover:bg-slate-100 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 z-50">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "text-[#F68632] bg-[#FFF2E7] font-bold"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <Link
              href="/donate"
              className="flex items-center justify-center space-x-2 w-full py-3 rounded-lg bg-[#F68632] text-white font-bold text-center shadow-xs"
            >
              <HeartHandshake className="w-5 h-5" />
              <span>{navT.donate}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
