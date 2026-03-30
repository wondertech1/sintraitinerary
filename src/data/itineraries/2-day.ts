import { ItineraryData } from "./types";

export const twoDayItinerary: ItineraryData = {
  duration: 2,
  title: "Two Days in Sintra",
  subtitle: "See all 5 palaces, the coastline, and the town — we've refined this itinerary over multiple trips to cut the rushing entirely",
  lastVerified: "March 2026",
  stats: [
    { label: "Palaces", value: "5" },
    { label: "Walking", value: "12–14 km" },
    { label: "Budget", value: "€85–200" },
  ],
  routes: [
    {
      id: "comprehensive",
      name: "The Complete Sintra",
      tagline: "Everything worth seeing in two well-paced days",
      days: [
        {
          dayNumber: 1,
          title: "The Hilltop Trio",
          theme: "Pena Palace, Moorish Castle, and Quinta da Regaleira",
          summary:
            "Day 1 covers the three most famous sites. Start with the bus 434 up to Pena, walk to the Moorish Castle, descend to the town for lunch, then explore Regaleira in the quieter afternoon light.",
          walkingKm: "6",
          stops: [
            {
              time: "09:15",
              period: "morning",
              name: "Pena Palace",
              description:
                "Grounds-only ticket. Walk the full rampart loop for the best views — most people cluster at the front terrace and miss the quiet western side with Atlantic panoramas. We discovered this by accident when we took a wrong turn past the café and ended up with an unobstructed view of the ocean. The tile-covered arches and Triton gate are the architectural highlights.",
              duration: "2.5 hrs",
              cost: "€12",
              crowdLevel: 4,
              verdict: "conditional",
              verdictText: "Grounds only — the interior disappoints",
              tip: "The park below the palace has trails through ancient forest — we allocated 30 extra minutes here and found a hidden fountain surrounded by fern trees with zero other visitors.",
            },
            {
              time: "11:45",
              period: "morning",
              name: "Moorish Castle",
              description:
                "15-minute walk from Pena. The 8th-century fortress walls offer a completely different perspective — less manicured, more rugged, with 360-degree views. Walk the full wall circuit, including the lesser-visited cistern area.",
              duration: "1 hr",
              cost: "€12",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "Underrated highlight",
            },
            {
              time: "13:00",
              period: "afternoon",
              name: "Lunch in Town",
              description: "Walk downhill to the center. Eat before the 13:30 rush.",
              duration: "1 hr",
              cost: "€12–20",
              crowdLevel: 3,
              verdict: "worth-it",
              verdictText: "Eat off the main square",
            },
            {
              time: "14:30",
              period: "afternoon",
              name: "Quinta da Regaleira",
              description:
                "The afternoon crowds thin out after 15:00, making this a strategic time to visit. We timed it perfectly on our second trip — by 15:30 we had the Initiation Well completely to ourselves for photos. The garden tunnels connecting the grotto to the lake, the chapel with its alchemical symbolism — give yourself the full 2 hours. The late afternoon light through the trees is particularly beautiful.",
              duration: "2 hrs",
              cost: "€20",
              crowdLevel: 3,
              verdict: "worth-it",
              verdictText: "The must-see of Sintra",
              tip: "Descend the Initiation Well, then take the tunnel exit to the lake — don't just walk back up the stairs.",
            },
            {
              time: "17:00",
              period: "evening",
              name: "Sintra Town Stroll",
              description:
                "Wind down with a walk through the old town. Grab a travesseiro pastry from Piriquita, browse the antique shops, enjoy the relative quiet as the day-trippers head back to Lisbon. We sat on a bench near the National Palace at 17:30 and the town felt like a completely different place — cobblestones still warm, barely anyone around.",
              duration: "1 hr",
              cost: "€3–5",
              crowdLevel: 1,
              verdict: "worth-it",
              verdictText: "Sintra at its most atmospheric",
            },
          ],
          lunch: {
            name: "Incomum",
            cuisine: "Modern Portuguese",
            price: "€12–18 per person",
            description:
              "Creative Portuguese dishes. Good wine list. On Rua Dr. Alfredo Costa, away from the tourist crush.",
            whatToOrder: "Codfish croquettes to start, then the pork cheeks or the risotto.",
          },
          dinner: {
            name: "Restaurante Regional de Sintra",
            cuisine: "Traditional Portuguese",
            price: "€15–25 per person",
            description:
              "Old-school Portuguese restaurant. Hearty portions, honest cooking. A local institution.",
            whatToOrder: "Arroz de marisco (seafood rice) or the bacalhau à brás.",
          },
          transportNotes: [
            {
              text: "Train from Rossio, 08:15. Bus 434 day pass (€13.50) for the Pena/Moorish Castle loop.",
            },
          ],
        },
        {
          dayNumber: 2,
          title: "Gardens, Town & Coast",
          theme: "Monserrate Palace, National Palace, and Cabo da Roca",
          summary:
            "Day 2 covers the sites most day-trippers never reach. Monserrate Palace is worth the tuk-tuk ride. The National Palace in town is a relaxed indoor visit. Finish at Cabo da Roca for dramatic Atlantic cliffs.",
          walkingKm: "5",
          stops: [
            {
              time: "09:30",
              period: "morning",
              name: "Monserrate Palace",
              description:
                "Take a tuk-tuk from town (€5-8, 5 min). This Moorish-Gothic-Indian palace is architecturally the most interesting in Sintra — the interior stucco work rivals the Alhambra. We stood in the main hall for a solid five minutes just staring up at the ceiling. The 33-hectare garden around it has plants from 5 continents, including a Mexican garden with towering cacti and a fern valley.",
              duration: "2 hrs",
              cost: "€12",
              crowdLevel: 1,
              verdict: "worth-it",
              verdictText: "The best-kept secret in Sintra",
              tip: "Ask the tuk-tuk driver to wait or arrange a pickup time. Returning to town is uphill and there's no regular bus.",
            },
            {
              time: "12:00",
              period: "afternoon",
              name: "National Palace of Sintra",
              description:
                "Back in the town center, this medieval palace is the easiest visit. No hills, no buses required. The Magpie Room ceiling, the Swan Room, and the enormous kitchen with its iconic chimneys are highlights. Good audio guide included.",
              duration: "1 hr",
              cost: "€13",
              crowdLevel: 2,
              verdict: "conditional",
              verdictText: "Low effort, decent reward",
            },
            {
              time: "13:15",
              period: "afternoon",
              name: "Lunch",
              description: "Last meal in Sintra before heading to the coast.",
              duration: "1 hr",
              cost: "€10–18",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "Try somewhere different from Day 1",
            },
            {
              time: "15:00",
              period: "afternoon",
              name: "Cabo da Roca",
              description:
                "Bus 403 from Sintra station (40 min). The westernmost point of mainland Europe. A rugged, windswept headland with a lighthouse and a stone cross marking the spot. Dramatically different from the forested hills — raw ocean, towering cliffs, and a sense of the edge of the world. Bring a jacket.",
              duration: "1.5 hrs",
              cost: "€4.50 bus",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "A completely different experience",
              tip: "We continued by bus 403 to Cascais (30 min) instead of backtracking and it was the best decision of the trip — seafood dinner by the marina, then a direct train to Lisbon Cais do Sodré.",
              skipIf: "Thick fog or heavy rain — the entire point is the view.",
            },
          ],
          lunch: {
            name: "Tascantiga",
            cuisine: "Portuguese tapas",
            price: "€10–15 per person",
            description:
              "Small plates, local wines. On Rua das Padarias. Different vibe from the sit-down restaurants.",
            whatToOrder: "Octopus salad, chouriço assado (flambéed sausage), Serra cheese.",
          },
          transportNotes: [
            {
              text: "If staying in Sintra overnight, no morning train needed. If coming from Lisbon, take the 08:45 train.",
            },
            {
              text: "Bus 403 to Cabo da Roca departs ~every hour from Sintra station. Check timetable at the station.",
            },
            {
              text: "Pro route home: Cabo da Roca → Cascais (bus 403, 30 min) → Lisbon Cais do Sodré (train, 40 min). Avoids backtracking.",
            },
          ],
        },
      ],
      budget: {
        rows: [
          { category: "Transport (Lisbon↔Sintra)", budget: "€4.70", mid: "€4.70", comfort: "€60–80" },
          { category: "Bus 434 + local transport", budget: "€13.50", mid: "€20", comfort: "€30" },
          { category: "Bus 403 (Cabo da Roca)", budget: "€4.50", mid: "€4.50", comfort: "€4.50" },
          { category: "Palace tickets (5 palaces)", budget: "€45", mid: "€69", comfort: "€69" },
          { category: "Accommodation", budget: "€0 (day trip)", mid: "€50", comfort: "€100" },
          { category: "Meals (2 days)", budget: "€15", mid: "€45", comfort: "€80" },
          { category: "Snacks / drinks", budget: "€5", mid: "€10", comfort: "€15" },
        ],
        totals: { budget: "€88", mid: "€203", comfort: "€359–379" },
      },
    },
  ],
  faqs: [
    {
      question: "Should I stay overnight in Sintra or make two day trips from Lisbon?",
      answer:
        "Staying overnight is better. We tried it both ways — doing two day trips felt exhausting, and we missed the atmospheric evenings when the day-trippers leave. Staying overnight saves time on transit and you'll experience a completely different Sintra after 18:00. Budget options from €40-50/night exist.",
    },
    {
      question: "Where should I stay in Sintra?",
      answer:
        "Stay in or near the town center for walkability. Avoid anything that requires a car. Good mid-range options: Sintra Boutique Hotel (central, €60-80), Casa Miradouro (views, €50-70). Budget: Sintra local guesthouses on Booking.com from €40.",
    },
    {
      question: "Is the 2-day itinerary too rushed?",
      answer:
        "No — it's actually well-paced. Each day has 3-4 stops with proper breaks. You'll spend more time at each site than most day-trippers who try to cram 3 palaces into 5 hours.",
    },
    {
      question: "Can I skip any of the palaces?",
      answer:
        "The National Palace is the most skippable — it's interesting but not essential. If you're short on time, drop it and spend more time at Monserrate or the Sintra town itself. Don't skip Regaleira.",
    },
    {
      question: "What about the Cascais route home?",
      answer:
        "From Cabo da Roca, bus 403 continues to Cascais (30 min, same ticket). From Cascais, trains run to Lisbon Cais do Sodré every 20 min (40 min, €2.35). We've done this loop three times and it's always a nicer way home than backtracking through Sintra — plus Cascais has great seafood spots near the station.",
    },
  ],
};
