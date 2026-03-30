import { PalaceGuideData } from "./types";

export const moorishCastle: PalaceGuideData = {
  slug: "moorish-castle-guide",
  name: "Moorish Castle",
  subtitle: "The 20-minute detour from Pena Palace that most people skip — and shouldn't",
  metaTitle: "Moorish Castle Sintra Guide — Best Views, Cheapest Ticket (2026)",
  metaDescription:
    "Moorish Castle guide: the best-value attraction in Sintra at €12. Better views than Pena Palace, a fraction of the crowds, and a 15-min walk between them.",
  lastVerified: "March 2026",

  verdict: {
    rating: "worth-it",
    summary:
      "The Moorish Castle (Castelo dos Mouros) is the best value in Sintra. For €12 you get 360-degree panoramic views from 8th-century fortress walls, a fraction of Pena's crowds, and a genuinely atmospheric walk through history. The wall circuit takes 30-40 minutes and every section offers different perspectives — down to the town, out to the Atlantic, and across to Pena Palace. Most day-trippers skip it because it sounds minor next to the palaces. Their loss.",
    bestFor: "Anyone who likes views, history, or walking. Families with older kids love it.",
    skipIf: "You're exhausted after Pena and physically can't handle more stairs. The walls are steep.",
  },

  quickFacts: {
    duration: "45 min–1 hour",
    cost: "€12 (or €21 combo with Pena Palace)",
    crowdLevel: 2,
    bestTime: "Any time — rarely crowded",
    gettingThere: "15-min walk from Pena Palace (downhill) or bus 434",
    openingHours: "9:30am–6pm (last entry 5pm)",
    website: "parquesdesintra.pt",
  },

  introduction:
    "The Castelo dos Mouros was built in the 8th or 9th century, when the Moors controlled the Iberian Peninsula. Perched on the ridgeline above Sintra, it served as a military lookout commanding views of the coastline and the approach from Lisbon. After the Christian reconquest in 1147, it fell into disuse. In the 19th century, King Ferdinand II — the same king who built Pena Palace — romanticized the ruins, stabilizing the walls and planting the surrounding forest. What you see today is genuine medieval construction with some 19th-century restoration. We walked in expecting a quick 20-minute stop and ended up spending over an hour — the place has a weight to it that the prettier palaces don't. It feels ancient and rugged in a way that the palaces can't match.",

  sections: [
    {
      id: "wall-circuit",
      title: "The Wall Circuit",
      content:
        "The main experience is walking along the top of the fortress walls. The circuit covers the full perimeter and takes 30-40 minutes. Highlights:\n\n**The Royal Tower** — The highest point. Climb the narrow staircase for the best 360-degree panorama in Sintra. On clear days you can see Lisbon, Cascais, and the Berlengas Islands.\n\n**The North Wall** — Faces Pena Palace. The best vantage point for photos of the colorful palace against the sky.\n\n**The South Wall** — Overlooks Sintra town. You can see the National Palace's twin chimneys and the surrounding village.\n\n**The West Wall** — Faces the Atlantic. Dramatic on windy days. When we were there in March, the wind was strong enough to make us grip the parapet. The drop-off on the outer side adds genuine edge.\n\nThe walls are narrow in places (60-80cm) with low parapets. Not terrifying, but you should be comfortable with heights.",
    },
    {
      id: "history",
      title: "The History You're Walking Through",
      content:
        "What makes the Moorish Castle compelling isn't just the views — it's the age. This is among the oldest structures in the Sintra region:\n\n**8th–9th century:** Built by the Moors as part of a chain of coastal lookouts. The walls you're walking on are over 1,000 years old.\n\n**1147:** Captured by Afonso Henriques during the Christian reconquest of Portugal. The castle's strategic value ended as the frontier moved south.\n\n**13th–15th century:** Gradually abandoned. A small Jewish community lived within the walls for a period — archaeological excavations beginning in the 1970s uncovered a medieval Jewish quarter and burial site near the entrance.\n\n**1840s:** Ferdinand II romanticized the ruins as part of his vision for the surrounding forest. He stabilized walls, cleared vegetation, and created the woodland paths you use to approach the castle.\n\n**1995–present:** Ongoing archaeological work has uncovered Moorish cisterns, grain silos, and fragments of daily life from 1,000 years ago.",
    },
    {
      id: "pena-connection",
      title: "Combining with Pena Palace",
      content:
        "The Moorish Castle is a 15-minute walk downhill from Pena Palace, making this the natural combination:\n\n**Route:** Exit Pena Palace grounds, follow signs to Castelo dos Mouros. The path is through forest, paved, and downhill. Well-signed.\n\n**Timing:** Visit Pena first (arrive 9:30am), spend 2 hours, then walk to the Moorish Castle. You'll arrive around 11:30am — perfect timing before it gets warm.\n\n**Ticket tip:** Buy the combo ticket (€21 for Pena grounds + Moorish Castle) at the Pena Palace entrance. Saves €3.\n\n**Return to town:** From the Moorish Castle, walk downhill to Sintra center (20 minutes) or catch bus 434 from the castle stop. Walking is scenic and easy (all downhill).",
    },
  ],

  tickets: {
    intro: "Managed by Parques de Sintra. The cheapest major attraction in Sintra.",
    options: [
      {
        name: "Moorish Castle Only",
        price: "€12",
        includes: "Full access to walls, towers, and grounds.",
        recommended: false,
        note: "Fine if you're not visiting Pena Palace on the same day.",
      },
      {
        name: "Combo: Pena Palace + Moorish Castle",
        price: "€21",
        includes: "Pena Palace grounds + Moorish Castle. Saves €3.",
        recommended: true,
        note: "The best deal if visiting both (and you should — they're a 15-minute walk apart).",
      },
    ],
    buyOnline: "Buy at parquesdesintra.pt. Moorish Castle rarely sells out — walk-up is usually fine.",
    comboDeals: "The Pena + Moorish combo at €21 is the most useful combo in Sintra. Other multi-palace combos exist but are less practical for day-trippers.",
  },

  photoSpots: [
    {
      name: "Royal Tower Summit",
      description: "360-degree view from the highest point. Pena Palace visible in the background.",
      bestTime: "Morning (clear light, Pena Palace catches the sun)",
      crowdTip: "The tower is small — wait 30 seconds for it to clear.",
    },
    {
      name: "North Wall (Pena Palace view)",
      description: "The classic shot: Pena Palace rising above the forest canopy, framed by the castle wall.",
      bestTime: "Late morning (10-11am, sun illuminates Pena's colors)",
      crowdTip: "The walls are long — walk 50 meters from any cluster of people for a clear shot.",
    },
    {
      name: "The Approach Path",
      description: "The forest path leading to the castle entrance, with walls visible above. Atmospheric with morning mist.",
      bestTime: "Early morning (before 10am, mist in the trees)",
      crowdTip: "Almost nobody photographs this — it's beautiful and always empty.",
    },
  ],

  practicalTips: [
    "Visit after Pena Palace, not before. The 15-minute walk between them is downhill in this direction.",
    "The walls are exposed — no shade. Bring water and sun protection in summer.",
    "Comfortable shoes with grip are essential. The wall-top walkway is stone and can be slippery when damp.",
    "Kids love it — walking on castle walls is inherently exciting. But watch small children near the edges. Parapets are low.",
    "The cistern area near the entrance is easily missed. The archaeological remains of the medieval settlement are there.",
    "Allow 45 min minimum. We nearly made the mistake of rushing through in 20 minutes ourselves — it was only because we turned a corner on the western wall and saw the Atlantic stretched out below us that we slowed down. Don't miss the western walls and Royal Tower.",
  ],

  faqs: [
    {
      question: "Is the Moorish Castle worth visiting?",
      answer:
        "Yes — it's the best value in Sintra. We almost skipped it because we were tired after Pena, and it would have been our biggest regret of the trip. At €12 (or €21 combo with Pena), you get better panoramic views than Pena Palace itself, 1,000-year-old walls to walk along, and a fraction of the crowds. It takes under an hour and is a 15-minute walk from Pena. There's no reason to skip it.",
    },
    {
      question: "How do you get to the Moorish Castle?",
      answer:
        "Walk 15 minutes downhill from Pena Palace (well-signed), take bus 434 (stops at the castle), or walk uphill from Sintra town (30 min, steep). The recommended route is Pena first, then walk downhill to the castle.",
    },
    {
      question: "Is the Moorish Castle safe for kids?",
      answer:
        "Yes, with supervision. Kids love walking on the walls. But the parapets are low (about 1 meter) and there are steep drops on the outer side. Keep young children within arm's reach. No strollers — use a carrier.",
    },
    {
      question: "How long does the Moorish Castle take?",
      answer:
        "45 minutes to walk the full wall circuit including the Royal Tower. Some people rush through in 20 minutes but miss the best viewpoints. If you're interested in the archaeology near the entrance, add 15 minutes.",
    },
  ],
};
