export interface Attraction {
  id: string;
  rank: number;
  name: string;
  type: "palace" | "nature" | "culture" | "beach";
  description: string;
  duration: string;
  cost: string;
  crowdLevel: 1 | 2 | 3 | 4 | 5;
  verdict: "worth-it" | "conditional" | "skip-it";
  verdictText: string;
  bestTime: string;
  tip?: string;
}

export const attractions: Attraction[] = [
  {
    id: "quinta-da-regaleira",
    rank: 1,
    name: "Quinta da Regaleira",
    type: "palace",
    description:
      "The most unique site in Sintra. The 27-meter Initiation Well — a spiral staircase descending into darkness — is unlike anything else in Portugal. But the entire estate is a symbolic labyrinth: underground tunnels connect grottoes to a lake, the chapel hides alchemical symbols, and the gardens are designed around Masonic and Templar mythology. You need 2 hours minimum. We've been four times and still find new corners of the garden we missed before.",
    duration: "2 hrs",
    cost: "€20",
    crowdLevel: 3,
    verdict: "worth-it",
    verdictText: "The #1 thing to do in Sintra",
    bestTime: "Before 10am or after 4pm",
    tip: "Take the tunnel at the bottom of the Initiation Well — it exits at the lake grotto. Most people miss this and just climb back up the stairs.",
  },
  {
    id: "pena-palace",
    rank: 2,
    name: "Pena Palace",
    type: "palace",
    description:
      "The colorful hilltop palace is Sintra's most photographed landmark. The exterior is dramatic — Romanticist architecture at its most theatrical, with Moorish arches, Gothic turrets, and Manueline carvings all jammed together. The grounds and terraces are excellent. The interior, however, is a cramped series of small rooms that don't justify the extra queue time.",
    duration: "2–3 hrs",
    cost: "€12 (grounds) / €20 (grounds + interior)",
    crowdLevel: 5,
    verdict: "conditional",
    verdictText: "Grounds-only ticket — skip the interior",
    bestTime: "Arrive before 9:30am",
    tip: "Buy the combo ticket with Moorish Castle at the entrance — saves €3. The grounds-only ticket gives access to all exterior terraces and ramparts.",
  },
  {
    id: "moorish-castle",
    rank: 3,
    name: "Moorish Castle (Castelo dos Mouros)",
    type: "palace",
    description:
      "An 8th-century fortress with ancient stone walls that you can walk along for 360-degree views. Less manicured than Pena, more rugged and atmospheric. The wall circuit takes 30-40 minutes and the views down to the Atlantic and across the Sintra hills are arguably better than from Pena itself. A fraction of Pena's crowds.",
    duration: "45 min–1 hr",
    cost: "€12",
    crowdLevel: 2,
    verdict: "worth-it",
    verdictText: "Best value in Sintra — don't skip this",
    bestTime: "Any time (rarely crowded)",
  },
  {
    id: "monserrate-palace",
    rank: 4,
    name: "Monserrate Palace",
    type: "palace",
    description:
      "Sintra's most underrated palace. The exotic Moorish-Gothic-Indian architecture has stucco work that rivals the Alhambra. The 33-hectare botanical garden surrounding it contains plants from 5 continents, including a surreal Mexican garden and a fern valley. You'll likely be one of a handful of visitors — most day-trippers never make it here.",
    duration: "1.5–2 hrs",
    cost: "€12",
    crowdLevel: 1,
    verdict: "worth-it",
    verdictText: "The one most people skip — don't",
    bestTime: "Morning (best garden light)",
    tip: "No bus 434 service here. Take a tuk-tuk (€5-8) or taxi from the town center. The walk is 3km uphill — not recommended.",
  },
  {
    id: "national-palace",
    rank: 5,
    name: "National Palace of Sintra",
    type: "palace",
    description:
      "The twin conical chimneys are the town's most recognizable silhouette. This is the easiest palace to visit — right in the town center, no hills, no buses. The medieval kitchens, the Magpie Room ceiling, and the Moorish tilework are highlights. The included audio guide is actually worth using.",
    duration: "1 hr",
    cost: "€13",
    crowdLevel: 2,
    verdict: "conditional",
    verdictText: "Good if you have time — the most skippable major palace",
    bestTime: "Afternoon (day-trippers head uphill in the morning)",
  },
  {
    id: "cabo-da-roca",
    rank: 6,
    name: "Cabo da Roca",
    type: "nature",
    description:
      "The westernmost point of mainland Europe. A windswept headland with a lighthouse, a stone cross, and dramatic Atlantic cliffs. It's genuinely moving — not a tourist trap. The landscape is completely different from forested Sintra: raw, open, wild. Bring a jacket — it's always colder and windier here. We expected a quick photo stop and ended up staying 90 minutes watching the waves pound the cliffs.",
    duration: "1–1.5 hrs",
    cost: "€4.50 (bus 403)",
    crowdLevel: 2,
    verdict: "worth-it",
    verdictText: "Dramatic and completely different from the palaces",
    bestTime: "Afternoon for the light; avoid thick fog days",
    tip: "Continue by bus 403 to Cascais instead of backtracking to Sintra. Train from Cascais to Lisbon is direct.",
  },
  {
    id: "sintra-town",
    rank: 7,
    name: "Sintra Old Town",
    type: "culture",
    description:
      "The town center itself deserves time — not just a transit point between palaces. The pastelaria Piriquita has been making travesseiros (almond puff pastries) since 1862. The narrow streets, the antique shops, and the views of the National Palace chimneys from the surrounding hills are lovely, especially in the late afternoon when crowds thin.",
    duration: "1–2 hrs",
    cost: "Free (pastries €2-4)",
    crowdLevel: 3,
    verdict: "worth-it",
    verdictText: "Don't just rush through — the town has character",
    bestTime: "After 4pm when day-trippers leave",
  },
  {
    id: "capuchos-convent",
    rank: 8,
    name: "Convent of the Capuchos",
    type: "culture",
    description:
      "A 16th-century Franciscan convent carved into the hillside with tiny cork-lined cells where monks lived in extreme austerity. Genuinely atmospheric and unlike any other site in Sintra. Almost no tourists make it here, making it feel like a genuine discovery. We ducked through the tiny cork-lined doorways and couldn't believe monks actually lived in spaces this small — it puts everything else in perspective.",
    duration: "45 min",
    cost: "€7",
    crowdLevel: 1,
    verdict: "worth-it",
    verdictText: "The hidden gem for curious travelers",
    bestTime: "Any time",
    tip: "Only accessible by car/taxi (€10-12 from town). Not on any bus route. Worth it if you have a 2nd day.",
  },
  {
    id: "praia-da-ursa",
    rank: 9,
    name: "Praia da Ursa (Bear Beach)",
    type: "beach",
    description:
      "A dramatic beach framed by towering rock formations, including the Bear Rock that gives it its name. Getting there requires a steep 20-minute scramble down an unofficial trail. Not a swimming beach — it's about the wild scenery. One of the most photogenic spots in the Sintra-Cascais area.",
    duration: "1.5 hrs (including hike)",
    cost: "Free",
    crowdLevel: 1,
    verdict: "conditional",
    verdictText: "Only for fit hikers — the trail is steep and unmarked",
    bestTime: "Morning for best light on the rocks",
    tip: "Wear proper shoes. The trail down is steep and sandy. Don't attempt in wet weather.",
  },
  {
    id: "praia-da-adraga",
    rank: 10,
    name: "Praia da Adraga",
    type: "beach",
    description:
      "A wide sandy beach with dramatic cliffs and a natural stone arch. More accessible than Praia da Ursa but equally scenic. There's a decent beach restaurant (Restaurante da Adraga) right on the sand. One of Portugal's most beautiful beaches.",
    duration: "2 hrs",
    cost: "Free (need car/taxi)",
    crowdLevel: 2,
    verdict: "conditional",
    verdictText: "Worth a detour if you have a car — hard to reach by public transport",
    bestTime: "Summer mornings",
  },
];

export const comparisonData = {
  headers: ["Palace", "Cost", "Time", "Crowds", "Best For", "Verdict"],
  rows: [
    {
      name: "Quinta da Regaleira",
      cost: "€20",
      time: "2 hrs",
      crowds: "Moderate",
      bestFor: "Mystical gardens, Initiation Well",
      verdict: "Must-see",
    },
    {
      name: "Pena Palace",
      cost: "€12",
      time: "2-3 hrs",
      crowds: "Very high",
      bestFor: "Colorful exterior, photos, views",
      verdict: "Grounds only",
    },
    {
      name: "Moorish Castle",
      cost: "€12",
      time: "45 min",
      crowds: "Low",
      bestFor: "Panoramic views, history",
      verdict: "Don't skip",
    },
    {
      name: "Monserrate",
      cost: "€12",
      time: "1.5-2 hrs",
      crowds: "Very low",
      bestFor: "Architecture, botanical gardens",
      verdict: "Hidden gem",
    },
    {
      name: "National Palace",
      cost: "€13",
      time: "1 hr",
      crowds: "Low-moderate",
      bestFor: "Easy access, medieval interiors",
      verdict: "If time allows",
    },
  ],
};

export const thingsToDoFaqs = [
  {
    question: "Which palace should I visit if I only have time for one?",
    answer:
      "Quinta da Regaleira. The Initiation Well is unique, the gardens are incredible, and it has shorter queues than Pena Palace. If you want the iconic Instagram shot, Pena Palace grounds-only is your pick.",
  },
  {
    question: "Are combo tickets available?",
    answer:
      "Yes. Parques de Sintra sells combo tickets: Pena Palace + Moorish Castle saves about €3. Other combinations are available on their website (parquesdesintra.pt). Regaleira is managed separately and doesn't have combos with the others.",
  },
  {
    question: "Is Sintra just palaces?",
    answer:
      "No. Cabo da Roca (Europe's westernmost point), the beaches (Adraga, Ursa), the Capuchos Convent, and the town itself are all worth exploring. Two days lets you balance palaces with nature and coast.",
  },
  {
    question: "Can kids enjoy Sintra?",
    answer:
      "Yes — the Moorish Castle walls are fun to climb, and Regaleira's tunnels feel like an adventure. Pena Palace is colorful and exciting for kids. Avoid Monserrate with very young children (long garden walks). Bring a carrier, not a stroller — paths are uneven.",
  },
];
