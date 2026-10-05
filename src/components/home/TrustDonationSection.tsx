"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, HeartHandshake, ArrowRight, FileCheck, CheckCircle2 } from "lucide-react";
import { trustData } from "@/data/trustData";
import { useLanguage } from "@/context/LanguageContext";

export default function TrustDonationSection() {
  const { t } = useLanguage();
  const td = t.trustDonation;

  return (
    <section className="py-12 sm:py-16 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Trust Standards & Governance */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#231F20] text-[#F68632] text-xs font-bold border border-slate-700">
              <ShieldCheck className="w-4 h-4" />
              <span>{td.badge}</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight tracking-tight">
              {td.title}
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              {td.desc}
            </p>

            <div className="space-y-3 pt-2">
              {trustData.taxExemptions.map((item) => (
                <div
                  key={item.section}
                  className="p-4 rounded-xl bg-[#231F20] border border-slate-700 space-y-1"
                >
                  <div className="flex items-center space-x-2 text-[#F68632] font-bold text-sm">
                    <FileCheck className="w-4 h-4 shrink-0" />
                    <span>{item.section}</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Giving Card with Presets */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-white text-slate-900 shadow-2xl border border-slate-200 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#F68632] uppercase tracking-wider">
                  <HeartHandshake className="w-4 h-4" />
                  <span>{td.cardSubtitle}</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-[#231F20]">
                  {td.cardTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {td.cardSubtitle}
                </p>
              </div>

              {/* Preset Impact Tiers */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl border border-[#EFECE8] bg-[#FAF8F5] text-center space-y-1">
                  <span className="font-heading font-extrabold text-lg text-[#231F20] block">
                    ₹1,000
                  </span>
                  <span className="text-[11px] text-slate-600 font-medium block">
                    {td.tier1Label}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl border-2 border-[#F68632] bg-[#FFF2E7] text-center space-y-1">
                  <span className="font-heading font-extrabold text-lg text-[#F68632] block">
                    ₹3,000
                  </span>
                  <span className="text-[11px] text-[#231F20] font-bold block">
                    {td.tier2Label}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl border border-[#EFECE8] bg-[#FAF8F5] text-center space-y-1">
                  <span className="font-heading font-extrabold text-lg text-[#231F20] block">
                    ₹5,000
                  </span>
                  <span className="text-[11px] text-slate-600 font-medium block">
                    {td.tier3Label}
                  </span>
                </div>
              </div>

              {/* Value Checks */}
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F68632] shrink-0" />
                  <span>{td.check1}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F68632] shrink-0" />
                  <span>{td.check2}</span>
                </div>
              </div>

              {/* Governance & Transparency Action */}
              <div className="pt-3">
                <Link
                  href="/about"
                  className="flex items-center justify-center space-x-2 w-full py-3.5 rounded-xl bg-[#231F20] text-white font-bold text-sm hover:bg-black active:scale-[0.98] transition-all shadow-sm group"
                >
                  <span>{td.trustLink}</span>
                  <ArrowRight className="w-4 h-4 text-[#F68632] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
