import { UtensilsCrossed, Euro } from "lucide-react";

interface RestaurantPickProps {
  name: string;
  cuisine: string;
  price: string;
  description: string;
  whatToOrder: string;
}

export default function RestaurantPick({
  name,
  cuisine,
  price,
  description,
  whatToOrder,
}: RestaurantPickProps) {
  return (
    <div className="rounded-[2px] border border-calcario-300 bg-calcario-50 p-4">
      <div className="flex items-center gap-2">
        <UtensilsCrossed className="h-4 w-4 text-ferrugem-500" />
        <h4 className="font-[family-name:var(--font-display)] text-base font-600 text-granito">
          {name}
        </h4>
      </div>

      <div className="mt-1.5 flex gap-3 font-[family-name:var(--font-ui)] text-[11px] text-nevoa-600">
        <span>{cuisine}</span>
        <span className="flex items-center gap-1">
          <Euro className="h-3 w-3" />
          {price}
        </span>
      </div>

      <p className="mt-2 text-[13px] leading-relaxed text-granito-light">
        {description}
      </p>

      <div className="mt-2 border-t border-calcario-300 pt-2">
        <span className="font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-wider text-palacio-600">
          What to order
        </span>
        <p className="mt-0.5 text-[13px] text-granito-light">{whatToOrder}</p>
      </div>
    </div>
  );
}
