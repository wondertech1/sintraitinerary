import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1 font-[family-name:var(--font-ui)] text-[12px] text-nevoa-500">
        <li>
          <Link href="/" className="transition-colors hover:text-nevoa-700">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3 w-3" />
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-nevoa-700">
                {item.label}
              </Link>
            ) : (
              <span className="text-granito">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
