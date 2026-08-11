import { useEffect } from "react";
import { useT } from "@/i18n/LanguageProvider";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CaseSection, Placeholder, MetricRow } from "@/components/case/CaseBlocks";

const PimContent = () => {
  const t = useT();
  return (
  <>
    <CaseSection title={t("Context")}>
      <p>{t("IXComercio is a SaaS platform used by international brands to manage product catalogs, attributes, prices, and logistics configurations within the Total Commerce digital commerce ecosystem.")}</p>
      <p>{t("I was asked to redesign IXComercio's internal PIM tool to match Akeneo's design system. During the process, I identified an unscoped adoption problem and proposed an interactive onboarding flow that eliminated manual QA training entirely.")}</p>
    </CaseSection>

    <CaseSection title={t("The Problem")}>
      <div>
        <h4 className="text-sm uppercase tracking-[0.14em] text-muted-foreground mb-2">{t("For Business")}</h4>
        <ul className="space-y-2 list-disc pl-5">
          <li>{t("Visual inconsistencies between the intranet and the Akeneo's design system.")}</li>
          <li>{t("Frequent errors in bulk upload processes.")}</li>
        </ul>
      </div>
      <div className="mt-6">
        <h4 className="text-sm uppercase tracking-[0.14em] text-muted-foreground mb-2">{t("For Users")}</h4>
        <ul className="space-y-2 list-disc pl-5">
          <li>{t("Constant reliance on the quality assurance team to train users.")}</li>
        </ul>
      </div>
    </CaseSection>

    <CaseSection title={t("The Challenge: Beyond Visual Consistency")}>
      <p className="italic text-foreground">{t("Turned a visual request into a full system optimization.")}</p>
      <p>{t("I was asked to redesign IXComercio's internal PIM tool to match Akeneo's design system. During the process, I identified an unscoped adoption problem and proposed an interactive onboarding flow that eliminated manual QA training entirely.")}</p>
    </CaseSection>

    <CaseSection title={t("Strategic Impact")}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl border p-6" style={{ borderColor: "hsl(var(--hairline))", background: "hsl(var(--surface-2))" }}>
          <div className="font-serif text-4xl">75%</div>
          <p className="mt-2 text-sm">{t("of users had critical navigation blockers")} <strong>{t("before the redesign")}</strong>.</p>
        </div>
        <div className="rounded-xl border p-6" style={{ borderColor: "hsl(var(--hairline))", background: "hsl(var(--surface-2))" }}>
          <div className="font-serif text-4xl">100%</div>
          <p className="mt-2 text-sm">{t("completed tasks autonomously")} <strong>{t("after the onboarding flow")}</strong>.</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mt-8">
        <div>
          <h4 className="font-medium mb-2">{t("Operational ROI")}</h4>
          <p className="text-sm">{t("The interactive onboarding and async documentation eliminated repetitive one-on-one training sessions, freeing the QA team to focus on higher-value work.")}</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">{t("Zero-error culture")}</h4>
          <p className="text-sm">{t("Preventive validations and alerts before bulk product uploads significantly reduced errors in SKU creation and asset management across the PIM.")}</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">{t("Design for implementation")}</h4>
          <p className="text-sm">{t("I worked directly on top of the dev team's existing code libraries. Every component was implementation-ready from day one, reducing handoff friction and speeding up delivery timelines.")}</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">{t("Systems thinking")}</h4>
          <p className="text-sm">{t("Aligned design decisions with business goals, efficient product creation toward Akeneo, and with the platform's real technical capabilities, resulting in a scalable, consistent solution.")}</p>
        </div>
      </div>
    </CaseSection>

    <CaseSection title={t("Match the visual style of Akeneo PIM")}>
      <p>{t("IXComercio's product upload intranet needed to align with Akeneo PIM's design system: brand colors, typography, UI components, and navigation patterns consistent with the tool.")}</p>
      <div className="grid grid-cols-1 gap-6 mt-4">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">{t("Original Intranet")}</p>
          <Placeholder ratio="16/9" label="Original Intranet" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">{t("Akeneo Interface")}</p>
          <Placeholder ratio="16/9" label="Akeneo Interface" />
        </div>
      </div>
    </CaseSection>

    <CaseSection title={t("Research Strategy: Data for Decision-Making")}>
      <p>{t("To understand the problem from both a technical and operational standpoint, I led a discovery phase combining technical analysis and interviews with internal users.")}</p>
      <div className="grid sm:grid-cols-2 gap-6 mt-4">
        <div>
          <h4 className="font-medium mb-2">{t("Technical audit")}</h4>
          <p className="text-sm">{t("I requested the engineering team's component library to ensure every designed component was fully feasible within the existing architecture and scalable for future features.")}</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">{t("Competitive benchmarking")}</h4>
          <p className="text-sm">{t("I analyzed similar tools to identify effective patterns in data previsualization and preventive alert systems within bulk upload flows.")}</p>
        </div>
      </div>
    </CaseSection>

    <CaseSection title={t("Benchmarking insights")}>
      <div>
        <h4 className="font-medium mb-2">{t("gestionpos.cl")}</h4>
        <ul className="space-y-2 list-disc pl-5">
          <li>{t("Preview before confirming each bulk upload action.")}</li>
        </ul>
      </div>
      <div className="mt-6">
        <h4 className="font-medium mb-2">{t("Zippin")}</h4>
        <ul className="space-y-2 list-disc pl-5">
          <li>{t("Onboarding video at the start of the website, explaining the platform.")}</li>
          <li>{t("Provide documentation in each section of the platform.")}</li>
          <li>{t("Alerts and notifications for missing or erroneous processes.")}</li>
        </ul>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 mt-6">
        <div>
          <h4 className="font-medium mb-2">{t("Stakeholder interviews")}</h4>
          <p className="text-sm">{t("Through interviews with the QA team, I identified that the core value of the platform was generating proprietary SKUs from external integrations with suppliers such as Intcomex.")}</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">{t("Pain Point Mapping")}</h4>
          <p className="text-sm">{t("I used an Affinity map and User persona to categorize the most common errors when uploading images, titles, and attributes.")}</p>
        </div>
      </div>
    </CaseSection>

    <CaseSection title={t("Interview findings")}>
      <h4 className="font-medium">{t("Key research insights")}</h4>
      <p className="text-sm">{t("Users reported moderate satisfaction due to usability issues and complexity in the upload flows.")}</p>

      <div className="mt-4 rounded-xl p-6 md:p-8 text-white" style={{ background: "hsl(var(--foreground))" }}>
        <div className="grid md:grid-cols-[auto_1fr] gap-6 items-start">
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold text-xl mb-4">{t("Ana Carrillo")}</p>
            <div className="aspect-square w-40 rounded-lg overflow-hidden bg-white/5">
              <img
                src="/images/Photo.webp"
                alt="Ana Carrillo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-sm space-y-2 md:pt-10">
            <p>{t("Operations Analyst")}</p>
            <p>{t("30 years old.")}</p>
            <p>{t("Bogotá, Colombia")}</p>
            <p><strong>{t("Experience:")}</strong><br />{t("5 years of experience in software testing.")}</p>
            <p><strong>{t("Industry:")}</strong><br />{t("Works at an e-commerce company selling electronics and home appliances.")}</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-8">
        {[
          "The processable data volume was limited, forcing users to split upload processes into smaller batches.",
          "The platform required a steep learning curve due to its functional complexity.",
          "The platform wasn't intuitive enough to understand on its own.",
          "Priority for async documentation: written format allows for simultaneous reference during operational meetings.",
          "Users were looking for clarity on the platform's landing page: What exactly is the purpose of this tool? What tasks are moving here from Akeneo, and what functionality is staying there?",
          "Terminology Alignment: standardizing naming conventions between the platform and Akeneo to reduce cognitive load and accelerate task efficiency.",
          "Need for a section summarizing all administrator errors.",
        ].map((insight, i) => (
          <div
            key={i}
            className="rounded-xl border bg-card p-5 shadow-sm"
            style={{ borderColor: "hsl(var(--hairline))" }}
          >
            <span className="eyebrow block mb-2">Insight {String(i + 1).padStart(2, "0")}</span>
            <p className="text-sm leading-relaxed text-foreground/80">{insight}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="font-medium mb-3">{t("Key Takeaways")}</h4>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border p-5" style={{ borderColor: "hsl(var(--hairline))" }}>
            <p className="text-sm"><strong>{t("Documentation over Video:")}</strong> {t("interviews revealed a strong preference for written documentation. Users need scannable, text-based guides that allow for quick reference during active workflows or meetings without the disruption of audio or video.")}</p>
          </div>
          <div className="rounded-xl border p-5" style={{ borderColor: "hsl(var(--hairline))" }}>
            <p className="text-sm">{t("Beyond a visual refresh, I transformed a UI task into operational optimization. By integrating interactive guides and contextual documentation, we empowered users to be self-sufficient and significantly reduced reliance on the QA team.")}</p>
          </div>
        </div>
      </div>
    </CaseSection>

    <CaseSection title={t("Strategic Alignment: Key Implementation Measures")}>
      <div>
        <h4 className="font-medium mb-2">{t("Platform Core Purpose")}</h4>
        <p className="text-sm">{t("Product Creation & SKU Generation. This module facilitates the end-to-end process of generating IX Comercio SKUs for all products imported from Intcomex, ensuring data integrity and operational speed.")}</p>
      </div>
      <div className="mt-6">
        <h4 className="font-medium mb-2">{t("Key Areas")}</h4>
        <ol className="list-decimal pl-5 text-sm space-y-1">
          <li>{t("Products")}</li>
          <li>{t("Image Uploads")}</li>
          <li>{t("Titles")}</li>
        </ol>
      </div>
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10 mt-8">
        {/* Row 1 */}
        <div>
          <h4 className="font-medium text-lg md:text-xl mb-3">{t("Visual Improvements")}</h4>
          <ul className="text-sm list-disc pl-5 space-y-1">
            <li>{t("Typography")}</li>
            <li>{t("Colors")}</li>
            <li>{t("An interface design very similar to Akeneo's in terms of style.")}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-lg md:text-xl mb-3">{t("Objective:")}</h4>
          <p className="text-sm font-medium mb-1">{t("Minimizing Cognitive Load")}</p>
          <p className="text-sm">{t("By aligning the visual and interaction patterns with Akeneo, we ensured a familiar environment for the user, making the transition between platforms invisible and intuitive.")}</p>
        </div>

        {/* Row 2 */}
        <div>
          <h4 className="font-medium text-lg md:text-xl mb-3">{t("Functional Improvements")}</h4>
          <ul className="text-sm list-disc pl-5 space-y-1">
            <li>{t("Improve platform interaction.")}</li>
            <li>{t("Display alerts for failed processes or other alerts.")}</li>
            <li>{t("Implement interactive onboarding and documentation.")}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-lg md:text-xl mb-3">{t("Objective:")}</h4>
          <p className="text-sm font-medium mb-1">{t("Intuitive Design for Scalable Adoption")}</p>
          <p className="text-sm">{t("To minimize the need for continuous retraining, I redesigned the platform to be as intuitive as possible, ensuring users can navigate and execute complex tasks with zero friction.")}</p>
        </div>
      </div>
    </CaseSection>

    <CaseSection eyebrow={t("Solution 01")} title={t("A Scalable & Comprehensive UI Kit")}>
      <p>{t("Instead of designing isolated screens, I engineered a system focused on error prevention and operational efficiency.")}</p>
      <p className="text-sm">{t("Developed a component library that inherits Akeneo's visual identity while optimizing IX Comercio's interactions, prioritizing typography and contrast for high-volume data management tasks.")}</p>

      <div className="mt-10">
        <p className="eyebrow mb-3">{t("System")}</p>
        <h3 className="font-serif text-3xl md:text-4xl tracking-tight leading-tight mb-8">{t("Key System Components")}</h3>

        <div>
          <h4 className="font-medium text-lg md:text-xl mb-2">{t("Error Prevention in Critical Workflows")}</h4>
          <p className="text-sm">{t("Contextual Alerts & Data Guardrails: I implemented detailed, real-time prompts specifying technical requirements—such as image dimensions, file size limits, and SKU naming conventions—directly at the point of action. This ensures data integrity and significantly reduces operational friction by preventing errors before they reach the database.")}</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">{t("Larger alerts")}</p>
              <Placeholder ratio="4/3" label="Larger alerts" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">{t("Guidelines regarding image requirements")}</p>
              <Placeholder ratio="4/3" label="Guidelines regarding image requirements" />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h4 className="font-medium text-lg md:text-xl mb-2">{t("Pre-load Preview")}</h4>
          <p className="text-sm">{t("Based on competitive benchmarking, I implemented a visual confirmation stage to audit assets before PIM ingestion. This 'safe-check' prevents downstream data corruption and reduces the need for manual correction cycles.")}</p>
          <div className="mt-6">
            <Placeholder ratio="16/9" label="Pre-load preview interface" />
          </div>
        </div>
      </div>
    </CaseSection>

    <CaseSection eyebrow={t("Solution 02")} title={t("Functional improvement: Interactive onboarding")}>
      <p className="text-sm">{t("A smart onboarding trigger and just-in-time, in-context guidance that accelerate the learning curve and provide real-time support during complex workflows.")}</p>
      <div className="grid sm:grid-cols-2 gap-6 mt-4">
        <div>
          <h4 className="font-medium mb-2">{t("Accelerated Learning Curve")}</h4>
          <p className="text-sm">{t("I implemented a smart onboarding trigger that activates exclusively during the first login. This ensures new users achieve rapid proficiency in complex workflows without obstructing the speed or daily operations of regular users.")}</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">{t("Just-in-Time Support")}</h4>
          <p className="text-sm">{t("I designed real-time guides that accompany users during the bulk-upload process, providing contextual assistance at the exact moment errors typically occur. Additionally, I integrated on-screen documentation within each section to resolve doubts instantly without leaving the workflow.")}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">{t("Elements of guided onboarding")}</p>
          <Placeholder ratio="16/9" label="Elements of guided onboarding" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">{t("Full onboarding screen")}</p>
          <Placeholder ratio="16/9" label="Full onboarding screen" />
        </div>
      </div>
    </CaseSection>

    <CaseSection title={t("Business Value: Operational Efficiency & Scalability")}>
      <p>{t("The impact of the redesign was primarily reflected in")} <strong>{t("increased user autonomy")}</strong>.</p>
      <p><strong>{t("Operational Efficiency:")}</strong> {t("the bottleneck in the QA team was eliminated, allowing them to focus on technical testing rather than user training.")}</p>
      <p><strong>{t("Error Reduction:")}</strong> {t("contextual alerts and standardized terminology reduced errors in bulk upload processes.")}</p>
      <p><strong>{t("Scalability:")}</strong> {t("the new UI Kit allows future features to be integrated without losing the consistency that has been achieved.")}</p>
    </CaseSection>
  </>
  );
};

const InsightCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div
    className="rounded-xl border bg-card p-5 shadow-sm"
    style={{ borderColor: "hsl(var(--hairline))" }}
  >
    <h4 className="font-medium text-sm md:text-base mb-2">{title}</h4>
    <p className="text-sm text-foreground/75 leading-relaxed">{children}</p>
  </div>
);

const SubCaseHeader = ({
  title,
  tags,
  role,
  responsibility,
  scope,
}: {
  title: string;
  tags: string[];
  role: string;
  responsibility: string;
  scope: string;
}) => {
  const t = useT();
  return (
  <div className="space-y-6">
    <h2 className="font-serif text-3xl md:text-4xl tracking-tight leading-tight text-center">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <div>
        <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{t("Role")}</div>
        <div className="text-sm mt-2">{role}</div>
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{t("Responsibility")}</div>
        <div className="text-sm mt-2">{responsibility}</div>
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{t("Scope")}</div>
        <div className="text-sm mt-2">{scope}</div>
      </div>
    </div>
  </div>
  );
};

const DashboardsContent = () => {
  const t = useT();
  return (
  <>
    {/* Scale stat chips */}
    <div className="mt-10 grid grid-cols-4 gap-6 pt-8 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      {[
        { k: "54", v: "Brands" },
        { k: "128", v: "Stores" },
        { k: "11", v: "Countries" },
        { k: "B2B + B2C", v: "Ecosystems" },
      ].map((s) => (
        <div key={s.v}>
          <div className="font-serif text-3xl md:text-4xl">{s.k}</div>
          <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground mt-2">{s.v}</div>
        </div>
      ))}
    </div>

    {/* ===================== CASE 01: OMNICHANNEL DASHBOARD ECOSYSTEM ===================== */}
    <section className="py-12 md:py-16 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <SubCaseHeader
        title={t("Case Study: Omnichannel Dashboard Ecosystem Redesign")}
        tags={["Power BI", "Advanced DAX", "Analytical Modeling", "Retail B2B · B2C", "Omnichannel"]}
        role="Product Designer (Data & Analytics)"
        responsibility="Owned KPI standardization and analytical modeling in Power BI"
        scope="Business dashboard redesign for B2B and B2C ecosystems"
      />
      <div className="mt-10">
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-3 text-center">{t("Optimized version in Spanish")}</p>
        <Placeholder ratio="16/8" label="Optimized dashboard — Spanish version" />
      </div>
    </section>

    <CaseSection title={t("Business Context")}>
      <p>{t("To design a unified analytical experience in Total Commerce that allows international brands to monitor their omnichannel commercial health in a centralized way.")}</p>
      <p>{t("The existing system presented critical issues generating fragmentation in analysis, lack of semantic consistency across teams, and delays in operational decision-making.")}</p>
    </CaseSection>

    <CaseSection title={t("The Strategic Challenge")}>
      <p>{t("The analytical ecosystem presented three systemic issues:")}</p>
      <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
        <li>{t("Fragmented dashboards with no unified structure.")}</li>
        <li>{t("Inconsistent terminology across dashboards.")}</li>
        <li>{t("High cognitive load when interpreting performance.")}</li>
      </ul>
      <p>{t("As a result, comparing metrics required manual effort, and insights were delayed.")}</p>
      <div className="mt-4">
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-3 text-center">{t("Initial Version")}</p>
        <Placeholder ratio="16/8" label="Initial dashboard — fragmented version" />
      </div>
    </CaseSection>

    <CaseSection title={t("Strategic Direction")}>
      <p>{t("I focused on transforming the experience from fragmented reporting into a structured analytical system:")}</p>
      <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
        <li>{t("Centralize analysis into a single dashboard.")}</li>
        <li>{t("Standardize naming conventions.")}</li>
        <li>{t("Reduce cognitive load through structured visualization.")}</li>
        <li>{t("Enable consistent time-based analysis.")}</li>
      </ul>
    </CaseSection>

    <CaseSection title={t("Key Product Decisions")}>
      <div className="grid grid-cols-1 gap-4 mt-2">
        <InsightCard title={t("Centralization over fragmentation")}>{t("Consolidated multiple dashboards into one unified analytical view.")}</InsightCard>
        <InsightCard title={t("Standardization over variability")}>{t("Defined consistent naming conventions across metrics.")}</InsightCard>
        <InsightCard title={t("Clarity over density")}>{t("Reduced visual overload by structuring information hierarchically.")}</InsightCard>
        <InsightCard title={t("Operational + strategic visibility in one layer")}>{t("Designed the dashboard to support both high-level monitoring and detailed analysis.")}</InsightCard>
      </div>
    </CaseSection>

    <CaseSection title={t("Solution Overview")}>
      <p className="font-medium">{t("Unified Analytical Dashboard")}</p>
      <p>{t("The redesigned solution integrates a complete KPI system, including:")}</p>
      <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
        <li>{t("Net Sales")}</li>
        <li>{t("Traffic")}</li>
        <li>{t("Transactions")}</li>
        <li>{t("Average Ticket Value (ATV)")}</li>
        <li>{t("Units per Ticket (UPT)")}</li>
        <li>{t("Average Unit Retail (AUR)")}</li>
        <li>{t("Budget")}</li>
      </ul>
      <p>{t("This allows users to analyze performance holistically without switching between tools.")}</p>
    </CaseSection>

    <CaseSection title={t("Information Architecture & UX Strategy")}>
      <div className="grid sm:grid-cols-2 gap-4 mt-2">
        <InsightCard title={t("Decision-Oriented Exploration")}>{t("Replaced static reports with interactive filtering, enabling dynamic analysis while preserving context.")}</InsightCard>
        <InsightCard title={t("Compliance Monitoring (Strategic Cards)")}>{t("Designed a set of comparison cards to track Sales vs Budget vs Compliance, segmented across key periods (Current Month, Quarter, YTD), using a consistent cutoff (previous day) to ensure reliable performance tracking.")}</InsightCard>
        <InsightCard title={t("Granular Analysis (Audit Table)")}>{t("Implemented a detailed performance table enabling drill-down from Country to Store level, exposing the full KPI set to support fast auditing and anomaly detection.")}</InsightCard>
        <InsightCard title={t("Cognitive Load Reduction")}>{t("Limited visible KPIs and structured them to avoid overwhelming users.")}</InsightCard>
        <InsightCard title={t("Multi-Level Navigation")}>{t("Enabled seamless transitions between:")}<span className="block mt-2">{t("• Country")}</span>
          <span className="block">{t("• Store")}</span>
          <span className="block">{t("• Time dimensions (Year / Month / Week / Day)")}</span>
        </InsightCard>
        <InsightCard title={t("Time Context Standardization")}>{t("Introduced rolling 7-day views and consistent time frameworks for reliable comparisons.")}</InsightCard>
      </div>
    </CaseSection>

    <CaseSection title={t("Analytical Readability")}>
      <div className="grid sm:grid-cols-3 gap-4 mt-2">
        <InsightCard title={t("Typographic Hierarchy")}>{t("Structured text scales to guide visual flow and enhance readability.")}</InsightCard>
        <InsightCard title={t("Chromatic Contrast")}>{t("Applied consistent color patterns to streamline data interpretation.")}</InsightCard>
        <InsightCard title={t("Information Architecture")}>{t("Balanced high-level summaries with detailed tables for multi-level analysis.")}</InsightCard>
      </div>
    </CaseSection>

    <CaseSection title={t("Technical Optimization & Data Modeling")}>
      <p>{t("To ensure optimal performance and fluid navigation, I re-engineered the model.")}</p>
      <div className="grid grid-cols-1 gap-3 mt-2">
        <InsightCard title={t("Implemented Layered measure architecture (Measure Branching) using a logical inheritance principle in DAX")}>
          {""}
        </InsightCard>
        <InsightCard title={t("Introduced a 4-5-4 calendar with Same Store Sales (SSS) logic for consistent retail comparison")}>
          {""}
        </InsightCard>
        <InsightCard title={t("Optimized model relationships for better performance")}>
          {""}
        </InsightCard>
        <InsightCard title={t("Removed redundant calculated columns")}>
          {""}
        </InsightCard>
      </div>
    </CaseSection>

    <CaseSection title={t("Impact")}>
      <div className="grid grid-cols-1 gap-3 mt-2">
        <InsightCard title={t("Efficiency")}>{t("• Reduced dashboards from 5 → 1")}<br />{t("• Decreased time to identify insights by ~30 seconds")}</InsightCard>
        <InsightCard title={t("Analytical Scalability")}>{t("Enabled analyses from regional strategic view down to store-level operations, including day-by-day tracking.")}</InsightCard>
        <InsightCard title={t("Analytical Precision")}>{t("Implemented a 4-5-4 calendar with SSS logic, ensuring fair and consistent comparisons aligned with retail industry standards.")}</InsightCard>
        <InsightCard title={t("Consistency")}>{t("Standardized naming conventions across dashboards.")}</InsightCard>
        <InsightCard title={t("Accessibility")}>{t("Delivered bilingual dashboards (Spanish / English).")}</InsightCard>
      </div>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-3 text-center">{t("Optimized version in English")}</p>
        <Placeholder ratio="16/8" label="Optimized dashboard — English version" />
      </div>
    </CaseSection>

    <CaseSection title={t("Outcome")}>
      <p>{t("The solution transformed a fragmented reporting environment into a centralized, structured analytical product, improving clarity, operational visibility, and decision efficiency.")}</p>
    </CaseSection>

    {/* ===================== CASE 02: OPERATIONAL CONTROL TOWER ===================== */}
    <section className="py-16 md:py-24 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <SubCaseHeader
        title={t("Case Study: Operational Control Tower (Omnichannel)")}
        tags={["Power BI", "Advanced DAX", "Analytical Modeling", "Data-Driven UX", "Omnichannel Logistics"]}
        role="Product Designer (Data & Analytics)"
        responsibility="Redesigned operational metrics and monitoring system for order incidents"
        scope="Operational dashboard design for logistics and customer service teams"
      />
    </section>

    <CaseSection title={t("Business Context")}>
      <p>{t("Customer Service and Logistics teams operated using a basic table-based dashboard to monitor orders with incidents. The process required manual review and lacked structure, making it difficult to quickly identify and act on operational issues.")}</p>
    </CaseSection>

    <CaseSection title={t("The Strategic Challenge")}>
      <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
        <li>{t("Large volume of orders across multiple countries.")}</li>
        <li>Manual identification of incidents ("Novedades").</li>
        <li>{t("Limited visibility into operational status.")}</li>
        <li>{t("Slow reaction times for issue resolution.")}</li>
      </ul>
    </CaseSection>

    <CaseSection title={t("Strategic Direction")}>
      <p>{t("The goal was to transform a static tool into a real-time operational decision system:")}</p>
      <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
        <li>{t("Enable fast identification of orders with incidents.")}</li>
        <li>{t("Structure information around operational workflows.")}</li>
        <li>{t("Reduce time spent scanning and filtering data.")}</li>
        <li>{t("Support action-oriented decision-making.")}</li>
      </ul>
    </CaseSection>

    <CaseSection title={t("Key Product Decisions")}>
      <div className="grid grid-cols-1 gap-4 mt-2">
        <InsightCard title={t("Actionability over passive reporting")}>{t("Designed the dashboard to prioritize decision-making, not just monitoring.")}</InsightCard>
        <InsightCard title={t("Process-based structuring")}>{t("Organized information according to operational flow (Por iniciar procesamiento → En Procesamiento → En Tránsito → Finalizadas).")}</InsightCard>
        <InsightCard title={t("Speed over completeness")}>{t("Prioritized fast detection of issues over displaying all available data.")}</InsightCard>
        <InsightCard title={t("Visibility of exceptions")}>{t("Highlighted anomalies instead of requiring manual discovery.")}</InsightCard>
      </div>
    </CaseSection>

    <CaseSection title={t("Product Strategy and Collaboration")}>
      <div className="grid sm:grid-cols-2 gap-4 mt-2">
        <InsightCard title={t("Stakeholder Management")}>{t("Partnered with the Product Owner to redefine the information architecture, restructuring filters into functional domains (Brand, Order, Alerts, End Customer) aligned with operational workflows.")}</InsightCard>
        <InsightCard title={t("Operational Focus")}>{t("Reframed the dashboard structure around operational workflows, reducing friction in navigation and enabling faster interpretation of order status during daily execution.")}</InsightCard>
      </div>
    </CaseSection>

    <CaseSection title={t("Solution Overview — Control Tower Dashboard")}>
      <p>{t("The redesigned solution includes:")}</p>
      <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
        <li>{t("Segmented process stages (Por iniciar procesamiento, En Procesamiento, En Tránsito, Finalizadas).")}</li>
        <li>{t("Real-time metrics on order status.")}</li>
        <li>{t("Filters to quickly isolate problematic orders.")}</li>
        <li>{t("Structured table for detailed operational tracking.")}</li>
        <li>{t("Optimized search functionality for direct order lookup.")}</li>
        <li>{t("Visual hierarchy system to highlight critical states and exceptions.")}</li>
      </ul>
      <div className="mt-6">
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-3 text-center">{t("Optimized Version")}</p>
        <Placeholder ratio="16/8" label="Control Tower dashboard — Optimized version" />
      </div>
    </CaseSection>

    <CaseSection title={t("UX Strategy")}>
      <div className="grid sm:grid-cols-3 gap-4 mt-2">
        <InsightCard title={t("Operational Funnel")}>{t("Segmented the process into clear stages to reflect how teams manage orders.")}</InsightCard>
        <InsightCard title={t("Optimized Search")}>{t("Introduced direct search capabilities to locate specific orders instantly.")}</InsightCard>
        <InsightCard title={t("Visual Hierarchy")}>{t("Used color and layout to highlight critical states and exceptions.")}</InsightCard>
      </div>
    </CaseSection>

    <CaseSection title={t("Dynamic Metrics & DAX Logic")}>
      <div className="grid sm:grid-cols-2 gap-4 mt-2">
        <InsightCard title={t("Developed dynamic DAX measures to calculate proportions of orders with incidents")}>
          {""}
        </InsightCard>
        <InsightCard title={t("Enabled real-time metric updates based on applied filters")}>
          {""}
        </InsightCard>
      </div>
    </CaseSection>

    <CaseSection title={t("Impact")}>
      <div className="grid grid-cols-1 gap-3 mt-2">
        <InsightCard title={t("Operational Efficiency")}>{t("Reduced time to identify orders with incidents.")}</InsightCard>
        <InsightCard title={t("Adoption")}>{t("Increased usability for logistics and customer service teams.")}</InsightCard>
        <InsightCard title={t("Visibility")}>{t("Enabled real-time monitoring of operational status.")}</InsightCard>
        <InsightCard title={t("Analytical Reliability")}>{t("Ensured consistent metric interpretation through structured logic.")}</InsightCard>
        <InsightCard title={t("Process Clarity")}>{t("Structured operational flow into clearly defined stages.")}</InsightCard>
        <InsightCard title={t("Decision Support")}>{t("Enabled faster identification of issues and action prioritization.")}</InsightCard>
      </div>
    </CaseSection>

    <CaseSection title={t("Outcome")}>
      <p>{t("The Control Tower evolved from a static reporting tool into an action-oriented operational product, enabling faster issue detection and improving response efficiency across teams.")}</p>
    </CaseSection>
  </>
  );
};

const DonnaContent = () => {
  const t = useT();
  return (
  <>
    <CaseSection title={t("Context")}>
      <p>{t("Donna Moda is an online store offering imported accessories from various countries, targeting a high-income audience. Its women's line is branded as")} <strong>{t("DONNA MODA")}</strong>{t(", and its men's line as")} <strong>{t("L'UOMO MODA")}</strong>.
      </p>
      <p>{t("With 9 years of experience in the retail market and a physical presence in Pharmax, Donna Moda has built a loyal customer base of women aged 55+.")}</p>
      <p>{t("After 6 years operating through the web channel, the brand identified the need to expand into a younger, more digitally native segment that uses mobile as its primary shopping channel.")}</p>
    </CaseSection>

    <CaseSection title={t("The Strategic Challenge")}>
      <p>{t("Behavioral analysis revealed that younger users — while interested in both the women's and men's lines for gifting — encountered friction when using the traditional web experience on mobile devices.")}</p>
      <p>
        To capture this segment, a responsive website was not enough; a native solution was required to
        optimize navigation speed and streamline the checkout experience.
      </p>
    </CaseSection>

    <CaseSection title={t("The Strategic Hypothesis")}>
      <p className="italic text-foreground">{t("How might we reduce the entry barrier for this new segment without alienating our current customer base?")}</p>
      <div className="grid sm:grid-cols-3 gap-6 mt-4">
        <div>
          <h4 className="font-medium mb-2">{t("Native-first approach")}</h4>
          <p className="text-sm">{t("I proposed developing a native app focused on mobile accessibility.")}</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">{t("Low-friction shopping")}</h4>
          <p className="text-sm">{t("Transform the shopping experience into a fast, low-friction, few-click process — eliminating visual distractions and enabling seamless touch navigation.")}</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">{t("A dedicated channel")}</h4>
          <p className="text-sm">Allow Donna Moda to establish its own dedicated channel, with information architecture designed around the "on-the-go" purchasing behavior of younger users.</p>
        </div>
      </div>
    </CaseSection>

    <CaseSection title={t("Market Research Supporting the Strategy")}>
      <p><strong>75%</strong> {t("of purchases are made using credit cards, while")} <strong>25%</strong> {t("are made in cash.")}</p>
      <div className="grid sm:grid-cols-2 gap-6 mt-4">
        <div className="rounded-xl p-5" style={{ background: "hsl(var(--surface-2))" }}>
          <p className="text-sm italic">
            "Countries like Chile and Uruguay are leading e-commerce in the region, but Peru is very close to
            catching up and is on the right track," highlighted Gonzalo Peralta, Country Manager of
            TiendaMia.com in Peru.
          </p>
          <p className="text-xs text-muted-foreground mt-3">{t("Source: Perú-Retail · July 10, 2017")}</p>
        </div>
        <div className="rounded-xl p-5" style={{ background: "hsl(var(--surface-2))" }}>
          <p className="text-sm">{t("The predominant lifestyle in the country is that of Modern women, who seek self-fulfillment by balancing their professional lives with their roles as mothers. They stay up to date with fashion and emerging trends, advocate for female empowerment, and seek recognition from society.")}</p>
          <p className="text-xs text-muted-foreground mt-3">{t("(Kotler & Armstrong, 2013)")}</p>
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        <div className="rounded-xl border p-5" style={{ borderColor: "hsl(var(--hairline))" }}>
          <p className="text-sm">{t("A higher proportion of millennials own a smartphone and make online purchases at least once a month.")}</p>
        </div>
        <div className="rounded-xl border p-5" style={{ borderColor: "hsl(var(--hairline))" }}>
          <p className="text-sm">{t("Closely followed by Generation X and Generation Z. The trend for the latter is expected to continue growing, as this group's purchasing power is still relatively limited due to their age.")}</p>
        </div>
      </div>
    </CaseSection>

    <div className="py-8 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-6">{t("Likewise, the proportion of people (segmented by generation) who own a smartphone and those who use it to make online purchases is shown in the image.")}</p>
      <Placeholder ratio="16/9" label="Smartphone ownership & mobile purchases by generation — chart" />
    </div>

    <CaseSection title={t("Benchmarking")}>
      <p>{t("Since Donna Moda offers imported products from various countries to a high-income target audience, I ultimately worked with three benchmark brands:")} <strong>{t("Louis Vuitton")}</strong>,{" "}
        <strong>{t("Massimo Dutti")}</strong>{t(", and")} <strong>{t("Stradivarius")}</strong>.
      </p>
    </CaseSection>

    <div className="py-8 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <Placeholder ratio="21/9" label="Benchmarking — Louis Vuitton · Massimo Dutti · Stradivarius" />
    </div>

    <CaseSection title={t("SWOT Analysis")}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl border p-5" style={{ borderColor: "hsl(var(--hairline))" }}>
          <h4 className="font-medium mb-2">{t("Threats")}</h4>
          <p className="text-sm">{t("Economic shifts caused by the pandemic. Prioritization of essential goods.")}</p>
        </div>
        <div className="rounded-xl border p-5" style={{ borderColor: "hsl(var(--hairline))" }}>
          <h4 className="font-medium mb-2">{t("Strengths")}</h4>
          <p className="text-sm">{t("A well-established customer base that trusts the quality of its products.")}</p>
        </div>
        <div className="rounded-xl border p-5" style={{ borderColor: "hsl(var(--hairline))" }}>
          <h4 className="font-medium mb-2">{t("Weaknesses")}</h4>
          <p className="text-sm">{t("A WordPress template-based website that limits customization and flexibility.")}</p>
        </div>
        <div className="rounded-xl border p-5" style={{ borderColor: "hsl(var(--hairline))" }}>
          <h4 className="font-medium mb-2">{t("Opportunities")}</h4>
          <p className="text-sm">{t("A new, younger audience with purchasing power and high consumption demand, such as the Millennial generation.")}</p>
        </div>
      </div>
    </CaseSection>

    <CaseSection title={t("User Flow")}>
      <p>{t("Two parallel flows were defined for women's and men's brands, covering entry, category browsing, product details, cart, sign-up/log-in, payment, and final purchase confirmation.")}</p>
    </CaseSection>

    <div className="py-8 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <Placeholder height={1500} label="User flow diagram — Donna Moda & L'UOMO MODA" />
    </div>

    <CaseSection title={t("Wireframes")}>
      <p>{t("Two flows were prototyped: the first when the user signs up, and the second when the user logs in.")}</p>
    </CaseSection>

    <div className="py-8 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <Placeholder height={4700} label="Wireframes — sign-up & log-in flows" />
    </div>

    <section className="py-12 md:py-16 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <div className="max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl leading-tight">{t("DONNA MODA Experience — Design Decisions")}</h2>
        <p className="mt-5 text-base md:text-lg text-foreground/75 leading-relaxed">{t("Each screen was designed around a specific behavioral insight to reduce friction on mobile. For every decision:")} <em>{t("what we did")}</em>, <em>{t("why it matters")}</em>{t(", and")} <em>{t("the expected impact")}</em>.
        </p>
      </div>

      <div className="mt-12 space-y-12">
        {[
          { t: "Entry & Brand Selection", d: "Present both brands (Donna Moda / L'uomo Moda) at entry. Users approach with a clear intent (self-purchase or gifting).", r: "Early segmentation reduces unnecessary navigation.", i: "Faster path to relevant products." },
          { t: "Category Structure", d: "Organize products into clear, easy-to-scan categories.", r: "Unstructured catalogs increase cognitive load, especially on mobile", i: "Improved product discoverability." },
          { t: "Visual Navigation", d: "Prioritize image-based navigation over text-heavy lists.", r: "Mobile users rely on visual cues for faster decision making.", i: "Reduced browsing time." },
          { t: "Filter Integration", d: "Include filters within the browsing flow.", r: "Large product sets require quick narrowing without disrupting navigation.", i: "More efficient product exploration." },
          { t: "Product Grid Simplification", d: "Display products with minimal information and strong imagery.", r: "Excessive detail creates friction on small screens.", i: "Easier comparison and faster selection." },
          { t: "Product Detail Focus", d: "Highlight essential product information and a clear CTA.", r: "Users need quick validation before purchasing, not overwhelming detail.", i: "Increased purchase confidence." },
          { t: "Add-to-Cart Clarity", d: "Prioritize a single primary action (Add to Cart).", r: "Multiple CTAs dilute user intent.", i: "Increased engagement with purchase actions" },
          { t: "Cart Visibility", d: "Provide immediate access to the cart after adding a product.", r: "Reinforces intent and prevents navigation loss.", i: "Reduced drop-off." },
          { t: "Purchase Summary", d: "Show a clear summary before checkout.", r: "Users need to validate their selection before committing.", i: "Increased trust and fewer errors." },
          { t: "Authentication Timing", d: "Delay login/registration until checkout.", r: "Early authentication creates friction.", i: "Lower abandonment rates." },
          { t: "Registration Flow", d: "Keep registration simple and optional.", r: "Forced commitment discourages new users.", i: "Increased conversion." },
          { t: "Personal Data Form", d: "Minimize required input fields.", r: "Mobile form friction is a major drop-off factor.", i: "Faster completion rates." },
          { t: "Checkout Flow", d: "Reduce checkout to essential steps only.", r: "Long flows increase abandonment.", i: "Higher checkout completion." },
          { t: "Payment Prioritization", d: "Focus on credit card payments.", r: "Majority of users prefer this method.", i: "Smoother transaction process." },
          { t: "Confirmation Experience", d: "Provide a clear and reassuring confirmation screen.", r: "Users need closure and trust reinforcement.", i: "Better post-purchase experience." },
        ].map((it, idx) => (
          <div
            key={it.t}
            className="grid md:grid-cols-12 gap-8 items-start"
          >
            <div className={`md:col-span-7 space-y-4 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl leading-tight">{it.t}</h3>
              <p className="text-base leading-relaxed text-foreground/85">{it.d}</p>
              <p className="text-base leading-relaxed text-foreground/70">{it.r}</p>
              <p className="text-base leading-relaxed font-medium">{it.i}</p>
            </div>
            <div className={`md:col-span-5 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
              <Placeholder ratio="3/4" label={`${it.t} — mockup`} />
            </div>
          </div>
        ))}
      </div>
    </section>

    <CaseSection title={t("Returning User Flow")}>
      <p>{t("The flow if the user is already registered — optimized for speed, with minimal steps from entry to confirmation.")}</p>
    </CaseSection>

    <div className="py-8 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Placeholder ratio="9/19" label="Step 1 — Log-in" />
        <Placeholder ratio="9/19" label="Step 2" />
        <Placeholder ratio="9/19" label="Step 3" />
        <Placeholder ratio="9/19" label="Step 4" />
        <Placeholder ratio="9/19" label="Step 5 — Confirmation" />
      </div>
    </div>
  </>
  );
};

const CaseStudyPage = () => {
  const { slug } = useParams();
  const study = caseStudies.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!study) return <Navigate to="/" replace />;

  const next = caseStudies[(caseStudies.indexOf(study) + 1) % caseStudies.length];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <article className="container-editorial pt-16 md:pt-24 pb-10">
        <Link to="/#work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> {t("Back to work")}</Link>

        <div className="mt-10 reveal">
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-[-0.02em] max-w-[18ch]">
            {study.title}
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground/75 leading-relaxed">
            {study.summary}
          </p>

          {study.slug !== "dashboards" && (
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
              <div>
                <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{t("Role")}</div>
                <div className="text-sm mt-2">{study.role}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{t("Responsibility")}</div>
                <div className="text-sm mt-2">
                  {study.slug === "pim-system" && (<>{t("Research - Visual System")}<br />{t("Onboarding Design - Handoff")}</>)}
                  {study.slug === "donna-moda" && (<>{t("Market Research - Product Strategy - Mobile UI System")}</>)}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{t("Scope")}</div>
                <div className="text-sm mt-2">{study.scope}</div>
              </div>
            </div>
          )}
        </div>

        {study.slug !== "dashboards" && (
          <div className="mt-12">
            {study.slug === "donna-moda" ? (
              <div className="grid grid-cols-3 gap-4">
                <Placeholder ratio="9/19" label="Phone screen 1" />
                <Placeholder ratio="9/19" label="Phone screen 2" />
                <Placeholder ratio="9/19" label="Phone screen 3" />
              </div>
            ) : (
              <Placeholder ratio="16/8" label="Hero image placeholder" />
            )}
          </div>
        )}

        {study.slug === "pim-system" && <PimContent />}
        {study.slug === "dashboards" && <DashboardsContent />}
        {study.slug === "donna-moda" && <DonnaContent />}
      </article>

      <section className="container-editorial py-16 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
        <Link to={`/case/${next.slug}`} className="group block">
          <p className="eyebrow">{t("Next Case")}</p>
          <div className="flex items-end justify-between mt-3">
            <h3 className="font-serif text-4xl md:text-6xl group-hover:opacity-70 transition-opacity">
              {next.title}
            </h3>
            <ArrowUpRight className="h-6 w-6 md:h-10 md:w-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
};

export default CaseStudyPage;
