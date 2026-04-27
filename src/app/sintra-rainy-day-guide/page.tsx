import type { Metadata } from "next";
import {
  rainyDayAttractions,
  indoorActivities,
  rainyDayItinerary,
  gearChecklist,
  rainyDayFaqs,
} from "@/data/guides/practical/rainy-day";
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
  CloudRain,
  Umbrella,
  Clock,
  Coffee,
  CheckSquare,
  ThumbsUp,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Sintra Rainy Day Guide (2026) — Why Rain Makes Sintra Better & What to Do",
  description:
    "Don't cancel your Sintra trip because of rain. The fog-wrapped palaces, empty tunnels, and atmospheric gardens are actually better in the rain. Full rainy day itinerary inside.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-rainy-day-guide",
  },
};

const priorityBadge = (p: "essential" | "recommended" | "nice-to-have") => {
  const map = {
    essential: "bg-ferrugem-100 text-ferrugem-700",
    recommended: "bg-palácio-100 text-palácio-700",
    "nice-to-have": "bg-calcário-100 text-granito/60",
  };
  return (
    <span
      className={`rounded-full px-2 py-0.5 font-ui text-[10px] font-medium capitalize ${map[p]}`}
    >
      {p}
    </span>
  );
};

const rankBadge = (rank: number) => {
  const colors = [
    "bg-musgo-600 text-white",
    "bg-musgo-500 text-white",
    "bg-névoa-500 text-white",
    "bg-palácio-500 text-white",
    "bg-ferrugem-500 text-white",
  ];
  return (
    <span
      className={`flex h-6 w-6 items-center justify-center rounded-full font-ui text-xs font-bold ${colors[rank - 1]}`}
    >
      {rank}
    </span>
  );
};

export default function RainyDayGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(rainyDayFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Rainy Day Guide", url: "/sintra-rainy-day-guide" },
          ]),
        ]}
      />

      <GuideHero
        category="Practical Guide"
        title="Sintra Rainy Day Guide"
        subtitle="Rain doesn't ruin Sintra — it transforms it. Fog-wrapped palaces, empty tunnels, and atmospheric gardens. Here's how to make the most of it."
        lastVerified="January 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        {/* Quick Answer */}
        <ScrollReveal>
          <div className="mb-12 rounded-lg border-2 border-palácio-300 bg-palácio-50 p-6">
            <p className="font-ui text-xs font-medium uppercase tracking-wider text-palácio-600 mb-2">
              Quick Answer
            </p>
            <p className="font-display text-lg font-bold text-granito mb-2">
              Don&apos;t cancel. Rain makes Sintra better.
            </p>
            <p className="font-body text-granito/80 leading-relaxed">
              Visit Regaleira&apos;s tunnels (covered), the National Palace
              (indoor), and Monserrate interior (indoor). Skip the Moorish
              Castle (slippery, no views). Bring waterproof shoes and a rain
              jacket. The fog-wrapped atmosphere is something you <em>can&apos;t</em>{" "}
              get on a clear day.
            </p>
          </div>
        </ScrollReveal>

        {/* Why Rain Makes Sintra Better */}
        <SectionHeading
          label="Perspective"
          heading="Why Rain Makes Sintra Better"
        />

        <ScrollReveal>
          <div className="mt-8 space-y-4 font-body text-sm leading-relaxed text-granito/80">
            <p>
              Sintra was built for rain. The palaces were designed by 19th-century
              romantics who were <em>inspired</em> by fog, mist, and dramatic weather.
              Pena Palace emerging from clouds, the Initiation Well with water
              streaming down its stone walls, the forests dripping with moss — this
              is the atmosphere Lord Byron described as a &ldquo;glorious Eden.&rdquo; We at Sintra Itinerary have visited Sintra in every season, and our rainiest day — a misty March afternoon where we could barely see the Moorish Castle from 50 meters — was actually the most memorable.
            </p>
            <p>
              The practical upside: rain clears out the crowds. Summer Sintra
              can feel like a theme park — buses packed, queues long, every
              viewpoint contested. Rainy Sintra is atmospheric, uncrowded, and
              photogenic in ways that clear skies can&apos;t match.
            </p>
          </div>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        {/* Best Attractions in the Rain */}
        <SectionHeading
          label="Rankings"
          heading="Best Attractions in the Rain"
        />

        <ScrollReveal>
          <p className="mt-4 font-body text-sm text-granito/70 leading-relaxed">
            Ranked from best to worst for rainy-day visits.
          </p>
        </ScrollReveal>

        <div className="mt-8 space-y-4">
          {rainyDayAttractions.map((attr, i) => (
            <ScrollReveal key={attr.name} delay={i * 0.06}>
              <div
                className={`rounded-lg border p-5 ${
                  attr.rank <= 3
                    ? "border-musgo-200 bg-musgo-50"
                    : attr.rank === 5
                      ? "border-ferrugem-200 bg-ferrugem-50"
                      : "specimen-border bg-white"
                }`}
              >
                <div className="flex items-start gap-3">
                  {rankBadge(attr.rank)}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-display text-sm font-semibold text-granito">
                        {attr.name}
                      </h3>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 font-ui text-[10px] font-medium capitalize ${
                          attr.indoorOutdoor === "indoor"
                            ? "bg-musgo-100 text-musgo-700"
                            : attr.indoorOutdoor === "covered"
                              ? "bg-palácio-100 text-palácio-700"
                              : "bg-ferrugem-100 text-ferrugem-700"
                        }`}
                      >
                        {attr.indoorOutdoor}
                      </span>
                    </div>
                    <p className="mb-2 font-body text-sm leading-relaxed text-granito/70">
                      {attr.description}
                    </p>
                    <p className="flex items-start gap-1.5 font-ui text-xs text-musgo-600 italic">
                      <CloudRain className="mt-0.5 h-3 w-3 shrink-0" />
                      {attr.rainAdvantage}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Indoor Escapes */}
        <SectionHeading label="Indoor" heading="Indoor Escapes" />

        <div className="mt-8 space-y-3">
          {indoorActivities.map((activity, i) => (
            <ScrollReveal key={activity.name} delay={i * 0.05}>
              <div className="rounded-lg border border-calcário-200 bg-white p-4">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div className="flex items-center gap-2">
                    <Coffee className="h-4 w-4 text-névoa-500" />
                    <h3 className="font-display text-sm font-semibold text-granito">
                      {activity.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-ui text-xs text-granito/50">
                      {activity.cost}
                    </span>
                    <span className="rounded-full bg-névoa-100 px-2 py-0.5 font-ui text-[10px] font-medium text-névoa-600">
                      {activity.type}
                    </span>
                  </div>
                </div>
                <p className="ml-6 font-body text-sm text-granito/70">
                  {activity.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        {/* Perfect Rainy Day Schedule */}
        <SectionHeading
          label="Itinerary"
          heading="Perfect Rainy Day Schedule"
        />

        <div className="mt-8 relative ml-4 border-l-2 border-névoa-200 pl-6 space-y-0">
          {rainyDayItinerary.map((stop, i) => (
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
                      <CloudRain className="mt-0.5 h-3 w-3 shrink-0 text-névoa-400" />
                      {stop.rainyNote}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Gear Checklist */}
        <SectionHeading label="Packing" heading="What to Wear and Bring" />

        <ScrollReveal>
          <div className="mt-8 rounded-lg border border-calcário-200 bg-white p-5">
            <div className="flex items-center gap-2 mb-4">
              <Umbrella className="h-5 w-5 text-névoa-500" />
              <p className="font-ui text-xs font-medium uppercase tracking-wider text-granito/50">
                Rainy Day Gear Checklist
              </p>
            </div>
            <ul className="space-y-3">
              {gearChecklist.map((item) => (
                <li
                  key={item.item}
                  className="flex items-start gap-3"
                >
                  <CheckSquare className="mt-0.5 h-4 w-4 shrink-0 text-musgo-500" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-body text-sm font-medium text-granito">
                        {item.item}
                      </span>
                      {priorityBadge(item.priority)}
                    </div>
                    <p className="mt-0.5 font-body text-xs text-granito/50">
                      {item.note}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Verdict Box */}
        <ScrollReveal>
          <div className="rounded-lg border-2 border-musgo-300 bg-musgo-50 p-6 text-center">
            <div className="flex justify-center mb-3">
              <ThumbsUp className="h-8 w-8 text-musgo-600" />
            </div>
            <p className="font-display text-xl font-bold text-granito mb-2">
              Should I cancel my Sintra trip because of rain?
            </p>
            <p className="font-display text-lg font-semibold text-musgo-700 mb-3">
              No. Go anyway.
            </p>
            <p className="mx-auto max-w-lg font-body text-sm text-granito/70 leading-relaxed">
              Bring proper rain gear, adjust your route to favor indoor and
              covered attractions, and embrace the atmosphere. You&apos;ll see a
              side of Sintra that clear-weather visitors never experience.
            </p>
          </div>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        <RelatedGuides
          links={[
            {
              label: "Sintra in Winter",
              href: "/sintra-in-winter",
              description: "Full winter season guide",
            },
            {
              label: "Local Food Guide",
              href: "/sintra-local-food-guide",
              description: "Cafés & indoor food stops",
            },
            {
              label: "Initiation Well Guide",
              href: "/quinta-da-regaleira-initiation-well",
              description: "The tunnels are covered in rain",
            },
            {
              label: "3-Day Itinerary",
              href: "/3-day-sintra-itinerary",
              description: "Swap the coast day if it rains",
            },
          ]}
        />

        <FAQSection faqs={rainyDayFaqs} />
      </div>
    </>
  );
}
