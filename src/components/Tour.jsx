"use client";
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
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import AdventureLoader from "./AdventureLoader";
import Header from "./Header";
import { HiOutlineCake, HiOutlineHome, HiOutlineMap } from "react-icons/hi";
import CorporateCollaborationCard from "./CorporateCollaborationCard";
// import Header from "./Header";

export default function Tour() {
  const { slug } = useParams();

  const [pkg, setPkg] = useState(null);
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itinerary, setItinerary] = useState([]);
  // const [pricing, setPricing] = useState(null);
  const [pricingOptions, setPricingOptions] = useState([]);

  const [policies, setPolicies] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [inclusions, setInclusions] = useState([]);
  const [exclusions, setExclusions] = useState([]);
  const [packageDetails, setPackageDetails] = useState(null);

  useEffect(() => {
    fetchPackage();
  }, [slug]);

  // async function fetchPackage() {
  //   setLoading(true);

  //   /* =======================
  //    1️⃣ FETCH PACKAGE
  // ======================= */
  //   const { data: packageData, error } = await supabase
  //     .from("packages")
  //     .select("*")
  //     .eq("slug", slug)
  //     .single();

  //   if (error || !packageData) {
  //     console.error(error);
  //     setLoading(false);
  //     return;
  //   }

  //   setPkg(packageData);

  //   /* =======================
  //    2️⃣ FETCH PACKAGE MEDIA
  // ======================= */
  //   const { data: mediaData } = await supabase
  //     .from("media")
  //     .select("*")
  //     .eq("entity_type", "package")
  //     .eq("entity_id", packageData.id)
  //     .order("order_no");

  //   setMedia(mediaData || []);

  //   /* =======================
  //    3️⃣ FETCH ITINERARY DATA
  // ======================= */
  //   const { data: itineraryData, error: itineraryError } = await supabase
  //     .from("itineraries")
  //     .select(
  //       `
  //     id,
  //     day_no,
  //     title,
  //     description,

  //     itinerary_transfers (
  //       vehicle,
  //       from_location,
  //       to_location
  //     ),

  //     itinerary_stays (
  //       hotel_name,
  //       check_in,
  //       check_out,
  //       nights
  //     ),

  //     itinerary_meals (
  //       breakfast,
  //       lunch,
  //       dinner,
  //       note
  //     )
  //   `,
  //     )
  //     .eq("package_id", packageData.id)
  //     .order("day_no", { ascending: true });

  //   if (itineraryError) {
  //     console.error(itineraryError);
  //     setLoading(false);
  //     return;
  //   }

  //   /* =======================
  //    4️⃣ FETCH ITINERARY IMAGES
  // ======================= */
  //   const itineraryIds = itineraryData.map((d) => d.id);

  //   const { data: itineraryMedia } = await supabase
  //     .from("media")
  //     .select("entity_id, media_url")
  //     .eq("entity_type", "itinerary")
  //     .in("entity_id", itineraryIds)
  //     .order("order_no");

  //   /* =======================
  //    5️⃣ MERGE EVERYTHING
  // ======================= */
  //   const finalItinerary = itineraryData.map((day) => ({
  //     id: day.id,
  //     day: day.day_no,
  //     title: day.title,
  //     description: day.description,

  //     transfer: day.itinerary_transfers?.[0] || null,
  //     stay: day.itinerary_stays?.[0] || null,
  //     meals: day.itinerary_meals?.[0] || null,

  //     images: itineraryMedia?.filter((img) => img.entity_id === day.id) || [],
  //   }));

  //   setItinerary(finalItinerary);
  //   setLoading(false);
  // }
  async function fetchPackage() {
    try {
      console.log("🚀 FETCH START", slug);
      setLoading(true);

      // 🔁 RESET STATE (CRITICAL)
      setMedia([]);
      setItinerary([]);
      setInclusions([]);
      setExclusions([]);

      setPolicies([]);
      setFaqs([]);
      // setPricing(null);

      /* =======================
       1️⃣ PACKAGE
    ======================= */
      const { data: packageData, error: packageError } = await supabase
        .from("packages")
        .select("*")
        .eq("slug", slug)
        .single();

      if (packageError || !packageData) {
        console.error("❌ PACKAGE ERROR", packageError);
        setLoading(false);
        return;
      }

      console.log("✅ PACKAGE", packageData);
      setPkg(packageData);
      console.log("📦 CURRENT PACKAGE ID:", packageData.id);
      console.log("📦 PACKAGE TYPE:", packageData.type);

      /* =======================
   4️⃣ FETCH PACKAGE PRICING
======================= */
      // const { data: pricingData, error: pricingError } = await supabase
      //   .from("package_pricing_options")
      //   .select("*")
      //   .eq("package_id", packageData.id)
      //   .order("order_no", { ascending: true })
      //   .limit(1)
      //   .single();

      // if (pricingError) {
      //   console.warn("PRICING ERROR:", pricingError);
      // } else {
      //   setPricing(pricingData);
      // }
      const { data: pricingData, error: pricingError } = await supabase
        .from("package_pricing_options")
        .select("*")
        .eq("package_id", packageData.id)
        .order("order_no", { ascending: true });

      if (pricingError) {
        console.error("❌ PRICING ERROR", pricingError);
      } else {
        setPricingOptions(pricingData || []);
      }

      /* =======================
       2️⃣ PACKAGE MEDIA
    ======================= */
      const { data: mediaData } = await supabase
        .from("media")
        .select("*")
        .eq("entity_type", "package")
        .eq("entity_id", packageData.id)
        .order("order_no");

      console.log("🖼 PACKAGE MEDIA", mediaData);
      setMedia(mediaData || []);

      /* =======================
   8️⃣ FETCH INCLUSIONS / EXCLUSIONS
======================= */
      const { data: ieData, error: ieError } = await supabase
        .from("package_inclusions_exclusions")
        .select("type, content")
        .eq("package_id", packageData.id)
        .order("order_no", { ascending: true });

      if (ieError) {
        console.error("❌ INCLUSIONS/EXCLUSIONS ERROR", ieError);
      } else {
        const inclusionsArr = ieData
          .filter((i) => i.type === "inclusion")
          .map((i) => i.content);

        const exclusionsArr = ieData
          .filter((i) => i.type === "exclusion")
          .map((i) => i.content);

        console.log("✅ INCLUSIONS", inclusionsArr);
        console.log("❌ EXCLUSIONS", exclusionsArr);

        setInclusions(inclusionsArr);
        setExclusions(exclusionsArr);
      }

      /* =======================
   🔟 FETCH FAQs
======================= */
      const { data: faqData, error: faqError } = await supabase
        .from("faqs")
        .select("id, question, answer")
        .eq("package_id", packageData.id)
        .order("order_no", { ascending: true });

      if (faqError) {
        console.error("❓ FAQ ERROR", faqError);
      } else {
        console.log("❓ RAW FAQ DATA FROM DB:", faqData);

        console.log("❓ FAQs", faqData);
        setFaqs(
          (faqData || []).map((f) => ({
            q: f.question,
            a: f.answer,
          })),
        );
      }

      /* =======================
       3️⃣ ITINERARIES (BASE)
    ======================= */
      const { data: itineraries } = await supabase
        .from("itineraries")
        .select("*")
        .eq("package_id", packageData.id)
        .order("day_no");

      console.log("📅 ITINERARIES", itineraries);

      if (!itineraries?.length) {
        setItinerary([]);
        setLoading(false);
        return;
      }

      const itineraryIds = itineraries.map((d) => d.id);

      /* =======================
       4️⃣ TRANSFERS
    ======================= */
      const { data: transfers } = await supabase
        .from("itinerary_transfers")
        .select("*")
        .in("itinerary_id", itineraryIds);

      console.log("🚗 TRANSFERS", transfers);

      /* =======================
       5️⃣ STAYS
    ======================= */
      const { data: stays } = await supabase
        .from("itinerary_stays")
        .select("*")
        .in("itinerary_id", itineraryIds);

      console.log("🏨 STAYS", stays);

      /* =======================
       6️⃣ MEALS
    ======================= */
      const { data: meals } = await supabase
        .from("itinerary_meals")
        .select("*")
        .in("itinerary_id", itineraryIds);

      console.log("🍽 MEALS", meals);
      /* =======================
   9️⃣ FETCH POLICIES
======================= */
      const { data: policyData, error: policyError } = await supabase
        .from("package_policies")
        .select("*")
        .eq("package_id", packageData.id)
        .order("order_no", { ascending: true });

      if (policyError) {
        console.error("📜 POLICY ERROR", policyError);
      } else {
        console.log("📜 POLICIES", policyData);
        setPolicies(
          (policyData || []).map((p) => ({
            id: p.id,
            title: p.title,
            points: p.content.split("\n"),
          })),
        );
      }
      /* =======================
   🔟 FETCH FAQs
======================= */

      /* =======================
       7️⃣ ITINERARY IMAGES
    ======================= */
      const { data: itineraryImages } = await supabase
        .from("media")
        .select("*")
        .eq("entity_type", "itinerary")
        .in("entity_id", itineraryIds)
        .order("order_no");

      console.log("🖼 ITINERARY IMAGES", itineraryImages);

      const { data: details, error: detailsError } = await supabase
        .from("package_details")
        .select("*")
        .eq("package_id", packageData.id)
        .single();

      if (detailsError) {
        console.warn("ℹ️ No package_details found");
      } else {
        console.log("📘 PACKAGE DETAILS", details);
        setPackageDetails(details);
      }

      /* =======================
       8️⃣ MERGE EVERYTHING
    ======================= */
      const final = itineraries.map((day) => {
        const dayTransfers =
          transfers?.filter((t) => t.itinerary_id === day.id) || [];

        const dayStay = stays?.find((s) => s.itinerary_id === day.id) || null;

        const dayMealsArr =
          meals?.filter((m) => m.itinerary_id === day.id) || [];

        const mealsObj = { breakfast: null, lunch: null, dinner: null };
        dayMealsArr.forEach((m) => {
          mealsObj[m.meal_type] = m.description;
        });

        const dayImages =
          itineraryImages?.filter((i) => i.entity_id === day.id) || [];

        const result = {
          id: day.id,
          day: day.day_no,
          title: day.title,
          description: day.description,
          transfer: dayTransfers[0] || null,
          stay: dayStay,
          meals: mealsObj,
          images: dayImages,
        };

        console.log(`📅 DAY ${day.day_no} FINAL`, result);
        return result;
      });

      setItinerary(final);
      setLoading(false);
      console.log("✅ FETCH COMPLETE");
    } catch (err) {
      console.error("🔥 FETCH CRASH", err);
      setLoading(false);
    }
  }
  const bestPricing = pricingOptions
    .slice()
    .sort((a, b) => a.final_price - b.final_price)[0];
  if (loading)
    return (
      <div className="p-10">
        <AdventureLoader />
      </div>
    );
  const heroImage =
    media.find((m) => m.media_role === "hero_banner")?.media_url ||
    media.find((m) => m.media_role === "hero")?.media_url ||
    media.find((m) => m.media_role === "cover")?.media_url;

  if (!pkg) return <div className="p-10">Trek not found</div>;
  return (
    <main className="bg-[#FAFAFA]">
      {/* <Header
        variant="tour"
        title="Kedarkantha Trek"
        subtitle="Snow Trek • Beginner Friendly • Uttarakhand"
        badges={["5 Days", "12,500 ft", "Easy–Moderate"]}
        bgImage="/src/assets/1.jpg"
      /> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            name: pkg.name,
            description: pkg.tagline,
            url: `https://www.tripshalla.in/trek/${pkg.slug}`,
            image: heroImage,
            offers: {
              "@type": "Offer",
              price: bestPricing?.final_price,
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: pkg.rating
              ? {
                  "@type": "AggregateRating",
                  ratingValue: pkg.rating,
                  reviewCount: pkg.review_count || 10,
                }
              : undefined,
            provider: {
              "@type": "Organization",
              name: "Tripshalla",
              url: "https://www.tripshalla.in",
            },
          }),
        }}
      />

      {pkg && (
        <Header
          variant="tour"
          title={pkg.name}
          // subtitle={`${pkg.type} • ${pkg.location}`}
          subtitle={`📍 ${pkg.location}`}
          badges={[
            `${pkg.duration_days} Days`,
            pkg.difficulty || "Easy",
            pkg.category?.toUpperCase(),
          ]}
          bgImage={heroImage}
        />
      )}

      <ExplorationGrid media={media} />

      {/* ================= MAIN CONTENT + STICKY ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-14">
            {/* <TourDetails
              title={pkg.name}
              highlight={packageDetails?.tagline}
              summary={[
                `${pkg.duration_days} Days`,
                pkg.difficulty || "Easy",
                pkg.type?.toUpperCase(),
              ]}
              amenities={[
                { icon: <HiOutlineHome />, label: "Stay Included" },
                { icon: <HiOutlineCake />, label: "Meals Included" },
                { icon: <HiOutlineMap />, label: "Sightseeing Included" },
              ]}
              durations={
                pricing
                  ? [
                      {
                        id: pricing.id,
                        title: pricing.title || `${pkg.duration_days} Days`,
                        final_price: pricing.final_price,
                        image:
                          media.find((m) => m.media_role === "duration")
                            ?.media_url ||
                          media.find((m) => m.media_role === "cover")
                            ?.media_url,
                      },
                    ]
                  : []
              }
              details={packageDetails}
            /> */}
            <TourDetails
              title={pkg.name}
              highlight={pkg.tagline}
              summary={[
                `${pkg.duration_days} Days`,
                pkg.difficulty || "Easy",
                pkg.type.toUpperCase(),
              ]}
              amenities={[
                { icon: <HiOutlineHome />, label: "Luxury Stay" },
                { icon: <HiOutlineCake />, label: "Meals Included" },
                { icon: <HiOutlineMap />, label: "Riverside Location" },
              ]}
              durations={pricingOptions.map((p) => ({
                id: p.id,
                title: p.title,
                final_price: Math.floor(p.final_price),
                image:
                  media.find((m) => m.media_role === "pricing")?.media_url ||
                  media.find((m) => m.media_role === "cover")?.media_url,
              }))}
              details={packageDetails}
            />
            <CorporateCollaborationCard />
            {/* 🔴 STICKY MUST STOP HERE */}
            <section
              id="itinerary-end"
              className="bg-white rounded-3xl p-6 md:p-8 shadow-sm"
            >
              <TripItinerary days={itinerary} />
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block">
            {/* 🔑 MUST stretch full height */}
            <div className="h-full flex flex-col">
              {/* Normal cards */}
              <div className="space-y-8 mb-8">
                <PriceCard pricing={bestPricing} />
                <GotAQuestionCard />
                <GroupOfferCard />
                <WhyChooseUs />
              </div>

              {/* ✅ ONLY THIS IS STICKY */}
              <div className="sticky top-24 self-start w-full">
                <EnquiryCard />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ================= BELOW CONTENT ================= */}
      <section className="mt-14">
        <section className="bg-[#FFF7ED] py-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <PackageSummary inclusions={inclusions} exclusions={exclusions} />

            {/* 📱 MOBILE ONLY PRICE CARD - Appears right after Summary */}
            <div className="mt-8 lg:hidden">
              <PriceCard pricing={bestPricing} />
            </div>
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <PolicyAccordion policies={policies} />

            {/* 📱 MOBILE ONLY SUPPORT CARDS - Optional but recommended for conversion */}
          </div>
        </section>
        <section className="bg-[#FAFAFA] py-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {/* <FAQs trekName={pkg?.title} faqs={faqs} /> */}
            {/* <FAQs trekName={pkg?.name} faqs={faqs} /> */}
            <FAQs
              title={pkg?.name}
              type={pkg?.type} // camp | trek | tour
              faqs={faqs}
            />
          </div>
        </section>
      </section>

      <StickyWhatsApp />
    </main>
  );
}
