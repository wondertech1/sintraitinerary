import type { Metadata } from "next";
import {
  palaceRankings,
  scenarioRecommendations,
  comparisonFaqs,
} from "@/data/guides/palaces/comparison";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQSection from "@/components/shared/FAQSection";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import Link from "next/link";
import { Crown, Clock, Euro, Users, ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Which Sintra Palaces to Visit (2026) — Unfiltered Rankings & Comparison",
  description:
    "Ranked comparison of all 5 Sintra palaces with ratings, costs, and frank verdicts. Find out which palaces are worth your time based on your travel style.",
  alternates: {
    canonical:
      "https://sintraitinerary.com/guides/which-sintra-palaces-to-visit",
  },
};

const verdictColors: Record<string, { bg: string; text: string; label: string }> = {
  "must-see": { bg: "bg-musgo-100", text: "text-musgo-700", label: "Must See" },
  recommended: { bg: "bg-palácio-100", text: "text-palácio-700", label: "Recommended" },
  conditional: { bg: "bg-névoa-100", text: "text-névoa-700", label: "Conditional" },
  optional: { bg: "bg-ferrugem-100", text: "text-ferrugem-700", label: "Optional" },
};

function RatingBar({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className={`h-2 w-5 rounded-sm ${
            i < value ? "bg-palácio-500" : "bg-calcário-200"
          }`}
        />
      ))}
    </div>
  );
}

function CrowdDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`h-2 w-2 rounded-full ${
            i < level ? "bg-ferrugem-500" : "bg-calcário-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function WhichPalacesPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(comparisonFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Guides", url: "/things-to-do-in-sintra" },
            {
              name: "Which Palaces to Visit",
              url: "/guides/which-sintra-palaces-to-visit",
            },
          ]),
        ]}
      />

      <GuideHero
        category="Palace Comparison"
        title="Which Sintra Palaces Should You Actually Visit?"
        subtitle="We at Sintra Itinerary have visited all five across multiple trips. Here's our unvarnished ranking — because your time and money are limited."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/things-to-do-in-sintra" },
          { label: "Which Palaces to Visit" },
        ]}
        lastVerified="February 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        {/* Quick Answer Box */}
        <ScrollReveal>
          <div className="mb-12 rounded-lg border border-musgo-200 bg-musgo-50 p-6">
            <p className="font-ui text-xs font-medium uppercase tracking-wider text-musgo-600 mb-2">
              Quick Answer
            </p>
            <p className="font-body text-granito leading-relaxed">
              If you only visit one palace: <strong>Quinta da Regaleira</strong>.
              If you have time for three: add <strong>Moorish Castle</strong> and{" "}
              <strong>Pena Palace</strong> (grounds only). We squeezed all three into
              a single day starting at 9:30am and finished by 3pm with a lunch break.
              All five is a 2-day project.
            </p>
          </div>
        </ScrollReveal>

        {/* Rankings */}
        <SectionHeading label="Rankings" heading="All 5 Palaces, Ranked" />

        <div className="mt-8 space-y-6">
          {palaceRankings.map((palace, i) => {
            const verdict = verdictColors[palace.verdict];
            return (
              <ScrollReveal key={palace.slug} delay={i * 0.08}>
                <div className="specimen-border rounded-lg bg-white p-0 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-calcário-200 px-5 py-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-névoa-100 font-ui text-sm font-medium text-névoa-700">
                        #{palace.rank}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-granito">
                        {palace.name}
                      </h3>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 font-ui text-xs font-medium ${verdict.bg} ${verdict.text}`}
                    >
                      {verdict.label}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <p className="font-body text-sm leading-relaxed text-granito/80 mb-4">
                      {palace.oneLiner}
                    </p>

                    {/* Stats Row */}
                    <div className="mb-4 flex flex-wrap gap-4 text-xs font-ui text-granito/60">
                      <span className="flex items-center gap-1">
                        <Euro className="h-3.5 w-3.5" /> {palace.cost}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {palace.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5" />
                        <CrowdDots level={palace.crowdLevel} />
                      </span>
                    </div>

                    {/* Rating Bars */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-ui text-xs text-granito/60">Interior</span>
                        <RatingBar value={palace.interior} />
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-ui text-xs text-granito/60">Exterior</span>
                        <RatingBar value={palace.exterior} />
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-ui text-xs text-granito/60">Gardens</span>
                        <RatingBar value={palace.gardens} />
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-ui text-xs text-granito/60">Value</span>
                        <RatingBar value={palace.value} />
                      </div>
                    </div>

                    {/* Best For / Skip If */}
                    <div className="grid gap-2 sm:grid-cols-2 text-xs">
                      <div className="rounded bg-musgo-50 px-3 py-2">
                        <span className="font-ui font-medium text-musgo-600">Best for: </span>
                        <span className="font-body text-granito/70">{palace.bestFor}</span>
                      </div>
                      <div className="rounded bg-ferrugem-50 px-3 py-2">
                        <span className="font-ui font-medium text-ferrugem-600">Skip if: </span>
                        <span className="font-body text-granito/70">{palace.skipIf}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/guides/${palace.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 font-ui text-xs font-medium text-névoa-600 hover:text-névoa-800 transition-colors"
                    >
                      Read full guide <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ContourDivider className="my-12" />

        {/* Scenario Recommendations */}
        <SectionHeading
          label="Scenarios"
          heading="Which Palaces For Your Situation?"
        />

        <div className="mt-8 space-y-4">
          {scenarioRecommendations.map((rec, i) => (
            <ScrollReveal key={rec.scenario} delay={i * 0.06}>
              <div className="rounded-lg border border-calcário-200 bg-white p-5">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-palácio-500" />
                  <h3 className="font-display text-base font-semibold text-granito">
                    &ldquo;{rec.scenario}&rdquo;
                  </h3>
                </div>
                <div className="ml-7">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {rec.palaces.map((p) => (
                      <span
                        key={p}
                        className="rounded-full bg-névoa-100 px-3 py-1 font-ui text-xs font-medium text-névoa-700"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                  <p className="font-body text-sm leading-relaxed text-granito/70">
                    {rec.reasoning}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Cost Summary */}
        <ScrollReveal>
          <ProTip variant="money-saver">
            <strong>Total cost for all 5 palaces:</strong> €52 (or €49 with the
            Pena + Moorish Castle combo ticket). If visiting just our top 3
            (Regaleira + Moorish + Pena grounds): €34.
          </ProTip>
        </ScrollReveal>

        {/* CTA to Itineraries */}
        <ScrollReveal>
          <div className="mt-8 rounded-lg border border-palácio-200 bg-palácio-50 p-6 text-center">
            <Crown className="mx-auto mb-3 h-6 w-6 text-palácio-600" />
            <p className="font-display text-lg font-semibold text-granito mb-2">
              Ready to plan your route?
            </p>
            <p className="font-body text-sm text-granito/70 mb-4">
              See our pre-planned itineraries with realistic timing and transport tips.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/1-day-sintra-itinerary"
                className="inline-flex items-center gap-1.5 rounded-full bg-névoa-600 px-5 py-2 font-ui text-sm font-medium text-white hover:bg-névoa-700 transition-colors"
              >
                1-Day Itinerary <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/2-day-sintra-itinerary"
                className="inline-flex items-center gap-1.5 rounded-full border border-névoa-300 px-5 py-2 font-ui text-sm font-medium text-névoa-700 hover:bg-névoa-50 transition-colors"
              >
                2-Day Itinerary <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* FAQ */}
        <FAQSection faqs={comparisonFaqs} />
      </div>
    </>
  );
}
