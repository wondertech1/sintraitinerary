import type { Metadata } from "next";
import { tipCategories, travelTipsFaqs } from "@/data/guides/authority/travel-tips";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FAQSection from "@/components/shared/FAQSection";
import ContourDivider from "@/components/decorative/ContourDivider";
import Link from "next/link";
import {
  ClipboardList,
  Train,
  Crown,
  PiggyBank,
  UtensilsCrossed,
  Camera,
  Baby,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sintra Travel Tips (2026) — 35+ Essential Tips from Local Experts",
  description:
    "35+ Sintra tips that most visitors only learn the hard way. Palace strategy, queue-beating tricks, budget hacks, food picks, and transport shortcuts — all in one place.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-travel-tips",
  },
};

const categoryIcons: Record<string, typeof Crown> = {
  clipboard: ClipboardList,
  train: Train,
  crown: Crown,
  piggybank: PiggyBank,
  utensils: UtensilsCrossed,
  camera: Camera,
  baby: Baby,
};

export default function TravelTipsPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(travelTipsFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sintra Travel Tips", url: "/sintra-travel-tips" },
          ]),
        ]}
      />

      <GuideHero
        category="Essential Reading"
        title="Sintra Travel Tips"
        subtitle="35+ tips distilled from every guide on this site, tested across dozens of our own visits. The cheat sheet for a perfect Sintra visit."
        lastVerified="April 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        {/* Quick Links */}
        <ScrollReveal>
          <div className="mb-12 flex flex-wrap gap-2 justify-center">
            {tipCategories.map((cat) => {
              const Icon = categoryIcons[cat.icon] || Crown;
              return (
                <a
                  key={cat.category}
                  href={`#${cat.category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center gap-1.5 rounded-full border border-calcário-200 bg-white px-3 py-1.5 font-ui text-xs font-medium text-granito/70 hover:border-névoa-300 hover:text-névoa-700 transition-colors"
                >
                  <Icon className="h-3 w-3" />
                  {cat.category}
                </a>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Tip Categories */}
        {tipCategories.map((cat, catIndex) => {
          const Icon = categoryIcons[cat.icon] || Crown;
          return (
            <div key={cat.category} id={cat.category.toLowerCase().replace(/\s+/g, "-")}>
              {catIndex > 0 && <ContourDivider className="my-10" />}

              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-névoa-100">
                    <Icon className="h-4.5 w-4.5 text-névoa-600" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-granito">
                    {cat.category}
                  </h2>
                </div>
              </ScrollReveal>

              <div className="space-y-3">
                {cat.tips.map((tip, i) => (
                  <ScrollReveal key={tip.tip.slice(0, 40)} delay={i * 0.04}>
                    <div className="rounded-lg border border-calcário-200 bg-white p-4">
                      <p className="font-body text-sm leading-relaxed text-granito/80">
                        {tip.tip}
                      </p>
                      {tip.link && (
                        <Link
                          href={tip.link.href}
                          className="mt-2 inline-flex items-center gap-1 font-ui text-xs font-medium text-névoa-600 hover:text-névoa-800 transition-colors"
                        >
                          {tip.link.label} <ArrowRight className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          );
        })}

        {/* Deep Dive Links */}
        <ScrollReveal>
          <h2 className="font-display text-xl font-bold text-granito mb-6">
            Deep Dive Guides
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "1-Day Itinerary", href: "/1-day-sintra-itinerary" },
              { label: "2-Day Itinerary", href: "/2-day-sintra-itinerary" },
              { label: "Which Palaces to Visit", href: "/guides/which-sintra-palaces-to-visit" },
              { label: "Tickets & Prices", href: "/sintra-tickets-and-passes" },
              { label: "Best Time to Visit", href: "/best-time-to-visit-sintra" },
              { label: "Where to Eat", href: "/where-to-eat-in-sintra" },
              { label: "Budget Guide", href: "/sintra-on-a-budget" },
              { label: "Family Guide", href: "/sintra-with-kids" },
              { label: "Getting There", href: "/getting-to-sintra-from-lisbon" },
              { label: "Day Trip Planning", href: "/lisbon-to-sintra-day-trip" },
              { label: "Photography Spots", href: "/sintra-photography-guide" },
              { label: "Walking Routes", href: "/sintra-walking-routes" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-lg border border-calcário-200 bg-white px-4 py-3 font-ui text-sm font-medium text-granito/70 hover:border-névoa-300 hover:text-névoa-700 transition-colors"
              >
                {link.label}
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            ))}
          </div>
        </ScrollReveal>

        <RelatedGuides links={[
          { label: "Is Sintra Worth Visiting?", href: "/is-sintra-worth-visiting", description: "Real pros, cons, and verdict" },
          { label: "Sintra vs Cascais", href: "/sintra-vs-cascais", description: "Compare the two day trips" },
          { label: "Sintra in Winter", href: "/sintra-in-winter", description: "Why off-season is otherworldly" },
          { label: "Cabo da Roca", href: "/cabo-da-roca-guide", description: "Europe's westernmost point" },
        ]} />

        <FAQSection faqs={travelTipsFaqs} />
      </div>
    </>
  );
}
