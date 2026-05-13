import type { Metadata } from "next";
import {
  accommodationAreas,
  accommodationOptions,
  stayScenarios,
  accommodationFaqs,
} from "@/data/guides/practical/accommodation";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQSection from "@/components/shared/FAQSection";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import {
  MapPin,
  Star,
  Bed,
  ArrowRight,
  Check,
  X,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Where to Stay in Sintra (2026) — Best Areas & Hotels, Candidly Reviewed",
  description:
    "Staying overnight in Sintra transforms the whole trip — empty palaces at 9am, golden-hour light, no day-trip crowds. Best areas, hotels, and guesthouses with real verdicts.",
  alternates: {
    canonical: "https://sintraitinerary.com/where-to-stay-in-sintra",
  },
};

const priceColors: Record<string, string> = {
  "€": "bg-musgo-100 text-musgo-700",
  "€€": "bg-palacio-100 text-palacio-700",
  "€€€": "bg-ferrugem-100 text-ferrugem-700",
};

const typeLabels: Record<string, string> = {
  hotel: "Hotel",
  guesthouse: "Guesthouse",
  airbnb: "Airbnb",
  quinta: "Quinta",
};

export default function WhereToStayPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(accommodationFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Where to Stay in Sintra", url: "/where-to-stay-in-sintra" },
          ]),
        ]}
      />

      <GuideHero
        category="Accommodation Guide"
        title="Where to Stay in Sintra"
        subtitle="Four areas, eight properties, and straight verdicts. Most visitors don't need to stay overnight — but if you do, here's where."
        lastVerified="April 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            Let&apos;s start with the truth: if you&apos;re visiting Sintra for one day, stay in Lisbon. The 40-minute train is so easy that paying for a Sintra hotel makes no sense. But if you want to see 3+ palaces, hike the Serra trails, or simply experience Sintra after the day-trippers leave — staying overnight transforms the visit. The town empties after 5pm and becomes something else entirely.
          </p>
        </ScrollReveal>

        {/* Area Comparison */}
        <SectionHeading label="Neighborhoods" heading="Four Areas, Four Vibes" />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {accommodationAreas.map((area, i) => (
            <ScrollReveal key={area.name} delay={i * 0.06}>
              <div className="group relative rounded-lg border border-calcario-200 bg-white p-5 transition-all hover:border-nevoa-300 hover:shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-ferrugem-500" />
                  <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-granito">
                    {area.name}
                  </h3>
                </div>

                <div className="space-y-2 mb-3">
                  {area.pros.map((pro) => (
                    <div key={pro} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-musgo-500" />
                      <span className="font-body text-xs leading-relaxed text-granito/70">{pro}</span>
                    </div>
                  ))}
                  {area.cons.map((con) => (
                    <div key={con} className="flex items-start gap-2">
                      <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ferrugem-400" />
                      <span className="font-body text-xs leading-relaxed text-granito/50">{con}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-calcario-100 pt-3">
                  <p className="font-[family-name:var(--font-ui)] text-[10px] uppercase tracking-wider text-nevoa-500 mb-1">
                    Best for
                  </p>
                  <p className="font-body text-xs text-granito/80">{area.bestFor}</p>
                </div>

                <div className="mt-2 rounded bg-calcario-50 px-3 py-2">
                  <p className="font-[family-name:var(--font-ui)] text-[10px] uppercase tracking-wider text-nevoa-500 mb-0.5">
                    Walking distances
                  </p>
                  <p className="font-body text-[11px] text-granito/60">{area.walkToPalaces}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        {/* Accommodation Options */}
        <SectionHeading label="Properties" heading="Where We'd Actually Stay" />

        <div className="mt-8 space-y-3">
          {accommodationOptions.map((opt, i) => (
            <ScrollReveal key={opt.name} delay={i * 0.04}>
              <div className="rounded-lg border border-calcario-200 bg-white p-5 transition-all hover:border-nevoa-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Bed className="h-4 w-4 text-nevoa-500" />
                    <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                      {opt.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-2 py-0.5 font-[family-name:var(--font-ui)] text-[10px] font-medium ${priceColors[opt.priceRange]}`}>
                      {opt.priceRange}
                    </span>
                    <span className="rounded-full bg-nevoa-50 px-2 py-0.5 font-[family-name:var(--font-ui)] text-[10px] text-nevoa-600">
                      {typeLabels[opt.type]}
                    </span>
                  </div>
                </div>

                <p className="font-[family-name:var(--font-ui)] text-[10px] uppercase tracking-wider text-nevoa-400 mb-1">
                  {opt.area} &middot; Best for: {opt.bestFor}
                </p>

                <p className="font-body text-sm leading-relaxed text-granito/70 mb-2">
                  {opt.verdict}
                </p>

                <p className="flex items-center gap-1 font-body text-xs text-granito/50">
                  <MapPin className="h-3 w-3" />
                  {opt.walkability}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <ProTip variant="money-saver">
            <strong>Booking timing:</strong> Sintra has limited accommodation, so summer prices spike. Book 2-3 months ahead for June-September. Winter prices are 30-50% lower and availability is rarely an issue.
          </ProTip>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        {/* Scenario Matcher */}
        <SectionHeading label="Recommendations" heading="Match Your Scenario" />

        <div className="mt-8 space-y-3">
          {stayScenarios.map((s, i) => (
            <ScrollReveal key={s.scenario} delay={i * 0.05}>
              <div className="flex items-start gap-4 rounded-lg bg-calcario-50 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-nevoa-100">
                  <Users className="h-4 w-4 text-nevoa-600" />
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                    &ldquo;{s.scenario}&rdquo;
                  </h4>
                  <p className="mt-1 font-body text-sm text-granito/80">
                    <span className="font-[family-name:var(--font-ui)] text-xs font-medium text-ferrugem-600">
                      {s.recommendation}
                    </span>
                    {" — "}
                    {s.reason}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <ProTip variant="palace-secret">
            <strong>The 6pm magic:</strong> Stay one night and walk through the old town after 6pm. The tour buses are gone, the light turns golden on the palace chimneys, and you&apos;ll see a Sintra that 90% of visitors never experience.
          </ProTip>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        <RelatedGuides
          links={[
            { label: "Sintra on a Budget", href: "/sintra-on-a-budget", description: "Keep costs low with our budget guide" },
            { label: "Day Trip from Lisbon", href: "/lisbon-to-sintra-day-trip", description: "Train, bus & taxi options" },
            { label: "3-Day Itinerary", href: "/3-day-sintra-itinerary", description: "Worth staying overnight for this" },
            { label: "Where to Eat", href: "/where-to-eat-in-sintra", description: "Best restaurants near each area" },
          ]}
        />

        <FAQSection faqs={accommodationFaqs} />
      </div>
    </>
  );
}
