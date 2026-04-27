import type { Metadata } from "next";
import { tramStops, tramFacts, tramFaqs } from "@/data/guides/long-tail/tram";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQSection from "@/components/shared/FAQSection";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import { Train, MapPin, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Sintra Tram Guide (2026) — Electrico de Sintra to Praia das Macas",
  description:
    "Riding a 1904 tram 13km to the Atlantic is one of Sintra's best-kept secrets. Route, schedule, stops, prices, and why most visitors skip it — and shouldn't.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-tram-guide",
  },
};

export default function TramGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(tramFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sintra Tram Guide", url: "/sintra-tram-guide" },
          ]),
        ]}
      />

      <GuideHero
        category="Transport Guide"
        title="The Sintra Tram"
        subtitle="A rickety, charming 1904 tram that rattles 13km from Sintra through wine country to the Atlantic beach. One of Portugal's last heritage trams."
        lastVerified="April 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            The Electrico de Sintra has been running since 1904, connecting the hills of Sintra to the Atlantic coast at Praia das Macas. It&apos;s narrow-gauge, vintage, and slow — which is entirely the point. The 45-minute journey passes through the Colares wine region, rural villages, and ends at a sandy Atlantic beach. It&apos;s not useful for visiting palaces, but as a transport experience and a route to the coast, it&apos;s wonderful.
          </p>
        </ScrollReveal>

        {/* Quick Facts */}
        <SectionHeading label="At a Glance" heading="Tram Facts" />

        <ScrollReveal>
          <div className="mt-8 rounded-lg border border-calcario-200 bg-white p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {tramFacts.map((fact) => (
                <div key={fact.label} className="flex items-start gap-2">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-nevoa-500" />
                  <div>
                    <p className="font-[family-name:var(--font-ui)] text-[10px] font-medium uppercase tracking-wider text-nevoa-500">
                      {fact.label}
                    </p>
                    <p className="font-body text-sm text-granito/80">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        {/* Route */}
        <SectionHeading label="The Route" heading="Sintra to the Sea" />

        <div className="mt-8 relative ml-4 border-l-2 border-palacio-200 pl-6 space-y-0">
          {tramStops.map((stop, i) => (
            <ScrollReveal key={stop.name} delay={i * 0.05}>
              <div className="relative pb-5">
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-palacio-400 bg-white" />
                <div className="flex items-start gap-3">
                  <span className="shrink-0 font-[family-name:var(--font-ui)] text-xs font-bold text-palacio-600 min-w-[36px]">
                    {stop.km}km
                  </span>
                  <div>
                    <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                      {stop.name}
                    </h4>
                    <p className="mt-0.5 font-body text-xs text-granito/60">
                      {stop.note}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        {/* Practical Tips */}
        <SectionHeading label="Tips" heading="Making the Most of the Tram" />

        <ScrollReveal>
          <ProTip variant="warning">
            <strong>Check the schedule first:</strong> The tram runs on a limited schedule — primarily weekends and more frequently in summer. Service can be suspended for maintenance. Always check efrfrente.pt or ask at the Sintra tourist office before planning your day around it. Don&apos;t assume it&apos;s running.
          </ProTip>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="tip">
            <strong>Best plan:</strong> Visit palaces in the morning. After lunch, catch the tram to Praia das Macas for a beach afternoon. Return by tram (if the schedule works) or taxi back to Sintra (about €15). This gives you the best of both Sintra worlds: palaces and coast.
          </ProTip>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="palace-secret">
            <strong>The Colares wine detour:</strong> Get off at Colares and visit the Adega Regional de Colares winery. The wines are made from pre-phylloxera Ramisco vines — among the oldest in Europe. Tastings are cheap, bottles are €10-30, and the vineyards are the ones visible from the Seteais Palace terrace.
          </ProTip>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        <RelatedGuides
          links={[
            { label: "Getting to Sintra", href: "/getting-to-sintra-from-lisbon", description: "All Sintra transport" },
            { label: "Hidden Gems", href: "/sintra-hidden-gems", description: "More off-beaten-path spots" },
          ]}
        />

        <FAQSection faqs={tramFaqs} />
      </div>
    </>
  );
}
