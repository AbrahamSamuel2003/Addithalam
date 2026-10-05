"use client";

import React from "react";
import { Compass, Code2, Layers, UserCheck, FileCheck, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LearningJourney() {
  const { t } = useLanguage();
  const j = t.journey;

  const steps = [
    {
      step: "01",
      title: j.step1Title,
      desc: j.step1Desc,
      icon: Compass
    },
    {
      step: "02",
      title: j.step2Title,
      desc: j.step2Desc,
      icon: Code2
    },
    {
      step: "03",
      title: j.step3Title,
      desc: j.step3Desc,
      icon: Layers
    },
    {
      step: "04",
      title: j.step4Title,
      desc: j.step4Desc,
      icon: UserCheck
    },
    {
      step: "05",
      title: j.step5Title,
      desc: j.step5Desc,
      icon: FileCheck
    },
    {
      step: "06",
      title: j.step6Title,
      desc: j.step6Desc,
      icon: Rocket
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#EFECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl space-y-3 text-center sm:text-left">
          <p className="text-xs font-bold text-[#F68632] tracking-widest uppercase">
            {j.badge}
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#231F20] tracking-tight">
            {j.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {j.desc}
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#EFECE8] shadow-xs hover:border-[#F68632]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon on Top with Step Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF2E7] text-[#F68632] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#F68632] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-heading font-extrabold text-xs px-2.5 py-1 rounded-full bg-[#FAF8F5] text-slate-500 border border-[#EFECE8]">
                      {item.step}
                    </span>
                  </div>

                  {/* Bold Title */}
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#231F20] mb-2 group-hover:text-[#F68632] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
