import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileBar from "@/components/layout/StickyMobileBar";

export const metadata: Metadata = {
  title: "Addithalam Foundation | Free IT Education & Mentorship in Chennai",
  description:
    "Addithalam Foundation provides free, industry-grade IT education, 1-on-1 software mentorship, and structured career pathways for underprivileged students and women in Chennai, Tamil Nadu.",
  keywords: [
    "Addithalam Foundation",
    "Free IT education Chennai",
    "IT training for underprivileged students",
    "Women in tech Chennai",
    "80G tax exemption donation NGO Chennai",
    "Free computer courses Tamil Nadu",
    "Software engineering mentorship non-profit"
  ],
  authors: [{ name: "Addithalam Foundation" }],
  openGraph: {
    title: "Addithalam Foundation | Empowering Through Technology",
    description:
      "Transforming potential into careers through free IT education, mentorship, and placement support.",
    url: "https://addithalamfoundation.org",
    siteName: "Addithalam Foundation",
    locale: "en_IN",
    type: "website",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#231F20] antialiased selection:bg-[#F68632]/20 selection:text-[#231F20]">
        <LanguageProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#231F20] text-[#F68632] border border-[#F68632] rounded-md font-semibold"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <StickyMobileBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
