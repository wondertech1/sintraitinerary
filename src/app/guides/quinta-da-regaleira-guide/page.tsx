import type { Metadata } from "next";
import { quintaDaRegaleira } from "@/data/guides/palaces/quinta-da-regaleira";
import PalaceGuidePage from "@/components/guides/PalaceGuidePage";
import JsonLd from "@/components/shared/JsonLd";
import { touristAttractionSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: quintaDaRegaleira.metaTitle,
  description: quintaDaRegaleira.metaDescription,
  alternates: { canonical: `https://sintraitinerary.com/guides/${quintaDaRegaleira.slug}` },
};

export default function QuintaDaRegaleiraGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          touristAttractionSchema({
            name: quintaDaRegaleira.name,
            description: quintaDaRegaleira.metaDescription,
            url: `/guides/${quintaDaRegaleira.slug}`,
          }),
          faqSchema(quintaDaRegaleira.faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Guides", url: "/things-to-do-in-sintra" },
            { name: quintaDaRegaleira.name, url: `/guides/${quintaDaRegaleira.slug}` },
          ]),
        ]}
      />
      <PalaceGuidePage data={quintaDaRegaleira} />
    </>
  );
}
