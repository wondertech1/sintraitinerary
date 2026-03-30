import { Train, Car, Bus, Check, X } from "lucide-react";

interface TransportCardProps {
  name: string;
  icon: string;
  cost: string;
  duration: string;
  frequency: string;
  description: string;
  pros: string[];
  cons: string[];
  recommended: boolean;
  steps?: string[];
}

const iconMap: Record<string, typeof Train> = {
  train: Train,
  car: Car,
  bus: Bus,
};

export default function TransportCard({
  name,
  icon,
  cost,
  duration,
  frequency,
  description,
  pros,
  cons,
  recommended,
  steps,
}: TransportCardProps) {
  const IconComponent = iconMap[icon] || Bus;

  return (
    <article
      className={`rounded-[2px] border p-5 transition-all duration-300 ${
        recommended
          ? "border-musgo-400 bg-musgo-50/30"
          : "border-calcario-300 bg-nevoeiro"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              recommended ? "bg-musgo-100" : "bg-calcario-100"
            }`}
          >
            <IconComponent className={`h-5 w-5 ${recommended ? "text-musgo-600" : "text-nevoa-600"}`} />
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-600 text-granito">
              {name}
            </h3>
            {recommended && (
              <span className="font-[family-name:var(--font-ui)] text-[10px] font-semibold uppercase tracking-wider text-musgo-600">
                Recommended
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="mt-3 flex flex-wrap gap-4 font-[family-name:var(--font-ui)] text-[12px] text-nevoa-600">
        <span>{cost}</span>
        <span>{duration}</span>
        <span>{frequency}</span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-granito-light">{description}</p>

      {/* Pros / Cons */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <ul className="space-y-1">
            {pros.map((pro) => (
              <li key={pro} className="flex items-start gap-1.5 text-[13px] text-musgo-700">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="space-y-1">
            {cons.map((con) => (
              <li key={con} className="flex items-start gap-1.5 text-[13px] text-ferrugem-600">
                <X className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Step-by-step */}
      {steps && (
        <div className="mt-4 border-t border-calcario-300 pt-4">
          <span className="font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-[0.12em] text-nevoa-500">
            Step by Step
          </span>
          <ol className="mt-2 space-y-2">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-[13px] text-granito-light">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-nevoa-200 font-[family-name:var(--font-ui)] text-[10px] font-semibold text-nevoa-700">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}
    </article>
  );
}
