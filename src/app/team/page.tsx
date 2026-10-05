"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { teamData, TeamMember } from "@/data/teamData";
import { ExternalLink, X, ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { useLanguage } from "@/context/LanguageContext";

export default function TeamPage() {
  const { t, lang } = useLanguage();
  const tm = t.teamPage;
  const l = t.leadership;
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const founders = teamData.filter((m) => m.category === "Founding Members");
  const coreTeam = teamData.filter((m) => m.category === "Core Team");
  const advisors = teamData.filter((m) => m.category === "Patron & Advisory");

  const volunteerRoles = [
    {
      title: lang === "ta" ? "தொழில்நுட்பப் பயிற்சி & வழிகாட்டல்" : "Technical Training & Mentorship",
      desc: lang === "ta" ? "வார இறுதி வகுப்புகளில் பைதான், வலைத்தள வடிவமைப்பு, அல்லது கிளவுட் தொழில்நுட்பங்களை கற்பித்தல்." : "Teach Python, Web Development, Databases, or Cloud architecture in weekend batches.",
    },
    {
      title: lang === "ta" ? "மாதிரி நேர்காணல் & ரெஸ்யூமே வழிகாட்டிகள்" : "Mock Interview & Resume Mentors",
      desc: lang === "ta" ? "மாணவர்களுக்கு நேரடி தொழில்நுட்ப மற்றும் மனிதவள (HR) மாதிரி நேர்காணல் பயிற்சிகளை வழங்குதல்." : "Conduct 1-on-1 technical and HR interview simulations with graduating students.",
    },
    {
      title: lang === "ta" ? "தொழில்நுட்பத்தில் பெண் வழிகாட்டிகள்" : "Women in Tech Career Mentors",
      desc: lang === "ta" ? "பெண்கள் மற்றும் இல்லத்தரசிகள் மீண்டும் பணிக்கு வர மென்பொருள் வழிகாட்டுதல் வழங்குதல்." : "Guide women and homemakers through flexible career navigation and portfolio building.",
    },
    {
      title: lang === "ta" ? "நிகழ்வுகள் & பட்டறை ஒருங்கிணைப்பு" : "Event & Workshop Operations",
      desc: lang === "ta" ? "ஹேக்கத்தான்கள், சிறப்பு விரிவுரைகள் மற்றும் கணினி ஆய்வக செயல்பாடுகளை ஒருங்கிணைத்தல்." : "Assist with logistics, hackathons, guest lectures, and community learning center activities.",
    },
  ];

  const renderGrid = (members: TeamMember[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {members.map((member) => (
        <div
          key={member.id}
          className="bg-white rounded-2xl border border-[#EFECE8] overflow-hidden shadow-xs hover:border-[#F68632]/50 hover:shadow-md transition-all flex flex-col justify-between"
        >
          {/* Portrait Image */}
          <div className="relative aspect-square bg-slate-100 overflow-hidden">
            <Image
              src={member.image}
              alt={`${member.name}, ${member.role}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>

          {/* Member Details */}
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
  );

  return (
    <div className="bg-[#FAF8F5]">
      {/* Immersive PageHero with Background Image */}
      <PageHero
        badge={tm.heroBadge}
        title={tm.heroTitle}
        subtitle={tm.heroSubtitle}
        backgroundImage="/images/hero/hero-student-lab.jpg"
      />

      {/* Main Team Sections */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 1. Founding Members */}
        <div className="space-y-6">
          <div className="border-b border-[#EFECE8] pb-3">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#231F20]">
              {tm.foundersTitle}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {tm.foundersDesc}
            </p>
          </div>
          {renderGrid(founders)}
        </div>

        {/* 2. Core Team */}
        <div className="space-y-6">
          <div className="border-b border-[#EFECE8] pb-3">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#231F20]">
              {tm.coreTeamTitle}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {tm.coreTeamDesc}
            </p>
          </div>
          {renderGrid(coreTeam)}
        </div>

        {/* 3. Patron & Advisory */}
        <div className="space-y-6">
          <div className="border-b border-[#EFECE8] pb-3">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#231F20]">
              {tm.advisorsTitle}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {tm.advisorsDesc}
            </p>
          </div>
          {renderGrid(advisors)}
        </div>

        {/* 4. Volunteers Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#EFECE8] shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold text-[#F68632] uppercase tracking-wider block">
                Volunteer Community
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#231F20]">
                {tm.volunteerTitle}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {tm.volunteerDesc}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#F68632] text-white font-bold text-sm hover:bg-[#E07418] transition-colors shrink-0 shadow-xs"
            >
              <span>{tm.connectVolunteerBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {volunteerRoles.map((role) => (
              <div
                key={role.title}
                className="p-5 rounded-xl bg-[#FAF8F5] border border-[#EFECE8] space-y-2"
              >
                <h4 className="font-heading font-bold text-sm text-[#231F20]">
                  {role.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Interactive Bio Modal */}
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
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-200">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
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

            <div className="pt-2 flex items-center justify-between border-t border-[#EFECE8] text-xs">
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
    </div>
  );
}
