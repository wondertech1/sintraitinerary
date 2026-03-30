import { Clock, Euro, Users, ThumbsUp, ThumbsDown, Minus, Sun, AlertTriangle } from "lucide-react";

type Verdict = "worth-it" | "conditional" | "skip-it";

interface AttractionCardProps {
  rank: number;
  name: string;
  type: string;
  description: string;
  duration: string;
  cost: string;
  crowdLevel: 1 | 2 | 3 | 4 | 5;
  verdict: Verdict;
  verdictText: string;
  bestTime: string;
  tip?: string;
  id?: string;
}

const verdictConfig: Record<
  Verdict,
  { icon: typeof ThumbsUp; color: string; bg: string }
> = {
  "worth-it": { icon: ThumbsUp, color: "text-musgo-600", bg: "bg-musgo-50" },
  conditional: { icon: Minus, color: "text-palacio-600", bg: "bg-palacio-50" },
  "skip-it": { icon: ThumbsDown, color: "text-ferrugem-600", bg: "bg-ferrugem-50" },
};

const typeColors: Record<string, string> = {
  palace: "bg-palacio-100 text-palacio-700",
  nature: "bg-musgo-100 text-musgo-700",
  culture: "bg-nevoa-100 text-nevoa-700",
  beach: "bg-calcario-200 text-ferrugem-700",
};

const crowdLabels = ["", "Empty", "Quiet", "Moderate", "Busy", "Packed"];

export default function AttractionCard({
  rank,
  name,
  type,
  description,
  duration,
  cost,
  crowdLevel,
  verdict,
  verdictText,
  bestTime,
  tip,
  id,
}: AttractionCardProps) {
  const vc = verdictConfig[verdict];
  const Icon = vc.icon;

  return (
    <article
      id={id}
      className="relative rounded-[2px] border border-calcario-300 bg-nevoeiro p-5 transition-all duration-300 hover:border-nevoa-300"
    >
      {/* Rank badge */}
      <span className="absolute -top-3 -left-2 flex h-7 w-7 items-center justify-center rounded-full bg-nevoa-800 font-[family-name:var(--font-ui)] text-[12px] font-semibold text-white">
        {rank}
      </span>

      <div className="flex flex-wrap items-start justify-between gap-2 pl-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-600 text-granito">
              {name}
            </h3>
            <span className={`rounded-sm px-2 py-0.5 font-[family-name:var(--font-ui)] text-[10px] font-medium uppercase tracking-wider ${typeColors[type] || typeColors.culture}`}>
              {type}
            </span>
          </div>
        </div>
        <div className={`flex items-center gap-1.5 rounded-sm ${vc.bg} px-2.5 py-1`}>
          <Icon className={`h-3.5 w-3.5 ${vc.color}`} />
          <span className={`font-[family-name:var(--font-ui)] text-[11px] font-medium ${vc.color}`}>
            {verdictText}
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-3 flex flex-wrap gap-3 pl-4 font-[family-name:var(--font-ui)] text-[12px] text-nevoa-600">
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {duration}
        </span>
        <span className="flex items-center gap-1">
          <Euro className="h-3.5 w-3.5" />
          {cost}
        </span>
        <span className="flex items-center gap-1">
          <Users className="h-3.5 w-3.5" />
          {crowdLabels[crowdLevel]}
        </span>
        <span className="flex items-center gap-1">
          <Sun className="h-3.5 w-3.5" />
          {bestTime}
        </span>
      </div>

      {/* Description */}
      <p className="mt-3 pl-4 text-sm leading-relaxed text-granito-light">
        {description}
      </p>

      {/* Tip */}
      {tip && (
        <div className="mt-3 ml-4 border-l-2 border-musgo-400 bg-musgo-50 rounded-r-sm px-3 py-2">
          <div className="flex items-start gap-1.5">
            <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-musgo-600" />
            <p className="text-[13px] leading-relaxed text-granito-light">{tip}</p>
          </div>
        </div>
      )}
    </article>
  );
}
