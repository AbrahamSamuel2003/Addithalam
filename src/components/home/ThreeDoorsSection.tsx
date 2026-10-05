"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Users, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ThreeDoorsSection() {
  const { t } = useLanguage();
  const d = t.doors;

  const doors = [
    {
      id: "students",
      category: d.door1Category,
      title: d.door1Title,
      description: d.door1Desc,
      actionLabel: d.door1Action,
      href: "/programs",
      icon: GraduationCap,
      image: "/images/audience/students-learning.jpg",
      highlight: d.door1Highlight,
    },
    {
      id: "women",
      category: d.door2Category,
      title: d.door2Title,
      description: d.door2Desc,
      actionLabel: d.door2Action,
      href: "/programs/women-in-tech",
      icon: Users,
      image: "/images/audience/women-empowerment.jpg",
      highlight: d.door2Highlight,
    },
    {
      id: "children",
      category: d.door3Category,
      title: d.door3Title,
      description: d.door3Desc,
      actionLabel: d.door3Action,
      href: "/about",
      icon: Building2,
      image: "/images/audience/digital-literacy.jpg",
      highlight: d.door3Highlight,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#EFECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-bold text-[#F68632] tracking-widest uppercase">
            {d.badge}
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#231F20] tracking-tight">
            {d.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {d.subtitle}
          </p>
        </div>

        {/* Three Door Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {doors.map((door) => {
            const Icon = door.icon;
            return (
              <div
                key={door.id}
                className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-[#EFECE8] bg-white p-7 sm:p-8 shadow-xs hover:border-[#F68632]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Icon on Top */}
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF2E7] text-[#F68632] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#F68632] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Bold Title */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-[#F68632] tracking-wider uppercase block">
                      {door.category}
                    </span>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#231F20] tracking-tight group-hover:text-[#F68632] transition-colors">
                      {door.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3">
                    {door.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-6 border-t border-[#EFECE8]">
                  <Link
                    href={door.href}
                    className="inline-flex items-center space-x-2 text-sm font-bold text-[#F68632] group-hover:text-[#231F20] transition-colors"
                  >
                    <span>{door.actionLabel}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
