import type { Metadata } from "next";
import { transportOptions, portoSchedule, portoDayTripFaqs } from "@/data/guides/long-tail/porto-day-trip";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQSection from "@/components/shared/FAQSection";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import { Train, Clock, Lightbulb, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Sintra Day Trip from Porto (2026) — Train, Timing & Realistic Itinerary",
  description:
    "Can you day trip from Porto to Sintra? Yes, but it's a long day. Complete guide: fastest trains, optimal schedule, how many palaces you can fit, and whether you should just stay in Lisbon.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-day-trip-from-porto",
  },
};

export default function PortoDayTripPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(portoDayTripFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Day Trip from Porto", url: "/sintra-day-trip-from-porto" },
          ]),
        ]}
      />

      <GuideHero
        category="Transport Guide"
        title="Sintra Day Trip from Porto"
        subtitle="It's doable — 3.5 hours each way by fast train, 5-6 hours in Sintra. Here's the straight breakdown of whether it's worth the long day."
        lastVerified="March 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        <ScrollReveal>
          <p className="mb-12 font-body text-base leading-relaxed text-granito/80">
            Let&apos;s be upfront: a Porto-to-Sintra day trip is a <strong>long day</strong>. You&apos;ll spend 7+ hours traveling for 5-6 hours in Sintra. It&apos;s doable — we&apos;ve done it — but if you can stay overnight in Lisbon instead, you&apos;ll see more and enjoy it more. That said, if Porto is your only base and Sintra is on your must-see list, here&apos;s how to make it work.
          </p>
        </ScrollReveal>

        {/* Transport Options */}
        <SectionHeading label="Getting There" heading="Three Ways from Porto" />

        <div className="mt-8 space-y-4">
          {transportOptions.map((opt, i) => (
            <ScrollReveal key={opt.mode} delay={i * 0.06}>
              <div className={`rounded-lg border p-5 ${opt.recommended ? "border-musgo-300 bg-musgo-50" : "border-calcario-200 bg-white"}`}>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Train className="h-4 w-4 text-nevoa-600" />
                    <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                      {opt.mode}
                    </h3>
                  </div>
                  {opt.recommended && (
                    <span className="flex items-center gap-1 rounded-full bg-musgo-200 px-2.5 py-0.5 font-[family-name:var(--font-ui)] text-[10px] font-medium text-musgo-800">
                      <Check className="h-3 w-3" /> Recommended
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 mb-3">
                  <span className="font-[family-name:var(--font-ui)] text-[11px] text-nevoa-600">
                    <Clock className="inline h-3 w-3 mr-1" />{opt.duration}
                  </span>
                  <span className="font-[family-name:var(--font-ui)] text-[11px] text-nevoa-600">
                    {opt.cost}
                  </span>
                  <span className="font-[family-name:var(--font-ui)] text-[11px] text-nevoa-600">
                    {opt.frequency}
                  </span>
                </div>

                <p className="font-body text-sm leading-relaxed text-granito/70">
                  {opt.verdict}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        {/* Schedule */}
        <SectionHeading label="Itinerary" heading="Optimized Porto → Sintra Day" />

        <div className="mt-8 relative ml-4 border-l-2 border-nevoa-200 pl-6 space-y-0">
          {portoSchedule.map((stop, i) => (
            <ScrollReveal key={stop.time} delay={i * 0.04}>
              <div className="relative pb-5">
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-nevoa-400 bg-white" />
                <div className="flex items-start gap-3">
                  <span className="shrink-0 font-[family-name:var(--font-ui)] text-xs font-bold text-nevoa-600 min-w-[52px]">
                    {stop.time}
                  </span>
                  <div>
                    <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold text-granito">
                      {stop.activity}
                    </h4>
                    <p className="mt-0.5 flex items-start gap-1 font-body text-xs text-granito/60">
                      <Lightbulb className="mt-0.5 h-3 w-3 shrink-0 text-palacio-500" />
                      {stop.note}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <ProTip variant="money-saver">
            <strong>Book AP trains early:</strong> Alfa Pendular tickets are cheaper when booked online in advance at cp.pt. A round trip can be €50-70 vs €70-90 at the station. First class is often only €5-10 more and worth it for the 5+ hour round trip.
          </ProTip>
        </ScrollReveal>

        <ScrollReveal>
          <ProTip variant="tip">
            <strong>The better alternative:</strong> If your schedule allows, take the AP to Lisbon the evening before, stay one night near Rossio station (€60-80), and do Sintra the next morning with a full day. You&apos;ll see 3 palaces instead of 2 and actually enjoy the experience instead of racing the clock.
          </ProTip>
        </ScrollReveal>

        <FAQSection faqs={portoDayTripFaqs} />
      </div>
    </>
  );
}
