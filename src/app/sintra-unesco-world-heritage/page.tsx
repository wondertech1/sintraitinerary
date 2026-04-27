import type { Metadata } from "next";
import { unescoSites, unescoTimeline, unescoFaqs } from "@/data/guides/authority/sintra-unesco";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import { Award, Landmark, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Sintra UNESCO World Heritage Site — Cultural Landscape Guide (2026)",
  description:
    "Why Sintra is a UNESCO World Heritage Cultural Landscape: the palaces, gardens, forests, and 1,000-year history that earned the designation. What it includes and why it matters.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-unesco-world-heritage",
  },
};

export default function UnescoPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(unescoFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sintra UNESCO World Heritage", url: "/sintra-unesco-world-heritage" },
          ]),
        ]}
      />

      <GuideHero
        category="Heritage & History"
        title="Sintra UNESCO World Heritage"
        subtitle="In 1995, UNESCO didn't just protect the palaces — they protected an entire landscape. Mountains, forests, gardens, and a thousand years of human ambition woven into nature."
        lastVerified="April 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-6 font-body text-base leading-relaxed text-granito/80">
            Most visitors know Sintra has &ldquo;UNESCO status&rdquo; but few understand what that actually means. Sintra wasn&apos;t recognized for a single building — it was inscribed as a <strong>Cultural Landscape</strong>, one of the first in Europe. That means the value is the entire system: the way the Serra de Sintra&apos;s unique microclimate attracted royalty, who built palaces that blended into the mountain, planted exotic gardens that merged with native forest, and created a place where architecture and nature became inseparable.
          </p>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            Understanding this transforms your visit. You stop seeing isolated tourist attractions and start seeing a landscape — every misty trail, every garden path, every hilltop ruin is part of a single, interconnected story that stretches back a thousand years.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <SectionHeading label="History" heading="A Thousand Years in Brief" />

        <div className="mt-8 relative ml-4 border-l-2 border-palacio-200 pl-6 space-y-0">
          {unescoTimeline.map((item, i) => (
            <ScrollReveal key={item.year} delay={i * 0.04}>
              <div className="relative pb-5">
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-palacio-400 bg-white" />
                <div className="flex items-start gap-3">
                  <span className="shrink-0 font-[family-name:var(--font-ui)] text-xs font-bold text-palacio-600 min-w-[72px]">
                    {item.year}
                  </span>
                  <p className="font-body text-sm text-granito/80">{item.event}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        {/* Protected Sites */}
        <SectionHeading label="What's Protected" heading="The Cultural Landscape" />

        <div className="mt-8 space-y-4">
          {unescoSites.map((site, i) => (
            <ScrollReveal key={site.name} delay={i * 0.05}>
              <div className="rounded-lg border border-calcario-200 bg-white p-5">
                <div className="flex items-start gap-2 mb-1">
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-palacio-500" />
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                      {site.name}
                    </h3>
                    <p className="font-[family-name:var(--font-ui)] text-[10px] uppercase tracking-wider text-nevoa-500">
                      {site.role}
                    </p>
                  </div>
                </div>

                <p className="mt-2 font-body text-sm leading-relaxed text-granito/70">
                  {site.description}
                </p>

                <div className="mt-3 rounded bg-palacio-50 px-3 py-2">
                  <p className="font-[family-name:var(--font-ui)] text-[10px] font-medium uppercase tracking-wider text-palacio-600 mb-0.5">
                    Why UNESCO included it
                  </p>
                  <p className="font-body text-xs text-palacio-800">{site.whyIncluded}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        {/* What "Cultural Landscape" Means */}
        <SectionHeading label="Why It Matters" heading="More Than Just Palaces" />

        <ScrollReveal>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-musgo-200 bg-musgo-50 p-5">
              <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito mb-2">
                What makes Sintra different from other heritage sites
              </h3>
              <p className="font-body text-sm leading-relaxed text-granito/70">
                Most UNESCO sites protect individual buildings — a cathedral, a palace, a fortress. Sintra&apos;s designation protects the <em>relationship</em> between buildings and landscape. The fog, the forest, the Atlantic microclimate, the exotic gardens, and the hilltop architecture are treated as a single, inseparable cultural creation. You can&apos;t understand Pena Palace without the mountain it sits on. You can&apos;t understand the mountain without the humans who shaped it for a thousand years.
              </p>
            </div>

            <div className="rounded-lg border border-calcario-200 bg-white p-5">
              <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito mb-2">
                What it means for your visit
              </h3>
              <p className="font-body text-sm leading-relaxed text-granito/70">
                UNESCO status ensures the palaces are properly maintained, the forests are protected from development, and the landscape remains intact. It&apos;s why the Serra feels pristine, why the trails through ancient forest still exist, and why the view from the Moorish Castle hasn&apos;t been ruined by apartment buildings. When you walk between palaces through the forest, you&apos;re experiencing the cultural landscape — not just traveling between attractions.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="tip">
            <strong>See it as a landscape, not a checklist:</strong> Instead of rushing between palaces, slow down and notice the connective tissue — the forest trails, the fog, the exotic trees planted 150 years ago. Walk between palaces instead of taking the bus. The Cultural Landscape is the journey between attractions, not just the attractions themselves.
          </ProTip>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="palace-secret">
            <strong>Parques de Sintra:</strong> The organization that manages all five palaces and the surrounding parkland is itself a product of the UNESCO designation. Their conservation work is world-class — and your ticket prices fund it directly. Every €12-20 ticket helps preserve a World Heritage Site.
          </ProTip>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        <RelatedGuides
          links={[
            { label: "Which Palaces to Visit", href: "/guides/which-sintra-palaces-to-visit", description: "All 5 UNESCO palaces compared" },
            { label: "Walking Routes", href: "/sintra-walking-routes", description: "Experience the landscape on foot" },
            { label: "Is Sintra Worth It?", href: "/is-sintra-worth-visiting", description: "Why this place is special" },
            { label: "Hidden Gems", href: "/sintra-hidden-gems", description: "Beyond the main palaces" },
          ]}
        />

      </div>
    </>
  );
}
