import { useT } from "@/i18n/LanguageProvider";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { findImageByLabel } from "@/lib/imageMap";

const PreviewVisual = ({ slug, coverImage }: { slug: string; coverImage: string }) => {
  const imageSrc = findImageByLabel(coverImage);
  
  if (imageSrc) {
    return (
      <div className="h-full w-full flex items-center justify-center" style={{ background: "#F5F5F5" }}>
        <img
          src={imageSrc}
          alt={coverImage}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // Fallback to generated visuals if no image found
  if (slug === "pim-system") {
    return (
      <div className="case-media h-full w-full p-6 md:p-10 flex flex-col gap-3" style={{ background: "hsl(35 22% 96%)" }}>
        <div className="flex gap-2">
          <div className="h-2 w-2 rounded-full" style={{ background: "hsl(var(--accent))" }} />
          <div className="h-2 w-2 rounded-full bg-foreground/20" />
          <div className="h-2 w-2 rounded-full bg-foreground/20" />
        </div>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3 rounded-md bg-background/80 border px-3 py-2.5" style={{ borderColor: "hsl(var(--hairline))" }}>
            <div className="h-7 w-7 rounded bg-foreground/5" />
            <div className="flex-1 h-2 rounded bg-foreground/10" style={{ width: `${60 + i * 8}%` }} />
            <div className="h-2 w-10 rounded" style={{ background: i === 1 ? "hsl(var(--accent) / 0.6)" : "hsl(var(--foreground) / 0.1)" }} />
          </div>
        ))}
      </div>
    );
  }
  if (slug === "dashboards") {
    return (
      <div className="case-media h-full w-full p-6 md:p-10 grid grid-cols-3 gap-3" style={{ background: "hsl(220 18% 11%)" }}>
        <div className="col-span-2 rounded-lg p-4 flex flex-col justify-between" style={{ background: "hsl(220 14% 16%)" }}>
          <div className="text-[10px] uppercase tracking-widest text-white/50">Revenue</div>
          <div className="font-serif text-3xl text-white">+46K</div>
          <svg viewBox="0 0 100 30" className="w-full h-10">
            <polyline fill="none" stroke="hsl(14 70% 60%)" strokeWidth="1.5"
              points="0,25 10,22 20,24 30,18 40,20 50,12 60,15 70,8 80,10 90,5 100,7" />
          </svg>
        </div>
        <div className="rounded-lg p-3 flex flex-col gap-2" style={{ background: "hsl(220 14% 16%)" }}>
          <div className="h-1.5 w-3/4 rounded bg-white/20" />
          <div className="h-1.5 w-1/2 rounded bg-white/15" />
          <div className="mt-auto font-serif text-xl text-white">98%</div>
        </div>
        <div className="col-span-3 rounded-lg p-3 flex items-end gap-1" style={{ background: "hsl(220 14% 16%)" }}>
          {[40, 60, 35, 80, 55, 90, 70, 100, 65, 85, 75, 95].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 7 ? "hsl(14 70% 60%)" : "hsl(0 0% 100% / 0.2)" }} />
          ))}
        </div>
      </div>
    );
  }
  // donna-moda
  return (
    <div className="case-media h-full w-full p-6 md:p-10 flex items-center justify-center" style={{ background: "hsl(35 25% 93%)" }}>
      <div className="relative w-44 h-72 rounded-[2rem] bg-background border-[6px] border-foreground/90 overflow-hidden shadow-xl">
        <div className="h-1.5 w-12 rounded-full bg-foreground/80 mx-auto mt-2" />
        <div className="p-3 space-y-2">
          <div className="h-3 w-2/3 rounded bg-foreground/80" />
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="aspect-[3/4] rounded-md" style={{ background: "hsl(14 60% 70%)" }} />
            <div className="aspect-[3/4] rounded-md bg-foreground/10" />
            <div className="aspect-[3/4] rounded-md bg-foreground/10" />
            <div className="aspect-[3/4] rounded-md" style={{ background: "hsl(35 30% 80%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const CaseStudies = () => {
  const t = useT();
  return (
    <section id="work" className="container-editorial py-20 md:py-28">
      <div className="flex items-end justify-between mb-12 md:mb-16">
        <div>
          <p className="eyebrow">{t("Case Studies")}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3">{t("Case Studies")}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {caseStudies.map((c) => (
          <Link
            to={`/case/${c.slug}`}
            key={c.slug}
            className="case-card group"
          >
            <div className="overflow-hidden aspect-[16/8]">
              <PreviewVisual slug={c.slug} coverImage={c.coverImage} />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-end text-xs text-muted-foreground mb-4">
                <span className="inline-flex items-center gap-1 group-hover:text-foreground transition-colors">
                  {t("View Case Study")} <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl leading-tight">{t(c.title)}</h3>
              <p className="mt-3 text-sm md:text-base text-foreground/70 max-w-xl leading-relaxed">{t(c.summary)}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span key={tag} className="pill">{t(tag)}</span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 pt-5 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{t("Role")}</div>
                  <div className="text-sm mt-1">{t(c.role)}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{t("Scope")}</div>
                  <div className="text-sm mt-1">{t(c.scope)}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
