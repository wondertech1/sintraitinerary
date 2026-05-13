import type { Metadata } from "next";
import {
  wellLevels,
  tunnelRoutes,
  visitStrategies,
  photographyTips,
  commonMistakes,
} from "@/data/guides/long-tail/initiation-well";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import {
  ArrowDown,
  Route,
  Clock,
  Camera,
  AlertTriangle,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Initiation Well at Quinta da Regaleira (2026) — Complete Guide to Sintra's Most Mysterious Attraction",
  description:
    "Everything about the Initiation Well: the 9 levels, underground tunnels, best times to visit, photography tips, and the Masonic symbolism. Don't miss the tunnel to the lake.",
  alternates: {
    canonical:
      "https://sintraitinerary.com/quinta-da-regaleira-initiation-well",
  },
};

const crowdBadge = (level: 1 | 2 | 3 | 4 | 5) => {
  const labels = ["Empty", "Quiet", "Moderate", "Busy", "Packed"];
  const colors = [
    "bg-musgo-100 text-musgo-700",
    "bg-musgo-100 text-musgo-700",
    "bg-palácio-100 text-palácio-700",
    "bg-ferrugem-100 text-ferrugem-700",
    "bg-ferrugem-100 text-ferrugem-700",
  ];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-ui text-[10px] font-medium ${colors[level - 1]}`}
    >
      <Users className="h-3 w-3" />
      {labels[level - 1]}
    </span>
  );
};

const difficultyBadge = (d: "easy" | "moderate" | "tricky") => {
  const map = {
    easy: "bg-musgo-100 text-musgo-700",
    moderate: "bg-palácio-100 text-palácio-700",
    tricky: "bg-ferrugem-100 text-ferrugem-700",
  };
  return (
    <span
      className={`rounded-full px-2 py-0.5 font-ui text-[10px] font-medium capitalize ${map[d]}`}
    >
      {d}
    </span>
  );
};

export default function InitiationWellPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            {
              name: "Initiation Well Guide",
              url: "/quinta-da-regaleira-initiation-well",
            },
          ]),
        ]}
      />

      <GuideHero
        category="Deep Dive"
        title="The Initiation Well at Quinta da Regaleira"
        subtitle="27 meters underground, 9 levels of Masonic symbolism, and a secret tunnel to a lake. Sintra's most photographed attraction, properly explained."
        lastVerified="February 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            We at Sintra Itinerary descended the Initiation Well three times across different visits to Sintra, and each time the experience felt completely different — morning light filtering down the spiral, midday crowds queuing for photos, a foggy winter afternoon with the place entirely to ourselves. Here is everything we know about making the most of Sintra&apos;s most extraordinary attraction.
          </p>
        </ScrollReveal>

        {/* What Is the Initiation Well */}
        <SectionHeading
          label="History"
          heading="What Is the Initiation Well?"
        />

        <ScrollReveal>
          <div className="mt-8 space-y-4 font-body text-sm leading-relaxed text-granito/80">
            <p>
              The Initiation Well (<em>Poço Iniciático</em>) was built in the
              late 19th century by António Augusto Carvalho Monteiro, a wealthy
              Portuguese entomologist, bibliophile, and Freemason. He purchased
              the Regaleira estate in 1892 and commissioned Italian
              architect-set designer Luigi Manini to transform it into a
              landscape of esoteric symbolism.
            </p>
            <p>
              The well was never used for water. It was designed as a ceremonial
              space — a symbolic descent from the world of light into the
              underground realm of hidden knowledge. The 9 levels mirror
              Dante&apos;s 9 circles of the Inferno and the degrees of Masonic
              initiation. The compass rose at the bottom, overlaying a
              Templar cross on an eight-pointed star, marks the endpoint of the
              symbolic journey.
            </p>
            <p>
              Today it&apos;s Sintra&apos;s most photographed spot and
              Portugal&apos;s most Instagrammed attraction. But most visitors
              rush through it in 10 minutes and miss the tunnels entirely.
              Don&apos;t be most visitors. We spent a full hour on our first
              visit and still felt like we rushed the tunnel section — take
              your time with this one.
            </p>
          </div>
        </ScrollReveal>

        {/* Descending the Nine Levels */}
        <SectionHeading
          label="The Descent"
          heading="Descending the Nine Levels"
        />

        <div className="mt-8 space-y-3">
          {wellLevels.map((level, i) => (
            <ScrollReveal key={level.level} delay={i * 0.04}>
              <div className="relative rounded-lg border border-calcário-200 bg-white p-5 pl-16">
                <div className="absolute left-4 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-névoa-100 font-ui text-sm font-bold text-névoa-700">
                  {level.level}
                </div>
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="font-display text-sm font-semibold text-granito">
                    Level {level.level}
                  </h3>
                  <span className="shrink-0 font-ui text-[10px] font-medium text-granito/40">
                    {level.depth}
                  </span>
                </div>
                <p className="font-body text-sm leading-relaxed text-granito/70">
                  {level.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-6 flex justify-center">
            <ArrowDown className="h-6 w-6 text-névoa-300 animate-bounce" />
          </div>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        {/* Underground Tunnels */}
        <SectionHeading
          label="Tunnels"
          heading="The Underground Tunnels"
        />

        <ScrollReveal>
          <p className="mt-4 font-body text-sm text-granito/70 leading-relaxed">
            At the bottom of the well, tunnel entrances lead to different parts
            of the garden. These passages are the best part of the experience —
            and the part most visitors miss entirely.
          </p>
        </ScrollReveal>

        <div className="mt-8 space-y-4">
          {tunnelRoutes.map((tunnel, i) => (
            <ScrollReveal key={tunnel.name} delay={i * 0.06}>
              <div className="rounded-lg border border-calcário-200 bg-white p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <Route className="h-4 w-4 text-névoa-500" />
                    <h3 className="font-display text-sm font-semibold text-granito">
                      {tunnel.name}
                    </h3>
                  </div>
                  {difficultyBadge(tunnel.difficulty)}
                </div>
                <p className="font-ui text-[11px] text-granito/50 mb-2">
                  {tunnel.from} → {tunnel.to}
                </p>
                <p className="font-body text-sm leading-relaxed text-granito/70">
                  {tunnel.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        {/* When to Visit */}
        <SectionHeading label="Timing" heading="When to Visit" />

        <div className="mt-8 space-y-4">
          {visitStrategies.map((strat, i) => (
            <ScrollReveal key={strat.label} delay={i * 0.06}>
              <div
                className={`rounded-lg border p-5 ${
                  strat.label.includes("Best") || strat.label.includes("Recommended")
                    ? "border-musgo-300 bg-musgo-50"
                    : strat.label.includes("Worst")
                      ? "border-ferrugem-200 bg-ferrugem-50"
                      : "border-calcário-200 bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-névoa-500" />
                    <h3 className="font-display text-sm font-semibold text-granito">
                      {strat.time} — {strat.label}
                    </h3>
                  </div>
                  {crowdBadge(strat.crowdLevel)}
                </div>
                <p className="font-body text-sm leading-relaxed text-granito/70">
                  {strat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Photography Tips */}
        <SectionHeading label="Photography" heading="Shooting the Well" />

        <ScrollReveal>
          <div className="mt-8 rounded-lg border border-calcário-200 bg-white p-5">
            <div className="flex items-center gap-2 mb-4">
              <Camera className="h-5 w-5 text-névoa-500" />
              <p className="font-ui text-xs font-medium uppercase tracking-wider text-granito/50">
                Photography Tips
              </p>
            </div>
            <ul className="space-y-3">
              {photographyTips.map((tip, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 font-body text-sm text-granito/80"
                >
                  <span className="mt-0.5 shrink-0 font-ui text-xs font-bold text-névoa-400">
                    {i + 1}.
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Common Mistakes */}
        <SectionHeading label="Avoid" heading="Common Mistakes" />

        <ScrollReveal>
          <ProTip variant="warning">
            <strong>The #1 mistake:</strong> Walking back up the stairs after
            reaching the bottom. At level 9, look for the tunnel entrance — it
            leads to a lake grotto with stepping stones. This is the entire
            point of the descent.
          </ProTip>
        </ScrollReveal>

        <div className="mt-6 space-y-3">
          {commonMistakes.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="rounded-lg border border-ferrugem-200 bg-ferrugem-50 p-4">
                <div className="flex items-start gap-2 mb-1">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-ferrugem-500" />
                  <h3 className="font-display text-sm font-semibold text-granito">
                    {item.mistake}
                  </h3>
                </div>
                <p className="ml-6 font-body text-sm text-granito/70">
                  <span className="font-ui text-xs font-medium text-musgo-600">
                    Instead:{" "}
                  </span>
                  {item.fix}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        <RelatedGuides
          links={[
            {
              label: "Quinta da Regaleira Guide",
              href: "/guides/quinta-da-regaleira-guide",
              description: "Full palace & garden visit guide",
            },
            {
              label: "1-Day Sintra Itinerary",
              href: "/1-day-sintra-itinerary",
              description: "Regaleira built into the route",
            },
            {
              label: "Photography Guide",
              href: "/sintra-photography-guide",
              description: "Best shots across all of Sintra",
            },
            {
              label: "Best Time to Visit",
              href: "/best-time-to-visit-sintra#winter",
              description: "The well is Gothic in fog",
            },
          ]}
        />

      </div>
    </>
  );
}
