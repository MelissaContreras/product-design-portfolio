import { ReactNode } from "react";

export const Placeholder = ({ ratio = "16/9", label = "Image Placeholder" }: { ratio?: string; label?: string }) => (
  <div
    className="image-placeholder w-full"
    style={{ aspectRatio: ratio }}
  >
    <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.18em]">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      {label}
    </div>
  </div>
);

export const CaseSection = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) => (
  <section className="py-12 md:py-16 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
    <div className="grid md:grid-cols-12 gap-8">
      <div className="md:col-span-4">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="font-semibold text-2xl md:text-3xl tracking-tight leading-tight">{title}</h2>
      </div>
      <div className="md:col-span-8 space-y-5 text-base md:text-lg leading-relaxed text-foreground/80">
        {children}
      </div>
    </div>
  </section>
);

export const MetricRow = ({ items }: { items: { k: string; v: string }[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-px hairline pt-8 mt-4" style={{ background: "hsl(var(--hairline))" }}>
    {items.map((it) => (
      <div key={it.v} className="bg-background p-5">
        <div className="font-serif text-3xl">{it.k}</div>
        <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground mt-2">{it.v}</div>
      </div>
    ))}
  </div>
);
