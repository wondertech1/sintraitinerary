import type { Metadata } from "next";
import {
  summerAdvantages,
  summerChallenges,
  summerItinerary,
  summerPackingList,
  summerFaqs,
} from "@/data/guides/authority/sintra-summer";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import {
  Sun,
  AlertTriangle,
  Clock,
  Lightbulb,
  CheckSquare,
  Backpack,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sintra in Summer (2026) — Surviving the Crowds & Heat",
  description:
    "Visiting Sintra in summer? Practical guide to beating the crowds, managing the heat, and making the most of long summer days. Includes a beat-the-crowds itinerary and packing list.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-in-summer",
  },
};

export default function SummerPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(summerFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sintra in Summer", url: "/sintra-in-summer" },
          ]),
        ]}
      />

      <GuideHero
        category="Seasonal Guide"
        title="Sintra in Summer"
        subtitle="Long days, full gardens, crushing crowds. Summer is the most popular time to visit Sintra — here's how to do it without losing your mind."
        lastVerified="January 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            No sugarcoating: summer is the hardest time to visit Sintra. Up to 10,000 visitors per day in August, queues stretching an hour at Pena Palace, and heat that makes the hilltop walk measurably exhausting. But it&apos;s also when the gardens are fullest, the days are longest, and you can combine palaces with the Atlantic coast. Here&apos;s how to make summer work — with a strategy, not wishful thinking.
          </p>
        </ScrollReveal>

        {/* Why Summer */}
        <SectionHeading label="Advantages" heading="What Summer Gets Right" />

        <div className="mt-8 space-y-4">
          {summerAdvantages.map((adv, i) => (
            <ScrollReveal key={adv.title} delay={i * 0.06}>
              <div className="rounded-lg border border-palacio-200 bg-palacio-50 p-5">
                <div className="flex items-start gap-2 mb-2">
                  <Sun className="mt-0.5 h-4 w-4 shrink-0 text-palacio-600" />
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
        <SectionHeading label="Challenges" heading="The Summer Trade-Offs (Be Prepared)" />

        <div className="mt-8 space-y-4">
          {summerChallenges.map((ch, i) => (
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

        {/* Summer Itinerary */}
        <SectionHeading label="Itinerary" heading={summerItinerary.title} />

        <div className="mt-8 relative ml-4 border-l-2 border-palacio-200 pl-6 space-y-0">
          {summerItinerary.stops.map((stop, i) => (
            <ScrollReveal key={stop.time} delay={i * 0.04}>
              <div className="relative pb-5">
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-palacio-400 bg-white" />
                <div className="flex items-start gap-3">
                  <span className="shrink-0 font-[family-name:var(--font-ui)] text-xs font-bold text-palacio-600 min-w-[52px]">
                    {stop.time}
                  </span>
                  <div>
                    <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                      {stop.activity}
                    </h4>
                    <p className="mt-0.5 flex items-start gap-1 font-body text-xs text-granito/60">
                      <Lightbulb className="mt-0.5 h-3 w-3 shrink-0 text-palacio-500" />
                      {stop.summerNote}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Packing List */}
        <SectionHeading label="Packing" heading="Summer Essentials" />

        <ScrollReveal>
          <div className="mt-8 rounded-lg border border-palacio-200 bg-white p-5">
            <div className="flex items-center gap-2 mb-4">
              <Backpack className="h-5 w-5 text-palacio-500" />
              <p className="font-[family-name:var(--font-ui)] text-xs font-medium uppercase tracking-wider text-granito/50">
                Pack these for a summer day in Sintra
              </p>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {summerPackingList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-body text-sm text-granito/80"
                >
                  <CheckSquare className="mt-0.5 h-4 w-4 shrink-0 text-palacio-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="money-saver">
            <strong>Skip the interior, save €8:</strong> Pena Palace grounds-only ticket is €12 vs €20 for the full ticket. In summer, the interior queue makes it a poor value. Use the €8 and saved time toward Monserrate or Regaleira instead.
          </ProTip>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        <RelatedGuides links={[
          { label: "Best Time to Visit", href: "/best-time-to-visit-sintra", description: "Month-by-month comparison" },
          { label: "Sintra in Winter", href: "/sintra-in-winter", description: "The off-season alternative" },
          { label: "Sintra + Cascais", href: "/sintra-cascais-itinerary", description: "Add the coast to your day" },
          { label: "Tickets & Passes", href: "/sintra-tickets-and-passes", description: "Pre-book to skip queues" },
        ]} />
      </div>
    </>
  );
}
