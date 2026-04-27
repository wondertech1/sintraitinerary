import type { Metadata } from "next";
import {
  beforeYouGo,
  routeOptions,
  commonMistakes,
  dayTripFaqs,
} from "@/data/guides/long-tail/day-trip";
import JsonLd from "@/components/shared/JsonLd";
import { touristTripSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQSection from "@/components/shared/FAQSection";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import {
  CheckCircle,
  Clock,
  Train,
  XCircle,
  Lightbulb,
  Euro,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Lisbon to Sintra Day Trip (2026) — Complete Planning Guide with Routes",
  description:
    "Step-by-step guide to planning a Sintra day trip from Lisbon. Two tested routes with exact timelines, costs, and common mistakes to avoid.",
  alternates: {
    canonical: "https://sintraitinerary.com/lisbon-to-sintra-day-trip",
  },
};

export default function DayTripPage() {
  return (
    <>
      <JsonLd
        data={[
          touristTripSchema({
            name: "Lisbon to Sintra Day Trip",
            description:
              "Complete planning guide for a day trip from Lisbon to Sintra with two tested routes and timelines.",
            url: "/lisbon-to-sintra-day-trip",
            days: 1,
          }),
          faqSchema(dayTripFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Lisbon to Sintra Day Trip", url: "/lisbon-to-sintra-day-trip" },
          ]),
        ]}
      />

      <GuideHero
        category="Day Trip Planning"
        title="Lisbon to Sintra Day Trip"
        subtitle="Two tested routes with minute-by-minute timelines. We at Sintra Itinerary have walked both of these routes multiple times to nail down the timing — leave Lisbon at 7:30am, see 3 palaces, eat lunch, be home by 5pm."
        lastVerified="March 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        {/* Quick Answer */}
        <ScrollReveal>
          <div className="mb-12 rounded-lg border border-musgo-200 bg-musgo-50 p-6">
            <p className="font-ui text-xs font-medium uppercase tracking-wider text-musgo-600 mb-2">
              Quick Answer
            </p>
            <p className="font-body text-granito leading-relaxed">
              <strong>Train from Rossio</strong> (40 min, €2.25). Leave by{" "}
              <strong>7:30-8:00am</strong>. See{" "}
              <strong>Pena + Moorish Castle + Regaleira</strong>. Lunch in town.
              Back in Lisbon by <strong>5pm</strong>. Total cost:{" "}
              <strong>€45-55</strong> per person. Buy tickets online the night before.
            </p>
          </div>
        </ScrollReveal>

        {/* Before You Go Checklist */}
        <SectionHeading label="Prep" heading="Before You Go — Checklist" />

        <div className="mt-8 rounded-lg border border-calcário-200 bg-white p-5">
          <ul className="space-y-2.5">
            {beforeYouGo.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 font-body text-sm text-granito/80"
              >
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-musgo-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ContourDivider className="my-12" />

        {/* Route Options */}
        {routeOptions.map((route, routeIndex) => (
          <div key={route.name}>
            <SectionHeading
              label={`Route ${routeIndex + 1}`}
              heading={route.name}
            />

            <ScrollReveal>
              <div className="mt-4 mb-6 rounded-lg border border-névoa-200 bg-névoa-50 p-4">
                <p className="font-body text-sm italic text-granito/70 mb-2">
                  {route.subtitle}
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-ui text-granito/60">
                  <span>
                    <strong className="text-granito/80">Best for:</strong>{" "}
                    {route.bestFor}
                  </span>
                  <span className="flex items-center gap-1">
                    <Euro className="h-3 w-3" /> {route.totalCost}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {route.palaces.map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-palácio-100 px-2.5 py-0.5 font-ui text-[10px] font-medium text-palácio-700"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <div className="relative ml-4 border-l-2 border-calcário-200 pl-6 space-y-0">
              {route.timeline.map((step, i) => (
                <ScrollReveal key={step.time} delay={i * 0.04}>
                  <div className="relative pb-6">
                    {/* Dot */}
                    <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-névoa-400 bg-white" />

                    <div className="flex items-start gap-3">
                      <span className="shrink-0 font-ui text-xs font-bold text-névoa-600 min-w-[52px]">
                        {step.time}
                      </span>
                      <div className="flex-1">
                        <h4 className="font-display text-sm font-semibold text-granito">
                          {step.title}
                        </h4>
                        <p className="mt-0.5 font-body text-sm text-granito/70">
                          {step.description}
                        </p>
                        {step.transport && (
                          <p className="mt-1 flex items-center gap-1 font-ui text-xs text-névoa-500">
                            <Train className="h-3 w-3" /> {step.transport}
                          </p>
                        )}
                        {step.tip && (
                          <p className="mt-1 flex items-start gap-1 font-ui text-xs text-musgo-600">
                            <Lightbulb className="mt-0.5 h-3 w-3 shrink-0" />
                            {step.tip}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}

        <ContourDivider className="my-12" />

        {/* Common Mistakes */}
        <SectionHeading label="Avoid These" heading="Common Mistakes" />

        <div className="mt-8 space-y-4">
          {commonMistakes.map((mistake, i) => (
            <ScrollReveal key={mistake.mistake} delay={i * 0.05}>
              <div className="specimen-border rounded-lg bg-white p-5">
                <div className="flex items-start gap-2 mb-2">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-ferrugem-500" />
                  <h3 className="font-display text-sm font-semibold text-granito">
                    {mistake.mistake}
                  </h3>
                </div>
                <p className="ml-6 mb-2 font-body text-sm text-granito/70">
                  <span className="font-ui text-xs font-medium text-ferrugem-600">
                    Reality:{" "}
                  </span>
                  {mistake.reality}
                </p>
                <p className="ml-6 font-body text-sm text-granito/70">
                  <span className="font-ui text-xs font-medium text-musgo-600">
                    Fix:{" "}
                  </span>
                  {mistake.fix}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <ProTip variant="money-saver">
            <strong>Skip the organized tours.</strong> They cost €60-100+ per person,
            follow a fixed schedule, give you less time at each palace, and skip
            Regaleira. The train + bus 434 is easy to navigate independently and
            saves €30-60 per person.
          </ProTip>
        </ScrollReveal>

        <FAQSection faqs={dayTripFaqs} />
      </div>
    </>
  );
}
