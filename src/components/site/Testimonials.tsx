type Testimonial = {
  quote: string;
  name: string;
  role: string;
  relationship: string;
  date: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Melissa combines a sharp design sensibility with a rigorous, data-informed approach. She elevated the conversation in every project she touched.",
    name: "Lead Product Manager",
    role: "Product Manager",
    relationship: "Worked directly with Melissa",
    date: "2024",
  },
  {
    quote:
      "She turns operational chaos into clear, scalable systems. Our PIM workflows are dramatically more reliable thanks to her work.",
    name: "Operations Lead",
    role: "Operations Lead",
    relationship: "Cross-functional partner",
    date: "2024",
  },
  {
    quote:
      "Rare to find a designer who can sit with engineering on data logic and then deliver a beautifully crafted dashboard. Melissa does both.",
    name: "Senior BI Engineer",
    role: "BI / Data Engineer",
    relationship: "Worked with Melissa on dashboards",
    date: "2024",
  },
  {
    quote:
      "Her mentorship raised the bar for the whole design team. She advocates for data-informed thinking without losing the user.",
    name: "Junior Product Designer",
    role: "Product Designer",
    relationship: "Mentored by Melissa",
    date: "2023",
  },
  {
    quote:
      "Strategic, calm under pressure, and genuinely senior. Melissa connects business goals to product decisions in a way few designers do.",
    name: "Head of Digital",
    role: "Head of Digital",
    relationship: "Reporting line",
    date: "2023",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container-editorial py-20 md:py-28">
      <div className="flex items-end justify-between mb-12 md:mb-16">
        <div>
          <p className="eyebrow">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">Words from collaborators</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[hsl(var(--hairline))] border" style={{ borderColor: "hsl(var(--hairline))" }}>
        {testimonials.map((t, i) => (
          <article
            key={i}
            className={`bg-background p-8 md:p-10 flex flex-col ${i === testimonials.length - 1 && testimonials.length % 2 === 1 ? "md:col-span-2" : ""}`}
          >
            <svg width="28" height="20" viewBox="0 0 28 20" className="mb-6 text-foreground/30" fill="currentColor">
              <path d="M0 20V12C0 5.4 4.4 0 11 0v4c-3.3 0-5.5 2.7-5.5 6H11v10H0zm17 0V12c0-6.6 4.4-12 11-12v4c-3.3 0-5.5 2.7-5.5 6H28v10H17z" />
            </svg>
            <p className="font-serif text-xl md:text-2xl leading-snug text-foreground/90 flex-1">
              "{t.quote}"
            </p>
            <div className="mt-8 pt-6 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
              <div className="text-sm font-medium">{t.name}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {t.role} · {t.relationship} · {t.date}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
