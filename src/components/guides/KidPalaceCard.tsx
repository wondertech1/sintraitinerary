import type { KidFriendlyPalace } from "@/data/guides/practical/kids";
import { Baby, Clock, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

function KidRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`h-2.5 w-2.5 rounded-full ${
            i < rating ? "bg-palácio-500" : "bg-calcário-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function KidPalaceCard({
  palace,
}: {
  palace: KidFriendlyPalace;
}) {
  return (
    <div className="specimen-border rounded-lg bg-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-calcário-200 px-5 py-3">
        <div className="flex items-center gap-3">
          <h3 className="font-display text-lg font-semibold text-granito">
            {palace.name}
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="font-ui text-[10px] text-granito/50">Kid Rating</p>
            <KidRating rating={palace.kidRating} />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Quick stats */}
        <div className="mb-4 flex flex-wrap gap-3 text-xs font-ui text-granito/60">
          <span className="flex items-center gap-1">
            <Baby className="h-3.5 w-3.5" /> Ages {palace.ageRange}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {palace.duration}
          </span>
          <span
            className={`flex items-center gap-1 ${
              palace.strollerFriendly ? "text-musgo-600" : "text-ferrugem-600"
            }`}
          >
            {palace.strollerFriendly ? (
              <CheckCircle className="h-3.5 w-3.5" />
            ) : (
              <XCircle className="h-3.5 w-3.5" />
            )}
            {palace.strollerFriendly ? "Stroller OK" : "No strollers"}
          </span>
        </div>

        {/* Why kids love/hate it */}
        <div className="mb-4 space-y-2">
          <div className="rounded bg-musgo-50 px-3 py-2">
            <span className="font-ui text-[10px] font-medium uppercase tracking-wider text-musgo-600">
              Why kids love it
            </span>
            <p className="mt-0.5 font-body text-xs leading-relaxed text-granito/70">
              {palace.whyKidsLoveIt}
            </p>
          </div>
          <div className="rounded bg-ferrugem-50 px-3 py-2">
            <span className="font-ui text-[10px] font-medium uppercase tracking-wider text-ferrugem-600">
              Why kids might not
            </span>
            <p className="mt-0.5 font-body text-xs leading-relaxed text-granito/70">
              {palace.whyKidsHateIt}
            </p>
          </div>
        </div>

        {/* Stroller note */}
        <p className="mb-3 font-body text-xs italic text-granito/50">
          Stroller: {palace.strollerNotes}
        </p>

        {/* Parent tips */}
        <div className="mb-3">
          <p className="font-ui text-[10px] font-medium uppercase tracking-wider text-palácio-600 mb-1.5">
            Parent Tips
          </p>
          <ul className="space-y-1">
            {palace.parentTips.map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-2 text-xs font-body text-granito/70"
              >
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-palácio-400" />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`/guides/${palace.slug}`}
          className="inline-flex items-center gap-1.5 font-ui text-xs font-medium text-névoa-600 hover:text-névoa-800 transition-colors"
        >
          Full palace guide <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
