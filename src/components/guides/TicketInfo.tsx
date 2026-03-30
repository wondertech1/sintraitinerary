import { Ticket, Check } from "lucide-react";

interface TicketOption {
  name: string;
  price: string;
  includes: string;
  recommended: boolean;
  note?: string;
}

interface TicketInfoProps {
  intro: string;
  options: TicketOption[];
  buyOnline: string;
  comboDeals: string;
}

export default function TicketInfo({
  intro,
  options,
  buyOnline,
  comboDeals,
}: TicketInfoProps) {
  return (
    <section className="mt-10">
      <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-600 text-granito">
        Tickets & Pricing
      </h2>

      <p className="mb-5 text-sm leading-relaxed text-granito-light">{intro}</p>

      <div className="space-y-3">
        {options.map((opt) => (
          <div
            key={opt.name}
            className={`rounded-[2px] border p-4 ${
              opt.recommended
                ? "border-musgo-400 bg-musgo-50/30"
                : "border-calcario-300 bg-nevoeiro"
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <Ticket className={`h-4 w-4 ${opt.recommended ? "text-musgo-600" : "text-nevoa-500"}`} />
                <h3 className="font-[family-name:var(--font-display)] text-base font-600 text-granito">
                  {opt.name}
                </h3>
                {opt.recommended && (
                  <span className="rounded-sm bg-musgo-100 px-2 py-0.5 font-[family-name:var(--font-ui)] text-[10px] font-semibold uppercase tracking-wider text-musgo-700">
                    Recommended
                  </span>
                )}
              </div>
              <span className="font-[family-name:var(--font-ui)] text-lg font-600 text-granito">
                {opt.price}
              </span>
            </div>

            <p className="mt-1.5 flex items-start gap-1.5 text-[13px] text-granito-light">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-musgo-500" />
              {opt.includes}
            </p>

            {opt.note && (
              <p className="mt-1.5 text-[12px] text-nevoa-600 italic">{opt.note}</p>
            )}
          </div>
        ))}
      </div>

      {/* Buy online + combos */}
      <div className="mt-5 space-y-3">
        <div className="border-l-2 border-palacio-400 bg-palacio-50 rounded-r-sm px-3 py-2">
          <span className="font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-[0.12em] text-palacio-700">
            Buy Online
          </span>
          <p className="mt-1 text-[13px] text-granito-light">{buyOnline}</p>
        </div>
        <div className="border-l-2 border-nevoa-400 bg-nevoa-50 rounded-r-sm px-3 py-2">
          <span className="font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-[0.12em] text-nevoa-600">
            Combo Deals
          </span>
          <p className="mt-1 text-[13px] text-granito-light">{comboDeals}</p>
        </div>
      </div>
    </section>
  );
}
