export interface PhotoSpot {
  rank: number;
  name: string;
  location: string;
  bestTime: string;
  crowdLevel: 1 | 2 | 3 | 4 | 5;
  description: string;
  tip: string;
  needsTicket: boolean;
  ticketNote?: string;
}

export interface GearTip {
  category: "essential" | "recommended" | "optional";
  item: string;
  why: string;
}

export interface LightingCondition {
  condition: string;
  when: string;
  bestFor: string;
  rating: "exceptional" | "good" | "average";
}

export const photoSpots: PhotoSpot[] = [
  {
    rank: 1,
    name: "Initiation Well (Regaleira)",
    location: "Quinta da Regaleira — deep in the gardens",
    bestTime: "10:00-10:30am (opening, minimal crowds)",
    crowdLevel: 4,
    description:
      "The most photographed spot in Sintra. A 27-meter spiral staircase descending into the earth. Shoot from the top looking down for the classic spiral composition, or from the bottom looking up for the dramatic 'light at the end of the tunnel' shot.",
    tip: "Be at the well at 10am sharp when Regaleira opens. By 11am there's a constant stream of people. A wide-angle lens (16-24mm) is essential to capture the full spiral. The well is dark — you'll need ISO 1600+ or a steady hand. We spent three visits trying to get the spiral shot without anyone else in frame — arriving at opening on a Tuesday in November finally did it.",
    needsTicket: true,
    ticketNote: "Regaleira ticket (€20) required",
  },
  {
    rank: 2,
    name: "Pena Palace Exterior Terraces",
    location: "Pena Palace — Queen's Terrace and Arab Terrace",
    bestTime: "Late afternoon (3-5pm, golden light on yellow/red walls)",
    crowdLevel: 5,
    description:
      "The colorful Romanticist palace against blue sky or dramatic clouds. The terraces offer multiple angles of the iconic red-and-yellow turrets. The arch framing shots from the Arab Terrace are classic.",
    tip: "Morning light hits the front facade. Afternoon golden hour lights up the terraces. Overcast days mute the colors — you want some sun for this one. Grounds-only ticket gives you terrace access.",
    needsTicket: true,
    ticketNote: "Grounds ticket (€12) sufficient — skip the interior",
  },
  {
    rank: 3,
    name: "Moorish Castle Walls",
    location: "Castle of the Moors — Royal Tower summit",
    bestTime: "Morning (9:30-11am) for mist, or golden hour for warm light",
    crowdLevel: 2,
    description:
      "360-degree panoramic views from 1,000-year-old fortress walls. Shoot Pena Palace from above, the Sintra plains stretching to the sea, or the atmospheric walls snaking along the ridge. The best landscape photography in Sintra.",
    tip: "The Royal Tower summit is the highest point. Foggy mornings create extraordinary layered compositions with Pena Palace emerging from mist. Bring a telephoto (70-200mm) for Pena Palace compression shots.",
    needsTicket: true,
    ticketNote: "Moorish Castle ticket (€12)",
  },
  {
    rank: 4,
    name: "Regaleira Palace + Chapel",
    location: "Quinta da Regaleira — main terrace area",
    bestTime: "Morning for front-lit facade, or late afternoon for dramatic shadows",
    crowdLevel: 3,
    description:
      "The Gothic-Manueline palace with its ornate chapel is photogenic from the garden approach. The vertical composition with the chapel spire and palace tower is iconic. The garden paths offer multiple framing angles.",
    tip: "The approach from the lower gardens gives the best perspective — the palace towers over you. Include some garden greenery for depth. The chapel detail shots require a telephoto.",
    needsTicket: true,
    ticketNote: "Regaleira ticket (€20) required",
  },
  {
    rank: 5,
    name: "Monserrate Palace Facade",
    location: "Monserrate Palace — approach from the gardens",
    bestTime: "Any time (almost no crowds ever)",
    crowdLevel: 1,
    description:
      "The Indian-Gothic facade with its three domes is best shot from the approach path. The interior stucco work in the music room and central hall is the most photogenic interior in Sintra. Almost no one here — you can take your time.",
    tip: "Monserrate is the photography sleeper hit. The interior is dark — bring a fast lens or tripod. The botanical gardens have incredible textures for macro photography. Best on overcast days for even interior lighting. We had the entire music room to ourselves for twenty minutes on a December afternoon — utterly unreal light pouring through the arches.",
    needsTicket: true,
    ticketNote: "Monserrate ticket (€12)",
  },
  {
    rank: 6,
    name: "Regaleira Underground Tunnels",
    location: "Quinta da Regaleira — tunnel system connecting wells and grottoes",
    bestTime: "Early morning (less foot traffic in tunnels)",
    crowdLevel: 3,
    description:
      "Dark, atmospheric tunnels with light shafts. The tunnel exits framing garden views create natural 'light at the end' compositions. The grotto with the waterfall stepping stones is surreal.",
    tip: "Tripod technically not allowed but a monopod or bracing against walls works. ISO 3200+ needed. The waterfall grotto is slippery — protect your gear. Phone cameras struggle here; a real camera makes a huge difference.",
    needsTicket: true,
    ticketNote: "Regaleira ticket (€20) required",
  },
  {
    rank: 7,
    name: "Sintra Town & National Palace",
    location: "Sintra historic center — various viewpoints",
    bestTime: "Early morning or late afternoon for soft light",
    crowdLevel: 2,
    description:
      "The twin conical chimneys of the National Palace are Sintra's most recognizable silhouette. Shoot from the road approaching town for the chimneys against the hillside palaces. The cobbled streets and colorful buildings make great street photography.",
    tip: "The best viewpoint for the twin chimneys is from the road above town (near the start of the Moorish Castle walk). Include the surrounding hills for context. Street photography is best before 10am when tourist crowds are thin.",
    needsTicket: false,
  },
  {
    rank: 8,
    name: "Cabo da Roca Cliffs",
    location: "Cabo da Roca — clifftop and northern trails",
    bestTime: "Sunset (the defining shot) or stormy days for drama",
    crowdLevel: 3,
    description:
      "The 140-meter cliffs at Europe's westernmost point. Sunset shots over the Atlantic are the classic image. The northern cliff trail offers increasingly dramatic angles with fewer people. Stormy days produce the most powerful images.",
    tip: "Sunset is the money shot but arrive 45 minutes early. Bring a tripod for long exposures of waves crashing against cliffs. Wind is extreme — weight your tripod. The lighthouse makes a strong foreground element.",
    needsTicket: false,
  },
];

export const gearTips: GearTip[] = [
  {
    category: "essential",
    item: "Wide-angle lens (16-35mm or equivalent)",
    why: "The Initiation Well, palace interiors, and tunnel shots all need wide angles. This is the most-used lens in Sintra.",
  },
  {
    category: "essential",
    item: "Comfortable walking shoes",
    why: "You'll walk 10-15km over cobblestones, forest trails, and steep stairs. Slippery in rain. Photography takes twice as long as normal sightseeing.",
  },
  {
    category: "essential",
    item: "Rain cover for camera",
    why: "Sintra's microclimate means sudden fog and drizzle even on 'clear' days. A simple plastic bag works in a pinch.",
  },
  {
    category: "recommended",
    item: "Telephoto lens (70-200mm)",
    why: "Compression shots of Pena Palace from the Moorish Castle. Detail shots of architectural ornaments. Not essential but adds variety.",
  },
  {
    category: "recommended",
    item: "Tripod or monopod",
    why: "The tunnels, well, and palace interiors are dark. Some palaces restrict tripods inside buildings, but monopods are usually fine.",
  },
  {
    category: "recommended",
    item: "Lens cloth / microfiber",
    why: "Fog and mist coat your lens constantly. You'll clean it every 10 minutes in winter. Bring two.",
  },
  {
    category: "optional",
    item: "Polarizing filter",
    why: "Cuts reflections on wet surfaces and saturates the palace colors. Most useful on partly cloudy days.",
  },
  {
    category: "optional",
    item: "ND filter for Cabo da Roca",
    why: "Long exposure ocean shots at the cliffs. A 6-stop ND gives silky water against the dramatic rocks.",
  },
];

export const lightingConditions: LightingCondition[] = [
  {
    condition: "Foggy morning",
    when: "October–March, before 10am",
    bestFor:
      "Moorish Castle walls, Pena Palace silhouette, atmospheric forest paths. The defining Sintra photography condition.",
    rating: "exceptional",
  },
  {
    condition: "Golden hour",
    when: "1-2 hours before sunset, year-round",
    bestFor:
      "Pena Palace exterior (warm light on yellow walls), Cabo da Roca cliffs, town center street photography.",
    rating: "exceptional",
  },
  {
    condition: "Overcast / soft light",
    when: "Any time, more common Oct–Apr",
    bestFor:
      "Palace interiors (even lighting through windows), garden details, Monserrate stucco work. Reduces harsh shadows.",
    rating: "good",
  },
  {
    condition: "Clear blue sky",
    when: "May–September, most days",
    bestFor:
      "Pena Palace colors pop against blue sky. High contrast — challenging for interiors. Midday light is harsh.",
    rating: "average",
  },
  {
    condition: "Post-rain",
    when: "After showers, any season",
    bestFor:
      "Saturated colors, reflections on wet cobblestones, dramatic clouds. The 30 minutes after rain stops are cinematic. We got caught in a downpour near the Moorish Castle and almost packed up — then the sun broke through and we shot some of our best work in the next half hour.",
    rating: "exceptional",
  },
];

export const photographyFaqs = [
  {
    question: "What is the most photographed spot in Sintra?",
    answer:
      "The Initiation Well at Quinta da Regaleira. The spiral staircase descending 27 meters into the earth is the single most iconic Sintra image. Arrive at 9:30am opening to get it without crowds.",
  },
  {
    question: "Are tripods allowed in Sintra palaces?",
    answer:
      "Most palaces restrict tripods inside buildings but allow them in gardens and outdoor areas. Monopods are generally fine everywhere. The Moorish Castle and Regaleira gardens are fully tripod-friendly.",
  },
  {
    question: "What's the best time of day for photography in Sintra?",
    answer:
      "Early morning (9:30-10:30am) for minimal crowds and potential fog. Golden hour (1-2 hours before sunset) for warm light on palace facades. Foggy winter mornings are the most atmospheric but unpredictable.",
  },
  {
    question: "Is a phone camera good enough for Sintra?",
    answer:
      "For outdoor shots in good light: yes, modern phones are excellent. For the Initiation Well, tunnels, and palace interiors: a dedicated camera with a wide-angle lens and good low-light performance makes a significant difference.",
  },
  {
    question: "Which palace has the best interior for photography?",
    answer:
      "Monserrate Palace, by far. The Alhambra-quality stucco work in the music room and central hall, combined with virtually no crowds, makes it a photographer's dream. Bring a fast lens — it's dark inside.",
  },
  {
    question: "How do I photograph the Initiation Well without people?",
    answer:
      "Be at Regaleira's entrance at 9:25am, buy tickets in advance online. Walk directly to the well (it's a 5-minute walk from the entrance). You'll have about 10-15 minutes before others arrive. Weekday mornings in low season give you even more time.",
  },
];
