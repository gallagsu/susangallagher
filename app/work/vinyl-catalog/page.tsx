import type { Metadata } from "next";
import { VinylCatalogPage } from "@/components/case-studies/vinyl-catalog-page";

export const metadata: Metadata = {
  title: "Vinyl Catalog App | Susan Gallagher",
  description:
    "A mobile product concept exploring AI-assisted vinyl cataloguing, tactile browsing and interaction design.",
};

export default function Page() {
  return <VinylCatalogPage />;
}
