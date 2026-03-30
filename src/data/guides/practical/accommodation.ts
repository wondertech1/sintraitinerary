export interface AccommodationOption {
  name: string;
  area: string;
  type: "hotel" | "guesthouse" | "airbnb" | "quinta";
  priceRange: "€" | "€€" | "€€€";
  bestFor: string;
  verdict: string;
  walkability: string;
}

export interface AccommodationArea {
  name: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  walkToPalaces: string;
}

export interface StayScenario {
  scenario: string;
  recommendation: string;
  reason: string;
}

export const accommodationAreas: AccommodationArea[] = [
  {
    name: "Sintra Town Center",
    pros: [
      "Walking distance to National Palace, Regaleira, restaurants, and train station",
      "Best atmosphere — cobblestone streets, fog rolling through at night",
      "Most restaurants and cafés within a few minutes' walk",
    ],
    cons: [
      "Higher prices than surrounding areas",
      "Can be noisy during the day with tour groups",
      "Limited parking — driving here is stressful",
    ],
    bestFor: "First-time visitors who want to walk everywhere and soak up the atmosphere.",
    walkToPalaces:
      "Regaleira: 10 min. National Palace: 2 min. Train station: 10 min. Pena Palace: bus 434 required.",
  },
  {
    name: "São Pedro de Penaferrim",
    pros: [
      "Quieter, more residential feel — the 'real Sintra'",
      "Lower prices than town center (20-30% cheaper on average)",
      "Good local restaurants and a Tuesday market worth visiting",
    ],
    cons: [
      "15-minute walk to the town center and train station",
      "Fewer evening dining options within walking distance",
      "Less of the fairytale atmosphere — feels more like a regular Portuguese town",
    ],
    bestFor: "Budget travelers and those who prefer a quieter, more local experience.",
    walkToPalaces:
      "Town center: 15 min. Regaleira: 20 min. National Palace: 15 min. Pena Palace: bus 434 from town.",
  },
  {
    name: "Near Monserrate",
    pros: [
      "Surrounded by forest — the most peaceful option",
      "Closer to Monserrate Palace and the wilder hiking trails",
      "Some beautiful quintas (country estates) with gardens",
    ],
    cons: [
      "Isolated — you'll need a car or taxi for restaurants and sights",
      "3km from the town center (uphill return walk)",
      "Very few options — limited availability",
    ],
    bestFor: "Couples wanting romance and nature. Hikers exploring the Serra trails.",
    walkToPalaces:
      "Monserrate: 5-10 min. Town center: 30 min walk or €5 taxi. Regaleira: 35 min walk.",
  },
  {
    name: "Near Pena Palace (Estrada da Pena)",
    pros: [
      "Closest to Pena Palace and Moorish Castle — arrive before the crowds",
      "Forest setting with misty morning views",
      "Skip the bus 434 queue entirely",
    ],
    cons: [
      "Very few accommodation options (mostly one or two properties)",
      "Far from restaurants — you'll eat in town or bring food",
      "Steep, narrow road with limited walkability",
    ],
    bestFor: "Serious palace enthusiasts who want early access to Pena and the Moorish Castle.",
    walkToPalaces:
      "Pena Palace: 10-15 min walk. Moorish Castle: 15 min. Town center: 25-30 min downhill (harder going up).",
  },
];

export const accommodationOptions: AccommodationOption[] = [
  {
    name: "Sintra Boutique Hotel",
    area: "Town Center",
    type: "hotel",
    priceRange: "€€€",
    bestFor: "Mid-range comfort with a central location",
    verdict:
      "The best value-for-location in Sintra. Clean, well-run, and you can walk to everything. Rooms are small but the location makes up for it. We stayed here on a March trip and walked to every palace except Pena without needing any transport. Book early — it fills fast.",
    walkability: "2 min to National Palace, 10 min to Regaleira, 8 min to station",
  },
  {
    name: "Chalet Saudade",
    area: "Town Center",
    type: "guesthouse",
    priceRange: "€€€",
    bestFor: "Boutique experience in a historic building",
    verdict:
      "Charming 19th-century chalet with period furniture and garden views. Feels like staying in a Sintra palace. Breakfast is excellent. Premium price but the experience justifies it.",
    walkability: "5 min to town center, 12 min to Regaleira",
  },
  {
    name: "Casa da Pendoa",
    area: "Town Center",
    type: "guesthouse",
    priceRange: "€€",
    bestFor: "Budget-friendly stay with character",
    verdict:
      "Family-run guesthouse with clean rooms and a warm welcome. Nothing fancy but the location is unbeatable for the price. Book the room with the balcony view if available.",
    walkability: "3 min to National Palace, 10 min to station",
  },
  {
    name: "Moon Hill Hostel",
    area: "Town Center",
    type: "guesthouse",
    priceRange: "€",
    bestFor: "Solo travelers and backpackers",
    verdict:
      "Sintra's best budget option. Dorm beds and private rooms available. Social atmosphere, decent kitchen. The terrace has views of the National Palace chimneys.",
    walkability: "5 min to town center, 12 min to station",
  },
  {
    name: "Quinta de São Thiago",
    area: "Near Monserrate",
    type: "quinta",
    priceRange: "€€€",
    bestFor: "Romantic getaway in a historic estate",
    verdict:
      "A 16th-century manor house surrounded by gardens. The most romantic accommodation in the Sintra area. Pool, chapel, and genuine old-world charm. You'll need a car or taxi to reach town.",
    walkability: "30 min walk to town center (mostly downhill) or €5 taxi",
  },
  {
    name: "Lawrence's Hotel",
    area: "Town Center",
    type: "hotel",
    priceRange: "€€€",
    bestFor: "History lovers and special occasions",
    verdict:
      "One of the oldest hotels on the Iberian Peninsula (since 1764). Lord Byron stayed here. Beautifully restored with period details. Expensive but it's a destination in itself.",
    walkability: "5 min to National Palace, 10 min to Regaleira",
  },
  {
    name: "Local Airbnbs (São Pedro area)",
    area: "São Pedro",
    type: "airbnb",
    priceRange: "€",
    bestFor: "Families and longer stays",
    verdict:
      "Best value in Sintra. Full apartments for the price of a hotel room in the center. Kitchen access saves on restaurant costs. The 15-minute walk to town is easy (mostly flat).",
    walkability: "15 min walk to town center, 20 min to Regaleira",
  },
  {
    name: "Tivoli Palácio de Seteais",
    area: "Town Center",
    type: "hotel",
    priceRange: "€€€",
    bestFor: "Luxury splurge — an actual 18th-century palace",
    verdict:
      "If budget isn't a concern, this is it. An 18th-century palace turned five-star hotel with views of the Serra and ocean. The terrace alone justifies a drink even if you don't stay. Expensive.",
    walkability: "10 min to Regaleira, 12 min to National Palace",
  },
];

export const stayScenarios: StayScenario[] = [
  {
    scenario: "I'm on a tight budget",
    recommendation: "Moon Hill Hostel or Airbnbs in São Pedro",
    reason:
      "Dorm beds at Moon Hill start around €25. São Pedro apartments run €60-80/night for a full unit. Both are walkable to the main sights.",
  },
  {
    scenario: "I want the best location",
    recommendation: "Sintra Boutique Hotel or Casa da Pendoa",
    reason:
      "Town center properties put you steps from the National Palace, restaurants, and the train station. No taxis or bus rides needed.",
  },
  {
    scenario: "I want romance",
    recommendation: "Quinta de São Thiago or Lawrence's Hotel",
    reason:
      "The quinta is a 16th-century estate with gardens and a pool. Lawrence's has 260 years of history. Both are unforgettable.",
  },
  {
    scenario: "I'm doing a day trip from Lisbon",
    recommendation: "Don't stay — return to Lisbon",
    reason:
      "Sintra is 40 minutes from Lisbon by train. We've done it both ways and honestly, for a single-day visit, the train is so easy that paying for a Sintra hotel makes no sense. Use Lisbon as your base.",
  },
  {
    scenario: "I'm visiting for 2-3 days",
    recommendation: "Chalet Saudade or Sintra Boutique Hotel",
    reason:
      "For multi-day stays, town center is key — you'll be walking to different palaces each day and want restaurants nearby for evening meals.",
  },
  {
    scenario: "I'm traveling with family",
    recommendation: "Airbnb apartment (town center or São Pedro)",
    reason:
      "A full apartment gives you a kitchen (breakfast savings add up), space for kids, and laundry. Far more practical than hotel rooms with families.",
  },
];

export const accommodationFaqs = [
  {
    question: "Is it worth staying overnight in Sintra?",
    answer:
      "Yes if you want to see 3+ palaces or enjoy Sintra without the day-trip crowds. We stayed one night and the difference was remarkable — by 6pm the streets were nearly empty and we had dinner at Nau Palatina with no wait. The town empties after 5pm and the evening atmosphere is dreamlike. One night is ideal for most visitors. Two nights if you want to hike or visit every palace.",
  },
  {
    question: "What's the cheapest way to stay in Sintra?",
    answer:
      "Moon Hill Hostel dorm beds (from €25/night) or Airbnb apartments in São Pedro de Penaferrim (from €50-60/night). São Pedro is a 15-minute walk from the town center and significantly cheaper than central Sintra.",
  },
  {
    question: "Is Sintra safe at night?",
    answer:
      "Very safe. Sintra is a small, wealthy town with almost no crime affecting tourists. The town center is well-lit and walkable at night. The only caution: the forest paths to the hilltop palaces are dark and unlit after sunset — stick to roads.",
  },
  {
    question: "Booking.com vs Airbnb for Sintra?",
    answer:
      "Booking.com is better for hotels and guesthouses (more options, cancellation flexibility). Airbnb wins for apartments, especially for families or groups. For quintas and unique properties, check both — availability varies.",
  },
  {
    question: "How far is Sintra from Lisbon?",
    answer:
      "40 minutes by direct train from Rossio station (€2.35 each way). Trains run every 20-30 minutes from 6am to 1am. It's one of the easiest day trips from Lisbon — no car needed.",
  },
];
