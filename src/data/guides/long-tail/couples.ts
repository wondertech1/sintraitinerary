export interface RomanticSpot {
  name: string;
  type: "palace" | "restaurant" | "viewpoint" | "experience" | "stay";
  description: string;
  tip: string;
  bestTime: string;
  cost: string;
}

export const romanticSpots: RomanticSpot[] = [
  {
    name: "Monserrate Palace & Gardens",
    type: "palace",
    description:
      "The most romantic palace in Sintra. Gothic-Moorish architecture with subtropical gardens, hidden pathways, and a waterfall grotto. Far fewer crowds than Pena or Regaleira. Walk the garden paths hand-in-hand — every turn reveals something beautiful.",
    tip: "The lawn in front of the palace is perfect for sitting together and watching the light change. Bring a small picnic blanket.",
    bestTime: "Late afternoon when the golden light hits the carved stone arches",
    cost: "€12 per person",
  },
  {
    name: "Seteais Palace Terrace",
    type: "viewpoint",
    description:
      "Walk through the neoclassical arch of this 18th-century palace hotel to a terrace with views over the Serra and the Atlantic. Order wine or cocktails at the bar — it's open to non-guests. One of the most elegant settings in Portugal.",
    tip: "Go at sunset. Order the local Colares wine — it's from vineyards you can see from the terrace. Dress slightly up — it's that kind of place.",
    bestTime: "Sunset (1-2 hours before)",
    cost: "Free entry. Drinks €8-15",
  },
  {
    name: "Regaleira by Twilight",
    type: "experience",
    description:
      "Quinta da Regaleira is mysterious by day but otherworldly in the last hour before closing. The gardens darken, the tunnels feel distinctly secretive, and the Initiation Well becomes a descent into shadow. Few visitors stay this late.",
    tip: "Enter 2 hours before closing. Visit the gardens first, save the well for the final 30 minutes when the light is lowest.",
    bestTime: "Last 90 minutes before closing",
    cost: "€20 per person",
  },
  {
    name: "Dinner at Incomum",
    type: "restaurant",
    description:
      "Modern Portuguese cuisine in an intimate setting. Chef Luis Santos creates dishes that are beautiful and surprising — deconstructed bacalhau, octopus with sweet potato, innovative desserts. The tasting menu is the move for a special night.",
    tip: "Book 2-3 days ahead, request a window table. The tasting menu (€45-55) is the best fine dining value in Sintra.",
    bestTime: "Dinner, 7:30-8pm",
    cost: "€35-55 per person with wine",
  },
  {
    name: "Peninha Chapel at Sunset",
    type: "viewpoint",
    description:
      "A hilltop chapel with panoramic Atlantic views. At sunset, the sky turns pink and gold over the ocean, the chapel silhouette is dramatic, and you'll likely be completely alone. One of the most romantic viewpoints in Portugal.",
    tip: "Requires a car. Bring a blanket and a bottle of wine. Arrive 45 minutes before sunset for the full light show.",
    bestTime: "45 min before sunset",
    cost: "Free",
  },
  {
    name: "Quinta de São Thiago",
    type: "stay",
    description:
      "A 16th-century manor house turned intimate hotel, surrounded by gardens with a pool and chapel. Breakfast is served in a dining room with 500-year-old stone walls. It's the most romantic overnight in the Sintra area — quiet, historic, and memorable.",
    tip: "Book the garden-view room. The pool is small but beautiful. You'll need a car or taxi to reach town (10 min drive).",
    bestTime: "Overnight stay",
    cost: "€140-220/night",
  },
  {
    name: "Villa Sassetti Sunset Walk",
    type: "experience",
    description:
      "The free trail from town to the Moorish Castle passes through ancient forest and past a stunning Italianate villa. In the evening, when day-trippers have left, the trail is quiet and atmospheric. Walk up to the castle viewpoint for sunset views over the Serra.",
    tip: "Start the walk 2 hours before sunset. The trail is shaded and cool — romantic walking conditions. Return downhill after sunset (the path is clear but bring a phone light).",
    bestTime: "2 hours before sunset",
    cost: "Free",
  },
  {
    name: "Lawrence's Hotel Bar",
    type: "restaurant",
    description:
      "One of the oldest hotels on the Iberian Peninsula (since 1764). Lord Byron stayed here. The bar is open to non-guests and serves excellent cocktails in a drawing room that feels like a period film set. Order old-fashioneds in a room where 260 years of travelers have done the same.",
    tip: "Go after dinner for drinks. The atmosphere is best at night when the day visitors have gone and the hotel settles into its historic calm.",
    bestTime: "After dinner, 9-11pm",
    cost: "Cocktails €10-14",
  },
];

export const couplesFaqs = [
  {
    question: "Is Sintra romantic?",
    answer:
      "Extremely. The combination of fairytale palaces, misty forests, and cobblestone streets makes it one of the most romantic day trips in Europe. The key is avoiding peak crowds — visit on weekdays, arrive early, and stay past 5pm when the tour buses leave. Evening Sintra is a different (more romantic) place.",
  },
  {
    question: "Should couples stay overnight in Sintra?",
    answer:
      "If romance is the goal, yes. Sintra after 6pm — empty streets, golden light on stone buildings, dinner without queues — is far more romantic than the daytime tourist experience. One night at Lawrence's Hotel or Quinta de São Thiago makes the trip feel like an escape, not a day trip.",
  },
  {
    question: "What's the most romantic palace in Sintra?",
    answer:
      "Monserrate. It's quieter, more intimate, and the gardens with subtropical plants, fern grottoes, and hidden pathways feel designed for couples. Regaleira is more adventurous, Pena more spectacular — but Monserrate is the romantic one.",
  },
  {
    question: "Best restaurant for a date night in Sintra?",
    answer:
      "Incomum for modern fine dining (book ahead). Tascantiga for intimate, traditional Portuguese. Nau Palatina for a more casual but still excellent meal. All three are walkable from the town center. Avoid the tourist-trap restaurants on the main square.",
  },
  {
    question: "Can we do a romantic Sintra visit on a budget?",
    answer:
      "Absolutely. The Villa Sassetti walk is free and beautiful. The Seteais terrace viewpoint is free (just buy a coffee). Pack a picnic for the Monserrate gardens (entry €12). Watch sunset from Moorish Castle grounds. A romantic day is possible for under €30 per person.",
  },
];
