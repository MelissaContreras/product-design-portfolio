export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  tags: string[];
  role: string;
  scope: string;
  year: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "pim-system",
    number: "01",
    title: "IXComercio — PIM Redesign & Onboarding Strategy",
    summary:
      "Redesigned IXComercio's internal PIM tool to match Akeneo's design system, turning a visual request into a full system optimization with an interactive onboarding flow that eliminated manual QA training.",
    tags: ["Design Systems", "SaaS", "Onboarding", "UX Strategy"],
    role: "Product Designer — UX End-to-End",
    scope: "Research · Visual System · Onboarding Design · Handoff",
    year: "2024",
  },
  {
    slug: "dashboards",
    number: "02",
    title: "Analytics Dashboards",
    summary:
      "Design of analytics dashboards to support strategic and operational decision-making across a Total Commerce ecosystem.",
    tags: ["Data Visualization", "BI", "Analytics", "Decision Systems"],
    role: "Product Designer",
    scope: "UX Architecture, KPI Design, Data Logic",
    year: "2024",
  },
  {
    slug: "donna-moda",
    number: "03",
    title: "Donna Moda App",
    summary:
      "Mobile e-commerce experience redesign based on benchmarking, improving product discovery, navigation, and visual hierarchy.",
    tags: ["E-commerce", "Mobile UX", "UX Strategy"],
    role: "Product Designer",
    scope: "UX Design, Benchmarking, Interaction Design",
    year: "2023",
  },
];
