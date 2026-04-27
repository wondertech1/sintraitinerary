import Link from "next/link";
import { footerLinks } from "@/data/navigation";
import ContourDivider from "@/components/decorative/ContourDivider";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <ContourDivider className="text-nevoa-400" />
      <div className="bg-nevoa-900 text-nevoa-200">
        <div className="mx-auto max-w-[1200px] px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-600 text-white">
                Sintra Itinerary
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-nevoa-300">
                Practical guides to Portugal&apos;s enchanted hilltop. Real prices,
                realistic timing, opinionated verdicts.
              </p>
            </div>

            {/* Itineraries */}
            <div>
              <h4 className="font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-[0.15em] text-nevoa-400">
                Itineraries
              </h4>
              <ul className="mt-3 space-y-2">
                {footerLinks.itineraries.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-nevoa-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Palaces */}
            <div>
              <h4 className="font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-[0.15em] text-nevoa-400">
                Palace Guides
              </h4>
              <ul className="mt-3 space-y-2">
                {footerLinks.palaces.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-nevoa-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guides */}
            <div>
              <h4 className="font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-[0.15em] text-nevoa-400">
                Guides
              </h4>
              <ul className="mt-3 space-y-2">
                {footerLinks.guides.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-nevoa-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 border-t border-nevoa-800 pt-6 text-center">
            <p className="font-[family-name:var(--font-ui)] text-[11px] text-nevoa-500">
              &copy; {new Date().getFullYear()} sintraitinerary.com. Part of the{" "}
              <a
                href="https://itine.ai"
                className="text-palacio-400 transition-colors hover:text-palacio-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                ITINE
              </a>{" "}
              network.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
