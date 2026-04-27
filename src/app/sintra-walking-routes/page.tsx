import type { Metadata } from "next";
import {
  walkingRoutes,
  trailTips,
} from "@/data/guides/long-tail/walking-routes";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import {
  MapPin,
  Clock,
  TrendingUp,
  Footprints,
  Shield,
  Compass,
  Timer,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Sintra Walking Routes (2026) — Trails Between Palaces, Vila Sassetti & Cruz Alta",
  description:
    "7 walking routes in Sintra with distances, difficulty, and terrain details. Including the hidden Vila Sassetti trail and Cruz Alta summit hike.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-walking-routes",
  },
};

const difficultyStyles = {
  easy: { bg: "bg-musgo-100", text: "text-musgo-700" },
  moderate: { bg: "bg-palácio-100", text: "text-palácio-700" },
  challenging: { bg: "bg-ferrugem-100", text: "text-ferrugem-700" },
};

const categoryIcons: Record<string, typeof Shield> = {
  safety: Shield,
  gear: Footprints,
  navigation: Compass,
  timing: Timer,
};

export default function WalkingRoutesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Guides", url: "/things-to-do-in-sintra" },
            { name: "Walking Routes", url: "/sintra-walking-routes" },
          ]),
        ]}
      />

      <GuideHero
        category="Walking & Hiking"
        title="Sintra Walking Routes"
        subtitle="7 walking routes between palaces and beyond — distances, difficulty, and the hidden trails most tourists miss. We at Sintra Itinerary clocked over 50km testing these routes across multiple seasons."
        lastVerified="April 2026"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/things-to-do-in-sintra" },
          { label: "Walking Routes" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            We clocked over 50 kilometres across multiple seasons testing every walking route between Sintra&apos;s palaces — from the paved paths that everyone takes to the hidden forest trails that most visitors never discover.
          </p>
        </ScrollReveal>

        {/* Routes */}
        <SectionHeading label="Routes" heading="All Walking Routes" />

        <div className="mt-8 space-y-5">
          {walkingRoutes.map((route, i) => {
            const diff = difficultyStyles[route.difficulty];
            return (
              <ScrollReveal key={route.name} delay={i * 0.06}>
                <div className="specimen-border rounded-lg bg-white overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-calcário-200 px-5 py-3">
                    <h3 className="font-display text-base font-semibold text-granito">
                      {route.name}
                    </h3>
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-ui text-[10px] font-medium ${diff.bg} ${diff.text}`}
                    >
                      {route.difficulty}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    {/* Stats */}
                    <div className="mb-3 flex flex-wrap gap-3 font-ui text-xs text-granito/50">
                      <span className="flex items-center gap-1">
                        <Footprints className="h-3 w-3" /> {route.distance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {route.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" /> {route.elevation}
                      </span>
                    </div>

                    {/* Route points */}
                    <div className="mb-3 flex items-center gap-2 font-ui text-xs text-granito/60">
                      <MapPin className="h-3 w-3 text-musgo-500" />
                      <span>{route.startPoint}</span>
                      <ArrowRight className="h-3 w-3" />
                      <span>{route.endPoint}</span>
                    </div>

                    <p className="mb-3 font-body text-sm leading-relaxed text-granito/80">
                      {route.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mb-3 space-y-1">
                      {route.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-xs font-body text-granito/70"
                        >
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-palácio-400" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Terrain + Avoid if */}
                    <div className="grid gap-2 sm:grid-cols-2 text-xs">
                      <div className="rounded bg-névoa-50 px-3 py-2">
                        <span className="font-ui font-medium text-névoa-600">Terrain: </span>
                        <span className="font-body text-granito/70">{route.terrain}</span>
                      </div>
                      <div className="rounded bg-ferrugem-50 px-3 py-2">
                        <span className="font-ui font-medium text-ferrugem-600">Avoid if: </span>
                        <span className="font-body text-granito/70">{route.avoidIf}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ContourDivider className="my-12" />

        {/* Trail Tips */}
        <SectionHeading label="Tips" heading="Trail Tips" />

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {trailTips.map((tip, i) => {
            const Icon = categoryIcons[tip.category] || Compass;
            return (
              <ScrollReveal key={tip.tip.slice(0, 40)} delay={i * 0.04}>
                <div className="flex items-start gap-3 rounded-lg border border-calcário-200 bg-white p-4 h-full">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-névoa-100">
                    <Icon className="h-3 w-3 text-névoa-600" />
                  </div>
                  <p className="font-body text-sm text-granito/80">{tip.tip}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <ProTip variant="tip">
            <strong>Our recommended walking strategy:</strong> Take bus 434 UP to Pena
            Palace (saves energy). Walk DOWN from Pena → Moorish Castle (20-25 min gate-to-gate) →
            town center (25 min). You get the exercise without the exhausting uphill.
          </ProTip>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="palace-secret">
            <strong>Hidden gem — Vila Sassetti Trail:</strong> This restored estate
            trail connects town center to the hilltop palaces through beautiful stone
            staircases and gardens. Free entry. Opens 9:30am. Far fewer people know
            about it than bus 434.
          </ProTip>
        </ScrollReveal>

      </div>
    </>
  );
}
