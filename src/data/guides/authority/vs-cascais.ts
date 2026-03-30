export interface ComparisonCategory {
  category: string;
  sintra: string;
  cascais: string;
  winner: "sintra" | "cascais" | "tie";
}

export const comparisonCategories: ComparisonCategory[] = [
  {
    category: "Vibe",
    sintra: "Mystical, forested, fairytale palaces, fog-wrapped hilltops. A Romantic-era dream.",
    cascais: "Sunny, beachy, relaxed coastal town with a marina and seafood restaurants.",
    winner: "tie",
  },
  {
    category: "Main Attractions",
    sintra: "5 UNESCO-listed palaces, Initiation Well, Moorish Castle, botanical gardens.",
    cascais: "Beaches (Guincho, Praia da Rainha), Boca do Inferno sea cave, old town.",
    winner: "sintra",
  },
  {
    category: "Uniqueness",
    sintra: "Quinta da Regaleira's Initiation Well has no equivalent in Europe. The palace diversity is unmatched.",
    cascais: "Pleasant but generic — many European coastal towns offer a similar experience.",
    winner: "sintra",
  },
  {
    category: "Beaches",
    sintra: "Wild, dramatic (Praia da Ursa, Praia da Adraga) but hard to access and cold water.",
    cascais: "Easy, sandy town beaches plus Guincho for surfing. Warmer and more swimmable.",
    winner: "cascais",
  },
  {
    category: "Food Scene",
    sintra: "Limited but improving. A few excellent restaurants plus iconic pastries (travesseiros).",
    cascais: "Strong seafood restaurants, diverse dining, better nightlife.",
    winner: "cascais",
  },
  {
    category: "Getting There",
    sintra: "Train from Rossio: 40 min, €2.35. Then bus 434 for hilltop palaces.",
    cascais: "Train from Cais do Sodré: 40 min, €2.35. Everything walkable from station.",
    winner: "tie",
  },
  {
    category: "Walking / Effort",
    sintra: "Lots of hills, stairs, 10-15km walking. You'll work for it.",
    cascais: "Flat, easy walking. The town is compact and stroller-friendly.",
    winner: "cascais",
  },
  {
    category: "Crowds",
    sintra: "Very crowded in summer (Pena Palace queues 45-60 min). Less popular palaces are quiet.",
    cascais: "Busy in summer but feels less overwhelming due to open beach spaces.",
    winner: "cascais",
  },
  {
    category: "Budget",
    sintra: "Palace tickets add up (€12-20 each). Budget: €30-55/day including transport.",
    cascais: "Mostly free (beaches, old town). Budget: €15-30/day including transport.",
    winner: "cascais",
  },
  {
    category: "Rainy Day",
    sintra: "Fog and rain make Sintra more atmospheric. Palaces and tunnels work in any weather. We visited Regaleira in a steady drizzle and the tunnels felt more eerie and atmospheric than on a sunny day.",
    cascais: "A beach town in rain is dull. Limited indoor attractions.",
    winner: "sintra",
  },
];

export const scenarios = [
  {
    scenario: "First time in Lisbon area",
    recommendation: "sintra" as const,
    reason: "Sintra offers experiences you can't find elsewhere in Europe. Cascais is pleasant but replaceable. If you only have one day trip, Sintra wins.",
  },
  {
    scenario: "Already visited Sintra",
    recommendation: "cascais" as const,
    reason: "If you've done Sintra's palaces, Cascais makes a nice, low-key beach day. Combine with a seafood lunch and a walk along the coast.",
  },
  {
    scenario: "Traveling with young kids or mobility issues",
    recommendation: "cascais" as const,
    reason: "Cascais is flat, stroller-friendly, and has easy beaches. Sintra's hills and stairs are exhausting with small children or mobility limitations.",
  },
  {
    scenario: "Photography trip",
    recommendation: "sintra" as const,
    reason: "Sintra is dramatically more photogenic — fog-wrapped castles, the Initiation Well, colorful palace facades. Cascais sunset at Boca do Inferno is the only comparison.",
  },
  {
    scenario: "Beach day wanted",
    recommendation: "cascais" as const,
    reason: "Obviously. Sintra's beaches exist but are wild, cold, and hard to reach. Cascais has easy town beaches and Guincho for surfers.",
  },
  {
    scenario: "Rainy day",
    recommendation: "sintra" as const,
    reason: "Rain makes Sintra haunting (fog, atmosphere, empty paths). Rain makes Cascais boring. Sintra's palaces and tunnels work in any weather.",
  },
  {
    scenario: "Two spare days",
    recommendation: "both" as const,
    reason: "Do Sintra on Day 1 (palaces), Cascais on Day 2 (beach + seafood). Or: Sintra palaces → Bus 403 → Cabo da Roca → Cascais in one epic day, with Cascais proper the next day. We did the full Sintra-Roca-Cascais loop and ended up at a seaside restaurant in Cascais watching the sunset — genuinely one of the best days of travel we've had.",
  },
];

export const vsCascaisFaqs = [
  {
    question: "Should I go to Sintra or Cascais from Lisbon?",
    answer:
      "Sintra if it's your first time — the palaces and experiences are unique in Europe. Cascais if you want a relaxed beach day. If you have two days, do both: Sintra first, Cascais second.",
  },
  {
    question: "Can I visit Sintra and Cascais in one day?",
    answer:
      "Technically yes: visit 1-2 Sintra palaces in the morning, bus 403 to Cabo da Roca, then continue to Cascais for late afternoon/dinner, train back to Lisbon. It's tight but doable. Both places feel rushed though. We've done it and survived, but wished we'd had a second day to slow down in Cascais.",
  },
  {
    question: "Which is better for kids — Sintra or Cascais?",
    answer:
      "Cascais for easy days with younger kids (flat, beaches, ice cream). Sintra's Regaleira tunnels are amazing for kids 4+ but the hills are exhausting. It depends on your kids' ages and energy levels.",
  },
  {
    question: "Which is cheaper — Sintra or Cascais?",
    answer:
      "Cascais is cheaper overall. Train costs are identical (€2.35 each way), but Sintra adds €20-50 in palace tickets. Cascais's main attractions (beaches, old town) are free.",
  },
  {
    question: "How do I get from Sintra to Cascais?",
    answer:
      "Bus 403 runs from Sintra station via Cabo da Roca to Cascais (€4.50, about 60 min to Cascais, 30 min to Cabo da Roca). It's a scenic coastal route. From Cascais, train back to Lisbon from Cais do Sodré line.",
  },
];
