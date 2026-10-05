"use client";

import React from "react";
import Link from "next/link";
import { learnerStories } from "@/data/impactData";
import { Quote, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { useLanguage } from "@/context/LanguageContext";

export default function ImpactPage() {
  const { t } = useLanguage();
  const im = t.impactPage;
  const m = t.metrics;
  const s = t.stories;

  const metrics = [
    {
      value: "500+",
      label: m.studentsTrained,
      description: m.studentsTrainedDesc,
    },
    {
      value: "40%",
      label: m.womenEmpowered,
      description: m.womenEmpoweredDesc,
    },
    {
      value: "25+",
      label: m.mentorsCount,
      description: m.mentorsCountDesc,
    },
    {
      value: "100%",
      label: m.freeAccess,
      description: m.freeAccessDesc,
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* Immersive PageHero with Background Image */}
      <PageHero
        badge={im.heroBadge}
        title={im.heroTitle}
        subtitle={im.heroSubtitle}
        backgroundImage="/images/features/women-in-tech.jpg"
      />

      {/* Verified Metrics Strip */}
      <section className="py-8 sm:py-10 bg-white border-b border-[#EFECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((item) => (
              <div key={item.label} className="space-y-1">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#F68632]">
                  {item.value}
                </span>
                <h3 className="font-bold text-base text-[#231F20]">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Depth Stories */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold text-[#F68632] uppercase tracking-widest block">
            {im.caseStudiesBadge}
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-[#231F20]">
            {im.caseStudiesTitle}
          </h2>
          <p className="text-base text-slate-600">
            {im.caseStudiesDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learnerStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl border border-[#EFECE8] p-7 shadow-xs hover:border-[#F68632]/50 hover:shadow-lg transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#F68632] opacity-80" />
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed italic">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#EFECE8]">
                <div>
                  <h4 className="font-heading font-bold text-base text-[#231F20]">
                    {story.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {story.background}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#FFF2E7] border border-[#F68632]/30 space-y-1 text-xs">
                  <span className="font-bold text-[#231F20] block">
                    {s.verifiedOutcome}:
                  </span>
                  <div className="flex items-center space-x-1.5 text-[#F68632] font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{story.outcomeRole} ({story.companyCategory})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-14 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading font-extrabold text-3xl text-white">
            {im.ctaTitle}
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            {im.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/donate"
              className="px-6 py-3.5 rounded-xl bg-[#F68632] text-white font-bold text-sm hover:bg-[#E07418] transition-colors"
            >
              {im.donateBtn}
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-white/10 text-white font-bold text-sm border border-white/20 hover:bg-white/20 transition-colors"
            >
              {im.contactBtn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
