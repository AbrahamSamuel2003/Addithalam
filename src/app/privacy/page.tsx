"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
  const { t } = useLanguage();
  const p = t.privacyPage;

  return (
    <div className="bg-[#FAF8F5]">
      <PageHero
        badge={p.heroBadge}
        title={p.heroTitle}
        subtitle={p.heroSubtitle}
        backgroundImage="/images/hero/hero-student-lab.jpg"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#EFECE8] shadow-sm space-y-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-500 hover:text-[#F68632]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{p.backToHome}</span>
          </Link>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            <p>{p.intro}</p>

            <h2 className="font-heading font-bold text-lg text-[#231F20] pt-2">
              {p.section1Title}
            </h2>
            <p>{p.section1Text}</p>

            <h2 className="font-heading font-bold text-lg text-[#231F20] pt-2">
              {p.section2Title}
            </h2>
            <p>{p.section2Text}</p>

            <h2 className="font-heading font-bold text-lg text-[#231F20] pt-2">
              {p.section3Title}
            </h2>
            <p>{p.section3Text}</p>

            <h2 className="font-heading font-bold text-lg text-[#231F20] pt-2">
              {p.section4Title}
            </h2>
            <p>{p.section4Text}</p>

            <h2 className="font-heading font-bold text-lg text-[#231F20] pt-2">
              {p.section5Title}
            </h2>
            <p>{p.section5Text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
