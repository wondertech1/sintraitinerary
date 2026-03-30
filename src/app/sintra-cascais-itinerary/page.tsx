"use client";

import { useState } from "react";
import { sintraCascaisItinerary } from "@/data/itineraries/sintra-cascais";
import ItineraryHero from "@/components/itinerary/ItineraryHero";
import DayBlock from "@/components/itinerary/DayBlock";
import TimeSlot from "@/components/itinerary/TimeSlot";
import StopCard from "@/components/itinerary/StopCard";
import RestaurantPick from "@/components/itinerary/RestaurantPick";
import BudgetTable from "@/components/itinerary/BudgetTable";
import TransportNote from "@/components/itinerary/TransportNote";
import FAQSection from "@/components/shared/FAQSection";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ContourDivider from "@/components/decorative/ContourDivider";
import ProTip from "@/components/shared/ProTip";
import { motion, AnimatePresence } from "framer-motion";

const data = sintraCascaisItinerary;

export default function SintraCascaisItineraryPage() {
  const [activeRoute, setActiveRoute] = useState(0);
  const route = data.routes[activeRoute];

  return (
    <>
      <ItineraryHero
        title={data.title}
        subtitle={data.subtitle}
        lastVerified={data.lastVerified}
        stats={data.stats}
        breadcrumbLabel="Sintra + Cascais"
      />

      <div className="mx-auto max-w-[900px] px-6 py-10">
        <ScrollReveal>
          <ProTip variant="tip">
            We spent a full day trying the reverse route (Cascais first, then
            Sintra) and it was noticeably worse — Sintra&apos;s palaces are
            packed by afternoon. The one-way loop below is the version that
            actually works.
          </ProTip>
        </ScrollReveal>

        {/* Route selector */}
        <div className="flex flex-wrap gap-2">
          {data.routes.map((r, i) => (
            <button
              key={r.id}
              onClick={() => setActiveRoute(i)}
              className={`rounded-full px-4 py-2 font-[family-name:var(--font-ui)] text-[13px] font-medium transition-all duration-200 ${
                activeRoute === i
                  ? "bg-nevoa-800 text-white"
                  : "border border-calcario-400 bg-nevoeiro text-granito-light hover:border-nevoa-400"
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>

        <p className="mt-3 font-[family-name:var(--font-display)] text-sm text-granito-light italic">
          {route.tagline}
        </p>

        {/* Route content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={route.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {route.days.map((day) => (
              <DayBlock
                key={day.dayNumber}
                dayNumber={day.dayNumber}
                title={day.title}
                theme={day.theme}
                summary={day.summary}
                walkingKm={day.walkingKm}
              >
                {day.stops.map((stop, si) => (
                  <ScrollReveal key={si} delay={si * 0.05}>
                    <TimeSlot time={stop.time} period={stop.period}>
                      <StopCard
                        name={stop.name}
                        description={stop.description}
                        duration={stop.duration}
                        cost={stop.cost}
                        crowdLevel={stop.crowdLevel}
                        verdict={stop.verdict}
                        verdictText={stop.verdictText}
                        tip={stop.tip}
                        skipIf={stop.skipIf}
                      />
                    </TimeSlot>

                    {/* Insert lunch after the lunch-timed stop */}
                    {stop.name.toLowerCase().includes("lunch") && (
                      <div className="mt-4">
                        <RestaurantPick
                          name={day.lunch.name}
                          cuisine={day.lunch.cuisine}
                          price={day.lunch.price}
                          description={day.lunch.description}
                          whatToOrder={day.lunch.whatToOrder}
                        />
                      </div>
                    )}
                  </ScrollReveal>
                ))}

                <TransportNote notes={day.transportNotes} />
              </DayBlock>
            ))}

            <ContourDivider className="mt-12 text-calcario-400" />

            <BudgetTable rows={route.budget.rows} totals={route.budget.totals} />
          </motion.div>
        </AnimatePresence>

        <FAQSection faqs={data.faqs} />
      </div>
    </>
  );
}
