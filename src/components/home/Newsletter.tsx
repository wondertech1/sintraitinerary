"use client";

import { useState } from "react";
import BotanicalCorner from "@/components/decorative/BotanicalCorner";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative overflow-hidden bg-nevoa-900 py-16">
      <BotanicalCorner position="top-right" className="text-nevoa-300" />
      <BotanicalCorner position="bottom-left" className="text-nevoa-300" />

      <div className="relative mx-auto max-w-lg px-6 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-600 text-white">
          Sintra changes fast
        </h2>
        <p className="mt-2 text-sm text-nevoa-300">
          Ticket prices, bus schedules, and crowd patterns shift every season. Get
          updates when we verify new info.
        </p>

        {submitted ? (
          <p className="mt-6 font-[family-name:var(--font-ui)] text-sm text-palacio-400">
            You&apos;re in. We&apos;ll only email when something actually changes.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="mt-6 flex gap-2"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 rounded-[2px] border border-nevoa-700 bg-nevoa-800 px-4 py-2.5 text-sm text-white placeholder-nevoa-500 outline-none transition-colors focus:border-palacio-500"
            />
            <button
              type="submit"
              className="shrink-0 rounded-[2px] bg-palacio-500 px-5 py-2.5 font-[family-name:var(--font-ui)] text-[13px] font-medium text-white transition-colors hover:bg-palacio-600"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
