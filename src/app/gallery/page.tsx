"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  ArrowRight, 
  Sparkles 
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { useLanguage } from "@/context/LanguageContext";

interface GalleryItem {
  id: string;
  image: string;
  category: "sessions" | "volunteering" | "recognition";
  categoryLabelEn: string;
  categoryLabelTa: string;
  eventTagEn: string;
  eventTagTa: string;
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
    id: "aspire-learning-beyond-classrooms",
    image: "/gallery/aspire-learning-beyond-classrooms.jpg",
    category: "sessions",
    categoryLabelEn: "Sessions & Guidance",
    categoryLabelTa: "அமர்வுகள் & வழிகாட்டல்",
    eventTagEn: "ASPIRE Session 2",
    eventTagTa: "ASPIRE கருத்தரங்கம்",
    year: "2026",
    titleEn: "Learning Beyond Classrooms - IT & AI Insights",
    titleTa: "வகுப்பறைகளுக்கு அப்பாற்பட்ட கற்றல் - ஐடி & ஏஐ",
    descriptionEn: "Students explored real-world career opportunities and the skills needed to succeed in the evolving AI and technology landscape.",
    descriptionTa: "மாறிவரும் செயற்கை நுண்ணறிவு மற்றும் ஐடி உலகில் மாணவர்கள் வெற்றிபெற தேவையான நிஜ உலக வாய்ப்புகள் மற்றும் திறன்கள் குறித்த நேரடி வழிகாட்டல்.",
    locationEn: "Truetech Digital Hub, Chennai",
    locationTa: "ட்ரூடெக் டிஜிட்டல் மையம், சென்னை",
  },
  {
    id: "aspire-preparing-ai-era",
    image: "/gallery/aspire-preparing-ai-era.jpg",
    category: "sessions",
    categoryLabelEn: "Sessions & Guidance",
    categoryLabelTa: "அமர்வுகள் & வழிகாட்டல்",
    eventTagEn: "ASPIRE Session 2",
    eventTagTa: "ASPIRE கருத்தரங்கம்",
    year: "2026",
    titleEn: "Preparing for the AI Era - Career Readiness",
    titleTa: "செயற்கை நுண்ணறிவு யுகத்திற்கான தொழில் தயார்நிலை",
    descriptionEn: "Understanding how AI is transforming jobs and creating new career avenues, guiding students toward workplace success in the modern tech era.",
    descriptionTa: "செயற்கை நுண்ணறிவு வேலைவாய்ப்புகளை எவ்வாறு மாற்றியமைக்கிறது மற்றும் புதிய வாய்ப்புகளை உருவாக்குகிறது என்பதை விளக்கும் நேரடி வழிகாட்டல் அமர்வு.",
    locationEn: "Truetech Digital Hub, Chennai",
    locationTa: "ட்ரூடெக் டிஜிட்டல் மையம், சென்னை",
  },
  {
    id: "proud-volunteering-team",
    image: "/gallery/proud-volunteering-team.jpg",
    category: "volunteering",
    categoryLabelEn: "Volunteering & Field Action",
    categoryLabelTa: "தன்னார்வக் களப்பணி",
    eventTagEn: "Freedom Carnival 2026",
    eventTagTa: "சுதந்திரத் திருவிழா 2026",
    year: "2026",
    titleEn: "Proud Volunteering Team Addithalam",
    titleTa: "பெருமைமிகு அடித்தளம் தன்னார்வலர் குழுமம்",
    descriptionEn: "Addithalam Foundation volunteers leading on-ground community coordination and youth mobilization at Freedom Carnival 2026, Dr. Ambedkar Block, Vels University.",
    descriptionTa: "வேல்ஸ் பல்கலைக்கழகத்தில் டாக்டர் அம்பேத்கர் வளாகத்தில் நடைபெற்ற சுதந்திரத் திருவிழா 2026-ல் அடித்தளம் அறக்கட்டளையின் பெருமைமிகு தன்னார்வலர் குழுவின் நேரடி சமூக ஒருங்கிணைப்பு.",
    locationEn: "Vels University, Chennai",
    locationTa: "வேல்ஸ் பல்கலைக்கழகம், சென்னை",
  },
  {
    id: "thanks-note-to-our-champs",
    image: "/gallery/volunteer-champs-thanks.jpg",
    category: "volunteering",
    categoryLabelEn: "Volunteering & Field Action",
    categoryLabelTa: "தன்னார்வக் களப்பணி",
    eventTagEn: "Volunteer Recognition",
    eventTagTa: "தன்னார்வலர் பாராட்டு",
    year: "2026",
    titleEn: "Thanks Note To Our Champs",
    titleTa: "எங்கள் சாதனையாளர்களுக்கு நன்றி",
    descriptionEn: "Your selfless service has touched lives and inspired to change. With gratitude and pride — our heartfelt thanks to our champs.",
    descriptionTa: "உங்கள் தன்னலமற்ற சேவை பல உயிர்களைத் தொட்டு மாற்றத்தை விதைத்துள்ளது. பெருமையுடனும் நன்றியுடனும் எங்கள் சாதனையாளர்களுக்கு வாழ்த்துகள்.",
    locationEn: "Vels University, Chennai",
    locationTa: "வேல்ஸ் பல்கலைக்கழகம், சென்னை",
  },
  {
    id: "one-team-one-mission",
    image: "/gallery/one-team-one-mission.jpg",
    category: "volunteering",
    categoryLabelEn: "Volunteering & Field Action",
    categoryLabelTa: "தன்னார்வக் களப்பணி",
    eventTagEn: "Freedom Carnival 2026",
    eventTagTa: "சுதந்திரத் திருவிழா 2026",
    year: "2026",
    titleEn: "One team. One mission. Endless impact.",
    titleTa: "ஒரு குழு. ஒரு இலக்கு. எல்லையற்ற தாக்கம்.",
    descriptionEn: "One team united by one purpose — creating meaningful community impact and spreading smiles through dedicated volunteer action.",
    descriptionTa: "ஒரே நோக்கத்தால் இணைந்த ஒரு குழு — அர்ப்பணிப்புமிக்க தன்னார்வப் பணிகள் மூலம் சமூகத்தில் நிலையான மாற்றத்தை உருவாக்குகிறது.",
    locationEn: "Vels University, Chennai",
    locationTa: "வேல்ஸ் பல்கலைக்கழகம், சென்னை",
  },
  {
    id: "ooruni-foundation-recognition",
    image: "/gallery/ooruni-foundation-recognition.jpg",
    category: "recognition",
    categoryLabelEn: "Recognition & Honors",
    categoryLabelTa: "அங்கீகாரம் & கூட்டாண்மை",
    eventTagEn: "Ooruni Foundation Recognition",
    eventTagTa: "ஊருணி அறக்கட்டளை அங்கீகாரம்",
    year: "2026",
    titleEn: "Together We Worked, Together We Achieved",
    titleTa: "இணைந்து உழைத்தோம், இணைந்து சாதித்தோம்",
    descriptionEn: "Together we worked, together we achieved. Grateful for the recognition from Ooruni Foundation as Volunteering Partner at Freedom Carnival 2026.",
    descriptionTa: "இணைந்து உழைத்தோம், இணைந்து சாதித்தோம். சுதந்திரத் திருவிழா 2026-ல் தன்னார்வ கூட்டாண்மைக்காக ஊருணி அறக்கட்டளையின் அங்கீகாரத்திற்கு மனமார்ந்த நன்றிகள்.",
    locationEn: "Vels University, Chennai",
    locationTa: "வேல்ஸ் பல்கலைக்கழகம், சென்னை",
  },
  {
    id: "certificate-presentation-afsari-praveen",
    image: "/gallery/certificate-presentation-afsari-praveen.jpg",
    category: "recognition",
    categoryLabelEn: "Recognition & Honors",
    categoryLabelTa: "அங்கீகாரம் & கூட்டாண்மை",
    eventTagEn: "Certificate Presentation",
    eventTagTa: "சான்றிதழ் வழங்கும் விழா",
    year: "2026",
    titleEn: "Certificate Presentation with Mrs. Afsari Praveen",
    titleTa: "திருமதி. அப்சரி பிரவீன் அவர்களுடன் சான்றிதழ் வழங்கும் விழா",
    descriptionEn: "A heartfelt thanks to Mrs. Afsari Praveen for gracing us with her esteemed presence and presenting certificates to dedicated volunteers.",
    descriptionTa: "எங்கள் நிகழ்வில் பங்கேற்று தன்னார்வலர்களுக்கு சான்றிதழ்களை வழங்கி சிறப்பித்த திருமதி. அப்சரி பிரவீன் அவர்களுக்கு மனமார்ந்த நன்றிகள்.",
    locationEn: "Vels University, Chennai",
    locationTa: "வேல்ஸ் பல்கலைக்கழகம், சென்னை",
  },
];

export default function GalleryPage() {
  const { lang, t } = useLanguage();
  const gp = t.galleryPage;

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: gp.filterAll, count: galleryData.length },
    {
      id: "sessions",
      label: lang === "ta" ? "அமர்வுகள் & வழிகாட்டல்" : "Sessions & Guidance",
      count: galleryData.filter((i) => i.category === "sessions").length,
    },
    {
      id: "volunteering",
      label: lang === "ta" ? "தன்னார்வக் களப்பணி" : "Volunteering & Field Action",
      count: galleryData.filter((i) => i.category === "volunteering").length,
    },
    {
      id: "recognition",
      label: lang === "ta" ? "அங்கீகாரம் & சான்றிதழ்கள்" : "Recognition & Honors",
      count: galleryData.filter((i) => i.category === "recognition").length,
    },
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
      <section className="py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Pills (Responsive wrapping, touch-friendly, clean UI) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedPhotoIndex(null);
                }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold min-h-[42px] transition-all duration-200 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-[#F68632]/50 ${
                  isActive
                    ? "bg-[#231F20] text-white shadow-md border border-[#231F20]"
                    : "bg-white text-slate-700 hover:bg-[#FFF2E7] hover:text-[#F68632] border border-[#EFECE8] shadow-2xs"
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

        {/* Photos Grid - Clean, responsive cards (1 col mobile, 2 cols tablet, 3 cols desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {filteredPhotos.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-[#EFECE8] bg-white overflow-hidden shadow-xs hover:border-[#F68632]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Photo Container with Overlay & Zoom */}
              <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={lang === "ta" ? item.titleTa : item.titleEn}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Subtle gradient scrim for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top overlay: Clean event tag pill (no social media badges) & Zoom button */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1.5 z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#231F20]/90 backdrop-blur-md text-[#F68632] border border-[#F68632]/30 text-[11px] font-bold tracking-wide shadow-xs">
                    {lang === "ta" ? item.eventTagTa : item.eventTagEn}
                  </span>

                  {/* Expand / Maximize Icon on Hover */}
                  <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm shrink-0">
                    <Maximize2 className="w-4 h-4 text-[#F68632]" />
                  </div>
                </div>

                {/* Bottom overlay: Location & Year */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/95 text-xs font-medium z-10 pointer-events-none">
                  <div className="flex items-center space-x-1.5 min-w-0 pr-2">
                    <MapPin className="w-3.5 h-3.5 text-[#F68632] shrink-0" />
                    <span className="truncate">{lang === "ta" ? item.locationTa : item.locationEn}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-bold tracking-wider text-slate-300 shrink-0">
                    {item.year}
                  </span>
                </div>
              </div>

              {/* Photo Caption & Context Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#231F20] group-hover:text-[#F68632] transition-colors line-clamp-2 leading-snug">
                    {lang === "ta" ? item.titleTa : item.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
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
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#1A1A1A] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-[#F68632] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>{lang === "ta" ? "நேரில் பார்வையிட" : "Visit Our Learning Centers"}</span>
            </div>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-white">
              {lang === "ta" ? "எங்கள் பணிகளை நேரில் காண வாருங்கள்" : "Experience Our Learning Environment in Chennai"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === "ta"
                ? "மாணவர்கள், தன்னார்வலர்கள் மற்றும் நிறுவனப் பிரதிநிதிகள் எங்கள் பயிற்சி மையத்தை நேரில் பார்வையிட வரவேற்கப்படுகிறார்கள்."
                : "Prospective learners, mentors, and partner organizations are warmly welcomed to tour our coding labs and witness student transformation firsthand."}
            </p>
          </div>

          <div className="flex items-center justify-center shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="w-full md:w-auto text-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#F68632] text-white font-bold text-sm hover:bg-[#E07418] transition-colors shadow-md min-h-[44px] flex items-center justify-center"
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
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full bg-[#1A1A1A] text-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col max-h-[94vh] sm:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b border-slate-800 bg-[#231F20] shrink-0">
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#F68632]/20 text-[#F68632] border border-[#F68632]/30 text-xs font-bold truncate">
                  {lang === "ta" ? selectedItem.categoryLabelTa : selectedItem.categoryLabelEn}
                </span>
                <span className="text-xs text-slate-400 shrink-0">
                  {selectedPhotoIndex! + 1} / {filteredPhotos.length}
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors focus:outline-none min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label={gp.closeModal}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[50vh] sm:max-h-[58vh] bg-black overflow-hidden flex items-center justify-center shrink-0">
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
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
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
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Footer Caption */}
            <div className="p-4 sm:p-5 lg:p-6 bg-[#231F20] space-y-2.5 sm:space-y-3 overflow-y-auto">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <span className="px-2.5 py-1 rounded-md bg-[#FFF2E7]/10 text-[#F68632] border border-[#F68632]/25 text-xs font-bold">
                  {lang === "ta" ? selectedItem.eventTagTa : selectedItem.eventTagEn}
                </span>
                <span className="text-xs text-slate-400">
                  {selectedItem.year}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h2 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                  {lang === "ta" ? selectedItem.titleTa : selectedItem.titleEn}
                </h2>
                <div className="flex items-center space-x-1.5 text-xs text-[#F68632] shrink-0">
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
