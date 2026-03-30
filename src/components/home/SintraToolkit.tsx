"use client";

import Link from "next/link";
import { ArrowRight, Train, Compass, MapPin } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const tools = [
  {
    icon: Compass,
    title: "Things to Do",
    description: "Ranked attractions with honest verdicts — not a list of 47 things you'll never fit in.",
    href: "/things-to-do-in-sintra",
    available: true,
  },
  {
    icon: Train,
    title: "Getting to Sintra",
    description: "Train from Rossio, bus 434, tuk-tuks — real costs and the options nobody mentions.",
    href: "/getting-to-sintra-from-lisbon",
    available: true,
  },
  {
    icon: MapPin,
    title: "Hidden Gems",
    description: "Capuchos Convent, Villa Sassetti, and the spots that don't make the Instagram feed.",
    href: "#",
    available: false,
  },
];

export default function SintraToolkit() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20">
      <ScrollReveal>
        <SectionHeading
          label="Planning Tools"
          heading="Everything Else You Need"
        />
      </ScrollReveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tools.map((tool, i) => {
          const Icon = tool.icon;
          const Wrapper = tool.available ? Link : "div";
          const wrapperProps = tool.available ? { href: tool.href } : {};

          return (
            <ScrollReveal key={tool.title} delay={i * 0.08}>
              <Wrapper
                {...(wrapperProps as { href: string })}
                className={`group block rounded-[2px] border border-calcario-300 bg-nevoeiro p-5 transition-all duration-300 ${
                  tool.available
                    ? "hover:border-nevoa-400 hover:shadow-sm"
                    : "opacity-60"
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-calcario-100">
                  <Icon className="h-5 w-5 text-nevoa-600" />
                </div>

                <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-600 text-granito">
                  {tool.title}
                  {!tool.available && (
                    <span className="ml-2 font-[family-name:var(--font-ui)] text-[10px] font-medium uppercase tracking-wider text-nevoa-400">
                      Coming soon
                    </span>
                  )}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-granito-light">
                  {tool.description}
                </p>

                {tool.available && (
                  <div className="mt-4 flex items-center gap-1 font-[family-name:var(--font-ui)] text-[12px] font-medium text-nevoa-600 transition-colors group-hover:text-granito">
                    Read guide
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                )}
              </Wrapper>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
