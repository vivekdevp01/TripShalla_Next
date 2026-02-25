'use client'
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  HiOutlineVideoCamera,
  HiOutlineShieldCheck,
  HiOutlinePhotograph,
} from "react-icons/hi";
import { MdOutlineHeight } from "react-icons/md";

// Components
import Header from "./Header";
import ExplorationGrid from "./ExplorationGrid";
import TourDetails from "./TourDetails";
import TripItinerary from "./TripItinerary";
import PackageSummary from "./PackageSummary";
import PolicyAccordion from "./PolicyAccordion";
import EnquiryCard from "./Packages/EnquiryCard";
import WhyChooseUs from "./Packages/WhyChooseUs";
import GotAQuestionCard from "./Packages/GotQuestionCard";
import GroupOfferCard from "./Packages/GroupOfferCard";
import FAQs from "./Packages/Faqs";
import StickyWhatsApp from "./Packages/StickyWhatsappButton";
import PriceCard from "./Packages/PriceCard";
import splashActivityDetails from "../json/splashActivityDetails.json";
import CorporateCollaborationCard from "./CorporateCollaborationCard";

export default function Tour2() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);

  // STATIC DATA - Replacing Supabase Logic
  // const BUNGY_DATA = {
  //   "splash-bungy": {
  //     id: 1,
  //     name: "Splash Bungy Jumping",
  //     location: "Shivpuri, Rishikesh",
  //     height: "109 Metres",
  //     jumpType: "Water Touch",
  //     price: "3,999",
  //     oldPrice: "4,999",
  //     tagline: "India's highest water-touch bungy jump experience.",
  //     media: [
  //       { media_url: "/src/assets/18.jpg", media_role: "hero_banner" },
  //       { media_url: "/src/assets/19.jpg", media_role: "gallery" },
  //       { media_url: "/src/assets/20.jpg", media_role: "gallery" },
  //     ],
  //     inclusions: ["Safety Gear", "DSLR Video", "Jump Certificate", "Professional Briefing"],
  //     exclusions: ["Personal Expenses", "Transport to Site", "Insurance"],
  //     faqs: [
  //       { q: "Is it safe?", a: "We use international standard equipment and certified jump masters." },
  //       { q: "What is the weight limit?", a: "Minimum 35kg and Maximum 120kg." }
  //     ],
  //     policies: [
  //       { id: 1, title: "Cancellation Policy", points: ["Non-refundable within 24 hours.", "100% credit note for weather cancellations."] }
  //     ]
  //   }
  // };

  // const pkg = BUNGY_DATA[slug] || BUNGY_DATA["splash-bungy"]; // Fallback for dev
  const pkg = splashActivityDetails[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setLoading(false), 800); // Simulate light loading
  }, [slug]);
  if (!pkg) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500 font-bold">
        Activity not found
      </div>
    );
  }
  if (loading)
    return (
      <div className="h-screen flex items-center justify-center text-emerald-600 font-bold">
        Loading Adrenaline...
      </div>
    );

  return (
    <main className="bg-[#FAFAFA]">
      {/* 1. HEADER - Bungy Style */}
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": pkg.name,
    "description": pkg.tagline,
    "url": `https://www.tripshalla.in/bungy/${slug}`,
    "image": pkg.media[0]?.media_url,
    "offers": {
      "@type": "Offer",
      "price": pkg.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "Organization",
      "name": "Tripshalla",
      "url": "https://www.tripshalla.in"
    }
  })}}
/>

      <Header
        variant="tour"
        title={pkg.name}
        subtitle={`📍 ${pkg.location}`}
        badges={[
          pkg.height || pkg.length || pkg.display_metric,
          pkg.activity_type,
          "Certified Safety",
        ]}
        bgImage={pkg.media[0].media_url}
      />

      {/* 2. MEDIA GALLERY */}
      <ExplorationGrid media={pkg.media} />

      <section className="max-w-7xl mx-auto px-4 md:px-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-14">
            <TourDetails
              title={pkg.name}
              highlight={pkg.tagline}
              details={pkg}
              summary={[
                pkg.height || pkg.length,
                pkg.duration,
                `Age: ${pkg.minimum_age}+`,
              ]}
              amenities={[
                { icon: <MdOutlineHeight />, label: pkg.height || pkg.length },
                { icon: <HiOutlineShieldCheck />, label: "Certified Safety" },
                { icon: <HiOutlineVideoCamera />, label: "Optional Video" },
                { icon: <HiOutlinePhotograph />, label: "Photo Friendly" },
              ]}
              durations={[
                {
                  id: pkg.id,
                  title: pkg.activity_type,
                  final_price: pkg.price,
                  image: pkg.media[1]?.media_url || pkg.media[0].media_url,
                },
              ]}
            />
            {pkg.activity_type === "Combo Adventure Package" &&
              pkg.includes && (
                <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">
                    This Combo Includes
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {pkg.includes.map((item) => (
                      <div
                        key={item.slug}
                        className="border border-slate-200 rounded-2xl p-5 hover:shadow-md transition"
                      >
                        <h4 className="font-extrabold text-lg text-slate-800">
                          {item.name}
                        </h4>
                        <p className="text-sm text-slate-600 mt-2">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

            {/* ITINERARY (Adjusted for "Jump Process") */}
            <CorporateCollaborationCard />
            <section
              id="itinerary-end"
              className="bg-white rounded-3xl p-6 md:p-8 shadow-sm"
            >
              {/* <h3 className="text-2xl font-bold mb-6">Your Jump Experience</h3> */}
              <h3 className="text-2xl font-bold mb-6">
                {pkg.activity_type.includes("Combo")
                  ? "Your Combo Experience"
                  : "Your Activity Experience"}
              </h3>

              <TripItinerary
                days={pkg.experience_flow.map((step) => ({
                  day: step.step,
                  title: step.title,
                  description: step.description,
                }))}
              />
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="h-full flex flex-col">
              <div className="space-y-8 mb-8">
                <PriceCard
                  pricing={{
                    final_price: pkg.price,
                    discount_price: pkg.oldPrice,
                  }}
                />
                <GotAQuestionCard />
                <GroupOfferCard />
                <WhyChooseUs />
              </div>
              <div className="sticky top-24 self-start w-full">
                <EnquiryCard />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 3. FOOTER SECTIONS */}
      <section className="mt-14">
     <section className="bg-[#FFF7ED] py-10">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <PackageSummary inclusions={pkg.inclusions} exclusions={pkg.exclusions} />
    
                {/* 📱 MOBILE ONLY PRICE CARD - Appears right after Summary */}
                <div className="mt-8 lg:hidden">
                  <PriceCard pricing={{
                    final_price: pkg.price,
                    discount_price: pkg.oldPrice,
                  }} />
                </div>
              </div>
            </section>
    
            <section className="bg-white py-10">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <PolicyAccordion policies={pkg.policies} />
    
                {/* 📱 MOBILE ONLY SUPPORT CARDS - Optional but recommended for conversion */}
              
              </div>
            </section>

        <section className="bg-[#FAFAFA] py-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <FAQs title={pkg.name} type="Bungy" faqs={pkg.faqs} />
          </div>
        </section>
      </section>

      <StickyWhatsApp />
    </main>
  );
}
