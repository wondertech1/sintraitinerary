export interface HistoryEra {
  era: string;
  period: string;
  headline: string;
  description: string;
  keyEvents: string[];
  legacy: string;
}

export const historyEras: HistoryEra[] = [
  {
    era: "Moorish Sintra",
    period: "8th-12th century",
    headline: "Fortress on the hilltop",
    description:
      "The Moors built the hilltop castle in the 8th-9th century during their occupation of Iberia. Sintra (then called Shintara) was a strategic outpost controlling the route between Lisbon and the Atlantic coast. The castle walls that snake across the mountain today are the most visible remnant of 400 years of Moorish rule.",
    keyEvents: [
      "8th-9th century: Moorish Castle constructed on the Serra hilltop",
      "1093: First brief Christian conquest by Alfonso VI of Leon",
      "1147: Afonso Henriques captures Sintra definitively during the siege of Lisbon",
    ],
    legacy: "The Moorish Castle remains. You can walk the same walls the Moorish garrison defended nearly 1,200 years ago. The Moorish influence also appears in the azulejo tradition and architectural elements of the National Palace.",
  },
  {
    era: "Royal Retreat",
    period: "13th-18th century",
    headline: "Where Portuguese kings came to escape",
    description:
      "After the Christian reconquest, Portuguese royalty discovered what the Moors already knew: Sintra's microclimate — cooled by Atlantic fog and sheltered by the Serra — made it the perfect escape from Lisbon's summer heat. The National Palace became the royal summer residence, and the town grew as an aristocratic retreat.",
    keyEvents: [
      "13th century: National Palace established as the royal summer residence",
      "15th century: Major expansion of the National Palace under João I and Manuel I",
      "16th century: Convent of the Capuchos founded (1560) — Franciscan austerity on the same mountain as royal opulence",
      "1755: Great earthquake damages Sintra (less severely than Lisbon) — rebuilds and continues as royal retreat",
    ],
    legacy: "The National Palace with its iconic twin chimneys. The queijada recipe (13th century). The tradition of Sintra as a retreat from Lisbon's heat — which continues today as a day trip tradition.",
  },
  {
    era: "The Romantic Revolution",
    period: "1838-1910",
    headline: "When Sintra became a fairytale",
    description:
      "This is the era that made Sintra what visitors see today. Ferdinand II — a German prince married to the Portuguese queen — transformed a ruined hilltop monastery into the colorful fantasy of Pena Palace (1842-1854). His vision inspired a generation of aristocrats to build their own dream estates: Monserrate (from 1858), Regaleira (1904-1910), and others. The Romantic movement treated nature and architecture as inseparable — hence the exotic gardens, forest trails, and the deliberate integration of buildings into the mountain landscape.\n\nByron was far from the only writer captivated by Sintra. William Beckford lived at Monserrate before Francis Cook and wrote extensively about the Serra. Hans Christian Andersen visited and described the landscape. Eça de Queiroz, one of Portugal's greatest novelists, set scenes from Os Maias in Sintra. The town has been a literary pilgrimage site for over two centuries.",
    keyEvents: [
      "1838: Ferdinand II buys the ruined Hieronymite monastery on the hilltop",
      "1842-1854: Pena Palace built in eclectic Romantic style — Gothic, Moorish, Renaissance, Manueline",
      "1858: Francis Cook begins Monserrate Palace and its botanical gardens",
      "1840s-1860s: Ferdinand II plants the Pena Park with species from every continent",
      "1904-1910: Carvalho Monteiro builds Quinta da Regaleira with its symbolic underground world",
    ],
    legacy: "Everything tourists come to see: Pena Palace, Monserrate, Regaleira. The forest itself — Ferdinand II planted many of the exotic trees visitors walk under today. The entire 'fairytale Sintra' identity was invented in this 70-year period.",
  },
  {
    era: "Republic & Preservation",
    period: "1910-present",
    headline: "From royal property to world heritage",
    description:
      "The Portuguese Republic (1910) ended the monarchy and the palaces became national monuments. Through the 20th century, conservation efforts preserved what the royals and aristocrats had built. The creation of Parques de Sintra (a public-private partnership) in the 1990s professionalized the management of the palaces and landscape. In 1995, UNESCO recognized the Cultural Landscape of Sintra as a World Heritage Site.",
    keyEvents: [
      "1910: Republic established — royal properties become national monuments",
      "1970s: Archaeological excavations begin at the Moorish Castle",
      "1995: UNESCO inscribes the Cultural Landscape of Sintra as a World Heritage Site",
      "2000s: Parques de Sintra begins major restoration programs across all palaces",
      "2023: Biester Palace opens to the public after over a century in private hands",
    ],
    legacy: "The UNESCO designation protects the entire landscape. Modern conservation ensures the palaces survive for future generations. Over 3 million visitors per year now experience what a German prince and a handful of dreamers created on a misty Portuguese hilltop.",
  },
];

export const historyFaqs = [
  {
    question: "How old is Sintra?",
    answer:
      "Sintra has been inhabited since the Neolithic period, but its documented history begins with the Moorish Castle (8th-9th century). The town grew around the National Palace from the 13th century. The 'fairytale Sintra' that tourists visit was largely created between 1838-1910 during the Romantic era.",
  },
  {
    question: "Who built Pena Palace?",
    answer:
      "Ferdinand II (Fernando II), a German prince from the House of Saxe-Coburg-Gotha who married Portuguese Queen Maria II. He bought a ruined Hieronymite monastery in 1838 and transformed it into the colorful Romantic palace between 1842 and 1854. He also planted the surrounding 85-hectare park with exotic species from around the world.",
  },
  {
    question: "Why is Sintra so different from the rest of Portugal?",
    answer:
      "Geography and climate. The Serra de Sintra creates a microclimate: Atlantic fog rolls in, temperatures stay cooler than Lisbon, and vegetation is unusually lush. This attracted royalty from the 13th century, who built palaces that were fantasies rather than fortresses. The Romantic era (1838-1910) amplified this — creating an intentionally otherworldly landscape unlike anywhere else in Portugal.",
  },
  {
    question: "What is the oldest building in Sintra?",
    answer:
      "The Moorish Castle (8th-9th century) is the oldest surviving structure. The National Palace has 13th-century origins but was heavily rebuilt in the 15th-16th centuries. The Convent of the Capuchos (1560) is the oldest building still close to its original form.",
  },
  {
    question: "Who was Carvalho Monteiro?",
    answer:
      "António Augusto Carvalho Monteiro (1848-1920) was a wealthy businessman, collector, and bibliophile who built Quinta da Regaleira between 1904 and 1910. He filled it with symbolism drawn from the Knights Templar, Freemasonry, alchemy, and Portuguese mythology. The Initiation Well — a 27-metre spiral descent — is his most famous creation.",
  },
];
