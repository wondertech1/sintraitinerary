import type { Metadata } from "next";
import { nationalPalace } from "@/data/guides/palaces/national-palace";
import PalaceGuidePage from "@/components/guides/PalaceGuidePage";
import JsonLd from "@/components/shared/JsonLd";
import { touristAttractionSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: nationalPalace.metaTitle,
  description: nationalPalace.metaDescription,
  alternates: { canonical: `https://sintraitinerary.com/guides/${nationalPalace.slug}` },
};

export default function NationalPalaceGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          touristAttractionSchema({
            name: nationalPalace.name,
            description: nationalPalace.metaDescription,
            url: `/guides/${nationalPalace.slug}`,
          }),
          faqSchema(nationalPalace.faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Guides", url: "/things-to-do-in-sintra" },
            { name: nationalPalace.name, url: `/guides/${nationalPalace.slug}` },
          ]),
        ]}
      />
      <PalaceGuidePage data={nationalPalace} />
    </>
  );
}
