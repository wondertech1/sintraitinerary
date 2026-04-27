import type { Metadata } from "next";
import { romanticSpots, couplesFaqs } from "@/data/guides/long-tail/couples";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import {
  Heart,
  Landmark,
  UtensilsCrossed,
  Eye,
  Sparkles,
  Bed,
  Clock,
  Coins,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sintra for Couples (2026) — Romantic Palaces, Sunsets & Date Nights",
  description:
    "The romantic guide to Sintra: 8 best spots for couples including sunset viewpoints, intimate restaurants, palace gardens, and where to stay for a special night.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-for-couples",
  },
};

const typeIcons: Record<string, typeof Heart> = {
  palace: Landmark,
  restaurant: UtensilsCrossed,
  viewpoint: Eye,
  experience: Sparkles,
  stay: Bed,
};

const typeColors: Record<string, string> = {
  palace: "bg-palacio-100 text-palacio-700",
  restaurant: "bg-ferrugem-100 text-ferrugem-700",
  viewpoint: "bg-nevoa-100 text-nevoa-700",
  experience: "bg-musgo-100 text-musgo-700",
  stay: "bg-calcario-200 text-calcario-700",
};

export default function CouplesPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(couplesFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sintra for Couples", url: "/sintra-for-couples" },
          ]),
        ]}
      />

      <GuideHero
        category="Travel Style"
        title="Sintra for Couples"
        subtitle="Sunset terraces, secret gardens, candlelit dinners in 18th-century hotels. Sintra is one of Europe's most romantic day trips — if you know where to go."
        lastVerified="January 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            Sintra was built for romance. Portuguese royals chose this misty hillside for their summer palaces precisely because of its otherworldly beauty — forest-draped mountains, fog-wreathed towers, gardens that feel enchanted. The challenge is that 10,000 other visitors per day in summer can kill the mood. This guide focuses on the quieter, more intimate side of Sintra: the spots where you can actually be alone together.
          </p>
        </ScrollReveal>

        <SectionHeading label="8 Romantic Spots" heading="Where to Go Together" />

        <div className="mt-8 space-y-5">
          {romanticSpots.map((spot, i) => {
            const Icon = typeIcons[spot.type];
            return (
              <ScrollReveal key={spot.name} delay={i * 0.05}>
                <div className="rounded-lg border border-calcario-200 bg-white p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-ferrugem-400" />
                      <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-granito">
                        {spot.name}
                      </h3>
                    </div>
                    <span className={`flex items-center gap-1 rounded-full px-2.5 py-0.5 font-[family-name:var(--font-ui)] text-[10px] font-medium ${typeColors[spot.type]}`}>
                      <Icon className="h-3 w-3" />
                      {spot.type}
                    </span>
                  </div>

                  <p className="font-body text-sm leading-relaxed text-granito/80 mb-3">
                    {spot.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-3">
                    <span className="flex items-center gap-1 font-[family-name:var(--font-ui)] text-[11px] text-nevoa-600">
                      <Clock className="h-3 w-3" />
                      {spot.bestTime}
                    </span>
                    <span className="flex items-center gap-1 font-[family-name:var(--font-ui)] text-[11px] text-nevoa-600">
                      <Coins className="h-3 w-3" />
                      {spot.cost}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 rounded bg-ferrugem-50 px-3 py-2">
                    <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ferrugem-400" />
                    <p className="font-body text-xs text-ferrugem-700">{spot.tip}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ContourDivider className="my-12" />

        {/* Romantic Day Plan */}
        <SectionHeading label="Sample Day" heading="A Romantic Day in Sintra" />

        <ScrollReveal>
          <div className="mt-8 relative ml-4 border-l-2 border-ferrugem-200 pl-6 space-y-0">
            {[
              { time: "9:30am", activity: "Train from Lisbon, breakfast at Piriquita" },
              { time: "10:30am", activity: "Monserrate Palace & gardens (2 hours, uncrowded)" },
              { time: "1:00pm", activity: "Lunch at Tascantiga (intimate, traditional)" },
              { time: "2:30pm", activity: "Quinta da Regaleira gardens (explore the tunnels together)" },
              { time: "4:30pm", activity: "Stroll to Seteais Palace terrace for wine with a view" },
              { time: "6:00pm", activity: "Villa Sassetti sunset walk" },
              { time: "7:30pm", activity: "Dinner at Incomum (book ahead)" },
              { time: "9:30pm", activity: "Drinks at Lawrence's Hotel bar, then late train to Lisbon" },
            ].map((stop, i) => (
              <div key={stop.time} className="relative pb-5">
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-ferrugem-300 bg-white" />
                <div className="flex items-start gap-3">
                  <span className="shrink-0 font-[family-name:var(--font-ui)] text-xs font-bold text-ferrugem-500 min-w-[52px]">
                    {stop.time}
                  </span>
                  <p className="font-body text-sm text-granito/80">{stop.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="palace-secret">
            <strong>The overnight upgrade:</strong> If you stay one night in Sintra, the romance level multiplies. The town after 6pm is deserted — cobblestone streets lit by old lamps, the National Palace chimneys glowing against the evening sky. Dinner without crowds, a walk through misty streets, drinks at a 260-year-old hotel. It&apos;s a different place.
          </ProTip>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        <RelatedGuides
          links={[
            { label: "Monserrate Guide", href: "/guides/monserrate-palace-guide", description: "The most romantic palace" },
            { label: "Where to Eat", href: "/where-to-eat-in-sintra", description: "Best dinner spots" },
            { label: "Where to Stay", href: "/where-to-stay-in-sintra", description: "Romantic overnight options" },
            { label: "Photography Guide", href: "/sintra-photography-guide", description: "Capture the moments" },
          ]}
        />

      </div>
    </>
  );
}
