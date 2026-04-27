import type { Metadata } from "next";
import { hiddenGems, hiddenGemsFaqs } from "@/data/guides/long-tail/hidden-gems";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQSection from "@/components/shared/FAQSection";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import {
  Landmark,
  TreePine,
  Footprints,
  Eye,
  Clock,
  Coins,
  Lightbulb,
  Navigation,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sintra Hidden Gems (2026) — 8 Secret Spots Beyond the Main Palaces",
  description:
    "Beyond Pena Palace and Regaleira: 8 hidden gems in Sintra that most tourists miss. Capuchos Convent, Villa Sassetti trail, Biester Palace, Peninha sunset, and more.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-hidden-gems",
  },
};

const typeIcons: Record<string, typeof Landmark> = {
  palace: Landmark,
  nature: TreePine,
  trail: Footprints,
  viewpoint: Eye,
  historic: Landmark,
};

const typeColors: Record<string, string> = {
  palace: "bg-palacio-100 text-palacio-700 border-palacio-200",
  nature: "bg-musgo-100 text-musgo-700 border-musgo-200",
  trail: "bg-ferrugem-100 text-ferrugem-700 border-ferrugem-200",
  viewpoint: "bg-nevoa-100 text-nevoa-700 border-nevoa-200",
  historic: "bg-calcario-200 text-calcario-800 border-calcario-300",
};

export default function HiddenGemsPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(hiddenGemsFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sintra Hidden Gems", url: "/sintra-hidden-gems" },
          ]),
        ]}
      />

      <GuideHero
        category="Off the Beaten Path"
        title="Sintra's Hidden Gems"
        subtitle="The cork-lined convent, the secret trail, the palace nobody knows about yet. Eight spots that don't make the Instagram feed — and are better for it."
        lastVerified="January 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            Every Sintra guide sends you to the same five palaces. They&apos;re wonderful — we at Sintra Itinerary wrote detailed guides for each one. But Sintra&apos;s real magic is in the places where the tour buses can&apos;t reach: a monastery where monks slept in cork-lined boxes, a free forest trail more beautiful than any palace garden, a viewpoint where the chapel floats above the clouds. Here are eight places worth the detour.
          </p>
        </ScrollReveal>

        <SectionHeading label="8 Hidden Gems" heading="Beyond the Palace Circuit" />

        <div className="mt-8 space-y-6">
          {hiddenGems.map((gem, i) => {
            const Icon = typeIcons[gem.type];
            return (
              <ScrollReveal key={gem.name} delay={i * 0.05}>
                <div className="relative overflow-hidden rounded-lg border border-calcario-200 bg-white">
                  {/* Numbered header bar */}
                  <div className="flex items-center gap-3 border-b border-calcario-100 bg-calcario-50 px-5 py-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-nevoa-800 font-[family-name:var(--font-ui)] text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-granito">
                        {gem.name}
                      </h3>
                    </div>
                    <span className={`flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-[family-name:var(--font-ui)] text-[10px] font-medium ${typeColors[gem.type]}`}>
                      <Icon className="h-3 w-3" />
                      {gem.type}
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="font-body text-sm leading-relaxed text-granito/80 mb-4">
                      {gem.description}
                    </p>

                    {/* Why hidden */}
                    <div className="mb-3 rounded bg-nevoa-50 px-4 py-3">
                      <p className="font-[family-name:var(--font-ui)] text-[10px] font-medium uppercase tracking-wider text-nevoa-500 mb-1">
                        Why most people miss it
                      </p>
                      <p className="font-body text-xs text-granito/60">{gem.whyHidden}</p>
                    </div>

                    {/* How to visit */}
                    <div className="mb-4 flex items-start gap-2">
                      <Navigation className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ferrugem-500" />
                      <p className="font-body text-xs leading-relaxed text-granito/70">{gem.howToVisit}</p>
                    </div>

                    {/* Quick facts */}
                    <div className="flex flex-wrap gap-3">
                      <span className="flex items-center gap-1 font-[family-name:var(--font-ui)] text-[11px] text-nevoa-600">
                        <Clock className="h-3 w-3" />
                        {gem.duration}
                      </span>
                      <span className="flex items-center gap-1 font-[family-name:var(--font-ui)] text-[11px] text-nevoa-600">
                        <Coins className="h-3 w-3" />
                        {gem.cost}
                      </span>
                    </div>

                    {/* Tip */}
                    <div className="mt-3 flex items-start gap-2 rounded bg-musgo-50 px-3 py-2">
                      <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-musgo-500" />
                      <p className="font-body text-xs text-musgo-700">{gem.tip}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ContourDivider className="my-12" />

        <ScrollReveal>
          <ProTip variant="palace-secret">
            <strong>The 2-day hidden gems strategy:</strong> Day 1 is for the classic palaces (Pena + Regaleira + Moorish Castle). Day 2 is for hidden gems — rent a car for half a day and hit Capuchos, Peninha, and Azenhas do Mar. Two completely different Sintra experiences.
          </ProTip>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="money-saver">
            <strong>Free gems:</strong> Villa Sassetti trail, Seteais viewpoint, Cruz Alta summit, and Peninha are all free. You can have a full &ldquo;hidden gems day&rdquo; without spending a cent on admission.
          </ProTip>
        </ScrollReveal>

        <FAQSection faqs={hiddenGemsFaqs} />
      </div>
    </>
  );
}
