export interface TramStop {
  name: string;
  km: string;
  note: string;
}

export const tramStops: TramStop[] = [
  { name: "Sintra (Ribeira de Sintra)", km: "0", note: "Starting point — near Portela de Sintra, not the main train station. 15-minute walk or short taxi from central Sintra." },
  { name: "Galamares", km: "3", note: "Small village. No major attractions but pleasant rural scenery." },
  { name: "Banzão", km: "6", note: "Quiet residential area. The route enters more open countryside." },
  { name: "Colares", km: "9", note: "Wine country — the Colares wine region with its sandy-soil vineyards. Worth a stop if you're into wine." },
  { name: "Azenhas do Mar", km: "11", note: "No direct stop, but the village is visible from the route. Closest stop is Praia das Macas." },
  { name: "Praia das Macas", km: "13", note: "End of the line — Atlantic beach town. Natural ocean pool, seafood restaurants, and a sandy beach." },
];

export interface TramFact {
  label: string;
  value: string;
}

export const tramFacts: TramFact[] = [
  { label: "Built", value: "1904" },
  { label: "Route", value: "Sintra → Praia das Macas (13km)" },
  { label: "Journey time", value: "~45 minutes one way" },
  { label: "Fare", value: "~€3 each way" },
  { label: "Schedule", value: "Limited — primarily weekends and summer. Check efrfrente.pt" },
  { label: "Gauge", value: "Narrow gauge (1000mm)" },
  { label: "Status", value: "Heritage/tourist tram — not a regular commuter service" },
];

export const tramFaqs = [
  {
    question: "Does the Sintra tram still run?",
    answer:
      "Yes, but on a limited schedule. The Electrico de Sintra runs primarily on weekends and more frequently in summer (June-September). It's a heritage tram service, not a regular commuter line. Check efrfrente.pt or ask at the Sintra tourist office for current schedules. Service can be suspended for maintenance — always verify before planning around it.",
  },
  {
    question: "Where does the Sintra tram go?",
    answer:
      "From Ribeira de Sintra (near Portela de Sintra, not the main tourist center) to Praia das Macas beach — 13km through the Colares wine region and Atlantic countryside. It's a scenic ride, not a palace-visiting transport. The journey takes about 45 minutes each way.",
  },
  {
    question: "Is the Sintra tram worth riding?",
    answer:
      "As a transport experience, absolutely. It's one of the last historic trams in Portugal outside Lisbon, running since 1904. The route passes through rural countryside with Atlantic views. As practical transport, less so — it doesn't go near the palaces and the schedule is limited. Think of it as a side trip, not a way to get around Sintra.",
  },
  {
    question: "Where do I catch the Sintra tram?",
    answer:
      "The Sintra terminus is at Ribeira de Sintra, near Portela de Sintra. This is NOT the main Sintra train station — it's about 1.5km away. From the Sintra train station, it's a 15-minute walk or short taxi ride. The stop is not well-signposted — look for the narrow-gauge track and small shelter.",
  },
  {
    question: "Can I combine the tram with a palace visit?",
    answer:
      "Yes, as a half-day addition. Visit palaces in the morning, then catch the tram to Praia das Macas for a beach afternoon. Return by tram (or taxi if you miss the last tram). It works best in summer when both the tram schedule and beach weather align.",
  },
];
