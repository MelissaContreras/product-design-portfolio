import { ArrowUpRight, Mail, Linkedin, Download } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-36" style={{ background: "hsl(var(--foreground))", color: "hsl(var(--background))" }}>
      <div className="container-editorial">
        <p className="text-xs uppercase tracking-[0.18em] opacity-60">Let's Work Together</p>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-6 leading-[1.02] max-w-[16ch]">
          Ready to build<br />something great?
        </h2>
        <p className="mt-8 max-w-2xl text-base md:text-lg opacity-75 leading-relaxed">
          Open to product design opportunities where I can contribute to building scalable systems and impactful digital products.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:bg-[hsl(var(--primary-hover))] active:bg-[hsl(var(--primary-active))] transition-colors"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:hello@melissa.design"
            className="inline-flex items-center gap-2 rounded-lg border border-background/30 px-5 py-3 text-sm font-medium hover:bg-background/10 transition-colors"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href="/cv.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-background/30 px-5 py-3 text-sm font-medium hover:bg-background/10 transition-colors"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};
