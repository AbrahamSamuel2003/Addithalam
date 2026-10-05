"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ImpactMetricsBar() {
  const { t } = useLanguage();
  const m = t.metrics;

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
    <section className="bg-[#1A1A1A] py-8 sm:py-12 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-[#231F20] rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-700/70 shadow-md hover:border-[#F68632]/60 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between text-center min-h-[160px]"
            >
              <div className="space-y-1.5 w-full">
                <p className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F68632] tracking-tight">
                  {metric.value}
                </p>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {metric.label}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed max-w-xs mx-auto">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
