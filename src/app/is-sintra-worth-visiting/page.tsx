import type { Metadata } from "next";
import {
  prosOfVisiting,
  consOfVisiting,
  visitorTypes,
  myths,
  worthVisitingFaqs,
} from "@/data/guides/long-tail/worth-visiting";
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
  ThumbsUp,
  ThumbsDown,
  Check,
  X,
  Minus,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is Sintra Worth Visiting? (2026) — Honest Pros, Cons & Verdict",
  description:
    "Honest assessment of whether Sintra is worth visiting: pros, cons, myths debunked, and which types of travelers will love (or hate) it.",
  alternates: {
    canonical: "https://sintraitinerary.com/is-sintra-worth-visiting",
  },
};

const verdictStyles = {
  "must-visit": {
    bg: "bg-musgo-100",
    text: "text-musgo-700",
    icon: Check,
    label: "Must Visit",
  },
  recommended: {
    bg: "bg-palácio-100",
    text: "text-palácio-700",
    icon: ThumbsUp,
    label: "Recommended",
  },
  skip: {
    bg: "bg-ferrugem-100",
    text: "text-ferrugem-700",
    icon: X,
    label: "Skip It",
  },
};

export default function WorthVisitingPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(worthVisitingFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Is Sintra Worth Visiting?", url: "/is-sintra-worth-visiting" },
          ]),
        ]}
      />

      <GuideHero
        category="Decision Helper"
        title="Is Sintra Worth Visiting?"
        subtitle="The honest answer with real pros, real cons, and who should (and shouldn't) make the trip."
        lastVerified="March 2026"
      />

      <div className="mx-auto max-w-4xl px-4 pb-20">
        {/* The Verdict */}
        <ScrollReveal>
          <div className="mb-12 rounded-lg border-2 border-musgo-300 bg-musgo-50 p-6">
            <p className="font-ui text-xs font-medium uppercase tracking-wider text-musgo-600 mb-2">
              Our Verdict
            </p>
            <p className="font-display text-xl font-bold text-granito mb-2">
              Yes — Sintra is genuinely worth visiting.
            </p>
            <p className="font-body text-granito/80 leading-relaxed">
              It&apos;s one of the most unique destinations in Europe. Quinta da
              Regaleira&apos;s Initiation Well has no equivalent anywhere. The variety of
              palaces, castles, and landscapes in a small area is exceptional.
              We&apos;ve visited across all four seasons and it never disappoints.{" "}
              <strong>The only caveat:</strong> avoid peak summer crowds or go very
              early. And manage expectations about Pena Palace&apos;s interior.
            </p>
          </div>
        </ScrollReveal>

        {/* Pros and Cons */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {/* Pros */}
          <div>
            <SectionHeading label="Pros" heading="Why It's Worth It" />
            <div className="mt-6 space-y-3">
              {prosOfVisiting.map((pro, i) => (
                <ScrollReveal key={pro.point} delay={i * 0.05}>
                  <div className="rounded-lg border border-musgo-200 bg-musgo-50 p-4">
                    <div className="flex items-start gap-2 mb-1">
                      <ThumbsUp className="mt-0.5 h-3.5 w-3.5 shrink-0 text-musgo-600" />
                      <h3 className="font-display text-sm font-semibold text-granito">
                        {pro.point}
                      </h3>
                    </div>
                    <p className="ml-5.5 font-body text-xs leading-relaxed text-granito/70">
                      {pro.detail}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Cons */}
          <div>
            <SectionHeading label="Cons" heading="The Downsides" />
            <div className="mt-6 space-y-3">
              {consOfVisiting.map((con, i) => (
                <ScrollReveal key={con.point} delay={i * 0.05}>
                  <div className="rounded-lg border border-ferrugem-200 bg-ferrugem-50 p-4">
                    <div className="flex items-start gap-2 mb-1">
                      <ThumbsDown className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ferrugem-600" />
                      <h3 className="font-display text-sm font-semibold text-granito">
                        {con.point}
                      </h3>
                    </div>
                    <p className="ml-5.5 font-body text-xs leading-relaxed text-granito/70">
                      {con.detail}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <ContourDivider className="my-12" />

        {/* Who Should Visit */}
        <SectionHeading label="Who It's For" heading="Should YOU Visit Sintra?" />

        <div className="mt-8 space-y-3">
          {visitorTypes.map((vt, i) => {
            const style = verdictStyles[vt.verdict];
            const Icon = style.icon;
            return (
              <ScrollReveal key={vt.type} delay={i * 0.05}>
                <div className="flex items-start gap-4 rounded-lg border border-calcário-200 bg-white p-4">
                  <div className="shrink-0 flex flex-col items-center gap-1">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full ${style.bg}`}
                    >
                      <Icon className={`h-3.5 w-3.5 ${style.text}`} />
                    </div>
                    <span
                      className={`font-ui text-[9px] font-medium ${style.text}`}
                    >
                      {style.label}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-granito">
                      {vt.type}
                    </h3>
                    <p className="mt-0.5 font-body text-sm text-granito/70">
                      {vt.reason}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Myths */}
        <SectionHeading label="Myth vs Reality" heading="Common Myths Debunked" />

        <div className="mt-8 space-y-4">
          {myths.map((myth, i) => (
            <ScrollReveal key={myth.myth} delay={i * 0.05}>
              <div className="specimen-border rounded-lg bg-white p-5">
                <div className="flex items-start gap-2 mb-2">
                  <Minus className="mt-1 h-3 w-3 shrink-0 text-ferrugem-500" />
                  <div>
                    <p className="font-display text-sm font-semibold text-granito">
                      <span className="line-through decoration-ferrugem-300">
                        {myth.myth}
                      </span>
                    </p>
                  </div>
                </div>
                <p className="ml-5 font-body text-sm leading-relaxed text-granito/70">
                  <span className="font-ui text-xs font-medium text-musgo-600">
                    Reality:{" "}
                  </span>
                  {myth.reality}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <ProTip variant="tip">
            <strong>The key insight:</strong> Sintra&apos;s reputation is built on Pena
            Palace, but Quinta da Regaleira is the better experience. Set your
            expectations correctly and you&apos;ll love Sintra. Go expecting Pena to be
            the highlight and you might be underwhelmed.
          </ProTip>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-8 rounded-lg border border-palácio-200 bg-palácio-50 p-6 text-center">
            <p className="font-display text-lg font-semibold text-granito mb-2">
              Convinced? Start planning.
            </p>
            <p className="font-body text-sm text-granito/70 mb-4">
              Our itineraries take the guesswork out of a Sintra day trip.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/lisbon-to-sintra-day-trip"
                className="inline-flex items-center gap-1.5 rounded-full bg-névoa-600 px-5 py-2 font-ui text-sm font-medium text-white hover:bg-névoa-700 transition-colors"
              >
                Day Trip Guide <ArrowRight className="h-4 w-4" />
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
          { label: "Day Trip from Lisbon", href: "/lisbon-to-sintra-day-trip", description: "Step-by-step planning guide" },
          { label: "Sintra vs Cascais", href: "/sintra-vs-cascais", description: "Compare the two day trips" },
          { label: "Best Time to Visit", href: "/best-time-to-visit-sintra", description: "When to go for the best experience" },
          { label: "Travel Tips", href: "/sintra-travel-tips", description: "35+ essential tips" },
        ]} />

        <FAQSection faqs={worthVisitingFaqs} />
      </div>
    </>
  );
}
