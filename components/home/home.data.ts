import type { ExpertiseItem, NavItem, ProjectItem } from "./home.types";

export type SiteNavKey = "case-study" | "about" | "contact" | null;

const LINKEDIN_HREF = "https://www.linkedin.com/in/susanbgallagher/";

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
    indexLabel: "01 / FOUNDER",
    title: "One Fab Day",
    href: "/case-studies/one-fab-day",
    summary:
      "Founder-led product and commercial judgement behind an acquired digital business.",
    description:
      "A luxury wedding brand and digital platform that grew into a major commercial success and was acquired by a prominent media company.",
    tags: ["PRODUCT DESIGN", "BRAND BUILDING", "COMMERCIAL UX STRATEGY"],
    image: {
      foregroundSrc: "/home/projects/one-fab-day-home.png?v=2",
      alt: "One Fab Day homepage and wedding imagery",
      aspectRatio: "3 / 2",
    },
  },
  {
    indexLabel: "02 / PRODUCT DESIGN & STRATEGY",
    title: "Rollercoaster.ie Baby Names",
    href: "/case-studies/rollercoaster-baby-names",
    summary:
      "Turning proven parenting editorial demand into a structured product concept shaped by content modelling, search behaviour and commercial constraints.",
    description:
      "A selected case study in designing a searchable baby names experience within an existing CMS: connecting editorial traffic, repeat discovery, sponsor value and maintainable content structure.",
    tags: [
      "SEARCH & FILTER UX",
      "CONTENT MODELLING",
      "COMMERCIAL PRODUCT THINKING",
    ],
  },
  {
    indexLabel: "03 / PRODUCT DESIGN & BUILD",
    title: "Knights of Éanna",
    href: "/work/knights-of-eanna",
    summary:
      "AI-assisted product development applied to a complex operational system, with attention to data, permissions, privacy, UI quality and real-world use.",
    description:
      "A custom club management system built with AI-assisted workflows, designed to manage complex membership operations - from households and guardians to renewals, consent and admin follow-up.",
    tags: ["PRIVACY WORKFLOW DESIGN", "AI ADMIN COPILOT"],
    image: {
      foregroundSrc: "/home/projects/chess-club-crm.png",
      alt: "Knights of Éanna CRM interface screenshot",
      frameStyle: "graph-paper",
      aspectRatio: "3 / 2",
    },
  },
  {
    indexLabel: "04 / MOBILE & INTERACTION DESIGN",
    title: "Vinyl Catalog App",
    href: "/work/vinyl-catalog",
    summary:
      "AI product thinking, visual design and prototyping applied to a practical, everyday discovery task.",
    description:
      "An AI-assisted mobile product that helps users catalogue their vinyl collection from photos, with a polished browsing experience built around motion, microinteractions and tactile product states.",
    tags: ["AI-ASSISTED CATALOG", "MOTION UI"],
    image: {
      foregroundSrc: "/home/projects/vinyl-app-home.png",
      alt: "Vinyl Catalog App homepage project image",
      aspectRatio: "1520 / 950",
    },
  },
];
