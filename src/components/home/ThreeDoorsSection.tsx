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
                className="group flex flex-col rounded-2xl border border-[#EFECE8] overflow-hidden bg-[#FAF8F5] hover:border-[#F68632]/50 hover:shadow-lg transition-all duration-200"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={door.image}
                    alt={door.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-xs font-bold text-[#F68632]">
                      <Icon className="w-4 h-4" />
                      <span>{door.category}</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#231F20]">
                      {door.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {door.description}
                    </p>
                  </div>

                  <Link
                    href={door.href}
                    className="inline-flex items-center space-x-2 text-sm font-bold text-[#F68632] group-hover:text-[#231F20] transition-colors pt-2"
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
