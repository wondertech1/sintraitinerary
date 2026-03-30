import type { Metadata } from "next";
import {
  individualTickets,
  comboTickets,
  skipLineStrategies,
  ticketsFaqs,
} from "@/data/guides/practical/tickets";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import GuideHero from "@/components/guides/GuideHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQSection from "@/components/shared/FAQSection";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import TicketCard from "@/components/guides/TicketCard";
import { Check, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sintra Tickets & Passes 2026 — Prices, Combos & Skip-the-Line Tips",
  description:
    "Complete guide to Sintra palace tickets with 2026 prices, combo deals, and skip-the-line strategies. Find out which tickets are worth buying.",
  alternates: {
    canonical: "https://sintraitinerary.com/sintra-tickets-and-passes",
  },
};

export default function TicketsPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(ticketsFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Sintra Tickets & Passes", url: "/sintra-tickets-and-passes" },
          ]),
        ]}
      />

      <GuideHero
        category="Practical Guide"
        title="Sintra Tickets & Passes — 2026 Prices"
        subtitle="Every ticket option, combo deal, and skip-the-line strategy — so you don't waste money or time in queues."
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
              Buy tickets online at{" "}
              <strong>parquesdesintra.pt</strong> (Pena, Moorish, Monserrate, National) and{" "}
              <strong>regaleira.pt</strong> (Regaleira). Get the{" "}
              <strong>Pena + Moorish combo</strong> (€21, saves €3). Skip the Lisboa Card.
              Total for all 5 palaces: <strong>€66</strong> with combo.
            </p>
          </div>
        </ScrollReveal>

        {/* Individual Tickets */}
        <SectionHeading label="Prices" heading="Individual Ticket Prices (2026)" />

        <div className="mt-8 space-y-4">
          {individualTickets.map((ticket, i) => (
            <ScrollReveal key={ticket.palace} delay={i * 0.06}>
              <TicketCard ticket={ticket} />
            </ScrollReveal>
          ))}
        </div>

        <ContourDivider className="my-12" />

        {/* Combo Tickets */}
        <SectionHeading label="Combos" heading="Combo Tickets & Passes" />

        <div className="mt-8 space-y-4">
          {comboTickets.map((combo, i) => (
            <ScrollReveal key={combo.name} delay={i * 0.06}>
              <div
                className={`rounded-lg border p-5 ${
                  combo.recommended
                    ? "border-musgo-300 bg-musgo-50"
                    : "border-calcário-200 bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-base font-semibold text-granito">
                        {combo.name}
                      </h3>
                      {combo.recommended && (
                        <span className="rounded-full bg-musgo-200 px-2 py-0.5 font-ui text-[10px] font-medium text-musgo-700">
                          Recommended
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-display text-xl font-bold text-granito">
                      €{combo.adultPrice}
                    </span>
                    {combo.savings > 0 && (
                      <p className="font-ui text-xs text-musgo-600">
                        Saves €{combo.savings}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-2 flex flex-wrap gap-1.5">
                  {combo.includes.map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-1 rounded bg-white/80 px-2 py-0.5 font-ui text-[10px] text-granito/60"
                    >
                      <Check className="h-3 w-3 text-musgo-500" /> {item}
                    </span>
                  ))}
                </div>

                <p className="font-body text-sm text-granito/70">
                  {combo.bestFor}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Skip the Line */}
        <SectionHeading label="Beat the Crowds" heading="Skip-the-Line Strategies" />

        <div className="mt-8 space-y-3">
          {skipLineStrategies.map((strategy, i) => (
            <ScrollReveal key={strategy.strategy} delay={i * 0.06}>
              <div className="rounded-lg border border-calcário-200 bg-white p-5">
                <div className="flex items-start gap-3 mb-2">
                  <Zap
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      strategy.effectiveness === "high"
                        ? "text-musgo-500"
                        : "text-palácio-500"
                    }`}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-sm font-semibold text-granito">
                        {strategy.strategy}
                      </h3>
                      <span
                        className={`rounded-full px-2 py-0.5 font-ui text-[10px] font-medium ${
                          strategy.effectiveness === "high"
                            ? "bg-musgo-100 text-musgo-700"
                            : "bg-palácio-100 text-palácio-700"
                        }`}
                      >
                        {strategy.effectiveness} impact
                      </span>
                    </div>
                    <p className="mt-1 font-body text-sm leading-relaxed text-granito/70">
                      {strategy.details}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pro Tips */}
        <ScrollReveal>
          <ProTip variant="money-saver">
            <strong>Best strategy:</strong> Buy Pena + Moorish combo online (€19), Regaleira
            separately online (€12). We followed this exact route and it worked perfectly — Pena first thing, walked 15 min downhill to Moorish Castle through a beautiful forest path,
            bus back to town, then walked to Regaleira. Total: €31 for the three best experiences.
          </ProTip>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-6 rounded-lg border border-palácio-200 bg-palácio-50 p-6 text-center">
            <p className="font-display text-lg font-semibold text-granito mb-2">
              Know what tickets you need?
            </p>
            <p className="font-body text-sm text-granito/70 mb-4">
              See our pre-planned itineraries with the exact tickets for each route.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/1-day-sintra-itinerary"
                className="inline-flex items-center gap-1.5 rounded-full bg-névoa-600 px-5 py-2 font-ui text-sm font-medium text-white hover:bg-névoa-700 transition-colors"
              >
                1-Day Itinerary <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/guides/which-sintra-palaces-to-visit"
                className="inline-flex items-center gap-1.5 rounded-full border border-névoa-300 px-5 py-2 font-ui text-sm font-medium text-névoa-700 hover:bg-névoa-50 transition-colors"
              >
                Which Palaces to Visit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <RelatedGuides links={[
          { label: "Which Palaces to Visit", href: "/guides/which-sintra-palaces-to-visit", description: "Decide which tickets to buy" },
          { label: "Sintra on a Budget", href: "/sintra-on-a-budget", description: "More money-saving strategies" },
          { label: "1-Day Itinerary", href: "/1-day-sintra-itinerary", description: "See which tickets each route needs" },
          { label: "Travel Tips", href: "/sintra-travel-tips", description: "35+ essential tips" },
        ]} />

        <FAQSection faqs={ticketsFaqs} />
      </div>
    </>
  );
}
