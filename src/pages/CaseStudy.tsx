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
        An internal Product Information Management tool used daily by operations teams to manage thousands of SKUs
        across an omnichannel ecosystem. Aligned with Akeneo standards, the tool needed to scale with the catalog
        while reducing the cognitive load for high-volume contributors.
      </p>
    </CaseSection>

    <CaseSection eyebrow="02" title="Problem">
      <div>
        <h4 className="text-sm uppercase tracking-[0.14em] text-muted-foreground mb-2">Business</h4>
        <p>Inconsistent product data caused publishing errors, channel mismatches, and operational rework.</p>
      </div>
      <div className="mt-6">
        <h4 className="text-sm uppercase tracking-[0.14em] text-muted-foreground mb-2">Users</h4>
        <p>Contributors faced fragmented validation, unclear states, and repetitive tasks across long workflows.</p>
      </div>
    </CaseSection>

    <CaseSection eyebrow="03" title="Strategic Impact">
      <MetricRow
        items={[
          { k: "75%", v: "Validation coverage" },
          { k: "100%", v: "Workflow visibility" },
          { k: "−40%", v: "Rework time" },
          { k: "1×", v: "Single source of truth" },
        ]}
      />
    </CaseSection>

    <CaseSection eyebrow="04" title="Benchmarking">
      <p>
        Audited Akeneo, Salsify, and inriver for validation patterns, attribute modeling, and bulk-edit ergonomics.
        Mapped reusable conventions while identifying gaps where our internal workflows required custom logic.
      </p>
    </CaseSection>

    <CaseSection eyebrow="05" title="Interview Findings">
      <ul className="space-y-3 list-disc pl-5">
        <li>Contributors lacked confidence about which fields were ready for publication.</li>
        <li>Errors were discovered late, after handoff to channel managers.</li>
        <li>Bulk operations were the most frequent action, yet the least supported.</li>
      </ul>
    </CaseSection>

    <CaseSection eyebrow="06" title="Solution">
      <p>
        A unified validation layer with inline guidance, channel-aware status indicators, and a redesigned bulk
        editor. The system communicates readiness at a glance and prevents invalid states before they propagate.
      </p>
    </CaseSection>

    <div className="py-12 md:py-16 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <Placeholder ratio="16/9" label="Solution overview placeholder" />
    </div>

    <CaseSection eyebrow="07" title="Business Value">
      <p>
        Fewer publishing errors, faster onboarding for new contributors, and a foundation that scales with catalog
        growth. The redesign turned PIM from an operational bottleneck into a reliable system of record.
      </p>
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
      <Placeholder ratio="16/9" label="Hero visual placeholder" />
    </div>

    <CaseSection eyebrow="01" title="Context">
      <p>A mobile-first e-commerce experience for a fashion brand with a growing digital audience.</p>
    </CaseSection>

    <CaseSection eyebrow="02" title="Challenge">
      <p>Improve product discovery and reduce friction across the browse-to-purchase flow.</p>
    </CaseSection>

    <CaseSection eyebrow="03" title="Benchmarking">
      <p>Reviewed best-in-class fashion apps for navigation, filtering, PDP layout, and checkout patterns.</p>
    </CaseSection>

    <CaseSection eyebrow="04" title="Key Insights">
      <ul className="space-y-3 list-disc pl-5">
        <li>Users browse by mood and category, not just by attribute.</li>
        <li>Visual hierarchy on the PDP drives confidence and conversion.</li>
        <li>Filters and sort must remain reachable without losing scroll position.</li>
      </ul>
    </CaseSection>

    <CaseSection eyebrow="05" title="Information Architecture">
      <p>Restructured navigation around shopping intent, with editorial entry points alongside category browsing.</p>
    </CaseSection>

    <CaseSection eyebrow="06" title="Wireframes">
      <p>Low-fidelity flows validated key interactions before committing to visual design.</p>
    </CaseSection>

    <div className="py-12 md:py-16 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <Placeholder ratio="16/9" label="Wireframes placeholder" />
    </div>

    <CaseSection eyebrow="07" title="Final Design">
      <p>A clean, photo-led interface with strong hierarchy, consistent components, and refined motion.</p>
    </CaseSection>

    <div className="py-12 md:py-16 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
      <Placeholder ratio="16/9" label="Final UI placeholder" />
    </div>

    <CaseSection eyebrow="08" title="Impact">
      <MetricRow
        items={[
          { k: "+22%", v: "PDP engagement" },
          { k: "+18%", v: "Add-to-cart" },
          { k: "−25%", v: "Drop-off rate" },
          { k: "4.7", v: "App store rating" },
        ]}
      />
    </CaseSection>
  </>
);

const CaseStudyPage = () => {
  const { slug } = useParams();
  const study = caseStudies.find((c) => c.slug === slug);
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
          <p className="eyebrow">Case Study {study.number}</p>
          <h1 className="font-serif text-5xl md:text-7xl mt-4 leading-[1.02] tracking-[-0.02em] max-w-[18ch]">
            {study.title}
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground/75 leading-relaxed">
            {study.summary}
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
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
            <div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Year</div>
              <div className="text-sm mt-2">{study.year}</div>
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
