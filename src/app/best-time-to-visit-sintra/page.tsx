import type { Metadata } from "next";
import {
  monthlyData,
  seasonalData,
  bestTimeFaqs,
} from "@/data/guides/practical/best-time";
import {
  springAdvantages,
  springChallenges,
  springItinerary,
  springPackingList,
  springFaqs,
} from "@/data/guides/authority/sintra-spring";
import {
  summerAdvantages,
  summerChallenges,
  summerItinerary,
  summerPackingList,
  summerFaqs,
} from "@/data/guides/authority/sintra-summer";
import {
  autumnAdvantages,
  autumnChallenges,
  autumnItinerary,
  autumnPackingList,
  autumnFaqs,
} from "@/data/guides/authority/sintra-autumn";
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
import MonthCard from "@/components/guides/MonthCard";
import {
  Check,
  X,
  Flower2,
  Sun,
  Leaf,
  ThumbsUp,
  AlertTriangle,
  Lightbulb,
  CheckSquare,
  Backpack,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best Time to Visit Sintra (2026) — Month-by-Month Weather, Crowds & Seasonal Guide",
  description:
    "Find the best month to visit Sintra with our practical month-by-month guide covering weather, crowds, and seasonal highlights. Deep-dive into spring, summer, autumn, and winter with itineraries and packing lists.",
  alternates: {
    canonical: "https://sintraitinerary.com/best-time-to-visit-sintra",
  },
};

const allFaqs = [
  ...bestTimeFaqs,
  ...springFaqs,
  ...summerFaqs,
  ...autumnFaqs,
  ...winterFaqs,
];

const seasonIcons = {
  spring: Flower2,
  summer: Sun,
  autumn: Leaf,
  winter: ThumbsUp,
};

const seasonColors = {
  spring: { border: "border-musgo-200", bg: "bg-musgo-50", text: "text-musgo-600", dot: "border-musgo-400", timeBold: "text-musgo-600", icon: "text-musgo-500", packIcon: "text-musgo-500", timelineBorder: "border-musgo-200" },
  summer: { border: "border-palacio-200", bg: "bg-palacio-50", text: "text-palacio-600", dot: "border-palacio-400", timeBold: "text-palacio-600", icon: "text-palacio-500", packIcon: "text-palacio-500", timelineBorder: "border-palacio-200" },
  autumn: { border: "border-ferrugem-200", bg: "bg-ferrugem-50", text: "text-ferrugem-500", dot: "border-ferrugem-400", timeBold: "text-ferrugem-600", icon: "text-ferrugem-400", packIcon: "text-ferrugem-400", timelineBorder: "border-ferrugem-200" },
  winter: { border: "border-calcário-200", bg: "bg-musgo-50", text: "text-musgo-600", dot: "border-névoa-400", timeBold: "text-névoa-600", icon: "text-palácio-500", packIcon: "text-musgo-500", timelineBorder: "border-calcário-200" },
};

const seasons = [
  {
    id: "spring" as const,
    label: "Spring (March-May)",
    intro: "If you can choose when to visit Sintra, choose April or May. The gardens are exploding with color, the weather is warm enough for shirtsleeves but cool enough for comfortable walking, and the summer crowds haven\u2019t hit yet.",
    advantages: springAdvantages,
    challenges: springChallenges,
    itinerary: springItinerary,
    packingList: springPackingList,
    noteKey: "springNote" as const,
  },
  {
    id: "summer" as const,
    label: "Summer (June-August)",
    intro: "No sugarcoating: summer is the hardest time to visit Sintra. Up to 10,000 visitors per day in August, queues stretching an hour at Pena Palace, and heat that makes the hilltop walk exhausting. But the days are longest and you can combine palaces with the coast.",
    advantages: summerAdvantages,
    challenges: summerChallenges,
    itinerary: summerItinerary,
    packingList: summerPackingList,
    noteKey: "summerNote" as const,
  },
  {
    id: "autumn" as const,
    label: "Autumn (September-November)",
    intro: "Autumn is what happens when you combine summer\u2019s warm weather with winter\u2019s empty palaces. From mid-September, the tour bus rush fades, the light turns golden, and the Serra forest begins its transformation into amber and rust.",
    advantages: autumnAdvantages,
    challenges: autumnChallenges,
    itinerary: autumnItinerary,
    packingList: autumnPackingList,
    noteKey: "autumnNote" as const,
  },
  {
    id: "winter" as const,
    label: "Winter (December-February)",
    intro: "We visited Sintra in February expecting grey skies and empty palaces \u2014 and it turned out to be our favourite trip. The fog wrapping around Pena Palace, the Initiation Well entirely to ourselves, hotel prices at half the summer rate.",
    advantages: winterAdvantages,
    challenges: winterChallenges,
    itinerary: winterItinerary,
    packingList: winterPackingList,
    noteKey: "winterNote" as const,
  },
];

export default function BestTimePage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(allFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Best Time to Visit Sintra", url: "/best-time-to-visit-sintra" },
          ]),
        ]}
      />

      <GuideHero
        category="Practical Guide"
        title="Best Time to Visit Sintra"
        subtitle="Month-by-month breakdown of weather, crowds, and what to expect — plus complete seasonal itineraries, packing lists, and pro tips for every season."
        lastVerified="May 2026"
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

        <ContourDivider className="my-12" />

        {/* Season Deep Dives */}
        {seasons.map((season) => {
          const colors = seasonColors[season.id];
          const SeasonIcon = seasonIcons[season.id];

          return (
            <div key={season.id} id={season.id} className="mb-16">
              <SectionHeading label="Deep Dive" heading={season.label} />

              <ScrollReveal>
                <p className="mt-6 mb-8 font-body text-base leading-relaxed text-granito/80">
                  {season.intro}
                </p>
              </ScrollReveal>

              {/* Advantages */}
              <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-granito mb-4">
                Advantages
              </h3>
              <div className="space-y-3 mb-8">
                {season.advantages.map((adv, i) => (
                  <ScrollReveal key={adv.title} delay={i * 0.04}>
                    <div className={`rounded-lg ${colors.border} ${colors.bg} p-4`}>
                      <div className="flex items-start gap-2 mb-1">
                        <SeasonIcon className={`mt-0.5 h-4 w-4 shrink-0 ${colors.text}`} />
                        <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                          {adv.title}
                        </h4>
                      </div>
                      <p className="ml-6 font-body text-sm leading-relaxed text-granito/70">
                        {adv.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Challenges */}
              <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-granito mb-4">
                Challenges & Solutions
              </h3>
              <div className="space-y-3 mb-8">
                {season.challenges.map((ch, i) => (
                  <ScrollReveal key={ch.challenge} delay={i * 0.04}>
                    <div className="specimen-border rounded-lg bg-white p-4">
                      <div className="flex items-start gap-2 mb-1">
                        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-ferrugem-500" />
                        <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                          {ch.challenge}
                        </h4>
                      </div>
                      <p className="ml-6 font-body text-sm leading-relaxed text-granito/70">
                        <span className="font-[family-name:var(--font-ui)] text-xs font-medium text-musgo-600">Solution: </span>
                        {ch.solution}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Itinerary */}
              <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-granito mb-4">
                {season.itinerary.title}
              </h3>
              <div className={`relative ml-4 border-l-2 ${colors.timelineBorder} pl-6 space-y-0 mb-8`}>
                {season.itinerary.stops.map((stop, i) => (
                  <ScrollReveal key={stop.time} delay={i * 0.03}>
                    <div className="relative pb-4">
                      <div className={`absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 ${colors.dot} bg-white`} />
                      <div className="flex items-start gap-3">
                        <span className={`shrink-0 font-[family-name:var(--font-ui)] text-xs font-bold ${colors.timeBold} min-w-[52px]`}>
                          {stop.time}
                        </span>
                        <div>
                          <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                            {stop.activity}
                          </h4>
                          <p className="mt-0.5 flex items-start gap-1 font-body text-xs text-granito/60">
                            <Lightbulb className={`mt-0.5 h-3 w-3 shrink-0 ${colors.icon}`} />
                            {(stop as Record<string, string>)[season.noteKey]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Packing List */}
              <ScrollReveal>
                <div className={`rounded-lg ${colors.border} bg-white p-5 mb-4`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Backpack className={`h-5 w-5 ${colors.packIcon}`} />
                    <p className="font-[family-name:var(--font-ui)] text-xs font-medium uppercase tracking-wider text-granito/50">
                      {season.label} Packing List
                    </p>
                  </div>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {season.packingList.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 font-body text-sm text-granito/80"
                      >
                        <CheckSquare className={`mt-0.5 h-4 w-4 shrink-0 ${colors.packIcon}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          );
        })}

        {/* Pro Tips */}
        <ScrollReveal>
          <ProTip variant="tip">
            <strong>Photography tip:</strong> Winter fog creates the most dramatic
            photos of Sintra&apos;s palaces. Morning mist on Pena Palace from the Moorish Castle walls
            is the most iconic Sintra image — and impossible in clear summer weather.
          </ProTip>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="palace-secret">
            <strong>Sintra&apos;s microclimate:</strong> The hilltop palaces are 5-7°C
            cooler than Lisbon, even in summer. This makes Sintra a great escape from
            Lisbon&apos;s 35°C July heat. Always bring a layer.
          </ProTip>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="palace-secret">
            <strong>The garden lover&apos;s season:</strong> Visit Monserrate in April or May.
            The rhododendrons create tunnels of color, the fern valley is emerald green,
            and the lawn around the palace looks like it belongs in a painting.
          </ProTip>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="money-saver">
            <strong>Skip the interior in summer, save €8:</strong> Pena Palace grounds-only ticket is €12 vs €20.
            In summer, the interior queue makes it a poor value. In winter, with no queue, the full ticket is worth it.
          </ProTip>
        </ScrollReveal>

        <RelatedGuides links={[
          { label: "Photography Guide", href: "/sintra-photography-guide", description: "Best light conditions by season" },
          { label: "Is Sintra Worth Visiting?", href: "/is-sintra-worth-visiting", description: "Real pros and cons" },
          { label: "Sintra on a Budget", href: "/sintra-on-a-budget", description: "Winter prices are even cheaper" },
        ]} />

        <FAQSection faqs={allFaqs} />
      </div>
    </>
  );
}
