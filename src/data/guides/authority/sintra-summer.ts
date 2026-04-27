export interface SummerAdvantage {
  title: string;
  description: string;
}

export interface SummerChallenge {
  challenge: string;
  solution: string;
}

export interface SummerDay {
  title: string;
  stops: { time: string; activity: string; summerNote: string }[];
}

export const summerAdvantages: SummerAdvantage[] = [
  {
    title: "Long daylight hours (6:15am-9pm)",
    description:
      "Nearly 15 hours of daylight means you can fit 3-4 palaces in a single day. Start at 9am and still have time for a sunset dinner. Winter visitors get 8 hours — you get almost double.",
  },
  {
    title: "Gardens at full bloom",
    description:
      "Monserrate's subtropical gardens are spectacular in summer, with ferns, palms, and flowers at their peak. Pena Palace grounds are lush and colorful. Regaleira's gardens feel like a tropical jungle. If you care about gardens, summer is the season.",
  },
  {
    title: "Reliable weather for outdoor palaces",
    description:
      "Almost zero rain June-August. The Moorish Castle walls, Pena terraces, and hilltop trails are best enjoyed in clear weather. You won't waste time sheltering from rain or navigating slippery cobblestones.",
  },
  {
    title: "Sintra + coast is possible",
    description:
      "Warm weather means you can combine palaces in the morning with Cabo da Roca or Azenhas do Mar in the afternoon. A Sintra-Cascais day trip works perfectly in summer. In winter, the coast is too cold and windy to enjoy.",
  },
  {
    title: "More frequent transport",
    description:
      "Bus 434 and 435 run more frequently in summer. The Sintra tram to Praia das Macas operates more days. More taxis and tuk-tuks are available. Getting between palaces is easier.",
  },
  {
    title: "Evening dining in the old town",
    description:
      "Restaurants with outdoor terraces are open late. The old town stays lively until 10pm. Winter evenings are cold and most restaurants close early — summer lets you enjoy Sintra after dark.",
  },
];

export const summerChallenges: SummerChallenge[] = [
  {
    challenge: "Crushing crowds (up to 10,000 visitors per day in peak August)",
    solution:
      "Arrive by 9am on the first train. Visit Regaleira first (opens 10am, shorter queues than Pena). Buy tickets online in advance — the ticket queue at Pena can be 30+ minutes. Weekdays are noticeably less crowded than weekends. If possible, visit in June or September instead of July-August.",
  },
  {
    challenge: "Heat (28-35°C, hotter on exposed hilltops)",
    solution:
      "Carry at least 1.5L of water per person. The Moorish Castle walls have zero shade and temperatures can exceed 35°C. Water refill points exist at Sintra station, town center fountains, and most palace entrances. Watch for signs of heat exhaustion — dizziness, nausea, excessive sweating. The forest trails between palaces are shaded and 5-8°C cooler than town. Do the hilltop palaces (Pena, Moorish) in the morning before peak heat. Afternoon is for shaded Regaleira tunnels or Monserrate's cool interior.",
  },
  {
    challenge: "Pena Palace queues (45-90 minutes for interior)",
    solution:
      "Bluntly? Skip the interior in summer. The grounds-only ticket (€12) gives you the terraces, the views, and the Instagram shots without the queue. The interior is underwhelming compared to the exterior anyway. If you insist, book the first slot of the day.",
  },
  {
    challenge: "Accommodation prices spike (50-100% more than off-season)",
    solution:
      "Stay in Lisbon and day-trip. For a 1-day visit, there's no reason to pay summer Sintra hotel prices. If staying overnight, book 2-3 months ahead and consider São Pedro or Airbnbs over central hotels.",
  },
  {
    challenge: "The Initiation Well gets a queue",
    solution:
      "Arrive at Regaleira right at 10am opening. Head straight to the Initiation Well before exploring the gardens. By 11am the well has a 15-20 minute queue. Early visitors get 5-10 minutes alone inside.",
  },
  {
    challenge: "Parking is nearly impossible",
    solution:
      "Don't drive to Sintra in summer. Take the train. Sintra's parking fills by 10am on summer weekends, and the town center streets are narrow and chaotic. If you must drive, arrive before 9am or park in São Pedro (free) and walk 15 minutes.",
  },
];

export const summerItinerary: SummerDay = {
  title: "Beat-the-Crowds Summer Day in Sintra",
  stops: [
    {
      time: "7:30am",
      activity: "Train from Lisbon Rossio",
      summerNote: "Already light and warm. Bring water, sunscreen, and a hat — you'll need all three.",
    },
    {
      time: "8:20am",
      activity: "Arrive Sintra, grab coffee and pastry to go",
      summerNote: "Don't sit down for breakfast — the early start is your biggest advantage. Buy a travesseiro at the station bakery and eat on the walk.",
    },
    {
      time: "8:40am",
      activity: "Bus 434 to Pena Palace",
      summerNote: "First bus fills fast in summer. Queue forms from 8:15am. Alternatively, Uber to the gates (€6-8).",
    },
    {
      time: "9:00am",
      activity: "Pena Palace (grounds-only ticket)",
      summerNote: "Arrive before the tour buses (they hit at 10am). The terraces are magical in morning light and uncrowded. Skip the interior — the queue isn't worth it in summer.",
    },
    {
      time: "10:30am",
      activity: "Walk to Moorish Castle (20-25 min gate-to-gate, downhill)",
      summerNote: "Do this before it gets too hot. The castle walls are fully exposed — bring a hat and water. Clear summer skies mean you can see all the way to Lisbon.",
    },
    {
      time: "11:30am",
      activity: "Bus 434 to town, early lunch",
      summerNote: "Eat at 11:30-12:00 before restaurants fill. Incomum has air conditioning and great food. Avoid the tourist traps on the main square.",
    },
    {
      time: "1:00pm",
      activity: "Quinta da Regaleira",
      summerNote: "The tunnels and grottoes are cool even on hot days. The Initiation Well will be busy but the queue moves fast. The shaded gardens are a welcome escape from afternoon heat.",
    },
    {
      time: "3:00pm",
      activity: "Stroll the old town, National Palace exterior",
      summerNote: "The hottest part of the day. Stick to shaded streets. Get a gelato at Nannarella or a cold drink at Café Saudade.",
    },
    {
      time: "4:30pm",
      activity: "Optional: Monserrate Palace (bus 435, 15 min)",
      summerNote: "If you have energy, Monserrate's cool interior and subtropical gardens are perfect for hot afternoons. Far fewer crowds than the hilltop palaces.",
    },
    {
      time: "6:30pm",
      activity: "Train back to Lisbon (or sunset dinner in Sintra)",
      summerNote: "Still 2+ hours of daylight. If staying for dinner, Tascantiga has a shaded terrace. The 8pm train gets you back for a late dinner in Lisbon.",
    },
  ],
};

export const summerPackingList = [
  "1.5-2L water bottle (refill at palace fountains — they're drinkable)",
  "Sunscreen SPF 30+ (reapply at midday — hilltop palaces have no shade)",
  "Wide-brim hat or cap (essential for Moorish Castle walls)",
  "Comfortable walking shoes with grip (cobblestones + forest trails, NOT sandals)",
  "Light layers for the shaded forest trails (5-8°C cooler than town)",
  "Small backpack for water, sunscreen, and layers",
  "Portable phone charger",
  "Online tickets (pre-booked on parquesdesintra.pt — skip the queue)",
];

export const summerFaqs = [
  {
    question: "Is summer the worst time to visit Sintra?",
    answer:
      "Not the worst, but the most challenging. Crowds and heat are real issues. However, summer has the longest days, best weather, and fullest gardens. The key is starting early (first train) and having a strategy for the crowds. June and September are significantly better than July-August.",
  },
  {
    question: "How hot does Sintra get in summer?",
    answer:
      "Town center: 25-30°C. Hilltop palaces: 28-35°C in direct sun. The forest trails are 5-8°C cooler than exposed areas. Sintra is slightly cooler than Lisbon (which hits 35-40°C) thanks to the Atlantic breeze and altitude, but it's still hot enough to need sun protection.",
  },
  {
    question: "Should I skip Pena Palace interior in summer?",
    answer:
      "We recommend it. The grounds-only ticket (€12 vs €20 full) gives you the terraces, views, and photo opportunities. The interior queue is 45-90 minutes in peak summer and the rooms, while interesting, don't justify that wait. Use the saved time and money for another palace instead.",
  },
  {
    question: "What's the best day of the week to visit in summer?",
    answer:
      "Tuesday through Thursday. Mondays can be busy (some Lisbon museums close Monday, pushing tourists to Sintra). Fridays start the weekend rush. Saturday and Sunday are the most crowded days of the week.",
  },
  {
    question: "Can I combine Sintra and the beach in summer?",
    answer:
      "Yes — it's one of summer's biggest advantages. Do palaces in the morning (9am-1pm), then bus or taxi to Cabo da Roca, Praia das Macas, or Azenhas do Mar for the afternoon. The Sintra tram runs to the beach on summer weekends.",
  },
  {
    question: "Is June or September better than July-August?",
    answer:
      "Much better. June has good weather with fewer crowds (schools are still in session). September is warm with noticeably thinner crowds. Both months have long daylight hours. If you can choose, early June or mid-September is the sweet spot.",
  },
];
