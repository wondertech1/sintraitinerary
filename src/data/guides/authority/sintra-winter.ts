export interface WinterAdvantage {
  title: string;
  description: string;
}

export interface WinterChallenge {
  challenge: string;
  solution: string;
}

export interface WinterDay {
  title: string;
  stops: { time: string; activity: string; winterNote: string }[];
}

export const winterAdvantages: WinterAdvantage[] = [
  {
    title: "Virtually no queues",
    description:
      "Pena Palace in summer: 45-60 minute queue. Pena Palace in January: walk straight in. The Initiation Well, usually crowded, can be yours alone at 9:30am. Every palace becomes a dramatically better experience.",
  },
  {
    title: "Fog makes everything magical",
    description:
      "Sintra's winter fog is the defining atmospheric experience. Pena Palace emerging from mist, the Moorish Castle walls dissolving into clouds, Regaleira's gardens in drizzle — it's a Gothic fairytale. Summer clarity can't compete. We visited in January and watched Pena Palace materialize through the fog as we climbed — it looked like a painting coming to life.",
  },
  {
    title: "Photography is exceptional",
    description:
      "Fog, mist, dramatic clouds, wet cobblestones reflecting light — winter Sintra is more photogenic than summer. The images are moodier, more atmospheric, and more unique. Every photographer should visit in winter at least once.",
  },
  {
    title: "Lower prices across the board",
    description:
      "Palace tickets stay the same, but Lisbon hotels, flights, and restaurants are 20-40% cheaper in winter. The overall trip cost drops significantly.",
  },
  {
    title: "Pena Palace interior is actually worth it",
    description:
      "In summer we say skip the interior. In winter, with no queues, it's worth the €20 full ticket. You can actually see the rooms without being herded through a crowd.",
  },
  {
    title: "The forest comes alive",
    description:
      "The trails between palaces are lush, green, and atmospheric. Moss-covered stones, dripping ferns, misty canopy — winter turns the Serra de Sintra into an enchanted forest.",
  },
];

export const winterChallenges: WinterChallenge[] = [
  {
    challenge: "Rain (10-11 rainy days per month Nov-Jan)",
    solution:
      "Bring a proper rain jacket and waterproof shoes. Sintra's rain is usually intermittent — you'll get breaks. The palaces and tunnels provide cover. A rainy day at Sintra beats a clear day fighting crowds.",
  },
  {
    challenge: "Shorter daylight (sunset 5:15-5:45pm)",
    solution:
      "Start early (take the 7:30am train). You'll have 8+ hours of daylight. Prioritize 2 palaces + town instead of cramming in 3. The early sunset actually creates beautiful golden light from 4pm.",
  },
  {
    challenge: "Cold (8-15°C, feels colder on hilltops with wind)",
    solution:
      "Layer up: base layer + fleece + wind/rain outer. It rarely drops below 5°C. Gloves and a hat are smart for the Moorish Castle walls. Hot coffee stops in town are part of the charm.",
  },
  {
    challenge: "Some gardens past peak bloom",
    solution:
      "True — summer has fuller gardens. But winter has camellias (Feb), and the mossy, atmospheric quality of winter gardens has its own beauty. Monserrate's subtropical species look good year-round.",
  },
  {
    challenge: "Occasional palace maintenance closures",
    solution:
      "Check parquesdesintra.pt before visiting. Rare, but some palaces do close for maintenance in deep winter (usually just a section, not the whole palace).",
  },
  {
    challenge: "Fewer bus services / shorter hours",
    solution:
      "Bus 434 runs less frequently in winter. Check the timetable. Walking between palaces works great and the trails are uncrowded. Allow a few extra minutes for bus waits.",
  },
];

export const winterItinerary: WinterDay = {
  title: "Perfect Winter Day in Sintra",
  stops: [
    {
      time: "7:30am",
      activity: "Train from Lisbon Rossio",
      winterNote: "It'll be dark when you leave. Sunrise is around 7:45-8:15am in winter.",
    },
    {
      time: "8:30am",
      activity: "Arrive Sintra, coffee at Café Saudade",
      winterNote: "Warm up with a galão (milky coffee) and a fresh travesseiro before heading out. We sat by the window at Café Saudade watching the mist roll through town — the perfect slow start to a winter day.",
    },
    {
      time: "9:30am",
      activity: "Quinta da Regaleira",
      winterNote: "The tunnels are covered — perfect for drizzle. Morning fog in the gardens is extraordinary. You'll likely be one of very few visitors.",
    },
    {
      time: "11:30am",
      activity: "Walk to Pena Palace via forest trail",
      winterNote: "The mossy forest trail is at its atmospheric best in winter. Bring a rain jacket for the walk.",
    },
    {
      time: "12:00pm",
      activity: "Pena Palace (full ticket — interior + grounds)",
      winterNote: "In winter, the interior queue is short enough to be worth it. The terraces in fog are surreal.",
    },
    {
      time: "2:00pm",
      activity: "Walk to Moorish Castle (15 min)",
      winterNote: "If foggy, the castle walls may be invisible from a distance. The views from the walls — when clouds break — are spectacular.",
    },
    {
      time: "2:45pm",
      activity: "Bus 434 back to town, late lunch",
      winterNote: "Restaurants are blissfully empty. Try Tascantiga or Romaria de Baco. Warm up with a bowl of caldo verde (green soup).",
    },
    {
      time: "4:00pm",
      activity: "Stroll the old town, pastries, golden hour",
      winterNote: "Winter golden hour starts around 4pm. Beautiful light on the National Palace chimneys. The town has a cozy, quiet charm in winter.",
    },
    {
      time: "4:45pm",
      activity: "Train back to Lisbon",
      winterNote: "It'll be dark by the time you reach Lisbon. Perfect — head to dinner in Bairro Alto or Alfama.",
    },
  ],
};

export const winterPackingList = [
  "Waterproof hiking shoes (most important item)",
  "Rain jacket with hood (not an umbrella — wind destroys umbrellas on the hilltop, we saw three inside-out umbrellas at the Moorish Castle in one afternoon)",
  "Warm fleece or down jacket (layering is key)",
  "Thin gloves (for Moorish Castle walls)",
  "Beanie/warm hat",
  "Small backpack for layers + water + snacks",
  "Lens cloth / microfiber (fog coats camera lenses constantly)",
  "Portable phone charger (cold drains batteries faster)",
];

export const winterFaqs = [
  {
    question: "Is Sintra worth visiting in winter?",
    answer:
      "Absolutely — many locals and photographers consider winter the best season for Sintra. The fog creates an atmosphere that summer can't match, queues are virtually nonexistent, and prices are lower. The trade-offs (rain, shorter days) are manageable with proper clothing.",
  },
  {
    question: "Does it snow in Sintra?",
    answer:
      "Extremely rarely — maybe once every 5-10 years, and it melts within hours. Winter temperatures are 8-15°C. It's cold and wet but not freezing. Think London winter, not Scandinavian winter.",
  },
  {
    question: "Are Sintra palaces open in winter?",
    answer:
      "Yes — all five palaces operate year-round. Hours may be slightly shorter (closing at 5:30pm instead of 6:30pm). Check parquesdesintra.pt for current winter schedules. Occasional maintenance closures happen but are rare and usually partial.",
  },
  {
    question: "What should I wear to Sintra in winter?",
    answer:
      "Layers: base layer, warm fleece, waterproof outer jacket. Waterproof shoes with grip (cobblestones + wet trails). Gloves and a hat for the hilltop palaces. Skip the umbrella — the hilltop wind destroys them. A proper rain jacket is better.",
  },
  {
    question: "Is winter fog guaranteed?",
    answer:
      "Not guaranteed on any specific day, but very common from November through March. Fog typically appears in the morning and may burn off by midday, or persist all day. Check weather forecasts — but even clear winter days often have atmospheric clouds around the hilltop.",
  },
  {
    question: "Which palace is best in winter rain?",
    answer:
      "Quinta da Regaleira — the tunnels and grottoes are covered. The National Palace is entirely indoors. Monserrate's interior is stunning in soft, overcast light. Moorish Castle and Pena terraces are more exposed to elements.",
  },
];
