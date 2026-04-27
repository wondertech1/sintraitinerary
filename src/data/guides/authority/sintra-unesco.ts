export interface UnescoSite {
  name: string;
  role: string;
  description: string;
  whyIncluded: string;
}

export interface UnescoTimeline {
  year: string;
  event: string;
}

export const unescoSites: UnescoSite[] = [
  {
    name: "Pena Palace & Park",
    role: "The crown jewel of Romantic architecture",
    description:
      "Ferdinand II's eclectic palace (built 1842-1854) combines Gothic, Moorish, Renaissance, and Manueline elements on a hilltop above the Serra. The surrounding 85-hectare park blends exotic species from every continent. UNESCO recognized it as one of the finest examples of 19th-century Romantic architecture in Europe.",
    whyIncluded: "Outstanding example of Romantic landscaping and architecture — a deliberate synthesis of nature and human creation.",
  },
  {
    name: "Quinta da Regaleira",
    role: "Symbolic and esoteric architecture",
    description:
      "Built by Carvalho Monteiro (businessman, collector, bibliophile) from 1904-1910, Regaleira is filled with alchemical, Masonic, Templar, and Rosicrucian symbolism. The Initiation Well, underground tunnels, and layered garden design make it unique in European architecture.",
    whyIncluded: "Represents the height of Romantic-era symbolic architecture, blending mythology, spirituality, and landscape design.",
  },
  {
    name: "Moorish Castle",
    role: "Medieval military heritage",
    description:
      "8th-9th century fortification built during the Moorish occupation of Iberia. The walls snake across the hilltop with views in every direction. Ferdinand II romanticized the ruins in the 19th century, planting gardens and adding walking paths — making it both a medieval monument and a Romantic landscape feature.",
    whyIncluded: "Rare surviving example of Moorish military architecture in Portugal, later integrated into the Romantic landscape vision.",
  },
  {
    name: "National Palace of Sintra",
    role: "Royal residence across centuries",
    description:
      "The town center palace with the iconic twin conical chimneys. Occupied continuously from the 15th century through the end of the Portuguese monarchy in 1910. Its Moorish-influenced architecture (azulejo rooms, the Swan Room with 27 swans) reflects centuries of royal taste.",
    whyIncluded: "Best-preserved medieval royal palace in Portugal, showing continuous occupation and architectural evolution over 500+ years.",
  },
  {
    name: "Monserrate Palace & Gardens",
    role: "Botanical and architectural fusion",
    description:
      "A Gothic-Moorish fantasy built from 1858 by English textile magnate Francis Cook. The gardens contain over 3,000 exotic species from five continents — one of Europe's richest botanical collections. The palace interior features carved stone that looks like lacework.",
    whyIncluded: "Exceptional example of how the Romantic movement integrated exotic botany with architectural fantasy.",
  },
  {
    name: "Serra de Sintra",
    role: "The natural landscape itself",
    description:
      "The entire mountain range is part of the UNESCO designation — not just the buildings. The Serra's unique microclimate (Atlantic moisture creates persistent fog and lush vegetation) was the reason royals and aristocrats chose Sintra in the first place. The forest, trails, and biological diversity are as protected as the palaces.",
    whyIncluded: "The natural landscape is inseparable from the cultural landscape. The palaces exist because of the Serra's extraordinary environment.",
  },
];

export const unescoTimeline: UnescoTimeline[] = [
  { year: "8th-9th c.", event: "Moors build the hilltop castle during the occupation of Iberia" },
  { year: "1147", event: "Afonso Henriques conquers Sintra; Moorish Castle falls to Christian forces" },
  { year: "15th c.", event: "National Palace becomes the primary summer residence of Portuguese royalty" },
  { year: "1838-1854", event: "Ferdinand II transforms a ruined monastery into Pena Palace — the Romantic era begins" },
  { year: "1858", event: "Francis Cook begins Monserrate Palace and its extraordinary gardens" },
  { year: "1904-1910", event: "Carvalho Monteiro builds Quinta da Regaleira with its symbolic underground world" },
  { year: "1910", event: "Portuguese Republic ends the monarchy; palaces become national monuments" },
  { year: "1995", event: "UNESCO inscribes the Cultural Landscape of Sintra as a World Heritage Site" },
  { year: "2000s-present", event: "Parques de Sintra manages restoration and conservation of all palace sites" },
];

export const unescoFaqs = [
  {
    question: "When did Sintra become a UNESCO World Heritage Site?",
    answer:
      "In 1995. It was inscribed as a 'Cultural Landscape' — not just for individual buildings but for the entire relationship between the palaces, gardens, forests, and the Serra de Sintra mountain. It was one of the first cultural landscapes recognized by UNESCO in Europe.",
  },
  {
    question: "What does 'Cultural Landscape' mean?",
    answer:
      "It means UNESCO recognized that the value isn't just the palaces themselves but the way humans shaped the natural landscape — planting exotic gardens, building on dramatic hilltops, creating forest trails, and integrating architecture with the mountain environment. The whole is greater than the sum of its parts.",
  },
  {
    question: "Which Sintra sites are covered by UNESCO protection?",
    answer:
      "The entire Serra de Sintra mountain and its major monuments: Pena Palace, Moorish Castle, National Palace, Monserrate Palace, Quinta da Regaleira, the Convent of the Capuchos, and the surrounding forests and gardens. It's a broad designation covering the cultural landscape as a whole.",
  },
  {
    question: "Does UNESCO status affect my visit?",
    answer:
      "Not directly — you won't notice signage or restrictions beyond normal palace rules. But UNESCO status drives conservation funding, ensures buildings are properly maintained, and is the reason the Serra's forests are protected from development. You benefit from it without seeing it.",
  },
  {
    question: "Is Sintra the only UNESCO site near Lisbon?",
    answer:
      "No. The Tower of Belem and Jeronimos Monastery in Lisbon are also UNESCO-listed. But Sintra's 'Cultural Landscape' designation is broader and rarer — it protects an entire environment, not just individual monuments. Within a one-hour train ride, you can visit two UNESCO World Heritage areas.",
  },
];
