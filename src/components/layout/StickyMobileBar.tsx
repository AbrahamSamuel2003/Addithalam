"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function StickyMobileBar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const m = t.mobileBar;

  if (pathname === "/donate") {
    return null;
  }

  return (
    <aside
      aria-label="Quick mobile actions"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#EFECE8] px-3 py-2.5 shadow-lg"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <Link
          href="/programs"
          className="flex items-center justify-center space-x-1.5 py-3 px-3 rounded-lg bg-[#231F20] text-white font-bold text-xs text-center active:scale-[0.98] transition-all shadow-xs"
        >
          <GraduationCap className="w-4 h-4 shrink-0 text-[#F68632]" />
          <span className="truncate">{m.joinProgram}</span>
        </Link>
        <Link
          href="/donate"
          className="flex items-center justify-center space-x-1.5 py-3 px-3 rounded-lg bg-[#F68632] text-white font-bold text-xs text-center active:scale-[0.98] transition-all shadow-xs"
        >
          <HeartHandshake className="w-4 h-4 shrink-0" />
          <span className="truncate">{m.donate}</span>
        </Link>
      </div>
    </aside>
  );
}
