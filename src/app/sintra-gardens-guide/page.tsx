import type { Metadata } from "next";
import { gardens, gardensFaqs } from "@/data/guides/long-tail/gardens";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import { Flower2, Clock, Check, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Sintra Gardens Guide (2026) — Best Palace Gardens Ranked by Season",
  description:
    "Guide to Sintra's palace gardens: Monserrate, Pena Park, Regaleira, Seteais. What to see at each, best season to visit, and a garden lover's itinerary.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-gardens-guide",
  },
};

export default function GardensPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(gardensFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Gardens Guide", url: "/sintra-gardens-guide" },
          ]),
        ]}
      />

      <GuideHero
        category="Nature Guide"
        title="Sintra's Palace Gardens"
        subtitle="Subtropical fern valleys, 85-hectare forests, underground grottos, and one of Europe's richest botanical collections. The gardens are reason enough to visit."
        lastVerified="April 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            Sintra&apos;s gardens don&apos;t get the attention they deserve. Most visitors rush to the palace interiors, snap a photo, and move on — missing the extraordinary botanical collections, hidden forest trails, and subtropical landscapes that surround each palace. The Serra de Sintra&apos;s Atlantic microclimate allows plants from five continents to thrive here. If you care about gardens, Sintra is world-class.
          </p>
        </ScrollReveal>

        <SectionHeading label="5 Gardens" heading="Palace Gardens Ranked" />

        <div className="mt-8 space-y-6">
          {gardens.map((garden, i) => (
            <ScrollReveal key={garden.name} delay={i * 0.05}>
              <div className="overflow-hidden rounded-lg border border-musgo-200 bg-white">
                <div className="border-b border-musgo-100 bg-musgo-50 px-5 py-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-granito">
                        {garden.name}
                      </h3>
                      <p className="font-[family-name:var(--font-ui)] text-[11px] text-musgo-600">
                        {garden.palace} &middot; {garden.style}
                      </p>
                    </div>
                    <span className="flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 font-[family-name:var(--font-ui)] text-[10px] font-medium text-musgo-700">
                      <Clock className="h-3 w-3" />
                      {garden.duration}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="font-body text-sm leading-relaxed text-granito/70 mb-4">
                    {garden.description}
                  </p>

                  <div className="mb-4">
                    <p className="font-[family-name:var(--font-ui)] text-[10px] font-medium uppercase tracking-wider text-musgo-600 mb-1.5">
                      Garden highlights
                    </p>
                    <ul className="space-y-1">
                      {garden.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 font-body text-xs text-granito/70">
                          <Check className="mt-0.5 h-3 w-3 shrink-0 text-musgo-500" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mb-3 font-[family-name:var(--font-ui)] text-[11px] text-nevoa-500">
                    <Flower2 className="inline h-3 w-3 mr-1 text-musgo-500" />
                    <strong>Best season:</strong> {garden.bestSeason}
                  </p>

                  <div className="flex items-start gap-2 rounded bg-musgo-50 px-3 py-2">
                    <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-musgo-600" />
                    <p className="font-body text-xs text-musgo-700">{garden.gardenTip}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        <ScrollReveal>
          <ProTip variant="palace-secret">
            <strong>The garden lover&apos;s day:</strong> Monserrate gardens in the morning (2 hours — the botanical highlight), Pena Park after lunch (forest walks and the Valley of the Lakes), Regaleira in late afternoon (underground exploration). Three completely different garden experiences in one day.
          </ProTip>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="tip">
            <strong>Spring is garden season:</strong> April-May brings the most color — Monserrate&apos;s rhododendrons, Pena&apos;s magnolias, everywhere green and blooming. But Sintra&apos;s gardens are beautiful year-round. Winter moss and mist, summer lushness, autumn gold — each season offers something.
          </ProTip>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        <RelatedGuides
          links={[
            { label: "Monserrate Guide", href: "/guides/monserrate-palace-guide", description: "Sintra's best gardens" },
            { label: "Sintra in Spring", href: "/sintra-in-spring", description: "Peak bloom season" },
            { label: "Walking Routes", href: "/sintra-walking-routes", description: "Forest trails between palaces" },
            { label: "Photography Guide", href: "/sintra-photography-guide", description: "Garden photography tips" },
          ]}
        />

      </div>
    </>
  );
}
