import type { TicketOption } from "@/data/guides/practical/tickets";
import { Euro, Clock, ThumbsUp, AlertTriangle, Minus } from "lucide-react";
import Link from "next/link";

const worthItStyles = {
  yes: {
    bg: "bg-musgo-50",
    border: "border-musgo-200",
    icon: ThumbsUp,
    iconColor: "text-musgo-600",
    label: "Worth It",
    labelBg: "bg-musgo-100 text-musgo-700",
  },
  conditional: {
    bg: "bg-palácio-50",
    border: "border-palácio-200",
    icon: Minus,
    iconColor: "text-palácio-600",
    label: "Conditional",
    labelBg: "bg-palácio-100 text-palácio-700",
  },
  no: {
    bg: "bg-ferrugem-50",
    border: "border-ferrugem-200",
    icon: AlertTriangle,
    iconColor: "text-ferrugem-600",
    label: "Skip",
    labelBg: "bg-ferrugem-100 text-ferrugem-700",
  },
};

export default function TicketCard({ ticket }: { ticket: TicketOption }) {
  const style = worthItStyles[ticket.worthIt];
  const Icon = style.icon;

  return (
    <div className={`rounded-lg border ${style.border} ${style.bg} p-5`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="font-display text-base font-semibold text-granito">
            {ticket.palace}
          </h3>
          <p className="mt-0.5 font-ui text-xs text-granito/50">
            Youth €{ticket.youthPrice} · Senior €{ticket.seniorPrice} · Under {ticket.freeUnder} free
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-granito">
            €{ticket.adultPrice}
          </span>
          <span className={`rounded-full px-2 py-0.5 font-ui text-[10px] font-medium ${style.labelBg}`}>
            {style.label}
          </span>
        </div>
      </div>

      <p className="mb-2 font-body text-sm text-granito/70">{ticket.notes}</p>

      <div className={`rounded border ${style.border} bg-white/60 p-3 mb-3`}>
        <div className="flex items-start gap-2">
          <Icon className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${style.iconColor}`} />
          <p className="font-body text-xs leading-relaxed text-granito/70">
            {ticket.worthItReason}
          </p>
        </div>
      </div>

      <Link
        href={`/guides/${ticket.slug}`}
        className="font-ui text-xs font-medium text-névoa-600 hover:text-névoa-800 transition-colors"
      >
        Read full guide →
      </Link>
    </div>
  );
}
