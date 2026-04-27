export interface WellLevel {
  level: number;
  depth: string;
  description: string;
}

export interface TunnelRoute {
  name: string;
  from: string;
  to: string;
  difficulty: "easy" | "moderate" | "tricky";
  description: string;
}

export interface VisitStrategy {
  time: string;
  label: string;
  crowdLevel: 1 | 2 | 3 | 4 | 5;
  description: string;
}

export const wellLevels: WellLevel[] = [
  {
    level: 1,
    depth: "0 m (top)",
    description:
      "The entrance at ground level. A stone platform surrounded by columns — the starting point of the descent. Most visitors pause here for their first photo down into the spiral.",
  },
  {
    level: 2,
    depth: "3 m",
    description:
      "The spiral staircase begins. The stone steps are carved directly into the rock, with low walls on each side. The light from above still illuminates everything clearly.",
  },
  {
    level: 3,
    depth: "6 m",
    description:
      "The first landing with a small alcove. The walls close in slightly. In Masonic tradition, each level represents a stage of initiation — a symbolic descent from light into darkness.",
  },
  {
    level: 4,
    depth: "9 m",
    description:
      "Deeper now. The ambient light fades. You can see the moss growing on the wet stone walls — the well's own ecosystem. The acoustic quality changes: sounds from above become muffled.",
  },
  {
    level: 5,
    depth: "12 m",
    description:
      "The midpoint. Looking up, the opening frames a perfect circle of sky. Looking down, the spiral continues into shadow. This is the pivot point of the symbolic journey.",
  },
  {
    level: 6,
    depth: "15 m",
    description:
      "Below the midpoint. The temperature drops noticeably. The stone is damp to the touch. If you visit early morning, wisps of fog drift through the well.",
  },
  {
    level: 7,
    depth: "18 m",
    description:
      "The walls are now thick with moss and ferns. The natural world is reclaiming the stone. The Masonic symbolism intensifies — this is the journey into the earth, into knowledge.",
  },
  {
    level: 8,
    depth: "21 m",
    description:
      "Near the bottom. The light from above is a distant circle. Your footsteps echo differently here — a hollow, reverberating quality that adds to the atmosphere.",
  },
  {
    level: 9,
    depth: "27 m (bottom)",
    description:
      "The bottom of the well. A compass rose pattern is inlaid in the stone floor — a Templar cross overlaid on an eight-pointed star. This is where the tunnel entrances are. Don't just walk back up the stairs — take the tunnels.",
  },
];

export const tunnelRoutes: TunnelRoute[] = [
  {
    name: "Well to Lake Grotto",
    from: "Bottom of the Initiation Well",
    to: "Waterfall Lake (Lago da Cascata)",
    difficulty: "easy",
    description:
      "The most popular tunnel. A dark, narrow passage (bring your phone flashlight) that emerges at the edge of a small lake with stepping stones. You walk across the stones to reach the gardens. This is the 'wow' exit that most visitors don't know about. We watched a couple walk back up the stairs without taking the tunnel — we yelled after them and they thanked us later. Don't make their almost-mistake.",
  },
  {
    name: "Well to Unfinished Well",
    from: "Bottom of the Initiation Well",
    to: "The Unfinished Well (Poço Imperfeito)",
    difficulty: "moderate",
    description:
      "A branching tunnel that leads to the smaller, rougher 'unfinished' well — only 5 meters deep. Most visitors never find this one. The rougher stone suggests it was abandoned mid-construction or left deliberately incomplete.",
  },
  {
    name: "Grotto Circuit",
    from: "Waterfall Lake",
    to: "Upper gardens near the chapel",
    difficulty: "easy",
    description:
      "After emerging at the lake, follow the path through the grotto behind the waterfall. The route loops up through the gardens past hidden fountains and emerges near the Gothic chapel. A complete circuit that avoids backtracking.",
  },
  {
    name: "Underground Aquarium Passage",
    from: "Near the Unfinished Well",
    to: "Lower gardens (east side)",
    difficulty: "tricky",
    description:
      "The least-visited tunnel. Narrow, uneven, and pitch dark. It passes beneath the gardens and exits near the east boundary. Some visitors miss the entrance entirely. The reward is emerging in a part of the gardens few people explore.",
  },
];

export const visitStrategies: VisitStrategy[] = [
  {
    time: "10:00–10:15",
    label: "Early Bird (Best)",
    crowdLevel: 1,
    description:
      "Arrive when the gates open at 10am. You'll have the well to yourself for 20-30 minutes. The morning fog, if present, drifts through the well creating ethereal photos. This is the time professional photographers come. We arrived at 10:05am on a January Wednesday and had the entire well completely to ourselves for a full 25 minutes — it felt like discovering a hidden world.",
  },
  {
    time: "10:30–12:00",
    label: "Midday Rush (Worst)",
    crowdLevel: 5,
    description:
      "Tour groups arrive from Lisbon. The well has a constant stream of visitors going up and down. You'll wait to take photos without people. The tunnels are congested. Avoid this window if possible.",
  },
  {
    time: "14:00–14:30",
    label: "Sweet Spot (Recommended)",
    crowdLevel: 2,
    description:
      "Tour groups have moved to Pena Palace. The post-lunch lull creates a quiet window. Afternoon light filtering through the trees is beautiful. Most itinerary visitors arrive for this reason.",
  },
  {
    time: "16:00–17:00",
    label: "Golden Hour",
    crowdLevel: 2,
    description:
      "Late afternoon golden light penetrates deeper into the well. The gardens are at their most atmospheric with long shadows. The trade-off: less time before the 18:00 closing (check seasonal hours).",
  },
];

export const photographyTips = [
  "Shoot from the bottom looking up — the spiral staircase framing the sky circle is the iconic shot.",
  "Use a wide-angle lens (or phone ultra-wide) to capture the full spiral from the bottom level.",
  "Visit during morning fog for ethereal, misty photos that are impossible in clear weather.",
  "The stepping stones at the lake exit are extremely photogenic — have someone walk across while you shoot from the grotto.",
  "For the tunnel exit: stand inside the dark tunnel looking out toward the light for a dramatic framing effect.",
  "Avoid flash in the tunnels — it kills the atmosphere. Use long exposure or phone night mode for natural-feeling shots.",
  "The compass rose floor pattern at the bottom is worth a direct overhead shot — stand on the edge and shoot straight down.",
  "Post-rain visits create reflections on the stone steps that add beautiful depth to photos.",
];

export const commonMistakes = [
  {
    mistake: "Walking back up the stairs after reaching the bottom",
    fix: "Take the tunnel to the lake instead. It's the best part and most visitors miss it because they just walk back up.",
  },
  {
    mistake: "Visiting between 10:30am and noon",
    fix: "The tour group window. Come at opening (09:00) or after 14:00 for a dramatically better experience.",
  },
  {
    mistake: "Rushing through in 20 minutes",
    fix: "The well itself takes 10 minutes. But the full experience — well, tunnels, lake, grotto circuit, gardens — needs 45-60 minutes minimum.",
  },
  {
    mistake: "Not bringing a phone flashlight",
    fix: "The tunnels are genuinely dark. Your phone flashlight is essential for the passages connecting the well to the lake.",
  },
  {
    mistake: "Wearing unsuitable footwear",
    fix: "The spiral staircase has no inner handrail and becomes dangerously slippery when wet. Wear shoes with good grip — sandals and smooth-soled shoes are a real hazard, especially after rain. The stepping stones at the grotto pool are slippery year-round regardless of weather.",
  },
  {
    mistake: "Skipping the Unfinished Well",
    fix: "The second, smaller well is a 2-minute detour from the tunnel system. It's rougher and emptier — and that's the appeal.",
  },
];

export const wellFaqs = [
  {
    question: "Is the Initiation Well at Quinta da Regaleira safe?",
    answer:
      "In dry conditions, yes — the staircase has low walls on both sides and the tunnels have flat floors. However, the spiral staircase has no inner handrail and becomes dangerously slippery when wet. Injuries happen here regularly — wear shoes with good grip and take extra care in rain or after recent rainfall. The stepping stones across the underground grotto pool are slippery year-round. It's not suitable for wheelchairs or people with severe claustrophobia (the tunnels are narrow).",
  },
  {
    question: "Can I visit the Initiation Well without visiting the rest of Regaleira?",
    answer:
      "No — there's no separate ticket for the well. Your €20 Regaleira ticket covers the palace, gardens, well, and tunnels. But the well is the highlight, so plan your visit around it.",
  },
  {
    question: "How deep is the Initiation Well?",
    answer:
      "27 meters (about 88 feet) deep, with 9 levels connected by a spiral staircase. The descent takes about 5 minutes at a comfortable pace. The well was designed in the 19th century for ceremonial purposes, not water.",
  },
  {
    question: "What is the Masonic symbolism of the Initiation Well?",
    answer:
      "The 9 levels mirror the 9 circles of Dante's Inferno and the 9 degrees of Masonic initiation. The descent represents a journey from light (worldly knowledge) into darkness (hidden knowledge), ending at the Templar cross compass rose. António Augusto Carvalho Monteiro, who commissioned Regaleira, was a known Freemason.",
  },
  {
    question: "Is the Initiation Well crowded?",
    answer:
      "During peak hours (10:30am–12:00pm), yes — tour groups create queues on the staircase. Right at opening (10am) and mid-afternoon (14:00–15:00) are significantly quieter. Winter visits can be virtually empty. We timed our visits across different seasons and the difference between 10am and 11:30am is night and day.",
  },
  {
    question: "Can I visit the tunnels from the Initiation Well?",
    answer:
      "Yes — and you should. At the bottom of the well, tunnel entrances lead to the lake grotto (the main route) and to the Unfinished Well (a branching path). The tunnel to the lake is the highlight of the entire Regaleira visit.",
  },
];
