export interface Souvenir {
  name: string;
  category: "food" | "craft" | "art" | "practical";
  priceRange: string;
  whereToBuy: string;
  description: string;
  tip: string;
  authentic: boolean;
}

export const souvenirs: Souvenir[] = [
  {
    name: "Travesseiros from Piriquita",
    category: "food",
    priceRange: "€1.50-2 each",
    whereToBuy: "Piriquita bakery, town center (two locations)",
    description:
      "Puff pastry pillows filled with egg cream and almond — Sintra's signature pastry, created in the 1940s by Piriquita, a Sintra bakery since 1862. 'Travesseiro' means 'pillow' and that's exactly what they look like. Every visitor tries a queijada, but locals know the travesseiro is the real star.",
    tip: "Buy a box of 6 (€8-10) to take home. They keep 2-3 days at room temperature. Ask for them fresh from the oven — Piriquita bakes throughout the day.",
    authentic: true,
  },
  {
    name: "Queijadas de Sintra",
    category: "food",
    priceRange: "€1-1.50 each",
    whereToBuy: "Piriquita, Casa do Preto, Queijadas da Sapa (town center)",
    description:
      "Small cheese tarts made with fresh cheese, sugar, egg yolks, and cinnamon. The recipe dates to the 13th century — possibly Sintra's oldest food tradition. Crispy on the outside, creamy inside.",
    tip: "Queijadas da Sapa (near the National Palace) claims the original recipe. Piriquita's version is slightly sweeter. Try both and pick your favourite.",
    authentic: true,
  },
  {
    name: "Portuguese Cork Products",
    category: "practical",
    priceRange: "€5-40",
    whereToBuy: "Cork shops on Volta do Duche and the old town center",
    description:
      "Portugal produces over half the world's cork. Sintra shops sell wallets, bags, hats, coasters, and phone cases made from cork leather. It's lightweight, waterproof, and sustainable. The quality varies — feel the material before buying.",
    tip: "The shops on Volta do Duche (near the train station) have better prices than the tourist shops near the palaces. Look for Portuguese-made labels — some shops sell Chinese-made cork products at Portuguese prices.",
    authentic: true,
  },
  {
    name: "Azulejo Tiles (Replicas)",
    category: "art",
    priceRange: "€8-50",
    whereToBuy: "Ceramic shops in the old town, National Palace gift shop",
    description:
      "Hand-painted ceramic tiles in traditional Portuguese blue-and-white patterns. You can buy individual decorative tiles, coasters, or small panels. The patterns reference Sintra's palaces — the National Palace has some of Europe's finest azulejo collections.",
    tip: "The National Palace gift shop sells licensed reproductions of actual palace tiles — a more meaningful souvenir than generic patterns. Hand-painted tiles cost more but are worth it vs mass-produced.",
    authentic: true,
  },
  {
    name: "Colares Wine",
    category: "food",
    priceRange: "€10-30 per bottle",
    whereToBuy: "Adega Regional de Colares (20 min from Sintra), some Sintra wine shops",
    description:
      "Wine from the Colares region — the vineyards visible from Seteais Palace terrace. Made from Ramisco grapes grown in sandy Atlantic soil, it's one of Portugal's rarest and most unique wines. The pre-phylloxera vines survived because the sandy soil repelled the pest.",
    tip: "Visit Adega Regional de Colares if you have a car — tastings are cheap and they sell bottles at cellar-door prices. In Sintra, some restaurants serve it by the glass (ask at Incomum or Tascantiga).",
    authentic: true,
  },
  {
    name: "Sintra Palace Magnets & Postcards",
    category: "practical",
    priceRange: "€2-5",
    whereToBuy: "Palace gift shops, souvenir stores throughout town",
    description:
      "The standard tourist souvenirs — fridge magnets, postcards, and keychains featuring Pena Palace or the National Palace chimneys. Nothing special but affordable and easy to carry. The palace gift shops have slightly better-quality versions than the street vendors.",
    tip: "The Pena Palace gift shop has the best selection. Skip the generic 'Portugal' magnets sold on the main street — they're not even Sintra-specific.",
    authentic: false,
  },
  {
    name: "Hand-Painted Ceramics",
    category: "art",
    priceRange: "€15-80",
    whereToBuy: "Artisan shops on Rua Visconde de Monserrate and near the National Palace",
    description:
      "Beyond tiles — bowls, plates, and jugs in traditional Portuguese patterns. The best pieces are hand-painted and signed. Sintra's ceramics reference the Moorish and Manueline patterns found in the palaces. Look for the 'pintado a mao' (hand-painted) label.",
    tip: "Ask if it's dishwasher safe (some hand-painted pieces aren't). The shops near the National Palace have artisan-quality pieces. Budget options are available at the Saturday market in São Pedro.",
    authentic: true,
  },
  {
    name: "Sintra Honey",
    category: "food",
    priceRange: "€6-12 per jar",
    whereToBuy: "Tuesday market in São Pedro, gourmet shops in town center",
    description:
      "Local honey from Serra de Sintra bees, fed on the mountain's diverse wild flora. Available in several varieties — eucalyptus, wildflower, and heather. A distinctly local product you won't find outside the region.",
    tip: "The São Pedro Tuesday market has the best prices and selection direct from beekeepers. Ask to taste before buying — flavour profiles vary significantly between apiaries.",
    authentic: true,
  },
];

export const souvenirFaqs = [
  {
    question: "What's the best souvenir from Sintra?",
    answer:
      "A box of travesseiros from Piriquita. They're unique to Sintra, delicious, affordable (€8-10 for a box), and keep for 2-3 days. For a non-food souvenir, hand-painted azulejo tiles from the National Palace gift shop are meaningful and distinctly Portuguese.",
  },
  {
    question: "Where should I avoid buying souvenirs in Sintra?",
    answer:
      "Skip the generic souvenir shops on the main tourist street between the station and town center. They sell mass-produced items (often made in China) at inflated prices. The palace gift shops, Piriquita, and the artisan shops on quieter streets offer better quality and authenticity.",
  },
  {
    question: "Can I bring food souvenirs through airport security?",
    answer:
      "Yes — travesseiros, queijadas, honey, and wine all travel fine in checked luggage. Wine bottles should be wrapped in clothing. Pastries keep 2-3 days without refrigeration. Cork products and ceramics are no problem in carry-on. Check EU customs rules if flying outside Europe.",
  },
  {
    question: "Is there a market in Sintra?",
    answer:
      "Yes — São Pedro de Penaferrim hosts a market on the 2nd and 4th Sunday of each month, plus a smaller Tuesday market. You'll find local honey, cheese, cork products, ceramics, and antiques. It's 15 minutes' walk from the town center. More authentic and cheaper than tourist shops.",
  },
  {
    question: "Are Sintra souvenir prices reasonable?",
    answer:
      "For food items (pastries, wine, honey) — very reasonable. For crafts and ceramics — tourist-area markup applies, but not as extreme as Lisbon's Alfama. The palace gift shops are fairly priced for licensed products. Generic souvenirs (magnets, t-shirts) are overpriced everywhere — the same items cost half in São Pedro.",
  },
];
