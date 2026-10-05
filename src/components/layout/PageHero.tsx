import React from "react";
import Image from "next/image";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  backgroundImage: string;
  children?: React.ReactNode;
}

export default function PageHero({
  badge,
  title,
  subtitle,
  backgroundImage,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16 bg-[#1A1A1A] text-white">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/85 to-[#231F20]/75" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {badge && (
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#F68632]/20 border border-[#F68632]/40 text-[#F68632] text-xs font-bold uppercase tracking-wider animate-hero-1">
            <span>{badge}</span>
          </div>
        )}

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-3xl animate-hero-1">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl animate-hero-2">
            {subtitle}
          </p>
        )}

        {children && <div className="pt-2 animate-hero-3">{children}</div>}
      </div>
    </section>
  );
}
