export interface SunsetSpot {
  name: string;
  rating: number;
  accessibility: "easy" | "moderate" | "car-required";
  direction: string;
  description: string;
  bestMonths: string;
  tip: string;
  sunsetTime: string;
}

export const sunsetSpots: SunsetSpot[] = [
  {
    name: "Peninha Chapel",
    rating: 5,
    accessibility: "car-required",
    direction: "West (directly over the Atlantic)",
    description:
      "The undisputed best sunset in the Sintra area. A hilltop chapel at 490m with unobstructed 270-degree views over the ocean, Cabo da Roca, and the Serra. The chapel silhouette against the sunset sky is extraordinary. Almost no tourists — just wind and light.",
    bestMonths: "Year-round, but summer sunsets are later and warmer",
    tip: "Arrive 45 min before sunset. Bring a jacket — it's windy at 490m. A blanket and wine make this perfect.",
    sunsetTime: "Faces due west — sunset directly over the Atlantic",
  },
  {
    name: "Cabo da Roca Cliffs",
    rating: 4,
    accessibility: "moderate",
    description:
      "Europe's westernmost point. The cliffs drop dramatically to the Atlantic and the sunset paints the sky over open ocean. More touristy than Peninha (there's a gift shop and monument) but the raw cliff-edge setting is powerful.",
    direction: "West (open ocean)",
    bestMonths: "May-September for warmest conditions, year-round for drama",
    tip: "Walk 5 minutes south from the monument to escape the crowds. The unofficial viewpoints along the cliff path are better (and emptier) than the main platform.",
    sunsetTime: "Due west — unobstructed ocean sunset",
  },
  {
    name: "Seteais Palace Terrace",
    rating: 4,
    accessibility: "easy",
    description:
      "An 18th-century palace terrace with views over the Serra, Moorish Castle, and on clear days, the ocean. Order wine at the bar and watch the light turn golden on the mountains. The most elegant sunset setting in Sintra — you don't need to be a hotel guest.",
    direction: "West-northwest (Serra and ocean)",
    bestMonths: "April-October when the terrace bar is open late",
    tip: "Go 90 minutes before sunset. Order Colares wine — it's from the vineyards visible below. Dress presentably — it's a luxury hotel terrace.",
    sunsetTime: "The mountains catch golden hour light from the side — beautiful indirect glow",
  },
  {
    name: "Moorish Castle Walls",
    rating: 4,
    accessibility: "moderate",
    description:
      "360-degree views from the medieval battlements. In the golden hour, the castle walls glow warm and the Serra forest below turns amber. You can see both the ocean and Lisbon. The atmosphere of a medieval fortress in fading light is unforgettable.",
    direction: "All directions (360-degree panorama)",
    bestMonths: "September-March when sunset falls before closing time",
    tip: "Check closing times — in summer the castle closes at 6:30pm (before sunset). Autumn and winter sunsets happen within opening hours. The highest tower has the best 360 view.",
    sunsetTime: "Ocean to the west, Lisbon to the east — pick your direction",
  },
  {
    name: "Pena Palace Terraces",
    rating: 3,
    accessibility: "moderate",
    description:
      "The famous terraces where you can see the Atlantic and Lisbon. In golden hour, the colorful palace tiles glow warm. The views are among the best in Sintra. However, getting here for sunset means navigating closing times and departure logistics.",
    direction: "All directions from different terraces",
    bestMonths: "October-March when sunset falls within opening hours",
    tip: "Same issue as Moorish Castle — summer closing times beat sunset. Visit in autumn/winter for golden hour on the terraces. The Queen's Terrace faces west.",
    sunsetTime: "West terrace catches direct sunset; east terrace catches Lisbon in golden glow",
  },
  {
    name: "Azenhas do Mar Clifftop",
    rating: 5,
    accessibility: "car-required",
    description:
      "A tiny village cascading down cliffs to the ocean. At sunset, the whitewashed houses glow pink and gold, the Atlantic turns molten, and the natural ocean pool below catches the last light. One of the most photogenic sunsets in Portugal.",
    direction: "West (Atlantic)",
    bestMonths: "Year-round — summer for warmth, winter for dramatic skies",
    tip: "Watch from the road above the village for the best perspective. The two clifftop restaurants serve dinner with sunset views — book ahead in summer.",
    sunsetTime: "Direct ocean sunset with the village in silhouette below",
  },
];

export const sunsetFaqs = [
  {
    question: "What time is sunset in Sintra?",
    answer:
      "It varies by season. Summer (June-July): around 8:45-9:00pm. Spring/Autumn: 6:30-7:30pm. Winter (December-January): around 5:15-5:30pm. Golden hour starts about 60-90 minutes before sunset. Check timeanddate.com for exact times on your visit date.",
  },
  {
    question: "Can I see sunset from the palaces?",
    answer:
      "Only in autumn and winter, when sunset falls before closing time. Pena Palace and Moorish Castle close at 6-6:30pm year-round — in summer, sunset is at 9pm so you'll miss it. In October-March, golden hour aligns with palace visiting hours and the experience is spectacular.",
  },
  {
    question: "What's the single best sunset spot?",
    answer:
      "Peninha Chapel if you have a car — unmatched views at 490m with almost no tourists. Without a car, the Seteais Palace terrace is excellent and walkable from town (10 min from Regaleira). Both are free to visit.",
  },
  {
    question: "Is it safe to be on the trails after dark?",
    answer:
      "The forest trails are unlit and not recommended after dark. The Villa Sassetti trail and paths to the Moorish Castle are manageable with a phone flashlight but uneven. The main road from palaces to town is safer. If watching sunset from a hilltop, plan your descent before it gets fully dark.",
  },
  {
    question: "Can I combine sunset with a day trip?",
    answer:
      "Yes — end your palace day with sunset. After visiting palaces (finish by 4-5pm), head to Seteais terrace for pre-sunset drinks, or drive to Peninha/Cabo da Roca for the final light. The last Sintra-Lisbon train runs until about 1am, so late sunsets aren't a problem.",
  },
];
