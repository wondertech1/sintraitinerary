import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3-Day Sintra Itinerary (2026) — The Unhurried Guide",
  description:
    "The complete 3-day Sintra itinerary: every palace at a relaxed pace, forest trails, a self-guided food walk, and the Atlantic coast. Tested timing and budget breakdowns.",
  alternates: {
    canonical: "https://sintraitinerary.com/3-day-sintra-itinerary",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
