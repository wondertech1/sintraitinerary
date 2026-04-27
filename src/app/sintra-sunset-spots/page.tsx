import type { Metadata } from "next";
import { sunsetSpots, sunsetFaqs } from "@/data/guides/long-tail/sunset-spots";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import FAQSection from "@/components/shared/FAQSection";
import { Sunset, Star, Car, Footprints, Lightbulb, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Sintra Sunset Spots (2026) — 6 Viewpoints Ranked",
  description:
    "Where to watch sunset in Sintra: 6 spots ranked from hilltop chapels to palace terraces. Includes Peninha, Cabo da Roca, Seteais, Moorish Castle, and Azenhas do Mar.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-sunset-spots",
  },
};

const accessLabels = {
  easy: { label: "Walk from town", icon: Footprints, color: "bg-musgo-100 text-musgo-700" },
  moderate: { label: "Bus or walk", icon: Footprints, color: "bg-palacio-100 text-palacio-700" },
  "car-required": { label: "Car needed", icon: Car, color: "bg-ferrugem-100 text-ferrugem-700" },
};

export default function SunsetSpotsPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(sunsetFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sunset Spots", url: "/sintra-sunset-spots" },
          ]),
        ]}
      />

      <GuideHero
        category="Viewpoints"
        title="Sintra Sunset Spots"
        subtitle="From a hilltop chapel above the clouds to a palace terrace with wine — six places to watch the sun sink into the Atlantic."
        lastVerified="January 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            Most Sintra visitors leave by 5pm and miss the best light of the day. The golden hour here — when the Atlantic sun paints the palaces and mountains in warm amber — is extraordinary. Whether you have a car (Peninha is unmissable) or are on foot (Seteais terrace is 10 minutes from town), there&apos;s a sunset spot for every situation.
          </p>
        </ScrollReveal>

        <SectionHeading label="6 Spots Ranked" heading="Where to Watch Sunset" />

        <div className="mt-8 space-y-5">
          {sunsetSpots.map((spot, i) => {
            const access = accessLabels[spot.accessibility];
            const AccessIcon = access.icon;
            return (
              <ScrollReveal key={spot.name} delay={i * 0.05}>
                <div className="overflow-hidden rounded-lg border border-calcario-200 bg-white">
                  <div className="flex items-center justify-between border-b border-calcario-100 bg-calcario-50 px-5 py-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-palacio-100 font-[family-name:var(--font-ui)] text-xs font-bold text-palacio-700">
                        {i + 1}
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-granito">
                        {spot.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: spot.rating }).map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-palacio-400 text-palacio-400" />
                      ))}
                      {Array.from({ length: 5 - spot.rating }).map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 text-calcario-300" />
                      ))}
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="font-body text-sm leading-relaxed text-granito/80 mb-3">
                      {spot.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className={`flex items-center gap-1 rounded-full px-2.5 py-0.5 font-[family-name:var(--font-ui)] text-[10px] font-medium ${access.color}`}>
                        <AccessIcon className="h-3 w-3" />
                        {access.label}
                      </span>
                      <span className="flex items-center gap-1 rounded-full bg-nevoa-50 px-2.5 py-0.5 font-[family-name:var(--font-ui)] text-[10px] text-nevoa-600">
                        <Compass className="h-3 w-3" />
                        {spot.direction}
                      </span>
                    </div>

                    <p className="mb-3 font-[family-name:var(--font-ui)] text-[11px] text-nevoa-500">
                      <strong>Best months:</strong> {spot.bestMonths}
                    </p>

                    <div className="flex items-start gap-2 rounded bg-palacio-50 px-3 py-2">
                      <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-palacio-600" />
                      <p className="font-body text-xs text-palacio-800">{spot.tip}</p>
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
            <strong>The autumn/winter advantage:</strong> Palace closing times are 5:30-6:30pm year-round. In summer, sunset is at 9pm — you&apos;ll miss it at the palaces. But from October to March, sunset falls within opening hours. Autumn golden hour on Pena&apos;s terraces or the Moorish Castle walls is unforgettable.
          </ProTip>
        </ScrollReveal>


        <FAQSection faqs={sunsetFaqs} />
      </div>
    </>
  );
}
