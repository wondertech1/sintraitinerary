interface BotanicalCornerProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

export default function BotanicalCorner({
  position = "top-right",
  className = "",
}: BotanicalCornerProps) {
  const transforms: Record<string, string> = {
    "top-left": "scale(-1, 1)",
    "top-right": "",
    "bottom-left": "scale(-1, -1)",
    "bottom-right": "scale(1, -1)",
  };

  const positions: Record<string, string> = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <div
      className={`pointer-events-none absolute ${positions[position]} ${className}`}
      aria-hidden="true"
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: transforms[position] }}
        className="opacity-[0.07]"
      >
        {/* Main fern frond */}
        <path
          d="M75 5 Q60 15 50 30 Q45 40 42 55 Q40 65 38 75"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Left leaflets */}
        <path d="M65 12 Q55 10 50 18" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <path d="M58 20 Q48 17 44 26" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <path d="M52 30 Q42 27 40 36" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <path d="M48 40 Q38 38 37 46" stroke="currentColor" strokeWidth="0.8" fill="none" />
        {/* Right leaflets */}
        <path d="M70 10 Q72 20 64 22" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <path d="M60 18 Q64 28 56 28" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <path d="M54 28 Q58 38 50 37" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <path d="M48 38 Q52 48 45 46" stroke="currentColor" strokeWidth="0.8" fill="none" />
        {/* Small spiral tendril */}
        <path
          d="M42 55 Q36 52 34 58 Q32 64 38 62"
          stroke="currentColor"
          strokeWidth="0.6"
          fill="none"
        />
      </svg>
    </div>
  );
}
