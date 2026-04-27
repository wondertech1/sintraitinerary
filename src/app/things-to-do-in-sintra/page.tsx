import type { Metadata } from "next";
import { attractions, comparisonData, thingsToDoFaqs } from "@/data/guides/things-to-do";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import AttractionCard from "@/components/guides/AttractionCard";
import ComparisonTable from "@/components/guides/ComparisonTable";
import FAQSection from "@/components/shared/FAQSection";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ContourDivider from "@/components/decorative/ContourDivider";
import RelatedGuides from "@/components/shared/RelatedGuides";
import JsonLd from "@/components/shared/JsonLd";
import { touristAttractionSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "10 Best Things to Do in Sintra — Ranked with Candid Verdicts",
  description:
    "Every Sintra attraction ranked with clear verdicts: worth it, conditional, or skip it. Palace comparison table, crowd levels, real costs, and practical tips.",
  alternates: { canonical: "https://sintraitinerary.com/things-to-do-in-sintra" },
};

const palaces = attractions.filter((a) => a.type === "palace");
const nature = attractions.filter((a) => a.type === "nature" || a.type === "beach");
const culture = attractions.filter((a) => a.type === "culture");

export default function ThingsToDoPage() {
  return (
    <>
      <JsonLd
        data={[
          touristAttractionSchema({
            name: "Things to Do in Sintra",
            description: "Top attractions in Sintra, Portugal ranked with candid verdicts.",
            url: "/things-to-do-in-sintra",
          }),
          faqSchema(thingsToDoFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Things to Do in Sintra", url: "/things-to-do-in-sintra" },
          ]),
        ]}
      />

      <GuideHero
        category="Guide"
        title="Things to Do in Sintra"
        subtitle="Every attraction ranked — with straight verdicts on what's worth your time and money, based on our visits across every season"
        lastVerified="January 2026"
      />

      <div className="mx-auto max-w-[900px] px-6 py-10">
        {/* Quick answer box */}
        <ScrollReveal>
          <div className="rounded-[2px] border border-palacio-300 bg-palacio-50 p-5">
            <h2 className="font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-[0.15em] text-palacio-700">
              Quick Answer
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-granito">
              If you only have time for two things:{" "}
              <strong>Quinta da Regaleira</strong> (the Initiation Well is unique in Europe) and the{" "}
              <strong>Moorish Castle</strong> (best views, lowest crowds, cheapest ticket).
              Pena Palace is photogenic but overrated for the price and crowds.
            </p>
          </div>
        </ScrollReveal>

        {/* Palace comparison table */}
        <GuideSection title="Which Palaces to Visit — At a Glance">
          <ScrollReveal>
            <ComparisonTable
              headers={comparisonData.headers}
              rows={comparisonData.rows}
            />
          </ScrollReveal>
        </GuideSection>

        <ContourDivider className="mt-10 text-calcario-400" />

        {/* Palaces section */}
        <GuideSection id="palaces" title="Palaces & Historic Sites">
          <div className="space-y-6">
            {palaces.map((a, i) => (
              <ScrollReveal key={a.id} delay={i * 0.05}>
                <AttractionCard
                  id={a.id}
                  rank={a.rank}
                  name={a.name}
                  type={a.type}
                  description={a.description}
                  duration={a.duration}
                  cost={a.cost}
                  crowdLevel={a.crowdLevel}
                  verdict={a.verdict}
                  verdictText={a.verdictText}
                  bestTime={a.bestTime}
                  tip={a.tip}
                />
              </ScrollReveal>
            ))}
          </div>
        </GuideSection>

        {/* Nature & Beaches */}
        <GuideSection id="nature" title="Nature & Beaches">
          <div className="space-y-6">
            {nature.map((a, i) => (
              <ScrollReveal key={a.id} delay={i * 0.05}>
                <AttractionCard
                  id={a.id}
                  rank={a.rank}
                  name={a.name}
                  type={a.type}
                  description={a.description}
                  duration={a.duration}
                  cost={a.cost}
                  crowdLevel={a.crowdLevel}
                  verdict={a.verdict}
                  verdictText={a.verdictText}
                  bestTime={a.bestTime}
                  tip={a.tip}
                />
              </ScrollReveal>
            ))}
          </div>
        </GuideSection>

        {/* Town & Culture */}
        <GuideSection id="culture" title="Town & Culture">
          <div className="space-y-6">
            {culture.map((a, i) => (
              <ScrollReveal key={a.id} delay={i * 0.05}>
                <AttractionCard
                  id={a.id}
                  rank={a.rank}
                  name={a.name}
                  type={a.type}
                  description={a.description}
                  duration={a.duration}
                  cost={a.cost}
                  crowdLevel={a.crowdLevel}
                  verdict={a.verdict}
                  verdictText={a.verdictText}
                  bestTime={a.bestTime}
                  tip={a.tip}
                />
              </ScrollReveal>
            ))}
          </div>
        </GuideSection>

        <RelatedGuides links={[
          { label: "Which Palaces to Visit", href: "/guides/which-sintra-palaces-to-visit", description: "Ranked comparison of all 5 palaces" },
          { label: "Sintra Tickets & Prices", href: "/sintra-tickets-and-passes", description: "2026 prices and combo deals" },
          { label: "Day Trip from Lisbon", href: "/lisbon-to-sintra-day-trip", description: "Step-by-step planning guide" },
          { label: "Photography Guide", href: "/sintra-photography-guide", description: "Best photo spots ranked" },
        ]} />

        <FAQSection faqs={thingsToDoFaqs} />
      </div>
    </>
  );
}
