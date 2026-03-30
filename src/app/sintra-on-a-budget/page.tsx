import type { Metadata } from "next";
import {
  freeAttractions,
  moneySavingTips,
  budgetLevels,
  budgetFaqs,
} from "@/data/guides/practical/budget";
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
  Eye,
  Footprints,
  TreePine,
  Palette,
  Waves,
  Clock,
  Lightbulb,
  Train,
  Ticket,
  UtensilsCrossed,
  Bed,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sintra on a Budget (2026) — Free Things to Do & Money-Saving Tips",
  description:
    "Visit Sintra for under €30. Free attractions, money-saving ticket strategies, budget food options, and a complete budget day trip plan.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-on-a-budget",
  },
};

const typeIcons: Record<string, typeof Eye> = {
  viewpoint: Eye,
  walk: Footprints,
  park: TreePine,
  culture: Palette,
  beach: Waves,
};

const categoryIcons: Record<string, typeof Train> = {
  transport: Train,
  tickets: Ticket,
  food: UtensilsCrossed,
  accommodation: Bed,
  general: Sparkles,
};

const categoryLabels: Record<string, string> = {
  transport: "Transport",
  tickets: "Tickets",
  food: "Food",
  accommodation: "Accommodation",
  general: "General",
};

const levelStyles: Record<
  string,
  { bg: string; border: string; heading: string }
> = {
  backpacker: {
    bg: "bg-musgo-50",
    border: "border-musgo-200",
    heading: "text-musgo-700",
  },
  budget: {
    bg: "bg-palácio-50",
    border: "border-palácio-200",
    heading: "text-palácio-700",
  },
  "mid-range": {
    bg: "bg-névoa-50",
    border: "border-névoa-200",
    heading: "text-névoa-700",
  },
};

export default function BudgetPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(budgetFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sintra on a Budget", url: "/sintra-on-a-budget" },
          ]),
        ]}
      />

      <GuideHero
        category="Budget Guide"
        title="Sintra on a Budget"
        subtitle="Free attractions, money-saving tricks, and a complete under-€30 day trip plan."
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
              A budget day trip costs <strong>€30-40</strong> per person (train
              €4.50 + 2 palaces €20 + packed lunch €5). The cheapest meaningful
              day: train + Regaleira (€12) + Moorish Castle (€8) + packed
              lunch = <strong>under €30</strong>.
            </p>
          </div>
        </ScrollReveal>

        {/* Budget Levels */}
        <SectionHeading label="What It Costs" heading="Daily Budget Breakdown" />

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {budgetLevels.map((level, i) => {
            const style = levelStyles[level.level];
            return (
              <ScrollReveal key={level.level} delay={i * 0.08}>
                <div
                  className={`rounded-lg border ${style.border} ${style.bg} p-5 h-full`}
                >
                  <p
                    className={`font-ui text-xs font-medium uppercase tracking-wider ${style.heading} mb-1`}
                  >
                    {level.level}
                  </p>
                  <p className="font-display text-2xl font-bold text-granito mb-4">
                    {level.dailyCost}
                  </p>
                  <div className="space-y-2 text-xs font-body text-granito/70">
                    <div>
                      <span className="font-ui font-medium text-granito/50">
                        Transport:
                      </span>{" "}
                      {level.transport}
                    </div>
                    <div>
                      <span className="font-ui font-medium text-granito/50">
                        Tickets:
                      </span>{" "}
                      {level.tickets}
                    </div>
                    <div>
                      <span className="font-ui font-medium text-granito/50">
                        Food:
                      </span>{" "}
                      {level.food}
                    </div>
                    <div>
                      <span className="font-ui font-medium text-granito/50">
                        Stay:
                      </span>{" "}
                      {level.accommodation}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ContourDivider className="my-12" />

        {/* Free Attractions */}
        <SectionHeading label="Free" heading="Free Things to Do" />

        <div className="mt-8 space-y-3">
          {freeAttractions.map((attraction, i) => {
            const Icon = typeIcons[attraction.type] || Eye;
            return (
              <ScrollReveal key={attraction.name} delay={i * 0.05}>
                <div className="rounded-lg border border-calcário-200 bg-white p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-névoa-100">
                      <Icon className="h-3.5 w-3.5 text-névoa-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display text-sm font-semibold text-granito">
                          {attraction.name}
                        </h3>
                        <span className="font-ui text-[10px] text-granito/40">
                          <Clock className="mr-0.5 inline h-3 w-3" />
                          {attraction.duration}
                        </span>
                      </div>
                      <p className="font-body text-sm text-granito/70 mb-1">
                        {attraction.description}
                      </p>
                      <p className="flex items-start gap-1 font-ui text-xs text-musgo-600">
                        <Lightbulb className="mt-0.5 h-3 w-3 shrink-0" />
                        {attraction.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Money Saving Tips */}
        <SectionHeading label="Save Money" heading="Money-Saving Tips" />

        <div className="mt-8 space-y-3">
          {moneySavingTips.map((tip, i) => {
            const Icon = categoryIcons[tip.category] || Sparkles;
            return (
              <ScrollReveal key={tip.tip.slice(0, 40)} delay={i * 0.04}>
                <div className="flex items-start gap-3 rounded-lg border border-calcário-200 bg-white p-4">
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-névoa-100">
                      <Icon className="h-3 w-3 text-névoa-600" />
                    </div>
                    <span className="font-ui text-[9px] text-granito/40">
                      {categoryLabels[tip.category]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-body text-sm text-granito/80">
                      {tip.tip}
                    </p>
                    <p className="mt-1 font-ui text-xs font-medium text-musgo-600">
                      Saves: {tip.saving}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Budget Day Plan */}
        <ScrollReveal>
          <ProTip variant="money-saver">
            <strong>The €28 budget day trip:</strong> Train from Lisbon (€4.50 return)
            → Walk to town center → Regaleira (€12) → Walk to Moorish Castle (€8) →
            Bus 434 back to town → Piriquita travesseiro to-go (€1.80) → Train home.
            We did this exact route on a Wednesday in October and spent €26.30 total for two world-class attractions and a full, satisfying day.
          </ProTip>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        <RelatedGuides links={[
          { label: "Tickets & Passes", href: "/sintra-tickets-and-passes", description: "All prices and combo deals" },
          { label: "Where to Eat", href: "/where-to-eat-in-sintra", description: "Budget restaurant picks" },
          { label: "Walking Routes", href: "/sintra-walking-routes", description: "Free trails between palaces" },
          { label: "Getting to Sintra", href: "/getting-to-sintra-from-lisbon", description: "Cheapest transport options" },
        ]} />

        <FAQSection faqs={budgetFaqs} />
      </div>
    </>
  );
}
