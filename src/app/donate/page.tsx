"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, HeartHandshake, CheckCircle2, QrCode, Building2, ArrowRight, Info, Copy } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { useLanguage } from "@/context/LanguageContext";

export default function DonatePage() {
  const { t, lang } = useLanguage();
  const d = t.donatePage;

  const [amount, setAmount] = useState<number>(3000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [donorData, setDonorData] = useState({
    name: "",
    email: "",
    mobile: "",
    pan: "",
    address: ""
  });
  const [paymentStep, setPaymentStep] = useState<"form" | "upi" | "success">("form");
  const [copiedText, setCopiedText] = useState("");

  const presetTiers = [
    {
      value: 1000,
      label: "₹1,000",
      outcome: lang === "ta" ? "1 மாத கற்றல் உபகரணம்" : "1 Month Learning Kit & Cloud Sandbox"
    },
    {
      value: 3000,
      label: "₹3,000",
      outcome: lang === "ta" ? "முழு மென்பொருள் பயிற்சி & ஆய்வக வசதி" : "Full IT Module & Lab Hardware Access"
    },
    {
      value: 5000,
      label: "₹5,000",
      outcome: lang === "ta" ? "முழுமையான மாணவர் ஆதரவு" : "Complete 6-Month Student Sponsorship"
    }
  ];

  const handleSelectPreset = (val: number) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    setCustomAmount(val);
    if (val) {
      setAmount(parseInt(val, 10));
    }
  };

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep("upi");
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2500);
  };

  return (
    <div className="bg-[#FAF8F5]">
      {/* Immersive PageHero with Background Image */}
      <PageHero
        badge={d.heroBadge}
        title={d.heroTitle}
        subtitle={d.heroSubtitle}
        backgroundImage="/images/audience/digital-literacy.jpg"
      />

      {/* Main Donation Container */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Donation Form / UPI Widget (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#EFECE8] p-6 sm:p-10 shadow-lg space-y-8">
            
            {/* Step 1: Form & Amount Selection */}
            {paymentStep === "form" && (
              <form onSubmit={handleProceed} className="space-y-6">
                
                {/* Frequency Toggle */}
                <div className="flex rounded-xl bg-[#FAF8F5] p-1 border border-[#EFECE8]">
                  <button
                    type="button"
                    onClick={() => setFrequency("one-time")}
                    className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${
                      frequency === "one-time"
                        ? "bg-white text-[#231F20] shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {d.oneTime}
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency("monthly")}
                    className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${
                      frequency === "monthly"
                        ? "bg-white text-[#231F20] shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {d.monthly}
                  </button>
                </div>

                {/* Preset Amount Tiers */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#231F20] uppercase tracking-wider block">
                    {d.selectAmount}
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {presetTiers.map((tier) => {
                      const isSelected = amount === tier.value && !customAmount;
                      return (
                        <button
                          key={tier.value}
                          type="button"
                          onClick={() => handleSelectPreset(tier.value)}
                          className={`p-4 rounded-xl border text-center transition-all flex flex-col justify-between ${
                            isSelected
                              ? "border-2 border-[#F68632] bg-[#FFF2E7] text-[#231F20] shadow-xs"
                              : "border-[#EFECE8] bg-[#FAF8F5] text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          <span className="font-heading font-extrabold text-xl">
                            {tier.label}
                          </span>
                          <span className="text-[10px] text-slate-500 font-medium mt-1 leading-tight">
                            {tier.outcome}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    {d.customAmount}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter amount (e.g. 10000)"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-[#F68632]"
                  />
                </div>

                {/* Donor Details */}
                <div className="space-y-4 pt-4 border-t border-[#EFECE8] text-xs">
                  <p className="font-bold text-[#231F20] uppercase tracking-wider">
                    {d.donorDetails}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-slate-800 block mb-1">
                        {d.fullName}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="As on PAN card"
                        value={donorData.name}
                        onChange={(e) => setDonorData({ ...donorData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F68632]"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-800 block mb-1">
                        {d.emailAddress}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="receipt@example.com"
                        value={donorData.email}
                        onChange={(e) => setDonorData({ ...donorData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F68632]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-slate-800 block mb-1">
                        {d.mobileNumber}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98400 00000"
                        value={donorData.mobile}
                        onChange={(e) => setDonorData({ ...donorData, mobile: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F68632]"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-800 block mb-1">
                        {d.panNumber}
                      </label>
                      <input
                        type="text"
                        placeholder="ABCDE1234F"
                        maxLength={10}
                        value={donorData.pan}
                        onChange={(e) => setDonorData({ ...donorData, pan: e.target.value.toUpperCase() })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F68632] uppercase"
                      />
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FFF2E7] border border-[#F68632]/20 flex items-start space-x-2 text-slate-700">
                    <Info className="w-4 h-4 text-[#F68632] shrink-0 mt-0.5" />
                    <p className="text-[11px] leading-relaxed">
                      {d.panNote}
                    </p>
                  </div>
                </div>

                {/* Submit to Payment Screen */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="flex items-center justify-center space-x-2 w-full py-4 rounded-xl bg-[#F68632] text-white font-bold text-base hover:bg-[#E07418] active:scale-[0.98] transition-all shadow-md"
                  >
                    <span>{d.payBtn} (₹{amount.toLocaleString("en-IN")})</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 2: UPI QR & Banking Details */}
            {paymentStep === "upi" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#EFECE8]">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-[#231F20]">
                      ₹{amount.toLocaleString("en-IN")}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Donor: {donorData.name} ({donorData.email})
                    </p>
                  </div>
                  <button
                    onClick={() => setPaymentStep("form")}
                    className="text-xs font-semibold text-[#F68632] hover:underline"
                  >
                    {lang === "ta" ? "விவரங்களை மாற்ற" : "Edit Details"}
                  </button>
                </div>

                {/* Official Institutional UPI Payment Box */}
                <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EFECE8] text-center space-y-4">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{lang === "ta" ? "அதிகாரப்பூர்வ அறக்கட்டளை கணக்கு" : "Official Institutional Account"}</span>
                  </div>

                  <p className="text-xs text-slate-600">
                    {d.scanUpi}
                  </p>

                  {/* Visual QR Code Display */}
                  <div className="w-48 h-48 mx-auto bg-white p-3 rounded-2xl border border-slate-300 shadow-sm flex flex-col items-center justify-center space-y-2">
                    <QrCode className="w-32 h-32 text-[#231F20]" />
                    <span className="text-[10px] font-bold text-slate-500">ADDITHALAM FOUNDATION</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-700">{d.officialUpiId}</p>
                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white border border-slate-300">
                      <code className="text-xs font-mono font-bold text-[#231F20]">
                        addithalamfoundation@sbi
                      </code>
                      <button
                        type="button"
                        onClick={() => copyToClipboard("addithalamfoundation@sbi", "upi")}
                        className="text-slate-400 hover:text-[#F68632]"
                        title={d.copyUpiBtn}
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    {copiedText === "upi" && (
                      <p className="text-[11px] text-emerald-600 font-semibold">{d.copiedNotice}</p>
                    )}
                  </div>
                </div>

                {/* Institutional NEFT / RTGS Bank Transfer */}
                <div className="p-5 rounded-2xl bg-white border border-[#EFECE8] space-y-3 text-xs text-slate-700">
                  <div className="flex items-center space-x-2 font-bold text-[#231F20]">
                    <Building2 className="w-4 h-4 text-[#F68632]" />
                    <span>{d.bankTransferTitle}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-500 block">{lang === "ta" ? "கணக்கு பெயர்:" : "Account Name:"}</span>
                      <strong className="text-slate-900">ADDITHALAM FOUNDATION</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">{lang === "ta" ? "கணக்கு எண்:" : "Account Number:"}</span>
                      <strong className="text-slate-900 font-mono">4328109827361</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">{lang === "ta" ? "ஐஎஃப்எஸ்சி (IFSC):" : "IFSC Code:"}</span>
                      <strong className="text-slate-900 font-mono">SBIN0001234</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">{lang === "ta" ? "வங்கி & கிளை:" : "Bank & Branch:"}</span>
                      <strong className="text-slate-900">State Bank of India, Chennai</strong>
                    </div>
                  </div>
                </div>

                {/* Completed Payment Confirmation Button */}
                <div>
                  <button
                    onClick={() => setPaymentStep("success")}
                    className="flex items-center justify-center space-x-2 w-full py-3.5 rounded-xl bg-emerald-700 text-white font-bold text-sm hover:bg-emerald-800 transition-colors shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>{d.completedBtn}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Success Confirmation */}
            {paymentStep === "success" && (
              <div className="text-center py-8 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <HeartHandshake className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading font-extrabold text-2xl text-[#231F20]">
                    {d.thankYouTitle}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    {d.thankYouSubtitle} (<strong>₹{amount.toLocaleString("en-IN")}</strong>)
                  </p>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    {d.taxEmailNote} ({donorData.email || "your email"})
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/programs"
                    className="px-6 py-2.5 rounded-lg bg-[#231F20] text-white font-semibold text-xs hover:bg-slate-800"
                  >
                    {lang === "ta" ? "திட்டங்களை காண்க" : "Explore Sponsored Programs"}
                  </Link>
                  <button
                    onClick={() => {
                      setPaymentStep("form");
                      setDonorData({ name: "", email: "", mobile: "", pan: "", address: "" });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200"
                  >
                    {lang === "ta" ? "மீண்டும் நன்கொடை அளிக்க" : "Make Another Donation"}
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Trust Signals & FAQ (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Tax Exemption Summary */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#EFECE8] shadow-sm space-y-4">
              <div className="flex items-center space-x-2 text-[#231F20] font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-[#F68632]" />
                <span>{lang === "ta" ? "80G & 12A சட்டப்பூர்வ அனுமதி" : "Statutory 80G & 12A Compliance"}</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F68632] shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === "ta" ? "50% வரி விலக்கு:" : "50% Tax Exemption:"}</strong>{" "}
                    {lang === "ta" ? "இந்திய வருமான வரிச் சட்டம் பிரிவு 80G கீழ் வரிச் சலுகை பெறலாம்." : "All Indian taxpayers can claim deduction under Section 80G."}
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F68632] shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === "ta" ? "படிவம் 10BE வழங்கப்படும்:" : "Form 10BE Issued:"}</strong>{" "}
                    {lang === "ta" ? "வருமான வரித் துறையிடம் அதிகாரப்பூர்வ சான்றிதழ் சமர்ப்பிக்கப்படும்." : "We file donor data directly with the Income Tax Department for automated tax credit."}
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F68632] shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === "ta" ? "100% தொண்டு அறக்கட்டளை:" : "100% Non-Profit Trust:"}</strong>{" "}
                    {lang === "ta" ? "அனைத்து நிதியும் மாணவர்களின் கல்வி மற்றும் ஆய்வக உபகரணங்களுக்கு மட்டுமே செலவிடப்படுகிறது." : "Zero commercial profit; all funds deploy into student labs and materials."}
                  </span>
                </li>
              </ul>
            </div>

            {/* Fund Allocation Pie Breakdown */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-[#EFECE8] space-y-3 text-xs">
              <h4 className="font-heading font-bold text-sm text-[#231F20]">
                {lang === "ta" ? "நன்கொடை பயன்பாடு (Fund Allocation)" : "Where Your Donation Goes (Fund Allocation)"}
              </h4>
              <div className="space-y-2 text-slate-700">
                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>{lang === "ta" ? "கணினி ஆய்வகம் & மென்பொருள்:" : "Student Hardware Labs & Software:"}</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-[#F68632] h-2 rounded-full w-[70%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>{lang === "ta" ? "கற்றல் பொருட்கள் & நேர்காணல் பயிற்சி:" : "Learning Kits & Placement Prep:"}</span>
                    <span>20%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-[#231F20] h-2 rounded-full w-[20%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>{lang === "ta" ? "தணிக்கை & சட்டப்பூர்வ நிர்வாகம்:" : "Audit & Statutory Governance:"}</span>
                    <span>10%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-400 h-2 rounded-full w-[10%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Need Help? */}
            <div className="p-6 rounded-2xl bg-white border border-[#EFECE8] space-y-2 text-xs text-slate-600">
              <p className="font-bold text-[#231F20]">
                {lang === "ta" ? "நன்கொடை மற்றும் CSR கேள்விகளுக்கு" : "Donor Queries & Corporate Inquiries"}
              </p>
              <p>
                {lang === "ta" ? "வங்கி பரிமாற்றம் அல்லது 80G ரசீது குறித்த சந்தேகங்களுக்கு தொடர்பு கொள்ளவும்:" : "For Wire transfers, CSR cheques, or 80G receipt queries, contact us at:"}
              </p>
              <p className="font-mono font-bold text-[#F68632]">
                contact@addithalamfoundation.org
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
