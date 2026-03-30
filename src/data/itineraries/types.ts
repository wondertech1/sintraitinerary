export type Period = "morning" | "afternoon" | "evening";
export type Verdict = "worth-it" | "conditional" | "skip-it";

export interface StopData {
  time: string;
  period: Period;
  name: string;
  description: string;
  duration: string;
  cost: string;
  crowdLevel: 1 | 2 | 3 | 4 | 5;
  verdict: Verdict;
  verdictText: string;
  tip?: string;
  skipIf?: string;
}

export interface RestaurantData {
  name: string;
  cuisine: string;
  price: string;
  description: string;
  whatToOrder: string;
}

export interface TransportNoteData {
  text: string;
}

export interface DayData {
  dayNumber: number;
  title: string;
  theme: string;
  summary: string;
  walkingKm: string;
  stops: StopData[];
  lunch: RestaurantData;
  dinner?: RestaurantData;
  transportNotes: TransportNoteData[];
}

export interface BudgetRow {
  category: string;
  budget: string;
  mid: string;
  comfort: string;
}

export interface ItineraryRoute {
  id: string;
  name: string;
  tagline: string;
  days: DayData[];
  budget: {
    rows: BudgetRow[];
    totals: { budget: string; mid: string; comfort: string };
  };
}

export interface ItineraryData {
  duration: number;
  title: string;
  subtitle: string;
  lastVerified: string;
  stats: { label: string; value: string }[];
  routes: ItineraryRoute[];
  faqs: { question: string; answer: string }[];
}
