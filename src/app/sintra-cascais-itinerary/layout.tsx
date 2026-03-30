import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sintra + Cascais in One Day (2026) — The Complete Loop",
  description:
    "How to combine Sintra and Cascais in one day from Lisbon. Two tested routes with realistic timing, palace picks, Cabo da Roca, and the train loop back.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-cascais-itinerary",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
