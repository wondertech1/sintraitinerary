import { ReactNode } from "react";

interface GuideSectionProps {
  id?: string;
  title: string;
  children: ReactNode;
}

export default function GuideSection({ id, title, children }: GuideSectionProps) {
  return (
    <section id={id} className="mt-14 first:mt-8">
      <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-600 text-granito">
        {title}
      </h2>
      {children}
    </section>
  );
}
