export interface PalaceSection {
  id: string;
  title: string;
  content: string;
}

export interface TicketOption {
  name: string;
  price: string;
  includes: string;
  recommended: boolean;
  note?: string;
}

export interface PhotoSpot {
  name: string;
  description: string;
  bestTime: string;
  crowdTip: string;
}

export interface PalaceGuideData {
  slug: string;
  name: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  lastVerified: string;

  verdict: {
    rating: "worth-it" | "conditional" | "skip-it";
    summary: string;
    bestFor: string;
    skipIf: string;
  };

  quickFacts: {
    duration: string;
    cost: string;
    crowdLevel: 1 | 2 | 3 | 4 | 5;
    bestTime: string;
    gettingThere: string;
    openingHours: string;
    website: string;
  };

  introduction: string;

  sections: PalaceSection[];

  tickets: {
    intro: string;
    options: TicketOption[];
    buyOnline: string;
    comboDeals: string;
  };

  photoSpots: PhotoSpot[];

  practicalTips: string[];

  faqs: { question: string; answer: string }[];
}
