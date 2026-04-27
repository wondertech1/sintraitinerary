import type { Metadata } from "next";
import {
  comparisonCategories,
  scenarios,
  vsCascaisFaqs,
} from "@/data/guides/authority/vs-cascais";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQSection from "@/components/shared/FAQSection";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import { Trophy, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sintra vs Cascais (2026) — Which Lisbon Day Trip Should You Pick?",
  description:
    "Palaces and forest mystery vs Atlantic beaches and seafood — which Lisbon day trip wins? 10 categories scored with scenario-based picks and a do-both loop route.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-vs-cascais",
  },
};

const winnerStyles = {
  sintra: { bg: "bg-musgo-100", text: "text-musgo-700", label: "Sintra" },
  cascais: { bg: "bg-névoa-100", text: "text-névoa-700", label: "Cascais" },
  tie: { bg: "bg-calcário-100", text: "text-granito/60", label: "Tie" },
};

const recStyles = {
  sintra: { bg: "bg-musgo-50", border: "border-musgo-200", badge: "bg-musgo-100 text-musgo-700" },
  cascais: { bg: "bg-névoa-50", border: "border-névoa-200", badge: "bg-névoa-100 text-névoa-700" },
  both: { bg: "bg-palácio-50", border: "border-palácio-200", badge: "bg-palácio-100 text-palácio-700" },
};

export default function VsCascaisPage() {
  const sintraWins = comparisonCategories.filter((c) => c.winner === "sintra").length;
  const cascaisWins = comparisonCategories.filter((c) => c.winner === "cascais").length;
  const ties = comparisonCategories.filter((c) => c.winner === "tie").length;

  return (
    <>
      <JsonLd
        data={[
          faqSchema(vsCascaisFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sintra vs Cascais", url: "/sintra-vs-cascais" },
          ]),
        ]}
      />

      <GuideHero
        category="Comparison"
        title="Sintra vs Cascais"
        subtitle="Palaces and fog or beaches and seafood? We at Sintra Itinerary have done both day trips back-to-back more than once — here's the unfiltered comparison to help you choose."
        lastVerified="March 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        {/* Scoreboard */}
        <ScrollReveal>
          <div className="mb-12 rounded-lg border border-calcário-200 bg-white p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-display text-3xl font-bold text-musgo-600">{sintraWins}</p>
                <p className="font-ui text-xs text-granito/50">Sintra wins</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-granito/30">{ties}</p>
                <p className="font-ui text-xs text-granito/50">Ties</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-névoa-600">{cascaisWins}</p>
                <p className="font-ui text-xs text-granito/50">Cascais wins</p>
              </div>
            </div>
            <p className="mt-4 text-center font-body text-sm text-granito/70">
              Sintra edges out Cascais on unique experiences. Cascais wins on ease and beaches.
              Both are worth doing if you have time.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Comparison */}
        <SectionHeading label="Head to Head" heading="10-Category Comparison" />

        <div className="mt-8 space-y-4">
          {comparisonCategories.map((cat, i) => {
            const winner = winnerStyles[cat.winner];
            return (
              <ScrollReveal key={cat.category} delay={i * 0.04}>
                <div className="specimen-border rounded-lg bg-white overflow-hidden">
                  <div className="flex items-center justify-between border-b border-calcário-200 px-5 py-2.5">
                    <h3 className="font-display text-sm font-semibold text-granito">
                      {cat.category}
                    </h3>
                    <span className={`flex items-center gap-1 rounded-full px-2.5 py-0.5 font-ui text-[10px] font-medium ${winner.bg} ${winner.text}`}>
                      {cat.winner !== "tie" && <Trophy className="h-3 w-3" />}
                      {cat.winner === "tie" && <Minus className="h-3 w-3" />}
                      {winner.label}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-calcário-200">
                    <div className="p-4">
                      <p className="mb-1 font-ui text-[10px] font-medium uppercase tracking-wider text-musgo-600">
                        Sintra
                      </p>
                      <p className="font-body text-xs leading-relaxed text-granito/70">
                        {cat.sintra}
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="mb-1 font-ui text-[10px] font-medium uppercase tracking-wider text-névoa-600">
                        Cascais
                      </p>
                      <p className="font-body text-xs leading-relaxed text-granito/70">
                        {cat.cascais}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ContourDivider className="my-12" />

        {/* Scenario Recommendations */}
        <SectionHeading label="Your Situation" heading="Which Should YOU Pick?" />

        <div className="mt-8 space-y-3">
          {scenarios.map((s, i) => {
            const style = recStyles[s.recommendation];
            return (
              <ScrollReveal key={s.scenario} delay={i * 0.05}>
                <div className={`rounded-lg border ${style.border} ${style.bg} p-5`}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display text-sm font-semibold text-granito">
                      &ldquo;{s.scenario}&rdquo;
                    </h3>
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 font-ui text-[10px] font-medium ${style.badge}`}>
                      {s.recommendation === "both" ? "Do Both" : s.recommendation === "sintra" ? "→ Sintra" : "→ Cascais"}
                    </span>
                  </div>
                  <p className="font-body text-sm text-granito/70">
                    {s.reason}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <ProTip variant="tip">
            <strong>The best of both worlds:</strong> Sintra palaces in the morning →
            Bus 403 to Cabo da Roca (sunset) → Bus 403 to Cascais (dinner + seafood)
            → Train from Cascais to Lisbon. An epic full-day loop.
          </ProTip>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-8 rounded-lg border border-palácio-200 bg-palácio-50 p-6 text-center">
            <p className="font-display text-lg font-semibold text-granito mb-4">
              Going to Sintra? Start planning.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/lisbon-to-sintra-day-trip"
                className="inline-flex items-center gap-1.5 rounded-full bg-névoa-600 px-5 py-2 font-ui text-sm font-medium text-white hover:bg-névoa-700 transition-colors"
              >
                Day Trip Guide <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/1-day-sintra-itinerary"
                className="inline-flex items-center gap-1.5 rounded-full border border-névoa-300 px-5 py-2 font-ui text-sm font-medium text-névoa-700 hover:bg-névoa-50 transition-colors"
              >
                1-Day Itinerary <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <RelatedGuides links={[
          { label: "Day Trip from Lisbon", href: "/lisbon-to-sintra-day-trip", description: "Step-by-step Sintra day trip" },
          { label: "Is Sintra Worth Visiting?", href: "/is-sintra-worth-visiting", description: "Real pros and cons" },
          { label: "Cabo da Roca", href: "/cabo-da-roca-guide", description: "Combine with a Sintra-Cascais loop" },
          { label: "Travel Tips", href: "/sintra-travel-tips", description: "35+ essential tips" },
        ]} />

        <FAQSection faqs={vsCascaisFaqs} />
      </div>
    </>
  );
}
