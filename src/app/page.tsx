import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ImpactMetricsBar from "@/components/home/ImpactMetricsBar";
import ThreeDoorsSection from "@/components/home/ThreeDoorsSection";
import OpportunityGapSection from "@/components/home/OpportunityGapSection";
import ProgramsOverview from "@/components/home/ProgramsOverview";
import LearningJourney from "@/components/home/LearningJourney";
import WomenInTechFeature from "@/components/home/WomenInTechFeature";
import LearnerStories from "@/components/home/LearnerStories";
import LeadershipPreview from "@/components/home/LeadershipPreview";

export default function HomePage() {
  return (
    <>
      {/* 01. Hero Section */}
      <HeroSection />

      {/* 02. Verified Impact Strip */}
      <ImpactMetricsBar />

      {/* 03. Three Audience Doors */}
      <ThreeDoorsSection />

      {/* 04. The Opportunity Gap */}
      <OpportunityGapSection />

      {/* 05. Interactive Programs Hub */}
      <ProgramsOverview />

      {/* 06. 6-Stage Learning Journey */}
      <LearningJourney />

      {/* 07. Women Empowerment in Tech */}
      <WomenInTechFeature />

      {/* 08. Learner Stories of Change */}
      <LearnerStories />

      {/* 09. Leadership Preview */}
      <LeadershipPreview />
    </>
  );
}
