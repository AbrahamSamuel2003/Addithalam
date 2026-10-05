"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Mail, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { trustData } from "@/data/trustData";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, lang } = useLanguage();
  const fT = t.footer;

  const programsList = [
    { href: "/programs/technical-skills", en: "IT Technical Skills", ta: "தகவல் தொழில்நுட்ப திறன்கள்" },
    { href: "/programs/soft-skills", en: "Soft Skills & Communication", ta: "மென்திறன் & உரையாடல் பயிற்சி" },
    { href: "/programs/mentorship", en: "1-on-1 Mentorship", ta: "நேரடி வழிகாட்டல் (Mentorship)" },
    { href: "/programs/career-guidance", en: "Career Guidance", ta: "தொழில் வழிகாட்டுதல்" },
    { href: "/programs/college-training", en: "College Student Training", ta: "கல்லூரி மாணவர் சிறப்புப் பயிற்சி" },
    { href: "/programs/women-in-tech", en: "Women Empowerment in Tech", ta: "தொழில்நுட்பத்தில் பெண்கள்" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white pt-12 pb-24 lg:pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1 & 2: Organization Snapshot & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block">
              <div className="relative h-10 w-44">
                <Image
                  src="/images/logo/addithalam-logo.png"
                  alt="Addithalam Foundation"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              {fT.tagline}
            </p>

            {/* Tax & Registration Strip */}
            <div className="p-3.5 rounded-xl bg-[#231F20] border border-slate-700/80 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center space-x-2 text-[#F68632] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>{fT.statutoryTrust}</span>
              </div>
              <p>{fT.registeredDetails}</p>
              <p className="text-slate-400">{fT.taxBenefitNote}</p>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#F68632] tracking-wider uppercase">
              {fT.exploreTitle}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-[#F68632] transition-colors">
                  {fT.ourMissionStory}
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-[#F68632] transition-colors">
                  {fT.impactPlacements}
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#F68632] transition-colors">
                  {fT.leadershipTeam}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F68632] transition-colors">
                  {fT.contactLocation}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Programs Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#F68632] tracking-wider uppercase">
              {fT.programsTitle}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {programsList.map((prog) => (
                <li key={prog.href}>
                  <Link href={prog.href} className="hover:text-[#F68632] transition-colors">
                    {lang === "ta" ? prog.ta : prog.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Support & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#F68632] tracking-wider uppercase">
              {fT.supportTitle}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/donate" className="hover:text-[#F68632] transition-colors flex items-center space-x-1">
                  <span>{fT.donate80G}</span>
                  <ArrowRight className="w-3 h-3 text-[#F68632]" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F68632] transition-colors flex items-center space-x-1">
                  <span>{fT.volunteerInquiries}</span>
                  <ArrowRight className="w-3 h-3 text-[#F68632]" />
                </Link>
              </li>
            </ul>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{fT.locationChennai}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href={`mailto:${trustData.email}`} className="hover:text-white underline">
                  {trustData.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Addithalam Foundation. {fT.copyright}
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              {fT.privacyPolicy}
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              {fT.termsOfService}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {trustData.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F68632] transition-colors flex items-center space-x-1 text-slate-400"
                aria-label={`Addithalam Foundation on ${social.platform}`}
              >
                <span>{social.platform}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
