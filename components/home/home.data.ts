import type { ExpertiseItem, NavItem, ProjectItem } from "./home.types";

export type SiteNavKey = "case-study" | "about" | "contact" | null;

export function getPrimaryNav(activeKey: SiteNavKey = null): NavItem[] {
  return [
    {
      label: "WORK",
      href: "/#selected-work",
      active: activeKey === "case-study",
    },
    {
      label: "ABOUT",
      href: "/about",
      active: activeKey === "about",
    },
    {
      label: "CONTACT",
      href: "/contact",
      active: activeKey === "contact",
    },
  ];
}

export function getFooterNav(activeKey: SiteNavKey = null): NavItem[] {
  return [
    {
      label: "WORK",
      href: "/#selected-work",
      active: activeKey === "case-study",
    },
    {
      label: "ABOUT",
      href: "/about",
      active: activeKey === "about",
    },
    {
      label: "CONTACT",
      href: "/contact",
      active: activeKey === "contact",
    },
  ];
}

export const expertiseItems: ExpertiseItem[] = [
  {
    title: "AI-assisted workflows",
    description:
      "Using modern AI coding tools to explore, prototype, critique and make product ideas tangible faster.",
  },
  {
    title: "Commercial judgement",
    description:
      "Founder experience of balancing user needs, business goals and practical constraints.",
  },
  {
    title: "Service & workflow design",
    description:
      "Looking beyond the screen to understand how people, processes and tools fit together.",
  },
  {
    title: "Product direction",
    description: "Clarifying problems, priorities and next steps.",
  },
  {
    title: "Design & prototyping",
    description:
      "Shaping interfaces, flows and prototypes that make ideas tangible.",
  },
  {
    title: "UX & research",
    description: "Understanding users, journeys, workflows and friction.",
  },
];

export const projectItems: ProjectItem[] = [
  {
    indexLabel: "01 /",
    title: "One Fab Day",
    href: "/case-studies/one-fab-day",
    summary: "Founded and grew a digital business to acquisition.",
    description: "",
    tags: ["PRODUCT STRATEGY", "UX", "COMMERCIAL GROWTH"],
    image: {
      foregroundSrc: "/home/projects/one-fab-day-home.png?v=2",
      alt: "One Fab Day homepage and wedding imagery",
      aspectRatio: "3 / 2",
    },
  },
  {
    indexLabel: "02 /",
    title: "Rollercoaster.ie",
    href: "/case-studies/rollercoaster-baby-names",
    summary:
      "Reframed a high-traffic content feature as a more useful product experience.",
    description: "",
    tags: ["PRODUCT STRATEGY", "SEARCH & DISCOVERY", "CONTENT DESIGN"],
    image: {
      foregroundSrc: "/home/projects/rollercoaster-casestudy.png",
      alt: "Rollercoaster.ie Baby Names case study preview image",
      aspectRatio: "1536 / 1024",
    },
  },
  {
    indexLabel: "03 /",
    title: "Knights of Éanna",
    href: "/work/knights-of-eanna",
    summary:
      "Replaced fragmented admin systems with a custom club management system built with AI-assisted workflows.",
    description: "",
    tags: ["SERVICE DESIGN", "WORKFLOW DESIGN", "AI-ASSISTED BUILD"],
    image: {
      foregroundSrc: "/home/projects/chess-club-home",
      alt: "Knights of Éanna CRM interface screenshot",
      frameStyle: "graph-paper",
      aspectRatio: "3 / 2",
    },
  },
  {
    indexLabel: "04 /",
    title: "Vinyl Catalog App",
    href: "/work/vinyl-catalog",
    summary:
      "Designed a clearer way to browse and manage a large personal record collection.",
    description: "",
    tags: ["PRODUCT CONCEPT", "INTERACTION DESIGN", "PROTOTYPING"],
    image: {
      foregroundSrc: "/home/projects/vinyl-app-home.png",
      alt: "Vinyl Catalog App homepage project image",
      aspectRatio: "1520 / 950",
    },
  },
];
