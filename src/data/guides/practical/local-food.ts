export interface LocalPastry {
  name: string;
  origin: string;
  description: string;
  whereToTry: string;
  price: string;
  verdict: "must-try" | "worth-trying" | "skip";
  verdictText: string;
}

export interface SavoryDish {
  name: string;
  description: string;
  whereToTry: string;
  price: string;
  mealType: "lunch" | "dinner" | "snack" | "any";
}

export interface FoodWalkStop {
  time: string;
  place: string;
  whatToGet: string;
  cost: string;
  note: string;
}

export interface TouristTrap {
  name: string;
  why: string;
  instead: string;
}

export const sintraPastries: LocalPastry[] = [
  {
    name: "Travesseiros",
    origin: "Piriquita bakery, since 1862",
    description:
      "Sintra's signature pastry — flaky puff pastry rolled into a pillow shape ('travesseiro' means pillow), filled with almond and egg cream. The original recipe is a closely guarded secret. Best eaten warm, when the pastry shatters and the filling is molten. We arrived at Piriquita at 9am and caught a batch straight from the oven — the almond cream was still liquid inside. Arguably better than pastel de nata.",
    whereToTry: "Piriquita (the original) or Café Saudade (less crowded, equally good)",
    price: "€1.80–2.20 each",
    verdict: "must-try",
    verdictText: "The #1 thing to eat in Sintra",
  },
  {
    name: "Queijadas de Sintra",
    origin: "Recipes dating to the 13th century",
    description:
      "Tiny cheese-and-egg tarts in a paper-thin crispy shell. The name comes from 'queijo' (cheese), though the filling is more custard than cheese. Subtly sweet with cinnamon. Sintra's oldest pastry — medieval manuscripts reference queijadas as a form of tax payment to the local monastery.",
    whereToTry: "Piriquita, Casa Piriquita II, or Fábrica das Verdadeiras Queijadas da Sapa",
    price: "€1.50–1.80 each",
    verdict: "must-try",
    verdictText: "Medieval recipe, still perfect",
  },
  {
    name: "Fofos de Belas",
    origin: "Neighboring town of Belas",
    description:
      "Soft, spongy egg cakes dusted with powdered sugar. Lighter and airier than travesseiros — a different texture entirely. Originally from nearby Belas but adopted by Sintra bakeries. Less famous than travesseiros, which means less competition for the best ones.",
    whereToTry: "Local bakeries in the old town (not the tourist shops on Rua das Padarias)",
    price: "€1.50–2.00 each",
    verdict: "worth-trying",
    verdictText: "The underrated third pastry",
  },
  {
    name: "Bolo de Sintra (Serra Cake)",
    origin: "Traditional Sintra recipe",
    description:
      "A dense, moist cake made with almonds, eggs, and cinnamon — resembling a mountain shape representing the Serra de Sintra. Rich and heavy; one slice is enough. Best paired with a galão (milky coffee) to cut the sweetness.",
    whereToTry: "Café Saudade or Pastelaria Gregório",
    price: "€2.50–3.50 per slice",
    verdict: "worth-trying",
    verdictText: "Heavy but rewarding",
  },
  {
    name: "Pastéis de Nata (Sintra Version)",
    origin: "Lisbon origin, local adaptation",
    description:
      "Every café sells them, but Sintra's are unremarkable compared to Lisbon's Pastéis de Belém. Don't waste stomach space on a pastel de nata in Sintra when you could be eating travesseiros or queijadas — the local specialties you can't get anywhere else.",
    whereToTry: "Skip — eat them in Lisbon instead",
    price: "€1.50",
    verdict: "skip",
    verdictText: "Eat these in Lisbon, not here",
  },
];

export const savoryDishes: SavoryDish[] = [
  {
    name: "Bacalhau à Brás",
    description:
      "Portugal's beloved salt cod scramble — shredded bacalhau with eggs, thin-cut fries, onions, and black olives. Comfort food that somehow works as both lunch and dinner. Every restaurant does it slightly differently.",
    whereToTry: "Romaria de Baco or Restaurante Regional de Sintra",
    price: "€12–15",
    mealType: "any",
  },
  {
    name: "Arroz de Marisco",
    description:
      "Soupy seafood rice loaded with shrimp, clams, mussels, and sometimes crab. Always for two. The broth should be rich, tomatoey, and aromatic with coriander. The test of a good restaurant.",
    whereToTry: "Restaurante Regional de Sintra (best version in town)",
    price: "€22–28 for two",
    mealType: "lunch",
  },
  {
    name: "Croquetes de Alheira",
    description:
      "Crispy croquettes made with alheira — a smoked sausage from Trás-os-Montes originally created by Jewish communities to disguise their dietary practices during the Inquisition. Served with honey mustard. A petisco (small plate) classic.",
    whereToTry: "Tascantiga (the best version)",
    price: "€5–7 per portion",
    mealType: "snack",
  },
  {
    name: "Polvo à Lagareiro",
    description:
      "Tender grilled octopus with roasted potatoes, drizzled with good olive oil and garlic. The octopus should be charred on the outside, melt-in-your-mouth inside. Portugal's second-most-famous dish after bacalhau.",
    whereToTry: "Tascantiga or Nau Palatina",
    price: "€14–18",
    mealType: "lunch",
  },
  {
    name: "Chouriço Assado (Flambéed)",
    description:
      "A whole chouriço sausage set on fire at the table in a terracotta dish of aguardente (firewater). Dramatic, smoky, and delicious. We ordered this at Tascantiga and the entire table next to us immediately asked for one too. Slice it yourself and eat with crusty bread. A perfect shared starter.",
    whereToTry: "Tascantiga",
    price: "€6–8",
    mealType: "snack",
  },
  {
    name: "Serra da Estrela Cheese",
    description:
      "Portugal's most famous cheese — soft, creamy, and pungent, from the Serra da Estrela mountains. Cut the top off and scoop the runny interior with bread. An acquired taste but a cultural experience.",
    whereToTry: "Tascantiga cheese board or Bar Fonte da Pipa",
    price: "€7–10 for a board",
    mealType: "snack",
  },
  {
    name: "Caldo Verde",
    description:
      "The national soup — thinly shredded kale in a potato broth with a slice of chouriço. Simple, warming, and perfect for a rainy Sintra day. Every traditional restaurant serves it.",
    whereToTry: "Romaria de Baco or any traditional restaurant",
    price: "€3–5",
    mealType: "any",
  },
  {
    name: "Prato do Dia (Daily Special)",
    description:
      "The best value meal in Sintra. Traditional restaurants offer a rotating daily special — usually a main with sides, bread, and sometimes a drink — for €10-12. The food is honest, the portions are generous, and it's what locals actually eat.",
    whereToTry: "Romaria de Baco (best prato do dia in town)",
    price: "€10–12",
    mealType: "lunch",
  },
];

export const foodWalkStops: FoodWalkStop[] = [
  {
    time: "09:00",
    place: "Piriquita",
    whatToGet: "Two warm travesseiros and a bica (espresso)",
    cost: "€5",
    note: "Arrive when they open for the freshest batch. Buy to-go — the seating is cramped.",
  },
  {
    time: "09:30",
    place: "Fábrica das Verdadeiras Queijadas da Sapa",
    whatToGet: "Box of 6 queijadas (€6.50)",
    cost: "€6.50",
    note: "The 'true' queijadas maker — been at it since 1756. Buy a box to share throughout the walk.",
  },
  {
    time: "10:00",
    place: "Café Saudade",
    whatToGet: "Galão (milky coffee) and a fofos de Belas",
    cost: "€4",
    note: "The prettiest café in town. The garden seating is lovely if the weather cooperates.",
  },
  {
    time: "10:30",
    place: "Mercado da Vila (Town Market)",
    whatToGet: "Serra da Estrela cheese, seasonal fruit, local honey",
    cost: "€5–8",
    note: "The market has a few stalls with local products. Great for picnic supplies or edible souvenirs.",
  },
  {
    time: "11:00",
    place: "Pastelaria Gregório",
    whatToGet: "Bolo de Sintra (Serra cake) slice",
    cost: "€3",
    note: "A local bakery away from the tourist strip. The Serra cake is their specialty.",
  },
  {
    time: "11:30",
    place: "Tascantiga",
    whatToGet: "Chouriço assado and a glass of local wine",
    cost: "€10",
    note: "Arrive at 11:30 to beat the lunch rush. The flambéed sausage is a show and a meal-closer.",
  },
  {
    time: "12:00",
    place: "Bar Fonte da Pipa",
    whatToGet: "Local craft beer and a cheese board",
    cost: "€8",
    note: "Hidden garden bar down a narrow alley. The perfect end to a food walk — sit in the garden and digest.",
  },
];

export const touristTraps: TouristTrap[] = [
  {
    name: "Café Paris (main square)",
    why: "Overpriced for the quality. Charges a premium for the National Palace view that you can see for free from 5 meters away. Fine for a quick coffee on the terrace, but don't eat a meal here — walk 2 minutes to Tascantiga or Romaria de Baco instead.",
    instead: "Walk 2 minutes to Tascantiga or Romaria de Baco for dramatically better food at lower prices.",
  },
  {
    name: "Any restaurant with photos on the menu",
    why: "A universal sign of tourist-oriented restaurants worldwide. The food is generic, the portions are small, and the prices are inflated 20-30%.",
    instead: "Look for handwritten daily specials (prato do dia) on a chalkboard — that's the local signal for honest food.",
  },
  {
    name: "Pena Palace café/snack bars",
    why: "Captive audience pricing. €4 sandwiches that would cost €2 in town. Limited selection, long queues in summer.",
    instead: "Pack pastries from Piriquita before heading up. Or take bus 434 back to town for a proper meal — it's only 15 minutes.",
  },
  {
    name: "Souvenir shops selling 'artisan' pastéis de nata",
    why: "Mass-produced, reheated, and sold at €3+ each. These are the same frozen pastéis de nata you find in Lisbon tourist shops.",
    instead: "Spend that money on a travesseiro from Piriquita — Sintra's actual local pastry that you can't get elsewhere.",
  },
];

export const localFoodFaqs = [
  {
    question: "What is Sintra's signature food?",
    answer:
      "Travesseiros and queijadas are the two iconic Sintra pastries. Travesseiros are flaky almond-cream puffs (since 1862) and queijadas are tiny cheese-egg tarts (recipes from the 13th century). Both cost under €2 and are available at Piriquita or Café Saudade.",
  },
  {
    question: "Is the Sintra food walk self-guided or do I need a tour?",
    answer:
      "Completely self-guided. All the stops are within a 10-minute walk of each other in the town center. No booking or tour guide needed — just follow the route and eat. Budget 2-3 hours and €30-45 for the full walk.",
  },
  {
    question: "Are travesseiros or queijadas better?",
    answer:
      "Different experiences. Travesseiros are richer, flakier, and more indulgent — like a premium almond croissant. Queijadas are lighter, subtler, and more delicate. Try both. Most visitors prefer travesseiros, but queijadas have more history (700+ years).",
  },
  {
    question: "Can I buy Sintra pastries to take home?",
    answer:
      "Yes — Piriquita and Fábrica das Queijadas da Sapa sell boxed queijadas that travel well (2-3 days at room temperature). Travesseiros are best fresh and don't travel as well, but they'll survive a same-day trip back to Lisbon.",
  },
  {
    question: "What's the best budget food strategy in Sintra?",
    answer:
      "Pack pastries from Piriquita (€4 for two travesseiros + queijada), buy picnic supplies from Mercado da Vila (€5 for bread, cheese, fruit), and eat the prato do dia (daily special, €10-12) at Romaria de Baco for your main meal.",
  },
];
