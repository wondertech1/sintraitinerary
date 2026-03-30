import { Clock, Euro, Users, ThumbsUp, ThumbsDown, Minus, AlertTriangle } from "lucide-react";
import { Verdict } from "@/data/itineraries/types";

interface StopCardProps {
  name: string;
  description: string;
  duration: string;
  cost: string;
  crowdLevel?: 1 | 2 | 3 | 4 | 5;
  verdict: Verdict;
  verdictText: string;
  tip?: string;
  skipIf?: string;
}

const verdictConfig: Record<
  Verdict,
  { icon: typeof ThumbsUp; color: string; bg: string }
> = {
  "worth-it": { icon: ThumbsUp, color: "text-musgo-600", bg: "bg-musgo-50" },
  conditional: { icon: Minus, color: "text-palacio-600", bg: "bg-palacio-50" },
  "skip-it": { icon: ThumbsDown, color: "text-ferrugem-600", bg: "bg-ferrugem-50" },
};

const crowdLabels = ["", "Empty", "Quiet", "Moderate", "Busy", "Packed"];

export default function StopCard({
  name,
  description,
  duration,
  cost,
  crowdLevel,
  verdict,
  verdictText,
  tip,
  skipIf,
}: StopCardProps) {
  const vc = verdictConfig[verdict];
  const Icon = vc.icon;

  return (
    <article className="rounded-[2px] border border-calcario-300 bg-nevoeiro p-5 transition-all duration-300 hover:border-nevoa-300">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-600 text-granito">
          {name}
        </h3>
        <div className={`flex items-center gap-1.5 rounded-sm ${vc.bg} px-2.5 py-1`}>
          <Icon className={`h-3.5 w-3.5 ${vc.color}`} />
          <span className={`font-[family-name:var(--font-ui)] text-[11px] font-medium ${vc.color}`}>
            {verdictText}
          </span>
        </div>
      </div>

      {/* Stats row */}
      <div className="mt-2 flex flex-wrap gap-3 font-[family-name:var(--font-ui)] text-[12px] text-nevoa-600">
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {duration}
        </span>
        <span className="flex items-center gap-1">
          <Euro className="h-3.5 w-3.5" />
          {cost}
        </span>
        {crowdLevel && (
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {crowdLabels[crowdLevel]}
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full ${
                    i < crowdLevel ? "bg-nevoa-500" : "bg-calcario-300"
                  }`}
                />
              ))}
            </span>
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-granito-light">{description}</p>

      {/* Tip */}
      {tip && (
        <div className="mt-3 border-l-2 border-musgo-400 bg-musgo-50 rounded-r-sm px-3 py-2">
          <p className="text-[13px] leading-relaxed text-granito-light">{tip}</p>
        </div>
      )}

      {/* Skip if */}
      {skipIf && (
        <div className="mt-2 flex items-start gap-1.5 text-[12px] text-ferrugem-600">
          <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <span>Skip if: {skipIf}</span>
        </div>
      )}
    </article>
  );
}
