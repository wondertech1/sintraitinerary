import type { Metadata } from "next";
import { moorishCastle } from "@/data/guides/palaces/moorish-castle";
import PalaceGuidePage from "@/components/guides/PalaceGuidePage";
import JsonLd from "@/components/shared/JsonLd";
import { touristAttractionSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: moorishCastle.metaTitle,
  description: moorishCastle.metaDescription,
  alternates: { canonical: `https://sintraitinerary.com/guides/${moorishCastle.slug}` },
};

export default function MoorishCastleGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          touristAttractionSchema({
            name: moorishCastle.name,
            description: moorishCastle.metaDescription,
            url: `/guides/${moorishCastle.slug}`,
          }),
          faqSchema(moorishCastle.faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Guides", url: "/things-to-do-in-sintra" },
            { name: moorishCastle.name, url: `/guides/${moorishCastle.slug}` },
          ]),
        ]}
      />
      <PalaceGuidePage data={moorishCastle} />
    </>
  );
}
