export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  tags: string[];
  role: string;
  scope: string;
  year: string;
  coverImage: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "pim-system",
    number: "01",
    title: "IXComercio — PIM Redesign & Onboarding Strategy",
    summary:
      "Redesigned IXComercio's internal PIM tool to match Akeneo's design system, turning a visual request into a full system optimization with an interactive onboarding flow that eliminated manual QA training.",
    tags: ["Design Systems", "Onboarding", "UX Strategy"],
    role: "Product Designer — UX End-to-End",
    scope: "Redesigned the internal PIM tool to match Akeneo's design system",
    year: "2024",
    coverImage: "Caratula_card_pim",
  },
  {
    slug: "dashboards",
    number: "02",
    title: "Analytics Dashboards",
    summary:
      "Design of analytics dashboards to support strategic and operational decision-making across a Total Commerce ecosystem deployed across 54 brands in 11 countries.",
    tags: ["Data Visualization", "BI", "Analytics", "Decision Systems"],
    role: "Product Designer",
    scope: "UX Architecture, KPI Design, Data Logic",
    year: "2024",
    coverImage: "caratula_card_dashboards",
  },
  {
    slug: "donna-moda",
    number: "03",
    title: "Donna Moda — Native App for a New Generation",
    summary:
      "Comprehensive native app design for Donna Moda & L'UOMO MODA, expanding the brand's reach toward a younger, mobile-first audience through market research, product strategy, and a tailored mobile UI system.",
    tags: ["E-commerce", "Mobile UX", "Product Strategy", "Market Research"],
    role: "Lead Product Designer (UX/UI & Strategy)",
    scope: "Comprehensive design of native applications to expand the brand's reach toward a younger audience.",
    year: "2023",
    coverImage: "caratula_card_Donna_View",
  },
];
