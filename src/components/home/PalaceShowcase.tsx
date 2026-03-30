"use client";

import Link from "next/link";
import { Clock, Euro, ThumbsUp, ThumbsDown, Minus } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";

type Verdict = "worth-it" | "conditional" | "skip-it";

interface Palace {
  name: string;
  oneLiner: string;
  duration: string;
  cost: string;
  verdict: Verdict;
  verdictText: string;
  href: string;
}

const palaces: Palace[] = [
  {
    name: "Pena Palace",
    oneLiner:
      "The colorful hilltop icon. Grounds-only ticket gets you 80% of the experience — skip the interior.",
    duration: "2–3 hrs",
    cost: "€14",
    verdict: "conditional",
    verdictText: "Grounds only — skip the interior",
    href: "/things-to-do-in-sintra#pena-palace",
  },
  {
    name: "Quinta da Regaleira",
    oneLiner:
      "The Initiation Well alone is worth the trip. Arrive before 10am or the garden paths become a queue.",
    duration: "2 hrs",
    cost: "€12",
    verdict: "worth-it",
    verdictText: "Don't miss this one",
    href: "/things-to-do-in-sintra#quinta-da-regaleira",
  },
  {
    name: "Moorish Castle",
    oneLiner:
      "A 20-minute detour from Pena with better views and zero queues. The underrated pick.",
    duration: "45 min",
    cost: "€8",
    verdict: "worth-it",
    verdictText: "Best value in Sintra",
    href: "/things-to-do-in-sintra#moorish-castle",
  },
];

const verdictConfig: Record<
  Verdict,
  { icon: typeof ThumbsUp; color: string; bg: string }
> = {
  "worth-it": { icon: ThumbsUp, color: "text-musgo-600", bg: "bg-musgo-50" },
  conditional: { icon: Minus, color: "text-palacio-600", bg: "bg-palacio-50" },
  "skip-it": { icon: ThumbsDown, color: "text-ferrugem-600", bg: "bg-ferrugem-50" },
};

export default function PalaceShowcase() {
  return (
    <section className="bg-calcario-50 py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <SectionHeading
            label="Top Attractions"
            heading="Which Palaces Are Worth It?"
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {palaces.map((palace, i) => {
            const vc = verdictConfig[palace.verdict];
            const Icon = vc.icon;

            return (
              <ScrollReveal key={palace.name} delay={i * 0.08}>
                <Link href={palace.href} className="group block h-full">
                  <article className="flex h-full flex-col rounded-[2px] border border-calcario-300 bg-nevoeiro p-5 transition-all duration-300 hover:border-nevoa-400 hover:shadow-sm">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-600 text-granito">
                      {palace.name}
                    </h3>

                    <p className="mt-2 flex-1 text-sm leading-relaxed text-granito-light">
                      {palace.oneLiner}
                    </p>

                    {/* Stats */}
                    <div className="mt-4 flex gap-4 text-[12px] text-nevoa-600">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {palace.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Euro className="h-3.5 w-3.5" />
                        {palace.cost}
                      </span>
                    </div>

                    {/* Verdict badge */}
                    <div className={`mt-4 flex items-center gap-2 rounded-sm ${vc.bg} px-3 py-2`}>
                      <Icon className={`h-4 w-4 ${vc.color}`} />
                      <span className={`font-[family-name:var(--font-ui)] text-[12px] font-medium ${vc.color}`}>
                        {palace.verdictText}
                      </span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="mt-8 text-center">
            <Link
              href="/things-to-do-in-sintra"
              className="font-[family-name:var(--font-ui)] text-[13px] font-medium text-nevoa-600 underline decoration-calcario-400 underline-offset-4 transition-colors hover:text-granito"
            >
              See all attractions + comparison table
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
