"use client";

import { PalaceGuideData } from "@/data/guides/palaces/types";
import GuideHero from "@/components/guides/GuideHero";
import PalaceInfoBox from "@/components/guides/PalaceInfoBox";
import TicketInfo from "@/components/guides/TicketInfo";
import PhotoSpotCard from "@/components/guides/PhotoSpotCard";
import FAQSection from "@/components/shared/FAQSection";
import ProTip from "@/components/shared/ProTip";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ContourDivider from "@/components/decorative/ContourDivider";
import { ThumbsUp, ThumbsDown, Minus } from "lucide-react";

interface PalaceGuidePageProps {
  data: PalaceGuideData;
}

const verdictConfig = {
  "worth-it": { icon: ThumbsUp, label: "Worth It", color: "text-musgo-700", bg: "bg-musgo-50", border: "border-musgo-400" },
  conditional: { icon: Minus, label: "Conditional", color: "text-palacio-700", bg: "bg-palacio-50", border: "border-palacio-400" },
  "skip-it": { icon: ThumbsDown, label: "Skip It", color: "text-ferrugem-700", bg: "bg-ferrugem-50", border: "border-ferrugem-400" },
};

export default function PalaceGuidePage({ data }: PalaceGuidePageProps) {
  const vc = verdictConfig[data.verdict.rating];
  const VerdictIcon = vc.icon;

  return (
    <>
      <GuideHero
        category="Palace Guide"
        title={data.name}
        subtitle={data.subtitle}
        lastVerified={data.lastVerified}
      />

      <div className="mx-auto max-w-[900px] px-6 py-10">
        {/* Two-column: verdict + quick facts */}
        <div className="grid gap-6 md:grid-cols-[1fr_300px]">
          <div>
            {/* Verdict box */}
            <ScrollReveal>
              <div className={`rounded-[2px] border-l-3 ${vc.border} ${vc.bg} p-5`}>
                <div className="flex items-center gap-2">
                  <VerdictIcon className={`h-5 w-5 ${vc.color}`} />
                  <span className={`font-[family-name:var(--font-ui)] text-[13px] font-semibold ${vc.color}`}>
                    {vc.label}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-granito">
                  {data.verdict.summary}
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2 text-[13px]">
                  <div>
                    <span className="font-[family-name:var(--font-ui)] text-[11px] font-medium text-musgo-600">
                      Best for:
                    </span>
                    <p className="text-granito-light">{data.verdict.bestFor}</p>
                  </div>
                  <div>
                    <span className="font-[family-name:var(--font-ui)] text-[11px] font-medium text-ferrugem-600">
                      Skip if:
                    </span>
                    <p className="text-granito-light">{data.verdict.skipIf}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Introduction */}
            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-sm leading-relaxed text-granito-light">
                {data.introduction}
              </p>
            </ScrollReveal>
          </div>

          {/* Quick facts sidebar */}
          <ScrollReveal delay={0.15}>
            <PalaceInfoBox {...data.quickFacts} />
          </ScrollReveal>
        </div>

        <ContourDivider className="mt-10 text-calcario-400" />

        {/* Content sections */}
        {data.sections.map((section, i) => (
          <ScrollReveal key={section.id} delay={i * 0.05}>
            <section id={section.id} className="mt-10">
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-600 text-granito">
                {section.title}
              </h2>
              <div className="prose-sintra text-sm leading-relaxed text-granito-light">
                {section.content.split("\n\n").map((para, pi) => {
                  if (para.startsWith("**") && para.includes("**")) {
                    // Handle bold-prefixed paragraphs
                    const parts = para.split("**");
                    return (
                      <p key={pi} className="mt-3">
                        {parts.map((part, partIdx) =>
                          partIdx % 2 === 1 ? (
                            <strong key={partIdx} className="font-600 text-granito">
                              {part}
                            </strong>
                          ) : (
                            <span key={partIdx}>{part}</span>
                          )
                        )}
                      </p>
                    );
                  }
                  return (
                    <p key={pi} className="mt-3 first:mt-0">
                      {para.split("**").map((part, partIdx) =>
                        partIdx % 2 === 1 ? (
                          <strong key={partIdx} className="font-600 text-granito">
                            {part}
                          </strong>
                        ) : (
                          <span key={partIdx}>{part}</span>
                        )
                      )}
                    </p>
                  );
                })}
              </div>
            </section>
          </ScrollReveal>
        ))}

        <ContourDivider className="mt-10 text-calcario-400" />

        {/* Tickets */}
        <ScrollReveal>
          <TicketInfo
            intro={data.tickets.intro}
            options={data.tickets.options}
            buyOnline={data.tickets.buyOnline}
            comboDeals={data.tickets.comboDeals}
          />
        </ScrollReveal>

        <ContourDivider className="mt-10 text-calcario-400" />

        {/* Photo spots */}
        <section className="mt-10">
          <h2 className="mb-5 font-[family-name:var(--font-display)] text-2xl font-600 text-granito">
            Best Photo Spots
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.photoSpots.map((spot, i) => (
              <ScrollReveal key={spot.name} delay={i * 0.06}>
                <PhotoSpotCard
                  name={spot.name}
                  description={spot.description}
                  bestTime={spot.bestTime}
                  crowdTip={spot.crowdTip}
                />
              </ScrollReveal>
            ))}
          </div>
        </section>

        <ContourDivider className="mt-10 text-calcario-400" />

        {/* Practical tips */}
        <section className="mt-10">
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-600 text-granito">
            Practical Tips
          </h2>
          <ul className="space-y-2">
            {data.practicalTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-granito-light">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-palacio-400" />
                {tip}
              </li>
            ))}
          </ul>
        </section>

        {/* Related itineraries CTA */}
        <ScrollReveal>
          <div className="mt-10">
            <ProTip variant="palace-secret">
              See where {data.name} fits in our recommended routes: check the{" "}
              <a href="/1-day-sintra-itinerary" className="underline underline-offset-2">
                1-Day Itinerary
              </a>{" "}
              or{" "}
              <a href="/2-day-sintra-itinerary" className="underline underline-offset-2">
                2-Day Itinerary
              </a>{" "}
              for the full schedule.
            </ProTip>
          </div>
        </ScrollReveal>

        <FAQSection faqs={data.faqs} />
      </div>
    </>
  );
}
