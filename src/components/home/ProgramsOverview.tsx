"use client";

import React, { useState } from "react";
import Link from "next/link";
import { programsData } from "@/data/programsData";
import { ArrowRight, CheckCircle2, Clock, MapPin, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProgramsOverview() {
  const { t } = useLanguage();
  const pO = t.programsOverview;
  const [activeId, setActiveId] = useState(programsData[0].id);
  const activeProgram = programsData.find((p) => p.id === activeId) || programsData[0];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#EFECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#EFECE8]">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-bold text-[#F68632] tracking-widest uppercase">
              {pO.badge}
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#231F20] tracking-tight">
              {pO.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {pO.desc}
            </p>
          </div>
          <Link
            href="/programs"
            className="inline-flex items-center space-x-2 text-sm font-bold text-[#F68632] hover:text-[#231F20] transition-colors self-start md:self-auto"
          >
            <span>{pO.viewAllBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Tab Selector & Program Card Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Program Navigation List */}
          <div className="lg:col-span-5 space-y-2">
            {programsData.map((program, idx) => {
              const isSelected = program.id === activeId;
              return (
                <button
                  key={program.id}
                  onClick={() => setActiveId(program.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3.5 focus:outline-none ${
                    isSelected
                      ? "bg-[#231F20] border-[#231F20] text-white shadow-md"
                      : "bg-[#FAF8F5] border-[#EFECE8] text-slate-800 hover:bg-slate-100 hover:border-slate-300"
                  }`}
                >
                  <span
                    className={`font-heading font-extrabold text-sm mt-0.5 ${
                      isSelected ? "text-[#F68632]" : "text-[#F68632]"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <div className="space-y-1">
                    <p className="font-heading font-bold text-base leading-snug">
                      {program.title}
                    </p>
                    <p
                      className={`text-xs line-clamp-1 ${
                        isSelected ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {program.shortDescription}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Program Preview Card */}
          <div className="lg:col-span-7 bg-[#FAF8F5] rounded-2xl border border-[#EFECE8] p-6 sm:p-8 space-y-6">
            
            {/* Header / Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EFECE8]">
              <span className="px-3 py-1 rounded-md bg-[#FFF2E7] text-[#F68632] text-xs font-bold border border-[#F68632]/30">
                {activeProgram.badge}
              </span>
              <span className="px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
                {activeProgram.cost}
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h3 className="font-heading font-extrabold text-2xl text-[#231F20]">
                {activeProgram.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {activeProgram.fullDescription}
              </p>
            </div>

            {/* Program Logistics Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-white border border-[#EFECE8] text-xs text-slate-700">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#F68632] shrink-0" />
                <span>{activeProgram.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#F68632] shrink-0" />
                <span>{activeProgram.mode}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#F68632] shrink-0" />
                <span>{pO.certificateNote}</span>
              </div>
            </div>

            {/* Key Skills Covered */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-[#231F20] uppercase tracking-wider">
                {pO.coveredTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeProgram.skills.slice(0, 6).map((skill) => (
                  <div key={skill} className="flex items-start space-x-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F68632] shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href={`/programs/${activeProgram.slug}`}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-[#F68632] text-white font-bold text-sm hover:bg-[#E07418] transition-colors shadow-xs"
              >
                <span>{pO.syllabusBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-white text-slate-700 border border-slate-300 font-semibold text-sm hover:bg-slate-50 transition-colors"
              >
                <span>{pO.askQuestionBtn}</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
