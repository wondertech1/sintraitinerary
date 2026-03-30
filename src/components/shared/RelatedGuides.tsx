import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface RelatedLink {
  label: string;
  href: string;
  description: string;
}

export default function RelatedGuides({ links }: { links: RelatedLink[] }) {
  if (links.length === 0) return null;

  return (
    <ScrollReveal>
      <div className="mt-10 mb-6">
        <p className="font-ui text-[11px] font-medium uppercase tracking-[0.15em] text-névoa-500 mb-4">
          Related Guides
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-start justify-between gap-3 rounded-lg border border-calcário-200 bg-white px-4 py-3 transition-colors hover:border-névoa-300"
            >
              <div>
                <p className="font-display text-sm font-semibold text-granito group-hover:text-névoa-700 transition-colors">
                  {link.label}
                </p>
                <p className="mt-0.5 font-body text-xs text-granito/50">
                  {link.description}
                </p>
              </div>
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-calcário-300 group-hover:text-névoa-500 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
