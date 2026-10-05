"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-[#1A1A1A] text-white flex items-center justify-center">
      {/* Background Image with Clear Visibility & Balanced Centered Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-student-lab.jpg"
          alt="Technology training lab in Chennai"
          fill
          priority
          className="object-cover object-center opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/85 via-[#1A1A1A]/80 to-[#1A1A1A]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center space-y-6 sm:space-y-7">
        {/* Main Headline with Smooth Entrance Transition */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.14] tracking-tight max-w-3xl mx-auto animate-hero-1">
          {h.headlinePrimary}{" "}
          <span className="text-[#F68632]">{h.headlineSecondary}</span>
        </h1>

        {/* Supporting Strategic Copy with Staggered Transition */}
        <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto animate-hero-2">
          {h.subtext}
        </p>

        {/* Compact Action Buttons with Staggered Transition */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 animate-hero-3 w-full sm:w-auto">
          <Link
            href="/programs"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-lg bg-[#F68632] text-white font-bold text-sm hover:bg-[#E07418] active:scale-[0.98] transition-all shadow-md group"
          >
            <span>{h.primaryCta}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/donate"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-lg bg-white/10 text-white font-bold text-sm border border-white/30 hover:bg-white/20 active:scale-[0.98] transition-all backdrop-blur-xs"
          >
            <HeartHandshake className="w-4 h-4 text-[#F68632]" />
            <span>{h.secondaryCta}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
