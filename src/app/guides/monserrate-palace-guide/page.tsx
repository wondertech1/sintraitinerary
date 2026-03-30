import type { Metadata } from "next";
import { monserratePalace } from "@/data/guides/palaces/monserrate-palace";
import PalaceGuidePage from "@/components/guides/PalaceGuidePage";
import JsonLd from "@/components/shared/JsonLd";
import { touristAttractionSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: monserratePalace.metaTitle,
  description: monserratePalace.metaDescription,
  alternates: { canonical: `https://sintraitinerary.com/guides/${monserratePalace.slug}` },
};

export default function MonserratePalaceGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          touristAttractionSchema({
            name: monserratePalace.name,
            description: monserratePalace.metaDescription,
            url: `/guides/${monserratePalace.slug}`,
          }),
          faqSchema(monserratePalace.faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Guides", url: "/things-to-do-in-sintra" },
            { name: monserratePalace.name, url: `/guides/${monserratePalace.slug}` },
          ]),
        ]}
      />
      <PalaceGuidePage data={monserratePalace} />
    </>
  );
}
