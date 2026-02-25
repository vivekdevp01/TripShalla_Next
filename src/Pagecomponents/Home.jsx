"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import ExploreActivities from "../components/ExploreActivities";
import FeaturedExperiences from "../components/FeaturedExperiences";
import ExploreUttarakhand from "../components/ExploreUttarakhand";
import StatsAndReviewsSection from "../components/StatsAndReviewSection";
import ContactCTASection from "../components/ContactCtaSection";
import EnquiryModal from "../components/Packages/EnquiryModal";
import HowItWorksMini from "../components/HowItWorksMini";
import LocalAdvantageSection from "../components/LocalAdvantageSection";
import BaseHeader from "../components/BaseHeader";
import Footer from "../components/Footer";

export default function Home() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("enquiryShown");
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowEnquiry(true);
        sessionStorage.setItem("enquiryShown", "true");
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <BaseHeader />
      <div className="space-y-10">
        <HeroSection />
        <ExploreUttarakhand />
        <HowItWorksMini />
        <FeaturedExperiences />
        <ExploreActivities />
        <LocalAdvantageSection />
        <StatsAndReviewsSection onOpenEnquiry={() => setShowEnquiry(true)} />
        <div className="relative -mb-px">
          <svg viewBox="0 0 1440 120" className="fill-[#064E3B] w-full h-auto transform rotate-180">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>
        <ContactCTASection />
        <EnquiryModal isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
      </div>
    </>
  );
}