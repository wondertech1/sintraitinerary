"use client";

import { twoDayItinerary } from "@/data/itineraries/2-day";
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

const data = twoDayItinerary;
const route = data.routes[0];

export default function TwoDayItineraryPage() {
  return (
    <>
      <ItineraryHero
        title={data.title}
        subtitle={data.subtitle}
        lastVerified={data.lastVerified}
        stats={data.stats}
        breadcrumbLabel="2-Day Itinerary"
      />

      <div className="mx-auto max-w-[900px] px-6 py-10">
        {/* Overnight tip */}
        <ScrollReveal>
          <ProTip variant="tip">
            We stayed overnight in Sintra and it completely changed the
            experience — the town after 18:00, once the day-trippers leave, is
            eerily peaceful. You&apos;ll also avoid the morning train crush. Budget rooms
            from €40/night.
          </ProTip>
        </ScrollReveal>

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

            {day.dinner && (
              <ScrollReveal>
                <div className="mt-4">
                  <span className="mb-2 block font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-[0.12em] text-ferrugem-500">
                    Dinner
                  </span>
                  <RestaurantPick
                    name={day.dinner.name}
                    cuisine={day.dinner.cuisine}
                    price={day.dinner.price}
                    description={day.dinner.description}
                    whatToOrder={day.dinner.whatToOrder}
                  />
                </div>
              </ScrollReveal>
            )}

            <TransportNote notes={day.transportNotes} />
          </DayBlock>
        ))}

        <ContourDivider className="mt-12 text-calcario-400" />

        <BudgetTable rows={route.budget.rows} totals={route.budget.totals} />

        <FAQSection faqs={data.faqs} />
      </div>
    </>
  );
}
