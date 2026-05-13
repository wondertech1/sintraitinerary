export interface TipCategory {
  category: string;
  icon: string;
  tips: { tip: string; link?: { label: string; href: string } }[];
}

export const tipCategories: TipCategory[] = [
  {
    category: "Before You Go",
    icon: "clipboard",
    tips: [
      {
        tip: "Buy palace tickets online the night before — saves 20-30 min in queues at Pena Palace.",
        link: { label: "Full ticket guide", href: "/sintra-tickets-and-passes" },
      },
      {
        tip: "October and May are the best months. Avoid August at all costs.",
        link: { label: "Month-by-month guide", href: "/best-time-to-visit-sintra" },
      },
      {
        tip: "Download offline maps — mobile signal is unreliable on the forested trails between palaces.",
      },
      {
        tip: "For mobile data, buy a Portuguese SIM (MEO, Vodafone, or NOS) at Lisbon airport for around €15-20, or use an eSIM. Palace gardens have patchy signal — download offline maps before you go.",
      },
      {
        tip: "Download the Parques de Sintra app before your visit — it shows real-time wait times and capacity at each palace, plus interactive maps of the grounds.",
      },
      {
        tip: "Pack layers. Sintra's hilltop is 5-7°C cooler than Lisbon with unpredictable fog, even in summer.",
      },
      {
        tip: "Wear proper walking shoes. Cobblestones + steep forest trails + palace stairs = 10-15km of serious walking.",
        link: { label: "Walking route details", href: "/sintra-walking-routes" },
      },
    ],
  },
  {
    category: "Getting There & Around",
    icon: "train",
    tips: [
      {
        tip: "Train from Lisbon Rossio: 40 min, €2.35 each way, every 20-30 min. The cheapest and easiest option. Coming from the airport? See our <a href=\"https://lisbonitinerary.com/guides/lisbon-airport-transfer\" target=\"_blank\" rel=\"noopener\">Lisbon airport transfer guide</a> for how to get from the airport to Rossio.",
        link: { label: "Full transport guide", href: "/lisbon-to-sintra-day-trip" },
      },
      {
        tip: "Bus 434 (€13.50 day pass) connects the train station to Pena Palace and Moorish Castle. Get on the first bus.",
      },
      {
        tip: "Skip tuk-tuks. They charge €10-15 per person for short rides. Bus 434 + walking covers everything. We watched a tuk-tuk driver charge a family €12 per person for a 5-minute ride to Regaleira — a flat 10-minute walk.",
      },
      {
        tip: "Walk between Pena Palace and Moorish Castle (20-25 min gate-to-gate downhill through forest, including through Pena's grounds). Don't bus back and forth.",
        link: { label: "All walking routes", href: "/sintra-walking-routes" },
      },
      {
        tip: "Monserrate Palace has no bus service. Budget €6-8 for an Uber/taxi each way from town.",
      },
      {
        tip: "English is widely spoken at palaces and tourist restaurants. At smaller venues (Capuchos, Monserrate café, São Pedro restaurants), staff may have limited English. Basic Portuguese goes a long way: obrigado/obrigada (thank you), bom dia (good morning), a conta por favor (the bill please).",
      },
    ],
  },
  {
    category: "Palace Strategy",
    icon: "crown",
    tips: [
      {
        tip: "Maximum 3 palaces per day. Two is more enjoyable. Don't try to see all 5 in one day.",
        link: { label: "Which palaces to visit", href: "/guides/which-sintra-palaces-to-visit" },
      },
      {
        tip: "Quinta da Regaleira is the #1 palace. If you only visit one, make it this.",
        link: { label: "Regaleira guide", href: "/guides/quinta-da-regaleira-guide" },
      },
      {
        tip: "Skip Pena Palace interior. Buy the €12 grounds-only ticket — the exterior and terraces are the star.",
        link: { label: "Pena Palace guide", href: "/guides/pena-palace-guide" },
      },
      {
        tip: "Best crowd-beating move in Sintra: enter Pena Park through the lower gates at 9:00am (30 minutes before the palace opens), walk up through the forest trails, and arrive at the terraces from below by 9:30. You skip the Bus 434 queue entirely and get the palace nearly to yourself.",
      },
      {
        tip: "Start at Regaleira (opens 10am), not Pena. Everyone goes to Pena first — reverse the crowd flow. This advice applies to summer. In winter, when Pena opens at 9:30am and Regaleira at 10am, starting at Pena lets you catch the morning fog at its most dramatic and beat the crowds before they arrive on the first bus.",
        link: { label: "Crowd-avoiding route", href: "/lisbon-to-sintra-day-trip" },
      },
      {
        tip: "The Moorish Castle is the best value in Sintra — €12 for the best panoramic views and lowest crowds.",
        link: { label: "Moorish Castle guide", href: "/guides/moorish-castle-guide" },
      },
    ],
  },
  {
    category: "Money Saving",
    icon: "piggybank",
    tips: [
      {
        tip: "A full day trip costs €30-40 on a budget, €55-70 mid-range, €90-120 for all 5 palaces + nice lunch.",
        link: { label: "Full budget breakdown", href: "/sintra-on-a-budget" },
      },
      {
        tip: "Pena + Moorish Castle combo ticket: €21 (saves €3 vs individual). The only combo worth buying.",
        link: { label: "All ticket prices", href: "/sintra-tickets-and-passes" },
      },
      {
        tip: "Eat the prato do dia (daily special) at traditional restaurants — €10-12 for a full meal.",
        link: { label: "Restaurant guide", href: "/where-to-eat-in-sintra" },
      },
      {
        tip: "Skip the Lisboa Card for Sintra. Individual tickets + train fare is almost always cheaper.",
      },
      {
        tip: "Pack water and snacks from Lisbon. Bottled water in Sintra's tourist areas costs €2-3 (vs €0.50 in a Lisbon supermarket).",
      },
    ],
  },
  {
    category: "Food & Drink",
    icon: "utensils",
    tips: [
      {
        tip: "Must-try: travesseiros (almond puff pastry, €1.80) and queijadas (cheese tarts, €1.50). Get them at Piriquita or Café Saudade. We bought four travesseiros 'for the group' and ate them all ourselves before reaching Regaleira. No regrets.",
        link: { label: "What to eat in Sintra", href: "/where-to-eat-in-sintra" },
      },
      {
        tip: "Tascantiga is the best restaurant. Romaria de Baco for straightforward traditional food. Skip Café Paris — overpriced for the quality, and the food doesn't match what you'll get at proper restaurants nearby.",
      },
      {
        tip: "Eat lunch after palaces (1-2pm), not before. Restaurants are emptier, and you use the cool morning hours for hiking.",
      },
      {
        tip: "Bar Fonte da Pipa is a hidden garden bar for end-of-day drinks. Down a narrow alley — most tourists miss it.",
      },
      {
        tip: "Tipping in Portugal: 5-10% at sit-down restaurants if you're happy with the service. At cafés, round up to the nearest euro. Tipping is appreciated but not obligatory.",
      },
    ],
  },
  {
    category: "Photography",
    icon: "camera",
    tips: [
      {
        tip: "Arrive at Regaleira's Initiation Well at 10am opening for crowd-free shots. By 11am it's packed.",
        link: { label: "All photo spots ranked", href: "/sintra-photography-guide" },
      },
      {
        tip: "Foggy winter mornings produce the most dramatic Sintra photos. Clear summer skies are overrated for photography here.",
      },
      {
        tip: "Wide-angle lens (16-35mm) is essential — the Initiation Well, tunnels, and palace interiors all need it.",
      },
      {
        tip: "The Moorish Castle at golden hour, with Pena Palace in the background, is the signature Sintra landscape shot.",
      },
    ],
  },
  {
    category: "Safety & Health",
    icon: "shield",
    tips: [
      {
        tip: "Tap water in Portugal is safe to drink everywhere — refill bottles at palace fountains to save money and reduce plastic.",
      },
      {
        tip: "European emergency number: 112. Nearest hospital: Hospital Fernando Fonseca (Amadora-Sintra), 20 minutes by car. Pharmacies in the town center include Farmacia Oliveira on the main road.",
      },
      {
        tip: "Check yourself for ticks after forest walks, especially the Cruz Alta trail and Monserrate paths in spring and summer.",
      },
      {
        tip: "Watch for pickpockets at Rossio train station and in the Bus 434 queue — keep valuables in front pockets.",
      },
      {
        tip: "Public toilets at Sintra train station, in the town center near the National Palace, and inside every palace. There are no facilities on the forest trails between palaces — plan accordingly.",
      },
    ],
  },
  {
    category: "Families",
    icon: "baby",
    tips: [
      {
        tip: "Regaleira's tunnels are the #1 kid activity in Sintra. Every child aged 4+ loves it.",
        link: { label: "Full family guide", href: "/sintra-with-kids" },
      },
      {
        tip: "Leave the stroller at the hotel. Sintra's cobblestones and stairs defeat every stroller. Bring a carrier.",
      },
      {
        tip: "Maximum 2 palaces per day with kids. One palace + town + playground = happier family.",
      },
      {
        tip: "Parque da Liberdade has a free playground. Perfect for a mid-day sanity break.",
      },
    ],
  },
];

export const travelTipsFaqs = [
  {
    question: "What are the most important Sintra tips?",
    answer:
      "Buy tickets online, arrive early, start at Regaleira (opens 10am) instead of Pena in summer — in winter, start at Pena for the morning fog, wear walking shoes, bring layers, and limit yourself to 2-3 palaces per day. These six things will dramatically improve your visit.",
  },
  {
    question: "What mistakes do tourists make in Sintra?",
    answer:
      "Starting at Pena Palace in summer (everyone does — reverse the flow), buying the Pena interior ticket in peak season when the queue is 45 minutes, taking tuk-tuks instead of walking, not buying tickets online, arriving after 10am, and trying to see all 5 palaces in one day. We made the Pena interior mistake on our first summer visit — 45 minutes queuing for underwhelming rooms. In winter, when there's no queue, the interior is actually worth seeing. Save your money and time in summer.",
  },
  {
    question: "How should I plan my Sintra day?",
    answer:
      "8:00am train from Lisbon → Regaleira at 10am opening → Moorish Castle → Lunch in town → Pena Palace grounds (afternoon) → Pastries → 4:30pm train home. Or see our detailed itineraries for minute-by-minute plans.",
  },
  {
    question: "Is Sintra accessible for wheelchair users?",
    answer:
      "Unfortunately, most of Sintra is challenging for wheelchairs. The steep hills, cobblestones, and palace stairs create significant barriers. The National Palace has partial ground-floor access, and the town center is relatively flat. Monserrate's main garden paths are smoother than others.",
  },
];
