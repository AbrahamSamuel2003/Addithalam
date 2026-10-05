"use client";

import React from "react";
import Link from "next/link";
import { Program } from "@/data/programsData";
import { ArrowLeft, Clock, MapPin, Award, CheckCircle2 } from "lucide-react";
import ApplyModalTrigger from "@/components/programs/ApplyModalTrigger";
import PageHero from "@/components/layout/PageHero";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  program: Program;
}

export default function ProgramDetailView({ program }: Props) {
  const { t } = useLanguage();
  const d = t.programDetail;

  return (
    <div className="bg-[#FAF8F5]">
      {/* Immersive PageHero with Background Image */}
      <PageHero
        badge={program.badge}
        title={program.title}
        subtitle={program.fullDescription}
        backgroundImage={program.image || "/images/hero/hero-student-lab.jpg"}
      >
        <div className="pt-2">
          <Link
            href="/programs"
            className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#F68632]" />
            <span>{d.backBtn}</span>
          </Link>
        </div>
      </PageHero>

      {/* Main Content Layout */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Curriculum Modules & Outcomes (8 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Target Audience */}
            <div className="p-6 rounded-2xl bg-white border border-[#EFECE8] shadow-xs space-y-2">
              <h2 className="text-xs font-bold text-[#F68632] uppercase tracking-wider">
                {d.whoIsItFor}
              </h2>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                {program.targetAudience}
              </p>
            </div>

            {/* Curriculum Breakdown */}
            <div className="space-y-6">
              <div>
                <h2 className="font-heading font-bold text-2xl text-[#231F20]">
                  {d.syllabusTitle}
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  {d.syllabusDesc}
                </p>
              </div>

              <div className="space-y-4">
                {program.curriculum.map((module, idx) => (
                  <div
                    key={module.moduleTitle}
                    className="p-6 rounded-2xl bg-white border border-[#EFECE8] shadow-xs space-y-3"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-7 h-7 rounded-lg bg-[#231F20] text-[#F68632] font-heading font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h3 className="font-heading font-bold text-base text-[#231F20]">
                        {module.moduleTitle}
                      </h3>
                    </div>
                    <ul className="space-y-2 pl-10 text-xs sm:text-sm text-slate-700">
                      {module.topics.map((item) => (
                        <li key={item} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-[#F68632] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Career Outcomes */}
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-[#231F20]">
                {d.outcomesTitle}
              </h2>
              <div className="p-6 rounded-2xl bg-[#FFF2E7] border border-[#F68632]/30 space-y-3">
                {program.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start space-x-2.5 text-sm text-[#231F20] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#F68632] shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Key Logistics & Direct Apply Card (4 Cols) */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#EFECE8] shadow-md space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#F68632] uppercase tracking-wider block">
                  Program Details
                </span>
                <h3 className="font-heading font-bold text-xl text-[#231F20]">
                  {d.logisticsTitle}
                </h3>
              </div>

              {/* Logistics List */}
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 border-y border-[#EFECE8] py-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-[#F68632] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900">{d.durationSchedule}</span>
                    <span>{program.duration}</span>
                    <span className="block text-slate-500 text-xs">{program.schedule}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#F68632] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900">{d.trainingMode}</span>
                    <span>{program.mode} (Chennai)</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Award className="w-4 h-4 text-[#F68632] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900">{d.tuitionFee}</span>
                    <span className="text-emerald-700 font-bold">{d.freeBadge}</span>
                  </div>
                </div>
              </div>

              {/* Eligibility Criteria */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  {d.eligibilityTitle}
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {program.eligibility.map((e) => (
                    <li key={e} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F68632] shrink-0 mt-0.5" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interactive Apply Button Trigger */}
              <div className="pt-2">
                <ApplyModalTrigger programTitle={program.title} />
              </div>

              <div className="text-center">
                <p className="text-[11px] text-slate-500">
                  {d.questionsText}{" "}
                  <Link href="/contact" className="underline font-semibold text-[#F68632]">
                    Contact Page
                  </Link>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
