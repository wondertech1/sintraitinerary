import { CheckCircle } from "lucide-react";

interface LastVerifiedProps {
  date: string;
}

export default function LastVerified({ date }: LastVerifiedProps) {
  return (
    <div className="inline-flex items-center gap-1.5 font-[family-name:var(--font-ui)] text-[11px] text-musgo-600">
      <CheckCircle className="h-3.5 w-3.5" />
      <span>Updated {date}</span>
    </div>
  );
}
