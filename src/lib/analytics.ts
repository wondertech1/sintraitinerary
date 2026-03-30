export const GA_MEASUREMENT_ID = "G-P6D9HW5S2H";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export function pageview(url: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
  }
}

export function event(action: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
}

export function trackItineraryView(days: number) {
  event("view_itinerary", { days, content_type: "itinerary" });
}

export function trackGuideView(guide: string) {
  event("view_guide", { guide, content_type: "guide" });
}

export function trackCTAClick(location: string) {
  event("cta_click", { location });
}
