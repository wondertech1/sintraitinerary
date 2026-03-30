import { ThumbsUp, ThumbsDown, Minus } from "lucide-react";
import { Verdict } from "@/data/itineraries/types";

interface VerdictBoxProps {
  question: string;
  verdict: Verdict;
  explanation: string;
}

const verdictConfig: Record<
  Verdict,
  { icon: typeof ThumbsUp; label: string; color: string; bg: string; border: string }
> = {
  "worth-it": {
    icon: ThumbsUp,
    label: "Worth It",
    color: "text-musgo-700",
    bg: "bg-musgo-50",
    border: "border-musgo-400",
  },
  conditional: {
    icon: Minus,
    label: "Depends",
    color: "text-palacio-700",
    bg: "bg-palacio-50",
    border: "border-palacio-400",
  },
  "skip-it": {
    icon: ThumbsDown,
    label: "Skip It",
    color: "text-ferrugem-700",
    bg: "bg-ferrugem-50",
    border: "border-ferrugem-400",
  },
};

export default function VerdictBox({
  question,
  verdict,
  explanation,
}: VerdictBoxProps) {
  const vc = verdictConfig[verdict];
  const Icon = vc.icon;

  return (
    <div className={`rounded-[2px] border-l-3 ${vc.border} ${vc.bg} p-4`}>
      <p className="font-[family-name:var(--font-display)] text-sm font-600 text-granito">
        {question}
      </p>
      <div className="mt-2 flex items-center gap-2">
        <Icon className={`h-4 w-4 ${vc.color}`} />
        <span className={`font-[family-name:var(--font-ui)] text-[12px] font-semibold ${vc.color}`}>
          {vc.label}
        </span>
      </div>
      <p className="mt-1 text-[13px] leading-relaxed text-granito-light">
        {explanation}
      </p>
    </div>
  );
}
