export interface CaboHighlight {
  title: string;
  description: string;
  duration: string;
  difficulty: "easy" | "moderate" | "hard";
}

export interface TransportOption {
  method: string;
  from: string;
  cost: string;
  duration: string;
  frequency: string;
  notes: string;
  recommended: boolean;
}

export const caboHighlights: CaboHighlight[] = [
  {
    title: "The Lighthouse Viewpoint",
    description:
      "The main viewing area next to the 18th-century lighthouse. A stone cross monument marks the westernmost point of mainland Europe. The cliffs drop 140 meters straight down to the Atlantic. On clear days, you can see the Berlengas Islands. We stood here at sunset and the wind nearly knocked us sideways — hold onto your hat, literally.",
    duration: "15-20 min",
    difficulty: "easy",
  },
  {
    title: "Cliff Walk North (toward Praia da Ursa)",
    description:
      "An unofficial trail along the clifftops heading north. Increasingly dramatic views, fewer people. After 10-15 minutes you'll be almost alone. Stay behind all barriers and away from unfenced cliff edges. Fatal falls have occurred here — wind gusts can be sudden and strong enough to knock you off balance, especially in summer afternoons when the Nortada blows. The Praia da Ursa descent path is hazardous in wet conditions with rockfall risk.",
    duration: "30-45 min round trip",
    difficulty: "moderate",
  },
  {
    title: "Praia da Ursa Beach Descent",
    description:
      "A steep, unmaintained dirt path down to one of Europe's most dramatic wild beaches. Giant rock formations ('Bear Rock' and 'Giant Rock') rising from the surf. The descent takes 20 minutes; the climb back is the hard part. Not for everyone. We made the climb back in August and were drenched in sweat by the top — bring more water than you think.",
    duration: "1.5-2 hrs round trip",
    difficulty: "hard",
  },
  {
    title: "Sunset at the Edge",
    description:
      "Watching the sun set into the Atlantic from the westernmost point of continental Europe is an experience unlike any other. Arrive 45 minutes early for a good spot. The wind picks up at sunset — bring layers.",
    duration: "1 hr (with wait time)",
    difficulty: "easy",
  },
];

export const transportOptions: TransportOption[] = [
  {
    method: "Bus 403 from Sintra",
    from: "Sintra train station",
    cost: "€4.50 one-way",
    duration: "30 minutes",
    frequency: "Every 60-90 minutes",
    notes:
      "The cheapest option. Runs via Cabo da Roca to Cascais. Check the timetable — buses are infrequent. The last bus back can be as early as 6pm in winter. We missed the last bus once by three minutes and had to Uber back to Sintra for €18 — check that timetable.",
    recommended: true,
  },
  {
    method: "Uber/Taxi from Sintra",
    from: "Sintra town center",
    cost: "€15-20 one-way",
    duration: "20 minutes",
    frequency: "On demand",
    notes:
      "Faster and more flexible. Worth it if splitting between 2-4 people. Ask the driver to wait 30 minutes at Cabo da Roca or book a return Uber (signal can be weak).",
    recommended: false,
  },
  {
    method: "Bus 403 from Cascais",
    from: "Cascais bus terminal",
    cost: "€4.50 one-way",
    duration: "25 minutes",
    frequency: "Every 60-90 minutes",
    notes:
      "Good if combining Cabo da Roca with Cascais in a Sintra → Cabo da Roca → Cascais → Lisbon loop. Train from Cascais back to Lisbon takes 40 minutes.",
    recommended: true,
  },
  {
    method: "Rental car / self-drive",
    from: "Any",
    cost: "Parking free at Cabo da Roca",
    duration: "Varies",
    frequency: "On demand",
    notes:
      "The most flexible option. Free parking at Cabo da Roca (can fill up on summer weekends). Allows stops at Praia da Ursa trailhead and other coastal viewpoints.",
    recommended: false,
  },
];

export const practicalInfo = {
  openingHours: "24/7 — it's an open clifftop, not a gated attraction.",
  entranceFee: "Free. No tickets needed.",
  certificate:
    "The tourist office sells a 'certificate' proving you visited the westernmost point. It costs €11. It's a tourist trap. Skip it unless you collect kitschy souvenirs.",
  facilities:
    "Small tourist office, a café (overpriced coffee and sandwiches), public bathrooms. No restaurant.",
  weatherWarning:
    "Cabo da Roca is significantly windier than Sintra or Lisbon. Bring a jacket even in summer. Stay behind all barriers and away from unfenced cliff edges — fatal falls have occurred here. Wind gusts can be sudden and strong enough to knock you off balance, especially in summer afternoons when the Nortada blows. The Praia da Ursa descent path is hazardous in wet conditions with rockfall risk.",
  mobileSignal:
    "Spotty. Download your Uber ride or bus timetable before arriving. Don't rely on live navigation.",
  bestTime:
    "Late afternoon for the best light and potential sunset. Midday in summer is harsh and crowded. Winter mornings are dramatic but cold.",
};

export const caboFaqs = [
  {
    question: "Is Cabo da Roca worth visiting?",
    answer:
      "Yes, if you appreciate dramatic coastal scenery and the symbolic value of standing at Europe's westernmost point. It's a 30-minute bus ride from Sintra. Budget 1-2 hours. It's NOT worth it if you only have one day and haven't seen the main palaces yet — prioritize Regaleira and Pena.",
  },
  {
    question: "How do I get from Sintra to Cabo da Roca?",
    answer:
      "Bus 403 from Sintra train station (€4.50, 30 min, every 60-90 min). Alternatively: Uber/taxi (€15-20, 20 min). The bus continues to Cascais, so you can do a Sintra → Cabo da Roca → Cascais → Lisbon loop.",
  },
  {
    question: "How long should I spend at Cabo da Roca?",
    answer:
      "30 minutes for the main viewpoint and lighthouse area. 1-2 hours if you walk along the cliffs. 2-3 hours if you descend to Praia da Ursa beach. Most visitors spend 30-45 minutes.",
  },
  {
    question: "Can I visit Cabo da Roca and Sintra palaces in one day?",
    answer:
      "Yes, but it's tight. Visit 2 palaces in the morning, then take the 2-3pm bus 403 to Cabo da Roca. Return to Sintra or continue to Cascais. Don't try to fit 3 palaces + Cabo da Roca — something will feel rushed.",
  },
  {
    question: "Is Praia da Ursa worth the hike?",
    answer:
      "If you're fit and have time: absolutely. It's one of Europe's most dramatic wild beaches. The descent is steep (20 min down, 30 min up) on an unmaintained trail. Don't attempt in wet weather or with young children. Bring water.",
  },
  {
    question: "Should I buy the Cabo da Roca certificate?",
    answer:
      "No. It's €11 for a generic printed certificate. It's a tourist trap aimed at bus tour groups. Take a photo with the stone monument instead — it's free and more meaningful.",
  },
];
