import type { Metadata } from "next";
import { OneFabDayPage } from "@/components/case-studies/one-fab-day-page";

export const metadata: Metadata = {
  title: "One Fab Day Case Study | Susan Gallagher",
  description:
    "A product and UX case study on connecting editorial trust to curated supplier discovery while improving commercial outcomes.",
};

export default function Page() {
  return <OneFabDayPage />;
}
