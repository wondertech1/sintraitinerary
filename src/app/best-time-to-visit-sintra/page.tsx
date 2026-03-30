import type { Metadata } from "next";
import {
  monthlyData,
  seasonalData,
  bestTimeFaqs,
} from "@/data/guides/practical/best-time";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQSection from "@/components/shared/FAQSection";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import MonthCard from "@/components/guides/MonthCard";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Time to Visit Sintra (2026) — Month-by-Month Weather & Crowds",
  description:
    "Find the best month to visit Sintra with our honest month-by-month guide covering weather, crowds, and seasonal highlights. October and May are our top picks.",
  alternates: {
    canonical: "https://sintraitinerary.com/best-time-to-visit-sintra",
  },
};

export default function BestTimePage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(bestTimeFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Best Time to Visit Sintra", url: "/best-time-to-visit-sintra" },
          ]),
        ]}
      />

      <GuideHero
        category="Practical Guide"
        title="Best Time to Visit Sintra"
        subtitle="Month-by-month breakdown of weather, crowds, and what to expect — so you pick the right time."
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
              <strong>October</strong> is the single best month (warm, empty, autumn colors).{" "}
              <strong>May</strong> is the close second (peak gardens, pre-summer crowds).
              Avoid <strong>August</strong> at all costs. Winter is underrated — foggy, empty,
              and atmospheric.
            </p>
          </div>
        </ScrollReveal>

        {/* Month by Month */}
        <SectionHeading label="Monthly" heading="Month-by-Month Guide" />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {monthlyData.map((month, i) => (
            <ScrollReveal key={month.month} delay={i * 0.04}>
              <MonthCard data={month} />
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        {/* Seasonal Overview */}
        <SectionHeading label="Seasons" heading="Seasonal Overview" />

        <div className="mt-8 space-y-6">
          {seasonalData.map((season, i) => (
            <ScrollReveal key={season.season} delay={i * 0.08}>
              <div className="specimen-border rounded-lg bg-white overflow-hidden">
                <div className="border-b border-calcário-200 px-5 py-3">
                  <h3 className="font-display text-lg font-semibold text-granito">
                    {season.season}{" "}
                    <span className="font-body text-sm font-normal text-granito/50">
                      ({season.months})
                    </span>
                  </h3>
                </div>
                <div className="p-5">
                  <div className="grid gap-4 sm:grid-cols-2 mb-4">
                    <div>
                      <p className="mb-2 font-ui text-[10px] font-medium uppercase tracking-wider text-musgo-600">
                        Pros
                      </p>
                      <ul className="space-y-1.5">
                        {season.pros.map((pro) => (
                          <li
                            key={pro}
                            className="flex items-start gap-2 text-xs font-body text-granito/70"
                          >
                            <Check className="mt-0.5 h-3 w-3 shrink-0 text-musgo-500" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 font-ui text-[10px] font-medium uppercase tracking-wider text-ferrugem-600">
                        Cons
                      </p>
                      <ul className="space-y-1.5">
                        {season.cons.map((con) => (
                          <li
                            key={con}
                            className="flex items-start gap-2 text-xs font-body text-granito/70"
                          >
                            <X className="mt-0.5 h-3 w-3 shrink-0 text-ferrugem-500" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="rounded bg-névoa-50 px-3 py-2">
                    <span className="font-ui text-[10px] font-medium uppercase tracking-wider text-névoa-600">
                      Best for
                    </span>
                    <p className="mt-0.5 font-body text-xs text-granito/70">
                      {season.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pro Tips */}
        <ScrollReveal>
          <ProTip variant="tip">
            <strong>Photography tip:</strong> Winter fog creates the most dramatic
            photos of Sintra&apos;s palaces. We shot Pena Palace from the Moorish Castle walls on a foggy January morning and the silhouette emerging from the mist was the best photo of our entire trip. Far more evocative than clear summer shots.
          </ProTip>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="palace-secret">
            <strong>Sintra&apos;s microclimate:</strong> The hilltop palaces are 5-7°C
            cooler than Lisbon, even in summer. This makes Sintra a great escape from
            Lisbon&apos;s 35°C July heat. Always bring a layer.
          </ProTip>
        </ScrollReveal>

        <RelatedGuides links={[
          { label: "Sintra in Winter", href: "/sintra-in-winter", description: "Why off-season is extraordinary" },
          { label: "Photography Guide", href: "/sintra-photography-guide", description: "Best light conditions by season" },
          { label: "Is Sintra Worth Visiting?", href: "/is-sintra-worth-visiting", description: "Honest pros and cons" },
          { label: "Travel Tips", href: "/sintra-travel-tips", description: "35+ essential tips" },
        ]} />

        <FAQSection faqs={bestTimeFaqs} />
      </div>
    </>
  );
}
