import type { Metadata } from "next";
import { RollercoasterBabyNamesPage } from "@/components/case-studies/rollercoaster-baby-names-page";

export const metadata: Metadata = {
  title: "Rollercoaster.ie Baby Names | Susan Gallagher",
  description:
    "A product and UX case study on turning high-performing parenting editorial into a searchable baby name experience.",
};

export default function Page() {
  return <RollercoasterBabyNamesPage />;
}
