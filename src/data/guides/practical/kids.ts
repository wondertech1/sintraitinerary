export interface KidFriendlyPalace {
  name: string;
  slug: string;
  kidRating: 1 | 2 | 3 | 4 | 5;
  ageRange: string;
  strollerFriendly: boolean;
  strollerNotes: string;
  whyKidsLoveIt: string;
  whyKidsHateIt: string;
  parentTips: string[];
  duration: string;
}

export interface FamilyTip {
  category: "planning" | "transport" | "food" | "survival";
  tip: string;
}

export interface AgeRecommendation {
  ageGroup: string;
  palaces: string[];
  approach: string;
  maxPalaces: number;
}

export const kidFriendlyPalaces: KidFriendlyPalace[] = [
  {
    name: "Quinta da Regaleira",
    slug: "quinta-da-regaleira-guide",
    kidRating: 5,
    ageRange: "4+",
    strollerFriendly: false,
    strollerNotes:
      "Impossible with a stroller. Steep stairs, narrow tunnels, uneven paths. Baby carrier only.",
    whyKidsLoveIt:
      "It's an adventure playground disguised as a palace. Underground tunnels you can walk through, a 27-meter spiral well, hidden grottoes, waterfalls. We brought our 4-year-old here and she treated the tunnels like a treasure hunt — refused to leave for two hours.",
    whyKidsHateIt:
      "They won't — this is universally loved by kids. The only issue: some under-4s may be scared of the dark tunnels.",
    parentTips: [
      "Bring a small flashlight for the tunnels — phones work but kids love having their own light",
      "The Initiation Well has wet, slippery stairs. Hold small children's hands",
      "Allow extra time — kids will want to explore every tunnel twice",
      "The garden has some unfenced drops. Keep eyes on toddlers",
    ],
    duration: "2-2.5 hrs with kids",
  },
  {
    name: "Moorish Castle",
    slug: "moorish-castle-guide",
    kidRating: 4,
    ageRange: "6+",
    strollerFriendly: false,
    strollerNotes:
      "No stroller access — it's a medieval fortress on a hilltop with stone stairs.",
    whyKidsLoveIt:
      "Walking on top of real castle walls. It's a real-life fairytale fortress. The walls are like a giant climbing adventure with views forever.",
    whyKidsHateIt:
      "There's no interior — just walls and stairs. Kids under 6 may find it boring (and tiring). The walk from the entrance to the walls is uphill.",
    parentTips: [
      "The walls have railings but some sections feel exposed. Nervous parents should keep kids centered",
      "Bring water — no café inside, only at entrance",
      "The walk from Pena Palace is 15 min downhill — combine them",
      "Best for kids who like climbing and exploring",
    ],
    duration: "45 min-1 hr with kids",
  },
  {
    name: "Pena Palace",
    slug: "pena-palace-guide",
    kidRating: 3,
    ageRange: "3+",
    strollerFriendly: false,
    strollerNotes:
      "Stroller possible in the park paths but not inside the palace or on the terraces. Cobblestones throughout.",
    whyKidsLoveIt:
      "It looks like a Disney castle — bright yellow, red, and blue turrets. Kids love the colors. The park has hidden trails and a fairy-tale atmosphere.",
    whyKidsHateIt:
      "The interior queue (30-60 min in summer) is a nightmare with kids. The rooms are cramped with 'don't touch' signs everywhere. Kids get bored fast inside.",
    parentTips: [
      "Buy grounds-only tickets. Skip the interior — kids won't appreciate the rooms and you'll avoid the queue",
      "The bus 434 ride up the hill is exciting for kids (winding mountain road)",
      "The park trails are stroller-hostile but carrier-friendly",
      "Bring snacks — the park café is overpriced",
    ],
    duration: "1.5-2 hrs with kids (grounds only)",
  },
  {
    name: "Monserrate Palace",
    slug: "monserrate-palace-guide",
    kidRating: 2,
    ageRange: "8+",
    strollerFriendly: true,
    strollerNotes:
      "The main garden paths are smooth enough for strollers. The palace interior has a ground floor accessible loop.",
    whyKidsLoveIt:
      "The gardens are huge and feel like a jungle. Older kids who like nature and plants will enjoy it. The interior has impressive patterns.",
    whyKidsHateIt:
      "It's the most 'adult' palace in Sintra. No tunnels, no castle walls, no colors. Young kids will be bored. The gardens require a lot of walking.",
    parentTips: [
      "Only bring kids here if they're patient, nature-loving 8+",
      "The Mexican Garden section has dramatic plants that hold attention",
      "No bus service — you'll need a taxi or Uber (€6-8 from town)",
      "Almost empty — a peaceful break from crowded palaces",
    ],
    duration: "1-1.5 hrs with kids",
  },
  {
    name: "National Palace of Sintra",
    slug: "national-palace-guide",
    kidRating: 2,
    ageRange: "7+",
    strollerFriendly: true,
    strollerNotes:
      "Ground floor is stroller accessible. Upper floors require stairs. Located in flat town center — no hills.",
    whyKidsLoveIt:
      "The kitchen has two giant chimneys that look like wizard hats. The audio guide has a children's version. Quick visit — won't exhaust small legs.",
    whyKidsHateIt:
      "It's a museum. Rooms of furniture and tiles. Most kids find it boring. The 'don't touch the azulejos' rule is constant.",
    parentTips: [
      "Use the kids' audio guide — it tells stories instead of historical facts",
      "The kitchen with the chimneys is the highlight — go there first",
      "Keep the visit to 30-40 min with kids. Don't try to see everything",
      "Best for rainy days when outdoor palaces aren't appealing",
    ],
    duration: "30-45 min with kids",
  },
];

export const familyTips: FamilyTip[] = [
  {
    category: "planning",
    tip: "Maximum 2 palaces per day with kids. Three is miserable. One palace + town + ice cream = happier family.",
  },
  {
    category: "planning",
    tip: "Start at 9:30am when palaces open. Kids have more energy in the morning and crowds are thinner.",
  },
  {
    category: "planning",
    tip: "Regaleira first, always. It's the one palace every kid loves. If you only visit one, make it this.",
  },
  {
    category: "transport",
    tip: "The bus 434 is exciting for kids (winding mountain road) but gets crowded. Stand near the front for the best 'roller coaster' effect.",
  },
  {
    category: "transport",
    tip: "Consider a tuk-tuk for the uphill ride. More expensive but kids love them, and they drop you at the entrance (bus stops below).",
  },
  {
    category: "transport",
    tip: "The train from Lisbon is 40 min — bring coloring books or tablets. The return trip with tired kids can feel long.",
  },
  {
    category: "food",
    tip: "Pack snacks and water. There's almost nothing to eat inside the palace grounds, and hungry kids melt down fast on steep trails.",
  },
  {
    category: "food",
    tip: "Piriquita pastries are kid-approved: sweet, flaky, cheap. Buy a bag of travesseiros as trail snacks — the kids will demolish them before you even reach the first palace gate.",
  },
  {
    category: "food",
    tip: "Parque da Liberdade in town center has a playground. Perfect for a picnic lunch and a sanity break between palaces.",
  },
  {
    category: "survival",
    tip: "Bring a baby carrier, not a stroller. We tried a stroller on our first visit and gave up after 10 minutes of wrestling it over cobblestones near the National Palace. Sintra's cobblestones and stairs defeat every stroller ever made.",
  },
  {
    category: "survival",
    tip: "Comfortable shoes are non-negotiable. Even for toddlers being carried — you'll walk 8-15km depending on how many palaces.",
  },
  {
    category: "survival",
    tip: "Bathrooms: available at every palace entrance and in town restaurants. None on trails between palaces.",
  },
];

export const ageRecommendations: AgeRecommendation[] = [
  {
    ageGroup: "Babies & Toddlers (0-3)",
    palaces: ["Pena Palace (park paths)", "National Palace (flat, air-conditioned)"],
    approach:
      "Keep it simple. One palace max. Use a carrier. The town center is flat and pleasant. Don't try to be ambitious — you'll regret it on the cobblestones.",
    maxPalaces: 1,
  },
  {
    ageGroup: "Young Kids (4-7)",
    palaces: ["Quinta da Regaleira", "Pena Palace (grounds)"],
    approach:
      "Regaleira is magical at this age — tunnels, wells, grottoes. Pena's colorful exterior is exciting. Skip the Pena interior. 2 palaces maximum. Build in ice cream and playground time.",
    maxPalaces: 2,
  },
  {
    ageGroup: "Older Kids (8-12)",
    palaces: [
      "Quinta da Regaleira",
      "Moorish Castle",
      "Pena Palace (grounds)",
    ],
    approach:
      "The golden age for Sintra. Kids can handle the walks, love the adventure, and have enough energy for 2-3 palaces. Regaleira + Moorish Castle is the dream combo.",
    maxPalaces: 3,
  },
  {
    ageGroup: "Teenagers (13+)",
    palaces: [
      "Quinta da Regaleira",
      "Moorish Castle",
      "Pena Palace",
      "Monserrate (if interested)",
    ],
    approach:
      "Teens can handle a full day. The Instagram factor of Regaleira and Pena helps motivation. Moorish Castle appeals to the adventurous. Monserrate only for architecture-curious teens.",
    maxPalaces: 4,
  },
];

export const kidsFaqs = [
  {
    question: "What's the best Sintra palace for kids?",
    answer:
      "Quinta da Regaleira, without question. The underground tunnels, the 27-meter Initiation Well, and the hidden grottoes make it a real-life adventure for kids ages 4+. Every child we've seen there was thrilled.",
  },
  {
    question: "Can I bring a stroller to Sintra palaces?",
    answer:
      "Technically yes at some, but practically no. Sintra's cobblestones, steep stairs, and uneven paths defeat strollers. Bring a baby carrier instead. The only exceptions: Monserrate's main garden paths and the National Palace ground floor.",
  },
  {
    question: "How many palaces should I visit with kids?",
    answer:
      "Maximum 2 per day with kids under 8. One palace + town exploration is often the ideal family day. With older kids (8+), you can push to 3 if they're energetic. More than that leads to meltdowns.",
  },
  {
    question: "Is Sintra safe for kids?",
    answer:
      "Yes. The palaces and paths are well-maintained. The main risks: unfenced drops at Regaleira's garden edges, slippery stairs in the Initiation Well when wet, and exposed sections of Moorish Castle walls. Standard parental supervision handles all of these.",
  },
  {
    question: "Is the bus 434 okay for kids?",
    answer:
      "Yes — most kids love the winding mountain road. It runs every 15-20 minutes and takes 10 min to Pena. In peak season it gets crowded; if your child needs a seat, wait for the next bus. Strollers fit but it's tight.",
  },
  {
    question: "Where can kids eat in Sintra?",
    answer:
      "Piriquita pastries are universally kid-approved (sweet, flaky). For a meal, Romaria de Baco has simple Portuguese options kids will eat. Parque da Liberdade has a playground and benches for picnic lunches.",
  },
];
