export type NavItem = {
  label: string;
  href: string;
  active?: boolean;
  external?: boolean;
};

export type ExpertiseItem = {
  title: string;
  description: string;
};

export type ProjectItem = {
  indexLabel: string;
  title: string;
  href?: string;
  summary: string;
  description: string;
  tags: string[];
  image?: {
    backdropSrc?: string;
    foregroundSrc?: string;
    alt: string;
    frameStyle?: "photo" | "graph-paper";
    aspectRatio?: string;
  };
};
