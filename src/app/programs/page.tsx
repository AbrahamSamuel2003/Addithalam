"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { programsData } from "@/data/programsData";
import { ArrowRight, CheckCircle2, Clock, MapPin } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { useLanguage } from "@/context/LanguageContext";

export default function ProgramsPage() {
  const { t } = useLanguage();
  const p = t.programsPage;

  return (
    <div className="bg-[#FAF8F5]">
      {/* Immersive Hero with Background Image */}
      <PageHero
        badge={p.heroBadge}
        title={p.heroTitle}
        subtitle={p.heroSubtitle}
        backgroundImage="/images/audience/students-learning.jpg"
      />

      {/* Program Grid */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program, idx) => (
            <div
              key={program.id}
              className="group flex flex-col justify-between rounded-2xl border border-[#EFECE8] bg-white overflow-hidden shadow-xs hover:border-[#F68632]/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Program Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#231F20]/85 backdrop-blur-md text-[#F68632] border border-[#F68632]/40 text-xs font-bold tracking-wide">
                    0{idx + 1} | {program.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="font-heading font-bold text-xl text-[#231F20] group-hover:text-[#F68632] transition-colors">
                      {program.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {program.shortDescription}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FAF8F5] space-y-1.5 text-xs text-slate-700 border border-[#EFECE8]">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3.5 h-3.5 text-[#F68632] shrink-0" />
                      <span><strong>{p.durationLabel}</strong> {program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-[#F68632] shrink-0" />
                      <span><strong>{p.modeLabel}</strong> {program.mode}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-xs font-bold text-[#231F20] uppercase tracking-wider">
                      {p.topicsCovered}
                    </p>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {program.skills.slice(0, 4).map((s) => (
                        <li key={s} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3 h-3 text-[#F68632] shrink-0" />
                          <span className="truncate">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EFECE8] flex items-center justify-between">
                  <Link
                    href={`/programs/${program.slug}`}
                    className="inline-flex items-center space-x-1.5 text-sm font-bold text-[#F68632] group-hover:translate-x-1 transition-transform"
                  >
                    <span>{p.viewSyllabusBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
