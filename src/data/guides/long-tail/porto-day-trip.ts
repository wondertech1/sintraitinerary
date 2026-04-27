export interface TransportOption {
  mode: string;
  duration: string;
  cost: string;
  frequency: string;
  verdict: string;
  recommended: boolean;
}

export const transportOptions: TransportOption[] = [
  {
    mode: "Train (Porto → Lisbon Oriente → Sintra)",
    duration: "3.5-4 hours total",
    cost: "€25-35 each way (AP train to Lisbon) + €2.35 (Lisbon to Sintra)",
    frequency: "AP trains hourly, Sintra trains every 20-30 min",
    verdict:
      "The most practical option. Take the early AP (Alfa Pendular) from Porto Campanha to Lisbon Oriente (2h40). Transfer to the Sintra line at Oriente or Rossio. Total journey about 3.5 hours door-to-door. Book the AP online in advance for best prices. For full details on the Porto–Lisbon connection, see our <a href=\"https://portoitinerary.com/guides/lisbon-to-porto\" target=\"_blank\" rel=\"noopener\">Lisbon to Porto transport guide</a>. And if you want to make the most of Porto itself before or after the trip, see <a href=\"https://portoitinerary.com\" target=\"_blank\" rel=\"noopener\">our Porto itinerary guide</a>.",
    recommended: true,
  },
  {
    mode: "Drive (Porto → Sintra direct)",
    duration: "3-3.5 hours",
    cost: "€25-30 tolls + fuel",
    frequency: "Anytime",
    verdict:
      "Faster than the train and gives you flexibility to visit Capuchos and Cabo da Roca (no bus needed). But parking in Sintra is a nightmare, especially in summer. Park in São Pedro (free) and walk 15 minutes. Not recommended as a day trip — the 7-hour round trip driving is exhausting.",
    recommended: false,
  },
  {
    mode: "Bus (Rede Expressos / FlixBus)",
    duration: "3.5-4 hours to Lisbon + transfer",
    cost: "€15-22 each way to Lisbon + €2.35 to Sintra",
    frequency: "Multiple daily departures",
    verdict:
      "Cheaper than the train but less comfortable and no guaranteed seat. Drops you at Lisbon Sete Rios bus station, which connects directly to the Sintra train line. Only choose this if the AP train is sold out or budget is very tight.",
    recommended: false,
  },
];

export interface DayTripSchedule {
  time: string;
  activity: string;
  note: string;
}

export const portoSchedule: DayTripSchedule[] = [
  {
    time: "6:00am",
    activity: "AP train from Porto Campanha",
    note: "Book online at cp.pt — first class is only €5-10 more and worth it for the comfort on a long day. Bring breakfast.",
  },
  {
    time: "8:40am",
    activity: "Arrive Lisbon Oriente, transfer to Sintra line",
    note: "The Sintra train leaves from Oriente (platform downstairs). You can also transfer at Rossio for a more scenic station. Buy a Viva Viagem card for €0.50 + €2.35 Sintra fare.",
  },
  {
    time: "9:30am",
    activity: "Arrive Sintra, bus 434 to Pena Palace",
    note: "You've lost morning golden hour but still arrive before the main crowd. Head straight to Pena — don't stop for breakfast in town.",
  },
  {
    time: "10:00am",
    activity: "Pena Palace (grounds-only ticket, 90 min)",
    note: "Terraces and viewpoints first. The crowds won't be severe yet. Grounds-only €12 saves time and money.",
  },
  {
    time: "11:30am",
    activity: "Walk to Moorish Castle (20-25 min gate-to-gate) or bus to town",
    note: "If energy is high, do the Moorish Castle (45 min). If saving energy for the long day, skip it and bus down to town.",
  },
  {
    time: "12:30pm",
    activity: "Lunch in Sintra old town",
    note: "Quick but good: Nau Palatina or Tascantiga. You're on a tight schedule — eat efficiently.",
  },
  {
    time: "1:30pm",
    activity: "Quinta da Regaleira (90 min)",
    note: "The must-see if you're only doing two palaces. Head to the Initiation Well first, then explore gardens.",
  },
  {
    time: "3:15pm",
    activity: "Train back to Lisbon Oriente",
    note: "Trains every 20-30 min. The journey is 40 min. You need to be at Oriente by 4:30pm latest for a return AP train.",
  },
  {
    time: "4:30pm",
    activity: "AP train Lisbon → Porto",
    note: "Book the 4:30 or 5:30pm AP in advance. You'll be back in Porto by 7-8pm — exhausted but satisfied.",
  },
];

export const portoDayTripFaqs = [
  {
    question: "Can you do a day trip from Porto to Sintra?",
    answer:
      "Yes, but it's a long day. The round trip is 7+ hours of travel, leaving 5-6 hours in Sintra. It's doable but tiring. If possible, stay overnight in Lisbon and do Sintra the next morning — you'll see more and enjoy it more. But if Porto is your only base, a day trip works with early starts and good planning.",
  },
  {
    question: "What's the fastest way from Porto to Sintra?",
    answer:
      "The Alfa Pendular (AP) train from Porto Campanha to Lisbon Oriente takes 2h40, then transfer to the Sintra line (40 min). Total: about 3.5 hours. Book at cp.pt — advance tickets are cheaper. Driving is similar time but parking in Sintra is difficult.",
  },
  {
    question: "How much does a Porto to Sintra day trip cost?",
    answer:
      "Budget about €65-85 per person: AP train round trip (€50-70), Sintra train (€4.70 return), palace tickets (€12-20 each), lunch (€10-15). Pre-booking AP trains online saves €10-15 vs buying at the station.",
  },
  {
    question: "How many palaces can I see on a day trip from Porto?",
    answer:
      "Realistically two: Pena Palace and Quinta da Regaleira. With an early start and tight scheduling, you might squeeze in three (add the Moorish Castle). Don't try to see all five — the travel time from Porto doesn't leave enough hours.",
  },
  {
    question: "Should I stay overnight in Lisbon instead?",
    answer:
      "If you can, yes. Staying one night in Lisbon lets you take the 7:30am train to Sintra, arrive by 8:20am, and have a full day (3+ palaces). It also eliminates the 7-hour Porto round trip. Budget hotels near Rossio station start around €60-80/night.",
  },
];
