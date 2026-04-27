export interface HiddenGem {
  name: string;
  type: "palace" | "nature" | "trail" | "viewpoint" | "historic";
  description: string;
  whyHidden: string;
  howToVisit: string;
  duration: string;
  cost: string;
  tip: string;
}

export const hiddenGems: HiddenGem[] = [
  {
    name: "Convent of the Capuchos",
    type: "historic",
    description:
      "A tiny 16th-century Franciscan convent carved into the hillside, with cork-lined cells so small that monks had to crouch to enter. The complete opposite of Sintra's opulent palaces — raw, humble, and haunting. Lord Byron called it the most miserable place he'd ever seen, and meant it as a compliment.",
    whyHidden:
      "No bus service, 7km from town center, rarely appears on day-trip itineraries. Most visitors don't know it exists.",
    howToVisit:
      "Drive or taxi (about €10 from town). No bus 434 access. Combine with Peninha if you have a car. Open 9:30am-6pm (summer) / 10am-5pm (winter).",
    duration: "45-60 min",
    cost: "€7",
    tip: "Go on a misty morning. The cork-lined cells in the fog feel like stepping into the 16th century.",
  },
  {
    name: "Villa Sassetti",
    type: "trail",
    description:
      "A free walking trail that connects the town center to the Moorish Castle, passing a stunning 19th-century Italianate villa with terraced gardens. The trail itself is the attraction — it cuts through ancient forest and offers castle views without paying admission.",
    whyHidden:
      "Google Maps doesn't show the trail clearly. Most visitors take bus 434 instead of walking. The villa entrance blends into a residential street.",
    howToVisit:
      "Start from Volta do Duche near the town center. The trailhead is marked but easy to miss — look for a small sign near the car park. It's a 20-minute uphill walk to the castle gates.",
    duration: "20-30 min (one way)",
    cost: "Free",
    tip: "This is the best way to reach the Moorish Castle. You save the bus fare and the walk through ancient forest is more atmospheric than any palace garden.",
  },
  {
    name: "Biester Palace",
    type: "palace",
    description:
      "A neo-Romantic palace that recently opened to the public after over a century in private hands. Ornate interiors, Wagnerian opera connections, and a dramatic hilltop garden. Less restored than Pena or Regaleira, which makes it feel more authentic — like discovering a palace before the tourism machine arrives.",
    whyHidden:
      "Only opened to visitors in 2023. Not yet on the Parques de Sintra circuit. Most guidebooks still don't include it.",
    howToVisit:
      "Located on the road between Sintra town and São Pedro de Penaferrim. Book online at palaciobiester.pt. Limited daily visitors, so advance booking is essential.",
    duration: "60-90 min",
    cost: "€15",
    tip: "Go in the first few years while it's still uncrowded. This will eventually become as popular as Regaleira — enjoy it before that happens.",
  },
  {
    name: "Peninha Sanctuary",
    type: "viewpoint",
    description:
      "A chapel perched on a 490m hilltop with panoramic views over the Atlantic, Cabo da Roca, and the entire Serra de Sintra. On clear days, you can see Lisbon. The setting is extraordinary — the chapel appears to float above the clouds. Almost no tourists, just wind and sky.",
    whyHidden:
      "Requires a car (no bus service). The last 2km is a narrow, steep road that scares off tour buses. Not included in any palace pass.",
    howToVisit:
      "Drive via N247 towards Cabo da Roca, turn off at the Peninha sign. Park at the small lot and walk 5 minutes to the chapel. Combine with Cabo da Roca (15 min drive). Free entry.",
    duration: "30-45 min",
    cost: "Free",
    tip: "Go at sunset. The chapel silhouette against the Atlantic sky is one of the most beautiful views in Portugal, and you'll likely have it to yourself.",
  },
  {
    name: "Sintra Tram (Electrico de Sintra)",
    type: "historic",
    description:
      "A restored vintage tram that runs 13km from Sintra to Praia das Macas beach. Built in 1904, it's one of the last historic trams in Portugal outside Lisbon. The route passes through forest, small villages, and ends at the Atlantic coast. It's slow, rickety, and wonderful.",
    whyHidden:
      "Runs limited schedules (mostly weekends and summer). The stop isn't near the main tourist area. Not useful for palace visits, so it gets skipped by visitors optimizing their day.",
    howToVisit:
      "Catch it at the Sintra tram station (near Portela de Sintra, not the main train station). Check efrfrente.pt for current schedules. Runs more frequently in summer.",
    duration: "45 min one way",
    cost: "€3 each way",
    tip: "Ride it to Praia das Macas for a beach afternoon, then taxi back. It's the most charming transport in Sintra.",
  },
  {
    name: "Seteais Palace Viewpoint",
    type: "viewpoint",
    description:
      "The Tivoli Palacio de Seteais is a luxury hotel in a 18th-century palace, but anyone can walk through the arch to the rear terrace for one of Sintra's best views — the Serra, the Moorish Castle, and the ocean on clear days. Order a coffee or glass of wine and pretend you're aristocracy.",
    whyHidden:
      "People assume it's hotel-guests-only (it's not). The arch entrance on the road to Regaleira looks like a private driveway.",
    howToVisit:
      "Walk from Regaleira (5 min uphill) or from town (10 min). Enter through the arch, walk straight through to the rear gardens. The bar and terrace are open to non-guests.",
    duration: "15-30 min",
    cost: "Free (unless you order drinks — coffee €3-4, wine €8-12)",
    tip: "Stop here after visiting Regaleira for a drink with a view. Late afternoon light is best.",
  },
  {
    name: "Serra de Sintra Summit (Cruz Alta)",
    type: "nature",
    description:
      "The highest point in the Serra de Sintra at 528m, marked by a stone cross. Most visitors see the hilltop from Pena Palace's terraces but never actually climb to the top. The trail through the forest is peaceful and the 360-degree views from the summit are unmatched.",
    whyHidden:
      "The trailhead from Pena Palace is unmarked and easy to miss. It's a 20-minute walk through forest with no facilities. Not mentioned in most guides.",
    howToVisit:
      "From Pena Palace grounds, follow signs toward Cruz Alta (or ask staff). The path is clear but unpaved. Also accessible from the Moorish Castle side trail.",
    duration: "20-30 min from Pena",
    cost: "Free (included in Pena grounds ticket)",
    tip: "Go at opening time when the mist still clings to the trees. You'll likely be completely alone at the summit.",
  },
  {
    name: "Azenhas do Mar",
    type: "viewpoint",
    description:
      "A tiny cliffside village tumbling down to the Atlantic, with a natural ocean pool carved into the rocks. It looks like a postcard that can't possibly be real. Just 15 minutes from Sintra by car, but it feels like a different world — whitewashed houses, crashing waves, zero tourist infrastructure.",
    whyHidden:
      "No bus connection from Sintra. Off the main palace circuit. Most day-trippers head to Cabo da Roca instead.",
    howToVisit:
      "Drive or taxi from Sintra (about €12-15). Park at the top of the village and walk down. The ocean pool is seasonal (summer only). The viewpoint from the road above is stunning year-round.",
    duration: "30-60 min",
    cost: "Free",
    tip: "Come for lunch at one of the two cliff-edge restaurants. Seafood with Atlantic views and no crowds.",
  },
  {
    name: "Chalet da Condessa d'Edla",
    type: "palace",
    description:
      "Hidden within Pena Park, this is one of Sintra's most charming buildings — a Swiss chalet fantasy in a subtropical forest, built for a love story between a king and an opera singer. The interior has been beautifully restored with original cork decoration and hand-painted walls, and it's included in your Pena Park grounds ticket.",
    whyHidden:
      "Sits on a side trail inside Pena Park that most visitors never take. No prominent signage directs you toward it from the main palace route.",
    howToVisit:
      "Ask at the Pena Palace entrance gate for directions to the Chalet trail. It's a 10-minute walk from the main palace. Included in the grounds-only ticket (€12).",
    duration: "15-20 min",
    cost: "Included in Pena Park grounds ticket",
    tip: "Combine with the Alto do Chá viewpoint and Cruz Alta on the same park loop — you can see all three without retracing your steps.",
  },
  {
    name: "Parque da Liberdade",
    type: "nature",
    description:
      "A free public park in the town center that almost no tourist visits. Lush gardens, shaded paths, and a perfect picnic spot away from the palace crowds — all five minutes from the train station.",
    whyHidden:
      "It's not a palace, not on bus 434, and doesn't appear in any 'top attractions' list. Most visitors walk straight past it heading to everywhere else.",
    howToVisit:
      "Walk from Sintra train station (5 min) or from the National Palace (3 min). Free entry, open all day.",
    duration: "15-30 min",
    cost: "Free",
    tip: "Perfect mid-day reset between palaces. The playground makes it useful for families with young children.",
  },
];

export const hiddenGemsFaqs = [
  {
    question: "Can I see Sintra's hidden gems without a car?",
    answer:
      "Some yes, some no. Villa Sassetti, Seteais viewpoint, Cruz Alta, and Biester Palace are all walkable from town. But Capuchos Convent, Peninha, and Azenhas do Mar require a car or taxi. A half-day car rental (from about €25) or a few taxi rides open up everything.",
  },
  {
    question: "Are these worth visiting instead of the main palaces?",
    answer:
      "Not instead — in addition to. See the main palaces first (Regaleira + Pena minimum). Then use hidden gems to fill a second day or replace a third palace. Villa Sassetti and Seteais can be combined with palace visits on Day 1 at no extra time cost.",
  },
  {
    question: "Which hidden gem is the best single pick?",
    answer:
      "Villa Sassetti trail. It's free, easily combined with a Moorish Castle visit, and the walk through ancient forest is one of Sintra's best experiences. If you have a car, Capuchos Convent is the most unique attraction in the Sintra area.",
  },
  {
    question: "Is Biester Palace worth the €15 entry?",
    answer:
      "Yes — especially right now while it's still uncrowded. The interiors are ornate and unrestored (more authentic than Pena), and the garden has great views. It's also a refreshingly different Sintra experience at a time when most content just rehashes the same five palaces.",
  },
  {
    question: "When is the best time to visit Sintra's hidden spots?",
    answer:
      "Early morning or late afternoon on weekdays. Most hidden gems have zero crowds regardless, but morning mist at Capuchos or sunset at Peninha are in a class of their own. Avoid summer weekends for Azenhas do Mar — locals go to the ocean pool.",
  },
];
