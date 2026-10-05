"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Target, Eye, Award } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.aboutPage;

  const values = [
    {
      title: a.integrityTitle,
      desc: a.integrityDesc,
    },
    {
      title: a.inclusivityTitle,
      desc: a.inclusivityDesc,
    },
    {
      title: a.innovationTitle,
      desc: a.innovationDesc,
    },
    {
      title: a.commitmentTitle,
      desc: a.commitmentDesc,
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* Immersive Hero Section with Background Image */}
      <PageHero
        badge={a.heroBadge}
        title={a.heroTitle}
        subtitle={a.heroSubtitle}
        backgroundImage="/images/audience/students-learning.jpg"
      />

      {/* Origin Story Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#EFECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#EFECE8] bg-white">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/audience/students-learning.jpg"
                    alt="Students learning at Addithalam Foundation lab in Chennai"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#F68632] uppercase tracking-widest block">
                {a.originBadge}
              </span>
              <h2 className="font-heading font-extrabold text-3xl text-[#231F20] tracking-tight">
                {a.originTitle}
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>{a.p1}</p>
                <p>{a.p2}</p>
                <p>{a.p3}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#EFECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#EFECE8] shadow-xs space-y-4">
              <div className="p-3 w-fit rounded-xl bg-[#FFF2E7] text-[#F68632]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[#231F20]">
                {a.missionTitle}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                {a.missionDesc}
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#EFECE8] shadow-xs space-y-4">
              <div className="p-3 w-fit rounded-xl bg-emerald-50 text-emerald-700">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[#231F20]">
                {a.visionTitle}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                {a.visionDesc}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#EFECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#F68632] uppercase tracking-widest block">
              {a.valuesBadge}
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#231F20] tracking-tight">
              {a.valuesTitle}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {a.valuesDesc}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-[#EFECE8] shadow-xs hover:border-[#F68632]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF2E7] text-[#F68632] flex items-center justify-center mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#231F20] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Trust Banner */}
      <section className="py-12 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center space-x-2 text-[#F68632] text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Statutory Accountability</span>
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              {a.trustBannerTitle}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {a.trustBannerDesc}
            </p>
          </div>

          <div className="flex items-center justify-center shrink-0">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-[#F68632] text-white font-bold text-sm hover:bg-[#E07418] transition-colors shadow-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
