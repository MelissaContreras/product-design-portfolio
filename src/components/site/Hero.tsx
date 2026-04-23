import { ArrowDown, ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="container-editorial pt-20 md:pt-28 pb-20 md:pb-28">
      <div className="reveal">
        <p className="eyebrow">Product Designer · UX/UI · Data-Driven Design</p>
      </div>

      <h1 className="reveal reveal-delay-1 mt-8 font-serif text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-[-0.02em] max-w-[18ch]">
        Designing clarity<br />in complex<br />systems
      </h1>

      <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
        <p className="reveal reveal-delay-2 md:col-span-7 text-base md:text-lg leading-relaxed text-foreground/75 max-w-2xl">
          Product Designer bridging UX and Data Analytics to simplify high volume systems and enable better product decisions across omnichannel ecosystems.
        </p>

        <div className="reveal reveal-delay-3 md:col-span-5 flex flex-wrap gap-3 md:justify-end">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Case Studies
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="/cv.pdf"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
            style={{ borderColor: "hsl(var(--hairline))" }}
          >
            Download Resume
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="reveal reveal-delay-4 mt-20 grid grid-cols-2 md:grid-cols-3 gap-px hairline pt-10">
        {[
          { k: "3+", v: "Years in product" },
          { k: "B2B / B2C", v: "Ecommerce ecosystems" },
          { k: "Omnichannel", v: "Retail + Digital" },
        ].map((s) => (
          <div key={s.v} className="px-2 md:px-6 first:pl-0">
            <div className="font-serif text-3xl md:text-4xl">{s.k}</div>
            <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground mt-2">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
