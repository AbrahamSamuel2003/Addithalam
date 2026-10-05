"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Camera, 
  MapPin, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  ArrowRight,
  Sparkles,
  ExternalLink
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { useLanguage } from "@/context/LanguageContext";
import { trustData } from "@/data/trustData";
import { getSocialLogo } from "@/components/common/SocialLogos";

interface GalleryItem {
  id: string;
  image: string;
  category: "labs" | "bootcamps" | "women" | "mentorship";
  categoryLabelEn: string;
  categoryLabelTa: string;
  eventTagEn: string;
  eventTagTa: string;
  source: "LinkedIn" | "YouTube" | "Instagram";
  year: string;
  titleEn: string;
  titleTa: string;
  descriptionEn: string;
  descriptionTa: string;
  locationEn: string;
  locationTa: string;
}

const galleryData: GalleryItem[] = [
  {
    id: "photo-1",
    image: "/images/gallery/students-learning.jpg",
    category: "labs",
    categoryLabelEn: "Classrooms & Labs",
    categoryLabelTa: "வகுப்பறைகள் & ஆய்வகங்கள்",
    eventTagEn: "Chennai Center Lab",
    eventTagTa: "சென்னை ஆய்வகம்",
    source: "Instagram",
    year: "2026",
    titleEn: "IT Education & Practical Coding Lab",
    titleTa: "கணினி ஆய்வகம் & செய்முறைப் பயிற்சி",
    descriptionEn: "Students actively engaged in programming fundamentals, problem-solving, and web development exercises in Chennai.",
    descriptionTa: "சென்னையில் எங்கள் கணினி ஆய்வகத்தில் மாணவர்கள் நிரலாக்க அடிப்படை மற்றும் வலைத்தள உருவாக்கப் பயிற்சிகளைப் பெறுகின்றனர்.",
    locationEn: "Chennai Center",
    locationTa: "சென்னை மையம்",
  },
  {
    id: "photo-2",
    image: "/images/gallery/classroom-learning.jpg",
    category: "bootcamps",
    categoryLabelEn: "Bootcamps & Summits",
    categoryLabelTa: "பயிலரங்குகள் & மாநாடுகள்",
    eventTagEn: "TechXConf 2026 Partner",
    eventTagTa: "TechXConf 2026 கூட்டாண்மை",
    source: "LinkedIn",
    year: "2026",
    titleEn: "TechXConf 2026 Community Partnership",
    titleTa: "TechXConf 2026 சமூகப் பங்களிப்பு",
    descriptionEn: "Official partnership session at Asia's premier GenAI, Cloud, and Data Science summit supporting emerging student talent.",
    descriptionTa: "ஆசியாவின் முன்னணி ஜெனரேட்டிவ் ஏஐ மற்றும் கிளவுட் மாநாட்டில் அடித்தளம் அறக்கட்டளையின் சமூகப் பங்களிப்பு.",
    locationEn: "TechXConf Summit",
    locationTa: "TechXConf அரங்கம்",
  },
  {
    id: "photo-3",
    image: "/images/gallery/technical-skills.jpg",
    category: "bootcamps",
    categoryLabelEn: "Bootcamps & Summits",
    categoryLabelTa: "பயிலரங்குகள் & மாநாடுகள்",
    eventTagEn: "Full-Stack Bootcamp",
    eventTagTa: "முழு மென்பொருள் பயிற்சி",
    source: "YouTube",
    year: "2026",
    titleEn: "Full-Stack Development & Database Core",
    titleTa: "முழு மென்பொருள் மேம்பாட்டுப் பயிற்சி",
    descriptionEn: "In-depth weekend modules covering modern frontend frameworks, backend architecture, relational databases, and Git workflows.",
    descriptionTa: "முன்னணி வலைத்தள தொழில்நுட்பங்கள், சர்வர் மேலாண்மை மற்றும் தரவுத்தளங்களை முழுமையாகக் கற்றுத் தரும் நேரடி அமர்வு.",
    locationEn: "Advanced Tech Lab",
    locationTa: "மேம்பட்ட ஆய்வகம்",
  },
  {
    id: "photo-4",
    image: "/images/gallery/soft-skills.jpg",
    category: "labs",
    categoryLabelEn: "Classrooms & Labs",
    categoryLabelTa: "வகுப்பறைகள் & ஆய்வகங்கள்",
    eventTagEn: "Leadership Workshop",
    eventTagTa: "தலைமைத்துவப் பயிற்சி",
    source: "YouTube",
    year: "2026",
    titleEn: "Communication & Leadership Workshops",
    titleTa: "மென்திறன் & உரையாடல் பயிற்சி",
    descriptionEn: "Fostering professional speaking, teamwork, and workplace interpersonal skills alongside technical training.",
    descriptionTa: "தொழில்நுட்ப அறிவோடு நிறுவனங்களில் சிறந்து விளங்க தேவையான ஆங்கில உரையாடல் மற்றும் தலைமைத்துவப் பயிற்சிகள்.",
    locationEn: "Seminar Hall",
    locationTa: "கருத்தரங்கு அரங்கம்",
  },
  {
    id: "photo-5",
    image: "/images/gallery/mentorship.jpg",
    category: "mentorship",
    categoryLabelEn: "Mentorship & Career",
    categoryLabelTa: "வழிகாட்டல் & வேலைவாய்ப்பு",
    eventTagEn: "1-on-1 Mentorship",
    eventTagTa: "நேரடி வழிகாட்டல்",
    source: "LinkedIn",
    year: "2026",
    titleEn: "1-on-1 Senior Industry Mentorship",
    titleTa: "நேரடி வழிகாட்டல் பயிற்சி",
    descriptionEn: "Personalized code reviews, resume polishing, and career navigation from experienced software engineering leaders.",
    descriptionTa: "அனுபவம் வாய்ந்த மென்பொருள் பொறியாளர்களிடமிருந்து நேரடி வழிகாட்டுதல், சுயவிவரப் பரிசீலனை மற்றும் தொழில் ஆலோசனை.",
    locationEn: "Chennai Hub",
    locationTa: "சென்னை மையம்",
  },
  {
    id: "photo-6",
    image: "/images/gallery/career-guidance.jpg",
    category: "mentorship",
    categoryLabelEn: "Mentorship & Career",
    categoryLabelTa: "வழிகாட்டல் & வேலைவாய்ப்பு",
    eventTagEn: "Career Orientation",
    eventTagTa: "தொழில் அறிமுகம்",
    source: "LinkedIn",
    year: "2026",
    titleEn: "Career Pathways & Industry Orientation",
    titleTa: "தொழில் வழிகாட்டுதல் கருத்தரங்கு",
    descriptionEn: "Demystifying tech job titles, growth paths, and certifications to help students set ambitious, achievable goals.",
    descriptionTa: "ஐடி துறையின் பல்வேறு வேலைவாய்ப்புகள் மற்றும் எதிர்காலப் பாதைகள் குறித்து மாணவர்களுக்கு தெளிவுபடுத்தும் கருத்தரங்கம்.",
    locationEn: "Conference Room",
    locationTa: "கருத்தரங்கு கூடம்",
  },
  {
    id: "photo-7",
    image: "/images/gallery/college-training.jpg",
    category: "bootcamps",
    categoryLabelEn: "Bootcamps & Summits",
    categoryLabelTa: "பயிலரங்குகள் & மாநாடுகள்",
    eventTagEn: "Campus Placement",
    eventTagTa: "கல்லூரி வேலைவாய்ப்பு",
    source: "YouTube",
    year: "2026",
    titleEn: "Campus Placement Readiness Drive",
    titleTa: "கல்லூரி மாணவர் வேலைவாய்ப்புப் பயிற்சி",
    descriptionEn: "Intensive training for final-year college students focusing on coding rounds, mock interviews, and industry etiquette.",
    descriptionTa: "கல்லூரி இறுதியாண்டு மாணவர்களுக்கான நேர்காணல் மாதிரி தேர்வுகள் மற்றும் நிறுவன வேலைவாய்ப்பு வழிகாட்டுதல்.",
    locationEn: "Campus Partner Hub",
    locationTa: "கல்லூரிப் பயிற்சி அரங்கம்",
  },
  {
    id: "photo-8",
    image: "/images/gallery/women-empowerment.jpg",
    category: "women",
    categoryLabelEn: "Women in Tech",
    categoryLabelTa: "பெண்கள் தொழினுட்பம்",
    eventTagEn: "Women Empowerment",
    eventTagTa: "பெண்கள் முன்னேற்றம்",
    source: "Instagram",
    year: "2026",
    titleEn: "Women Empowerment in Tech Cohort",
    titleTa: "பெண்கள் தொழில்நுட்பச் சிறப்புப் பயிற்சி",
    descriptionEn: "Dedicated cohort supporting young women and homemakers with modern software development skills and career confidence.",
    descriptionTa: "இளம் பெண்கள் மற்றும் குடும்பப் பெண்கள் தொழில்நுட்பத் துறையில் சாதிக்க தன்னம்பிக்கையும் நவீன கணினிப் பயிற்சியும் வழங்கப்படுகிறது.",
    locationEn: "Chennai Center",
    locationTa: "சென்னை மையம்",
  },
  {
    id: "photo-9",
    image: "/images/gallery/volunteer-event.jpg",
    category: "women",
    categoryLabelEn: "Women in Tech",
    categoryLabelTa: "பெண்கள் தொழினுட்பம்",
    eventTagEn: "Community Outreach",
    eventTagTa: "சமூக ஒருங்கிணைப்பு",
    source: "Instagram",
    year: "2026",
    titleEn: "Community Learning & Inclusivity Circles",
    titleTa: "சமூகக் கற்றல் & டிஜிட்டல் உள்ளடக்கம்",
    descriptionEn: "Community outreach initiatives bringing tech career opportunities to households across underprivileged neighborhoods.",
    descriptionTa: "பின்தங்கிய பகுதிகளுக்குச் சென்று தகவல் தொழில்நுட்ப வாய்ப்புகளை அறிமுகப்படுத்தும் சமூக விழிப்புணர்வுப் பணிகள்.",
    locationEn: "Community Partner Hall",
    locationTa: "கூட்டரங்கம்",
  },
  {
    id: "photo-10",
    image: "/images/gallery/volunteer-teaching.jpg",
    category: "labs",
    categoryLabelEn: "Classrooms & Labs",
    categoryLabelTa: "வகுப்பறைகள் & ஆய்வகங்கள்",
    eventTagEn: "Hands-on Lab",
    eventTagTa: "செய்முறை ஆய்வகம்",
    source: "YouTube",
    year: "2026",
    titleEn: "Interactive Coding & Debugging Sessions",
    titleTa: "நேரடி நிரலாக்க செய்முறை வகுப்பு",
    descriptionEn: "Hands-on debugging and technical problem-solving sessions conducted by dedicated industry mentors.",
    descriptionTa: "அனுபவமிக்க பயிற்றுநர்களின் மேற்பார்வையில் மாணவர்கள் சிக்கலான கணினி நிரல்களைத் தீர்க்கும் செய்முறை அமர்வு.",
    locationEn: "Chennai Lab",
    locationTa: "சென்னை ஆய்வகம்",
  },
  {
    id: "photo-11",
    image: "/images/gallery/volunteer-mentoring.jpg",
    category: "mentorship",
    categoryLabelEn: "Mentorship & Career",
    categoryLabelTa: "வழிகாட்டல் & வேலைவாய்ப்பு",
    eventTagEn: "Mock Interviews",
    eventTagTa: "மாதிரி நேர்காணல்",
    source: "LinkedIn",
    year: "2026",
    titleEn: "Mock Interviews & Portfolio Review",
    titleTa: "மாதிரி நேர்காணல் மற்றும் போர்ட்ஃபோலியோ வழிகாட்டல்",
    descriptionEn: "One-on-one technical guidance, project evaluations, and resume feedback for graduating cohorts.",
    descriptionTa: "மாணவர்களுக்கு வேலைவாய்ப்புக்கு தேவையான நேர்காணல் குறிப்புகள் மற்றும் தனிப்பட்ட வழிகாட்டல் அமர்வுகள்.",
    locationEn: "Mentorship Studio",
    locationTa: "வழிகாட்டல் அரங்கம்",
  },
  {
    id: "photo-12",
    image: "/images/gallery/volunteer-group.jpg",
    category: "women",
    categoryLabelEn: "Women in Tech",
    categoryLabelTa: "பெண்கள் தொழினுட்பம்",
    eventTagEn: "Peer Cohort",
    eventTagTa: "மாணவர் வட்டம்",
    source: "Instagram",
    year: "2026",
    titleEn: "Collaborative Student Cohorts",
    titleTa: "மாணவர் கூட்டு கற்றல் குழுமம்",
    descriptionEn: "Empowering cohorts learning modern technologies together through collaborative peer learning circles.",
    descriptionTa: "இணைந்து கற்கும் சூழலில் புதிய கணினி நுணுக்கங்களை உற்சாகத்துடன் பயிலும் மாணவ மாணவியர் குழு.",
    locationEn: "Main Learning Center",
    locationTa: "முதன்மை மையம்",
  },
];

export default function GalleryPage() {
  const { lang, t } = useLanguage();
  const gp = t.galleryPage;

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: gp.filterAll, count: galleryData.length },
    { id: "labs", label: gp.filterLabs, count: galleryData.filter(i => i.category === "labs").length },
    { id: "bootcamps", label: gp.filterBootcamps, count: galleryData.filter(i => i.category === "bootcamps").length },
    { id: "women", label: gp.filterWomen, count: galleryData.filter(i => i.category === "women").length },
    { id: "mentorship", label: gp.filterMentorship, count: galleryData.filter(i => i.category === "mentorship").length },
  ];

  const filteredPhotos = activeCategory === "all"
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const showNext = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
    }
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const showPrev = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  }, [selectedPhotoIndex, filteredPhotos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, showNext, showPrev]);

  // Lock body scroll when lightbox is active
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPhotoIndex]);

  const selectedItem = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Immersive Page Hero */}
      <PageHero
        badge={gp.heroBadge}
        title={gp.heroTitle}
        subtitle={gp.heroSubtitle}
        backgroundImage="/images/hero/hero-student-lab.jpg"
      />

      {/* Main Gallery Section */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Pills (Maatram Foundation design reference with counts) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedPhotoIndex(null);
                }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center space-x-2 focus:outline-none ${
                  isActive
                    ? "bg-[#231F20] text-white shadow-md border border-[#231F20]"
                    : "bg-white text-slate-700 hover:bg-[#FFF2E7] hover:text-[#F68632] border border-[#EFECE8]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-colors ${
                    isActive ? "bg-[#F68632] text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Photos Grid - Tailored Specifically for Visual Storytelling & Maatram Reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-[#EFECE8] bg-white overflow-hidden shadow-xs hover:border-[#F68632]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Photo Container with Overlay & Zoom */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={lang === "ta" ? item.titleTa : item.titleEn}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient scrim for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Floating Event Tag & Source Pill */}
                <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
                  <span className="px-3 py-1 rounded-full bg-[#231F20]/90 backdrop-blur-md text-[#F68632] border border-[#F68632]/30 text-[11px] font-bold tracking-wide">
                    {lang === "ta" ? item.eventTagTa : item.eventTagEn}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#231F20] text-[11px] font-bold flex items-center space-x-1 shadow-xs">
                    {getSocialLogo(item.source, "w-3 h-3 text-[#F68632]")}
                    <span>{item.source}</span>
                  </span>
                </div>

                {/* Expand / Maximize Icon on Hover */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm z-10">
                  <Maximize2 className="w-4 h-4 text-[#F68632]" />
                </div>

                {/* Location & Year indicator inside image overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/95 text-xs font-medium z-10">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-[#F68632] shrink-0" />
                    <span>{lang === "ta" ? item.locationTa : item.locationEn}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-bold tracking-wider text-slate-300">
                    {item.year}
                  </span>
                </div>
              </div>

              {/* Photo Caption & Context Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="font-heading font-extrabold text-lg text-[#231F20] group-hover:text-[#F68632] transition-colors line-clamp-1">
                    {lang === "ta" ? item.titleTa : item.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {lang === "ta" ? item.descriptionTa : item.descriptionEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EFECE8] flex items-center justify-between text-xs font-bold text-[#F68632]">
                  <span>{lang === "ta" ? "பெரிதாக்க சொடுக்கவும்" : "Click to view full photo"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact / Visit Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#1A1A1A] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-[#F68632] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>{lang === "ta" ? "நேரில் பார்வையிட" : "Visit Our Learning Centers"}</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              {lang === "ta" ? "எங்கள் பணிகளை நேரில் காண வாருங்கள்" : "Experience Our Learning Environment in Chennai"}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {lang === "ta"
                ? "மாணவர்கள், தன்னார்வலர்கள் மற்றும் நிறுவனப் பிரதிநிதிகள் எங்கள் பயிற்சி மையத்தை நேரில் பார்வையிட வரவேற்கப்படுகிறார்கள்."
                : "Prospective learners, mentors, and partner organizations are warmly welcomed to tour our coding labs and witness student transformation firsthand."}
            </p>
          </div>

          <div className="flex items-center justify-center shrink-0">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-[#F68632] text-white font-bold text-sm hover:bg-[#E07418] transition-colors shadow-md"
            >
              {lang === "ta" ? "மையத்தை பார்வையிட தொடர்பு கொள்ள" : "Schedule a Center Visit"}
            </Link>
          </div>
        </div>

      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full bg-[#1A1A1A] text-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-[#231F20]">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full bg-[#F68632]/20 text-[#F68632] border border-[#F68632]/30 text-xs font-bold">
                  {lang === "ta" ? selectedItem.categoryLabelTa : selectedItem.categoryLabelEn}
                </span>
                <span className="text-xs text-slate-400">
                  {selectedPhotoIndex! + 1} / {filteredPhotos.length}
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors focus:outline-none"
                aria-label={gp.closeModal}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-black overflow-hidden flex items-center justify-center">
              <Image
                src={selectedItem.image}
                alt={lang === "ta" ? selectedItem.titleTa : selectedItem.titleEn}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all focus:outline-none"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all focus:outline-none"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Footer Caption */}
            <div className="p-5 sm:p-6 bg-[#231F20] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#FFF2E7]/10 text-[#F68632] border border-[#F68632]/25 text-xs font-bold">
                    {lang === "ta" ? selectedItem.eventTagTa : selectedItem.eventTagEn}
                  </span>
                  <span className="text-xs text-slate-400">
                    {selectedItem.year}
                  </span>
                </div>
                <a
                  href={
                    selectedItem.source === "LinkedIn"
                      ? "https://www.linkedin.com/company/addithalamfoundation"
                      : selectedItem.source === "YouTube"
                      ? "https://www.youtube.com/@Addithalam.Foundation"
                      : "https://www.instagram.com/addithalam_foundation/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-800/90 hover:bg-[#F68632] text-slate-300 hover:text-white transition-colors text-xs font-medium border border-slate-700/80"
                >
                  {getSocialLogo(selectedItem.source, "w-3.5 h-3.5")}
                  <span>{selectedItem.source}</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h2 className="font-heading font-extrabold text-xl text-white">
                  {lang === "ta" ? selectedItem.titleTa : selectedItem.titleEn}
                </h2>
                <div className="flex items-center space-x-1.5 text-xs text-[#F68632]">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{lang === "ta" ? selectedItem.locationTa : selectedItem.locationEn}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === "ta" ? selectedItem.descriptionTa : selectedItem.descriptionEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
