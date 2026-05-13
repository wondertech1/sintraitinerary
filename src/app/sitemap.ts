import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sintraitinerary.com";

  return [
    // Core pages — launched first
    {
      url: baseUrl,
      lastModified: "2026-03-15",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/1-day-sintra-itinerary`,
      lastModified: "2026-03-16",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/2-day-sintra-itinerary`,
      lastModified: "2026-03-18",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/things-to-do-in-sintra`,
      lastModified: "2026-03-20",
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Palace guides — week 2
    {
      url: `${baseUrl}/guides/pena-palace-guide`,
      lastModified: "2026-03-22",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/quinta-da-regaleira-guide`,
      lastModified: "2026-03-24",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/moorish-castle-guide`,
      lastModified: "2026-03-26",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/monserrate-palace-guide`,
      lastModified: "2026-03-28",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/national-palace-guide`,
      lastModified: "2026-03-29",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/which-sintra-palaces-to-visit`,
      lastModified: "2026-03-30",
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // Practical planning — early April
    {
      url: `${baseUrl}/sintra-tickets-and-passes`,
      lastModified: "2026-04-04",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-time-to-visit-sintra`,
      lastModified: "2026-05-12",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/sintra-travel-tips`,
      lastModified: "2026-04-08",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/where-to-eat-in-sintra`,
      lastModified: "2026-04-10",
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/where-to-stay-in-sintra`,
      lastModified: "2026-04-12",
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // Day trip & comparison guides — mid April
    {
      url: `${baseUrl}/lisbon-to-sintra-day-trip`,
      lastModified: "2026-05-12",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/sintra-on-a-budget`,
      lastModified: "2026-04-16",
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/is-sintra-worth-visiting`,
      lastModified: "2026-04-17",
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/sintra-vs-cascais`,
      lastModified: "2026-04-19",
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/sintra-cascais-itinerary`,
      lastModified: "2026-04-21",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/3-day-sintra-itinerary`,
      lastModified: "2026-04-22",
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // Attraction deep-dives — late April
    {
      url: `${baseUrl}/quinta-da-regaleira-initiation-well`,
      lastModified: "2026-04-24",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cabo-da-roca-guide`,
      lastModified: "2026-04-26",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pena-palace-vs-regaleira`,
      lastModified: "2026-04-27",
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/convent-of-the-capuchos-guide`,
      lastModified: "2026-04-29",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sintra-walking-routes`,
      lastModified: "2026-04-30",
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Niche & lifestyle guides — May (drip-fed)
    {
      url: `${baseUrl}/sintra-photography-guide`,
      lastModified: "2026-05-02",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sintra-with-kids`,
      lastModified: "2026-05-04",
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/sintra-for-couples`,
      lastModified: "2026-05-06",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sintra-local-food-guide`,
      lastModified: "2026-05-07",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sintra-day-trip-from-porto`,
      lastModified: "2026-05-09",
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/sintra-hidden-gems`,
      lastModified: "2026-05-10",
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/sintra-rainy-day-guide`,
      lastModified: "2026-05-12",
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/sintra-gardens-guide`,
      lastModified: "2026-05-14",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sintra-sunset-spots`,
      lastModified: "2026-05-16",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sintra-tram-guide`,
      lastModified: "2026-05-18",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sintra-history-guide`,
      lastModified: "2026-05-12",
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/sintra-accessibility-guide`,
      lastModified: "2026-05-22",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sintra-souvenirs-shopping`,
      lastModified: "2026-05-24",
      changeFrequency: "monthly",
      priority: 0.65,
    },

  ];
}
