import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CaseSection, Placeholder, MetricRow } from "@/components/case/CaseBlocks";

const PimContent = () => (
  <>
    <CaseSection eyebrow="01" title="Context">
      <p>
        IXComercio is a SaaS platform used by international brands to manage product catalogs, attributes,
        prices, and logistics configurations within the Total Commerce digital commerce ecosystem.
      </p>
      <p>
        I was asked to redesign IXComercio's internal PIM tool to match Akeneo's design system. During the
        process, I identified an unscoped adoption problem and proposed an interactive onboarding flow that
        eliminated manual QA training entirely.
      </p>
    </CaseSection>

    <CaseSection eyebrow="02" title="The Problem">
      <div>
        <h4 className="text-sm uppercase tracking-[0.14em] text-muted-foreground mb-2">For Business</h4>
        <ul className="space-y-2 list-disc pl-5">
          <li>Visual inconsistencies between the intranet and the PIM.</li>
          <li>Frequent errors in bulk upload processes.</li>
        </ul>
      </div>
      <div className="mt-6">
        <h4 className="text-sm uppercase tracking-[0.14em] text-muted-foreground mb-2">For Users</h4>
        <ul className="space-y-2 list-disc pl-5">
          <li>Constant reliance on the quality assurance team to train users.</li>
        </ul>
      </div>
    </CaseSection>

    <CaseSection eyebrow="03" title="The Challenge: Beyond Visual Consistency">
      <p className="italic text-foreground">Turned a visual request into a full system optimization.</p>
      <p>
        I was asked to redesign IXComercio's internal PIM tool to match Akeneo's design system. During the
        process, I identified an unscoped adoption problem and proposed an interactive onboarding flow that
        eliminated manual QA training entirely.
      </p>
    </CaseSection>

    <CaseSection eyebrow="04" title="Strategic Impact">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl border p-6" style={{ borderColor: "hsl(var(--hairline))", background: "hsl(var(--surface-2))" }}>
          <div className="font-serif text-4xl">75%</div>
          <p className="mt-2 text-sm">of users had critical navigation blockers <strong>before the redesign</strong>.</p>
        </div>
        <div className="rounded-xl border p-6" style={{ borderColor: "hsl(var(--hairline))", background: "hsl(var(--surface-2))" }}>
          <div className="font-serif text-4xl">100%</div>
          <p className="mt-2 text-sm">completed tasks autonomously <strong>after the onboarding flow</strong>.</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mt-8">
        <div>
          <h4 className="font-medium mb-2">Operational ROI</h4>
          <p className="text-sm">The interactive onboarding and async documentation eliminated repetitive one-on-one training sessions, freeing the QA team to focus on higher-value work.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Zero-error culture</h4>
          <p className="text-sm">Preventive validations and alerts before bulk product uploads significantly reduced errors in SKU creation and asset management across the PIM.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Design for implementation</h4>
          <p className="text-sm">I worked directly on top of the dev team's existing code libraries. Every component was implementation-ready from day one, reducing handoff friction and speeding up delivery timelines.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Systems thinking</h4>
          <p className="text-sm">Aligned design decisions with business goals, efficient product creation toward Akeneo, and with the platform's real technical capabilities, resulting in a scalable, consistent solution.</p>
        </div>
      </div>
    </CaseSection>

    <CaseSection eyebrow="05" title="Match the visual style of Akeneo PIM">
      <p>
        IXComercio's product upload intranet needed to align with Akeneo PIM's design system: brand colors,
        typography, UI components, and navigation patterns consistent with the tool.
      </p>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">Original Intranet</p>
          <Placeholder ratio="4/3" label="Original Intranet" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">Akeneo Interface</p>
          <Placeholder ratio="4/3" label="Akeneo Interface" />
        </div>
      </div>
    </CaseSection>

    <CaseSection eyebrow="06" title="Research Strategy: Data for Decision-Making">
      <p>
        To understand the problem from both a technical and operational standpoint, I led a discovery phase
        combining technical analysis and interviews with internal users.
      </p>
      <div className="grid sm:grid-cols-2 gap-6 mt-4">
        <div>
          <h4 className="font-medium mb-2">Technical audit</h4>
          <p className="text-sm">I requested the engineering team's component library to ensure every designed component was fully feasible within the existing architecture and scalable for future features.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Competitive benchmarking</h4>
          <p className="text-sm">I analyzed similar tools to identify effective patterns in data previsualization and preventive alert systems within bulk upload flows.</p>
        </div>
      </div>
    </CaseSection>

    <CaseSection eyebrow="07" title="Benchmarking insights">
      <div>
        <h4 className="font-medium mb-2">Carga Masiva de Productos</h4>
        <ul className="space-y-2 list-disc pl-5">
          <li>Preview before confirming each bulk upload action.</li>
        </ul>
      </div>
      <div className="mt-6">
        <h4 className="font-medium mb-2">Zippin</h4>
        <ul className="space-y-2 list-disc pl-5">
          <li>Onboarding video at the start of the website, explaining the platform.</li>
          <li>Provide documentation in each section of the platform.</li>
          <li>Alerts and notifications for missing or erroneous processes.</li>
        </ul>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 mt-6">
        <div>
          <h4 className="font-medium mb-2">Stakeholder interviews</h4>
          <p className="text-sm">Through interviews with the QA team, I identified that the core value of the platform was generating proprietary SKUs from external integrations with suppliers such as Intcomex.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Pain Point Mapping</h4>
          <p className="text-sm">I used an Affinity map and User persona to categorize the most common errors when uploading images, titles, and attributes.</p>
        </div>
      </div>
    </CaseSection>

    <CaseSection eyebrow="08" title="Interview findings">
      <h4 className="font-medium">Key research insights</h4>
      <p className="text-sm">Users reported moderate satisfaction due to usability issues and complexity in the upload flows.</p>

      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div className="rounded-xl p-6" style={{ background: "hsl(var(--surface-2))", borderColor: "hsl(var(--hairline))" }}>
          <p className="font-serif text-xl">Ana Carrillo</p>
          <p className="text-xs text-muted-foreground">Operations Analyst · 30 years old · Bogotá, Colombia</p>
          <p className="text-sm mt-3"><strong>Experience:</strong> 5 years in software testing.</p>
          <p className="text-sm mt-2"><strong>Industry:</strong> Works at an e-commerce company selling electronics and home appliances.</p>
        </div>
        <ul className="space-y-3 text-sm">
          <li>The processable data volume was limited, forcing users to split upload processes into smaller batches.</li>
          <li>The platform required a steep learning curve due to its functional complexity.</li>
          <li>The platform wasn't intuitive enough to understand on its own.</li>
          <li>Priority for async documentation: written format allows for simultaneous reference during operational meetings.</li>
          <li>Users were looking for clarity on the platform's landing page: What exactly is the purpose of this tool? What tasks are moving here from Akeneo, and what functionality is staying there?</li>
          <li>Terminology Alignment: standardizing naming conventions between the platform and Akeneo to reduce cognitive load and accelerate task efficiency.</li>
          <li>Need for a section summarizing all administrator errors.</li>
        </ul>
      </div>

      <div className="mt-8">
        <h4 className="font-medium mb-3">Key Takeaways</h4>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border p-5" style={{ borderColor: "hsl(var(--hairline))" }}>
            <p className="text-sm"><strong>Documentation over Video:</strong> interviews revealed a strong preference for written documentation. Users need scannable, text-based guides that allow for quick reference during active workflows or meetings without the disruption of audio or video.</p>
          </div>
          <div className="rounded-xl border p-5" style={{ borderColor: "hsl(var(--hairline))" }}>
            <p className="text-sm">Beyond a visual refresh, I transformed a UI task into operational optimization. By integrating interactive guides and contextual documentation, we empowered users to be self-sufficient and significantly reduced reliance on the QA team.</p>
          </div>
        </div>
      </div>
    </CaseSection>

    <CaseSection eyebrow="09" title="Strategic Alignment: Key Implementation Measures">
      <div>
        <h4 className="font-medium mb-2">Platform Core Purpose</h4>
        <p className="text-sm">Product Creation & SKU Generation. This module facilitates the end-to-end process of generating IX Comercio SKUs for all products imported from Intcomex, ensuring data integrity and operational speed.</p>
      </div>
      <div className="mt-6">
        <h4 className="font-medium mb-2">Key Areas</h4>
        <ol className="list-decimal pl-5 text-sm space-y-1">
          <li>Products</li>
          <li>Image Uploads</li>
          <li>Titles</li>
        </ol>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 mt-6">
        <div>
          <h4 className="font-medium mb-2">Visual Improvements</h4>
          <ul className="text-sm list-disc pl-5 space-y-1">
            <li>Typography</li>
            <li>Colors</li>
            <li>An interface design very similar to Akeneo's in terms of style.</li>
          </ul>
          <p className="text-sm mt-3"><strong>Objective — Minimizing Cognitive Load:</strong> by aligning the visual and interaction patterns with Akeneo, we ensured a familiar environment for the user, making the transition between platforms invisible and intuitive.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Functional Improvements</h4>
          <ul className="text-sm list-disc pl-5 space-y-1">
            <li>Improve platform interaction.</li>
            <li>Display alerts for failed processes or other alerts.</li>
            <li>Implement interactive onboarding and documentation.</li>
          </ul>
          <p className="text-sm mt-3"><strong>Objective — Intuitive Design for Scalable Adoption:</strong> to minimize the need for continuous retraining, I redesigned the platform to be as intuitive as possible, ensuring users can navigate and execute complex tasks with zero friction.</p>
        </div>
      </div>
    </CaseSection>

    <CaseSection eyebrow="10" title="The Solution: A Design System for Zero-Error Execution">
      <p>Instead of designing isolated screens, I engineered a system focused on error prevention and operational efficiency.</p>
      <div className="mt-4">
        <h4 className="font-medium mb-2">A Scalable & Comprehensive UI Kit</h4>
        <p className="text-sm">Developed a component library that inherits Akeneo's visual identity while optimizing IX Comercio's interactions, prioritizing typography and contrast for high-volume data management tasks.</p>
      </div>
      <div className="mt-6">
        <h4 className="font-medium mb-2">Key System Components</h4>
        <p className="text-sm font-medium mt-3">Error Prevention in Critical Workflows</p>
        <p className="text-sm">Contextual Alerts & Data Guardrails: I implemented detailed, real-time prompts specifying technical requirements—such as image dimensions, file size limits, and SKU naming conventions—directly at the point of action. This ensures data integrity and significantly reduces operational friction by preventing errors before they reach the database.</p>
      </div>
    </CaseSection>

    <div className="py-12 md:py-16 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <div className="grid sm:grid-cols-2 gap-6">
        <Placeholder ratio="4/3" label="Larger alerts" />
        <Placeholder ratio="4/3" label="Image requirement guidelines" />
      </div>
    </div>

    <CaseSection eyebrow="11" title="Pre-load Preview">
      <p>
        Based on competitive benchmarking, I implemented a visual confirmation stage to audit assets before
        PIM ingestion. This 'safe-check' prevents downstream data corruption and reduces the need for manual
        correction cycles.
      </p>
    </CaseSection>

    <div className="py-12 md:py-16 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <Placeholder ratio="16/9" label="Pre-load preview interface" />
    </div>

    <CaseSection eyebrow="12" title="Functional improvement: Interactive onboarding">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-2">Accelerated Learning Curve</h4>
          <p className="text-sm">I implemented a smart onboarding trigger that activates exclusively during the first login. This ensures new users achieve rapid proficiency in complex workflows without obstructing the speed or daily operations of regular users.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Just-in-Time Support</h4>
          <p className="text-sm">I designed real-time guides that accompany users during the bulk-upload process, providing contextual assistance at the exact moment errors typically occur. Additionally, I integrated on-screen documentation within each section to resolve doubts instantly without leaving the workflow.</p>
        </div>
      </div>
    </CaseSection>

    <div className="py-12 md:py-16 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <Placeholder ratio="16/9" label="Elements of guided onboarding" />
    </div>

    <CaseSection eyebrow="13" title="Business Value: Operational Efficiency & Scalability">
      <p>The impact of the redesign was primarily reflected in <strong>increased user autonomy</strong>.</p>
      <p><strong>Operational Efficiency:</strong> the bottleneck in the QA team was eliminated, allowing them to focus on technical testing rather than user training.</p>
      <p><strong>Error Reduction:</strong> contextual alerts and standardized terminology reduced errors in bulk upload processes.</p>
      <p><strong>Scalability:</strong> the new UI Kit allows future features to be integrated without losing the consistency that has been achieved.</p>
    </CaseSection>
  </>
);

const DashboardsContent = () => (
  <>
    <CaseSection eyebrow="01" title="Strategic Challenge">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="rounded-xl border p-5" style={{ borderColor: "hsl(var(--hairline))" }}>
          <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Initial</div>
          <p className="mt-2">Fragmented reports, conflicting KPIs, slow operational decisions.</p>
        </div>
        <div className="rounded-xl border p-5" style={{ borderColor: "hsl(var(--hairline))", background: "hsl(var(--surface-2))" }}>
          <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Target</div>
          <p className="mt-2">A unified decision system across the Total Commerce ecosystem.</p>
        </div>
      </div>
    </CaseSection>

    <CaseSection eyebrow="02" title="Information Architecture">
      <p>
        Structured around business questions rather than data sources — Performance, Operations, and Customer.
        Each area maps to specific decisions and owners.
      </p>
    </CaseSection>

    <CaseSection eyebrow="03" title="KPI Structure">
      <p>
        Defined a tiered KPI model: North Star, Driver Metrics, and Health Metrics. Each tier has a clear owner,
        cadence, and visualization pattern.
      </p>
    </CaseSection>

    <CaseSection eyebrow="04" title="Multi-dimensional Navigation">
      <p>
        Multi-dimensional navigation across Geography (Country → Store) and Time (Year → Month → Week → Day),
        with persistent context as users drill down.
      </p>
    </CaseSection>

    <CaseSection eyebrow="05" title="Visual Refinement">
      <p>
        Reduced chart noise, standardized color semantics, and aligned typography with the broader system.
        Every visual element was justified by the question it helped answer.
      </p>
    </CaseSection>

    <CaseSection eyebrow="06" title="DAX Optimization">
      <p>
        Partnered with BI engineering to refactor measures, reducing query latency and unlocking new cross-filter
        combinations without breaking performance budgets.
      </p>
    </CaseSection>

    <CaseSection eyebrow="07" title="Impact">
      <MetricRow
        items={[
          { k: "5→1", v: "Dashboards consolidated" },
          { k: "−30s", v: "Avg. query time" },
          { k: "+46K", v: "Incremental orders" },
          { k: "3×", v: "Decision cadence" },
        ]}
      />
    </CaseSection>

    <CaseSection eyebrow="08" title="Operational Dashboard">
      <p>
        A second surface focused on store-level operations: stock health, fulfillment SLAs, and exception flows.
        Designed for daily use by regional managers.
      </p>
    </CaseSection>

    <div className="py-12 md:py-16 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <Placeholder ratio="16/9" label="Operational dashboard placeholder" />
    </div>

    <CaseSection eyebrow="09" title="Business Impact">
      <p>
        +46K incremental orders attributed to faster, better-informed operational decisions across the network.
      </p>
    </CaseSection>
  </>
);

const DonnaContent = () => (
  <>
    <div className="py-12 md:py-16 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <Placeholder ratio="16/9" label="Donna Moda app — hero mockups" />
    </div>

    <CaseSection eyebrow="01" title="Context">
      <p>
        Donna Moda is an online store offering imported accessories from various countries, targeting a
        high-income audience. Its women's line is branded as <strong>DONNA MODA</strong>, and its men's line
        as <strong>L'UOMO MODA</strong>.
      </p>
      <p>
        With 9 years of experience in the retail market and a physical presence in Pharmax, Donna Moda has
        built a loyal customer base of women aged 55+.
      </p>
      <p>
        After 6 years operating through the web channel, the brand identified the need to expand into a
        younger, more digitally native segment that uses mobile as its primary shopping channel.
      </p>
    </CaseSection>

    <CaseSection eyebrow="02" title="The Strategic Challenge">
      <p>
        Behavioral analysis revealed that younger users — while interested in both the women's and men's
        lines for gifting — encountered friction when using the traditional web experience on mobile devices.
      </p>
      <p>
        To capture this segment, a responsive website was not enough; a native solution was required to
        optimize navigation speed and streamline the checkout experience.
      </p>
    </CaseSection>

    <CaseSection eyebrow="03" title="The Strategic Hypothesis">
      <p className="italic text-foreground">
        How might we reduce the entry barrier for this new segment without alienating our current customer base?
      </p>
      <div className="grid sm:grid-cols-3 gap-6 mt-4">
        <div>
          <h4 className="font-medium mb-2">Native-first approach</h4>
          <p className="text-sm">I proposed developing a native app focused on mobile accessibility.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Low-friction shopping</h4>
          <p className="text-sm">Transform the shopping experience into a fast, low-friction, few-click process — eliminating visual distractions and enabling seamless touch navigation.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">A dedicated channel</h4>
          <p className="text-sm">Allow Donna Moda to establish its own dedicated channel, with information architecture designed around the "on-the-go" purchasing behavior of younger users.</p>
        </div>
      </div>
    </CaseSection>

    <CaseSection eyebrow="04" title="Market Research Supporting the Strategy">
      <p><strong>75%</strong> of purchases are made using credit cards, while <strong>25%</strong> are made in cash.</p>
      <div className="grid sm:grid-cols-2 gap-6 mt-4">
        <div className="rounded-xl p-5" style={{ background: "hsl(var(--surface-2))" }}>
          <p className="text-sm italic">
            "Countries like Chile and Uruguay are leading e-commerce in the region, but Peru is very close to
            catching up and is on the right track," highlighted Gonzalo Peralta, Country Manager of
            TiendaMia.com in Peru.
          </p>
          <p className="text-xs text-muted-foreground mt-3">Source: Perú-Retail · July 10, 2017</p>
        </div>
        <div className="rounded-xl p-5" style={{ background: "hsl(var(--surface-2))" }}>
          <p className="text-sm">
            The predominant lifestyle in the country is that of Modern women, who seek self-fulfillment by
            balancing their professional lives with their roles as mothers. They stay up to date with fashion
            and emerging trends, advocate for female empowerment, and seek recognition from society.
          </p>
          <p className="text-xs text-muted-foreground mt-3">(Kotler & Armstrong, 2013)</p>
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        <div className="rounded-xl border p-5" style={{ borderColor: "hsl(var(--hairline))" }}>
          <p className="text-sm">A higher proportion of millennials own a smartphone and make online purchases at least once a month.</p>
        </div>
        <div className="rounded-xl border p-5" style={{ borderColor: "hsl(var(--hairline))" }}>
          <p className="text-sm">Closely followed by Generation X and Generation Z. The trend for the latter is expected to continue growing, as this group's purchasing power is still relatively limited due to their age.</p>
        </div>
      </div>
    </CaseSection>

    <div className="py-8 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <Placeholder ratio="16/9" label="Smartphone ownership & mobile purchases by generation — chart" />
    </div>

    <CaseSection eyebrow="05" title="Benchmarking">
      <p>
        Since Donna Moda offers imported products from various countries to a high-income target audience,
        I ultimately worked with three benchmark brands: <strong>Louis Vuitton</strong>,{" "}
        <strong>Massimo Dutti</strong>, and <strong>Stradivarius</strong>.
      </p>
    </CaseSection>

    <div className="py-8 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <Placeholder ratio="21/9" label="Benchmarking — Louis Vuitton · Massimo Dutti · Stradivarius" />
    </div>

    <CaseSection eyebrow="06" title="SWOT Analysis">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl border p-5" style={{ borderColor: "hsl(var(--hairline))" }}>
          <h4 className="font-medium mb-2">Threats</h4>
          <p className="text-sm">Economic shifts caused by the pandemic. Prioritization of essential goods.</p>
        </div>
        <div className="rounded-xl border p-5" style={{ borderColor: "hsl(var(--hairline))" }}>
          <h4 className="font-medium mb-2">Strengths</h4>
          <p className="text-sm">A well-established customer base that trusts the quality of its products.</p>
        </div>
        <div className="rounded-xl border p-5" style={{ borderColor: "hsl(var(--hairline))" }}>
          <h4 className="font-medium mb-2">Weaknesses</h4>
          <p className="text-sm">A WordPress template-based website that limits customization and flexibility.</p>
        </div>
        <div className="rounded-xl border p-5" style={{ borderColor: "hsl(var(--hairline))" }}>
          <h4 className="font-medium mb-2">Opportunities</h4>
          <p className="text-sm">A new, younger audience with purchasing power and high consumption demand, such as the Millennial generation.</p>
        </div>
      </div>
    </CaseSection>

    <CaseSection eyebrow="07" title="User Flow">
      <p>
        Two parallel flows were defined for women's and men's brands, covering entry, category browsing,
        product details, cart, sign-up/log-in, payment, and final purchase confirmation.
      </p>
    </CaseSection>

    <div className="py-8 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <Placeholder ratio="4/5" label="User flow diagram — Donna Moda & L'UOMO MODA" />
    </div>

    <CaseSection eyebrow="08" title="Wireframes">
      <p>Two flows were prototyped: the first when the user signs up, and the second when the user logs in.</p>
    </CaseSection>

    <div className="py-8 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <Placeholder ratio="3/4" label="Wireframes — sign-up & log-in flows" />
    </div>

    <section className="py-12 md:py-16 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <div className="max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl leading-tight">DONNA MODA Experience — Design Decisions</h2>
        <p className="mt-5 text-base md:text-lg text-foreground/75 leading-relaxed">
          Each screen was designed around a specific behavioral insight to reduce friction on mobile. For
          every decision: <em>what we did</em>, <em>why it matters</em>, and <em>the expected impact</em>.
        </p>
      </div>

      <div className="mt-12 space-y-12">
        {[
          { t: "Entry & Brand Selection", d: "Present both brands (Donna Moda / L'uomo Moda) at entry. Users approach with a clear intent (self-purchase or gifting).", r: "Early segmentation reduces unnecessary navigation.", i: "Faster path to relevant products." },
          { t: "Category Structure", d: "Organize products in clear, scannable categories.", r: "Unstructured categories increase cognitive load, especially on mobile.", i: "Improved product discoverability." },
          { t: "Visual Navigation", d: "Prioritize image-based navigation over text-heavy lists.", r: "Mobile users rely on visual cues for faster decision making.", i: "Reduced browsing time." },
          { t: "Filter Integration", d: "Include filters within the browsing flow.", r: "Large product sets require quick narrowing without disrupting navigation.", i: "More efficient product exploration." },
          { t: "Product Grid Simplification", d: "Display products with minimal information and strong imagery.", r: "Excessive detail creates friction on small screens.", i: "Easier comparison and faster selection." },
          { t: "Product Detail Focus", d: "Highlight essential product information and a clear CTA.", r: "Users need quick validation before purchasing, not overwhelming detail.", i: "Increased purchase confidence." },
          { t: "Add-to-Cart Clarity", d: "Provide clear cart actions and confirmation.", r: "Ambiguous add-to-cart flows increase abandonment.", i: "Reduced friction in conversion." },
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

    <div className="py-8 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <Placeholder ratio="16/9" label="High-fidelity mockups — DONNA MODA experience" />
    </div>

    <CaseSection eyebrow="10" title="Returning User Flow">
      <p>The flow if the user is already registered — optimized for speed, with minimal steps from entry to confirmation.</p>
    </CaseSection>

    <div className="py-8 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <Placeholder ratio="21/9" label="Returning user flow — log-in to confirmation" />
    </div>
  </>
);

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
          <ArrowLeft className="h-4 w-4" /> Back to work
        </Link>

        <div className="mt-10 reveal">
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-[-0.02em] max-w-[18ch]">
            {study.title}
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground/75 leading-relaxed">
            {study.summary}
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
            <div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Role</div>
              <div className="text-sm mt-2">{study.role}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Responsibility</div>
              <div className="text-sm mt-2">End-to-end</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Scope</div>
              <div className="text-sm mt-2">{study.scope}</div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Placeholder ratio="16/8" label="Hero image placeholder" />
        </div>

        {study.slug === "pim-system" && <PimContent />}
        {study.slug === "dashboards" && <DashboardsContent />}
        {study.slug === "donna-moda" && <DonnaContent />}
      </article>

      <section className="container-editorial py-16 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
        <Link to={`/case/${next.slug}`} className="group block">
          <p className="eyebrow">Next Case</p>
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
