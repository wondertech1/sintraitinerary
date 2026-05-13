import type { Metadata } from "next";
import {
  beforeYouGo,
  routeOptions,
  commonMistakes,
  dayTripFaqs,
} from "@/data/guides/long-tail/day-trip";
import {
  transportOptions,
  gettingAroundSintra,
  gettingHereFaqs,
} from "@/data/guides/getting-here";
import JsonLd from "@/components/shared/JsonLd";
import { touristTripSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import TransportCard from "@/components/guides/TransportCard";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQSection from "@/components/shared/FAQSection";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import RelatedGuides from "@/components/shared/RelatedGuides";
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
    "Lisbon to Sintra Day Trip (2026) — Complete Planning Guide with Routes & Transport",
  description:
    "Step-by-step guide to planning a Sintra day trip from Lisbon. Train, bus, Uber compared, two tested routes with exact timelines, costs, and common mistakes to avoid.",
  alternates: {
    canonical: "https://sintraitinerary.com/lisbon-to-sintra-day-trip",
  },
};

const allFaqs = [...dayTripFaqs, ...gettingHereFaqs];

export default function DayTripPage() {
  return (
    <>
      <JsonLd
        data={[
          touristTripSchema({
            name: "Lisbon to Sintra Day Trip",
            description:
              "Complete planning guide for a day trip from Lisbon to Sintra with transport options, two tested routes and timelines.",
            url: "/lisbon-to-sintra-day-trip",
            days: 1,
          }),
          faqSchema(allFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Lisbon to Sintra Day Trip", url: "/lisbon-to-sintra-day-trip" },
          ]),
        ]}
      />

      <GuideHero
        category="Day Trip Planning"
        title="Lisbon to Sintra Day Trip"
        subtitle="Everything you need: how to get there, how to get around, two tested routes with minute-by-minute timelines, and the mistakes to avoid."
        lastVerified="May 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        {/* Quick Answer */}
        <ScrollReveal>
          <div className="mb-12 rounded-lg border border-musgo-200 bg-musgo-50 p-6">
            <p className="font-ui text-xs font-medium uppercase tracking-wider text-musgo-600 mb-2">
              Quick Answer
            </p>
            <p className="font-body text-granito leading-relaxed">
              <strong>Train from Rossio</strong> (40 min, €2.35). Leave by{" "}
              <strong>7:30-8:00am</strong>. See{" "}
              <strong>Pena + Moorish Castle + Regaleira</strong>. Lunch in town.
              Back in Lisbon by <strong>5pm</strong>. Total cost:{" "}
              <strong>€45-55</strong> per person. Buy tickets online the night before.
            </p>
          </div>
        </ScrollReveal>

        {/* ===== GETTING THERE ===== */}
        <SectionHeading label="Transport" heading="Getting to Sintra from Lisbon" />

        <div className="mt-8 space-y-6">
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

        <ContourDivider className="my-12" />

        {/* ===== GETTING AROUND ===== */}
        <SectionHeading label="Once There" heading="Getting Around Sintra" />

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

        <ContourDivider className="my-12" />

        {/* ===== BEFORE YOU GO ===== */}
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

        {/* ===== ROUTE OPTIONS ===== */}
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

        <RelatedGuides links={[
          { label: "Walking Routes", href: "/sintra-walking-routes", description: "Trails between palaces" },
          { label: "Sintra on a Budget", href: "/sintra-on-a-budget", description: "Money-saving transport tips" },
          { label: "Travel Tips", href: "/sintra-travel-tips", description: "35+ essential tips" },
          { label: "Day Trip from Porto", href: "/sintra-day-trip-from-porto", description: "Alternative origin city" },
        ]} />

        <FAQSection faqs={allFaqs} />
      </div>
    </>
  );
}
