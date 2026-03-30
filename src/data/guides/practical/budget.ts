export interface FreeAttraction {
  name: string;
  type: "viewpoint" | "walk" | "park" | "culture" | "beach";
  description: string;
  duration: string;
  tip: string;
}

export interface MoneySavingTip {
  category: "transport" | "tickets" | "food" | "accommodation" | "general";
  tip: string;
  saving: string;
}

export interface BudgetLevel {
  level: "backpacker" | "budget" | "mid-range";
  dailyCost: string;
  transport: string;
  tickets: string;
  food: string;
  accommodation: string;
}

export const freeAttractions: FreeAttraction[] = [
  {
    name: "Sintra Old Town Walk",
    type: "walk",
    description:
      "Wander the cobbled streets, admire the National Palace exterior and twin chimneys, browse shops. The town itself is half the charm.",
    duration: "1 hr",
    tip: "Start at the train station and walk uphill through the historic center. The views improve at every turn.",
  },
  {
    name: "Parque da Liberdade",
    type: "park",
    description:
      "Free public park with walking trails, a lake, playgrounds, and shaded benches. Locals come here to escape the tourist palaces.",
    duration: "30-45 min",
    tip: "Enter from Volta do Duche. Good for a break between paid attractions.",
  },
  {
    name: "Miradouro (Viewpoint) near Moorish Castle",
    type: "viewpoint",
    description:
      "The road up to the Moorish Castle has several free viewpoints with panoramic views over Sintra, the plains, and the sea.",
    duration: "15 min",
    tip: "Stop at the viewpoints on the bus 434 route. You don't need to enter the castle for good views.",
  },
  {
    name: "Praia da Ursa",
    type: "beach",
    description:
      "A wild, dramatic beach near Cabo da Roca. Steep 20-minute descent on a dirt path — not for everyone, but jaw-dropping. We scrambled down on a clear October morning and had the entire beach to ourselves for an hour.",
    duration: "1.5-2 hrs (round trip from road)",
    tip: "Only attempt in dry weather. Bring water. Not accessible for kids or mobility-limited visitors.",
  },
  {
    name: "Cabo da Roca",
    type: "viewpoint",
    description:
      "The westernmost point of mainland Europe. Dramatic cliffs, a lighthouse, and a sense of standing at the edge of the world. Free to visit.",
    duration: "30-45 min",
    tip: "Take bus 403 from Sintra station (€4.50 one-way). The €11 certificate at the tourist office is a tourist trap — skip it.",
  },
  {
    name: "Rua das Padarias Street Food",
    type: "culture",
    description:
      "The pedestrian street in the historic center lined with bakeries, shops, and cafés. Window-shop and soak up the atmosphere for free.",
    duration: "30 min",
    tip: "Grab a €1.80 travesseiro from Piriquita to-go and eat it on a bench.",
  },
  {
    name: "Sintra Train Station to Town Walk",
    type: "walk",
    description:
      "The 15-minute walk from the station to town center is downhill and scenic — through gardens, past old quintas, with mountain views.",
    duration: "15-20 min",
    tip: "Skip the tuk-tuks at the station. This walk is pleasant and saves €5-10.",
  },
];

export const moneySavingTips: MoneySavingTip[] = [
  {
    category: "transport",
    tip: "Buy a return train ticket from Lisbon (Rossio or Oriente) — €4.70 return. Don't use the Lisboa Card for this; individual tickets are cheaper for a day trip.",
    saving: "€3-5 vs Lisboa Card allocation",
  },
  {
    category: "transport",
    tip: "Walk between Pena Palace and Moorish Castle (15 min downhill) instead of taking bus 434 back and forth. The trail through the forest is beautiful.",
    saving: "Free (already on the bus 434 route)",
  },
  {
    category: "transport",
    tip: "Skip tuk-tuks entirely. They charge €10-15 per person for short rides. We watched a couple pay €30 for a tuk-tuk to Pena — the bus 434 costs €13.50 for unlimited hop-on/hop-off all day and takes the same route.",
    saving: "€15-30 per person",
  },
  {
    category: "tickets",
    tip: "Buy the Pena + Moorish Castle combo ticket online — €21 instead of €24 separately.",
    saving: "€3",
  },
  {
    category: "tickets",
    tip: "Skip Pena Palace interior (€20) and buy grounds-only (€12). The exterior is the star; the interior is cramped and crowded.",
    saving: "€8",
  },
  {
    category: "tickets",
    tip: "If short on time, pick 2-3 palaces instead of all 5. Regaleira (€20) + Moorish Castle (€12) = €32 for the two most satisfying experiences.",
    saving: "€37 vs visiting all five",
  },
  {
    category: "food",
    tip: "Eat the daily special (prato do dia) at traditional restaurants — a full meal with drink for €10-12 vs à la carte at €16-20.",
    saving: "€6-8 per person",
  },
  {
    category: "food",
    tip: "Buy pastries to-go from Piriquita or Café Saudade instead of sitting down. Take-away is 30% cheaper and you can eat in the free park.",
    saving: "€2-3 per person",
  },
  {
    category: "food",
    tip: "Pack water and snacks from Lisbon. Water bottles in Sintra's tourist areas are €2-3 vs €0.50 at a Lisbon supermarket.",
    saving: "€3-5",
  },
  {
    category: "accommodation",
    tip: "Stay in Lisbon and day-trip. Sintra hotels charge 30-50% more than equivalent Lisbon options. The train is only 40 minutes.",
    saving: "€30-80 per night",
  },
  {
    category: "general",
    tip: "Visit in low season (October-March). Palace tickets are the same price, but Lisbon accommodation, flights, and restaurants are all 20-40% cheaper.",
    saving: "20-40% on trip total",
  },
];

export const budgetLevels: BudgetLevel[] = [
  {
    level: "backpacker",
    dailyCost: "€45-55",
    transport: "Train return €4.70 + walk everywhere",
    tickets: "Regaleira (€20) + Moorish Castle (€12) = €32",
    food: "Pack lunch + one pastry (€5)",
    accommodation: "Day trip from Lisbon (€0)",
  },
  {
    level: "budget",
    dailyCost: "€75-90",
    transport: "Train €4.70 + Bus 434 €13.50",
    tickets: "Pena+Moorish combo (€21) + Regaleira (€20) = €41",
    food: "Pastry + prato do dia lunch (€15)",
    accommodation: "Day trip from Lisbon (€0)",
  },
  {
    level: "mid-range",
    dailyCost: "€110-145",
    transport: "Train €4.70 + Bus 434 €13.50 + taxi to Monserrate €10",
    tickets: "All 5 palaces = €66 (with combo)",
    food: "Café breakfast + restaurant lunch + pastries (€30)",
    accommodation: "Day trip from Lisbon (€0)",
  },
];

export const budgetFaqs = [
  {
    question: "How much does a day trip to Sintra cost?",
    answer:
      "A budget day trip costs €45-55 (train + 2 palaces + packed lunch). A comfortable day with 3 palaces and restaurant lunch runs €75-90. Visiting all 5 palaces with full meals: €110-145. All per person.",
  },
  {
    question: "What's free to do in Sintra?",
    answer:
      "Walking the historic town center, Parque da Liberdade, the viewpoints on the road to Moorish Castle, Cabo da Roca (westernmost point of Europe), and the dramatic Praia da Ursa beach are all free.",
  },
  {
    question: "Is the Lisboa Card worth it for Sintra?",
    answer:
      "No. The Lisboa Card gives small discounts (10-15%) on some palaces but doesn't cover Regaleira. A return train ticket (€4.70) plus individual palace tickets is almost always cheaper.",
  },
  {
    question: "Can I visit Sintra on a tight budget?",
    answer:
      "Yes. Train from Lisbon (€4.70), Regaleira (€20) and Moorish Castle (€12), a travesseiro to-go (€1.80), and water from the market (€0.70). That's about €39 per person.",
  },
  {
    question: "What's the cheapest way to get from Lisbon to Sintra?",
    answer:
      "The train from Rossio or Oriente station — €2.35 each way (€4.70 return) with a Viva Viagem card. Takes 40 minutes. Trains run every 20-30 minutes. An Uber from Lisbon is €25-35 — only worth it if splitting between 4 people.",
  },
  {
    question: "Are there any free palace entries?",
    answer:
      "No palace offers free general admission. However, children under 6 are free at all palaces. Some palaces occasionally have free days (usually in May for museum month) — check parquesdesintra.pt for current offers.",
  },
];
