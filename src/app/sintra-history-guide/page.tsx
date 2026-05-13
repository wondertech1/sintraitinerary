import type { Metadata } from "next";
import { historyEras, historyFaqs } from "@/data/guides/authority/sintra-history";
import { unescoSites, unescoTimeline, unescoFaqs } from "@/data/guides/authority/sintra-unesco";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQSection from "@/components/shared/FAQSection";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import { BookOpen, Clock, Landmark, Award, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "History of Sintra & UNESCO World Heritage — Complete Guide (2026)",
  description:
    "1,000 years of Sintra in four chapters: Moorish fortress, royal summer court, Romantic revolution, and UNESCO Cultural Landscape status. What's protected, why it matters, and how it transforms your visit.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-history-guide",
  },
};

const allFaqs = [...historyFaqs, ...unescoFaqs];

export default function HistoryPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(allFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sintra History & UNESCO Heritage", url: "/sintra-history-guide" },
          ]),
        ]}
      />

      <GuideHero
        category="History & Heritage"
        title="The History of Sintra"
        subtitle="From a Moorish hilltop fortress to a Romantic fairytale to a UNESCO World Heritage Cultural Landscape — a thousand years of ambition on a misty mountain."
        lastVerified="May 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            Understanding Sintra&apos;s history transforms your visit. The colorful Pena Palace wasn&apos;t always there — it was built on a ruined monastery by a German prince who dreamed of a fantasy castle. The Moorish Castle walls are 1,200 years old. The fog that wraps around the palaces attracted royalty centuries before it attracted tourists. Here are four eras that made Sintra what it is today.
          </p>
        </ScrollReveal>

        {/* ===== FOUR ERAS ===== */}
        <SectionHeading label="Four Eras" heading="Sintra Through the Centuries" />

        <div className="mt-8 space-y-6">
          {historyEras.map((era, i) => (
            <ScrollReveal key={era.era} delay={i * 0.06}>
              <div className="overflow-hidden rounded-lg border border-calcario-200 bg-white">
                <div className="border-b border-calcario-100 bg-calcario-50 px-5 py-3">
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen className="h-4 w-4 text-ferrugem-500" />
                    <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-granito">
                      {era.era}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-[family-name:var(--font-ui)] text-[11px] text-nevoa-500">
                      <Clock className="inline h-3 w-3 mr-1" />{era.period}
                    </span>
                    <span className="font-[family-name:var(--font-ui)] text-[11px] italic text-ferrugem-500">
                      {era.headline}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="font-body text-sm leading-relaxed text-granito/70 mb-4">
                    {era.description}
                  </p>

                  <div className="mb-4">
                    <p className="font-[family-name:var(--font-ui)] text-[10px] font-medium uppercase tracking-wider text-nevoa-500 mb-2">
                      Key events
                    </p>
                    <ul className="space-y-1.5">
                      {era.keyEvents.map((event) => (
                        <li key={event} className="flex items-start gap-2 font-body text-xs text-granito/60">
                          <Landmark className="mt-0.5 h-3 w-3 shrink-0 text-palacio-500" />
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded bg-ferrugem-50 px-3 py-2">
                    <p className="font-[family-name:var(--font-ui)] text-[10px] font-medium uppercase tracking-wider text-ferrugem-500 mb-0.5">
                      What it left behind
                    </p>
                    <p className="font-body text-xs text-ferrugem-700">{era.legacy}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <ProTip variant="tip">
            <strong>Visit in chronological order:</strong> Moorish Castle (8th century) → National Palace (13th-15th century) → Capuchos Convent (1560) → Pena Palace (1842-1854) → Regaleira (1904-1910). Walking through Sintra in historical order makes the evolution vivid — from military fortress to royal retreat to Romantic fantasy.
          </ProTip>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        {/* ===== UNESCO SECTION ===== */}
        <SectionHeading label="Heritage" heading="UNESCO World Heritage Cultural Landscape" />

        <ScrollReveal>
          <p className="mt-6 mb-6 font-body text-base leading-relaxed text-granito/80">
            In 1995, UNESCO didn&apos;t just protect the palaces — they protected an entire landscape. Sintra was inscribed as a <strong>Cultural Landscape</strong>, one of the first in Europe. The value is the entire system: the way the Serra de Sintra&apos;s unique microclimate attracted royalty, who built palaces that blended into the mountain, planted exotic gardens that merged with native forest, and created a place where architecture and nature became inseparable.
          </p>
          <p className="mb-10 font-body text-base leading-relaxed text-granito/80">
            Understanding this transforms your visit. You stop seeing isolated tourist attractions and start seeing a landscape — every misty trail, every garden path, every hilltop ruin is part of a single, interconnected story that stretches back a thousand years.
          </p>
        </ScrollReveal>

        {/* UNESCO Timeline */}
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-granito mb-4">
          A Thousand Years in Brief
        </h3>

        <div className="relative ml-4 border-l-2 border-palacio-200 pl-6 space-y-0 mb-10">
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

        {/* Protected Sites */}
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-granito mb-4">
          The Cultural Landscape — What&apos;s Protected
        </h3>

        <div className="space-y-4 mb-10">
          {unescoSites.map((site, i) => (
            <ScrollReveal key={site.name} delay={i * 0.05}>
              <div className="rounded-lg border border-calcario-200 bg-white p-5">
                <div className="flex items-start gap-2 mb-1">
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-palacio-500" />
                  <div>
                    <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                      {site.name}
                    </h4>
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

        {/* What "Cultural Landscape" means */}
        <ScrollReveal>
          <div className="space-y-4 mb-10">
            <div className="rounded-lg border border-musgo-200 bg-musgo-50 p-5">
              <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito mb-2">
                What makes Sintra different from other heritage sites
              </h3>
              <p className="font-body text-sm leading-relaxed text-granito/70">
                Most UNESCO sites protect individual buildings — a cathedral, a palace, a fortress. Sintra&apos;s designation protects the <em>relationship</em> between buildings and landscape. The fog, the forest, the Atlantic microclimate, the exotic gardens, and the hilltop architecture are treated as a single, inseparable cultural creation.
              </p>
            </div>

            <div className="rounded-lg border border-calcario-200 bg-white p-5">
              <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito mb-2">
                What it means for your visit
              </h3>
              <p className="font-body text-sm leading-relaxed text-granito/70">
                UNESCO status ensures the palaces are properly maintained, the forests are protected from development, and the landscape remains intact. When you walk between palaces through the forest, you&apos;re experiencing the cultural landscape — not just traveling between attractions.
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
            <strong>Parques de Sintra:</strong> The organization that manages all five palaces and the surrounding parkland is itself a product of the UNESCO designation. Their conservation work is world-class — and your ticket prices fund it directly.
          </ProTip>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        <RelatedGuides
          links={[
            { label: "Which Palaces to Visit", href: "/guides/which-sintra-palaces-to-visit", description: "Every palace compared" },
            { label: "Walking Routes", href: "/sintra-walking-routes", description: "Experience the landscape on foot" },
            { label: "Is Sintra Worth It?", href: "/is-sintra-worth-visiting", description: "Why this place is special" },
            { label: "Hidden Gems", href: "/sintra-hidden-gems", description: "Beyond the main palaces" },
          ]}
        />

        <FAQSection faqs={allFaqs} />
      </div>
    </>
  );
}
