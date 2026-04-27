export interface RainyDayAttraction {
  name: string;
  rainAdvantage: string;
  description: string;
  indoorOutdoor: "indoor" | "covered" | "outdoor";
  rank: number;
}

export interface RainyDayActivity {
  name: string;
  type: string;
  description: string;
  cost: string;
}

export interface GearItem {
  item: string;
  priority: "essential" | "recommended" | "nice-to-have";
  note: string;
}

export interface RainyDayStop {
  time: string;
  activity: string;
  rainyNote: string;
}

export const rainyDayAttractions: RainyDayAttraction[] = [
  {
    name: "Quinta da Regaleira — Tunnels & Initiation Well",
    rainAdvantage:
      "The underground tunnels are completely covered. The Initiation Well in rain is atmospheric — water streams down the stone walls and fog fills the spiral. We descended the Well during a downpour and the water cascading down the spiral staircase made it feel like entering a scene from a fantasy novel. Fewer visitors means you'll have it to yourself.",
    description:
      "The best rainy-day palace choice. The tunnel network (well → lake → grotto circuit) is entirely underground. The gardens above are moody and atmospheric in rain. Bring waterproof shoes for the garden paths.",
    indoorOutdoor: "covered",
    rank: 1,
  },
  {
    name: "National Palace of Sintra",
    rainAdvantage:
      "Entirely indoors. The palace was designed for the Portuguese monarchy's rain-soaked winters. The rooms, kitchens, and courtyards are all under cover.",
    description:
      "The easiest rainy-day visit. No hills, no buses — it's right in the town center. The Magpie Room, Swan Room, and the enormous medieval kitchen are surprisingly interesting. Audio guide included.",
    indoorOutdoor: "indoor",
    rank: 2,
  },
  {
    name: "Monserrate Palace",
    rainAdvantage:
      "The interior is the star here — the Moorish-Indian stucco work is best appreciated in soft, overcast light when there's no harsh sun. The botanical garden is lush in rain.",
    description:
      "The palace interior is fully indoor and spectacular. The gardens are exposed but beautiful in rain (mossy, green, atmospheric). Worth the tuk-tuk ride on a rainy day for the interior alone.",
    indoorOutdoor: "indoor",
    rank: 3,
  },
  {
    name: "Pena Palace (Grounds Only)",
    rainAdvantage:
      "Fog-wrapped Pena Palace is Sintra's most iconic image. Photographers specifically come in winter rain for this shot. The terraces are exposed but dramatic.",
    description:
      "The terraces and ramparts are fully exposed — you'll get wet. But the fog-and-rain atmosphere is hauntingly beautiful. Bring full rain gear. The interior (if you upgrade to a full ticket) provides cover.",
    indoorOutdoor: "outdoor",
    rank: 4,
  },
  {
    name: "Moorish Castle",
    rainAdvantage: "None — wet stone walls are slippery and the views are lost in fog.",
    description:
      "Skip in heavy rain. The castle walls become slippery, the views — the entire point — are obscured by fog, and there's zero cover. Save it for a clear day.",
    indoorOutdoor: "outdoor",
    rank: 5,
  },
];

export const indoorActivities: RainyDayActivity[] = [
  {
    name: "Café Saudade",
    type: "Café",
    description:
      "Sintra's best café. Warm travesseiros, galão coffee, and a cozy interior. The perfect rainy-day base camp between palace visits. The garden seating is covered too.",
    cost: "€4–8",
  },
  {
    name: "MU.SA — Museu das Artes de Sintra",
    type: "Museum",
    description:
      "Small but well-curated modern art museum in the town center. Rotating exhibitions with a focus on Portuguese contemporary art. A 45-minute visit that's perfect for filling a rainy gap.",
    cost: "€1",
  },
  {
    name: "NewsMuseum",
    type: "Museum",
    description:
      "An interactive museum about the history of journalism and media, housed in the building that once held the Sintra Toy Museum. Surprisingly engaging with multimedia exhibits and Portuguese press history.",
    cost: "€5",
  },
  {
    name: "Piriquita — Pastry Tasting",
    type: "Bakery",
    description:
      "Rain is the perfect excuse for an extended pastry session. Try every variety: travesseiros, queijadas, fofos, and the seasonal specials. Buy a box to take home.",
    cost: "€5–10",
  },
  {
    name: "Wine Tasting at Bar Fonte da Pipa",
    type: "Wine Bar",
    description:
      "Hidden garden bar with covered seating. Local Portuguese wines, a cheese board, and the sound of rain on the roof. Open from noon — a perfect rainy afternoon activity.",
    cost: "€10–15",
  },
  {
    name: "Sintra Town Bookshops & Antique Shops",
    type: "Shopping",
    description:
      "The old town has several small bookshops and antique dealers. Browsing through antique azulejo tiles, vintage books, and Portuguese ceramics is a rainy-day pleasure.",
    cost: "Free (unless you buy something)",
  },
];

export const rainyDayItinerary: RainyDayStop[] = [
  {
    time: "09:00",
    activity: "Arrive Sintra, coffee at Café Saudade",
    rainyNote:
      "Warm up with a galão and fresh travesseiros. Check the radar — Sintra rain is often intermittent.",
  },
  {
    time: "09:45",
    activity: "Quinta da Regaleira (tunnels focus)",
    rainyNote:
      "Head straight to the Initiation Well and tunnels — they're covered. The rainy garden is atmospheric. Budget 1.5 hours.",
  },
  {
    time: "11:30",
    activity: "National Palace of Sintra",
    rainyNote:
      "Entirely indoors. The Magpie Room and kitchens are highlights. Audio guide keeps you engaged for 1 hour.",
  },
  {
    time: "12:45",
    activity: "Lunch at Romaria de Baco",
    rainyNote:
      "Warm caldo verde (green soup) and a daily special. Exactly what a rainy day calls for.",
  },
  {
    time: "14:00",
    activity: "Monserrate Palace (interior focus)",
    rainyNote:
      "Tuk-tuk there (€5-8). The interior stucco work is best in soft overcast light. Skip the gardens if it's pouring.",
  },
  {
    time: "15:30",
    activity: "Piriquita pastry session + NewsMuseum",
    rainyNote:
      "Extended pastry tasting, then the NewsMuseum nearby (45 min). Fill the afternoon.",
  },
  {
    time: "16:30",
    activity: "Wine at Bar Fonte da Pipa",
    rainyNote:
      "Covered garden seating, local wines, cheese board. The sound of rain. Perfect end.",
  },
  {
    time: "17:30",
    activity: "Train back to Lisbon",
    rainyNote:
      "A full, satisfying day despite the rain. Head to a Lisbon restaurant for dinner.",
  },
];

export const gearChecklist: GearItem[] = [
  {
    item: "Waterproof hiking shoes with grip",
    priority: "essential",
    note: "Cobblestones and garden paths become slippery. We wore regular sneakers on a rainy visit and slipped twice on the path up to Regaleira. Lesson learned — proper grip is essential.",
  },
  {
    item: "Rain jacket with hood (not an umbrella)",
    priority: "essential",
    note: "Wind on the hilltops destroys umbrellas. A proper rain jacket is non-negotiable.",
  },
  {
    item: "Quick-dry pants or waterproof layer",
    priority: "essential",
    note: "Jeans absorb water and become miserable. Quick-dry hiking pants or a waterproof overpant.",
  },
  {
    item: "Small packable daypack",
    priority: "recommended",
    note: "For layers, water, snacks, and a dry change of socks.",
  },
  {
    item: "Dry socks (spare pair)",
    priority: "recommended",
    note: "Change into dry socks at lunch. Your feet will thank you for the afternoon.",
  },
  {
    item: "Phone in a zip-lock bag",
    priority: "recommended",
    note: "The Regaleira tunnels are damp. Protect your phone while using it as a flashlight.",
  },
  {
    item: "Microfiber lens cloth",
    priority: "nice-to-have",
    note: "Camera lenses and glasses fog constantly in Sintra's damp air. Wipe every 10 minutes.",
  },
  {
    item: "Portable phone charger",
    priority: "nice-to-have",
    note: "Cold and damp drain batteries faster. A small power bank ensures photos all day.",
  },
];

export const rainyDayFaqs = [
  {
    question: "Should I cancel my Sintra trip if it's raining?",
    answer:
      "No — rain makes Sintra better, not worse. The fog-wrapped palaces, atmospheric gardens, and empty tunnels are experiences you can't get in clear weather. The only thing to skip is the Moorish Castle (slippery, no views in fog). Bring proper rain gear and embrace it.",
  },
  {
    question: "Are Sintra palaces open in the rain?",
    answer:
      "Yes — all palaces operate rain or shine, year-round. The National Palace and Monserrate interior are fully indoor. Regaleira's tunnels are covered. Only the outdoor terraces at Pena Palace and the Moorish Castle walls are fully exposed.",
  },
  {
    question: "Is it safe to walk in Sintra in the rain?",
    answer:
      "With proper shoes, yes. The cobblestones and garden paths get slippery — hiking shoes with grip are essential. Avoid the Moorish Castle walls in heavy rain (no railings on some sections). The town center is flat and manageable.",
  },
  {
    question: "Does Sintra rain all day or in bursts?",
    answer:
      "Usually in bursts. Sintra has a microclimate — it can rain on the hilltop while the town center is dry. We experienced this firsthand: pouring rain at Pena Palace while the town below was completely dry. Even on 'rainy' days, you'll often get 2-3 hour dry windows. Check hourly radar forecasts and time your outdoor visits for the gaps.",
  },
  {
    question: "What's the worst month for rain in Sintra?",
    answer:
      "November through January average 10-12 rainy days per month. But even in summer (June-August), Sintra gets occasional fog and drizzle that Lisbon doesn't — the Serra creates its own weather. Come prepared regardless of season.",
  },
  {
    question: "Can I still do the Initiation Well in the rain?",
    answer:
      "Absolutely — it's arguably better. The rain adds atmosphere: water streaming down the stone walls, fog drifting through the spiral, reflections on the wet steps. The tunnels at the bottom are underground and dry. Just bring good shoes — the spiral staircase gets slippery.",
  },
];
