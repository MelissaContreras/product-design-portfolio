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
    title: "PIM System Redesign",
    summary:
      "Redesign of an internal PIM tool aligned with Akeneo, focused on reducing errors in high-volume workflows through validation and system consistency.",
    tags: ["Design Systems", "SaaS", "Operations", "UX Strategy"],
    role: "Product Designer",
    scope: "UX, System Design, Workflow Optimization",
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
