export interface AutumnAdvantage {
  title: string;
  description: string;
}

export interface AutumnChallenge {
  challenge: string;
  solution: string;
}

export interface AutumnDay {
  title: string;
  stops: { time: string; activity: string; autumnNote: string }[];
}

export const autumnAdvantages: AutumnAdvantage[] = [
  {
    title: "Crowds drop dramatically after mid-September",
    description:
      "Summer visitors vanish when school starts. By October, Pena Palace queues drop from 60 minutes to 10-15. The Initiation Well goes from packed to peaceful. You get the summer experience with winter-level crowds.",
  },
  {
    title: "Warm, golden weather",
    description:
      "September and October are 18-26°C with reliable sunshine. The light turns warm and golden — autumn in Sintra feels like a long, gentle golden hour. Rain returns in November, but September-October are often drier than spring.",
  },
  {
    title: "The forest changes color",
    description:
      "The Serra de Sintra's deciduous trees turn amber, gold, and rust from late October. The contrast of autumn foliage against Pena's bright yellow and red walls is stunning. The forest trails become a photographer's dream.",
  },
  {
    title: "Lower prices, better availability",
    description:
      "Post-summer prices drop 20-40% for Lisbon accommodation and flights. Sintra restaurants are easier to book. You won't need to reserve palace tickets weeks ahead — same-day online booking works fine.",
  },
  {
    title: "Comfortable walking conditions",
    description:
      "Cool enough to hike without overheating, warm enough for just a t-shirt at midday. The Villa Sassetti trail, forest paths, and Moorish Castle walls are all more enjoyable at 20°C than at 33°C.",
  },
  {
    title: "The first mists return",
    description:
      "By late October, the atmospheric fog that makes Sintra famous begins to reappear. Not as persistent as winter, but you might catch Pena Palace wreathed in morning mist — the most iconic Sintra image — without the winter cold.",
  },
];

export const autumnChallenges: AutumnChallenge[] = [
  {
    challenge: "Early September is still peak season",
    solution:
      "The first two weeks of September can still be crowded and warm. The real autumn shift happens mid-September when European schools resume. Late September onward is noticeably quieter.",
  },
  {
    challenge: "November rain picks up",
    solution:
      "November averages 8-10 rainy days. Bring a rain jacket and waterproof shoes. The rain is usually intermittent — not all-day downpours. If rain hits, pivot to the National Palace (fully indoors) or Regaleira's tunnels.",
  },
  {
    challenge: "Days shorten from October",
    solution:
      "Sunset moves from 7:30pm in September to 5:15pm by late November. Plan accordingly — in late autumn, start early and prioritize 2 palaces instead of 3. The clocks change in late October.",
  },
  {
    challenge: "Some gardens past peak bloom",
    solution:
      "True — spring and summer have the best flowers. But autumn gardens have their own beauty: warm-toned foliage, atmospheric mist, fallen leaves on moss-covered paths. Monserrate's subtropical species look good year-round.",
  },
];

export const autumnItinerary: AutumnDay = {
  title: "Golden Autumn Day in Sintra",
  stops: [
    {
      time: "8:15am",
      activity: "Train from Lisbon Rossio",
      autumnNote: "Sunrise is around 7:30-8am in autumn. You'll arrive in daylight with a pleasant chill in the air.",
    },
    {
      time: "9:05am",
      activity: "Arrive Sintra, breakfast at Piriquita",
      autumnNote: "The old town is quiet on autumn mornings. Enjoy a queijada and coffee without the summer scrum. The chimneys of the National Palace catch the early light beautifully.",
    },
    {
      time: "10:00am",
      activity: "Quinta da Regaleira",
      autumnNote: "Opens at 10am. In autumn you'll be among the first visitors. The Initiation Well in morning mist is extraordinary. Fallen leaves carpet the garden paths.",
    },
    {
      time: "12:00pm",
      activity: "Walk to Seteais viewpoint, then lunch",
      autumnNote: "5-minute walk from Regaleira. The terrace view in golden autumn light is stunning. Continue to town for lunch — Tascantiga or Romaria de Baco, both uncrowded.",
    },
    {
      time: "1:30pm",
      activity: "Bus 434 to Pena Palace",
      autumnNote: "Afternoon buses are less crowded in autumn. The full ticket (€20) is worth it now — interior queues are short enough to enjoy.",
    },
    {
      time: "2:00pm",
      activity: "Pena Palace (full ticket — interior + grounds)",
      autumnNote: "Autumn light on the yellow and red tiles is spectacular. The terraces may have a touch of mist. If it's late October, the surrounding forest is turning gold.",
    },
    {
      time: "3:45pm",
      activity: "Walk to Moorish Castle (20-25 min gate-to-gate)",
      autumnNote: "Warm afternoon light on the castle walls. Clear autumn days mean you can see Lisbon. In late October, the first fog tendrils add drama.",
    },
    {
      time: "4:45pm",
      activity: "Bus 434 back to town, pastries and golden hour",
      autumnNote: "The old town in autumn golden hour is magical. Honey-colored light on stone buildings, fewer tourists, a feeling of unhurried calm.",
    },
    {
      time: "5:45pm",
      activity: "Train back to Lisbon",
      autumnNote: "Sunset is around 6-7pm depending on the month. You'll catch the last light from the train window.",
    },
  ],
};

export const autumnPackingList = [
  "Light layers (t-shirt + sweater or light jacket — mornings are cool, midday is warm)",
  "Rain jacket (essential from late October onward)",
  "Comfortable walking shoes (trails can be leafy and slippery after rain)",
  "Sunglasses (autumn sun is low and gets in your eyes on hilltop terraces)",
  "Water bottle (1L is enough — it's not hot but you're walking hills)",
  "Camera with charged battery (golden autumn light is Sintra's most photogenic)",
  "Small scarf or buff (useful for windy Moorish Castle walls in late autumn)",
];

export const autumnFaqs = [
  {
    question: "Is autumn a good time to visit Sintra?",
    answer:
      "Excellent — it's our second-favorite season after spring. Late September through October offers warm weather, thin crowds, golden light, and lower prices. November is moodier and wetter, but atmospheric. If you want the summer experience without the summer crowds, autumn is the answer.",
  },
  {
    question: "What's the weather like in Sintra in autumn?",
    answer:
      "September: 20-26°C, dry and sunny. October: 16-22°C, mostly dry with occasional rain. November: 12-18°C, increasing rain and fog. The hilltops are always 3-5°C cooler than town. Pack layers.",
  },
  {
    question: "Do the trees change color in Sintra?",
    answer:
      "Yes — the Serra de Sintra has a mix of deciduous and evergreen trees. From late October, you'll see amber, gold, and russet foliage, especially along the forest trails and around Pena Palace. It's not New England levels of fall color, but it's beautiful against the palace walls.",
  },
  {
    question: "Is October or November better?",
    answer:
      "October. The weather is warmer, rain is less likely, and the autumn foliage is at its best. November brings more rain and shorter days, though it has a moody, atmospheric charm. For a first visit, October is the safer choice.",
  },
  {
    question: "Are all palaces open in autumn?",
    answer:
      "Yes — all five palaces operate year-round. Hours may shorten slightly from October (closing at 6pm instead of 6:30pm). Check parquesdesintra.pt for current schedules. No seasonal closures.",
  },
  {
    question: "Should I book palace tickets in advance in autumn?",
    answer:
      "It's smart but not critical. September still benefits from advance booking (crowds linger). October-November you can usually buy online same-day or even at the gate without long waits. We still recommend online booking to save 5-10 minutes.",
  },
];
