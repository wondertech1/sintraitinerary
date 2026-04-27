export interface ComparisonCategory {
  category: string;
  pena: string;
  regaleira: string;
  winner: "pena" | "regaleira" | "tie";
  verdict: string;
}

export const comparisons: ComparisonCategory[] = [
  {
    category: "First Impressions",
    pena: "Jaw-dropping from a distance — the colorful towers and ramparts look like a Disney castle perched on a hilltop. The exterior is the main event.",
    regaleira: "Understated from outside — you won't understand the hype until you enter. The magic is hidden: underground tunnels, the Initiation Well, secret grottoes.",
    winner: "tie",
    verdict: "Pena wins on visual spectacle. Regaleira wins on discovery and surprise. Different types of 'wow'.",
  },
  {
    category: "The Interior",
    pena: "Royal apartments with period furniture, tile work, and ornate rooms. Interesting but not extraordinary. In summer, you're herded through narrow corridors with 50 other people. Often not worth the queue.",
    regaleira: "The house is secondary — you'll spend 5 minutes inside. The real 'interior' is underground: the Initiation Well spiral staircase, dripping tunnels, waterfall grottoes. Genuinely unique.",
    winner: "regaleira",
    verdict: "Regaleira's underground world is unlike anything else in Portugal. Pena's interior is a standard palace experience — pleasant but skippable.",
  },
  {
    category: "Grounds & Gardens",
    pena: "85 hectares of forested parkland with exotic trees, ferns, and viewpoints. The grounds are vast and peaceful. Cruz Alta summit trail starts here. Feels like a botanical expedition. Designed by Ferdinand II as a deliberate Gesamtkunstwerk — a total artwork blending Moorish, Gothic, Manueline, and Renaissance elements into a unified Romantic landscape.",
    regaleira: "4 hectares of dense, layered gardens with hidden paths, ponds, waterfalls, and caves at every turn. Compact but intensely detailed. You keep finding new passages.",
    winner: "pena",
    verdict: "Pena wins on scale and Romantic vision. Its 85-hectare park dwarfs Regaleira's 4 hectares, and the Gesamtkunstwerk ambition gives the whole site a coherence that rewards slow exploration.",
  },
  {
    category: "Queues & Crowds",
    pena: "The most crowded attraction in Sintra. Summer interior queues: 45-90 minutes. Grounds-only ticket avoids the worst, but the terraces still get packed by 10:30am.",
    regaleira: "Significantly less crowded. No interior queue to speak of. The Initiation Well gets a 10-20 minute line in summer, but the gardens absorb visitors better. Feels spacious even when busy.",
    winner: "regaleira",
    verdict: "Regaleira handles crowds far better. Its layout disperses people through winding paths, while Pena funnels everyone through the same narrow terraces.",
  },
  {
    category: "Ticket Price",
    pena: "Full ticket: €20 (interior + grounds). Grounds only: €12 — the smart pick in summer. In winter, the full ticket is genuine value: the interior queue disappears and you get the chapel retable and royal apartments included. The grounds-only option makes Pena cheaper than Regaleira.",
    regaleira: "€20 for full access (everything included). No grounds-only option needed — everything is accessible. Consistent pricing year-round with no queue penalty.",
    winner: "tie",
    verdict: "A genuine tie. Regaleira offers consistent value at €20 with no queue risk. Pena's €12 grounds-only ticket undercuts it in summer; its full €20 ticket matches it in winter when the interior becomes worthwhile.",
  },
  {
    category: "Views",
    pena: "The best panoramic views in Sintra — period. From the terraces you can see the Atlantic, Lisbon, the Moorish Castle, and the entire Serra. On clear days it's extraordinary.",
    regaleira: "Limited views. The gardens are enclosed and inward-looking. You'll see treetops and the palace tower, but no grand panoramas. It's not the point of Regaleira.",
    winner: "pena",
    verdict: "Pena wins this decisively. If views matter to you, Pena's terraces are non-negotiable.",
  },
  {
    category: "Photography",
    pena: "The most photogenic palace in Portugal — arguably in Europe. The colorful exterior, mountain setting, and dramatic terraces produce iconic shots. Everyone's Instagram Sintra photo is Pena.",
    regaleira: "Moody, mysterious, atmospheric. The Initiation Well spiral is one of the most photographed spots in Portugal. The gardens produce dark, enchanted-forest images. Less obvious but more original shots.",
    winner: "tie",
    verdict: "Pena for the iconic postcard shot. Regaleira for creative, atmospheric photography. Bring your camera to both.",
  },
  {
    category: "Best Time of Day",
    pena: "First thing in the morning (9am). Beat the tour buses, get empty terraces, catch the morning light on the colored tiles. By 10:30am it's crowded. In winter, morning fog wrapping the colored towers creates some of the most atmospheric scenes in Sintra — worth an early start year-round.",
    regaleira: "Opening time (10am) for the Initiation Well alone. But Regaleira also works well in the afternoon — the shaded gardens are perfect for hot days, and the crowds thin after 3pm.",
    winner: "tie",
    verdict: "Both reward an early visit. Pena's morning light and winter fog are spectacular; Regaleira's flexibility (works morning or afternoon) is an advantage on busy summer days.",
  },
  {
    category: "With Kids",
    pena: "Kids love the colorful castle aesthetic and the wide terraces. But the interior queue is torture for children. Stick to grounds-only. The forest trails are good for energetic kids.",
    regaleira: "Kids absolutely love it. Tunnels, caves, underground passages, hidden doors — it's a real-life adventure playground. The Initiation Well is unforgettable for children. Best palace for families.",
    winner: "regaleira",
    verdict: "Regaleira is the clear winner for families. Kids remember the tunnels and well for years.",
  },
  {
    category: "Rainy Day",
    pena: "The terraces and grounds lose their appeal in rain. The interior is covered but the queue means standing in rain. Not ideal in bad weather.",
    regaleira: "The tunnels and grottoes are covered. Rain makes the gardens more atmospheric. The Initiation Well in drizzle is hauntingly beautiful. Regaleira arguably improves in light rain.",
    winner: "regaleira",
    verdict: "Regaleira handles rain gracefully. Pena suffers. If it's raining, do Regaleira first.",
  },
];

export const finalVerdict = {
  ifOnlyOne:
    "It depends on what you value. Regaleira offers the most unique experience — no other palace in the world has the Initiation Well, and the underground world is genuinely unforgettable. But Pena is Portugal's most important Romantic building, a UNESCO-listed monument, and its panoramic views from the terraces are the single best hilltop vista in Sintra. If you're here for architecture and history, Pena. If you're here for adventure and atmosphere, Regaleira.",
  ifBoth:
    "Do Pena first (arrive at 9am for empty terraces, grounds-only ticket in summer or full ticket in winter), then Regaleira at 10am opening or early afternoon. This is the optimal Sintra day for most visitors.",
  peaWins:
    "You want the iconic Sintra photo, panoramic views, Portugal's most significant Romantic architecture, or you're visiting in the off-season when the interior is queue-free. Pena is the spectacle and the historical heavyweight.",
  regaleiraWins:
    "You value unique experiences over visual impact, you're traveling with kids, visiting on a rainy day, or you want to avoid the worst crowds. Regaleira is the adventure.",
};

export const vsComparisonFaqs = [
  {
    question: "Should I visit Pena Palace or Quinta da Regaleira?",
    answer:
      "If you can only visit one, Regaleira. It's a more unique experience — the Initiation Well, underground tunnels, and hidden grottoes exist nowhere else. Pena is more visually iconic (the colorful castle on the hill), but Regaleira delivers a deeper, more memorable visit. Ideally, visit both.",
  },
  {
    question: "Can I visit both Pena and Regaleira in one day?",
    answer:
      "Yes — it's the most popular Sintra day plan. Start at Pena Palace at 9am (grounds-only ticket, 90 min), then bus 434 to town, then walk to Regaleira (10-15 min). You'll finish Regaleira by 1-1:30pm with time for lunch and the Moorish Castle or old town.",
  },
  {
    question: "Which is better for Instagram?",
    answer:
      "Pena Palace — it's one of the most photogenic buildings in Europe. The colorful exterior against the mountain backdrop is the iconic Sintra shot. But Regaleira's Initiation Well spiral staircase is equally famous on social media, just in a different way — moody and mysterious vs bright and spectacular.",
  },
  {
    question: "Which has shorter queues?",
    answer:
      "Regaleira, significantly. The gardens absorb crowds well and there's no pinch-point interior queue. Pena Palace interior queues reach 45-90 minutes in summer. Even with the grounds-only ticket, Pena's terraces get congested. Regaleira feels spacious even at peak times.",
  },
  {
    question: "Which is better with kids?",
    answer:
      "Regaleira, by a wide margin. The underground tunnels, hidden passages, and Initiation Well turn the visit into an adventure game. Kids remember Regaleira for years. Pena is visually impressive but the queues and 'don't touch' interior are harder for young children.",
  },
];
