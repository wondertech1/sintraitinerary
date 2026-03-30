interface ManuelineKnotProps {
  className?: string;
  size?: number;
}

export default function ManuelineKnot({ className = "", size = 24 }: ManuelineKnotProps) {
  return (
    <span className={`inline-block ${className}`} aria-hidden="true">
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-20"
      >
        {/* Rope twist - Manueline maritime motif */}
        <path
          d="M4 12 Q8 6 12 12 Q16 18 20 12"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M4 12 Q8 18 12 12 Q16 6 20 12"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Small knot circles */}
        <circle cx="4" cy="12" r="1.5" fill="currentColor" opacity="0.3" />
        <circle cx="20" cy="12" r="1.5" fill="currentColor" opacity="0.3" />
      </svg>
    </span>
  );
}
