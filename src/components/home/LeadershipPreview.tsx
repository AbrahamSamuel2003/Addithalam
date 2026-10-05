"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { teamData, TeamMember } from "@/data/teamData";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LeadershipPreview() {
  const { t } = useLanguage();
  const l = t.leadership;
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const previewMembers = teamData.slice(0, 4);

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#EFECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#EFECE8]">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-bold text-[#F68632] tracking-widest uppercase">
              {l.badge}
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#231F20] tracking-tight">
              {l.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {l.desc}
            </p>
          </div>
          <Link
            href="/team"
            className="inline-flex items-center space-x-2 text-sm font-bold text-[#F68632] hover:text-[#231F20] transition-colors self-start md:self-auto"
          >
            <span>{l.meetAllBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Team Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-[#EFECE8] overflow-hidden shadow-xs hover:border-[#F68632]/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative aspect-square bg-gradient-to-b from-[#FFF8F3] via-[#FAF5F0] to-[#EFECE8] overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Info */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#F68632] uppercase tracking-wider block">
                    {member.category}
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#231F20] leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    {member.role}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EFECE8] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="text-xs font-bold text-[#F68632] hover:text-[#231F20] transition-colors"
                  >
                    {l.readBioBtn}
                  </button>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded text-slate-400 hover:text-[#F68632] hover:bg-[#FFF2E7] transition-colors"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bio Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
              aria-label="Close bio"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-200 bg-gradient-to-b from-[#FFF8F3] to-[#EFECE8]">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#F68632] uppercase tracking-wider block">
                  {selectedMember.category}
                </span>
                <h3 className="font-heading font-bold text-lg text-[#231F20]">
                  {selectedMember.name}
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  {selectedMember.role}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold text-[#231F20] uppercase tracking-wider">
                {l.focusTitle}
              </p>
              <p className="text-xs text-[#F68632] font-semibold bg-[#FFF2E7] p-2.5 rounded-lg border border-[#F68632]/20">
                {selectedMember.focusArea}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold text-[#231F20] uppercase tracking-wider">
                {l.bioModalTitle}
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedMember.bio}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs">
              <a
                href={selectedMember.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 font-bold text-[#F68632] hover:underline"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setSelectedMember(null)}
                className="px-4 py-2 rounded-lg bg-slate-100 font-semibold text-slate-700 hover:bg-slate-200"
              >
                {l.closeBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
