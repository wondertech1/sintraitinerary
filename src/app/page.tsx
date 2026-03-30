import type { Metadata } from "next";
import MistHero from "@/components/home/MistHero";
import ItineraryChooser from "@/components/home/ItineraryChooser";
import PalaceShowcase from "@/components/home/PalaceShowcase";
import SintraToolkit from "@/components/home/SintraToolkit";
import Newsletter from "@/components/home/Newsletter";
import JsonLd from "@/components/shared/JsonLd";
import { websiteSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sintra Itinerary 2026 — Day Trip Guide from Lisbon",
  description:
    "Plan your perfect Sintra day trip. Honest itineraries for 1-2 days covering Pena Palace, Quinta da Regaleira, Moorish Castle, and more. Real prices, realistic timing, no fluff.",
  alternates: { canonical: "https://sintraitinerary.com" },
};

const homeFaqs = [
  {
    question: "How many days do you need in Sintra?",
    answer:
      "One full day is enough to see the top 3 attractions (Pena Palace, Quinta da Regaleira, and the Moorish Castle). Two days lets you cover all 5 major palaces plus the coastline at Cabo da Roca without rushing.",
  },
  {
    question: "Is Sintra worth visiting as a day trip from Lisbon?",
    answer:
      "Yes. The train from Rossio station takes 40 minutes and costs €2.35 each way. Sintra is the most popular day trip from Lisbon for good reason — just go early (before 9:30am) to beat the crowds.",
  },
  {
    question: "Which Sintra palace should I visit if I only have time for one?",
    answer:
      "Quinta da Regaleira. It has the most unique experience (the Initiation Well), shorter queues than Pena Palace, and a lower ticket price at €12. Pena Palace is more photogenic from outside, but Regaleira is the better overall visit.",
  },
  {
    question: "How much does a day in Sintra cost?",
    answer:
      "Budget: €25-35 (train + 1 palace + packed lunch). Mid-range: €50-65 (train + 2-3 palaces + restaurant lunch). Comfort: €70-80+ (taxi/Uber + all palaces + nice lunch).",
  },
  {
    question: "What is the best time to visit Sintra?",
    answer:
      "Spring (April-May) and early autumn (September-October) offer the best balance of weather and crowds. Summer is hot and extremely crowded. Winter is quiet but foggy — which some consider part of the charm.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[websiteSchema(), faqSchema(homeFaqs)]} />
      <MistHero />
      <ItineraryChooser />
      <PalaceShowcase />
      <SintraToolkit />
      <Newsletter />
    </>
  );
}
