import { Camera, Sun, Users } from "lucide-react";

interface PhotoSpotCardProps {
  name: string;
  description: string;
  bestTime: string;
  crowdTip: string;
}

export default function PhotoSpotCard({
  name,
  description,
  bestTime,
  crowdTip,
}: PhotoSpotCardProps) {
  return (
    <div className="rounded-[2px] border border-calcario-300 bg-nevoeiro p-4">
      <div className="flex items-center gap-2">
        <Camera className="h-4 w-4 text-palacio-500" />
        <h3 className="font-[family-name:var(--font-display)] text-base font-600 text-granito">
          {name}
        </h3>
      </div>

      <p className="mt-2 text-[13px] leading-relaxed text-granito-light">
        {description}
      </p>

      <div className="mt-3 flex flex-wrap gap-4 text-[12px]">
        <span className="flex items-center gap-1 text-palacio-600">
          <Sun className="h-3.5 w-3.5" />
          {bestTime}
        </span>
        <span className="flex items-center gap-1 text-nevoa-600">
          <Users className="h-3.5 w-3.5" />
          {crowdTip}
        </span>
      </div>
    </div>
  );
}
