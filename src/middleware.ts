import { NextRequest, NextResponse } from "next/server";

const redirects: Record<string, string> = {
  "/sintra-in-spring": "/best-time-to-visit-sintra#spring",
  "/sintra-in-summer": "/best-time-to-visit-sintra#summer",
  "/sintra-in-autumn": "/best-time-to-visit-sintra#autumn",
  "/sintra-in-winter": "/best-time-to-visit-sintra#winter",
  "/getting-to-sintra-from-lisbon": "/lisbon-to-sintra-day-trip",
  "/sintra-unesco-world-heritage": "/sintra-history-guide",
};

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  if (host.startsWith("www.")) {
    const newUrl = new URL(request.url);
    newUrl.host = host.replace("www.", "");
    return NextResponse.redirect(newUrl, 301);
  }

  const path = request.nextUrl.pathname;
  if (redirects[path]) {
    return NextResponse.redirect(new URL(redirects[path], request.url), 301);
  }

  return NextResponse.next();
}
