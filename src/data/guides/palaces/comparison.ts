export interface PalaceRanking {
  rank: number;
  name: string;
  slug: string;
  verdict: "must-see" | "recommended" | "conditional" | "optional";
  verdictText: string;
  oneLiner: string;
  cost: string;
  duration: string;
  crowdLevel: 1 | 2 | 3 | 4 | 5;
  bestFor: string;
  skipIf: string;
  interior: 1 | 2 | 3 | 4 | 5;
  exterior: 1 | 2 | 3 | 4 | 5;
  gardens: 1 | 2 | 3 | 4 | 5;
  value: 1 | 2 | 3 | 4 | 5;
}

export const palaceRankings: PalaceRanking[] = [
  {
    rank: 1,
    name: "Quinta da Regaleira",
    slug: "quinta-da-regaleira-guide",
    verdict: "must-see",
    verdictText: "The #1 pick — don't leave Sintra without visiting",
    oneLiner:
      "The Initiation Well is genuinely unique in Europe — we descended in near-silence and emerged through a hidden grotto into daylight. The gardens are a labyrinth of tunnels and grottoes. Worth every cent of the €20.",
    cost: "€20",
    duration: "2 hrs",
    crowdLevel: 3,
    bestFor: "Everyone. Seriously.",
    skipIf: "Serious mobility issues (steep paths, narrow stairs).",
    interior: 3,
    exterior: 4,
    gardens: 5,
    value: 5,
  },
  {
    rank: 2,
    name: "Moorish Castle",
    slug: "moorish-castle-guide",
    verdict: "must-see",
    verdictText: "Best views in Sintra — €12 well spent",
    oneLiner:
      "1,000-year-old fortress walls with better panoramic views than Pena Palace and a tenth of the crowds. A 15-minute walk from Pena.",
    cost: "€12",
    duration: "45 min",
    crowdLevel: 2,
    bestFor: "View seekers, history lovers, families with older kids.",
    skipIf: "You physically can't handle more stairs after Pena.",
    interior: 1,
    exterior: 4,
    gardens: 2,
    value: 5,
  },
  {
    rank: 3,
    name: "Pena Palace",
    slug: "pena-palace-guide",
    verdict: "recommended",
    verdictText: "Grounds-only ticket — the interior isn't worth the queue",
    oneLiner:
      "The colorful hilltop icon is visually stunning from outside. Buy the €12 grounds-only ticket — the €20 interior adds cramped rooms and a 45-minute queue.",
    cost: "€12 grounds / €20 full",
    duration: "2–3 hrs",
    crowdLevel: 5,
    bestFor: "Photographers, first-time visitors wanting the iconic shot.",
    skipIf: "You hate crowds. Regaleira is a better overall experience.",
    interior: 2,
    exterior: 5,
    gardens: 3,
    value: 3,
  },
  {
    rank: 4,
    name: "Monserrate Palace",
    slug: "monserrate-palace-guide",
    verdict: "recommended",
    verdictText: "Sintra's hidden gem — the best interior and almost no tourists",
    oneLiner:
      "Alhambra-quality stucco inside, 33 hectares of botanical gardens outside, and barely anyone else around. The only downside: no bus 434 service.",
    cost: "€12",
    duration: "1.5–2 hrs",
    crowdLevel: 1,
    bestFor: "Architecture lovers, garden enthusiasts, 2nd-day visitors.",
    skipIf: "You only have 1 day and need to prioritize the big three.",
    interior: 5,
    exterior: 4,
    gardens: 5,
    value: 5,
  },
  {
    rank: 5,
    name: "National Palace",
    slug: "national-palace-guide",
    verdict: "optional",
    verdictText: "Good if you have time — the easiest and most skippable palace",
    oneLiner:
      "In the town center, no hills, with good Moorish tilework and the iconic twin chimneys. The best audio guide in Sintra. But less dramatic than the others.",
    cost: "€13",
    duration: "1 hr",
    crowdLevel: 2,
    bestFor: "History buffs, rainy days, mobility-limited visitors.",
    skipIf: "You're choosing between this and any other palace. Pick the other one.",
    interior: 3,
    exterior: 2,
    gardens: 1,
    value: 3,
  },
];

export const scenarioRecommendations = [
  {
    scenario: "I only have 4-5 hours",
    palaces: ["Quinta da Regaleira", "Moorish Castle"],
    reasoning:
      "Skip Pena. We tested this exact combination on a short afternoon and it worked perfectly — Regaleira is the better overall experience and Moorish Castle has the best views. You'll avoid the worst crowds and see the most memorable sites.",
  },
  {
    scenario: "I want the classic day trip",
    palaces: ["Pena Palace (grounds)", "Moorish Castle", "Quinta da Regaleira"],
    reasoning:
      "The big three. Start with bus 434 to Pena, walk to Moorish Castle, lunch in town, finish at Regaleira. Tight but doable if you arrive before 9:30am.",
  },
  {
    scenario: "I'm an architecture nerd",
    palaces: ["Monserrate Palace", "Quinta da Regaleira", "National Palace"],
    reasoning:
      "Monserrate has the best interior (Alhambra-quality stucco). Regaleira has the most unique design concept. The National Palace has the oldest tilework. Skip Pena's interior — it's disappointing.",
  },
  {
    scenario: "I hate crowds",
    palaces: ["Monserrate Palace", "Moorish Castle", "Quinta da Regaleira (before 10am)"],
    reasoning:
      "Monserrate is virtually empty. Moorish Castle sees a fraction of Pena's crowds. Regaleira is manageable before 10am. Skip Pena entirely.",
  },
  {
    scenario: "I have 2 full days",
    palaces: ["All five — Regaleira, Pena, Moorish Castle, Monserrate, National Palace"],
    reasoning:
      "Day 1: Pena (grounds) + Moorish Castle + Regaleira. Day 2: Monserrate + National Palace + town exploration + Cabo da Roca.",
  },
  {
    scenario: "I'm traveling with kids",
    palaces: ["Quinta da Regaleira", "Moorish Castle", "Pena Palace (grounds)"],
    reasoning:
      "Regaleira's tunnels feel like an adventure. Moorish Castle walls are exciting to walk on. Pena is colorful and fun. Skip Monserrate (long garden walks bore kids) and the National Palace (too 'museum-like').",
  },
];

export const comparisonFaqs = [
  {
    question: "Which Sintra palace is the best?",
    answer:
      "Quinta da Regaleira, for the uniqueness of the Initiation Well, the quality of the gardens, and the overall experience. We've visited all five palaces across different seasons, and Regaleira is the one we'd go back to without hesitation. It's our #1 recommendation regardless of your travel style.",
  },
  {
    question: "Which palace has the best views?",
    answer:
      "The Moorish Castle. The 360-degree views from the ancient walls are arguably better than Pena Palace, with dramatically fewer crowds. The Royal Tower summit is the single best viewpoint in Sintra.",
  },
  {
    question: "Which palace has the best interior?",
    answer:
      "Monserrate Palace, by a significant margin. The Moorish-Indian stucco work rivals the Alhambra. Pena Palace's interior is famously disappointing despite the hype.",
  },
  {
    question: "Which palaces can I skip?",
    answer:
      "If you only have one day: skip Monserrate (transport hassle) and the National Palace (least dramatic). If you have two days, see all five. If choosing just one: Regaleira.",
  },
  {
    question: "How much does it cost to visit all 5 palaces?",
    answer:
      "Individual tickets: €69 total (Regaleira €20, Pena grounds €12, Moorish Castle €12, Monserrate €12, National Palace €13). We tried both the combo ticket and individual tickets — the Pena + Moorish combo saved us about €3, bringing the total to €66.",
  },
  {
    question: "Can I visit all 5 palaces in one day?",
    answer:
      "Technically possible but miserable. You'd need 8+ hours and would rush through everything. The recommended split: 3 palaces on Day 1 (Pena, Moorish Castle, Regaleira), 2 on Day 2 (Monserrate, National Palace).",
  },
];
