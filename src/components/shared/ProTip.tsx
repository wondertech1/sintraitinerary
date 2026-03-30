import { Lightbulb, AlertTriangle, Landmark, Coins } from "lucide-react";

type TipVariant = "tip" | "warning" | "palace-secret" | "money-saver";

interface ProTipProps {
  variant?: TipVariant;
  children: React.ReactNode;
}

const config: Record<
  TipVariant,
  { icon: typeof Lightbulb; label: string; borderColor: string; bgColor: string; iconColor: string }
> = {
  tip: {
    icon: Lightbulb,
    label: "Pro Tip",
    borderColor: "border-musgo-500",
    bgColor: "bg-musgo-50",
    iconColor: "text-musgo-600",
  },
  warning: {
    icon: AlertTriangle,
    label: "Heads Up",
    borderColor: "border-ferrugem-500",
    bgColor: "bg-ferrugem-50",
    iconColor: "text-ferrugem-600",
  },
  "palace-secret": {
    icon: Landmark,
    label: "Palace Secret",
    borderColor: "border-palacio-500",
    bgColor: "bg-palacio-50",
    iconColor: "text-palacio-600",
  },
  "money-saver": {
    icon: Coins,
    label: "Money Saver",
    borderColor: "border-nevoa-500",
    bgColor: "bg-nevoa-50",
    iconColor: "text-nevoa-700",
  },
};

export default function ProTip({ variant = "tip", children }: ProTipProps) {
  const { icon: Icon, label, borderColor, bgColor, iconColor } = config[variant];

  return (
    <div className={`border-l-3 ${borderColor} ${bgColor} rounded-r-[2px] p-4`}>
      <div className="mb-1 flex items-center gap-2">
        <Icon className={`h-4 w-4 ${iconColor}`} />
        <span className={`font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-[0.12em] ${iconColor}`}>
          {label}
        </span>
      </div>
      <div className="text-sm leading-relaxed text-granito-light">{children}</div>
    </div>
  );
}
