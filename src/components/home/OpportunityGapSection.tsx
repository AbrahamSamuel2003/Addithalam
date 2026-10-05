"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function OpportunityGapSection() {
  const { t } = useLanguage();
  const o = t.opportunityGap;

  const steps = [
    {
      stage: "01",
      title: o.step1Title,
      description: o.step1Desc,
    },
    {
      stage: "02",
      title: o.step2Title,
      description: o.step2Desc,
    },
    {
      stage: "03",
      title: o.step3Title,
      description: o.step3Desc,
    },
    {
      stage: "04",
      title: o.step4Title,
      description: o.step4Desc,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#EFECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Problem & Mission */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white text-[#F68632] text-xs font-bold border border-[#EFECE8]">
              <span>{o.badge}</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#231F20] leading-tight tracking-tight">
              {o.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {o.desc}
            </p>

            <div className="p-5 rounded-xl bg-white border border-[#EFECE8] shadow-xs space-y-2">
              <p className="text-sm font-bold text-[#231F20]">
                {o.commitmentTitle}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {o.commitmentDesc}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-sm font-bold text-[#F68632] hover:text-[#231F20] transition-colors"
              >
                <span>{o.storyLink}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4-Stage Bridge Diagram */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {steps.map((step) => (
                <div
                  key={step.stage}
                  className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#EFECE8] shadow-xs hover:border-[#F68632]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon on Top */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#FFF2E7] text-[#F68632] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#F68632] group-hover:text-white transition-all duration-300 shadow-xs">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <span className="font-heading font-extrabold text-xs px-2.5 py-1 rounded-full bg-[#FAF8F5] text-slate-500 border border-[#EFECE8]">
                        Stage {step.stage}
                      </span>
                    </div>

                    {/* Bold Title */}
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#231F20] mb-2 group-hover:text-[#F68632] transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
