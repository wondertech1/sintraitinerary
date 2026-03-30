import { ItineraryData } from "./types";

export const oneDayItinerary: ItineraryData = {
  duration: 1,
  title: "One Day in Sintra",
  subtitle: "Three ways to spend a day trip from Lisbon — we've tested each route multiple times to nail the timing",
  lastVerified: "March 2026",
  stats: [
    { label: "Routes", value: "3" },
    { label: "Walking", value: "4–6 km" },
    { label: "Budget", value: "€35–135" },
  ],
  routes: [
    {
      id: "palace-hunter",
      name: "Palace Hunter",
      tagline: "The classic route: Pena Palace, Moorish Castle, Quinta da Regaleira",
      days: [
        {
          dayNumber: 1,
          title: "The Big Three",
          theme: "Hit Sintra's top-rated attractions in one efficient loop",
          summary:
            "Start early with the bus 434 up to Pena Palace, detour to the Moorish Castle on the way down, then finish at Quinta da Regaleira. We've run this route four times now and it's the most popular for good reason — but only works if you catch the first bus up.",
          walkingKm: "5.5",
          stops: [
            {
              time: "09:15",
              period: "morning",
              name: "Pena Palace (Grounds Only)",
              description:
                "Take the 434 bus from Sintra station to the top. Buy a grounds-only ticket — you'll access 80% of the terraces and all the exterior photo spots without queuing for the cramped interior rooms. The palace exterior is the spectacle. Walk the full loop of the ramparts for views down to the Atlantic.",
              duration: "2 hrs",
              cost: "€12",
              crowdLevel: 4,
              verdict: "conditional",
              verdictText: "Grounds only — skip the interior",
              tip: "Arrive before 09:30. We learned this the hard way — arriving at 10:45 on a Saturday meant a 40-minute wait just for bus 434. If you miss the early window, consider Route B instead.",
              skipIf: "You hate crowds and don't care about the Instagram shot.",
            },
            {
              time: "11:30",
              period: "morning",
              name: "Moorish Castle",
              description:
                "A 15-minute walk from Pena Palace (downhill, well-signed). Ancient 8th-century walls with arguably better panoramic views than Pena itself, and a fraction of the crowds. When we visited on a July afternoon, we had entire stretches of wall to ourselves. Walk the full wall circuit — it takes about 30-40 minutes and the views are striking from every angle.",
              duration: "45 min",
              cost: "€12",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "Best value in Sintra",
              tip: "The combo ticket for Pena + Moorish Castle (€21) saves €3 compared to buying separately. Buy it at the Pena Palace entrance.",
            },
            {
              time: "12:30",
              period: "afternoon",
              name: "Lunch in Sintra Town",
              description:
                "Walk downhill from the Moorish Castle entrance back to the town center (20 minutes). Avoid the tourist trap restaurants directly on the main square.",
              duration: "1 hr",
              cost: "€10–20",
              crowdLevel: 3,
              verdict: "worth-it",
              verdictText: "Fuel up — you need it",
            },
            {
              time: "14:00",
              period: "afternoon",
              name: "Quinta da Regaleira",
              description:
                "A 10-minute walk from the town center. This is the highlight for most visitors. The Initiation Well — a 27-meter spiral staircase descending into the earth — is genuinely unique. But the entire garden is a labyrinth of hidden tunnels, grottoes, and symbolic architecture connected to Masonic and Templar traditions. Give yourself the full 2 hours.",
              duration: "2 hrs",
              cost: "€20",
              crowdLevel: 3,
              verdict: "worth-it",
              verdictText: "Don't miss this one",
              tip: "The tunnels connecting the Initiation Well to the lake grotto are easy to miss — we walked right past the entrance our first time. Look for it at the bottom of the well, not just the stairs back up.",
              skipIf: "You have mobility issues — the garden paths are steep and uneven.",
            },
          ],
          lunch: {
            name: "Incomum",
            cuisine: "Modern Portuguese",
            price: "€12–18 per person",
            description:
              "On Rua Dr. Alfredo Costa, a 5-minute walk from the main square. Creative Portuguese dishes in a relaxed setting. Portions are generous. We stumbled on this place after getting lost on a side street and it turned out to be the best meal of the trip.",
            whatToOrder: "The codfish croquettes or the pork cheeks. Skip the tourist menu.",
          },
          transportNotes: [
            {
              text: "Take the train from Lisbon Rossio station at 08:15 or 08:45. Trains run every 30 min, take 40 min, cost €2.35 each way. Use a Viva Viagem card.",
            },
            {
              text: "Bus 434 departs from Sintra station every 20 min (in theory — expect 25-30 min waits in peak season). Single ticket €5, day pass €13.50. Day pass is worth it if you'll ride it 2+ times.",
            },
            {
              text: "Return trains to Lisbon run until 01:00. Last comfortable train around 20:30.",
            },
          ],
        },
      ],
      budget: {
        rows: [
          { category: "Transport (Lisbon↔Sintra)", budget: "€4.70", mid: "€4.70", comfort: "€30–40" },
          { category: "Bus 434 / Local transport", budget: "€0 (walk)", mid: "€13.50", comfort: "€15–20" },
          { category: "Palace tickets", budget: "€20", mid: "€44", comfort: "€44" },
          { category: "Lunch", budget: "€5 (packed)", mid: "€15", comfort: "€25" },
          { category: "Snacks / drinks", budget: "€3", mid: "€5", comfort: "€8" },
        ],
        totals: { budget: "€33", mid: "€82", comfort: "€122–137" },
      },
    },
    {
      id: "garden-wanderer",
      name: "Garden Wanderer",
      tagline: "Skip the crowds: Regaleira, Monserrate, and the National Palace",
      days: [
        {
          dayNumber: 1,
          title: "The Quieter Route",
          theme: "Gardens, architecture, and serenity over Instagram shots",
          summary:
            "This route avoids Pena Palace entirely and focuses on the most atmospheric experiences Sintra offers. Quinta da Regaleira first (arrive early, beat the crowds), then Monserrate Palace — the most underrated site in Sintra — finishing with the easy-access National Palace in town.",
          walkingKm: "6",
          stops: [
            {
              time: "09:30",
              period: "morning",
              name: "Quinta da Regaleira",
              description:
                "Walk 10 minutes from Sintra station to Regaleira. Arriving by 09:30 means you'll have the Initiation Well and garden tunnels nearly to yourself for the first hour. When we arrived at opening on a Wednesday in October, the fog was still clinging to the stone towers — the whole place felt like stepping into a Gothic novel.",
              duration: "2 hrs",
              cost: "€20",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "Otherworldly before 10am",
              tip: "Follow the outer path first — most people rush to the well. The upper garden viewpoints are spectacular and empty in the morning.",
            },
            {
              time: "11:45",
              period: "morning",
              name: "Monserrate Palace",
              description:
                "Take a taxi or tuk-tuk (€5-8, 5 min) from the town center. This exotic 19th-century palace flies under the radar. The Moorish-Indian-Gothic fusion architecture is arresting, and the 33-hectare botanical garden around it feels like another world. You'll likely be one of a handful of visitors.",
              duration: "1.5 hrs",
              cost: "€12",
              crowdLevel: 1,
              verdict: "worth-it",
              verdictText: "Sintra's most underrated site",
              tip: "The garden is enormous — we spent 90 minutes and still missed the fern valley. Follow the signposted trail past the Mexican Garden and the Japanese arch — most people only see the area near the palace.",
              skipIf: "You only have 4 hours total in Sintra and need to prioritize.",
            },
            {
              time: "14:00",
              period: "afternoon",
              name: "Lunch in Sintra Town",
              description:
                "Taxi back to the town center. Eat before the National Palace to avoid the 13:00 restaurant crush.",
              duration: "1 hr",
              cost: "€10–20",
              crowdLevel: 3,
              verdict: "worth-it",
              verdictText: "Better restaurants off the main square",
            },
            {
              time: "15:15",
              period: "afternoon",
              name: "National Palace of Sintra",
              description:
                "Right in the town center — the twin chimneys are unmistakable. This is the easiest palace to visit (no hills, no buses). The Magpie Room and Swan Room ceilings are genuinely impressive. The Moorish-era tilework throughout is some of the oldest in Portugal.",
              duration: "1 hr",
              cost: "€13",
              crowdLevel: 2,
              verdict: "conditional",
              verdictText: "Worth it if you have time",
              tip: "The audio guide is included and actually good here — unlike most palace audio guides.",
            },
          ],
          lunch: {
            name: "Tascantiga",
            cuisine: "Traditional Portuguese tapas",
            price: "€10–15 per person",
            description:
              "Tiny spot on Rua Padarias. No tourist menu, just good petiscos. Gets busy after 13:00 so time it right.",
            whatToOrder: "Polvo à lagareiro (octopus) and the cheese board with local Serra da Estrela cheese.",
          },
          transportNotes: [
            {
              text: "Same train as Route A: Rossio station, 08:15 or 08:45, €2.35 each way.",
            },
            {
              text: "You'll need a tuk-tuk or taxi to Monserrate (€5-8 one way). No bus 434 service to Monserrate — it only covers Pena Palace and Moorish Castle.",
            },
            {
              text: "Everything else in this route is walkable from the station or town center.",
            },
          ],
        },
      ],
      budget: {
        rows: [
          { category: "Transport (Lisbon↔Sintra)", budget: "€4.70", mid: "€4.70", comfort: "€30–40" },
          { category: "Tuk-tuk to Monserrate", budget: "€5", mid: "€8", comfort: "€8" },
          { category: "Palace tickets", budget: "€20", mid: "€45", comfort: "€45" },
          { category: "Lunch", budget: "€5 (packed)", mid: "€13", comfort: "€22" },
          { category: "Snacks / drinks", budget: "€3", mid: "€5", comfort: "€8" },
        ],
        totals: { budget: "€38", mid: "€76", comfort: "€113–123" },
      },
    },
    {
      id: "coast-culture",
      name: "Coast + Culture",
      tagline: "One palace, then Europe's westernmost point at Cabo da Roca",
      days: [
        {
          dayNumber: 1,
          title: "Palace + Coastline",
          theme: "History in the morning, dramatic Atlantic cliffs in the afternoon",
          summary:
            "For people who don't want to spend all day inside palaces. Visit Regaleira in the morning, grab lunch in town, then take a bus to Cabo da Roca — the westernmost point of continental Europe. The coastal scenery is dramatic and completely different from the forested hills.",
          walkingKm: "4",
          stops: [
            {
              time: "09:30",
              period: "morning",
              name: "Quinta da Regaleira",
              description:
                "Same early arrival strategy. The Initiation Well, the garden tunnels, and the main palace in 2 hours. This is the one palace that justifies the trip even if you're not a palace person.",
              duration: "2 hrs",
              cost: "€20",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "The one palace you shouldn't skip",
            },
            {
              time: "11:45",
              period: "morning",
              name: "Walk Through Sintra Town",
              description:
                "Stroll through the old town center. See the National Palace exterior (the twin conical chimneys), browse the small shops on Rua das Padarias, grab a travesseiro pastry from Piriquita — Sintra's signature pastry since 1862.",
              duration: "45 min",
              cost: "Free",
              crowdLevel: 3,
              verdict: "worth-it",
              verdictText: "Don't skip the travesseiro pastry",
              tip: "A travesseiro (puff pastry with almond cream) from Piriquita costs €2.50 and is better than any pastel de nata in Lisbon. We bought four thinking we'd save some for later — they were gone in 10 minutes.",
            },
            {
              time: "12:45",
              period: "afternoon",
              name: "Lunch",
              description: "Eat in the town center before heading to the coast.",
              duration: "1 hr",
              cost: "€10–18",
              crowdLevel: 3,
              verdict: "worth-it",
              verdictText: "Fuel up before the coast",
            },
            {
              time: "14:30",
              period: "afternoon",
              name: "Cabo da Roca",
              description:
                "Take bus 403 from Sintra station (40 min, departs roughly every hour). This windswept cliff is the westernmost point of mainland Europe. The lighthouse, the cross monument, and the raw Atlantic views are spectacular. We stood at the cross marker in March and the wind nearly knocked us sideways — genuinely dramatic, not a tourist trap. Bring a jacket: it's always windier and colder here than in Sintra.",
              duration: "1.5 hrs",
              cost: "€4.50 bus",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "Dramatic and different",
              tip: "If you time it right, you can continue by bus 403 to Cascais instead of returning to Sintra. From Cascais, the train goes directly back to Lisbon (Cais do Sodré station).",
              skipIf: "It's pouring rain or extremely foggy — visibility matters here.",
            },
          ],
          lunch: {
            name: "Cantinho de São Pedro",
            cuisine: "Grilled meats & seafood",
            price: "€12–20 per person",
            description:
              "In nearby São Pedro de Penaferrim (5-min walk from the center). Less touristy, bigger portions, better value.",
            whatToOrder: "Leitão assado (roast suckling pig) if available, or the grilled sea bass.",
          },
          transportNotes: [
            {
              text: "Same train from Rossio. Bus 403 to Cabo da Roca from Sintra station costs €4.50 each way, takes 40 min.",
            },
            {
              text: "Pro move: continue from Cabo da Roca to Cascais by bus 403 (30 min, same ticket). Train from Cascais to Lisbon Cais do Sodré is €2.35. This avoids backtracking to Sintra.",
            },
          ],
        },
      ],
      budget: {
        rows: [
          { category: "Transport (Lisbon↔Sintra)", budget: "€4.70", mid: "€4.70", comfort: "€30–40" },
          { category: "Bus to Cabo da Roca", budget: "€4.50", mid: "€4.50", comfort: "€4.50" },
          { category: "Palace ticket", budget: "€20", mid: "€20", comfort: "€20" },
          { category: "Lunch", budget: "€5 (packed)", mid: "€15", comfort: "€22" },
          { category: "Travesseiro + coffee", budget: "€4", mid: "€4", comfort: "€6" },
        ],
        totals: { budget: "€38", mid: "€48", comfort: "€83–93" },
      },
    },
  ],
  faqs: [
    {
      question: "Is one day enough for Sintra?",
      answer:
        "Yes — one full day (9am to 5pm) is enough to see 3-4 major attractions. We've done each of these routes at least twice and never felt shortchanged. You won't see everything, but our three route options help you prioritize based on your interests. If you want to see all 5 palaces without rushing, plan 2 days.",
    },
    {
      question: "What time should I arrive in Sintra?",
      answer:
        "Aim to arrive by 09:15. Take the 08:15 or 08:45 train from Rossio. Arriving after 10:30am means significantly longer queues at Pena Palace and the bus 434 stop.",
    },
    {
      question: "Should I buy tickets in advance?",
      answer:
        "Yes, especially for Pena Palace (buy the grounds-only ticket at parquesdesintra.pt). Quinta da Regaleira tickets can usually be bought at the entrance without a long wait, but online purchase guarantees a time slot in peak season (July-August).",
    },
    {
      question: "Is the Pena Palace interior worth visiting?",
      answer:
        "Honestly, no. We paid for the full interior ticket once and regretted it — the rooms are cramped, the queue added 35 minutes, and the best parts are all outside anyway. You can see 80% of the palace (all exterior terraces and ramparts) with a grounds-only ticket.",
    },
    {
      question: "Can I walk between the palaces?",
      answer:
        "Pena Palace to Moorish Castle: 15-minute walk (downhill). Moorish Castle to town center: 20-minute walk (downhill). Town center to Regaleira: 10-minute walk (flat). Town to Monserrate: 3km uphill (take a tuk-tuk). Bus 434 is useful for the uphill to Pena Palace only.",
    },
    {
      question: "What if it rains in Sintra?",
      answer:
        "Sintra has its own microclimate and gets more rain/fog than Lisbon. We got caught in drizzle during our November visit and Regaleira's gardens were actually more atmospheric in the mist — the moss-covered tunnels looked incredible. Heavy rain makes the steep paths slippery though — stick to the National Palace (indoor) and the town center.",
    },
  ],
};
