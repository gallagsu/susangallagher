import type { Metadata } from "next";
import { KnightsOfEannaPage } from "@/components/case-studies/knights-of-eanna-page";

export const metadata: Metadata = {
  title: "Knights of Éanna Digital Platform | Susan Gallagher",
  description:
    "A product case study about modernising a chess club’s website, membership, payments and internal admin workflows.",
};

export default function Page() {
  return <KnightsOfEannaPage />;
}
