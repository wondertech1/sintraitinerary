import type { Metadata } from "next";
import {
  restaurants,
  localDishes,
  picnicSpots,
  restaurantsFaqs,
} from "@/data/guides/practical/restaurants";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQSection from "@/components/shared/FAQSection";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import RestaurantCard from "@/components/guides/RestaurantCard";
import { UtensilsCrossed, TreePine, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Where to Eat in Sintra (2026) — Best Restaurants, Pastries & Local Dishes",
  description:
    "Honest restaurant recommendations for Sintra including the best travesseiros, queijadas, and where to eat lunch between palaces. Tourist traps flagged.",
  alternates: {
    canonical: "https://sintraitinerary.com/where-to-eat-in-sintra",
  },
};

export default function RestaurantsPage() {
  const townCenterRestaurants = restaurants.filter(
    (r) => r.area === "town-center"
  );

  return (
    <>
      <JsonLd
        data={[
          faqSchema(restaurantsFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Where to Eat in Sintra", url: "/where-to-eat-in-sintra" },
          ]),
        ]}
      />

      <GuideHero
        category="Food Guide"
        title="Where to Eat in Sintra"
        subtitle="The good, the bad, and the tourist traps — honest restaurant picks with the must-try local dishes."
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
              <strong>Tascantiga</strong> for the best food,{" "}
              <strong>Café Saudade</strong> for pastries,{" "}
              <strong>Romaria de Baco</strong> for honest traditional lunch. Avoid{" "}
              <strong>Café Paris</strong> (overpriced, mediocre). Must-try:{" "}
              <strong>travesseiros</strong> (almond puffs) and{" "}
              <strong>queijadas</strong> (cheese tarts).
            </p>
          </div>
        </ScrollReveal>

        {/* Must-Try Dishes */}
        <SectionHeading label="Local Dishes" heading="What You Must Eat in Sintra" />

        <div className="mt-8 space-y-4">
          {localDishes.map((dish, i) => (
            <ScrollReveal key={dish.name} delay={i * 0.06}>
              <div className="specimen-border rounded-lg bg-white p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-base font-semibold text-granito">
                    {dish.name}
                    {dish.isSweet && (
                      <span className="ml-2 rounded-full bg-palácio-100 px-2 py-0.5 font-ui text-[10px] font-medium text-palácio-700">
                        Sweet
                      </span>
                    )}
                  </h3>
                  <span className="shrink-0 font-ui text-sm font-medium text-granito/60">
                    {dish.price}
                  </span>
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

        <ScrollReveal>
          <ProTip variant="tip">
            <strong>Pro move:</strong> Buy travesseiros from Piriquita to-go (€1.80 each)
            and eat them while walking through the old town. They&apos;re best warm. Skip
            Piriquita&apos;s cramped seating area — the queijadas travel well too.
          </ProTip>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        {/* Restaurants */}
        <SectionHeading
          label="Restaurants"
          heading="Where to Eat — Honest Picks"
        />

        <div className="mt-8 space-y-4">
          {townCenterRestaurants.map((restaurant, i) => (
            <ScrollReveal key={restaurant.name} delay={i * 0.05}>
              <RestaurantCard restaurant={restaurant} />
            </ScrollReveal>
          ))}
        </div>

        {/* Picnic Spots */}
        <SectionHeading label="Picnic" heading="Best Picnic Spots" />

        <div className="mt-8 space-y-3">
          {picnicSpots.map((spot, i) => (
            <ScrollReveal key={spot.name} delay={i * 0.06}>
              <div className="rounded-lg border border-calcário-200 bg-white p-4">
                <div className="flex items-start gap-3">
                  <TreePine className="mt-0.5 h-4 w-4 shrink-0 text-musgo-500" />
                  <div>
                    <h3 className="font-display text-sm font-semibold text-granito">
                      {spot.name}
                      <span className="ml-2 font-body text-xs font-normal text-granito/50">
                        Near {spot.nearestPalace}
                      </span>
                    </h3>
                    <p className="mt-1 font-body text-sm text-granito/70">
                      {spot.description}
                    </p>
                    {spot.hasFacilities && (
                      <p className="mt-1 flex items-center gap-1 font-ui text-xs text-musgo-600">
                        <CheckCircle className="h-3 w-3" /> Has bathrooms & seating
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <ProTip variant="money-saver">
            <strong>Budget lunch strategy:</strong> Buy supplies from Mercado da
            Vila (town market) — bread, cheese, fruit, water — and picnic in
            Parque da Liberdade. We assembled a picnic with local Serra cheese, fresh bread, and peaches for €7.50 for two people and ate it on a shaded bench overlooking the gardens.
          </ProTip>
        </ScrollReveal>

        <RelatedGuides links={[
          { label: "Sintra on a Budget", href: "/sintra-on-a-budget", description: "Budget food options and picnic tips" },
          { label: "Sintra with Kids", href: "/sintra-with-kids", description: "Kid-friendly restaurant picks" },
          { label: "1-Day Itinerary", href: "/1-day-sintra-itinerary", description: "Lunch stops built into the route" },
          { label: "Sintra vs Cascais", href: "/sintra-vs-cascais", description: "Comparing food scenes" },
        ]} />

        <FAQSection faqs={restaurantsFaqs} />
      </div>
    </>
  );
}
