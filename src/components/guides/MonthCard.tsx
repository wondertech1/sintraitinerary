import type { MonthData } from "@/data/guides/practical/best-time";
import { Thermometer, CloudRain, Users } from "lucide-react";

const verdictStyles: Record<string, { bg: string; text: string }> = {
  best: { bg: "bg-musgo-100", text: "text-musgo-700" },
  good: { bg: "bg-palácio-100", text: "text-palácio-700" },
  mixed: { bg: "bg-névoa-100", text: "text-névoa-700" },
  avoid: { bg: "bg-ferrugem-100", text: "text-ferrugem-700" },
};

function CrowdDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i < level ? "bg-ferrugem-500" : "bg-calcário-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function MonthCard({ data }: { data: MonthData }) {
  const verdict = verdictStyles[data.verdict];

  return (
    <div className="specimen-border rounded-lg bg-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-calcário-200 px-4 py-2.5">
        <h3 className="font-display text-base font-semibold text-granito">
          {data.month}
        </h3>
        <span
          className={`rounded-full px-2.5 py-0.5 font-ui text-[10px] font-medium uppercase tracking-wider ${verdict.bg} ${verdict.text}`}
        >
          {data.verdict}
        </span>
      </div>

      {/* Body */}
      <div className="p-4">
        <p className="mb-3 font-body text-sm leading-relaxed text-granito/80">
          {data.verdictText}
        </p>

        {/* Stats */}
        <div className="mb-3 flex flex-wrap gap-3 text-xs font-ui text-granito/60">
          <span className="flex items-center gap-1">
            <Thermometer className="h-3 w-3" />
            {data.avgTempLow}–{data.avgTempHigh}°C
          </span>
          <span className="flex items-center gap-1">
            <CloudRain className="h-3 w-3" />
            {data.rainyDays} rainy days
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3 w-3" />
            <CrowdDots level={data.crowdLevel} />
          </span>
        </div>

        {/* Highlights */}
        <ul className="space-y-1">
          {data.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-xs font-body text-granito/70"
            >
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-palácio-400" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
