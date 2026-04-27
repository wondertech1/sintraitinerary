import type { Metadata } from "next";
import {
  springAdvantages,
  springChallenges,
  springItinerary,
  springPackingList,
  springFaqs,
} from "@/data/guides/authority/sintra-spring";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQSection from "@/components/shared/FAQSection";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import {
  Flower2,
  AlertTriangle,
  Clock,
  Lightbulb,
  CheckSquare,
  Backpack,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sintra in Spring (2026) — The Best Season to Visit",
  description:
    "Why spring is the best time to visit Sintra: blooming gardens, comfortable weather, manageable crowds. Complete spring itinerary, packing list, and month-by-month breakdown.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-in-spring",
  },
};

export default function SpringPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(springFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sintra in Spring", url: "/sintra-in-spring" },
          ]),
        ]}
      />

      <GuideHero
        category="Seasonal Guide"
        title="Sintra in Spring"
        subtitle="Blooming gardens, golden light, and crowds that haven't arrived yet. Most locals agree: this is the best time to visit."
        lastVerified="January 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            If you can choose when to visit Sintra, choose April or May. The gardens are exploding with color — Monserrate alone is worth the trip for the camellias and rhododendrons. The weather is warm enough for shirtsleeves but cool enough for comfortable walking. And the summer crowds haven&apos;t hit yet. We at Sintra Itinerary have visited Sintra in every season, and spring is the one we keep coming back to.
          </p>
        </ScrollReveal>

        {/* Advantages */}
        <SectionHeading label="Advantages" heading="Why Spring Wins" />

        <div className="mt-8 space-y-4">
          {springAdvantages.map((adv, i) => (
            <ScrollReveal key={adv.title} delay={i * 0.06}>
              <div className="rounded-lg border border-musgo-200 bg-musgo-50 p-5">
                <div className="flex items-start gap-2 mb-2">
                  <Flower2 className="mt-0.5 h-4 w-4 shrink-0 text-musgo-600" />
                  <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                    {adv.title}
                  </h3>
                </div>
                <p className="ml-6 font-body text-sm leading-relaxed text-granito/70">
                  {adv.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Challenges */}
        <SectionHeading label="Challenges" heading="A Few Things to Know" />

        <div className="mt-8 space-y-4">
          {springChallenges.map((ch, i) => (
            <ScrollReveal key={ch.challenge} delay={i * 0.06}>
              <div className="specimen-border rounded-lg bg-white p-5">
                <div className="flex items-start gap-2 mb-2">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-ferrugem-500" />
                  <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                    {ch.challenge}
                  </h3>
                </div>
                <p className="ml-6 font-body text-sm leading-relaxed text-granito/70">
                  <span className="font-[family-name:var(--font-ui)] text-xs font-medium text-musgo-600">Solution: </span>
                  {ch.solution}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        {/* Spring Itinerary */}
        <SectionHeading label="Itinerary" heading={springItinerary.title} />

        <div className="mt-8 relative ml-4 border-l-2 border-musgo-200 pl-6 space-y-0">
          {springItinerary.stops.map((stop, i) => (
            <ScrollReveal key={stop.time} delay={i * 0.04}>
              <div className="relative pb-5">
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-musgo-400 bg-white" />
                <div className="flex items-start gap-3">
                  <span className="shrink-0 font-[family-name:var(--font-ui)] text-xs font-bold text-musgo-600 min-w-[52px]">
                    {stop.time}
                  </span>
                  <div>
                    <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                      {stop.activity}
                    </h4>
                    <p className="mt-0.5 flex items-start gap-1 font-body text-xs text-granito/60">
                      <Lightbulb className="mt-0.5 h-3 w-3 shrink-0 text-musgo-500" />
                      {stop.springNote}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Packing List */}
        <SectionHeading label="Packing" heading="Spring Packing List" />

        <ScrollReveal>
          <div className="mt-8 rounded-lg border border-musgo-200 bg-white p-5">
            <div className="flex items-center gap-2 mb-4">
              <Backpack className="h-5 w-5 text-musgo-500" />
              <p className="font-[family-name:var(--font-ui)] text-xs font-medium uppercase tracking-wider text-granito/50">
                What to bring for a spring day in Sintra
              </p>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {springPackingList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-body text-sm text-granito/80"
                >
                  <CheckSquare className="mt-0.5 h-4 w-4 shrink-0 text-musgo-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="palace-secret">
            <strong>The garden lover&apos;s season:</strong> If you care about gardens even a little, visit Monserrate in April or May. The rhododendrons create tunnels of color, the fern valley is emerald green, and the lawn around the palace looks like it belongs in a painting. It&apos;s Sintra&apos;s most underrated palace, and spring is when it shines brightest.
          </ProTip>
        </ScrollReveal>

        <RelatedGuides links={[
          { label: "Best Time to Visit", href: "/best-time-to-visit-sintra", description: "Full month-by-month breakdown" },
          { label: "Sintra in Summer", href: "/sintra-in-summer", description: "What changes in peak season" },
          { label: "Monserrate Guide", href: "/guides/monserrate-palace-guide", description: "The spring garden star" },
          { label: "Walking Routes", href: "/sintra-walking-routes", description: "Best spring hiking trails" },
        ]} />

        <FAQSection faqs={springFaqs} />
      </div>
    </>
  );
}
