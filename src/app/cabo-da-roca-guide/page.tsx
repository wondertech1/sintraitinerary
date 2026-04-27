import type { Metadata } from "next";
import {
  caboHighlights,
  transportOptions,
  practicalInfo,
} from "@/data/guides/long-tail/cabo-da-roca";
import JsonLd from "@/components/shared/JsonLd";
import { touristAttractionSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import {
  Clock,
  AlertTriangle,
  Train,
  Car,
  Bus,
  Check,
  MapPin,
  Wind,
  Wifi,
  Sunrise,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Cabo da Roca Guide (2026) — Europe's Westernmost Point from Sintra",
  description:
    "Standing at Europe's westernmost point, the Atlantic stretches 5,000km to the horizon. Transport from Sintra, the Praia da Ursa hike, sunset timing, and practical tips.",
  alternates: {
    canonical: "https://sintraitinerary.com/cabo-da-roca-guide",
  },
};

const difficultyColors = {
  easy: "bg-musgo-100 text-musgo-700",
  moderate: "bg-palácio-100 text-palácio-700",
  hard: "bg-ferrugem-100 text-ferrugem-700",
};

const transportIcons: Record<string, typeof Train> = {
  "Bus 403 from Sintra": Bus,
  "Uber/Taxi from Sintra": Car,
  "Bus 403 from Cascais": Bus,
  "Rental car / self-drive": Car,
};

export default function CaboDaRocaPage() {
  return (
    <>
      <JsonLd
        data={[
          touristAttractionSchema({
            name: "Cabo da Roca",
            description:
              "The westernmost point of mainland Europe — dramatic 140m cliffs overlooking the Atlantic Ocean.",
            url: "/cabo-da-roca-guide",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Guides", url: "/things-to-do-in-sintra" },
            { name: "Cabo da Roca", url: "/cabo-da-roca-guide" },
          ]),
        ]}
      />

      <GuideHero
        category="Day Trip Extension"
        title="Cabo da Roca — Europe's Westernmost Point"
        subtitle="Dramatic Atlantic cliffs, a wild beach descent, and standing at the edge of the continent. We came here expecting a quick photo op and stayed for ninety unforgettable minutes."
        lastVerified="April 2026"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/things-to-do-in-sintra" },
          { label: "Cabo da Roca" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            We at Sintra Itinerary came to Cabo da Roca expecting a quick photo stop and ended up staying ninety minutes, hypnotised by the Atlantic crashing against 140-metre cliffs at the edge of Europe. Here is everything we learned about getting there, what to do when you arrive, and the one overpriced souvenir to skip.
          </p>
        </ScrollReveal>

        {/* What to See */}
        <SectionHeading label="Highlights" heading="What to See & Do" />

        <div className="mt-8 space-y-4">
          {caboHighlights.map((highlight, i) => (
            <ScrollReveal key={highlight.title} delay={i * 0.06}>
              <div className="specimen-border rounded-lg bg-white p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-base font-semibold text-granito">
                    {highlight.title}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-ui text-[10px] text-granito/50">
                      <Clock className="mr-0.5 inline h-3 w-3" />
                      {highlight.duration}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 font-ui text-[10px] font-medium ${difficultyColors[highlight.difficulty]}`}
                    >
                      {highlight.difficulty}
                    </span>
                  </div>
                </div>
                <p className="font-body text-sm leading-relaxed text-granito/80">
                  {highlight.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        {/* Getting There */}
        <SectionHeading label="Transport" heading="How to Get There" />

        <div className="mt-8 space-y-4">
          {transportOptions.map((option, i) => {
            const Icon = transportIcons[option.method] || Bus;
            return (
              <ScrollReveal key={option.method} delay={i * 0.06}>
                <div
                  className={`rounded-lg border p-5 ${
                    option.recommended
                      ? "border-musgo-200 bg-musgo-50"
                      : "border-calcário-200 bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-névoa-100">
                      <Icon className="h-4 w-4 text-névoa-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-sm font-semibold text-granito">
                          {option.method}
                        </h3>
                        {option.recommended && (
                          <span className="rounded-full bg-musgo-200 px-2 py-0.5 font-ui text-[10px] font-medium text-musgo-700">
                            Recommended
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex flex-wrap gap-3 font-ui text-xs text-granito/50">
                        <span>{option.cost}</span>
                        <span>{option.duration}</span>
                        <span>{option.frequency}</span>
                      </div>
                    </div>
                  </div>
                  <p className="ml-11 font-body text-sm text-granito/70">
                    {option.notes}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Practical Info */}
        <SectionHeading label="Know Before You Go" heading="Practical Information" />

        <div className="mt-8 space-y-3">
          {[
            { icon: Clock, label: "Hours", value: practicalInfo.openingHours },
            { icon: Check, label: "Entry", value: practicalInfo.entranceFee },
            { icon: MapPin, label: "Facilities", value: practicalInfo.facilities },
            { icon: Wind, label: "Weather", value: practicalInfo.weatherWarning },
            { icon: Wifi, label: "Signal", value: practicalInfo.mobileSignal },
            { icon: Sunrise, label: "Best Time", value: practicalInfo.bestTime },
          ].map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.04}>
              <div className="flex items-start gap-3 rounded-lg border border-calcário-200 bg-white p-4">
                <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-névoa-500" />
                <div>
                  <span className="font-ui text-xs font-medium text-granito/50">
                    {item.label}
                  </span>
                  <p className="font-body text-sm text-granito/80">
                    {item.value}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <ProTip variant="warning">
            <strong>Certificate scam:</strong> The tourist office sells a &ldquo;certificate&rdquo;
            for €11 proving you visited the westernmost point. It&apos;s a generic print.
            Take a photo with the stone monument instead — it&apos;s free and more meaningful.
          </ProTip>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="tip">
            <strong>Best loop route:</strong> Sintra palaces (morning) → Bus 403 to
            Cabo da Roca (afternoon/sunset) → Bus 403 to Cascais (evening) → Train
            from Cascais to Lisbon (40 min). A perfect full-day circuit.
          </ProTip>
        </ScrollReveal>

      </div>
    </>
  );
}
