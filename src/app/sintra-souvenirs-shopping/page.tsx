import type { Metadata } from "next";
import { souvenirs, souvenirFaqs } from "@/data/guides/long-tail/souvenirs";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import FAQSection from "@/components/shared/FAQSection";
import {
  ShoppingBag,
  Cookie,
  Palette,
  Wrench,
  Lightbulb,
  MapPin,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sintra Souvenirs & Shopping Guide (2026) — What to Buy & Where",
  description:
    "What to buy in Sintra: travesseiros, azulejo tiles, cork products, Colares wine, ceramics, and local honey. Where to shop and what to avoid.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-souvenirs-shopping",
  },
};

const categoryIcons: Record<string, typeof Cookie> = {
  food: Cookie,
  craft: Wrench,
  art: Palette,
  practical: ShoppingBag,
};

const categoryColors: Record<string, string> = {
  food: "bg-palacio-100 text-palacio-700",
  craft: "bg-ferrugem-100 text-ferrugem-700",
  art: "bg-nevoa-100 text-nevoa-700",
  practical: "bg-calcario-200 text-calcario-700",
};

export default function SouvenirsPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(souvenirFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Souvenirs & Shopping", url: "/sintra-souvenirs-shopping" },
          ]),
        ]}
      />

      <GuideHero
        category="Shopping Guide"
        title="Sintra Souvenirs & Shopping"
        subtitle="Travesseiros, azulejo tiles, cork wallets, and the wine you can see from the palace terrace. What's worth buying and where to find the real thing."
        lastVerified="February 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            Sintra&apos;s tourist shops are full of generic &ldquo;Portugal&rdquo; magnets made in China. Skip those. The real souvenirs here are distinctly local: pastries from Piriquita, a bakery since 1862 and the original creator of the travesseiro pastry, hand-painted tiles reproducing patterns from the palace walls, cork from the trees you walked under, and wine from vineyards visible from the palace terrace. Here&apos;s what to buy and where.
          </p>
        </ScrollReveal>

        <SectionHeading label="8 Souvenirs" heading="What to Buy in Sintra" />

        <div className="mt-8 space-y-4">
          {souvenirs.map((item, i) => {
            const Icon = categoryIcons[item.category];
            return (
              <ScrollReveal key={item.name} delay={i * 0.04}>
                <div className="rounded-lg border border-calcario-200 bg-white p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                        {item.name}
                      </h3>
                      {item.authentic && (
                        <span className="flex items-center gap-0.5 rounded-full bg-musgo-100 px-2 py-0.5 font-[family-name:var(--font-ui)] text-[9px] font-medium text-musgo-700">
                          <Check className="h-2.5 w-2.5" /> Authentic
                        </span>
                      )}
                    </div>
                    <span className={`flex items-center gap-1 rounded-full px-2 py-0.5 font-[family-name:var(--font-ui)] text-[10px] font-medium ${categoryColors[item.category]}`}>
                      <Icon className="h-3 w-3" />
                      {item.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-2">
                    <span className="font-[family-name:var(--font-ui)] text-[11px] text-nevoa-600">
                      {item.priceRange}
                    </span>
                    <span className="flex items-center gap-1 font-[family-name:var(--font-ui)] text-[11px] text-nevoa-600">
                      <MapPin className="h-3 w-3" />
                      {item.whereToBuy}
                    </span>
                  </div>

                  <p className="font-body text-sm leading-relaxed text-granito/70 mb-3">
                    {item.description}
                  </p>

                  <div className="flex items-start gap-2 rounded bg-palacio-50 px-3 py-2">
                    <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-palacio-600" />
                    <p className="font-body text-xs text-palacio-800">{item.tip}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ContourDivider className="my-12" />

        <ScrollReveal>
          <ProTip variant="money-saver">
            <strong>The São Pedro market:</strong> For ceramics, honey, cork products, and antiques, the São Pedro market (2nd and 4th Sundays) has better prices and more authentic goods than the tourist shops. It&apos;s a 15-minute walk from the town center.
          </ProTip>
        </ScrollReveal>


        <FAQSection faqs={souvenirFaqs} />
      </div>
    </>
  );
}
