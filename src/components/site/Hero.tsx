import { ArrowDown, ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="container-editorial pt-20 md:pt-28 pb-20 md:pb-28">
      <div className="reveal">
        <p className="eyebrow">Product Designer · UX/UI · Diseño Basado en Datos</p>
      </div>

      <h1 className="reveal reveal-delay-1 mt-8 font-serif text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-[-0.02em] max-w-[18ch]">
        Bridging <em className="italic">UX</em> and <em className="italic">data</em> to simplify high-volume systems.
      </h1>

      <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
        <p className="reveal reveal-delay-2 md:col-span-7 text-base md:text-lg leading-relaxed text-foreground/75 max-w-2xl">
          I'm Melissa — a Product Designer building scalable systems and digital products that improve
          decision-making, reduce operational complexity, and drive clarity in high-volume omnichannel environments.
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
            Download CV
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="reveal reveal-delay-4 mt-20 grid grid-cols-2 md:grid-cols-4 gap-px hairline pt-10">
        {[
          { k: "5+", v: "Years in product" },
          { k: "B2B / B2C", v: "Ecommerce ecosystems" },
          { k: "UX + Data", v: "SQL · Python · BI" },
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
