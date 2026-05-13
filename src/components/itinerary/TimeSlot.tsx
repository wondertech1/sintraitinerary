import { ReactNode } from "react";
import { Period } from "@/data/itineraries/types";

interface TimeSlotProps {
  time: string;
  period: Period;
  children: ReactNode;
}

const periodColors: Record<Period, string> = {
  morning: "border-palacio-400",
  afternoon: "border-nevoa-400",
  evening: "border-ferrugem-400",
};

export default function TimeSlot({ time, period, children }: TimeSlotProps) {
  return (
    <div className={`relative border-l-2 ${periodColors[period]} pl-3 sm:pl-5`}>
      {/* Time marker dot */}
      <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-calcario-400" />
      <span className="font-[family-name:var(--font-ui)] text-[12px] font-medium text-nevoa-500">
        {time}
      </span>
      <div className="mt-1">{children}</div>
    </div>
  );
}
