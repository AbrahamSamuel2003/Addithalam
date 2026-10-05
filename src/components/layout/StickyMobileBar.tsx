"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function StickyMobileBar() {
  const { t } = useLanguage();
  const m = t.mobileBar;

  return (
    <aside
      aria-label="Quick mobile actions"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#EFECE8] px-4 py-2.5 shadow-lg"
    >
      <div className="max-w-sm mx-auto flex items-center justify-center">
        <Link
          href="/programs"
          className="w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-xl bg-[#231F20] text-white font-bold text-sm text-center active:scale-[0.98] transition-all shadow-sm hover:bg-black"
        >
          <GraduationCap className="w-4 h-4 shrink-0 text-[#F68632]" />
          <span className="truncate">{m.joinProgram}</span>
        </Link>
      </div>
    </aside>
  );
}

