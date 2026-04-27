import { PalaceGuideData } from "./types";

export const monserratePalace: PalaceGuideData = {
  slug: "monserrate-palace-guide",
  name: "Monserrate Palace",
  subtitle: "Sintra's most underrated palace — and why architecture lovers rate it above Pena",
  metaTitle: "Monserrate Palace Guide — Sintra's Best-Kept Secret (2026)",
  metaDescription:
    "Why Monserrate Palace is the most underrated site in Sintra. Alhambra-quality stucco, 33 hectares of botanical gardens, and almost no tourists. Complete visitor guide.",
  lastVerified: "February 2026",

  verdict: {
    rating: "worth-it",
    summary:
      "Monserrate is the palace that architecture nerds prefer over Pena. The Moorish-Gothic-Indian exterior is exotic and beautiful, but the interior stucco work is the real star — intricate plaster carvings rivaling the Alhambra in detail, if not scale. The 33-hectare botanical garden around it has plants from five continents, including a surreal Mexican garden with towering cacti and a romantic fern valley. Almost no tourists make it here because there's no bus 434 service. That exclusivity is a feature, not a bug.",
    bestFor: "Architecture lovers, garden enthusiasts, anyone escaping Pena's crowds",
    skipIf: "You only have 4 hours in Sintra and need to prioritize the big three. Monserrate is a 2nd-day site.",
  },

  quickFacts: {
    duration: "1.5–2 hours",
    cost: "€12",
    crowdLevel: 1,
    bestTime: "Morning (best garden light)",
    gettingThere: "Tuk-tuk €5-8 from town center (5 min). Bus 435 from station or tuk-tuk €5-8. Walk is 3km uphill.",
    openingHours: "9:30am–6:30pm (last entry 5:30pm)",
    website: "parquesdesintra.pt",
  },

  introduction:
    "Monserrate Palace was built from 1858 for Sir Francis Cook, a wealthy English textile merchant, on the site of a neo-Gothic ruin where William Beckford had previously lived. Cook hired architect James Knowles Jr. to create a residence blending Arabic, Gothic, and Indian architectural styles — a reflection of the Victorian fascination with the exotic. The palace sits within 33 hectares of landscaped gardens, designed to showcase botanical specimens from Cook's global travels. After decades of neglect in the 20th century, a meticulous restoration beginning in the 2000s — with the palace reopening in 2010 and full garden restoration continuing through 2016 — returned the estate to its original splendor.",

  sections: [
    {
      id: "interior",
      title: "The Interior: Alhambra-Quality Stucco",
      content:
        "Where Pena Palace disappoints on the inside, Monserrate delivers. The interior is a masterclass in decorative plaster work:\n\n**The Music Room** — The crown jewel. A circular room with a domed ceiling entirely covered in intricate stucco patterns. Moorish geometric motifs transition seamlessly into Indian floral patterns. The acoustics are deliberately designed — we stood in the center and whispered to each other, and the sound carried around the dome and came back with startling clarity. We spent fifteen minutes in this room alone, just looking up.\n\n**The Main Hall** — Gothic-pointed arches covered in elaborate plasterwork. The interplay of light through the perforated screens creates shifting patterns on the floor throughout the day.\n\n**The India Room** — Hindu-inspired carved columns and lotus motifs. The most explicitly Indian space in any European palace.\n\n**The Gallery** — Arched windows overlooking the gardens with detailed stucco frames. Each window is different.\n\nThe restoration quality is exceptional. The stucco was painstakingly recreated using original 19th-century techniques. You can walk right up to it (no ropes) and appreciate the detail.",
    },
    {
      id: "gardens",
      title: "The 33-Hectare Botanical Garden",
      content:
        "The gardens are as much a reason to visit as the palace. They're divided into geographic zones:\n\n**The Mexican Garden** — Towering cacti, agaves, and dragon trees create a surreal landscape that looks nothing like Portugal. The largest collection of Mexican plants in Europe.\n\n**The Fern Valley** — Follow the path downhill into a deep, shaded ravine filled with tree ferns, palms, and running water. We visited on a warm afternoon and the temperature dropped noticeably the moment we entered the valley — it felt like walking into a different climate. Cool even in summer, atmospheric, and almost always empty.\n\n**The Rose Garden** — Victorian formal planting near the palace entrance. Best in May-June.\n\n**The Japanese Garden** — A small but serene section with a bamboo grove and ornamental bridge.\n\n**The Australian Collection** — Eucalyptus, bottle-brush trees, and other Southern Hemisphere species.\n\nThe gardens were designed to feel like a journey around the world. A full circuit of the marked trails takes 45-60 minutes. Most visitors only see the area immediately around the palace and miss the best sections deeper in.",
    },
    {
      id: "getting-there",
      title: "Getting to Monserrate (The Only Tricky Part)",
      content:
        "The slight inconvenience of Monserrate is access. It's 3km from the town center, mostly uphill. Bus 435 serves Monserrate but runs with limited frequency.\n\n**Bus 435**: From Sintra station, check the Carris Metropolitana schedule. Limited departures, but the cheapest option.\n\n**Tuk-tuk** (recommended): €5-10 from the town center, 5 minutes. Ask the driver to wait or arrange a pickup time for your return.\n\n**Taxi/Uber**: €6-10 from town. More reliable for the return trip.\n\n**Walking**: 3km, 35-40 minutes, mostly uphill. Doable but not enjoyable in summer heat. The road has no sidewalk in places.\n\n**Driving**: Free parking at the palace. This is one case where having a car is actually useful.\n\nThe tuk-tuk is the smart move for most visitors. Budget €10-16 round trip.",
    },
  ],

  tickets: {
    intro: "Part of Parques de Sintra. One of the cheapest palace tickets despite being one of the best.",
    options: [
      {
        name: "General Admission",
        price: "€12",
        includes: "Palace interior + full botanical garden.",
        recommended: true,
        note: "Incredible value. This gets you one of the best interiors in Sintra plus 33 hectares of gardens.",
      },
      {
        name: "Multi-Palace Combo",
        price: "€30–35 (varies)",
        includes: "Monserrate + Pena + Moorish Castle + others.",
        recommended: false,
        note: "Only makes sense if spending 2+ days visiting all palaces. For most visitors, individual tickets are more flexible.",
      },
    ],
    buyOnline: "Buy at parquesdesintra.pt. Monserrate never sells out — walk-up is always fine. There's no crowd issue here.",
    comboDeals: "Multi-palace combos including Monserrate exist but are rarely economical unless you visit 4+ sites. At €12, the single ticket is already great value.",
  },

  photoSpots: [
    {
      name: "The Palace Exterior (Front Lawn)",
      description: "The full Moorish-Gothic-Indian facade reflected in the morning light. The grass approach provides a clean foreground.",
      bestTime: "Morning (east-facing, warm golden light)",
      crowdTip: "You'll likely be the only person on the lawn.",
    },
    {
      name: "The Music Room Interior",
      description: "The domed ceiling with intricate stucco. Shoot straight up for the geometric pattern.",
      bestTime: "Midday (light from the upper windows illuminates the stucco evenly)",
      crowdTip: "You may have the room to yourself. Monserrate's crowd level is that low.",
    },
    {
      name: "The Fern Valley",
      description: "Tree ferns towering overhead in the shaded ravine. Misty and atmospheric.",
      bestTime: "Morning (moisture in the air catches the light filtering through the canopy)",
      crowdTip: "Almost guaranteed solitude. Most visitors don't walk this far.",
    },
    {
      name: "The Mexican Garden",
      description: "Towering cacti and dragon trees against the sky. Surreal and photogenic.",
      bestTime: "Afternoon (warm side-light on the cacti)",
      crowdTip: "Empty. Always.",
    },
  ],

  practicalTips: [
    "Bus 435 runs from Sintra station to Monserrate (check schedule as it's limited). Alternatively, take a tuk-tuk (€5-10 each way) or taxi.",
    "Visit on Day 2 if doing a 2-day Sintra trip. Most day-trippers never make it here.",
    "The gardens are large (33 hectares). Wear walking shoes and allocate at least 45 min for them.",
    "Bring water — there's a small cafe near the entrance but nothing in the gardens themselves.",
    "The Fern Valley is the garden highlight — don't skip it. Follow the downhill path marked 'Vale dos Fetos'.",
    "Photography is allowed inside the palace (no flash). The stucco details reward close-up shots.",
    "Combine with the Capuchos Convent (further up the road) if you have a car or tuk-tuk.",
  ],

  faqs: [
    {
      question: "Is Monserrate Palace worth the trip?",
      answer:
        "Emphatically yes — especially if you're interested in architecture or gardens. The interior stucco is the finest in Sintra, the botanical gardens are vast and varied, and you'll share the space with almost nobody. The only reason it's not more famous is the slight transport inconvenience.",
    },
    {
      question: "How do I get to Monserrate without a car?",
      answer:
        "Bus 435 from Sintra station (check Carris Metropolitana schedule — limited service). Or tuk-tuk from town center: €5-10, 5 minutes. Walking is possible (3km, 35 min) but mostly uphill.",
    },
    {
      question: "Is Monserrate better than Pena Palace?",
      answer:
        "Different strengths. Pena has the dramatic colorful exterior and the hilltop views. Monserrate has the better interior by far, more interesting gardens, and virtually no crowds. We visited Monserrate the day after Pena, and in truth the stucco work in the Music Room alone outclassed every interior room at Pena combined. If you care about architecture and gardens more than Instagram shots, Monserrate wins.",
    },
    {
      question: "How long do you need at Monserrate?",
      answer:
        "Palace interior: 30-45 minutes. Gardens (full circuit): 45-60 minutes. Total: 1.5-2 hours. You could rush through in 45 minutes but you'd miss the best garden sections.",
    },
  ],
};
