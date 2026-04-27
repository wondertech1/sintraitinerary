import { ItineraryData } from "./types";

export const threeDayItinerary: ItineraryData = {
  duration: 3,
  title: "Three Days in Sintra",
  subtitle:
    "The unhurried version we wish we'd done from the start — every palace at a relaxed pace, forest trails, a food walk, and the dramatic Atlantic coast",
  lastVerified: "March 2026",
  stats: [
    { label: "Palaces", value: "5" },
    { label: "Walking", value: "18–22 km" },
    { label: "Budget", value: "€180–315" },
    { label: "Nights", value: "2" },
  ],
  routes: [
    {
      id: "complete-relaxed",
      name: "The Complete Sintra (Relaxed)",
      tagline:
        "Everything worth seeing — without the rush that ruins most Sintra visits",
      days: [
        {
          dayNumber: 1,
          title: "The Hilltop Palaces",
          theme: "Pena Palace, Moorish Castle, Quinta da Regaleira",
          summary:
            "The big three — but at a pace that lets you actually enjoy them. Start with Pena Palace when it opens, walk to the Moorish Castle, descend to town for a proper lunch, then explore Regaleira in the golden afternoon light. End with a town stroll when the day-trippers are gone.",
          walkingKm: "7",
          stops: [
            {
              time: "09:15",
              period: "morning",
              name: "Pena Palace",
              description:
                "Take bus 434 to the top. Grounds-only ticket. With 2.5 hours you can walk the full rampart loop, explore the lower terraces most visitors miss, and linger at the western viewpoint with Atlantic panoramas. We sat at the western viewpoint for 20 minutes watching the morning mist burn off the hills below — something you'd never have time for on a day trip.",
              duration: "2.5 hrs",
              cost: "€12",
              crowdLevel: 3,
              verdict: "conditional",
              verdictText: "Grounds only — the interior disappoints",
              tip: "The park trails below the palace are worth 30 extra minutes. We found ancient fern trees taller than us, a hidden fountain covered in green moss, and saw exactly two other people the entire time.",
            },
            {
              time: "11:45",
              period: "morning",
              name: "Moorish Castle",
              description:
                "20-25 minute walk from Pena gate-to-gate (downhill), including the walk through Pena's grounds to the nearest exit. Walk the full wall circuit including the lesser-visited cistern area and the northern rampart. We've done this walk three times now, and the luxury of sitting on the ancient walls with a snack — watching hawks circle below you — is in practice one of the best moments Sintra offers.",
              duration: "1 hr",
              cost: "€12",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "Underrated highlight — different, equally impressive views",
            },
            {
              time: "13:00",
              period: "afternoon",
              name: "Lunch in Town",
              description:
                "Walk downhill to the center. With 3 days, you can do a proper sit-down lunch instead of grabbing a sandwich between palaces.",
              duration: "1.5 hrs",
              cost: "€12–20",
              crowdLevel: 3,
              verdict: "worth-it",
              verdictText: "Eat off the main square",
            },
            {
              time: "14:30",
              period: "afternoon",
              name: "Quinta da Regaleira",
              description:
                "The afternoon crowds thin after 15:00. Descend the Initiation Well, take the tunnel to the lake grotto, explore the chapel's alchemical symbolism, and wander the upper gardens most visitors skip entirely. The late afternoon light through the trees is extraordinary.",
              duration: "2 hrs",
              cost: "€20",
              crowdLevel: 3,
              verdict: "worth-it",
              verdictText: "The must-see of Sintra",
              tip: "At the bottom of the Initiation Well, take the tunnel exit to the lake — don't just walk back up the stairs.",
            },
            {
              time: "17:00",
              period: "evening",
              name: "Sintra Town Stroll",
              description:
                "The day-trippers are gone. Walk the old town, grab a travesseiro from Piriquita, browse the antique shops. Sintra at its most atmospheric — quiet cobblestones, soft evening light, the sound of fountains.",
              duration: "1 hr",
              cost: "€3–5",
              crowdLevel: 1,
              verdict: "worth-it",
              verdictText: "Sintra at its most peaceful",
            },
          ],
          lunch: {
            name: "Incomum",
            cuisine: "Modern Portuguese",
            price: "€12–18 per person",
            description:
              "Creative Portuguese dishes on Rua Dr. Alfredo Costa. Good wine list. Away from the tourist crush.",
            whatToOrder:
              "Codfish croquettes to start, then the pork cheeks or the risotto.",
          },
          dinner: {
            name: "Nau Palatina",
            cuisine: "Petiscos (Portuguese tapas)",
            price: "€15–22 per person",
            description:
              "Excellent small plates and a surprisingly good wine selection. Cozy evening atmosphere. Book ahead.",
            whatToOrder:
              "Pica-pau (cubed steak with pickles), pataniscas de bacalhau, local cheese board.",
          },
          transportNotes: [
            {
              text: "Train from Lisbon Rossio at 08:15. Bus 434 day pass (€13.50) for the Pena/Moorish Castle loop.",
            },
          ],
        },
        {
          dayNumber: 2,
          title: "Gardens, Forests & the National Palace",
          theme: "Monserrate Palace, forest trails, National Palace",
          summary:
            "Day 2 covers the sites most day-trippers never reach. Monserrate Palace is worth the tuk-tuk ride for its Moorish-Indian architecture and 33-hectare gardens. After, walk the forest trails through the Serra, visit the National Palace at a leisurely pace, and explore the Parque da Pena trails.",
          walkingKm: "8",
          stops: [
            {
              time: "09:30",
              period: "morning",
              name: "Monserrate Palace & Gardens",
              description:
                "Tuk-tuk from town (€5-8, 5 min). The interior stucco work rivals the Alhambra — we actually gasped when we walked into the main hall. Spend time in the 33-hectare garden — the Mexican garden with towering cacti, the fern valley where the air smells like damp earth and eucalyptus, and the Japanese-inspired section. Most visitors only see the palace; the garden is the real treasure.",
              duration: "2.5 hrs",
              cost: "€12",
              crowdLevel: 1,
              verdict: "worth-it",
              verdictText: "The palace most day-trippers miss",
              tip: "Ask the tuk-tuk driver to return for you, or walk back through the forest trail to Sintra (45 min, mostly downhill, beautiful).",
            },
            {
              time: "12:15",
              period: "afternoon",
              name: "Forest Trail Walk",
              description:
                "Walk back from Monserrate through the Serra de Sintra forest. We took this trail on a misty morning and it was otherworldly — moss-covered boulders, ancient trees dripping with moisture, light filtering through the canopy in shafts. The forest is one of Sintra's greatest attractions and most visitors never see it. Well-marked trails connect Monserrate to the town center.",
              duration: "45 min",
              cost: "Free",
              crowdLevel: 1,
              verdict: "worth-it",
              verdictText: "The hidden highlight of Sintra",
            },
            {
              time: "13:15",
              period: "afternoon",
              name: "Lunch",
              description:
                "Back in town. Try somewhere different from Day 1.",
              duration: "1 hr",
              cost: "€10–18",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "Try somewhere different from Day 1",
            },
            {
              time: "14:30",
              period: "afternoon",
              name: "National Palace of Sintra",
              description:
                "Right in the town center — the medieval palace with the iconic twin chimneys. No hills, no buses. The Magpie Room ceiling, the Swan Room, the enormous kitchen, and the Moorish-era tilework. Audio guide included and actually worth using.",
              duration: "1.5 hrs",
              cost: "€13",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "Better than most visitors expect",
              tip: "The palace has some of the oldest azulejo tilework in Portugal — we almost walked past the Arab Room, but a guard told us it was the highlight. He was right.",
            },
            {
              time: "16:15",
              period: "afternoon",
              name: "Parque da Pena Trails",
              description:
                "Walk or take bus 434 partway up to explore the Pena Park trails you skipped yesterday. The Valley of the Lakes, the High Cross viewpoint, and hidden grottoes. Peaceful and uncrowded in the late afternoon.",
              duration: "1.5 hrs",
              cost: "€12 (Pena grounds ticket required — bus 434 pass does NOT include park entry)",
              crowdLevel: 1,
              verdict: "conditional",
              verdictText: "Only if you enjoy forest walks",
              skipIf: "Rain or sore feet — save energy for Day 3's coast trip.",
            },
          ],
          lunch: {
            name: "Tascantiga",
            cuisine: "Portuguese tapas",
            price: "€10–15 per person",
            description:
              "Small plates, local wines. On Rua das Padarias. Best food in Sintra.",
            whatToOrder:
              "Octopus salad, chouriço assado (flambéed sausage), Serra cheese.",
          },
          dinner: {
            name: "Restaurante Regional de Sintra",
            cuisine: "Traditional Portuguese",
            price: "€15–25 per person",
            description:
              "Hearty Portuguese cooking. The seafood rice for two is the best deal in town.",
            whatToOrder:
              "Arroz de marisco (seafood rice) or the bacalhau à brás.",
          },
          transportNotes: [
            {
              text: "No morning train needed — you're staying in Sintra. Walk to all sites today.",
            },
            {
              text: "Tuk-tuk to Monserrate from town center: €5-8. Or walk (3km uphill, 40 min).",
            },
          ],
        },
        {
          dayNumber: 3,
          title: "Food Walk, Cabo da Roca & Cascais",
          theme: "Sintra's food scene, then the dramatic Atlantic coast",
          summary:
            "A completely different day. Morning food walk through Sintra's pastry shops and market. Then bus 403 to Cabo da Roca — Europe's westernmost point — and continue to Cascais for seafood dinner before taking the train back to Lisbon.",
          walkingKm: "5",
          stops: [
            {
              time: "09:00",
              period: "morning",
              name: "Sintra Food Walk",
              description:
                "Start at Piriquita for warm travesseiros — we got there at 8:45 and could smell the butter and almond from the street. Then Café Saudade for queijadas and coffee, browse Mercado da Vila for local cheese and fruit, and pick up fofos de Belas from a local bakery. This is Sintra beyond the palaces — the flavors that have defined this town for centuries.",
              duration: "2 hrs",
              cost: "€8–12",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "The tastiest morning in Sintra",
              tip: "Travesseiros are best eaten warm — Piriquita bakes fresh batches from 8:30am.",
            },
            {
              time: "11:30",
              period: "morning",
              name: "Bus 403 to Cabo da Roca",
              description:
                "From Sintra station. The 40-minute bus ride winds through the Serra de Sintra with glimpses of the ocean. Sit on the left side for the best views.",
              duration: "40 min",
              cost: "€4.50",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "The scenic route to the edge of Europe",
            },
            {
              time: "12:15",
              period: "afternoon",
              name: "Cabo da Roca",
              description:
                "The westernmost point of mainland Europe. A rugged, windswept headland with a lighthouse and stone cross. Walk the cliff path in both directions for the most dramatic viewpoints. Completely different from the forested hills — raw ocean, towering cliffs, crashing waves.",
              duration: "1.5 hrs",
              cost: "Free",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "A completely different experience",
              tip: "Bring a jacket — it's always windier and 5-8°C colder here than in Sintra town.",
              skipIf:
                "Thick fog or heavy rain — the entire point is the view.",
            },
            {
              time: "14:00",
              period: "afternoon",
              name: "Bus 403 to Cascais",
              description:
                "Continue on bus 403 from Cabo da Roca to Cascais (30 min). No need to backtrack to Sintra — the bus continues along the coast.",
              duration: "30 min",
              cost: "€4.50",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "Scenic coastal ride",
            },
            {
              time: "14:45",
              period: "afternoon",
              name: "Cascais — Boca do Inferno & Town",
              description:
                "Walk to Boca do Inferno (Hell's Mouth) — a dramatic sea chasm with crashing waves. We visited at high tide and the spray shot 15 feet into the air, soaking everyone standing too close. Then explore Cascais old town: the marina, the pedestrian streets, and the beach. A charming coastal town and a perfect contrast to Sintra's forests.",
              duration: "2.5 hrs",
              cost: "Free",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "The perfect coastal coda to your Sintra trip",
            },
            {
              time: "17:30",
              period: "evening",
              name: "Seafood Dinner in Cascais",
              description:
                "Cascais has excellent seafood restaurants along the marina and in the old town. A fitting end to three days — fresh grilled fish with a view of the Atlantic.",
              duration: "1.5 hrs",
              cost: "€18–30",
              crowdLevel: 2,
              verdict: "worth-it",
              verdictText: "End the trip with fresh Atlantic seafood",
            },
          ],
          lunch: {
            name: "Skip formal lunch",
            cuisine: "Food walk grazing",
            price: "€8–12 total",
            description:
              "Your food walk doubles as lunch. Pastries, cheese, fruit from the market, and snacks — you'll be full.",
            whatToOrder: "Travesseiros, queijadas, Serra cheese, seasonal fruit.",
          },
          dinner: {
            name: "Casa da Guia (Cascais)",
            cuisine: "Seafood",
            price: "€18–30 per person",
            description:
              "Perched on the cliffs between Cascais and Boca do Inferno. We ended our three-day trip here watching the sun drop toward the Atlantic with a glass of vinho verde — ocean views, fresh fish, and a noticeably relaxed atmosphere.",
            whatToOrder:
              "Grilled sea bass, arroz de marisco, or whatever's fresh on the daily board.",
          },
          transportNotes: [
            {
              text: "Bus 403 from Sintra station to Cabo da Roca: €4.50, runs every 60-90 minutes (gaps can stretch to 2 hours in winter). Check the Carris Metropolitana app for the live schedule.",
            },
            {
              text: "Bus 403 continues from Cabo da Roca to Cascais: €4.50, 30 min.",
            },
            {
              text: "Train from Cascais to Lisbon Cais do Sodré: €2.35, every 20 min, 40 min ride. Last train around 01:00.",
            },
          ],
        },
      ],
      budget: {
        rows: [
          {
            category: "Transport (Lisbon↔Sintra)",
            budget: "€2.35",
            mid: "€2.35",
            comfort: "€30–40",
          },
          {
            category: "Local transport (Bus 434, tuk-tuks)",
            budget: "€13.50",
            mid: "€25",
            comfort: "€40",
          },
          {
            category: "Bus 403 (Cabo da Roca + Cascais)",
            budget: "€9",
            mid: "€9",
            comfort: "€9",
          },
          {
            category: "Palace tickets (5 palaces + Pena park re-entry)",
            budget: "€45",
            mid: "€81",
            comfort: "€81",
          },
          {
            category: "Accommodation (2 nights)",
            budget: "€80",
            mid: "€120",
            comfort: "€200",
          },
          {
            category: "Meals (3 days)",
            budget: "€25",
            mid: "€65",
            comfort: "€120",
          },
          {
            category: "Pastries & snacks",
            budget: "€8",
            mid: "€15",
            comfort: "€20",
          },
        ],
        totals: { budget: "€183", mid: "€317", comfort: "€500–510" },
      },
    },
  ],
  faqs: [
    {
      question: "Is 3 days too long for Sintra?",
      answer:
        "Not at all — it's the ideal length. We did Sintra as a day trip on our first visit and left feeling like we'd barely scratched the surface. With 3 days you see everything at a relaxed pace, explore the forest trails, do a food walk, and add the dramatic Cabo da Roca coastline. After doing it properly, we can't imagine going back to the rushed version.",
    },
    {
      question: "Where should I stay in Sintra for 3 days?",
      answer:
        "Stay in or near the town center for walkability. Good options: Sintra Boutique Hotel (central, €70-100/night), Casa Miradouro (views, €60-80), or local guesthouses on Booking.com from €55-75 in shoulder season, €80-120 in summer. Avoid anything requiring a car — you won't need one.",
    },
    {
      question: "What if it rains on one of my 3 days?",
      answer:
        "Swap the Cabo da Roca coast day to the clearest day — we made the mistake of going to Cabo da Roca on a foggy afternoon and literally couldn't see the ocean 50 meters below. Rain actually enhances Sintra's palaces though — fog-wrapped Regaleira and misty Pena are atmospheric. Use a rainy day for the National Palace (indoor), Monserrate interior, and the food walk (cafés provide shelter). See our Rainy Day Guide for the full plan.",
    },
    {
      question: "Can I do this itinerary without a car?",
      answer:
        "Yes — it's designed to be car-free. Train from Lisbon, Bus 434 for hilltop palaces, tuk-tuk to Monserrate, Bus 403 for the coast, and train from Cascais back to Lisbon. Walking handles everything else.",
    },
    {
      question: "How does this compare to the 2-day itinerary?",
      answer:
        "The 2-day itinerary covers the same 5 palaces but at a faster pace. The 3-day version adds: unhurried palace visits (2+ hours each), forest trail walks, a dedicated food walk morning, more time at Cabo da Roca and Cascais, and better restaurant experiences. If you have the time, 3 days is worth it.",
    },
  ],
};
