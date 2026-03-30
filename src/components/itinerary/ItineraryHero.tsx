import Breadcrumb from "@/components/shared/Breadcrumb";
import LastVerified from "@/components/shared/LastVerified";

interface ItineraryHeroProps {
  title: string;
  subtitle: string;
  lastVerified: string;
  stats: { label: string; value: string }[];
  breadcrumbLabel: string;
}

export default function ItineraryHero({
  title,
  subtitle,
  lastVerified,
  stats,
  breadcrumbLabel,
}: ItineraryHeroProps) {
  return (
    <section className="bg-nevoeiro pb-10 pt-8">
      <div className="mx-auto max-w-[900px] px-6">
        <Breadcrumb
          items={[
            { label: "Itineraries", href: "/" },
            { label: breadcrumbLabel },
          ]}
        />

        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-700 leading-tight text-granito md:text-5xl">
          {title}
        </h1>

        <p className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-lg leading-relaxed text-granito-light italic">
          {subtitle}
        </p>

        {/* Stat pills */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {stats.map((stat) => (
            <span
              key={stat.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-calcario-400 bg-nevoeiro px-3 py-1 font-[family-name:var(--font-ui)] text-[12px] text-granito-light"
            >
              <span className="font-semibold text-granito">{stat.value}</span>
              {stat.label}
            </span>
          ))}
          <LastVerified date={lastVerified} />
        </div>
      </div>
    </section>
  );
}
