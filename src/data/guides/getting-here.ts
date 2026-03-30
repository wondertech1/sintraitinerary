export interface TransportOption {
  id: string;
  name: string;
  icon: string;
  cost: string;
  duration: string;
  frequency: string;
  description: string;
  pros: string[];
  cons: string[];
  recommended: boolean;
  steps?: string[];
}

export const transportOptions: TransportOption[] = [
  {
    id: "train",
    name: "Train from Lisbon Rossio",
    icon: "train",
    cost: "€2.35 each way",
    duration: "40 minutes",
    frequency: "Every 30 minutes",
    description:
      "The best option for most visitors. Trains depart from Rossio station in Baixa (Lisbon's historic center). You need a Viva Viagem card (€0.50, reloadable) or a Lisboa Card. The journey follows the scenic route through the Sintra hills.",
    pros: [
      "Cheapest option at €4.70 return",
      "Runs frequently (every 30 min)",
      "Drops you right at Sintra center",
      "No traffic or parking worries",
    ],
    cons: [
      "Can be standing-room only at peak times (9-10am) — we stood the whole 40 minutes on a Saturday in June",
      "Rossio station has limited signage — look for the CP Urbanos entrance",
    ],
    recommended: true,
    steps: [
      "Go to Rossio station in Lisbon (metro: Rossio or Restauradores). Enter through the horseshoe-arch doorway on Praça dos Restauradores.",
      "Buy/load a Viva Viagem card at the machines (select 'Sintra' as destination, €2.35 + €0.50 for card if new).",
      "Tap in at the gates. Platform is usually announced 5 min before departure.",
      "Exit at Sintra (final stop). Walk 100m downhill to the historic center, or catch bus 434 outside the station.",
    ],
  },
  {
    id: "train-oriente",
    name: "Train from Oriente Station",
    icon: "train",
    cost: "€2.35 each way",
    duration: "50 minutes",
    frequency: "Every 30 minutes",
    description:
      "Alternative if you're staying near Parque das Nações or arriving from the airport. Same train line, just a different starting point. Passes through Rossio on the way.",
    pros: [
      "Convenient if near the airport or Parque das Nações",
      "Same price as Rossio",
    ],
    cons: [
      "10 minutes longer than from Rossio",
      "Often more crowded by the time it reaches Sintra",
    ],
    recommended: false,
  },
  {
    id: "uber-taxi",
    name: "Uber / Taxi",
    icon: "car",
    cost: "€25–40 one way",
    duration: "30–45 minutes",
    frequency: "On demand",
    description:
      "More comfortable but significantly more expensive. Makes sense if you're in a group of 3-4 (splits to €8-10 per person) or if you want to start at Pena Palace directly without the bus 434 wait.",
    pros: [
      "Door-to-door convenience",
      "Can be dropped at Pena Palace gate (skips bus 434 queue)",
      "Cost-effective for groups of 3-4",
    ],
    cons: [
      "€25-40 each way (€50-80 return) for solo travelers",
      "Traffic on the N249 road can add 15+ minutes",
      "Parking in Sintra is very limited if driving yourself",
    ],
    recommended: false,
  },
  {
    id: "tour",
    name: "Organized Tour",
    icon: "bus",
    cost: "€40–80 per person",
    duration: "Full day (8-10 hrs)",
    frequency: "Daily departures",
    description:
      "Pre-arranged bus tours from Lisbon typically cover Sintra + Cascais + Cabo da Roca. Convenient if you don't want to plan anything, but you'll spend more time on the bus and less at each site. Most tours give you 2 hours at Sintra — not enough.",
    pros: [
      "Zero planning required",
      "Usually includes Cascais and Cabo da Roca",
      "Transport and guide included",
    ],
    cons: [
      "Only 2 hours at Sintra — barely enough for 1 palace",
      "Fixed schedule with no flexibility",
      "More expensive than DIY (€40-80 vs €25-40)",
      "Large groups at peak tourist times",
    ],
    recommended: false,
  },
];

export const gettingAroundSintra = [
  {
    name: "Bus 434 (Hop-on Hop-off)",
    route: "Station → Town Center → Moorish Castle → Pena Palace → Station",
    cost: "~€5 single / €13.50 day pass",
    frequency: "Every 20 min (theory) — expect 25-30 min waits in summer",
    notes:
      "The day pass is worth it if you plan to ride 2+ times. Only useful for the Pena/Moorish Castle loop — doesn't go to Regaleira, Monserrate, or Cabo da Roca.",
  },
  {
    name: "Tuk-Tuk",
    route: "Anywhere in Sintra area",
    cost: "€5-15 per ride depending on distance",
    frequency: "Available at the station and town center",
    notes:
      "Useful for Monserrate Palace (no bus 434 service). Drivers will offer full tours (€30-50/hr) but you don't need one — use them for point-to-point transport only. We bargained a tuk-tuk to Monserrate for €6 by being friendly and flexible on timing — always negotiate.",
  },
  {
    name: "Walking",
    route: "Station → Town Center (10 min), Town → Regaleira (10 min), Town → Moorish Castle (30 min uphill)",
    cost: "Free",
    frequency: "Always available",
    notes:
      "Walking downhill from Pena/Moorish Castle to town is easy and scenic (20 min). Walking uphill to Pena is a steep 40-minute hike — take the bus up, walk down.",
  },
  {
    name: "Bus 403",
    route: "Sintra Station → Cabo da Roca → Cascais",
    cost: "€4.50 per ride",
    frequency: "~every hour (check schedule at station)",
    notes:
      "Only way to reach Cabo da Roca by public transport. From Cabo da Roca, you can continue to Cascais (30 min) and take the train directly to Lisbon from there.",
  },
];

export const gettingHereFaqs = [
  {
    question: "Which Lisbon train station goes to Sintra?",
    answer:
      "Rossio station in Baixa (central Lisbon). Enter through the horseshoe-arched doorway on Praça dos Restauradores — we walked past the entrance twice before realizing it was behind the ornate Neo-Manueline facade. You can also depart from Oriente station (near the airport), but it takes 10 minutes longer.",
  },
  {
    question: "Do I need a Viva Viagem card?",
    answer:
      "Yes. Buy one at the station machines for €0.50 (reloadable). Load the Sintra train fare (€2.35). The same card works on Lisbon metro and buses. If you have a Lisboa Card, the Sintra train is included.",
  },
  {
    question: "Is the bus 434 worth the day pass?",
    answer:
      "Yes, if you plan to visit Pena Palace or Moorish Castle. A single ride is ~€5, the day pass is €13.50. You'll ride it at least twice (up and down), so the pass saves money. If you're only visiting Regaleira and the town center, you don't need bus 434 at all.",
  },
  {
    question: "Should I rent a car to visit Sintra?",
    answer:
      "No. Parking in Sintra is extremely limited and expensive. The narrow roads get congested. The train + bus 434 + walking is more practical. The only exception: if you want to visit Cabo da Roca and the beaches on the same day.",
  },
  {
    question: "How do I get back to Lisbon from Cabo da Roca?",
    answer:
      "Bus 403 back to Sintra (40 min), then train to Lisbon. Or — better route — bus 403 forward to Cascais (30 min), then train from Cascais to Lisbon Cais do Sodré (40 min, €2.35). This avoids backtracking.",
  },
];
