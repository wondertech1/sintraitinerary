import { SITE_NAME, SITE_URL, SINTRA_COORDINATES } from "./constants";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Plan your perfect Sintra day trip. Tested itineraries, real prices, realistic timing.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function touristTripSchema(data: {
  name: string;
  description: string;
  url: string;
  days: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: data.name,
    description: data.description,
    url: `${SITE_URL}${data.url}`,
    touristType: "Sightseeing",
    itinerary: {
      "@type": "ItemList",
      numberOfItems: data.days,
    },
    contentLocation: {
      "@type": "Place",
      name: "Sintra, Portugal",
      geo: {
        "@type": "GeoCoordinates",
        latitude: SINTRA_COORDINATES.latitude,
        longitude: SINTRA_COORDINATES.longitude,
      },
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function touristAttractionSchema(data: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: data.name,
    description: data.description,
    url: `${SITE_URL}${data.url}`,
    contentLocation: {
      "@type": "Place",
      name: "Sintra, Portugal",
      geo: {
        "@type": "GeoCoordinates",
        latitude: SINTRA_COORDINATES.latitude,
        longitude: SINTRA_COORDINATES.longitude,
      },
    },
  };
}
