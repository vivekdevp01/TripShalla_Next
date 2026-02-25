'use client'

import TestimonialSection from "../components/TestimonialSection";
import ContactMapCard from "../components/ContactMapCard";
import GallerySection2 from "../components/GallerySection2";
import GalleryScroller from "../components/GalleryScroller";
import GalleryHero from "../components/GalleryHero";
import GalleryCTA from "../components/GalleryCTA";
import EnquiryModal from "../components/Packages/EnquiryModal";

import { useState } from "react";
import ContactMappCard from "../components/ContactMappCard";
import Header3 from "../components/Header3";
export default function Gallery() {

  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  return (
    <>
    <Header3/>
    <div className="space-y-10">
      <GalleryHero />
      <GallerySection2 />
      {/* <GalleryCTA
        onPrimaryClick={() => navigate("/contact")}
        onSecondaryClick={() => setIsEnquiryOpen(true)}
      /> */}
      <TestimonialSection />
      <ContactMappCard onEnquiryClick={() => setIsEnquiryOpen(true)} />
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        packageId={null}
      />
      {/* <GalleryScroller /> */}
    </div>
    </>
  );
}
