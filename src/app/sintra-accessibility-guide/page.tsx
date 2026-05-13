import type { Metadata } from "next";
import { palaceAccessibility, transportAccessibility, accessibilityFaqs } from "@/data/guides/practical/accessibility";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQSection from "@/components/shared/FAQSection";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import { Accessibility, AlertTriangle, Train, Check, X, Minus } from "lucide-react";

export const metadata: Metadata = {
  title: "Sintra Accessibility Guide (2026) — Wheelchair & Mobility Information",
  description:
    "Sintra's hills and cobblestones are a real challenge — but two palaces are genuinely manageable. Wheelchair access rated at each site, plus transport and planning tips.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-accessibility-guide",
  },
};

const accessIcons = {
  good: { icon: Check, color: "text-musgo-600", bg: "bg-musgo-100", label: "Partially accessible" },
  partial: { icon: Minus, color: "text-palacio-600", bg: "bg-palacio-100", label: "Limited access" },
  poor: { icon: AlertTriangle, color: "text-ferrugem-500", bg: "bg-ferrugem-100", label: "Very limited" },
  none: { icon: X, color: "text-ferrugem-600", bg: "bg-ferrugem-100", label: "Not accessible" },
};

export default function AccessibilityPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(accessibilityFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Accessibility Guide", url: "/sintra-accessibility-guide" },
          ]),
        ]}
      />

      <GuideHero
        category="Practical Guide"
        title="Sintra Accessibility Guide"
        subtitle="Straightforward information about wheelchair access, mobility challenges, and what's realistically possible at each palace. Sintra is beautiful but not easy to navigate."
        lastVerified="April 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            We won&apos;t sugarcoat it: Sintra is challenging for visitors with mobility limitations. The palaces sit on steep hills, connected by cobblestone streets and forest trails with stairs. Wheelchair access is limited at most sites. But that doesn&apos;t mean Sintra is off-limits — with the right expectations and planning, there are meaningful experiences available. This guide gives you the honest, palace-by-palace breakdown.
          </p>
        </ScrollReveal>

        {/* Palace Accessibility */}
        <SectionHeading label="Palace by Palace" heading="Access at Each Site" />

        <div className="mt-8 space-y-4">
          {palaceAccessibility.map((palace, i) => {
            const access = accessIcons[palace.wheelchairAccess];
            const AccessIcon = access.icon;
            return (
              <ScrollReveal key={palace.name} delay={i * 0.05}>
                <div className="rounded-lg border border-calcario-200 bg-white p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-granito">
                      {palace.name}
                    </h3>
                    <span className={`flex items-center gap-1 rounded-full px-2.5 py-0.5 font-[family-name:var(--font-ui)] text-[10px] font-medium ${access.bg} ${access.color}`}>
                      <AccessIcon className="h-3 w-3" />
                      {access.label}
                    </span>
                  </div>

                  <p className="font-body text-sm leading-relaxed text-granito/70 mb-3">
                    {palace.mobilityNotes}
                  </p>

                  <div className="mb-3">
                    <p className="font-[family-name:var(--font-ui)] text-[10px] font-medium uppercase tracking-wider text-nevoa-500 mb-1.5">
                      Key barriers
                    </p>
                    <ul className="space-y-1">
                      {palace.keyBarriers.map((barrier) => (
                        <li key={barrier} className="flex items-start gap-2 font-body text-xs text-granito/60">
                          <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0 text-ferrugem-400" />
                          {barrier}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded bg-musgo-50 px-3 py-2">
                    <p className="font-[family-name:var(--font-ui)] text-[10px] font-medium uppercase tracking-wider text-musgo-600 mb-0.5">
                      Best alternative
                    </p>
                    <p className="font-body text-xs text-musgo-700">{palace.bestAlternative}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ContourDivider className="my-12" />

        {/* Transport */}
        <SectionHeading label="Getting Around" heading="Transport Accessibility" />

        <div className="mt-8 space-y-3">
          {transportAccessibility.map((t, i) => (
            <ScrollReveal key={t.mode} delay={i * 0.05}>
              <div className="rounded-lg border border-calcario-200 bg-white p-4">
                <div className="flex items-start gap-2">
                  <Train className="mt-0.5 h-4 w-4 shrink-0 text-nevoa-500" />
                  <div>
                    <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                      {t.mode}
                    </h4>
                    <p className="mt-1 font-body text-xs leading-relaxed text-granito/70">
                      {t.accessNotes}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <ProTip variant="tip">
            <strong>Recommended accessible itinerary:</strong> Take a taxi from the station to the National Palace (partial ground floor access). After, taxi to Monserrate (ground floor + lawn). Return to town for lunch at a street-level restaurant. Skip the hilltop palaces (Pena, Moorish, Regaleira) unless you have good mobility — they require extensive stair climbing.
          </ProTip>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="warning">
            <strong>Cobblestone reality:</strong> Even the &ldquo;flat&rdquo; town center has traditional Portuguese cobblestones that are uneven and slippery when wet. The main road from the station is paved and easier. If using a wheelchair, stick to paved roads and consider taxi transport between accessible sites.
          </ProTip>
        </ScrollReveal>

        <ContourDivider className="my-12" />

        <RelatedGuides
          links={[
            { label: "Day Trip from Lisbon", href: "/lisbon-to-sintra-day-trip", description: "Train and bus details" },
            { label: "National Palace Guide", href: "/guides/national-palace-guide", description: "Most accessible palace" },
          ]}
        />

        <FAQSection faqs={accessibilityFaqs} />
      </div>
    </>
  );
}
