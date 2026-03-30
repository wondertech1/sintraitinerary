import { Clock, Euro, Users, Sun, MapPin, Globe, Calendar } from "lucide-react";

const crowdLabels = ["", "Empty", "Quiet", "Moderate", "Busy", "Packed"];

interface PalaceInfoBoxProps {
  duration: string;
  cost: string;
  crowdLevel: 1 | 2 | 3 | 4 | 5;
  bestTime: string;
  gettingThere: string;
  openingHours: string;
  website: string;
}

export default function PalaceInfoBox({
  duration,
  cost,
  crowdLevel,
  bestTime,
  gettingThere,
  openingHours,
  website,
}: PalaceInfoBoxProps) {
  const facts = [
    { icon: Clock, label: "Duration", value: duration },
    { icon: Euro, label: "Cost", value: cost },
    {
      icon: Users,
      label: "Crowds",
      value: crowdLabels[crowdLevel],
      extra: (
        <span className="ml-1 inline-flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                i < crowdLevel ? "bg-nevoa-500" : "bg-calcario-300"
              }`}
            />
          ))}
        </span>
      ),
    },
    { icon: Sun, label: "Best time", value: bestTime },
    { icon: MapPin, label: "Getting there", value: gettingThere },
    { icon: Calendar, label: "Hours", value: openingHours },
    { icon: Globe, label: "Tickets", value: website },
  ];

  return (
    <div className="rounded-[2px] border border-calcario-300 bg-calcario-50 p-5">
      <h3 className="mb-3 font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-[0.15em] text-nevoa-500">
        Quick Facts
      </h3>
      <dl className="space-y-2.5">
        {facts.map(({ icon: Icon, label, value, extra }) => (
          <div key={label} className="flex items-start gap-2.5">
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-nevoa-400" />
            <div>
              <dt className="font-[family-name:var(--font-ui)] text-[11px] font-medium text-nevoa-500">
                {label}
              </dt>
              <dd className="text-sm text-granito">
                {value}
                {extra}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}
