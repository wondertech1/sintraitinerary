"use client";

import { motion } from "framer-motion";
import FogOverlay from "@/components/decorative/FogOverlay";
import ContourDivider from "@/components/decorative/ContourDivider";

const stats = [
  { label: "Palaces", value: "5" },
  { label: "Day Trips", value: "1–2" },
  { label: "Updated", value: "March 2026" },
];

export default function MistHero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-nevoeiro">
      <FogOverlay intensity="medium" />

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center justify-center px-6 pt-24 pb-16 text-center md:pt-32 md:pb-20">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-[0.2em] text-nevoa-500"
        >
          Portugal&apos;s Enchanted Hilltop
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.25, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-5xl font-700 leading-[1.1] text-granito md:text-7xl"
        >
          Sintra Itinerary
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-lg leading-relaxed text-granito-light italic md:text-xl"
        >
          Palaces, forests, and fog — your complete guide to planning the
          perfect day trip from Lisbon
        </motion.p>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {stats.map((stat) => (
            <span
              key={stat.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-calcario-400 bg-nevoeiro/80 px-4 py-1.5 font-[family-name:var(--font-ui)] text-[12px] text-granito-light backdrop-blur-sm"
            >
              <span className="font-semibold text-granito">{stat.value}</span>
              {stat.label}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-8 w-5 rounded-full border border-nevoa-300"
          >
            <div className="mx-auto mt-1.5 h-2 w-1 rounded-full bg-nevoa-400" />
          </motion.div>
        </motion.div>
      </div>

      <ContourDivider className="text-nevoa-400" />
    </section>
  );
}
