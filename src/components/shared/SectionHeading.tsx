interface SectionHeadingProps {
  label: string;
  heading: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  label,
  heading,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <span className="font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-[0.15em] text-nevoa-500">
        {label}
      </span>
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-600 text-granito md:text-4xl">
        {heading}
      </h2>
    </div>
  );
}
