import type { Restaurant } from "@/data/guides/practical/restaurants";
import { MapPin, ThumbsUp, ThumbsDown } from "lucide-react";

const priceColors: Record<string, string> = {
  "€": "text-musgo-600 bg-musgo-50",
  "€€": "text-palácio-600 bg-palácio-50",
  "€€€": "text-ferrugem-600 bg-ferrugem-50",
};

const areaLabels: Record<string, string> = {
  "town-center": "Town Center",
  "near-palaces": "Near Palaces",
  "road-to-pena": "Road to Pena",
  "off-the-radar": "Off the Radar",
};

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  return (
    <div className="specimen-border rounded-lg bg-white p-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-display text-base font-semibold text-granito">
          {restaurant.name}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          <span
            className={`rounded-full px-2 py-0.5 font-ui text-[10px] font-medium ${priceColors[restaurant.priceRange]}`}
          >
            {restaurant.priceRange}
          </span>
          <span className="rounded-full bg-névoa-100 px-2 py-0.5 font-ui text-[10px] font-medium text-névoa-600">
            {restaurant.cuisine}
          </span>
        </div>
      </div>

      {/* Area */}
      <p className="mb-3 flex items-center gap-1 font-ui text-xs text-granito/50">
        <MapPin className="h-3 w-3" /> {areaLabels[restaurant.area]} · {restaurant.googleMapsArea}
      </p>

      {/* Verdict */}
      <p className="mb-3 font-body text-sm leading-relaxed text-granito/80">
        {restaurant.verdict}
      </p>

      {/* Must Order */}
      <div className="mb-3 rounded bg-palácio-50 px-3 py-2">
        <span className="font-ui text-[10px] font-medium uppercase tracking-wider text-palácio-600">
          Must Order
        </span>
        <p className="mt-0.5 font-body text-xs text-granito/70">
          {restaurant.mustOrder}
        </p>
      </div>

      {/* Best For / Avoid If */}
      <div className="grid gap-2 sm:grid-cols-2 text-xs">
        <div className="flex items-start gap-1.5">
          <ThumbsUp className="mt-0.5 h-3 w-3 shrink-0 text-musgo-500" />
          <span className="font-body text-granito/70">{restaurant.bestFor}</span>
        </div>
        <div className="flex items-start gap-1.5">
          <ThumbsDown className="mt-0.5 h-3 w-3 shrink-0 text-ferrugem-500" />
          <span className="font-body text-granito/70">{restaurant.avoidIf}</span>
        </div>
      </div>
    </div>
  );
}
