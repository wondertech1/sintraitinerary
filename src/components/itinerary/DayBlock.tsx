import { ReactNode } from "react";

interface DayBlockProps {
  dayNumber: number;
  title: string;
  theme: string;
  summary: string;
  walkingKm: string;
  children: ReactNode;
}

export default function DayBlock({
  dayNumber,
  title,
  theme,
  summary,
  walkingKm,
  children,
}: DayBlockProps) {
  return (
    <section id={`day-${dayNumber}`} className="mt-14 first:mt-8">
      <div className="flex items-start gap-4">
        {/* Day badge */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-nevoa-400 bg-nevoeiro font-[family-name:var(--font-ui)] text-lg font-600 text-nevoa-700">
          {dayNumber}
        </div>
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-600 text-granito">
            {title}
          </h2>
          <p className="mt-0.5 font-[family-name:var(--font-display)] text-sm text-granito-light italic">
            {theme}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-granito-light">{summary}</p>

      <span className="mt-2 inline-block font-[family-name:var(--font-ui)] text-[11px] text-nevoa-500">
        ~{walkingKm} km walking
      </span>

      <div className="mt-6 space-y-6 border-l border-calcario-300 ml-2 pl-3 sm:ml-6 sm:pl-6">
        {children}
      </div>
    </section>
  );
}
