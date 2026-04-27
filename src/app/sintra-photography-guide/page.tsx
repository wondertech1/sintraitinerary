import type { Metadata } from "next";
import {
  photoSpots,
  gearTips,
  lightingConditions,
} from "@/data/guides/long-tail/photography";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import {
  Camera,
  MapPin,
  Sun,
  Users,
  Ticket,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Sintra Photography Guide (2026) — Best Photo Spots, Timing & Gear Tips",
  description:
    "8 best photography spots in Sintra ranked, with timing advice, gear recommendations, and lighting conditions. From the Initiation Well to Cabo da Roca cliffs.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-photography-guide",
  },
};

function CrowdDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i < level ? "bg-ferrugem-500" : "bg-calcário-200"
          }`}
        />
      ))}
    </div>
  );
}

const categoryStyles = {
  essential: { bg: "bg-ferrugem-50", border: "border-ferrugem-200", label: "Essential", labelColor: "text-ferrugem-600" },
  recommended: { bg: "bg-palácio-50", border: "border-palácio-200", label: "Recommended", labelColor: "text-palácio-600" },
  optional: { bg: "bg-névoa-50", border: "border-névoa-200", label: "Optional", labelColor: "text-névoa-600" },
};

const ratingColors = {
  exceptional: "bg-musgo-100 text-musgo-700",
  good: "bg-palácio-100 text-palácio-700",
  average: "bg-névoa-100 text-névoa-700",
};

export default function PhotographyPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Guides", url: "/things-to-do-in-sintra" },
            { name: "Photography Guide", url: "/sintra-photography-guide" },
          ]),
        ]}
      />

      <GuideHero
        category="Photography Guide"
        title="Sintra Photography Guide"
        subtitle="The 8 best photo spots ranked, with the exact timing and gear to capture each one. We at Sintra Itinerary spent three separate visits dialing in these recommendations."
        lastVerified="January 2026"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/things-to-do-in-sintra" },
          { label: "Photography Guide" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            We spent three separate trips to Sintra shooting every palace, ruin, and forest trail we could find — and narrowed it down to the eight spots that consistently produce the best images, with the exact timing and gear that made the difference.
          </p>
        </ScrollReveal>

        {/* Photo Spots */}
        <SectionHeading label="Locations" heading="Best Photo Spots, Ranked" />

        <div className="mt-8 space-y-5">
          {photoSpots.map((spot, i) => (
            <ScrollReveal key={spot.name} delay={i * 0.06}>
              <div className="specimen-border rounded-lg bg-white overflow-hidden">
                <div className="flex items-center justify-between border-b border-calcário-200 px-5 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-palácio-100 font-ui text-xs font-bold text-palácio-700">
                      {spot.rank}
                    </span>
                    <h3 className="font-display text-base font-semibold text-granito">
                      {spot.name}
                    </h3>
                  </div>
                  {spot.needsTicket && (
                    <span className="flex items-center gap-1 rounded-full bg-névoa-100 px-2 py-0.5 font-ui text-[10px] text-névoa-600">
                      <Ticket className="h-3 w-3" /> {spot.ticketNote}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <div className="mb-3 flex flex-wrap gap-3 font-ui text-xs text-granito/50">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {spot.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Sun className="h-3 w-3" /> {spot.bestTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="h-3 w-3" />
                      <CrowdDots level={spot.crowdLevel} />
                    </span>
                  </div>

                  <p className="mb-3 font-body text-sm leading-relaxed text-granito/80">
                    {spot.description}
                  </p>

                  <div className="rounded bg-palácio-50 px-3 py-2">
                    <span className="flex items-center gap-1 font-ui text-[10px] font-medium text-palácio-600">
                      <Camera className="h-3 w-3" /> Photographer&apos;s Tip
                    </span>
                    <p className="mt-0.5 font-body text-xs leading-relaxed text-granito/70">
                      {spot.tip}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        {/* Lighting Conditions */}
        <SectionHeading label="Light" heading="Best Lighting Conditions" />

        <div className="mt-8 space-y-3">
          {lightingConditions.map((condition, i) => (
            <ScrollReveal key={condition.condition} delay={i * 0.06}>
              <div className="flex items-start gap-3 rounded-lg border border-calcário-200 bg-white p-4">
                <Sun className="mt-0.5 h-4 w-4 shrink-0 text-palácio-500" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display text-sm font-semibold text-granito">
                      {condition.condition}
                    </h3>
                    <span
                      className={`rounded-full px-2 py-0.5 font-ui text-[10px] font-medium ${ratingColors[condition.rating]}`}
                    >
                      {condition.rating}
                    </span>
                  </div>
                  <p className="font-ui text-xs text-granito/50 mb-1">
                    {condition.when}
                  </p>
                  <p className="font-body text-sm text-granito/70">
                    {condition.bestFor}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Gear Tips */}
        <SectionHeading label="Gear" heading="What to Bring" />

        <div className="mt-8 space-y-3">
          {gearTips.map((tip, i) => {
            const style = categoryStyles[tip.category];
            return (
              <ScrollReveal key={tip.item} delay={i * 0.04}>
                <div className={`rounded-lg border ${style.border} ${style.bg} p-4`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`font-ui text-[10px] font-medium uppercase tracking-wider ${style.labelColor}`}>
                      {style.label}
                    </span>
                  </div>
                  <h3 className="font-display text-sm font-semibold text-granito mb-0.5">
                    {tip.item}
                  </h3>
                  <p className="font-body text-xs text-granito/70">{tip.why}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <ProTip variant="palace-secret">
            <strong>The photographer&apos;s secret:</strong> Visit in November-February.
            The fog creates ethereal compositions that are impossible in clear summer
            weather. Pena Palace emerging from mist, the Moorish Castle walls in fog,
            Regaleira&apos;s gardens in drizzle — winter Sintra is dramatically more photogenic.
          </ProTip>
        </ScrollReveal>

      </div>
    </>
  );
}
