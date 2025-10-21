"use client";

import { useEffect } from "react";

// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import AboutEvent from "./about-event";
import Speakers from "./speakers";
import Program from "./program";
import Registration from "./registration";
import SponsoredBy from "./sponsored-by";

export default function GateConference() {
  // Handle anchor link scrolling after page load and animations
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Wait for animations to settle and content to load
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500); // Delay to allow animations to complete
    }
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "GATE 2025 - Global Summit of Advanced & Third Space Endoscopy",
    "description": "Join the Global Summit of Advanced & Third Space Endoscopy (GATE) 2025 in Riyadh, Saudi Arabia. Learn from 50+ international experts, witness live demonstrations, and earn CME credits at King Faisal Specialist Hospital.",
    "startDate": "2025-11-13T09:00:00+03:00",
    "endDate": "2025-11-15T17:00:00+03:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "King Faisal Specialist Hospital & Research Centre",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "King Fahd Road",
        "addressLocality": "Riyadh",
        "addressCountry": "SA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "24.7136",
        "longitude": "46.6753"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "King Faisal Specialist Hospital & Research Centre",
      "url": "https://www.kfshrc.edu.sa",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "King Fahd Road",
        "addressLocality": "Riyadh",
        "addressCountry": "SA"
      }
    },
    "offers": {
      "@type": "Offer",
      "url": "https://gate2025.com/#registration",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-12-19"
    },
    "image": [
      "https://gate2025.com/og-image.png",
      "https://gate2025.com/image/hero.jpg"
    ],
    "keywords": "endoscopy, third space endoscopy, advanced endoscopy, medical conference, CME credits, gastroenterology",
    "audience": {
      "@type": "Audience",
      "audienceType": "Medical Professionals, Gastroenterologists, Endoscopists"
    },
    "category": "Medical Conference",
    "subEvent": [
      {
        "@type": "Event",
        "name": "Advanced Endoscopic Techniques Workshop",
        "startDate": "2025-11-13T09:00:00+03:00",
        "endDate": "2025-11-13T12:00:00+03:00"
      },
      {
        "@type": "Event",
        "name": "Live Endoscopic Demonstrations",
        "startDate": "2025-11-13T14:00:00+03:00",
        "endDate": "2025-11-15T16:00:00+03:00"
      }
    ],
    "performer": [
      {
        "@type": "Person",
        "name": "Dr. Abdulrahman Abdulaziz Alfadda",
        "jobTitle": "Conference Director"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <Hero />
      <AboutEvent />
      <Speakers />
      <Program />
      <Registration />
      <SponsoredBy />
      <Footer />
    </>
  );
}
