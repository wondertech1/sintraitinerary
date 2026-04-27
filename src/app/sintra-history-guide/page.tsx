import type { Metadata } from "next";
import { historyEras, historyFaqs } from "@/data/guides/authority/sintra-history";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import { BookOpen, Clock, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "History of Sintra — From Moorish Fortress to UNESCO World Heritage (2026)",
  description:
    "1,000 years of Sintra in four chapters: Moorish fortress, royal summer court, Romantic revolution, and UNESCO status. Read this before you visit — it changes everything.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-history-guide",
  },
};

export default function HistoryPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(historyFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sintra History", url: "/sintra-history-guide" },
          ]),
        ]}
      />

      <GuideHero
        category="History & Culture"
        title="The History of Sintra"
        subtitle="From a Moorish hilltop fortress to a Romantic fairytale to a UNESCO World Heritage Site — a thousand years of ambition on a misty mountain."
        lastVerified="April 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            Understanding Sintra&apos;s history transforms your visit. The colorful Pena Palace wasn&apos;t always there — it was built on a ruined monastery by a German prince who dreamed of a fantasy castle. The Moorish Castle walls are 1,200 years old. The fog that wraps around the palaces attracted royalty centuries before it attracted tourists. Here are four eras that made Sintra what it is today.
          </p>
        </ScrollReveal>

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

        <ContourDivider className="my-12" />

        <ScrollReveal>
          <ProTip variant="tip">
            <strong>Visit in chronological order:</strong> Moorish Castle (8th century) → National Palace (13th-15th century) → Capuchos Convent (1560) → Pena Palace (1842-1854) → Regaleira (1904-1910). Walking through Sintra in historical order makes the evolution vivid — from military fortress to royal retreat to Romantic fantasy.
          </ProTip>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        <RelatedGuides
          links={[
            { label: "UNESCO Heritage", href: "/sintra-unesco-world-heritage", description: "Why Sintra is protected" },
            { label: "Which Palaces to Visit", href: "/guides/which-sintra-palaces-to-visit", description: "Every palace compared" },
          ]}
        />

      </div>
    </>
  );
}
