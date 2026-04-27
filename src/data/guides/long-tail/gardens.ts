export interface Garden {
  name: string;
  palace: string;
  style: string;
  highlights: string[];
  bestSeason: string;
  duration: string;
  description: string;
  gardenTip: string;
}

export const gardens: Garden[] = [
  {
    name: "Monserrate Gardens",
    palace: "Monserrate Palace",
    style: "Subtropical botanical collection",
    highlights: [
      "Fern Valley — a ravine filled with tree ferns and tropical species",
      "Mexican Garden — agaves, yuccas, and cacti from the Americas",
      "Rose Garden and scented plants collection",
      "Waterfall grotto with subtropical ferns",
      "Over 3,000 exotic species from five continents",
    ],
    bestSeason: "April-June (rhododendrons and subtropical plants at peak)",
    duration: "60-90 min for gardens alone",
    description:
      "Sintra's finest gardens, created by Francis Cook in the 1860s with plants collected from around the world. The microclimate here — Atlantic moisture + sheltered valley — allows subtropical species to thrive alongside Mediterranean plants. The fern valley is otherworldly: a damp ravine filled with massive tree ferns that looks like a Jurassic Park set.",
    gardenTip: "Follow the circular route: palace lawn → fern valley → Mexican garden → rose garden. Don't skip the fern valley (many visitors do) — it's the highlight.",
  },
  {
    name: "Pena Palace Park",
    palace: "Pena Palace",
    style: "Romantic landscape park with exotic species",
    highlights: [
      "85 hectares of forest with species from every continent",
      "Sequoia trees, cork oaks, and Japanese cryptomerias",
      "Valley of the Lakes — artificial ponds with aquatic plants",
      "Cruz Alta trail (highest point at 528m)",
      "Camellias and magnolias in spring",
    ],
    bestSeason: "March-May (magnolias, camellias, azaleas bloom)",
    duration: "60-120 min for grounds",
    description:
      "Ferdinand II didn't just build a palace — he created an entire forest. Over 85 hectares of planted parkland surround Pena, with species he collected from Brazil, North America, Japan, and Australia. Walking the grounds feels like a botanical expedition: you pass from a European oak forest into a grove of giant sequoias, then into a valley of exotic ferns. The grounds are vast enough that you can find total solitude even in summer.",
    gardenTip: "Most visitors rush from the gate to the palace and miss the grounds. Take the forest paths instead of the main road. The Valley of the Lakes is a 15-minute detour that almost nobody takes.",
  },
  {
    name: "Regaleira Gardens",
    palace: "Quinta da Regaleira",
    style: "Symbolic romantic garden with hidden features",
    highlights: [
      "Initiation Well (27m spiral descent)",
      "Underground tunnel network connecting garden features",
      "Waterfall grottoes and hidden caves",
      "Lakes with stepping stones",
      "Dense, layered paths on multiple levels",
    ],
    bestSeason: "Year-round (green and atmospheric in every season)",
    duration: "90-120 min",
    description:
      "Less a garden and more a three-dimensional puzzle. Regaleira's 4 hectares are layered vertically — paths on multiple levels, connected by tunnels, stairs, and hidden passages. Every turn reveals something: a grotto entrance behind a waterfall, stepping stones across a pond, a tunnel emerging at a different level. The planting is lush and intentionally wild, creating an enchanted forest feeling. It's the anti-Monserrate: not about botanical specimens but about mystery and discovery.",
    gardenTip: "Don't follow a map — the joy is getting lost. The tunnels all eventually lead somewhere. Look for hidden entrances behind waterfalls and under staircases. Children adore this.",
  },
  {
    name: "Seteais Palace Gardens",
    palace: "Tivoli Palácio de Seteais (hotel)",
    style: "Neoclassical formal gardens",
    highlights: [
      "Manicured lawns with ocean and Serra views",
      "Formal hedged walkways",
      "The terrace viewpoint (open to non-guests)",
      "Rose garden in season",
    ],
    bestSeason: "May-September (roses in bloom, terrace at its best)",
    duration: "15-30 min",
    description:
      "The smallest but most elegant garden on this list. Seteais is a luxury hotel in an 18th-century palace, but the rear gardens and terrace are open to anyone. The formal style — clipped hedges, symmetrical lawns, clean lines — contrasts beautifully with Sintra's wild, romantic gardens elsewhere. The view from the terrace is arguably the best in Sintra.",
    gardenTip: "Walk through the arch to the terrace. Order a coffee or glass of wine at the bar and sit on the terrace. It's free to visit the gardens; you only pay if you order drinks.",
  },
  {
    name: "National Palace Gardens",
    palace: "National Palace",
    style: "Royal kitchen gardens and formal courtyards",
    highlights: [
      "Intimate courtyard gardens",
      "Views of the iconic twin chimneys",
      "Town-center accessibility (flat ground)",
    ],
    bestSeason: "Year-round",
    duration: "15-20 min",
    description:
      "The most modest gardens on the list but charming in their simplicity. The National Palace courtyards offer a peaceful escape from the old town streets, with views up at the distinctive chimneys. Less a destination garden and more a pleasant complement to the palace interior visit.",
    gardenTip: "The courtyard is a nice spot for photos looking up at the chimneys. Combine with the palace interior visit — don't come just for the gardens.",
  },
];

export const gardensFaqs = [
  {
    question: "Which Sintra palace has the best gardens?",
    answer:
      "Monserrate, by a significant margin. Its subtropical gardens are world-class — over 3,000 species, a fern valley that looks prehistoric, and meticulous botanical curation. Pena Park is larger (85 hectares) and has impressive trees, but Monserrate's gardens are more intensively beautiful.",
  },
  {
    question: "When is the best time to visit Sintra's gardens?",
    answer:
      "April-May for flowers (camellias, rhododendrons, azaleas, magnolias). The gardens are green year-round thanks to Sintra's Atlantic microclimate, but spring brings the most color. Summer is lush but hot for garden walking. Winter gardens are atmospheric — mossy, misty, and green.",
  },
  {
    question: "Are the gardens included in palace tickets?",
    answer:
      "Yes. Your palace ticket includes full garden access at every site. At Pena, there's a grounds-only ticket (€12) that gives you the gardens and terraces without the interior. At all other palaces, the single ticket covers everything.",
  },
  {
    question: "Can I visit just the gardens without the palace interiors?",
    answer:
      "At Pena Palace: yes, there's a specific grounds-only ticket for €12. At all other palaces: your ticket includes both, but you can choose to spend more time in the gardens and skip or briefly visit the interiors. At Seteais: the gardens are free (no ticket needed).",
  },
  {
    question: "Are Sintra's gardens accessible for wheelchair users?",
    answer:
      "Partially. Monserrate's front lawn is flat and wheelchair-friendly, but the fern valley paths are steep. Pena's grounds have some paved roads but many forest paths are unpaved. Regaleira's multi-level garden with tunnels and stairs is not accessible. Seteais terrace is the most accessible garden space.",
  },
];
