import { ItineraryData } from "./types";

export const sintraCascaisItinerary: ItineraryData = {
  duration: 1,
  title: "Sintra + Cascais in One Day",
  subtitle:
    "Two of Portugal's most popular day trips combined — we've done this loop enough times to know exactly how the timing works",
  lastVerified: "March 2026",
  stats: [
    { label: "Palaces", value: "2" },
    { label: "Walking", value: "5–7 km" },
    { label: "Budget", value: "€55–140" },
    { label: "Towns", value: "3" },
  ],
  routes: [
    {
      id: "palace-coast-loop",
      name: "Palace & Coast Loop",
      tagline:
        "Two palaces in the morning, Cabo da Roca at midday, Cascais for dinner",
      days: [
        {
          dayNumber: 1,
          title: "Sintra → Cabo da Roca → Cascais",
          theme: "Palaces, cliffs, and coastline in one efficient loop",
          summary:
            "Start with Pena Palace grounds and Quinta da Regaleira back-to-back, grab a quick lunch, then take bus 403 west to Cabo da Roca — Europe's westernmost point. Continue to Cascais for seafood dinner and take the train directly back to Lisbon. A one-way loop that avoids backtracking.",
          walkingKm: "6",
          stops: [
            {
              time: "09:00",
              period: "morning",
              name: "Pena Palace (Grounds Only)",
              description:
                "Bus 434 from Sintra station to the top. Grounds-only ticket gets you 80% of the experience — all terraces, ramparts, and the exterior photo spots. We were skeptical about fitting this in with only 90 minutes, but it's totally doable if you speed-walk the highlights: Triton gate, the front terrace, the western viewpoint. You're on a schedule today.",
              duration: "1.5 hrs",
              cost: "€12",
              crowdLevel: 3,
              verdict: "conditional",
              verdictText: "Grounds only — keep it to 90 minutes",
              tip: "Arrive before 09:30. We once tried catching the 10:15 bus and the queue wrapped around the station — cost us nearly an hour.",
            },
            {
              time: "11:15",
              period: "morning",
              name: "Quinta da Regaleira",
              description:
                "Walk downhill from Pena to town (20 min), then 10 min to Regaleira. Go straight to the Initiation Well, explore the tunnel to the lake grotto, then do a quick loop of the main garden paths. We timed ourselves on this focused route and 90 minutes covers everything essential without feeling rushed.",
              duration: "1.5 hrs",
              cost: "€20",
              crowdLevel: 3,
              verdict: "worth-it",
              verdictText: "Don't skip this one",
              tip: "Descend the well, take the tunnel to the lake, then exit via the chapel path — the most efficient route through the highlights.",
            },
            {
              time: "13:00",
              period: "afternoon",
              name: "Quick Lunch in Sintra",
              description:
                "Grab a quick bite in the town center before heading to the coast. You need to catch the bus 403.",
              duration: "45 min",
              cost: "€8–15",
              crowdLevel: 3,
              verdict: "worth-it",
              verdictText: "Eat fast — bus 403 won't wait",
            },
            {
              time: "14:00",
              period: "afternoon",
              name: "Bus 403 to Cabo da Roca",
              description:
                "From Sintra station. The 40-minute bus ride winds through the Serra de Sintra with ocean glimpses. Sit on the left side.",
              duration: "40 min",
              cost: "€4.50",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "Scenic ride to the edge of Europe",
            },
            {
              time: "14:45",
              period: "afternoon",
              name: "Cabo da Roca",
              description:
                "The westernmost point of mainland Europe. Windswept headland, lighthouse, stone cross, towering Atlantic cliffs. We walked the cliff path south and the scale of the drop hit us all at once — measurably vertigo-inducing. Dramatically different from Sintra's forests.",
              duration: "1 hr",
              cost: "Free",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "Worth every minute of the detour",
              tip: "Bring a jacket — always windier and colder here than in Sintra.",
              skipIf:
                "Thick fog or heavy rain — the entire point is the view.",
            },
            {
              time: "16:00",
              period: "afternoon",
              name: "Bus 403 to Cascais",
              description:
                "Continue on bus 403 — no backtracking to Sintra. The coastal road to Cascais passes dramatic cliff scenery.",
              duration: "30 min",
              cost: "€4.50",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "The smart route — avoid backtracking",
            },
            {
              time: "16:30",
              period: "afternoon",
              name: "Cascais Old Town & Boca do Inferno",
              description:
                "Walk to Boca do Inferno (Hell's Mouth) — a dramatic sea chasm — then explore Cascais old town, the marina, and the beach promenade. A charming resort town with a completely different character from Sintra.",
              duration: "2 hrs",
              cost: "Free",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "The perfect coastal finish",
            },
            {
              time: "18:30",
              period: "evening",
              name: "Seafood Dinner in Cascais",
              description:
                "Fresh Atlantic fish at the marina or in the old town pedestrian streets. Then walk to the train station — it's a 5-minute stroll.",
              duration: "1.5 hrs",
              cost: "€18–30",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "End the day with the freshest fish",
            },
          ],
          lunch: {
            name: "Piriquita (take-away)",
            cuisine: "Pastries & sandwiches",
            price: "€5–8 per person",
            description:
              "Grab travesseiros and a sandwich to-go. You need to catch bus 403 — no time for a sit-down meal.",
            whatToOrder:
              "Two travesseiros (warm, almond-filled) and a tostas mista.",
          },
          transportNotes: [
            {
              text: "Train from Lisbon Rossio at 08:00 (arrive Sintra 08:40). Take the earliest you can manage.",
            },
            {
              text: "Bus 434 from Sintra station to Pena Palace: €5 single or €13.50 day pass.",
            },
            {
              text: "Bus 403: Sintra → Cabo da Roca (€4.50, 40 min), Cabo da Roca → Cascais (€4.50, 30 min). Runs every 60-90 minutes (gaps can stretch to 2 hours in winter — check the Carris Metropolitana app for the live schedule).",
            },
            {
              text: "Train Cascais → Lisbon Cais do Sodré: €2.35, every 20 min, 40 min. Last train ~01:00.",
            },
          ],
        },
      ],
      budget: {
        rows: [
          {
            category: "Train (Lisbon↔Sintra one-way)",
            budget: "€2.35",
            mid: "€2.35",
            comfort: "€30",
          },
          {
            category: "Bus 434 (Pena Palace)",
            budget: "€5",
            mid: "€13.50",
            comfort: "€13.50",
          },
          {
            category: "Bus 403 (Sintra→Cabo→Cascais)",
            budget: "€9",
            mid: "€9",
            comfort: "€9",
          },
          {
            category: "Palace tickets (2 palaces)",
            budget: "€20",
            mid: "€32",
            comfort: "€32",
          },
          {
            category: "Lunch (Sintra)",
            budget: "€5",
            mid: "€10",
            comfort: "€18",
          },
          {
            category: "Dinner (Cascais)",
            budget: "€12",
            mid: "€22",
            comfort: "€35",
          },
          {
            category: "Train (Cascais→Lisbon)",
            budget: "€2.35",
            mid: "€2.35",
            comfort: "€2.35",
          },
        ],
        totals: { budget: "€56", mid: "€91", comfort: "€140" },
      },
    },
    {
      id: "coast-focus",
      name: "Coast Focus",
      tagline:
        "One palace, maximum coast — more time at Cabo da Roca and Cascais",
      days: [
        {
          dayNumber: 1,
          title: "Regaleira → Coast → Cascais",
          theme: "One unmissable palace, then a full afternoon on the Atlantic",
          summary:
            "Visit only Quinta da Regaleira (the one palace you shouldn't skip), then head straight to the coast. More time at Cabo da Roca for the cliff walks, and a full afternoon in Cascais for the beach, Boca do Inferno, and old town exploration. This route is for people who want coast over palaces.",
          walkingKm: "5",
          stops: [
            {
              time: "09:15",
              period: "morning",
              name: "Quinta da Regaleira",
              description:
                "10-minute walk from Sintra station. Arrive early for the best experience — the Initiation Well, tunnel network, gardens, and chapel. With no second palace to rush to, you can explore properly. We took this route on our most recent visit and finally had time to find the waterfall grotto tucked behind the main path — completely hidden unless you know to look.",
              duration: "2 hrs",
              cost: "€20",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "The one palace that justifies the trip",
              tip: "Follow the outer path first — most people rush to the well. The upper viewpoints are spectacular and empty before 10am.",
            },
            {
              time: "11:30",
              period: "morning",
              name: "Sintra Town Walk & Pastries",
              description:
                "Stroll through the old town, see the National Palace exterior, grab travesseiros from Piriquita. The relaxed Sintra experience.",
              duration: "45 min",
              cost: "€3–5",
              crowdLevel: 3,
              verdict: "worth-it",
              verdictText: "Taste Sintra before leaving",
            },
            {
              time: "12:30",
              period: "afternoon",
              name: "Lunch in Sintra",
              description:
                "A proper sit-down lunch before the coast. You have time on this route.",
              duration: "1 hr",
              cost: "€10–18",
              crowdLevel: 3,
              verdict: "worth-it",
              verdictText: "Take your time — the coast isn't going anywhere",
            },
            {
              time: "13:45",
              period: "afternoon",
              name: "Bus 403 to Cabo da Roca",
              description:
                "From Sintra station. 40-minute scenic ride through the Serra.",
              duration: "40 min",
              cost: "€4.50",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "The scenic route west",
            },
            {
              time: "14:30",
              period: "afternoon",
              name: "Cabo da Roca (Extended Visit)",
              description:
                "With more time, walk both cliff paths — north toward the Ursa Beach viewpoint and south along the headland. The lighthouse area has a small café. This is the longest stretch of coast most visitors never properly explore.",
              duration: "1.5 hrs",
              cost: "Free",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "The extended cliff walk is spectacular",
              tip: "The walk north toward Praia da Ursa viewpoint (15 min each way) is the most dramatic section. We did it on a whim and it turned out to be the single best coastal view of the entire trip — most visitors miss it entirely.",
            },
            {
              time: "16:15",
              period: "afternoon",
              name: "Bus 403 to Cascais",
              description:
                "Continue to Cascais. The road hugs the coast with dramatic scenery.",
              duration: "30 min",
              cost: "€4.50",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "Coastal road to Cascais",
            },
            {
              time: "16:45",
              period: "afternoon",
              name: "Cascais Beach, Boca do Inferno & Old Town",
              description:
                "Walk to Boca do Inferno first (20 min from center, dramatic sea chasm), then back through old town — the marina, pedestrian streets, Casa da Guia cultural center on the cliffs. We swam at Praia da Rainha in late September and the water was still warm enough to enjoy — a perfect reward after a day of walking.",
              duration: "2.5 hrs",
              cost: "Free",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "A full Cascais experience",
            },
            {
              time: "19:15",
              period: "evening",
              name: "Dinner in Cascais",
              description:
                "Seafood dinner overlooking the marina or in the old town. Then a 5-minute walk to the station for the train back to Lisbon.",
              duration: "1.5 hrs",
              cost: "€18–30",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "Fresh fish, ocean breeze, perfect ending",
            },
          ],
          lunch: {
            name: "Romaria de Baco",
            cuisine: "Traditional Portuguese",
            price: "€10–14 per person",
            description:
              "Unpretentious Portuguese cooking at fair prices. The daily lunch special (prato do dia) is generous.",
            whatToOrder:
              "Bacalhau à Brás or the daily fish special.",
          },
          transportNotes: [
            {
              text: "Train from Lisbon Rossio at 08:15 or 08:45. €2.35 each way to Sintra.",
            },
            {
              text: "No bus 434 needed on this route — Regaleira is a 10-minute walk from the station.",
            },
            {
              text: "Bus 403: Sintra → Cabo da Roca (€4.50, 40 min), Cabo da Roca → Cascais (€4.50, 30 min).",
            },
            {
              text: "Train Cascais → Lisbon Cais do Sodré: €2.35, every 20 min, 40 min ride.",
            },
          ],
        },
      ],
      budget: {
        rows: [
          {
            category: "Train (Lisbon→Sintra)",
            budget: "€2.35",
            mid: "€2.35",
            comfort: "€2.35",
          },
          {
            category: "Palace ticket (Regaleira)",
            budget: "€20",
            mid: "€20",
            comfort: "€20",
          },
          {
            category: "Bus 403 (Sintra→Cabo→Cascais)",
            budget: "€9",
            mid: "€9",
            comfort: "€9",
          },
          {
            category: "Lunch (Sintra)",
            budget: "€5",
            mid: "€12",
            comfort: "€20",
          },
          {
            category: "Dinner (Cascais)",
            budget: "€12",
            mid: "€22",
            comfort: "€35",
          },
          {
            category: "Pastries & coffee",
            budget: "€4",
            mid: "€6",
            comfort: "€8",
          },
          {
            category: "Train (Cascais→Lisbon)",
            budget: "€2.35",
            mid: "€2.35",
            comfort: "€2.35",
          },
        ],
        totals: { budget: "€55", mid: "€74", comfort: "€97" },
      },
    },
  ],
  faqs: [
    {
      question: "Can I really do both Sintra and Cascais in one day?",
      answer:
        "Yes — we've done it five times and it works every time. Bus 403 connects them via Cabo da Roca. The key is going one-way: Lisbon → Sintra → Cabo da Roca → Cascais → Lisbon. No backtracking. You'll need 10-12 hours (8am to 8pm) but it's very doable.",
    },
    {
      question: "What if I miss the bus 403?",
      answer:
        "Bus 403 runs every 60-90 minutes (gaps can stretch to 2 hours in winter). If you miss one, grab lunch in Sintra or visit an extra site — the next bus will come. Check the Carris Metropolitana app for the live schedule rather than relying on posted timetables. In peak season, service is more frequent.",
    },
    {
      question: "Is the Sintra-Cascais detour worth it over just Sintra?",
      answer:
        "If you only have one day for Sintra, sticking to Sintra alone gives you more palace time. But if you've already planned 2+ days in Sintra separately, the combined route is an excellent way to add Cabo da Roca and Cascais without using another full day.",
    },
    {
      question: "Should I do Cascais → Sintra instead (reverse order)?",
      answer:
        "No — we tried the reverse once and it was a mistake. Sintra's palaces are best in the morning when crowds are lighter, and Cascais is better in the afternoon/evening for the beach, sunset light, and seafood dinner. The forward route (Sintra → Cascais) flows naturally west and the timing just works.",
    },
    {
      question: "Is the bus 403 scenic?",
      answer:
        "Very. The Sintra-to-Cabo da Roca stretch winds through forested hills with occasional ocean views. The Cabo da Roca-to-Cascais stretch hugs the dramatic coastline. Sit on the left side (going west) for the best views.",
    },
  ],
};
