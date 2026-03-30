export interface ProConPoint {
  point: string;
  detail: string;
}

export interface VisitorType {
  type: string;
  verdict: "must-visit" | "recommended" | "skip";
  reason: string;
}

export interface Myth {
  myth: string;
  reality: string;
}

export const prosOfVisiting: ProConPoint[] = [
  {
    point: "Quinta da Regaleira is genuinely unique in Europe",
    detail:
      "The Initiation Well, underground tunnels, and symbolism-laden gardens have no equivalent anywhere. It alone justifies the trip. We kept hearing 'skip Sintra, it's a tourist trap' from other travelers in Lisbon. They were dead wrong.",
  },
  {
    point: "Easy and cheap to reach from Lisbon",
    detail:
      "40-minute train, €2.35 each way. Trains every 20-30 minutes. No car needed. One of the easiest day trips in Portugal.",
  },
  {
    point: "Incredible variety in a small area",
    detail:
      "A colorful Romanticist palace, a 1,000-year-old Moorish fortress, a mystical well, an exotic botanical garden, and dramatic Atlantic cliffs — all within a few kilometers.",
  },
  {
    point: "5-7°C cooler than Lisbon in summer",
    detail:
      "Sintra's hilltop microclimate makes it the perfect escape from Lisbon's 35°C+ summer heat. The forest shade and fog are a welcome relief.",
  },
  {
    point: "Outstanding photography opportunities",
    detail:
      "From the fog-wrapped Moorish Castle to the colorful Pena Palace to the surreal Initiation Well — Sintra is arguably the most photogenic place in Portugal.",
  },
  {
    point: "Good value for what you get",
    detail:
      "Most palace tickets are €12-20. A full day seeing 3 world-class attractions costs €35-55 total including transport and lunch.",
  },
];

export const consOfVisiting: ProConPoint[] = [
  {
    point: "Summer crowds are genuinely awful",
    detail:
      "July-August means 45-60 min queues at Pena, packed buses, and elbow-to-elbow paths at Regaleira. It significantly diminishes the experience. We visited in peak August once and spent more time in queues than inside the palaces — never again.",
  },
  {
    point: "Lots of walking on steep, uneven terrain",
    detail:
      "Expect 10-15km of walking including steep cobblestone hills, forest trails, and hundreds of stairs inside the palaces. Not suitable for severe mobility limitations.",
  },
  {
    point: "Pena Palace interior is disappointing",
    detail:
      "The most famous palace has the most underwhelming interior. Long queues for cramped rooms. The exterior and grounds are excellent, but the 'full experience' falls flat.",
  },
  {
    point: "Getting around requires planning",
    detail:
      "Bus 434 is the only public transport between hilltop palaces. It gets crowded. Monserrate has no bus service. Tuk-tuks are overpriced. You need a strategy.",
  },
  {
    point: "Weather is unpredictable",
    detail:
      "Sintra creates its own microclimate. Fog and drizzle can appear on 'sunny' days. This is atmospheric but can dampen a short visit if you're unlucky.",
  },
  {
    point: "Overtourism is real",
    detail:
      "Sintra receives 3+ million visitors per year. The town center can feel like a theme park. Going early, going off-season, or choosing less popular palaces helps.",
  },
];

export const visitorTypes: VisitorType[] = [
  {
    type: "Architecture & history lovers",
    verdict: "must-visit",
    reason:
      "Five palaces spanning Moorish, Gothic, Manueline, Romanticist, and Indo-Islamic styles, all in walking distance. Architecture doesn't get more concentrated than this.",
  },
  {
    type: "First-time Lisbon visitors",
    verdict: "must-visit",
    reason:
      "It's the #1 day trip from Lisbon for a reason. Regaleira and the Moorish Castle offer experiences you can't get in the city. Budget one full day.",
  },
  {
    type: "Photographers",
    verdict: "must-visit",
    reason:
      "The Initiation Well, foggy castle walls, and colorful Pena Palace are some of the most photographed scenes in Portugal. Bring a wide-angle lens.",
  },
  {
    type: "Families with kids (4+)",
    verdict: "recommended",
    reason:
      "Regaleira's tunnels are an adventure for kids. The Moorish Castle walls are exciting. Limit to 1-2 palaces and bring a carrier instead of a stroller.",
  },
  {
    type: "Budget travelers",
    verdict: "recommended",
    reason:
      "A great day trip for under €30. Just be strategic with ticket choices — Regaleira (€20) + Moorish Castle (€12) is the best €32 spent in Portugal.",
  },
  {
    type: "Nature & hiking enthusiasts",
    verdict: "recommended",
    reason:
      "The forest trails between palaces, Cruz Alta summit, and Cabo da Roca cliffs satisfy the outdoors itch. Not a wilderness experience, but beautiful botanical landscapes.",
  },
  {
    type: "Nightlife & food-focused travelers",
    verdict: "skip",
    reason:
      "Sintra is a daytime destination. The restaurant scene is limited compared to Lisbon, and there's no nightlife. Visit for the palaces, eat in Lisbon.",
  },
  {
    type: "Travelers with severe mobility limitations",
    verdict: "skip",
    reason:
      "Unfortunately, Sintra's steep hills, cobblestones, and palace stairs make it very challenging for wheelchair users or those who can't walk on uneven ground. The National Palace is the only mostly-accessible option.",
  },
];

export const myths: Myth[] = [
  {
    myth: "You need a full day to see Sintra properly",
    reality:
      "You can see 2-3 palaces in 5-6 hours (8am-2pm). A full day is more relaxed, but it's not required. Even a half-day hitting Regaleira + Moorish Castle is worthwhile.",
  },
  {
    myth: "You need a car to get around Sintra",
    reality:
      "The train from Lisbon + bus 434 + walking covers everything except Monserrate. A car actually complicates things — parking near palaces is limited and expensive.",
  },
  {
    myth: "Pena Palace is the must-see attraction",
    reality:
      "Pena Palace is the most famous, but Quinta da Regaleira is the most loved. Most visitors rate Regaleira higher. Pena is worth seeing from outside, but the interior is skippable. We've taken friends to both — every single one ranked Regaleira as their favorite.",
  },
  {
    myth: "Sintra is just 'pretty palaces'",
    reality:
      "There are also 1,000-year-old Moorish walls, underground Masonic tunnels, the westernmost point of mainland Europe, wild Atlantic beaches, and dense subtropical forests.",
  },
  {
    myth: "The Lisboa Card saves money for Sintra",
    reality:
      "It gives 10-15% discounts on some palaces but doesn't cover Regaleira. Individual tickets + train fare is almost always cheaper for a Sintra-focused day.",
  },
  {
    myth: "All Sintra palaces are the same kind of experience",
    reality:
      "They're wildly different. Pena = colorful exterior showpiece. Regaleira = underground adventure. Moorish Castle = panoramic views. Monserrate = peaceful gardens. National Palace = historical tilework. Each offers something unique.",
  },
];

export const worthVisitingFaqs = [
  {
    question: "Is Sintra worth visiting?",
    answer:
      "Yes — it's one of the most unique destinations in Europe. Quinta da Regaleira's Initiation Well has no equivalent anywhere. The variety of palaces, castles, and landscapes in such a small area is exceptional. The only caveat: avoid peak summer or go very early.",
  },
  {
    question: "Is Sintra overrated?",
    answer:
      "Pena Palace's interior is overrated. Sintra's overall experience is not. The issue is that most tourist content focuses on Pena, when Regaleira and the Moorish Castle are actually more memorable. Set the right expectations and you won't be disappointed.",
  },
  {
    question: "Is one day enough for Sintra?",
    answer:
      "For most visitors, yes. One day covers 2-3 palaces, lunch in town, and a thorough experience. Two days lets you see all five palaces plus Cabo da Roca at a relaxed pace. Don't try to squeeze everything into one day.",
  },
  {
    question: "Is Sintra better than Lisbon?",
    answer:
      "They're completely different experiences. Sintra is nature, palaces, and mystery. Lisbon is urban culture, food, and nightlife. Do both — take a day trip to Sintra from Lisbon. They complement each other perfectly.",
  },
  {
    question: "Should I skip Sintra and go to Cascais instead?",
    answer:
      "Only if you've already seen Sintra or genuinely prefer a beach town. Sintra offers unique experiences (Regaleira, Moorish Castle) that have no equivalent in Cascais. Cascais is pleasant but more generic. If you have time for both, visit Sintra first.",
  },
  {
    question: "Is Sintra worth visiting in winter?",
    answer:
      "Yes — arguably more atmospheric than summer. The fog wrapping the palaces creates a fairytale atmosphere. Virtually no queues. Prices are lower. The trade-off: shorter days, occasional rain, some gardens past peak bloom. Dress warmly and bring a rain jacket.",
  },
];
