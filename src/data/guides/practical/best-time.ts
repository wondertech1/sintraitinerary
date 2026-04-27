export interface MonthData {
  month: string;
  shortMonth: string;
  avgTempHigh: number; // °C
  avgTempLow: number;
  rainyDays: number;
  crowdLevel: 1 | 2 | 3 | 4 | 5;
  verdict: "best" | "good" | "mixed" | "avoid";
  verdictText: string;
  highlights: string[];
}

export interface SeasonData {
  season: string;
  months: string;
  pros: string[];
  cons: string[];
  bestFor: string;
}

export const monthlyData: MonthData[] = [
  {
    month: "January",
    shortMonth: "Jan",
    avgTempHigh: 14,
    avgTempLow: 8,
    rainyDays: 11,
    crowdLevel: 1,
    verdict: "good",
    verdictText: "Quiet and atmospheric. Cold but rarely freezing.",
    highlights: [
      "Lowest crowds of the year",
      "Mystical fog wrapping the palaces",
      "Hotel prices at rock bottom",
    ],
  },
  {
    month: "February",
    shortMonth: "Feb",
    avgTempHigh: 15,
    avgTempLow: 8,
    rainyDays: 10,
    crowdLevel: 1,
    verdict: "good",
    verdictText: "Still quiet. Camellias blooming in palace gardens. We visited in February and had Monserrate completely to ourselves for an hour.",
    highlights: [
      "Camellia season at Monserrate",
      "Pre-season calm",
      "Good photography light",
    ],
  },
  {
    month: "March",
    shortMonth: "Mar",
    avgTempHigh: 17,
    avgTempLow: 10,
    rainyDays: 8,
    crowdLevel: 2,
    verdict: "best",
    verdictText: "Perfect balance — warming up, gardens blooming, crowds still low.",
    highlights: [
      "Spring flowers emerging",
      "Comfortable walking temperatures",
      "Manageable weekend crowds",
    ],
  },
  {
    month: "April",
    shortMonth: "Apr",
    avgTempHigh: 18,
    avgTempLow: 11,
    rainyDays: 9,
    crowdLevel: 3,
    verdict: "best",
    verdictText: "Gardens at peak bloom. Easter brings a crowd spike but weekdays are ideal.",
    highlights: [
      "Peak garden season",
      "Wisteria at Monserrate",
      "Pleasant temperatures for hiking",
    ],
  },
  {
    month: "May",
    shortMonth: "May",
    avgTempHigh: 21,
    avgTempLow: 13,
    rainyDays: 6,
    crowdLevel: 3,
    verdict: "best",
    verdictText: "Arguably the best month. Warm, dry, lush gardens, pre-summer crowds.",
    highlights: [
      "Long daylight hours",
      "Warm but not hot",
      "Gardens fully lush",
    ],
  },
  {
    month: "June",
    shortMonth: "Jun",
    avgTempHigh: 25,
    avgTempLow: 16,
    rainyDays: 3,
    crowdLevel: 4,
    verdict: "good",
    verdictText: "Summer begins. Hot but dry. Crowds building but not peak yet.",
    highlights: [
      "Santos Populares festivals",
      "Festival de Sintra: classical concerts and ballet inside the palaces themselves — imagine hearing Chopin in the National Palace ballroom. Book at the Sintra municipality website.",
      "Feira de São Pedro (around June 29): a major local market and festival in São Pedro de Penaferrim",
      "Longest days",
      "Cabo da Roca sunsets",
    ],
  },
  {
    month: "July",
    shortMonth: "Jul",
    avgTempHigh: 28,
    avgTempLow: 17,
    rainyDays: 1,
    crowdLevel: 5,
    verdict: "mixed",
    verdictText: "Peak crowds and heat. The hilltop palaces are cooler than Lisbon though.",
    highlights: [
      "Sintra Festival (June-July): classical concerts and ballet performed inside the palaces — book tickets at the Sintra municipality website",
      "Guaranteed dry weather",
      "5-7°C cooler than Lisbon",
    ],
  },
  {
    month: "August",
    shortMonth: "Aug",
    avgTempHigh: 28,
    avgTempLow: 17,
    rainyDays: 1,
    crowdLevel: 5,
    verdict: "avoid",
    verdictText: "The worst month. Peak crowds, peak heat, peak prices. We made the mistake of visiting on an August Saturday — the bus 434 queue stretched around the block and we waited over an hour for Pena. If you must, go at 9am.",
    highlights: [
      "Book everything weeks ahead",
      "Start at 9am sharp",
      "Monserrate is the crowd escape",
    ],
  },
  {
    month: "September",
    shortMonth: "Sep",
    avgTempHigh: 26,
    avgTempLow: 16,
    rainyDays: 4,
    crowdLevel: 4,
    verdict: "good",
    verdictText: "Crowds dropping fast. Still warm and mostly dry. Great shoulder season.",
    highlights: [
      "Summer warmth without summer crowds",
      "Good photography light",
      "Prices start dropping",
    ],
  },
  {
    month: "October",
    shortMonth: "Oct",
    avgTempHigh: 22,
    avgTempLow: 14,
    rainyDays: 8,
    crowdLevel: 2,
    verdict: "best",
    verdictText: "The secret best month. Warm enough, far fewer tourists, autumn colors starting.",
    highlights: [
      "Autumn foliage in palace gardens",
      "Comfortable temperatures",
      "Low crowds on weekdays",
    ],
  },
  {
    month: "November",
    shortMonth: "Nov",
    avgTempHigh: 17,
    avgTempLow: 11,
    rainyDays: 10,
    crowdLevel: 1,
    verdict: "good",
    verdictText: "Rainy but atmospheric. The fog makes Sintra feel like a Gothic novel.",
    highlights: [
      "Dramatic misty landscapes",
      "Virtually no queues",
      "Best prices for Lisbon hotels",
    ],
  },
  {
    month: "December",
    shortMonth: "Dec",
    avgTempHigh: 15,
    avgTempLow: 9,
    rainyDays: 10,
    crowdLevel: 1,
    verdict: "good",
    verdictText: "Quiet except Christmas week. Holiday markets in Sintra town.",
    highlights: [
      "Christmas markets in the town center",
      "Holiday lighting on palaces",
      "Low season prices",
    ],
  },
];

export const seasonalData: SeasonData[] = [
  {
    season: "Spring",
    months: "March – May",
    pros: [
      "Gardens at peak bloom (camellias, wisteria, azaleas)",
      "Comfortable 17-21°C temperatures",
      "Moderate crowds (except Easter week)",
      "Long daylight for full itineraries",
    ],
    cons: [
      "April can be rainy",
      "Easter week brings a crowd spike",
      "Weekend day-trippers increasing",
    ],
    bestFor:
      "Garden lovers, photographers, and anyone who wants the best overall experience.",
  },
  {
    season: "Summer",
    months: "June – August",
    pros: [
      "Guaranteed dry weather",
      "Longest daylight hours",
      "Sintra Festival cultural events",
      "5-7°C cooler than Lisbon",
    ],
    cons: [
      "Peak crowds (especially July-August)",
      "45-60 min queues at Pena Palace",
      "Higher prices for everything",
      "Hot walking conditions (25-28°C)",
    ],
    bestFor:
      "Those who have no other option. Arrive before 9:30am and start with less popular palaces.",
  },
  {
    season: "Autumn",
    months: "September – November",
    pros: [
      "Rapidly dropping crowds",
      "Autumn foliage in palace gardens",
      "September still warm and dry",
      "October is the sweet spot month",
    ],
    cons: [
      "Rain increases from October",
      "Shorter daylight in November",
      "Some gardens past peak bloom",
    ],
    bestFor:
      "The savvy traveler. October is our pick for the single best month to visit Sintra.",
  },
  {
    season: "Winter",
    months: "December – February",
    pros: [
      "Virtually no crowds",
      "Lowest prices for accommodation",
      "Mystical fog atmosphere",
      "Pena interior queue-free",
    ],
    cons: [
      "Rain on ~10 days per month",
      "Shorter daylight (sunset 5:30pm)",
      "Some garden areas less impressive",
      "Occasional palace closures for maintenance",
    ],
    bestFor:
      "Budget travelers, photographers who love moody atmospheres, and crowd-averse visitors.",
  },
];

export const bestTimeFaqs = [
  {
    question: "What is the best month to visit Sintra?",
    answer:
      "October is the single best month — warm enough (22°C), barely any tourists, autumn colors starting, and prices dropping. May is the close second: peak garden bloom, warm weather, pre-summer crowds.",
  },
  {
    question: "Is Sintra worth visiting in winter?",
    answer:
      "Absolutely. Winter Sintra is atmospheric — fog wrapping the palaces, virtually empty paths, zero queues. We visited Regaleira on a drizzly November Tuesday and counted maybe 15 other people in the entire grounds. You'll need a rain jacket and layers, but the experience is more magical than fighting summer crowds.",
  },
  {
    question: "How crowded is Sintra in summer?",
    answer:
      "Very. July-August sees 45-60 minute queues at Pena Palace, packed bus 434, and crowded paths. If visiting in summer: arrive before 9:30am, buy tickets online, and consider skipping Pena entirely for Regaleira.",
  },
  {
    question: "Does Sintra get fog year-round?",
    answer:
      "Sintra's microclimate produces fog more than the surrounding area, but it's most common October through March. Summer days are typically clear. The fog usually burns off by late morning.",
  },
  {
    question: "What should I wear to visit Sintra?",
    answer:
      "Comfortable walking shoes are essential (cobblestones + steep paths). Layers are smart year-round — Sintra's hilltop is 5-7°C cooler than Lisbon. Bring a rain jacket October through April. Summer: sun hat and water.",
  },
  {
    question: "What time do Sintra palaces open?",
    answer:
      "Most palaces open at 9:30am and close at 6:30pm (last entry 6pm). Winter hours may be shorter (closing at 5:30pm). Pena Palace park opens at 9am. Check parquesdesintra.pt for current hours.",
  },
];
