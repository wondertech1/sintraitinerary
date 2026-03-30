export interface TimelineStep {
  time: string;
  title: string;
  description: string;
  tip?: string;
  transport?: string;
}

export interface CommonMistake {
  mistake: string;
  reality: string;
  fix: string;
}

export interface RouteOption {
  name: string;
  subtitle: string;
  bestFor: string;
  palaces: string[];
  timeline: TimelineStep[];
  totalCost: string;
}

export const beforeYouGo = [
  "Buy palace tickets online the night before (saves 20-30 min in queues)",
  "Check bus 434 timetable at scotturb.com — first bus ~9:15am from Sintra station",
  "Wear comfortable walking shoes (cobblestones + steep forest paths)",
  "Pack water and snacks — options inside palaces are overpriced and limited",
  "Bring layers — Sintra's hilltop is 5-7°C cooler than Lisbon, even in summer",
  "Charge your phone — you'll use it for maps, tickets, and photos all day",
];

export const routeOptions: RouteOption[] = [
  {
    name: "The Greatest Hits",
    subtitle: "Most popular — see the top 3 palaces",
    bestFor: "First-time visitors who want the classic Sintra experience.",
    palaces: ["Pena Palace (grounds)", "Moorish Castle", "Quinta da Regaleira"],
    timeline: [
      {
        time: "7:30am",
        title: "Train from Lisbon Rossio",
        description:
          "Take the Sintra line from Rossio station (or Oriente). Trains every 20-30 min. Buy a return ticket with your Viva Viagem card. We took the 7:50am from Rossio and snagged a window seat for the whole scenic stretch through the hills — worth timing for.",
        transport: "Train — €2.35 each way",
      },
      {
        time: "8:15am",
        title: "Arrive Sintra station",
        description:
          "Walk out of the station. The bus 434 stop is directly in front. Buy a €13.50 hop-on/hop-off ticket from the driver or machine.",
        transport: "Bus 434 — €13.50 day pass",
      },
      {
        time: "8:30am",
        title: "Bus 434 to Pena Palace",
        description:
          "10-minute ride up the winding mountain road. Get off at the Pena Palace stop. Walk 10 minutes uphill to the entrance.",
        tip: "The bus gets crowded after 9:30am. Being on the first bus is a huge advantage. We once waited 40 minutes for bus 434 at 10am in July — never again.",
      },
      {
        time: "9:00am",
        title: "Pena Palace — grounds and terraces",
        description:
          "Explore the colorful terraces, Queen's Terrace viewpoint, and park trails. The exterior is the star — skip the interior queue.",
        tip: "Grounds-only ticket (€12) is all you need. The interior adds €8 and a 45-min queue for cramped rooms.",
      },
      {
        time: "11:00am",
        title: "Walk to Moorish Castle",
        description:
          "15-minute downhill walk through the forest from Pena to the Moorish Castle entrance. A beautiful, shaded trail.",
        transport: "Walk — 15 min downhill (free)",
      },
      {
        time: "11:15am",
        title: "Moorish Castle walls",
        description:
          "Walk the 1,000-year-old fortress walls for the best panoramic views in Sintra. The Royal Tower summit is the highlight.",
        tip: "This is the best-value ticket in Sintra (€12). Don't rush — the views from every section of wall are different.",
      },
      {
        time: "12:15pm",
        title: "Bus 434 back to town center",
        description:
          "Catch the bus from the Moorish Castle stop back to Sintra town center. Or walk downhill (25-30 min).",
      },
      {
        time: "12:45pm",
        title: "Lunch in Sintra town",
        description:
          "Eat at Tascantiga (best food, reserve ahead), Romaria de Baco (solid traditional), or grab pastries from Piriquita to-go.",
        tip: "The prato do dia (daily special) at traditional restaurants is €10-12 and generous. Skip Café Paris — overpriced for the quality.",
      },
      {
        time: "2:00pm",
        title: "Walk to Quinta da Regaleira",
        description:
          "10-minute walk from town center. Regaleira is the afternoon highlight — underground tunnels, the Initiation Well, and lush gardens.",
        tip: "Allow 2 full hours here. Kids and adults alike get absorbed in the tunnel network.",
      },
      {
        time: "4:00pm",
        title: "Pastry stop & town stroll",
        description:
          "Walk back to town. Grab travesseiros from Piriquita if you haven't already. Browse the shops on Rua das Padarias.",
      },
      {
        time: "4:30pm",
        title: "Train back to Lisbon",
        description:
          "Walk to the station (15 min) and catch the return train. You'll be back in Lisbon by 5:15pm.",
        transport: "Train — 40 min to Rossio/Oriente",
      },
    ],
    totalCost: "€45-55 per person (transport + tickets + lunch)",
  },
  {
    name: "The Crowd Avoider",
    subtitle: "Reverse order — beat the tour groups",
    bestFor: "Summer visitors or anyone who hates crowds.",
    palaces: ["Quinta da Regaleira", "Moorish Castle", "Pena Palace (grounds)"],
    timeline: [
      {
        time: "7:30am",
        title: "Train from Lisbon Rossio",
        description: "Same train as above. Aim for the 7:30am or earlier departure.",
        transport: "Train — €2.35 each way",
      },
      {
        time: "8:15am",
        title: "Walk to Quinta da Regaleira",
        description:
          "Skip bus 434 entirely. Walk from the station to Regaleira (20 min). You'll arrive before the crowds.",
        transport: "Walk — 20 min (free)",
      },
      {
        time: "10:00am",
        title: "Quinta da Regaleira",
        description:
          "Be at the entrance when it opens at 10am. Go directly to the Initiation Well — you'll have it nearly to yourself.",
        tip: "The first 30-45 minutes here are golden. By 10:30am the tour groups arrive. Explore tunnels first, palace building second.",
      },
      {
        time: "11:30am",
        title: "Walk up to Moorish Castle",
        description:
          "Uphill walk (30-40 min) via the road or forest paths. A steeper but more rewarding approach than bus 434.",
        transport: "Walk — 30-40 min uphill",
      },
      {
        time: "12:00pm",
        title: "Moorish Castle walls",
        description:
          "By now most visitors are at Pena. The castle will be emptier than the morning peak.",
      },
      {
        time: "1:00pm",
        title: "Walk to Pena Palace",
        description:
          "15-minute uphill walk from Moorish Castle through the forest.",
        transport: "Walk — 15 min",
      },
      {
        time: "1:15pm",
        title: "Pena Palace grounds",
        description:
          "Afternoon crowds thin as tour groups leave. The light is warmer too. Explore the terraces and park.",
        tip: "Afternoon light on the yellow and red walls is actually better for photos than morning.",
      },
      {
        time: "3:00pm",
        title: "Bus 434 back to town + late lunch",
        description:
          "Take bus 434 downhill. Eat a late lunch in town — restaurants are emptier after 2pm.",
      },
      {
        time: "4:30pm",
        title: "Train back to Lisbon",
        description: "Return train to Lisbon. Back by 5:15pm.",
        transport: "Train — 40 min",
      },
    ],
    totalCost: "€40-50 per person (less bus cost if walking throughout)",
  },
];

export const commonMistakes: CommonMistake[] = [
  {
    mistake: "Trying to visit all 5 palaces in one day",
    reality:
      "Physically possible but miserable. You'll rush through everything and spend more time in queues than actually seeing things.",
    fix: "Pick 2-3 palaces maximum. Our Greatest Hits route covers the best three.",
  },
  {
    mistake: "Not buying tickets online in advance",
    reality:
      "The ticket office queue at Pena Palace can be 20-30 minutes in summer. You'll also miss the earliest entry slots.",
    fix: "Buy all tickets at parquesdesintra.pt and regaleira.pt the night before.",
  },
  {
    mistake: "Taking a late morning train (10am+)",
    reality:
      "You lose 2-3 prime hours. The palaces get crowded fast and you'll feel rushed for the rest of the day.",
    fix: "Take the 7:30am or 8:00am train from Rossio. Being early is the single best strategy.",
  },
  {
    mistake: "Starting at Pena Palace with bus 434",
    reality:
      "Everyone does this. The first few buses are packed and Pena is crowded by 10am.",
    fix: "Start at Regaleira (opens 10am, walk from station) and do Pena in the afternoon. See our Crowd Avoider route.",
  },
  {
    mistake: "Buying Pena Palace full interior ticket",
    reality:
      "The interior is cramped, poorly lit rooms with a 30-60 min queue. Most visitors say it's not worth the extra €8.",
    fix: "Buy the €12 grounds-only ticket. The terraces and exterior are the real attraction.",
  },
  {
    mistake: "No layers or rain gear",
    reality:
      "Sintra's hilltop is 5-7°C cooler than Lisbon with unpredictable fog and drizzle. Many visitors freeze in their Lisbon summer clothes. We left Lisbon in 32°C sunshine and hit actual fog and 18°C at the Moorish Castle two hours later.",
    fix: "Pack a light jacket and a compact rain layer, even in summer.",
  },
];

export const dayTripFaqs = [
  {
    question: "Is Sintra doable as a day trip from Lisbon?",
    answer:
      "Absolutely — it's the most popular day trip from Lisbon. The train takes 40 minutes from Rossio station. Leave by 7:30-8:00am, return by 5pm. You'll comfortably see 2-3 palaces, eat lunch, and explore the town.",
  },
  {
    question: "What's the best route for a Sintra day trip?",
    answer:
      "Our Greatest Hits route: Train → Bus 434 → Pena Palace (grounds) → walk to Moorish Castle → bus to town → lunch → Regaleira → train home. Total: ~€45-55 per person including everything.",
  },
  {
    question: "Should I book a Sintra tour or go independently?",
    answer:
      "Go independently. Organized tours cost €60-100+ per person, follow a fixed schedule, give you less time at each palace, and skip Regaleira (not included in most tours). The train + bus 434 is easy and much cheaper.",
  },
  {
    question: "Which train station in Lisbon goes to Sintra?",
    answer:
      "Rossio station (central Lisbon, near Praça do Comércio) or Oriente station (near Parque das Nações). Both take 40 minutes. Rossio is more convenient for most tourists. Trains run every 20-30 minutes.",
  },
  {
    question: "How much does a Sintra day trip cost in total?",
    answer:
      "Budget version: €30-40 (train €4.50 + 2 palaces ~€20 + packed lunch). Standard: €45-55 (train + bus 434 + 3 palaces + lunch). Comfortable: €70-90 (add a taxi, more palaces, nicer restaurant).",
  },
  {
    question: "Can I combine Sintra with Cascais in one day?",
    answer:
      "Technically yes, but both feel rushed. If you must: visit 1-2 Sintra palaces in the morning, bus 403 to Cascais via Cabo da Roca in the afternoon, train from Cascais back to Lisbon. You'll sacrifice depth for breadth.",
  },
];
