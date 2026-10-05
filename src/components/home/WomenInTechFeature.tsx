"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WomenInTechFeature() {
  const { t } = useLanguage();
  const w = t.women;

  const highlights = [
    w.point1,
    w.point2,
    w.point3,
    w.point4,
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#EFECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#EFECE8] bg-white">
              <div className="aspect-[16/10] relative">
                <Image
                  src="/images/features/women-in-tech.jpg"
                  alt="South Indian women participating in coding and tech workshop at Addithalam Foundation in Chennai"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 bg-white border-t border-[#EFECE8] flex items-center justify-between text-xs text-slate-700">
                <div className="flex items-center space-x-2 font-bold text-[#231F20]">
                  <Users className="w-4 h-4 text-[#F68632]" />
                  <span>{w.cohortLabel}</span>
                </div>
                <span className="font-bold text-[#F68632]">{w.freeBadge}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFF2E7] text-[#F68632] border border-[#F68632]/30 text-xs font-bold">
              <span>{w.badge}</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#231F20] leading-tight tracking-tight">
              {w.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {w.desc}
            </p>

            <div className="space-y-3 pt-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start space-x-3 text-sm text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#F68632] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/programs/women-in-tech"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#F68632] text-white font-bold text-sm hover:bg-[#E07418] transition-colors shadow-xs"
              >
                <span>{w.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-white text-slate-700 border border-slate-300 font-semibold text-sm hover:bg-slate-50 transition-colors"
              >
                <span>{w.counselorBtn}</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
