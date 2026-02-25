"use client";
import TestimonialSection from "../components/TestimonialSection";
import AboutHero from "../components/AboutHero";
import WhoWeAre from "../components/WhoWeAre";
import MissionSection from "../components/MissionSection";
import TeamSection from "../components/TeamSection";
import ValuesSection from "../components/ValueSection";
import HowWeWork from "../components/HowWeWork";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Aboutus() {
  return (
    <>
      <Header title="ABOUT US" bgImage="/assets/9.jpg" />
      <div className="space-y-10">
        <AboutHero />
        <WhoWeAre />
        <MissionSection />
        <TeamSection />
        <ValuesSection />
        <HowWeWork />
        <TestimonialSection />
      </div>
    </>
  );
}