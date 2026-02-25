"use client";
import React, { useState } from "react";
import IndiaPackagesDescription from "./IndiaPackagesDescription";
// import TourSlider from "./PackageGrid";
import GroupOfferBanner from "./GroupOfferBanner";
import EnquiryModal from "./Packages/EnquiryModal";
import WhyChooseHimalayan from "./WhyChooseHimalayan";
import PopularActivitiesCardGrid from "./PopularActivitiesCardGrid";
import PackageFilters from "./PackageFilter";
import PackageGrid from "./PackageGrid";
import ResultsSummary from "./ResultSummary";
import TrustAssuranceStrip from "./TrustAssuranceStrip";
import PackageFAQs from "./PackageFAQs";
import HeroHeader from "./HeroHeader";
export default function Packages() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    budget: 10000, // High value = no filter
    duration: [],
    difficulty: [],
    sortBy: "popularity",
  });
  const [resultCount, setResultCount] = useState(null);

  return (
    <>
      <HeroHeader />
      <div className="w-full">
        {/* INTRO SECTION */}
        <section className="pt-16">
          <IndiaPackagesDescription />
        </section>
        {/* 🔍 FILTER BAR */}
        <section className=" max-w-7xl mx-auto px-6 mt-8">
          <PackageFilters filters={filters} setFilters={setFilters} />
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-10">
          <PackageGrid filters={filters} />
        </section>

        {/* 📦 PACKAGE GRID */}
        {/* <section className="max-w-7xl mx-auto px-6 mt-10">
        <PackageGrid filters={filters} />
      </section> */}
        {/* PACKAGES SLIDER */}
        {/* <section className="pb-2">
        <TourSlider />
      </section> */}

        {/* SOFT DIVIDER */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
        {/* GROUP CTA BANNER */}
        <GroupOfferBanner onClick={() => setIsEnquiryOpen(true)} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
        <PopularActivitiesCardGrid />
        <div className="max-w-7xl mx-auto px-6">
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
        <WhyChooseHimalayan />
        <div className="max-w-7xl mx-auto px-6">
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
        <TrustAssuranceStrip />
        <section className="max-w-7xl mx-auto px-6 mt-20">
          <PackageFAQs title="Packages FAQs" />
        </section>
        {/* MODAL */}
        <EnquiryModal
          isOpen={isEnquiryOpen}
          onClose={() => setIsEnquiryOpen(false)}
          packageId={null}
        />
      </div>
    </>
  );
}
