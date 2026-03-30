import Breadcrumb from "@/components/shared/Breadcrumb";
import LastVerified from "@/components/shared/LastVerified";

export interface GuideHeroProps {
  category: string;
  title: string;
  subtitle: string;
  lastVerified: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function GuideHero({
  category,
  title,
  subtitle,
  lastVerified,
  breadcrumbs,
}: GuideHeroProps) {
  return (
    <section className="bg-nevoeiro pb-10 pt-8">
      <div className="mx-auto max-w-[900px] px-6">
        <Breadcrumb
          items={breadcrumbs ?? [
            { label: "Guides", href: "/" },
            { label: title },
          ]}
        />

        <span className="mt-4 inline-block font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-[0.15em] text-nevoa-500">
          {category}
        </span>

        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-700 leading-tight text-granito md:text-5xl">
          {title}
        </h1>

        <p className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-lg leading-relaxed text-granito-light italic">
          {subtitle}
        </p>

        <div className="mt-4">
          <LastVerified date={lastVerified} />
        </div>
      </div>
    </section>
  );
}
