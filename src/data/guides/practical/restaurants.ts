export interface Restaurant {
  name: string;
  area: "town-center" | "near-palaces" | "road-to-pena" | "off-the-radar";
  cuisine: string;
  priceRange: "€" | "€€" | "€€€";
  mustOrder: string;
  verdict: string;
  bestFor: string;
  avoidIf: string;
  googleMapsArea: string;
}

export interface LocalDish {
  name: string;
  description: string;
  whereToTry: string;
  price: string;
  isSweet: boolean;
}

export interface PicnicSpot {
  name: string;
  nearestPalace: string;
  description: string;
  hasFacilities: boolean;
}

export const restaurants: Restaurant[] = [
  {
    name: "Tascantiga",
    area: "town-center",
    cuisine: "Portuguese tapas",
    priceRange: "€€",
    mustOrder: "Croquetes de alheira with honey mustard, grilled octopus",
    verdict:
      "Best overall restaurant in Sintra. Small plates, local wines, a few tables — reserve or arrive at noon sharp. We showed up at 12:15 on a Thursday and snagged the last table; by 12:30, people were being turned away.",
    bestFor: "Foodies who want real Portuguese cuisine, not tourist traps.",
    avoidIf: "You need a quick meal — it's a sit-down experience.",
    googleMapsArea: "Rua Padarias, Sintra town center",
  },
  {
    name: "Incomum by Luís Santos",
    area: "town-center",
    cuisine: "Modern Portuguese",
    priceRange: "€€€",
    mustOrder: "Slow-cooked pork cheeks, truffle risotto, chocolate fondant",
    verdict:
      "Sintra's best fine-ish dining. Creative takes on Portuguese classics in a renovated townhouse. Worth the splurge.",
    bestFor: "A special lunch. 2-day visitors with a dinner slot.",
    avoidIf: "You're on a tight budget — mains are €16-24.",
    googleMapsArea: "Rua Dr. Alfredo Costa, Sintra town center",
  },
  {
    name: "Romaria de Baco",
    area: "town-center",
    cuisine: "Portuguese traditional",
    priceRange: "€€",
    mustOrder: "Bacalhau à Brás, daily fish special",
    verdict:
      "Reliable, honest Portuguese food at fair prices. The lunch menu (prato do dia) is €10-12 and generous.",
    bestFor: "A solid, unpretentious lunch between palaces.",
    avoidIf: "You want innovation — this is traditional comfort food.",
    googleMapsArea: "Near the National Palace, Sintra town center",
  },
  {
    name: "Café Saudade",
    area: "town-center",
    cuisine: "Café / brunch",
    priceRange: "€",
    mustOrder: "Travesseiros (puff pastry with almond cream), galão (milky coffee)",
    verdict:
      "A calmer atmosphere than the famous Piriquita, with excellent coffee and fresh pastries. For the original travesseiros and queijadas, Piriquita remains the classic — but Saudade is the better place to sit down and linger. The garden seating is lovely.",
    bestFor: "Morning coffee before heading to the palaces. Quick pastry stop.",
    avoidIf: "You need a full meal — it's a café, not a restaurant.",
    googleMapsArea: "Avenida Dr. Miguel Bombarda, Sintra",
  },
  {
    name: "Piriquita",
    area: "town-center",
    cuisine: "Bakery / pastries",
    priceRange: "€",
    mustOrder: "Travesseiros and queijadas de Sintra — the two iconic Sintra pastries",
    verdict:
      "Touristy but the pastries are actually good. Buy to-go and eat on a bench — the seating area is cramped and overpriced.",
    bestFor: "Tasting the two famous Sintra pastries. Take-away only.",
    avoidIf: "You expect a peaceful sit-down — it's always packed.",
    googleMapsArea: "Rua das Padarias, Sintra town center",
  },
  {
    name: "Restaurante Regional de Sintra",
    area: "town-center",
    cuisine: "Portuguese traditional",
    priceRange: "€€",
    mustOrder: "Arroz de marisco (seafood rice), grilled sardines (seasonal)",
    verdict:
      "A locals' favorite hiding in plain sight. The seafood rice for two is the best deal in town. Ask for the daily specials.",
    bestFor: "Hungry visitors wanting a proper Portuguese meal at fair prices.",
    avoidIf: "You're in a rush — service is relaxed (Portuguese pace).",
    googleMapsArea: "Travessa do Município, near the National Palace",
  },
  {
    name: "Café Paris",
    area: "town-center",
    cuisine: "Café / light meals",
    priceRange: "€€",
    mustOrder: "Nothing specific — it's about the location, not the food.",
    verdict:
      "Tourist trap with a view. Overpriced and mediocre food, but the terrace directly facing the National Palace is atmospheric for a coffee.",
    bestFor: "A quick coffee with a view. Not for a meal.",
    avoidIf: "You're hungry or budget-conscious. Walk 2 minutes to better options.",
    googleMapsArea: "Praça da República, facing the National Palace",
  },
  {
    name: "Nau Palatina",
    area: "town-center",
    cuisine: "Petiscos (Portuguese tapas)",
    priceRange: "€€",
    mustOrder: "Pica-pau (cubed steak with pickles), pataniscas de bacalhau",
    verdict:
      "Excellent small plates in a cozy setting. The wine selection is surprisingly good for Sintra. Book ahead for dinner.",
    bestFor: "Evening meal if staying overnight in Sintra.",
    avoidIf: "You need a quick tourist lunch — better options for that.",
    googleMapsArea: "Sintra town center",
  },
  {
    name: "Bar Fonte da Pipa",
    area: "town-center",
    cuisine: "Bar / light bites",
    priceRange: "€",
    mustOrder: "Craft beer selection, tábua de queijos (cheese board)",
    verdict:
      "Hidden garden bar down a narrow alley. Great for an end-of-day drink with a cheese board. One of Sintra's overlooked gems.",
    bestFor: "A relaxed drink after a full day of palace-hopping.",
    avoidIf: "You need a proper dinner — this is drinks and snacks.",
    googleMapsArea: "Rua da Fonte da Pipa, Sintra old town",
  },
  {
    name: "Mercado da Vila (Food Stalls)",
    area: "town-center",
    cuisine: "Market / varied",
    priceRange: "€",
    mustOrder: "Whatever daily special looks good. Fresh fruit for the trail.",
    verdict:
      "The local market has a few food stalls with fair prices. Great for picking up picnic supplies before heading to the palaces.",
    bestFor: "Budget travelers, picnic assemblers.",
    avoidIf: "You want a proper restaurant experience.",
    googleMapsArea: "Sintra municipal market",
  },
  {
    name: "Tulhas / Cantinho de São Pedro",
    area: "off-the-radar",
    cuisine: "Portuguese traditional",
    priceRange: "€",
    mustOrder: "Prato do dia (daily special), grilled fish of the day",
    verdict:
      "For where locals actually eat, walk 15 minutes from the tourist center to São Pedro de Penaferrim. Tulhas and Cantinho de São Pedro serve traditional Portuguese food at local prices, without the tourist markup of town-center restaurants. Menus change daily, portions are generous, and you're unlikely to hear English being spoken at the next table.",
    bestFor: "Budget travelers and anyone who wants to eat where Sintra residents eat.",
    avoidIf: "You need the convenience of town center — the 15-minute walk is easy but adds up if you're short on time.",
    googleMapsArea: "São Pedro de Penaferrim, 15 min walk from Sintra town center",
  },
];

export const localDishes: LocalDish[] = [
  {
    name: "Travesseiros",
    description:
      "Sintra's signature pastry — flaky puff pastry rolled into a pillow shape, filled with almond and egg cream. The name means 'pillows.' We ordered them fresh from the oven at Piriquita and burned the roof of our mouths. Worth it.",
    whereToTry: "Piriquita (the original) or Café Saudade (less crowded).",
    price: "€1.80-2.20 each",
    isSweet: true,
  },
  {
    name: "Queijadas de Sintra",
    description:
      "Tiny cheese-and-egg tarts in a thin crispy shell. Sintra's oldest pastry — recipes date to the 13th century. Subtly sweet with cinnamon.",
    whereToTry: "Piriquita or any bakery in town center.",
    price: "€1.50-1.80 each",
    isSweet: true,
  },
  {
    name: "Bacalhau à Brás",
    description:
      "Portugal's beloved salt cod dish — shredded cod with eggs, onions, thin-cut fries, and olives. Comfort food at its best.",
    whereToTry: "Romaria de Baco or Restaurante Regional de Sintra.",
    price: "€12-15 as a main",
    isSweet: false,
  },
  {
    name: "Arroz de Marisco",
    description:
      "Soupy seafood rice loaded with shrimp, clams, and crab. Meant for sharing — order for two and bring appetites.",
    whereToTry: "Restaurante Regional de Sintra.",
    price: "€22-28 for two",
    isSweet: false,
  },
  {
    name: "Croquetes de Alheira",
    description:
      "Crispy croquettes made with alheira (smoked sausage from Trás-os-Montes). Served with honey mustard. A petisco classic.",
    whereToTry: "Tascantiga.",
    price: "€5-7 for a portion",
    isSweet: false,
  },
];

export const picnicSpots: PicnicSpot[] = [
  {
    name: "Pena Palace Park benches",
    nearestPalace: "Pena Palace",
    description:
      "Several benches with valley views inside the Pena Park. Buy pastries in town before taking the bus up.",
    hasFacilities: true,
  },
  {
    name: "Regaleira garden lawns",
    nearestPalace: "Quinta da Regaleira",
    description:
      "Some open grassy areas in the upper gardens. Technically not encouraged but tolerated with discreet snacking.",
    hasFacilities: false,
  },
  {
    name: "Parque da Liberdade",
    nearestPalace: "Town center / National Palace",
    description:
      "Free public park in town with benches, shade trees, and a playground. The most comfortable picnic option in central Sintra.",
    hasFacilities: true,
  },
];

export const tippingNote =
  "Tipping in Portugal: 5-10% at sit-down restaurants if you're happy with the service. At cafés, round up to the nearest euro. Tipping is appreciated but not obligatory.";

export const restaurantsFaqs = [
  {
    question: "Where should I eat lunch in Sintra?",
    answer:
      "Tascantiga for the best food, Romaria de Baco for good traditional cooking, or Café Saudade for a quick pastry stop. Avoid Café Paris (tourist trap) and any restaurant with photos on the menu.",
  },
  {
    question: "What are travesseiros and queijadas?",
    answer:
      "Sintra's two famous pastries. Travesseiros ('pillows') are flaky almond-cream puffs. Queijadas are tiny cheese-egg tarts in crispy shells dating to the 13th century. Both cost under €2. Try them at Piriquita or Café Saudade.",
  },
  {
    question: "Is food expensive in Sintra?",
    answer:
      "Tourist-area restaurants charge 10-20% more than Lisbon. A lunch main is €12-18. But pastries and café stops are cheap (€2-5). We spent about €14 per person for a generous prato do dia with wine at Romaria de Baco — easily the best-value lunch in town. For even cheaper: pack picnic supplies from the town market.",
  },
  {
    question: "Should I eat before or after visiting palaces?",
    answer:
      "After. Start palaces early (9:30am) when it's cool and uncrowded, then eat a late lunch around 1-2pm in town. The restaurant queues are also shorter after 1:30pm.",
  },
  {
    question: "Are there restaurants near Pena Palace?",
    answer:
      "There's a small café inside Pena Park (overpriced sandwiches) and a snack bar at the bus 434 stop. For a real meal: take bus 434 back to town. It's only 15 minutes and the food is dramatically better.",
  },
  {
    question: "Can I bring food into the palaces?",
    answer:
      "Yes — all palaces allow you to bring snacks and water. You just can't eat inside the palace buildings. The gardens and park areas are fine for discrete snacking.",
  },
];
