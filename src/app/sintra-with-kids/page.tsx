import type { Metadata } from "next";
import {
  kidFriendlyPalaces,
  familyTips,
  ageRecommendations,
  kidsFaqs,
} from "@/data/guides/practical/kids";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQSection from "@/components/shared/FAQSection";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import KidPalaceCard from "@/components/guides/KidPalaceCard";
import {
  Calendar,
  Bus,
  UtensilsCrossed,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Sintra with Kids (2026) — Family Guide with Palace Rankings & Stroller Info",
  description:
    "Family-friendly guide to Sintra with kid ratings for all 5 palaces, stroller accessibility, age-specific recommendations, and practical parent tips.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-with-kids",
  },
};

const categoryIcons: Record<string, typeof Calendar> = {
  planning: Calendar,
  transport: Bus,
  food: UtensilsCrossed,
  survival: ShieldCheck,
};

const categoryLabels: Record<string, string> = {
  planning: "Planning",
  transport: "Transport",
  food: "Food",
  survival: "Survival",
};

export default function KidsPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(kidsFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sintra with Kids", url: "/sintra-with-kids" },
          ]),
        ]}
      />

      <GuideHero
        category="Family Guide"
        title="Sintra with Kids"
        subtitle="Which palaces kids actually enjoy, stroller reality checks, and survival tips from parents who've done it."
        lastVerified="March 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        {/* Quick Answer */}
        <ScrollReveal>
          <div className="mb-12 rounded-lg border border-musgo-200 bg-musgo-50 p-6">
            <p className="font-ui text-xs font-medium uppercase tracking-wider text-musgo-600 mb-2">
              Quick Answer
            </p>
            <p className="font-body text-granito leading-relaxed">
              <strong>Quinta da Regaleira</strong> is the #1 palace for kids (tunnels,
              wells, grottoes = adventure). Max <strong>2 palaces per day</strong> with
              kids under 8. <strong>Leave the stroller at the hotel</strong> — bring a
              carrier instead. Pack snacks and water.
            </p>
          </div>
        </ScrollReveal>

        {/* Palace Rankings for Kids */}
        <SectionHeading
          label="Palace Ratings"
          heading="All 5 Palaces — Ranked for Kids"
        />

        <div className="mt-8 space-y-6">
          {kidFriendlyPalaces.map((palace, i) => (
            <ScrollReveal key={palace.slug} delay={i * 0.08}>
              <KidPalaceCard palace={palace} />
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        {/* Age Recommendations */}
        <SectionHeading
          label="By Age"
          heading="What to Visit by Age Group"
        />

        <div className="mt-8 space-y-4">
          {ageRecommendations.map((rec, i) => (
            <ScrollReveal key={rec.ageGroup} delay={i * 0.06}>
              <div className="specimen-border rounded-lg bg-white p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-base font-semibold text-granito">
                    {rec.ageGroup}
                  </h3>
                  <span className="shrink-0 rounded-full bg-névoa-100 px-2.5 py-0.5 font-ui text-[10px] font-medium text-névoa-700">
                    Max {rec.maxPalaces} palace{rec.maxPalaces !== 1 ? "s" : ""}
                  </span>
                </div>

                <div className="mb-3 flex flex-wrap gap-1.5">
                  {rec.palaces.map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-palácio-50 px-2.5 py-0.5 font-ui text-[10px] font-medium text-palácio-700"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <p className="font-body text-sm leading-relaxed text-granito/70">
                  {rec.approach}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Family Tips */}
        <SectionHeading label="Parent Tips" heading="Survival Tips for Families" />

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {familyTips.map((tip, i) => {
            const Icon = categoryIcons[tip.category] || Users;
            return (
              <ScrollReveal key={tip.tip.slice(0, 40)} delay={i * 0.04}>
                <div className="flex items-start gap-3 rounded-lg border border-calcário-200 bg-white p-4 h-full">
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-névoa-100">
                      <Icon className="h-3 w-3 text-névoa-600" />
                    </div>
                    <span className="font-ui text-[9px] text-granito/40">
                      {categoryLabels[tip.category]}
                    </span>
                  </div>
                  <p className="font-body text-sm text-granito/80">
                    {tip.tip}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Pro Tips */}
        <ScrollReveal>
          <ProTip variant="tip">
            <strong>The perfect family day:</strong> Train to Sintra → Regaleira
            (2 hrs, tunnels are the highlight) → Lunch at Romaria de Baco →
            Playground break at Parque da Liberdade → Ice cream on Rua das
            Padarias → Train home. We followed this exact plan with our kids and it was the least stressful day of the whole trip. One palace, zero stress.
          </ProTip>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="warning">
            <strong>Stroller reality check:</strong> Sintra was built on steep
            hills with cobblestone paths. Every parent we&apos;ve seen with a stroller
            regretted it within 20 minutes. A baby carrier is the only sane
            option.
          </ProTip>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-8 rounded-lg border border-palácio-200 bg-palácio-50 p-6 text-center">
            <Users className="mx-auto mb-3 h-6 w-6 text-palácio-600" />
            <p className="font-display text-lg font-semibold text-granito mb-2">
              Ready to plan the family trip?
            </p>
            <p className="font-body text-sm text-granito/70 mb-4">
              Our itineraries include family-friendly timing and restaurant
              suggestions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/1-day-sintra-itinerary"
                className="inline-flex items-center gap-1.5 rounded-full bg-névoa-600 px-5 py-2 font-ui text-sm font-medium text-white hover:bg-névoa-700 transition-colors"
              >
                1-Day Family Plan <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/sintra-tickets-and-passes"
                className="inline-flex items-center gap-1.5 rounded-full border border-névoa-300 px-5 py-2 font-ui text-sm font-medium text-névoa-700 hover:bg-névoa-50 transition-colors"
              >
                Ticket Prices <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <RelatedGuides links={[
          { label: "Which Palaces to Visit", href: "/guides/which-sintra-palaces-to-visit", description: "Palace comparison to help choose" },
          { label: "Where to Eat", href: "/where-to-eat-in-sintra", description: "Kid-friendly restaurant options" },
          { label: "Sintra on a Budget", href: "/sintra-on-a-budget", description: "Family-friendly budget tips" },
          { label: "Walking Routes", href: "/sintra-walking-routes", description: "Stroller-friendly paths" },
        ]} />

        <FAQSection faqs={kidsFaqs} />
      </div>
    </>
  );
}
