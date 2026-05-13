import type { Metadata } from "next";
import { capuchosHighlights, capuchosPractical, capuchosFaqs } from "@/data/guides/long-tail/capuchos";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import { TreePine, Info, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Convent of the Capuchos Guide (2026) — Sintra's Most Atmospheric Hidden Gem",
  description:
    "Forget the palaces for an hour. The Convent of the Capuchos — cork-lined cells, forest silence, €10 entry — is unlike anything else in Sintra. Tickets, transport, and tips inside.",
  alternates: {
    canonical: "https://sintraitinerary.com/convent-of-the-capuchos-guide",
  },
};

export default function CapuchosGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(capuchosFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Convent of the Capuchos", url: "/convent-of-the-capuchos-guide" },
          ]),
        ]}
      />

      <GuideHero
        category="Attraction Guide"
        title="Convent of the Capuchos"
        subtitle="Tiny cork-lined cells, a chapel carved into rock, and moss covering everything. Sintra's most atmospheric site is also its least visited."
        lastVerified="April 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-6 font-body text-base leading-relaxed text-granito/80">
            While thousands queue at Pena Palace 5km away, the Convent of the Capuchos sits quietly in deep forest, receiving a fraction of the visitors. Founded in 1560 for eight Franciscan monks who chose radical poverty, it&apos;s the complete opposite of Sintra&apos;s grand palaces — and arguably more memorable than any of them.
          </p>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            The monks lined their cells with cork bark against the damp, grew vegetables on terraced gardens, and prayed in chapels so small they could only kneel. Philip II of Spain called it &ldquo;the poorest convent in the kingdom.&rdquo; Lord Byron was so moved he wrote about it in <em>Childe Harold&apos;s Pilgrimage</em>. Today, it&apos;s a mossy, atmospheric ruin that feels more like discovering something than visiting a tourist attraction.
          </p>
        </ScrollReveal>

        {/* Highlights */}
        <SectionHeading label="What to See" heading="Inside the Convent" />

        <div className="mt-8 space-y-4">
          {capuchosHighlights.map((h, i) => (
            <ScrollReveal key={h.title} delay={i * 0.05}>
              <div className="rounded-lg border border-musgo-200 bg-musgo-50 p-5">
                <div className="flex items-start gap-2 mb-2">
                  <TreePine className="mt-0.5 h-4 w-4 shrink-0 text-musgo-600" />
                  <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                    {h.title}
                  </h3>
                </div>
                <p className="ml-6 font-body text-sm leading-relaxed text-granito/70">
                  {h.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <ProTip variant="palace-secret">
            <strong>The silence test:</strong> Stand inside one of the cork-lined cells and close your eyes. The cork absorbs almost all sound — you&apos;ll hear nothing but your own breathing. It&apos;s an experience you can&apos;t replicate anywhere else in Sintra, and it says more about monastic life than any museum exhibit.
          </ProTip>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        {/* Practical Info */}
        <SectionHeading label="Planning" heading="Practical Information" />

        <div className="mt-8 space-y-4">
          {capuchosPractical.map((section, i) => (
            <ScrollReveal key={section.heading} delay={i * 0.05}>
              <div className="rounded-lg border border-calcario-200 bg-white p-5">
                <div className="flex items-start gap-2 mb-2">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-nevoa-500" />
                  <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                    {section.heading}
                  </h3>
                </div>
                <p className="ml-6 font-body text-sm leading-relaxed text-granito/70">
                  {section.content}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <ProTip variant="tip">
            <strong>Best time to visit:</strong> Early morning on a misty day. The fog drifting through the forest, the moss glistening with moisture, the convent materializing through the mist — it&apos;s the most atmospheric experience in all of Sintra. Even without fog, mornings are quieter and cooler.
          </ProTip>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="money-saver">
            <strong>Half-day car combo:</strong> Rent a car for half a day (from €25) and combine Capuchos + Peninha Chapel + Cabo da Roca. Three hidden gems in one morning, all on the same road. Return the car by lunch and explore Sintra town on foot in the afternoon.
          </ProTip>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        <RelatedGuides
          links={[
            { label: "Hidden Gems", href: "/sintra-hidden-gems", description: "More off-the-beaten-path spots" },
            { label: "Cabo da Roca", href: "/cabo-da-roca-guide", description: "15 min drive from Capuchos" },
            { label: "History & UNESCO Heritage", href: "/sintra-history-guide", description: "Capuchos is part of the Cultural Landscape" },
            { label: "Walking Routes", href: "/sintra-walking-routes", description: "Hiking trails near Capuchos" },
          ]}
        />

      </div>
    </>
  );
}
