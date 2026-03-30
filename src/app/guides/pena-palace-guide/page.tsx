import type { Metadata } from "next";
import { penaPalace } from "@/data/guides/palaces/pena-palace";
import PalaceGuidePage from "@/components/guides/PalaceGuidePage";
import JsonLd from "@/components/shared/JsonLd";
import { touristAttractionSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: penaPalace.metaTitle,
  description: penaPalace.metaDescription,
  alternates: { canonical: `https://sintraitinerary.com/guides/${penaPalace.slug}` },
};

export default function PenaPalaceGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          touristAttractionSchema({
            name: penaPalace.name,
            description: penaPalace.metaDescription,
            url: `/guides/${penaPalace.slug}`,
          }),
          faqSchema(penaPalace.faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Guides", url: "/things-to-do-in-sintra" },
            { name: penaPalace.name, url: `/guides/${penaPalace.slug}` },
          ]),
        ]}
      />
      <PalaceGuidePage data={penaPalace} />
    </>
  );
}
