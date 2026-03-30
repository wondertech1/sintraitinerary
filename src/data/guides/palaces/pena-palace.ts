import { PalaceGuideData } from "./types";

export const penaPalace: PalaceGuideData = {
  slug: "pena-palace-guide",
  name: "Pena Palace",
  subtitle: "The colorful hilltop icon — and why you should skip the interior",
  metaTitle: "Pena Palace Guide — Grounds Only vs Interior, Tickets, Tips",
  metaDescription:
    "Honest Pena Palace guide: why the grounds-only ticket is the move, what the interior actually looks like, best photo spots, and how to avoid the worst crowds.",
  lastVerified: "March 2026",

  verdict: {
    rating: "conditional",
    summary:
      "Pena Palace is visually spectacular from the outside — a Romanticist fever dream of colors, turrets, and Moorish arches. But the hype around the interior is misleading. The rooms are small, the furniture unremarkable, and the queue adds 30-45 minutes. Buy the grounds-only ticket, walk the full rampart loop, and spend your saved time at Moorish Castle next door.",
    bestFor:
      "Photographers, architecture enthusiasts, anyone who wants the iconic Sintra shot",
    skipIf:
      "You despise crowds and don't care about the Instagram photo. Regaleira is a better experience overall.",
  },

  quickFacts: {
    duration: "2–3 hours (grounds + park)",
    cost: "€12 (grounds) / €20 (grounds + interior)",
    crowdLevel: 5,
    bestTime: "Arrive before 9:30am or after 4pm",
    gettingThere: "Bus 434 from Sintra station (15 min) or walk up (40 min steep climb)",
    openingHours: "9:30am–6:30pm (last entry 6pm). Park opens at 9am.",
    website: "parquesdesintra.pt",
  },

  introduction:
    "The Palácio da Pena is Portugal's most visited monument and Sintra's undisputed star. Built between 1842 and 1854 by King Ferdinand II on the ruins of a monastery, it's a deliberately theatrical mashup of Romanticist styles — Gothic towers meet Moorish gateways meet Manueline stone carvings, all painted in sun-yellow and terracotta-red. From a distance, perched above the clouds on its hilltop, it genuinely looks like something from a fairy tale. When we first saw it from the road below, half-swallowed by morning fog, nobody in the car said a word for about ten seconds. Up close, the exteriors deliver. The interior? That's where the disappointment starts.",

  sections: [
    {
      id: "interior-vs-grounds",
      title: "Interior vs Grounds-Only: The Honest Verdict",
      content:
        "This is the debate every Sintra visitor has, and here's the straight answer: buy the grounds-only ticket (€12). Here's why:\n\nThe interior consists of roughly 20 small rooms with period furniture, some nice tilework, and a few ornate ceilings. It's fine — not bad, just underwhelming given the queue (30-45 min in peak season) and the €8 premium over grounds-only. The rooms were designed for intimacy, not spectacle, and with 30 other tourists shuffling through each one, there's no intimacy to be found.\n\nThe grounds-only ticket gives you full access to all exterior terraces, the rampart walkway, the Triton gate, the courtyard with its Moorish arches, and the surrounding park. This is where 90% of the photogenic content is. Every famous Pena Palace photo you've seen was taken from the exterior.\n\nWe spent 45 minutes in the queue for the interior rooms. The rooms were fine. Not 45-minutes-in-the-sun fine. The Queen's terrace and the chapel inside have genuine merit if you're a serious architecture enthusiast. Everyone else: save the €6 and the 45-minute queue.",
    },
    {
      id: "what-to-see",
      title: "What to See on the Grounds",
      content:
        "Walk the full rampart loop — most visitors cluster at the front terrace near the entrance and miss the quiet western side. The circuit takes about 30-40 minutes and every section offers different views:\n\n**The Triton Gate** — The carved stone archway with a half-man, half-fish figure is the palace's architectural highlight. Pure Manueline fantasy.\n\n**The Arab Terrace** — Moorish-style arches framing views down to the Atlantic. Morning light here is spectacular.\n\n**The Western Ramparts** — The least-visited section with panoramic views toward Cabo da Roca and the coastline. Almost empty even at peak times.\n\n**The Queen's Terrace** — At the highest point. 360-degree views of the entire Sintra landscape. On clear days you can see Lisbon.\n\n**The Courtyard** — The colorful tile-covered arches and the mix of architectural styles are best appreciated from the central courtyard.",
    },
    {
      id: "the-park",
      title: "Pena Park: The Part Most People Skip",
      content:
        "The 200-hectare park surrounding the palace is a designed Romantic landscape of exotic trees, hidden paths, and viewpoints. Most visitors ignore it entirely — their loss.\n\n**Alto do Chá** — The finest viewpoint in the park. A 10-minute walk from the palace on a marked trail, it offers the classic photograph of Pena Palace framed by trees. Almost nobody walks here.\n\n**The Valley of the Lakes** — Follow the park trail downhill. You'll pass through a fern valley with a chain of artificial lakes. Peaceful and empty.\n\n**The Cruz Alta** — The highest point of the entire Serra de Sintra (529m). A 20-minute walk from the palace. Rewarded with views in every direction.\n\nBudget 30-60 extra minutes for the park if you enjoy walking. The park entrance opens at 9am, 30 minutes before the palace — start here if you're early.",
    },
  ],

  tickets: {
    intro:
      "Tickets are managed by Parques de Sintra. Buying online in advance is strongly recommended for peak season (June–September) as time slots sell out.",
    options: [
      {
        name: "Grounds Only (Park + Palace Terraces)",
        price: "€12",
        includes: "Park, exterior terraces, ramparts, courtyard. No interior rooms.",
        recommended: true,
        note: "This is the ticket we recommend. You see 80%+ of the palace experience.",
      },
      {
        name: "Full Ticket (Park + Palace + Interior)",
        price: "€20",
        includes: "Everything in grounds-only plus interior rooms.",
        recommended: false,
        note: "Only worth it for architecture enthusiasts. Adds 30-45 min queue.",
      },
      {
        name: "Combo: Pena Palace + Moorish Castle",
        price: "€21 (grounds) / €25 (full)",
        includes: "Both sites. Saves €3 vs buying separately.",
        recommended: true,
        note: "Best deal if visiting both (and you should — Moorish Castle is a 15-min walk away).",
      },
    ],
    buyOnline:
      "Buy at parquesdesintra.pt. Select a time slot — you must arrive within 30 min of your slot. In summer, morning slots (9:30-10:30) sell out days in advance.",
    comboDeals:
      "The Pena + Moorish Castle combo saves €3. There's also a 4-palace combo but it's rarely worth it unless you're spending 2+ days in Sintra. Regaleira is managed separately (not included in Parques de Sintra combos).",
  },

  photoSpots: [
    {
      name: "The Triton Gate",
      description: "The carved stone archway. Shoot from below looking up for the dramatic angle.",
      bestTime: "Morning (east-facing, golden light)",
      crowdTip: "Arrive before 10am. By 11am there's a constant stream of people walking through.",
    },
    {
      name: "The Arab Terrace",
      description: "Moorish arches framing the distant Atlantic. Works as both portrait backdrop and landscape.",
      bestTime: "Late morning to early afternoon",
      crowdTip: "Less crowded than the front terrace but still busy 11am-3pm.",
    },
    {
      name: "Western Ramparts",
      description: "The palace exterior from a distance with the yellow and red walls filling the frame.",
      bestTime: "Afternoon (west-facing light)",
      crowdTip: "Almost empty. Most visitors never walk this section.",
    },
    {
      name: "Alto do Chá (Park viewpoint)",
      description: "The classic 'Pena Palace through the trees' shot. Requires a 10-min walk into the park.",
      bestTime: "Early morning (9am-10am) for mist in the trees",
      crowdTip: "You'll likely be alone. Almost nobody walks here.",
    },
  ],

  practicalTips: [
    "Arrive before 9:30am. We learned this the hard way — arriving at 10:45am on a Saturday meant a 35-minute wait just for the bus 434. The queue snakes past the station entrance and around the corner by then.",
    "Wear comfortable shoes with grip. The ramparts and park trails have uneven stone surfaces.",
    "The palace is at 500m altitude. It's cooler and windier than Sintra town. Bring a layer.",
    "Water and snacks inside the palace are expensive. Buy from the town center before heading up.",
    "The park entrance opens at 9am — 30 min before the palace. Start with the park if you're early.",
    "After Pena, walk downhill to the Moorish Castle (15 min) rather than taking the bus back. The path is well-signed and scenic.",
    "Strollers don't work here. Baby carriers only — paths are steep and cobbled.",
  ],

  faqs: [
    {
      question: "Is the Pena Palace interior worth the extra €8?",
      answer:
        "For most visitors, no. The interior rooms are small and the queue adds 30-45 minutes. The grounds-only ticket gives you access to all the famous terraces, ramparts, and the courtyard — where 90% of the experience is. Architecture enthusiasts may enjoy the chapel and Queen's apartments.",
    },
    {
      question: "How do I get to Pena Palace?",
      answer:
        "Bus 434 from Sintra train station (15 min, ~€5 single / €13.50 day pass). The bus stops at the palace gate. Alternatively, walk uphill from the town (40 min, steep). A tuk-tuk costs €8-10.",
    },
    {
      question: "How long do you need at Pena Palace?",
      answer:
        "2 hours for grounds + terraces. Add 45-60 minutes if visiting the interior. Add 30-60 minutes if exploring the surrounding park (recommended). Total: 2-3.5 hours.",
    },
    {
      question: "Can I visit Pena Palace and Moorish Castle on the same morning?",
      answer:
        "Yes — this is the recommended combination and exactly what we did. We started at Pena at 9:30am, spent about two hours on the grounds, then walked 15 minutes downhill to the Moorish Castle. We finished both by 12:45pm and had a leisurely lunch in town before heading to Regaleira.",
    },
    {
      question: "Is Pena Palace accessible for wheelchairs?",
      answer:
        "Limited. The main courtyard is accessible, but the rampart walkway and most terraces involve stairs. The park paths are steep and uneven. The interior has narrow passages. Contact the palace in advance for specific accessibility information.",
    },
    {
      question: "What's the best time of year to visit Pena Palace?",
      answer:
        "Spring (April-May) and autumn (September-October) for mild weather and smaller crowds. When we visited in October, the fog rolled in around midday and wrapped the palace towers in mist — eerie and beautiful, but it cut visibility to maybe 30 meters. Summer (June-August) is peak — arrive before 9:30am or expect long waits. Winter is quiet but foggy, which can obscure the views that make Pena special.",
    },
  ],
};
