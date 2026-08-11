import { useT } from "@/i18n/LanguageProvider";

export const About = () => {
  const t = useT();
  const paragraphs = [
    "Hi, I'm Melissa. I design with empathy, but I validate with data.",
    "I'm a Product Designer who combines UX and Data to build intuitive, high-impact digital products. I specialize in complex B2B and B2C ecommerce ecosystems, designing seamless omnichannel experiences that connect physical retail and digital platforms.",
    "What I enjoy most is turning complexity into clarity whether that means simplifying high volume workflows or creating consistent, frictionless experiences across touchpoints.",
    "My background in Data Analytics (SQL, Python, BI tools) allows me to go beyond intuition. I use data to understand behavior, validate decisions, and support product strategies with real insights.",
    "In my recent roles, this has also led me to mentor designers and advocate for more data-informed thinking across teams.",
    "Whether I'm structuring information architecture or working with data pipelines, my goal is always the same: build products that improve decision-making and deliver real business value.",
    "Currently, I'm exploring the intersection of AI and design systems, and how emerging technologies are shaping the future of product experiences.",
  ];

  return (
    <section id="about" className="py-20 md:py-28" style={{ background: "hsl(var(--surface-2))" }}>
      <div className="container-editorial grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <p className="eyebrow">{t("About")}</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">
            {t("Designing with empathy, validating with data.")}
          </h2>

          <div className="mt-10 space-y-5">
            {[
              { label: "Disciplines", value: "UX · UI · Systems · Data" },
              { label: "Tools", value: "Figma · SQL · Python · Power BI" },
              { label: "Industries", value: "B2B · B2C · Omnichannel Retail" },
              { label: "Languages", value: "English · Español" },
            ].map((m) => (
              <div key={m.label} className="flex justify-between text-sm border-b pb-3" style={{ borderColor: "hsl(var(--hairline))" }}>
                <span className="text-muted-foreground">{t(m.label)}</span>
                <span className="text-right">{t(m.value)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-5 text-base md:text-lg leading-relaxed text-foreground/80">
          {paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "font-serif text-2xl md:text-3xl text-foreground italic leading-snug" : ""}>
              {t(p)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
