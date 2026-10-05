"use client";

import React, { useState } from "react";
import { Mail, MapPin, MessageSquare, CheckCircle2, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { trustData } from "@/data/trustData";
import PageHero from "@/components/layout/PageHero";
import { useLanguage } from "@/context/LanguageContext";
import { getSocialLogo } from "@/components/common/SocialLogos";

export default function ContactPage() {
  const { t, lang } = useLanguage();
  const c = t.contactPage;

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    intent: "Student Program Enrolment",
    message: ""
  });

  const faqs = lang === "ta" ? [
    {
      q: "அடித்தளம் அறக்கட்டளையின் அனைத்துப் பயிற்சிகளும் முற்றிலும் இலவசமா?",
      a: "ஆம். தகுதியான அனைத்து மாணவர்களுக்கும் கணினி ஆய்வக வசதி, கல்விப் பொருட்கள், வழிகாட்டல் மற்றும் நேர்காணல் பயிற்சிகள் 100% முற்றிலும் இலவசமாக வழங்கப்படுகின்றன."
    },
    {
      q: "மாணவர் பயிற்சிகளுக்கு யார் விண்ணப்பிக்கலாம்?",
      a: "பொருளாதாரத்தில் பின்தங்கிய மாணவர்கள், படிப்பை பாதியில் நிறுத்தியவர்கள், இறுதியாண்டு கல்லூரி மாணவர்கள் மற்றும் பணிக்குத் திரும்ப விரும்பும் பெண்கள் விண்ணப்பிக்கலாம்."
    },
    {
      q: "சேர்வதற்கு என்னிடம் மடிக்கணினி (Laptop) இருக்க வேண்டுமா?",
      a: "அவசியமில்லை. பயிற்சி நேரங்களில் மாணவர்களுக்கான அதிநவீன டெஸ்க்டாப் கணினி ஆய்வகங்களை அடித்தளம் அறக்கட்டளை இலவசமாக வழங்குகிறது."
    },
    {
      q: "பயிற்சி கால அளவு மற்றும் நேரம் என்ன?",
      a: "முக்கிய தகவல் தொழில்நுட்பப் பயிற்சி 6 மாதங்கள் (திங்கள் முதல் வெள்ளி காலை). பெண்கள் திட்டம் மற்றும் மென்திறன் பயிற்சிகளுக்கு நெகிழ்வான நேரங்கள் உள்ளன."
    },
    {
      q: "நன்கொடைக்கு 80G வரி விலக்கு பெறுவது எப்படி?",
      a: "நன்கொடை அளிக்கும் போது உங்கள் பான் (PAN) எண்ணை உள்ளிடவும். உடனடி ரசீது மற்றும் வருமான வரித் துறைக்கான படிவம் 10BE உங்கள் மின்னஞ்சலுக்கு அனுப்பப்படும்."
    }
  ] : [
    {
      q: "Are all programs at Addithalam Foundation completely free?",
      a: "Yes. 100% of our educational programs, lab access, study materials, and placement mentorship are provided free of tuition fees to qualifying students."
    },
    {
      q: "Who is eligible to apply for student courses?",
      a: "Our programs are open to underprivileged students, college dropouts, final-year undergraduates from economically challenged families, and women seeking career re-entry in Chennai and surrounding districts."
    },
    {
      q: "Do I need to own a laptop to join?",
      a: "No. Addithalam Foundation provides fully equipped desktop computer workstations in our training labs in Chennai during scheduled class hours."
    },
    {
      q: "How long are the courses and what are the timings?",
      a: "Our core Technical Skills track runs for 6 months (Monday to Friday mornings). The Women in Tech program and Soft Skills tracks offer flexible morning, afternoon, or weekend schedules."
    },
    {
      q: "How do I claim 50% tax deduction on my donation under Section 80G?",
      a: "When you donate via our online Donate page or bank transfer, please provide your PAN. We issue an instant donation receipt and submit your filing to the Income Tax Department to generate Form 10BE."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF8F5]">
      {/* Immersive PageHero with Background Image */}
      <PageHero
        badge={c.heroBadge}
        title={c.heroTitle}
        subtitle={c.heroSubtitle}
        backgroundImage="/images/audience/digital-literacy.jpg"
      />

      {/* Main Grid */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Channels & Location (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#F68632] uppercase tracking-wider block">
                {lang === "ta" ? "அதிகாரப்பூர்வ தொடர்புகள்" : "Official Channels"}
              </span>
              <h2 className="font-heading font-bold text-2xl text-[#231F20]">
                {c.reachDirectly}
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              {/* Location */}
              <div className="p-5 rounded-2xl bg-white border border-[#EFECE8] flex items-start space-x-3.5 shadow-xs">
                <MapPin className="w-5 h-5 text-[#F68632] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-heading">{c.registeredOffice}</strong>
                  <span>{c.chennaiAddress}</span>
                  <p className="text-slate-500 text-xs mt-0.5">{c.officeHours}</p>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-white border border-[#EFECE8] flex items-start space-x-3.5 shadow-xs">
                <Mail className="w-5 h-5 text-[#F68632] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-heading">{c.emailTitle}</strong>
                  <a href={`mailto:${trustData.email}`} className="text-[#F68632] font-bold hover:underline">
                    {trustData.email}
                  </a>
                  <p className="text-slate-500 text-xs mt-0.5">{lang === "ta" ? "மாணவர் உதவி மற்றும் நிறுவன தொடர்புகளுக்கு" : "General inquiries, student support & partnerships"}</p>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="p-5 rounded-2xl bg-[#FFF2E7] border border-[#F68632]/20 flex items-start space-x-3.5">
                <MessageSquare className="w-5 h-5 text-[#F68632] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-heading">{c.helplineTitle}</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {c.helplineDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="space-y-2.5 pt-2">
              <p className="text-xs font-bold text-[#231F20] uppercase tracking-wider">
                {c.followChannels}
              </p>
              <div className="flex items-center space-x-3">
                {trustData.socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Official Addithalam Foundation ${s.platform} channel`}
                    title={`Follow on ${s.platform}`}
                    className="w-11 h-11 rounded-xl bg-[#FFF2E7] border border-[#F68632]/25 text-[#231F20] hover:bg-[#F68632] hover:text-white hover:border-[#F68632] shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center group"
                  >
                    {getSocialLogo(s.platform, "w-5 h-5 transition-transform duration-200 group-hover:scale-110")}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#EFECE8] p-6 sm:p-10 shadow-md">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="space-y-1 pb-2 border-b border-[#EFECE8]">
                  <h3 className="font-heading font-extrabold text-xl text-[#231F20]">
                    {c.sendMessageTitle}
                  </h3>
                  <p className="text-slate-500 text-xs">
                    {c.formSubtitle}
                  </p>
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">
                    {c.yourName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={c.namePlaceholder || "Enter your name"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F68632]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">
                      {c.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={c.emailPlaceholder || "Enter your email"}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F68632]"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">
                      {c.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={c.phonePlaceholder || "Enter your phone number"}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F68632]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">
                    {c.intentLabel}
                  </label>
                  <select
                    value={formData.intent}
                    onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F68632]"
                  >
                    <option value="Student Program Enrolment">
                      {lang === "ta" ? "மாணவர் சேர்க்கை (இலவச பயிற்சி)" : "Student Program Enrolment (Free Courses)"}
                    </option>
                    <option value="Women in Tech Program">
                      {lang === "ta" ? "பெண்கள் தொழில்நுட்பப் பயிற்சி" : "Women in Tech Program"}
                    </option>
                    <option value="Volunteer / Mentorship">
                      {lang === "ta" ? "தன்னார்வலர் / வழிகாட்டுதல்" : "Volunteer / Mentorship"}
                    </option>
                    <option value="Corporate CSR & Partnerships">
                      {lang === "ta" ? "நிறுவன CSR & கூட்டாண்மை" : "Corporate CSR & Partnerships"}
                    </option>
                    <option value="Donation & 80G Tax Exemption">
                      {lang === "ta" ? "நன்கொடை & 80G வரி விலக்கு" : "Donation & 80G Tax Exemption"}
                    </option>
                    <option value="General Inquiry">
                      {lang === "ta" ? "பொதுவான கேள்விகள்" : "General Inquiry"}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">
                    {c.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={c.messagePlaceholder || "Enter your message"}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F68632]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#F68632] text-white font-bold text-sm hover:bg-[#E07418] transition-colors shadow-xs"
                  >
                    {c.submitBtn}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-extrabold text-xl text-[#231F20]">
                    {lang === "ta" ? "செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!" : "Message Sent Successfully!"}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === "ta"
                      ? `நன்றி ${formData.name}. உங்கள் செய்தி பெறப்பட்டது. விரைவில் ${formData.email} முகவரிக்கு தொடர்பு கொள்வோம்.`
                      : `Thank you, ${formData.name}. Our team has received your message regarding ${formData.intent} and will respond to ${formData.email} within 1-2 business days.`}
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg bg-[#231F20] text-white font-semibold text-xs hover:bg-slate-800"
                >
                  {lang === "ta" ? "மறுபடியும் செய்தி அனுப்ப" : "Send Another Message"}
                </button>
              </div>
            )}
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="pt-12 border-t border-[#EFECE8] space-y-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-[#F68632] uppercase tracking-wider block">
              {c.faqBadge}
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#231F20]">
              {c.faqTitle}
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-white border border-[#EFECE8] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  >
                    <span className="font-heading font-bold text-sm sm:text-base text-[#231F20]">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </section>
    </div>
  );
}
