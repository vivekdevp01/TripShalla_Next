import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import AdventureLoader from "../components/AdventureLoader"

export const metadata: Metadata = {
  title: "Tripshalla | Adventure in Rishikesh",
  description: "Book camping, trekking, rafting and adventure sports in Rishikesh.",
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "TouristInformationCenter",
  "name": "Tripshalla",
  "url": "https://www.tripshalla.in",
  "logo": "https://www.tripshalla.in/assets/Logo.png",
  "description": "Book bungee jumping, river rafting, riverside camping and Himalayan treks in Rishikesh.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rishikesh",
    "addressRegion": "Uttarakhand",
    "addressCountry": "IN"
  },
  "telephone": "+917454875874",
  "email": "tripshalla@gmail.com",
  "sameAs": [
    "https://www.instagram.com/tripshalla_adventures"
   
  ],
  "priceRange": "₹400 - ₹5,999",
  "openingHours": "Mo-Su 06:00-20:00"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
      <ScrollToTop/>
<AdventureLoader>
        {children}
    </AdventureLoader>
        <Footer/>
      </body>
    </html>
  );
}