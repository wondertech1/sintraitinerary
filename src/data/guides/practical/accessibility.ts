export interface PalaceAccessibility {
  name: string;
  wheelchairAccess: "good" | "partial" | "poor" | "none";
  mobilityNotes: string;
  keyBarriers: string[];
  bestAlternative: string;
}

export const palaceAccessibility: PalaceAccessibility[] = [
  {
    name: "National Palace (Town Center)",
    wheelchairAccess: "partial",
    mobilityNotes:
      "The ground floor is partially accessible with ramps. Upper floors require stairs. The surrounding town center is flat by Sintra standards. This is the most accessible of the five main palaces.",
    keyBarriers: [
      "Upper floors: stairs only, no elevator",
      "Some doorways are narrow (16th-century building)",
      "Cobblestone streets around the palace",
    ],
    bestAlternative: "If stairs are a problem, the ground floor rooms (kitchen, Swan Room entrance) are still worth visiting.",
  },
  {
    name: "Pena Palace",
    wheelchairAccess: "poor",
    mobilityNotes:
      "The palace is at the top of a steep hill. A shuttle bus runs from the park entrance to the palace gate, but the palace itself has extensive stairs, narrow passages, and uneven surfaces. The terraces involve multiple staircases.",
    keyBarriers: [
      "Steep hill from bus stop to entrance (shuttle available)",
      "Palace interior: narrow spiral stairs, no elevator",
      "Terraces and ramparts: many steps and uneven stone",
      "Grounds: unpaved forest paths, some steep",
    ],
    bestAlternative: "The shuttle bus gets you to the gate. The external courtyard and main terrace viewpoint are reachable with difficulty. The interior is not wheelchair accessible.",
  },
  {
    name: "Quinta da Regaleira",
    wheelchairAccess: "none",
    mobilityNotes:
      "Regaleira is the least accessible palace in Sintra. The entire experience is based on exploring underground tunnels, steep garden paths, and the spiral Initiation Well. The garden has constant elevation changes with narrow stone paths.",
    keyBarriers: [
      "Initiation Well: 27m spiral descent on wet stone steps — the main attraction is inaccessible",
      "Tunnels: dark, narrow, low ceilings, uneven floor",
      "Gardens: steep paths, constant steps, no paved routes",
      "No accessible restrooms on site",
    ],
    bestAlternative: "Straightforwardly, Regaleira doesn't work for wheelchair users. The palace exterior and entrance courtyard are visible but the gardens and well are the entire point of visiting.",
  },
  {
    name: "Moorish Castle",
    wheelchairAccess: "none",
    mobilityNotes:
      "A hilltop ruin with narrow stone walls to walk along. The entire experience is climbing stairs and walking on uneven battlements. Not suitable for wheelchair users or visitors with significant mobility limitations.",
    keyBarriers: [
      "Steep uphill approach from bus stop",
      "Castle walls: narrow stone walkways with steps",
      "Uneven ground throughout, no paved paths",
      "The views (main reason to visit) require climbing wall stairs",
    ],
    bestAlternative: "The entrance area has some views but misses the main experience. Consider viewing the castle from Pena Palace terraces instead.",
  },
  {
    name: "Monserrate Palace",
    wheelchairAccess: "partial",
    mobilityNotes:
      "The best option after National Palace. The palace interior ground floor is accessible via a ramp. The formal lawn in front of the palace is flat and wheelchair-friendly. The deeper garden paths are steep and unpaved.",
    keyBarriers: [
      "Palace upper floor: stairs only",
      "Gardens: unpaved paths, some very steep sections",
      "Fern valley: steep descent, not accessible",
      "Parking is close to the entrance (helpful)",
    ],
    bestAlternative: "The palace ground floor + front lawn provide a good experience. The Mexican Garden area near the palace is relatively flat. Skip the deeper garden paths.",
  },
];

export interface TransportAccessibility {
  mode: string;
  accessNotes: string;
}

export const transportAccessibility: TransportAccessibility[] = [
  {
    mode: "Train (Lisbon → Sintra)",
    accessNotes:
      "Modern trains with wheelchair spaces and level platform boarding at Rossio/Oriente. Sintra station has a ramp to street level. The most accessible way to reach Sintra.",
  },
  {
    mode: "Bus 434 (Sintra → Pena/Moorish)",
    accessNotes:
      "Standard buses — no low-floor guarantee. The driver may assist with boarding. The bus stops at the palace gates, but the walk from bus stop to palaces involves hills and stairs.",
  },
  {
    mode: "Taxi / Uber",
    accessNotes:
      "The most flexible option. Drivers can drop you at palace entrances (closer than bus stops). Request a larger vehicle if needed. Wheelchair-accessible vehicles are rare — book in advance through Lisbon-based accessible transport services.",
  },
  {
    mode: "Tuk-tuks",
    accessNotes:
      "Not wheelchair accessible. Require climbing into a small vehicle. Only suitable for ambulatory visitors with minor mobility limitations.",
  },
];

export const accessibilityFaqs = [
  {
    question: "Is Sintra wheelchair accessible?",
    answer:
      "Partially. The town center is relatively flat, and some ground-floor palace rooms are accessible. But Sintra was built on steep hills with cobblestone streets, and the main palaces have extensive stairs. Wheelchair users can visit the National Palace (partial) and Monserrate (partial), but Regaleira, the Moorish Castle, and most of Pena Palace are not accessible.",
  },
  {
    question: "Which Sintra palace is most accessible?",
    answer:
      "The National Palace in the town center. It's at street level (no hill to climb), has some ramped access on the ground floor, and the surrounding area is relatively flat. Monserrate is second — the palace ground floor has a ramp and the front lawn is flat.",
  },
  {
    question: "Can wheelchair users visit Pena Palace?",
    answer:
      "With significant limitations. A shuttle bus runs from the park entrance to the palace gate, which helps with the hill. The main courtyard is partially accessible. But the terraces, ramparts, and interior all involve stairs with no elevator. You can see the exterior and some courtyard views but not the full experience.",
  },
  {
    question: "Are Sintra's cobblestone streets difficult for mobility devices?",
    answer:
      "Yes. Most streets in the old town are traditional Portuguese cobblestone (calçada) — uneven, slippery when wet, and challenging for wheelchairs, walkers, and canes. The main road from the station to the town center is paved and easier. Consider using a taxi to palace entrances rather than walking.",
  },
  {
    question: "Are there accessible restrooms in Sintra?",
    answer:
      "There are accessible restrooms at the Sintra train station and at some palace visitor centers (National Palace, Pena Palace main entrance). Availability varies — check with palace staff on arrival. The town center has limited public restrooms.",
  },
  {
    question: "Should mobility-limited visitors skip Sintra?",
    answer:
      "No — but manage expectations. The National Palace interior, Monserrate palace + lawn, and the old town center are worthwhile and partially accessible. The views from the lower town are still beautiful. You'll miss the hilltop experiences (Pena terraces, Moorish Castle walls, Regaleira tunnels) but Sintra is still worth visiting for what is accessible.",
  },
];
