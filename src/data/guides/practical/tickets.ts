export interface TicketOption {
  palace: string;
  slug: string;
  adultPrice: number;
  youthPrice: number; // 6-17
  seniorPrice: number; // 65+
  freeUnder: number;
  notes: string;
  worthIt: "yes" | "conditional" | "no";
  worthItReason: string;
  buyOnlineUrl: string;
}

export interface ComboTicket {
  name: string;
  includes: string[];
  adultPrice: number;
  savings: number;
  bestFor: string;
  recommended: boolean;
}

export interface SkipLineStrategy {
  strategy: string;
  effectiveness: "high" | "medium" | "low";
  details: string;
}

export const individualTickets: TicketOption[] = [
  {
    palace: "Pena Palace (Grounds Only)",
    slug: "pena-palace-guide",
    adultPrice: 12,
    youthPrice: 10,
    seniorPrice: 10,
    freeUnder: 6,
    notes: "Access to park and exterior terraces only. Our recommended option.",
    worthIt: "yes",
    worthItReason:
      "The exterior and terraces are the highlight. We paid the extra €8 for the interior once and spent 45 minutes in a shuffling queue for rooms we walked through in 10 minutes. Never again.",
    buyOnlineUrl: "https://www.parquesdesintra.pt",
  },
  {
    palace: "Pena Palace (Full — Park + Interior)",
    slug: "pena-palace-guide",
    adultPrice: 20,
    youthPrice: 17,
    seniorPrice: 17,
    freeUnder: 6,
    notes: "Includes interior rooms. Expect 30-60 min queue in peak season.",
    worthIt: "conditional",
    worthItReason:
      "Only worth it off-season (Nov-Feb) when queues are short. The interior is noticeably disappointing compared to the exterior.",
    buyOnlineUrl: "https://www.parquesdesintra.pt",
  },
  {
    palace: "Quinta da Regaleira",
    slug: "quinta-da-regaleira-guide",
    adultPrice: 20,
    youthPrice: 15,
    seniorPrice: 15,
    freeUnder: 6,
    notes: "Single ticket covers everything. Timed entry in peak season — book ahead.",
    worthIt: "yes",
    worthItReason:
      "The Initiation Well alone is worth the ticket. The gardens with tunnels and grottoes make this a no-brainer.",
    buyOnlineUrl: "https://www.regaleira.pt",
  },
  {
    palace: "Moorish Castle",
    slug: "moorish-castle-guide",
    adultPrice: 12,
    youthPrice: 10,
    seniorPrice: 10,
    freeUnder: 6,
    notes: "Best views in Sintra. 15-min walk from Pena.",
    worthIt: "yes",
    worthItReason:
      "€12 for 360-degree panoramic views and 1,000-year-old fortress walls. Great value for the views alone.",
    buyOnlineUrl: "https://www.parquesdesintra.pt",
  },
  {
    palace: "Monserrate Palace",
    slug: "monserrate-palace-guide",
    adultPrice: 12,
    youthPrice: 10,
    seniorPrice: 10,
    freeUnder: 6,
    notes: "Includes palace interior and 33-hectare gardens. Bus 435 or taxi/Uber.",
    worthIt: "yes",
    worthItReason:
      "€12 for the best interior in Sintra and acres of botanical gardens with almost no crowds. Great value.",
    buyOnlineUrl: "https://www.parquesdesintra.pt",
  },
  {
    palace: "National Palace of Sintra",
    slug: "national-palace-guide",
    adultPrice: 13,
    youthPrice: 10.5,
    seniorPrice: 10.5,
    freeUnder: 6,
    notes: "In town center — no hills. Best audio guide in Sintra (included).",
    worthIt: "conditional",
    worthItReason:
      "Worth it if you have spare time or it's raining. Skip if choosing between this and any other palace.",
    buyOnlineUrl: "https://www.parquesdesintra.pt",
  },
];

export const comboTickets: ComboTicket[] = [
  {
    name: "Pena Palace + Moorish Castle Combo",
    includes: ["Pena Palace (grounds)", "Moorish Castle"],
    adultPrice: 21,
    savings: 3,
    bestFor: "Most visitors — these two are a 15-min walk apart. We tried the combo ticket and saved about €3, which covered our travesseiros for the day.",
    recommended: true,
  },
  {
    name: "Parques de Sintra 3-Park Pass",
    includes: ["Pena Palace (grounds)", "Moorish Castle", "Monserrate Palace"],
    adultPrice: 31,
    savings: 5,
    bestFor: "2-day visitors who want all three Parques de Sintra properties.",
    recommended: false,
  },
  {
    name: "Lisboa Card (24h/48h/72h)",
    includes: [
      "Free train to Sintra",
      "Discounts on some palaces",
      "Lisbon transport",
    ],
    adultPrice: 27,
    savings: 0,
    bestFor:
      "NOT recommended for Sintra-focused trips. The palace discounts are small (10-15%) and it doesn't cover Regaleira.",
    recommended: false,
  },
];

export const skipLineStrategies: SkipLineStrategy[] = [
  {
    strategy: "Buy tickets online in advance",
    effectiveness: "high",
    details:
      "All Parques de Sintra tickets (Pena, Moorish, Monserrate, National) can be bought at parquesdesintra.pt. Regaleira has its own site. Online tickets let you skip the ticket office queue, which can be 20-30 min at Pena in summer.",
  },
  {
    strategy: "Arrive before 9:30am",
    effectiveness: "high",
    details:
      "The first bus 434 arrives at Pena around 9:20am. Tour groups arrive from 10:30am onwards. We caught the 9:20 bus on a Saturday in May and had the Pena terraces nearly to ourselves for a solid 40 minutes before the crowds hit.",
  },
  {
    strategy: "Visit Pena Palace last (not first)",
    effectiveness: "medium",
    details:
      "Most tourists go Pena first. If you start at Regaleira (opens 10am), then do Moorish Castle, you'll reach Pena by early afternoon when morning crowds thin.",
  },
  {
    strategy: "Visit on weekdays, avoid Saturdays",
    effectiveness: "medium",
    details:
      "Saturday is the worst day. Sunday is slightly better. Tuesday-Thursday are the quietest weekdays. Check parquesdesintra.pt for any seasonal closure days before visiting.",
  },
  {
    strategy: "Go off-season (November-February)",
    effectiveness: "high",
    details:
      "Winter crowds are 70-80% smaller. Trade-off: shorter daylight hours, occasional rain. But the misty atmosphere is actually more atmospheric.",
  },
];

export const ticketsFaqs = [
  {
    question: "Where do I buy Sintra palace tickets?",
    answer:
      "Pena Palace, Moorish Castle, Monserrate, and National Palace tickets are all at parquesdesintra.pt. Quinta da Regaleira has its own site at regaleira.pt. Always buy online — it saves 20-30 minutes in the ticket queue.",
  },
  {
    question: "Is there a single pass for all Sintra palaces?",
    answer:
      "No single pass covers all five. The closest is the Pena + Moorish combo (€21, saves €3). Regaleira is separately owned and doesn't participate in any combo deals.",
  },
  {
    question: "Are Sintra palace tickets refundable?",
    answer:
      "Parques de Sintra tickets (Pena, Moorish, Monserrate, National) can be rescheduled up to 24 hours before. Regaleira tickets are non-refundable but have no fixed time slot.",
  },
  {
    question: "Do kids need tickets for Sintra palaces?",
    answer:
      "Children under 6 are free at all palaces. Ages 6-17 get reduced prices (roughly 10-20% off). Some palaces also offer family tickets — check the official sites.",
  },
  {
    question: "Should I buy the Lisboa Card for Sintra?",
    answer:
      "Generally no. The Lisboa Card gives small discounts (10-15%) on some palaces but doesn't cover Regaleira. It's only worth it if you're also heavily using Lisbon transport. Buy individual palace tickets instead.",
  },
  {
    question: "What's the total cost to visit all 5 Sintra palaces?",
    answer:
      "Individual adult tickets total €69 (Regaleira €20 + Pena grounds €12 + Moorish Castle €12 + Monserrate €12 + National Palace €13). With the Pena + Moorish combo, that drops to €66.",
  },
];
