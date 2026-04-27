export interface WalkingRoute {
  name: string;
  distance: string;
  duration: string;
  difficulty: "easy" | "moderate" | "challenging";
  elevation: string;
  startPoint: string;
  endPoint: string;
  highlights: string[];
  description: string;
  avoidIf: string;
  terrain: string;
}

export interface TrailTip {
  category: "safety" | "gear" | "navigation" | "timing";
  tip: string;
}

export const walkingRoutes: WalkingRoute[] = [
  {
    name: "Station to Town Center",
    distance: "1.2 km",
    duration: "15-20 min",
    difficulty: "easy",
    elevation: "Slight downhill",
    startPoint: "Sintra train station",
    endPoint: "Praça da República (National Palace)",
    highlights: [
      "Scenic road past gardens and quintas",
      "First views of the National Palace chimneys",
      "Several cafés along the route",
    ],
    description:
      "The standard walk everyone does. Mostly downhill from the station to the historic center. Paved road with sidewalks. Tuk-tuk drivers at the station will try to charge you €5-10 for this — don't bother.",
    avoidIf: "You have heavy luggage (take a tuk-tuk in that case).",
    terrain: "Paved road, sidewalks",
  },
  {
    name: "Town Center to Quinta da Regaleira",
    distance: "0.8 km",
    duration: "10-12 min",
    difficulty: "easy",
    elevation: "Slight uphill",
    startPoint: "Praça da República",
    endPoint: "Regaleira entrance",
    highlights: [
      "Pass the Seteais Palace (now a luxury hotel)",
      "Quiet residential road with old quintas",
      "Gradual uphill — saves bus fare",
    ],
    description:
      "A pleasant walk along Rua Barbosa du Bocage. You'll pass the elegant Seteais Palace (peek through the gates). The road is flat-to-slightly-uphill and completely manageable. No reason to take transport for this.",
    avoidIf: "Nothing — this is always walkable.",
    terrain: "Paved road with sidewalks",
  },
  {
    name: "Regaleira to Moorish Castle (Forest Path)",
    distance: "2.5 km",
    duration: "35-45 min",
    difficulty: "moderate",
    elevation: "+200m elevation gain",
    startPoint: "Near Regaleira exit",
    endPoint: "Moorish Castle entrance",
    highlights: [
      "Forest canopy with giant ferns and moss",
      "Occasional viewpoints over the valley",
      "Complete contrast to the palace experience",
      "Connects to Pena Palace path too",
    ],
    description:
      "The 'secret' walking route that most tourists don't know about. From the road near Regaleira, a forest path winds uphill through dense woodland to the Moorish Castle. It's steep in sections but well-marked. You'll feel like you're in a different world — ancient trees, birdsong, and fog. We did this walk after a morning rain and the moss-covered stones were glowing green — arguably one of the most beautiful forest walks we've done in Europe.",
    avoidIf: "You have mobility issues or it's been raining heavily (trail gets muddy).",
    terrain: "Dirt trail, tree roots, some stone steps. Can be muddy after rain.",
  },
  {
    name: "Pena Palace to Moorish Castle",
    distance: "1.0 km",
    duration: "15-20 min",
    difficulty: "easy",
    elevation: "Mostly downhill",
    startPoint: "Pena Palace exit",
    endPoint: "Moorish Castle entrance",
    highlights: [
      "Shaded forest trail through Pena Park",
      "Views of both castles from the path",
      "All downhill — easy after Pena's stairs",
    ],
    description:
      "The most practical walk in Sintra. After visiting Pena, walk downhill through the forest to the Moorish Castle instead of taking bus 434 back and forth. Well-signposted and mostly downhill. This is how the two were meant to be visited together.",
    avoidIf: "Nothing — everyone should walk this.",
    terrain: "Well-maintained forest path, some stone steps",
  },
  {
    name: "Moorish Castle to Town (Downhill)",
    distance: "2.0 km",
    duration: "25-30 min",
    difficulty: "moderate",
    elevation: "-200m descent",
    startPoint: "Moorish Castle entrance",
    endPoint: "Sintra town center",
    highlights: [
      "Views of the town and National Palace from above",
      "Quieter than the bus 434 route",
      "Passes through local residential areas",
    ],
    description:
      "Walk downhill from the Moorish Castle to town instead of waiting for bus 434. Follow the road (not the bus route — take the pedestrian shortcuts). Knees may complain on the steep sections but it's faster than waiting for the bus in peak season.",
    avoidIf: "You have knee problems (it's steep downhill). Take bus 434 instead.",
    terrain: "Paved road with shortcuts on stone/dirt paths",
  },
  {
    name: "Vila Sassetti Trail",
    distance: "1.5 km",
    duration: "20-30 min",
    difficulty: "moderate",
    elevation: "+150m",
    startPoint: "Sintra town center (near National Palace)",
    endPoint: "Near Pena Palace / Moorish Castle road",
    highlights: [
      "Free entry through a restored estate",
      "Historic gardens and buildings",
      "Alternative uphill route avoiding bus 434 crowds",
      "Beautiful stone staircases through woodland",
    ],
    description:
      "A hidden gem — a restored historic trail through the Sassetti estate gardens connecting town to the hilltop. Stone staircases, restored bridges, and forest canopy. Free to walk. Fewer people know about this than bus 434. Opens at 10am.",
    avoidIf: "You need full accessibility — there are uneven stone stairs throughout.",
    terrain: "Restored stone staircases, garden paths, some uneven sections",
  },
  {
    name: "Cruz Alta Peak Trail",
    distance: "3.0 km (from Pena Park)",
    duration: "45-60 min round trip",
    difficulty: "challenging",
    elevation: "+100m from Pena, 528m summit",
    startPoint: "Inside Pena Park",
    endPoint: "Cruz Alta summit (highest point of Serra de Sintra)",
    highlights: [
      "Highest point of the Sintra hills (528m)",
      "360-degree views on clear days",
      "Stone cross monument at the summit",
      "Far fewer visitors than any palace",
    ],
    description:
      "The highest point of the Sintra mountain range. A marked trail from within Pena Park leads to the Cruz Alta summit. The views extend from the Atlantic to Lisbon. Most palace visitors never make it here — you'll likely be alone. Bring water and a windbreaker. We reached the summit on a clear March morning and could see all the way to the Cristo Rei statue across the Tagus — absolutely worth the detour.",
    avoidIf: "Foggy days (no views), or if you're short on time for palaces.",
    terrain: "Forest trail, rocky near the summit, exposed at the top",
  },
];

export const trailTips: TrailTip[] = [
  {
    category: "gear",
    tip: "Wear proper walking shoes with grip. Sintra's trails are cobblestones, tree roots, and occasionally mud. We did the Sassetti trail in sandals once. Once. Slipped on a mossy stone step and nearly took out two other hikers on the way down.",
  },
  {
    category: "gear",
    tip: "Bring at least 1 liter of water per person. There are no water sources on trails between palaces. Palace cafés sell overpriced bottles.",
  },
  {
    category: "gear",
    tip: "Pack a light rain layer even in summer. Sintra's forest creates its own weather — you can walk from sunshine into fog in 5 minutes.",
  },
  {
    category: "safety",
    tip: "Stay on marked trails. The forest can be disorienting and some unofficial paths lead to dead ends or private property.",
  },
  {
    category: "safety",
    tip: "The trails are generally safe but isolated. Walk with a companion if possible, especially the Cruz Alta trail.",
  },
  {
    category: "navigation",
    tip: "Download offline maps (Google Maps or Maps.me) before starting. Mobile signal is unreliable in the forested areas between palaces.",
  },
  {
    category: "navigation",
    tip: "The Vila Sassetti trail entrance is easy to miss — it's on the street behind the National Palace, look for a small sign near the park gate.",
  },
  {
    category: "timing",
    tip: "Walking between palaces takes 15-45 minutes depending on the route. Budget this into your itinerary — it's not 'wasted time,' the forest walks are part of the Sintra experience.",
  },
  {
    category: "timing",
    tip: "Start early. Walking routes are best before 10am when the trails are cool, quiet, and often misty. The afternoon heat (in summer) makes uphill walks much harder.",
  },
];

export const walkingFaqs = [
  {
    question: "Can I walk between Sintra palaces?",
    answer:
      "Yes — and you should. Pena Palace to Moorish Castle is 20-25 minutes gate-to-gate downhill through forest (including through Pena's grounds to the exit). Town to Regaleira is 10 minutes on flat road. The Vila Sassetti trail connects town to the hilltop palaces through restored gardens. Only Monserrate requires transport (4km from town).",
  },
  {
    question: "Do I need bus 434 or can I walk everywhere?",
    answer:
      "You can walk, but the uphill from town to Pena Palace is steep (2.5km, +200m elevation). Bus 434 saves your legs for palace exploration. Our recommendation: bus 434 UP, walk DOWN between palaces.",
  },
  {
    question: "How much walking is involved in a Sintra day trip?",
    answer:
      "Expect 8-15km depending on how many palaces you visit and whether you walk or bus between them. Each palace involves 1-3km of walking within its grounds. Comfortable shoes are non-negotiable.",
  },
  {
    question: "Is the Vila Sassetti trail worth it?",
    answer:
      "Yes — it's a beautiful alternative to bus 434 for going uphill. Free entry through restored estate gardens with stone staircases and woodland canopy. Opens at 10am. It's steeper than the bus route but far more scenic.",
  },
  {
    question: "Is Cruz Alta summit worth the detour?",
    answer:
      "If it's a clear day and you have time: yes. It's the highest point of the Serra de Sintra (528m) with views to the Atlantic and Lisbon. Budget 45-60 minutes round trip from Pena Park. Skip it on foggy days — there'll be no views.",
  },
  {
    question: "Are Sintra trails safe?",
    answer:
      "Yes. The main trails between palaces are well-marked and well-traveled. The forest can feel isolated but crime is virtually unheard of. The main risks are twisted ankles on uneven ground and getting mildly lost on unmarked side trails.",
  },
];
