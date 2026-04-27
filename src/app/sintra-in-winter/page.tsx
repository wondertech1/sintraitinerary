import type { Metadata } from "next";
import {
  winterAdvantages,
  winterChallenges,
  winterItinerary,
  winterPackingList,
  winterFaqs,
} from "@/data/guides/authority/sintra-winter";
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
  ThumbsUp,
  AlertTriangle,
  Clock,
  Lightbulb,
  CheckSquare,
  Backpack,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sintra in Winter (2026) — Why the Off-Season Is Actually Better",
  description:
    "Why visiting Sintra in winter is otherworldly: no queues, fog-wrapped palaces, lower prices. Plus a complete winter day itinerary and packing list.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-in-winter",
  },
};

export default function WinterPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(winterFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sintra in Winter", url: "/sintra-in-winter" },
          ]),
        ]}
      />

      <GuideHero
        category="Seasonal Guide"
        title="Sintra in Winter"
        subtitle="No queues, fog-wrapped palaces, and a fairytale atmosphere that summer can't match. The case for visiting off-season."
        lastVerified="January 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            We at Sintra Itinerary visited Sintra in February expecting grey skies and empty palaces — and it turned out to be our favourite trip. The fog wrapping around Pena Palace, the Initiation Well entirely to ourselves, hotel prices at half the summer rate. Here is why the off-season might actually be the best season.
          </p>
        </ScrollReveal>

        {/* Why Winter */}
        <SectionHeading label="Advantages" heading="Why Winter Is Better" />

        <div className="mt-8 space-y-4">
          {winterAdvantages.map((adv, i) => (
            <ScrollReveal key={adv.title} delay={i * 0.06}>
              <div className="rounded-lg border border-musgo-200 bg-musgo-50 p-5">
                <div className="flex items-start gap-2 mb-2">
                  <ThumbsUp className="mt-0.5 h-4 w-4 shrink-0 text-musgo-600" />
                  <h3 className="font-display text-sm font-semibold text-granito">
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
        <SectionHeading label="Challenges" heading="The Trade-Offs (and How to Handle Them)" />

        <div className="mt-8 space-y-4">
          {winterChallenges.map((ch, i) => (
            <ScrollReveal key={ch.challenge} delay={i * 0.06}>
              <div className="specimen-border rounded-lg bg-white p-5">
                <div className="flex items-start gap-2 mb-2">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-ferrugem-500" />
                  <h3 className="font-display text-sm font-semibold text-granito">
                    {ch.challenge}
                  </h3>
                </div>
                <p className="ml-6 font-body text-sm leading-relaxed text-granito/70">
                  <span className="font-ui text-xs font-medium text-musgo-600">Solution: </span>
                  {ch.solution}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        {/* Winter Itinerary */}
        <SectionHeading label="Itinerary" heading={winterItinerary.title} />

        <div className="mt-8 relative ml-4 border-l-2 border-calcário-200 pl-6 space-y-0">
          {winterItinerary.stops.map((stop, i) => (
            <ScrollReveal key={stop.time} delay={i * 0.04}>
              <div className="relative pb-5">
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-névoa-400 bg-white" />
                <div className="flex items-start gap-3">
                  <span className="shrink-0 font-ui text-xs font-bold text-névoa-600 min-w-[52px]">
                    {stop.time}
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-granito">
                      {stop.activity}
                    </h4>
                    <p className="mt-0.5 flex items-start gap-1 font-body text-xs text-granito/60">
                      <Lightbulb className="mt-0.5 h-3 w-3 shrink-0 text-palácio-500" />
                      {stop.winterNote}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Packing List */}
        <SectionHeading label="Packing" heading="Winter Packing List" />

        <ScrollReveal>
          <div className="mt-8 rounded-lg border border-calcário-200 bg-white p-5">
            <div className="flex items-center gap-2 mb-4">
              <Backpack className="h-5 w-5 text-névoa-500" />
              <p className="font-ui text-xs font-medium uppercase tracking-wider text-granito/50">
                Essentials for a winter day in Sintra
              </p>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {winterPackingList.map((item) => (
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
            <strong>The photographer&apos;s secret season:</strong> November through February
            produces Sintra&apos;s most iconic images. Fog-wrapped Pena Palace, mist on the
            Moorish Castle walls, rain-slicked cobblestones — these atmospheric shots are
            impossible in clear summer weather.
          </ProTip>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="money-saver">
            <strong>Winter savings:</strong> Palace tickets are the same price year-round,
            but Lisbon accommodation drops 20-40%, flights are cheaper, and restaurants
            are less crowded. The overall trip cost is significantly lower.
          </ProTip>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        <RelatedGuides links={[
          { label: "Best Time to Visit", href: "/best-time-to-visit-sintra", description: "Month-by-month weather & crowds" },
          { label: "Photography Guide", href: "/sintra-photography-guide", description: "Best fog & winter light shots" },
          { label: "Sintra on a Budget", href: "/sintra-on-a-budget", description: "Winter prices are even cheaper" },
          { label: "Walking Routes", href: "/sintra-walking-routes", description: "Atmospheric winter walks" },
        ]} />

        <FAQSection faqs={winterFaqs} />
      </div>
    </>
  );
}
