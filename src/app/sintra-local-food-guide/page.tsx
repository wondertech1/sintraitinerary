import type { Metadata } from "next";
import {
  sintraPastries,
  savoryDishes,
  foodWalkStops,
  touristTraps,
  localFoodFaqs,
} from "@/data/guides/practical/local-food";
import FAQSection from "@/components/shared/FAQSection";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import {
  UtensilsCrossed,
  AlertTriangle,
  Clock,
  MapPin,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Pastéis de Sintra & Local Food Guide (2026) — What to Eat, Where to Find It, What to Skip",
  description:
    "Deep dive into Sintra's food scene: travesseiros, queijadas, local dishes, a self-guided food walk, and the tourist traps to avoid. The honest food guide.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-local-food-guide",
  },
};

const verdictBadge = (verdict: "must-try" | "worth-trying" | "skip") => {
  const map = {
    "must-try": "bg-musgo-100 text-musgo-700 border-musgo-200",
    "worth-trying": "bg-palácio-100 text-palácio-700 border-palácio-200",
    skip: "bg-ferrugem-100 text-ferrugem-700 border-ferrugem-200",
  };
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 font-ui text-[10px] font-medium capitalize ${map[verdict]}`}
    >
      {verdict === "must-try" && "★ "}
      {verdict}
    </span>
  );
};

const mealBadge = (meal: "lunch" | "dinner" | "snack" | "any") => {
  const map = {
    lunch: "bg-névoa-100 text-névoa-700",
    dinner: "bg-névoa-100 text-névoa-700",
    snack: "bg-palácio-100 text-palácio-700",
    any: "bg-calcário-100 text-granito/60",
  };
  return (
    <span
      className={`rounded-full px-2 py-0.5 font-ui text-[10px] font-medium capitalize ${map[meal]}`}
    >
      {meal}
    </span>
  );
};

export default function LocalFoodGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Local Food Guide", url: "/sintra-local-food-guide" },
          ]),
        ]}
      />

      <GuideHero
        category="Food Guide"
        title="Pastéis de Sintra & Local Food Guide"
        subtitle="The pastries that have defined this town for 700 years, the savory dishes worth ordering, a self-guided food walk, and the tourist traps to avoid."
        lastVerified="March 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            Sintra has been making its own pastries for over 700 years, and we ate our way through every bakery, restaurant, and market stall in town to separate the genuinely special from the tourist-bait — here is everything we found worth ordering.
          </p>
        </ScrollReveal>

        {/* Sweet Treats */}
        <SectionHeading
          label="Pastries"
          heading="Sintra's Signature Sweet Treats"
        />

        <div className="mt-8 space-y-4">
          {sintraPastries.map((pastry, i) => (
            <ScrollReveal key={pastry.name} delay={i * 0.06}>
              <div
                className={`rounded-lg border p-5 ${
                  pastry.verdict === "skip"
                    ? "border-ferrugem-200 bg-ferrugem-50"
                    : "specimen-border bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="font-display text-base font-semibold text-granito">
                      {pastry.name}
                    </h3>
                    <p className="font-ui text-[10px] text-granito/40 mt-0.5">
                      {pastry.origin}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-ui text-sm font-medium text-granito/60">
                      {pastry.price}
                    </span>
                    {verdictBadge(pastry.verdict)}
                  </div>
                </div>
                <p className="mb-2 font-body text-sm leading-relaxed text-granito/80">
                  {pastry.description}
                </p>
                <p className="flex items-center gap-1.5 font-ui text-xs text-musgo-600">
                  <MapPin className="h-3 w-3" /> {pastry.whereToTry}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <ProTip variant="tip">
            <strong>Pro move:</strong> Buy travesseiros from Piriquita to-go
            and eat them while walking. They&apos;re best warm — we timed it once and the almond
            filling stayed perfectly molten for about 10 minutes before the pastry cooled and firmed up. The queijadas
            travel well too. Skip the cramped seating.
          </ProTip>
        </ScrollReveal>

        {/* Savory Dishes */}
        <SectionHeading
          label="Savory"
          heading="Beyond the Pastries"
        />

        <div className="mt-8 space-y-4">
          {savoryDishes.map((dish, i) => (
            <ScrollReveal key={dish.name} delay={i * 0.06}>
              <div className="specimen-border rounded-lg bg-white p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-base font-semibold text-granito">
                    {dish.name}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-ui text-sm font-medium text-granito/60">
                      {dish.price}
                    </span>
                    {mealBadge(dish.mealType)}
                  </div>
                </div>
                <p className="mb-2 font-body text-sm leading-relaxed text-granito/80">
                  {dish.description}
                </p>
                <p className="flex items-center gap-1.5 font-ui text-xs text-musgo-600">
                  <UtensilsCrossed className="h-3 w-3" /> {dish.whereToTry}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        {/* Food Walk */}
        <SectionHeading
          label="Food Walk"
          heading="Self-Guided Sintra Food Walk"
        />

        <ScrollReveal>
          <p className="mt-4 font-body text-sm text-granito/70 leading-relaxed">
            2–3 hours, 7 stops, under €45. All within a 10-minute walk of each
            other in the town center. No booking needed — just follow the route.
          </p>
        </ScrollReveal>

        <div className="mt-8 relative ml-4 border-l-2 border-palácio-200 pl-6 space-y-0">
          {foodWalkStops.map((stop, i) => (
            <ScrollReveal key={stop.place} delay={i * 0.04}>
              <div className="relative pb-5">
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-palácio-400 bg-white" />
                <div className="flex items-start gap-3">
                  <span className="shrink-0 font-ui text-xs font-bold text-palácio-600 min-w-[52px]">
                    {stop.time}
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-granito">
                      {stop.place}
                    </h4>
                    <p className="mt-0.5 font-body text-xs text-granito/80">
                      {stop.whatToGet}
                    </p>
                    <div className="mt-1 flex items-center gap-3">
                      <span className="font-ui text-[10px] font-medium text-musgo-600">
                        ~{stop.cost}
                      </span>
                      <p className="flex items-start gap-1 font-body text-[11px] text-granito/50 italic">
                        {stop.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tourist Traps */}
        <SectionHeading
          label="Avoid"
          heading="Tourist Traps to Skip"
        />

        <div className="mt-8 space-y-3">
          {touristTraps.map((trap, i) => (
            <ScrollReveal key={trap.name} delay={i * 0.05}>
              <div className="rounded-lg border border-ferrugem-200 bg-ferrugem-50 p-4">
                <div className="flex items-start gap-2 mb-1">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-ferrugem-500" />
                  <h3 className="font-display text-sm font-semibold text-granito">
                    {trap.name}
                  </h3>
                </div>
                <p className="ml-6 mb-2 font-body text-sm text-granito/70">
                  {trap.why}
                </p>
                <p className="ml-6 font-body text-sm text-granito/70">
                  <span className="font-ui text-xs font-medium text-musgo-600">
                    Instead:{" "}
                  </span>
                  {trap.instead}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        <FAQSection faqs={localFoodFaqs} />

        <ContourDivider className="my-12" />

        <RelatedGuides
          links={[
            {
              label: "Where to Eat in Sintra",
              href: "/where-to-eat-in-sintra",
              description: "Full restaurant directory",
            },
            {
              label: "Sintra on a Budget",
              href: "/sintra-on-a-budget",
              description: "Budget food strategies",
            },
            {
              label: "3-Day Itinerary",
              href: "/3-day-sintra-itinerary",
              description: "Includes the food walk on Day 3",
            },
            {
              label: "Rainy Day Guide",
              href: "/sintra-rainy-day-guide",
              description: "Cafés and indoor food stops",
            },
          ]}
        />

      </div>
    </>
  );
}
