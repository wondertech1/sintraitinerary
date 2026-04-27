import type { Metadata } from "next";
import { comparisons, finalVerdict, vsComparisonFaqs } from "@/data/guides/long-tail/pena-vs-regaleira";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import { Crown, Sparkles, Trophy, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pena Palace vs Quinta da Regaleira (2026) — Which Should You Visit?",
  description:
    "Colourful hilltop spectacle or hidden tunnels and occult gardens — which Sintra icon should you choose? 10-category head-to-head with a clear winner for each travel type.",
  alternates: {
    canonical: "https://sintraitinerary.com/pena-palace-vs-regaleira",
  },
};

const winnerStyles = {
  pena: "bg-palacio-100 text-palacio-700 border-palacio-300",
  regaleira: "bg-musgo-100 text-musgo-700 border-musgo-300",
  tie: "bg-calcario-100 text-calcario-700 border-calcario-300",
};

const winnerLabels = {
  pena: "Pena wins",
  regaleira: "Regaleira wins",
  tie: "Tie",
};

export default function PenaVsRegaleiraPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(vsComparisonFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Pena Palace vs Regaleira", url: "/pena-palace-vs-regaleira" },
          ]),
        ]}
      />

      <GuideHero
        category="Palace Comparison"
        title="Pena Palace vs Regaleira"
        subtitle="Sintra's biggest decision: the colorful hilltop castle or the mysterious estate with underground tunnels? A head-to-head comparison across 10 categories."
        lastVerified="February 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-4 font-body text-base leading-relaxed text-granito/80">
            This is the question every Sintra visitor asks: Pena or Regaleira? If you have time for both, do both. But if you&apos;re choosing one — or deciding which to prioritize — here&apos;s a frank comparison across every category that matters.
          </p>
        </ScrollReveal>

        {/* Quick Score */}
        <ScrollReveal>
          <div className="mb-12 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 rounded-lg border-2 border-palacio-200 bg-palacio-50 p-4 text-center">
              <Crown className="mx-auto h-6 w-6 text-palacio-600" />
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-granito">Pena Palace</h3>
              <p className="mt-1 font-[family-name:var(--font-ui)] text-2xl font-bold text-palacio-700">
                {comparisons.filter(c => c.winner === "pena").length}
              </p>
              <p className="font-[family-name:var(--font-ui)] text-xs text-palacio-600">categories won</p>
            </div>
            <div className="flex items-center justify-center">
              <span className="font-[family-name:var(--font-display)] text-lg text-nevoa-400">vs</span>
            </div>
            <div className="flex-1 rounded-lg border-2 border-musgo-200 bg-musgo-50 p-4 text-center">
              <Sparkles className="mx-auto h-6 w-6 text-musgo-600" />
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-granito">Regaleira</h3>
              <p className="mt-1 font-[family-name:var(--font-ui)] text-2xl font-bold text-musgo-700">
                {comparisons.filter(c => c.winner === "regaleira").length}
              </p>
              <p className="font-[family-name:var(--font-ui)] text-xs text-musgo-600">categories won</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Comparison Cards */}
        <SectionHeading label="Head-to-Head" heading="10 Categories Compared" />

        <div className="mt-8 space-y-5">
          {comparisons.map((comp, i) => (
            <ScrollReveal key={comp.category} delay={i * 0.04}>
              <div className="overflow-hidden rounded-lg border border-calcario-200 bg-white">
                <div className="flex items-center justify-between border-b border-calcario-100 bg-calcario-50 px-5 py-3">
                  <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                    {comp.category}
                  </h3>
                  <span className={`flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-[family-name:var(--font-ui)] text-[10px] font-medium ${winnerStyles[comp.winner]}`}>
                    <Trophy className="h-3 w-3" />
                    {winnerLabels[comp.winner]}
                  </span>
                </div>

                <div className="grid gap-0 sm:grid-cols-2">
                  <div className="border-b sm:border-b-0 sm:border-r border-calcario-100 p-4">
                    <p className="mb-2 font-[family-name:var(--font-ui)] text-[10px] font-medium uppercase tracking-wider text-palacio-600">
                      Pena Palace
                    </p>
                    <p className="font-body text-xs leading-relaxed text-granito/70">
                      {comp.pena}
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="mb-2 font-[family-name:var(--font-ui)] text-[10px] font-medium uppercase tracking-wider text-musgo-600">
                      Quinta da Regaleira
                    </p>
                    <p className="font-body text-xs leading-relaxed text-granito/70">
                      {comp.regaleira}
                    </p>
                  </div>
                </div>

                <div className="border-t border-calcario-100 bg-nevoa-50 px-5 py-2.5">
                  <p className="font-body text-xs italic text-granito/60">
                    {comp.verdict}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        {/* Final Verdict */}
        <SectionHeading label="Final Verdict" heading="So, Which One?" />

        <ScrollReveal>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border-2 border-musgo-300 bg-musgo-50 p-5">
              <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito mb-2">
                If you can only visit one palace:
              </h4>
              <p className="font-body text-sm leading-relaxed text-granito/80">
                {finalVerdict.ifOnlyOne}
              </p>
            </div>

            <div className="rounded-lg border border-calcario-200 bg-white p-5">
              <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito mb-2">
                If you can visit both (recommended):
              </h4>
              <p className="font-body text-sm leading-relaxed text-granito/80">
                {finalVerdict.ifBoth}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-palacio-200 bg-palacio-50 p-4">
                <h4 className="font-[family-name:var(--font-display)] text-xs font-semibold text-palacio-700 mb-1">
                  Choose Pena if...
                </h4>
                <p className="font-body text-xs text-granito/70">{finalVerdict.peaWins}</p>
              </div>
              <div className="rounded-lg border border-musgo-200 bg-musgo-50 p-4">
                <h4 className="font-[family-name:var(--font-display)] text-xs font-semibold text-musgo-700 mb-1">
                  Choose Regaleira if...
                </h4>
                <p className="font-body text-xs text-granito/70">{finalVerdict.regaleiraWins}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="tip">
            <strong>The optimal order:</strong> Pena at 9am (grounds-only, €12) → bus to town → Regaleira at 10:30am (€20) → lunch → Moorish Castle afternoon. This covers Sintra&apos;s top 3 in one day for €44 total.
          </ProTip>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        <RelatedGuides
          links={[
            { label: "Pena Palace Guide", href: "/guides/pena-palace-guide", description: "Complete Pena Palace guide" },
            { label: "Regaleira Guide", href: "/guides/quinta-da-regaleira-guide", description: "Complete Regaleira guide" },
            { label: "Which Palaces to Visit", href: "/guides/which-sintra-palaces-to-visit", description: "All 5 palaces compared" },
            { label: "1-Day Itinerary", href: "/1-day-sintra-itinerary", description: "Fit both into one day" },
          ]}
        />

      </div>
    </>
  );
}
