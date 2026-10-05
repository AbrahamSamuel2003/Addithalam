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
    <section className="bg-[#231F20] text-white py-8 sm:py-10 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/60">
          {metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`pt-6 sm:pt-0 ${idx !== 0 ? "sm:pl-6 lg:pl-8" : ""}`}
            >
              <p className="font-heading font-extrabold text-3xl sm:text-4xl text-[#F68632] tracking-tight">
                {metric.value}
              </p>
              <h3 className="text-base font-bold text-white mt-1">
                {metric.label}
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
