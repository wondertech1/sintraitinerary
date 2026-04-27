export interface SpringAdvantage {
  title: string;
  description: string;
}

export interface SpringChallenge {
  challenge: string;
  solution: string;
}

export interface SpringDay {
  title: string;
  stops: { time: string; activity: string; springNote: string }[];
}

export const springAdvantages: SpringAdvantage[] = [
  {
    title: "The best balance of weather and crowds",
    description:
      "April and May offer warm days (18-24°C), rare rain, and significantly fewer visitors than summer. You'll queue 10-15 minutes at Pena instead of 60. It's the season most locals recommend to visitors, and for good reason.",
  },
  {
    title: "Gardens in peak bloom",
    description:
      "Monserrate's gardens explode with color — camellias, rhododendrons, tree ferns, and wisteria. Regaleira's grounds are lush green. Pena's gardens have magnolias and azaleas blooming. Spring is the absolute best time for garden lovers.",
  },
  {
    title: "Perfect hiking weather",
    description:
      "The Serra de Sintra trails are at their best: cool enough to walk comfortably, warm enough for short sleeves. The forest is green and alive after winter rains. The Villa Sassetti trail, Cruz Alta summit, and Capuchos walks are all ideal in spring.",
  },
  {
    title: "Golden light for photography",
    description:
      "Spring light is softer than summer's harsh midday sun but warmer than winter's grey skies. Morning mist still appears occasionally — without the persistent fog of winter. It's versatile shooting conditions all day.",
  },
  {
    title: "Longer days than winter, cooler than summer",
    description:
      "Daylight from roughly 7am to 8:30pm gives you 13+ hours to work with. Enough time for 3 palaces without rushing, plus a leisurely lunch. You won't be racing the sunset like in winter or melting like in summer.",
  },
  {
    title: "Accommodation is reasonably priced",
    description:
      "Prices haven't hit summer peaks yet. April is 20-30% cheaper than July-August for Lisbon hotels. You can still find last-minute availability at most Sintra guesthouses, unlike peak season.",
  },
];

export const springChallenges: SpringChallenge[] = [
  {
    challenge: "Easter and May holidays bring crowd spikes",
    solution:
      "Easter week and the Portuguese May 1st holiday draw large domestic crowds. Check the calendar and avoid these specific dates. The weeks before and after Easter are excellent.",
  },
  {
    challenge: "March can still be rainy and cool",
    solution:
      "Early spring (March) is transitional — expect 15-18°C with occasional rain. Pack a light rain jacket. By mid-April the weather stabilizes. If you're planning a March visit, treat it as late winter.",
  },
  {
    challenge: "Some mornings start misty",
    solution:
      "Spring mist usually burns off by 10-11am. Start with indoor attractions (National Palace interior, Regaleira tunnels) and save hilltop viewpoints for later morning when the mist clears.",
  },
  {
    challenge: "School groups in April-May",
    solution:
      "Portuguese school trips are common at palaces in spring, especially Tuesday through Thursday. They're noisy but move quickly. If a bus of schoolchildren arrives, wait 15 minutes — they'll move on.",
  },
];

export const springItinerary: SpringDay = {
  title: "Perfect Spring Day in Sintra",
  stops: [
    {
      time: "8:00am",
      activity: "Train from Lisbon Rossio",
      springNote: "Already light and pleasant. A light jacket is enough for the morning chill.",
    },
    {
      time: "8:50am",
      activity: "Arrive Sintra, coffee at Café Saudade",
      springNote: "The old town smells of wisteria and fresh pastries in spring. Sit outside if it's warm — the terrace opens in April.",
    },
    {
      time: "9:30am",
      activity: "Bus 434 to Pena Palace",
      springNote: "Spring queues are manageable. The grounds-only ticket works fine — the gardens are the star this season.",
    },
    {
      time: "9:45am",
      activity: "Pena Palace grounds",
      springNote: "Magnolias and azaleas in bloom. The terraces have clear views — spring mist usually clears by this time. Tour buses arrive around 10:30am.",
    },
    {
      time: "11:15am",
      activity: "Walk to Moorish Castle (20-25 min gate-to-gate)",
      springNote: "Perfect walking temperature. The hilltop breezes are refreshing, not cold. Wildflowers along the trail.",
    },
    {
      time: "12:15pm",
      activity: "Bus 434 to town, lunch",
      springNote: "Restaurant terraces are open and uncrowded. Try Nau Palatina or Incomum. No need to rush — spring afternoons are long.",
    },
    {
      time: "1:30pm",
      activity: "Quinta da Regaleira",
      springNote: "The gardens are extraordinary in spring — green, lush, with flowers everywhere. The Initiation Well has moderate queues (5-10 min).",
    },
    {
      time: "3:30pm",
      activity: "Walk to Monserrate Palace (bus 435 or 30 min walk)",
      springNote: "This is the spring wildcard — Monserrate's gardens in April-May are the best in Sintra. Subtropical species, camellias, and the lawn is emerald green.",
    },
    {
      time: "5:00pm",
      activity: "Return to town, pastries and old town stroll",
      springNote: "Still 3+ hours of daylight. The late afternoon light on the National Palace chimneys is beautiful. Grab a queijada at Piriquita.",
    },
    {
      time: "6:30pm",
      activity: "Train back to Lisbon",
      springNote: "Golden hour on the train ride back. Or stay for dinner — spring evenings in Sintra are mild and magical.",
    },
  ],
};

export const springPackingList = [
  "Light layers (t-shirt + light jacket — mornings are 14-16°C, afternoons warm to 20-24°C)",
  "Comfortable walking shoes with grip (trails can be muddy after spring rain)",
  "Light rain jacket (just in case — April showers are real but brief)",
  "Sunscreen (spring sun is deceptively strong, especially on hilltops)",
  "Water bottle (1-1.5L is enough — it's not as hot as summer)",
  "Camera (spring light is the best for Sintra photography)",
  "Allergy medication if needed (spring pollen is high in the Serra)",
];

export const springFaqs = [
  {
    question: "Is spring the best time to visit Sintra?",
    answer:
      "Most locals and repeat visitors say yes. April-May offers the best balance: warm weather, manageable crowds, blooming gardens, and reasonable prices. It's the Goldilocks season — not too hot, not too cold, not too crowded.",
  },
  {
    question: "What's the weather like in Sintra in spring?",
    answer:
      "March: 14-18°C, some rain. April: 16-22°C, mostly dry. May: 18-25°C, warm and sunny. The hilltops are 3-5°C cooler than town. Morning mist is common but usually clears by late morning.",
  },
  {
    question: "Are spring crowds bad at Sintra?",
    answer:
      "Moderate — much better than summer. Expect 10-20 minute waits at Pena Palace (vs 60+ in August). Easter week is the exception — crowds spike to near-summer levels. Weekdays are noticeably quieter than weekends year-round.",
  },
  {
    question: "Which palace has the best gardens in spring?",
    answer:
      "Monserrate, hands down. Its subtropical and Mediterranean gardens peak in April-May with camellias, rhododendrons, and exotic species from five continents. Pena grounds are second, with magnolias and azaleas. Regaleira's gardens are lush but less flower-focused.",
  },
  {
    question: "Should I visit Sintra in March or wait until April?",
    answer:
      "April is more reliable. March is transitional — you might get perfect spring weather or winter rain. By mid-April, the weather has stabilized, gardens are blooming, and the days are comfortably long. If your dates are flexible, choose April or early May.",
  },
  {
    question: "Is it warm enough to eat outside in spring?",
    answer:
      "Yes from mid-April onward. Lunchtime is comfortable at 20-24°C. Evening dining outdoors works in May but can be cool in April — bring a light layer. Restaurant terraces start opening from Easter weekend.",
  },
];
