import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2-Day Sintra Itinerary (2026) — All 5 Palaces + Coastline",
  description:
    "Complete 2-day Sintra itinerary covering all 5 palaces, the coastline, and the town. Tested timing, candid verdicts, and budget breakdowns.",
  alternates: {
    canonical: "https://sintraitinerary.com/2-day-sintra-itinerary",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
