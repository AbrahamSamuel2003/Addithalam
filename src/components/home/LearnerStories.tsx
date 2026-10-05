"use client";

import React from "react";
import Link from "next/link";
import { learnerStories } from "@/data/impactData";
import { Quote, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LearnerStories() {
  const { t } = useLanguage();
  const s = t.stories;

  return (
    <section className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#EFECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-bold text-[#F68632] tracking-widest uppercase">
            {s.badge}
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#231F20] tracking-tight">
            {s.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {s.desc}
          </p>
        </div>

        {/* Stories Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {learnerStories.map((story) => (
            <div
              key={story.id}
              className="flex flex-col justify-between rounded-2xl border border-[#EFECE8] bg-[#FAF8F5] p-7 space-y-6 hover:border-[#F68632]/50 hover:shadow-md transition-all"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#F68632] opacity-80" />
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed italic">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFECE8] space-y-1.5">
                <h4 className="font-heading font-bold text-base text-[#231F20]">
                  {story.name}
                </h4>
                <div className="flex items-center space-x-1.5 text-xs text-[#F68632] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{story.outcomeRole}</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  {story.program}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Page CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/impact"
            className="inline-flex items-center space-x-2 text-sm font-bold text-[#F68632] hover:text-[#231F20] transition-colors"
          >
            <span>{s.readAllBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
