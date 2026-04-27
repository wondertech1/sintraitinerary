import type { Metadata } from "next";
import {
  transportOptions,
  gettingAroundSintra,
  gettingHereFaqs,
} from "@/data/guides/getting-here";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import TransportCard from "@/components/guides/TransportCard";
import FAQSection from "@/components/shared/FAQSection";
import ProTip from "@/components/shared/ProTip";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ContourDivider from "@/components/decorative/ContourDivider";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How to Get to Sintra from Lisbon — Train, Bus, Uber, Tour Compared",
  description:
    "The train from Rossio costs €2.35 and takes 40 minutes. Everything else costs more and takes longer. Train, bus 434, Uber, and tuk-tuks compared — with insider tips.",
  alternates: {
    canonical: "https://sintraitinerary.com/getting-to-sintra-from-lisbon",
  },
};

export default function GettingToSintraPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(gettingHereFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            {
              name: "Getting to Sintra from Lisbon",
              url: "/getting-to-sintra-from-lisbon",
            },
          ]),
        ]}
      />

      <GuideHero
        category="Transport Guide"
        title="Getting to Sintra from Lisbon"
        subtitle="Train, Uber, bus, or tour — every option compared with real costs and frank pros/cons. We at Sintra Itinerary have taken every single one of these to verify."
        lastVerified="April 2026"
      />

      <div className="mx-auto max-w-[900px] px-6 py-10">
        {/* Quick answer */}
        <ScrollReveal>
          <div className="rounded-[2px] border border-musgo-300 bg-musgo-50 p-5">
            <h2 className="font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-[0.15em] text-musgo-700">
              Quick Answer
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-granito">
              Take the <strong>train from Rossio station</strong>. It costs{" "}
              <strong>€2.35 each way</strong>, takes <strong>40 minutes</strong>,
              and runs every 30 minutes. You need a Viva Viagem card (€0.50 at
              the machines). That&apos;s it — don&apos;t overthink this.
            </p>
          </div>
        </ScrollReveal>

        {/* From Lisbon to Sintra */}
        <GuideSection title="From Lisbon to Sintra">
          <div className="space-y-6">
            {transportOptions.map((opt, i) => (
              <ScrollReveal key={opt.id} delay={i * 0.06}>
                <TransportCard
                  name={opt.name}
                  icon={opt.icon}
                  cost={opt.cost}
                  duration={opt.duration}
                  frequency={opt.frequency}
                  description={opt.description}
                  pros={opt.pros}
                  cons={opt.cons}
                  recommended={opt.recommended}
                  steps={opt.steps}
                />
              </ScrollReveal>
            ))}
          </div>
        </GuideSection>

        <ContourDivider className="mt-10 text-calcario-400" />

        {/* Getting Around Sintra */}
        <GuideSection title="Getting Around Sintra">
          <ScrollReveal>
            <ProTip variant="money-saver">
              The bus 434 day pass (€7.60) only makes sense if you&apos;re
              visiting Pena Palace or the Moorish Castle. If you&apos;re doing
              Regaleira + town center + National Palace, everything is walkable
              and you don&apos;t need bus 434 at all.
            </ProTip>
          </ScrollReveal>

          <div className="mt-6 space-y-4">
            {gettingAroundSintra.map((option, i) => (
              <ScrollReveal key={option.name} delay={i * 0.05}>
                <div className="rounded-[2px] border border-calcario-300 bg-nevoeiro p-4">
                  <h3 className="font-[family-name:var(--font-display)] text-base font-600 text-granito">
                    {option.name}
                  </h3>
                  <div className="mt-1 flex flex-wrap gap-3 font-[family-name:var(--font-ui)] text-[12px] text-nevoa-600">
                    <span>{option.cost}</span>
                    <span>{option.frequency}</span>
                  </div>
                  <p className="mt-1 font-[family-name:var(--font-ui)] text-[12px] text-nevoa-500">
                    Route: {option.route}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-granito-light">
                    {option.notes}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </GuideSection>

        <RelatedGuides links={[
          { label: "Day Trip Planning Guide", href: "/lisbon-to-sintra-day-trip", description: "Complete minute-by-minute itinerary" },
          { label: "Walking Routes", href: "/sintra-walking-routes", description: "Trails between palaces" },
          { label: "Sintra on a Budget", href: "/sintra-on-a-budget", description: "Money-saving transport tips" },
          { label: "Travel Tips", href: "/sintra-travel-tips", description: "35+ essential tips" },
        ]} />

        <FAQSection faqs={gettingHereFaqs} />
      </div>
    </>
  );
}
