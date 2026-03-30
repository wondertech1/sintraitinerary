interface ContourDividerProps {
  className?: string;
}

export default function ContourDivider({ className = "" }: ContourDividerProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 800 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 20 Q100 8 200 18 T400 14 T600 20 T800 12"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.15"
          fill="none"
        />
        <path
          d="M0 16 Q120 26 240 14 T480 18 T720 10 T800 20"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.1"
          fill="none"
        />
        <path
          d="M0 24 Q80 12 160 22 T320 16 T560 24 T800 16"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.07"
          fill="none"
        />
      </svg>
    </div>
  );
}
