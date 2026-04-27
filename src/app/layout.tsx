import type { Metadata } from "next";
import Script from "next/script";
import { Spectral, Alegreya_Sans, Space_Grotesk } from "next/font/google";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import "./globals.css";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const alegreyaSans = Alegreya_Sans({
  variable: "--font-alegreya-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sintraitinerary.com"),
  title: {
    default: "Sintra Itinerary 2026 — Day Trip Guide from Lisbon",
    template: "%s | Sintra Itinerary",
  },
  description:
    "Plan your perfect Sintra day trip. Practical itineraries for 1-2 days covering Pena Palace, Quinta da Regaleira, Moorish Castle, and more. Real prices, realistic timing, no fluff.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sintra Itinerary",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sintra Itinerary — Day Trip Guide from Lisbon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${alegreyaSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)]">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P6D9HW5S2H"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P6D9HW5S2H');
          `}
        </Script>
        <Navigation />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
