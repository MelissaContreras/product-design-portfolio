import { useT } from "@/i18n/LanguageProvider";

type Testimonial = {
  initials: string;
  name: string;
  title: string;
  relationship: string;
  date: string;
  badge: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    initials: "AD",
    name: "Alejandra Díaz",
    title: "Software Engineer · Tech Lead",
    relationship: "Direct supervisor",
    date: "January 2026",
    badge: "Supervisor",
    quote:
      "I had the opportunity to oversee Melissa's work, and it was a very positive experience. She is extremely proactive and committed, always willing to go the extra mile and take ownership of her responsibilities with a great attitude and enthusiasm. She stands out for being detail-oriented and careful in her work — both in design and in Power BI report development — always making sure to deliver quality results. She also has a strong drive to keep learning and improving.",
  },
  {
    initials: "PD",
    name: "Paola De Vega",
    title: "E-commerce, Payments & Product Expert · PMP · Scrum Master",
    relationship: "Direct supervisor",
    date: "January 2026",
    badge: "Supervisor",
    quote:
      "Melissa is a proactive professional with great energy and a solution-oriented mindset. She does thorough research and brings a lot of value to BI projects as a usability lead. She is versatile in web design and a strong addition to any team.",
  },
  {
    initials: "AO",
    name: "Alejandro Orduz",
    title: "UX/UI Designer · Visual Designer · Figma",
    relationship: "Colleague",
    date: "January 2026",
    badge: "Colleague",
    quote:
      "I had the chance to work with Meli — a outstanding UX professional with solid, in-depth knowledge. I particularly want to highlight her excellent teamwork, her expert command of interface design and design systems, and her ability to approach and solve problems clearly and effectively. Without a doubt, a tremendous asset to any team.",
  },
  {
    initials: "PS",
    name: "Patricio Sánchez Alvial",
    title: "Software Engineer · Data & AI",
    relationship: "Same team",
    date: "December 2025",
    badge: "Colleague",
    quote:
      "An excellent designer — autonomous, highly driven, and detail-focused. She consistently improved our dashboards to enhance usability. A wonderful person who would make a meaningful contribution to any company or organization.",
  },
  {
    initials: "JT",
    name: "Jorge Mario Trujillo Díaz",
    title: "Regional Payments Method Coordinator",
    relationship: "Colleague",
    date: "January 2026",
    badge: "Colleague",
    quote:
      "Melissa did an outstanding job bringing clarity to our payment method and sales reports, delivering a clean visual presentation of the key KPIs required by the company's main stakeholders.",
  },
];

export const Testimonials = () => {
  const t = useT();
  return (
    <section id="testimonials" className="container-editorial py-20 md:py-28">
      <div className="flex items-end justify-between mb-12 md:mb-16">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("Testimonials")}</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">{t("Feedback from collaborators")}</h2>
          <p className="mt-4 text-foreground/70 text-base md:text-lg">
            {t("Perspectives from supervisors and cross-functional team members on impact, collaboration, and execution.")}
          </p>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[hsl(var(--hairline))] border"
        style={{ borderColor: "hsl(var(--hairline))" }}
      >
        {testimonials.map((item, i) => (
          <article
            key={i}
            className={`bg-background p-8 md:p-10 flex flex-col ${
              i === testimonials.length - 1 && testimonials.length % 2 === 1 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="h-12 w-12 shrink-0 rounded-full bg-foreground/10 flex items-center justify-center text-sm font-medium tracking-wide">
                {item.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium">{item.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t(item.title)}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {t(item.relationship)} · {t(item.date)}
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-[0.14em] border px-2 py-1 text-foreground/70" style={{ borderColor: "hsl(var(--hairline))" }}>
                {t(item.badge)}
              </span>
            </div>

            <svg width="28" height="20" viewBox="0 0 28 20" className="mb-4 text-foreground/30" fill="currentColor">
              <path d="M0 20V12C0 5.4 4.4 0 11 0v4c-3.3 0-5.5 2.7-5.5 6H11v10H0zm17 0V12c0-6.6 4.4-12 11-12v4c-3.3 0-5.5 2.7-5.5 6H28v10H17z" />
            </svg>
            <p className="font-serif text-lg md:text-xl leading-snug text-foreground/90 flex-1">
              "{t(item.quote)}"
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
