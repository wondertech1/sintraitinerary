"use client";

import Link from "next/link";
import { ArrowRight, Clock, MapPin, Euro } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const itineraries = [
  {
    days: 1,
    title: "One Day in Sintra",
    subtitle: "The essential day trip from Lisbon",
    href: "/1-day-sintra-itinerary",
    highlights: [
      "3 route options: Palace Hunter, Garden Wanderer, Coast + Culture",
      "Realistic timing with bus 434 waits included",
      "Budget breakdowns from €25 to €80",
    ],
    stats: { stops: "3–4", walking: "4–6 km", budget: "€25–80" },
  },
  {
    days: 2,
    title: "Two Days in Sintra",
    subtitle: "See everything without rushing",
    href: "/2-day-sintra-itinerary",
    highlights: [
      "All 5 major palaces + town exploration",
      "Day 2: Monserrate, coast, and Cabo da Roca",
      "Where to stay overnight in Sintra",
    ],
    stats: { stops: "8–10", walking: "10–14 km", budget: "€60–160" },
  },
];

export default function ItineraryChooser() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20">
      <ScrollReveal>
        <SectionHeading
          label="Itineraries"
          heading="Pick Your Route"
        />
      </ScrollReveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {itineraries.map((it, i) => (
          <ScrollReveal key={it.days} delay={i * 0.1}>
            <Link href={it.href} className="group block">
              <article className="relative h-full rounded-[2px] border border-calcario-400 bg-nevoeiro p-6 transition-all duration-300 hover:border-nevoa-400 hover:shadow-md">
                {/* Field label badge */}
                <span className="absolute -top-3 left-4 bg-nevoeiro px-2 font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-[0.12em] text-palacio-600">
                  {it.days}-Day Itinerary
                </span>

                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-600 text-granito">
                  {it.title}
                </h3>
                <p className="mt-1 text-sm text-granito-light">{it.subtitle}</p>

                {/* Stats row */}
                <div className="mt-4 flex flex-wrap gap-4 text-[12px] text-nevoa-600">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {it.stats.stops} stops
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {it.stats.walking}
                  </span>
                  <span className="flex items-center gap-1">
                    <Euro className="h-3.5 w-3.5" />
                    {it.stats.budget}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="mt-4 space-y-1.5">
                  {it.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-granito-light"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-palacio-500" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-5 flex items-center gap-1 font-[family-name:var(--font-ui)] text-[13px] font-medium text-nevoa-700 transition-colors group-hover:text-granito">
                  View itinerary
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
