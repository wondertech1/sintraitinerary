import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1-Day Sintra Itinerary (2026) — Three Tested Routes from Lisbon",
  description:
    "Three tested one-day Sintra itineraries with realistic timing, honest palace verdicts, and budget breakdowns. Covering Pena Palace, Regaleira, Moorish Castle, and more.",
  alternates: {
    canonical: "https://sintraitinerary.com/1-day-sintra-itinerary",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
