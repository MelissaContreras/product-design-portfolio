export const SiteFooter = () => (
  <footer className="border-t mt-32" style={{ borderColor: "hsl(var(--hairline))" }}>
    <div className="container-editorial py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <p className="font-serif text-2xl">Melissa Contreras Villafuerte</p>
        <p className="text-sm text-muted-foreground mt-1">
          Product Designer · UX/UI · Data-Informed Design
        </p>
      </div>
      <div className="flex items-center gap-6 text-sm">
        <a href="https://www.linkedin.com/in/melissa-contreras-villafuerte-63b9b1136/" target="_blank" rel="noreferrer" className="link-underline">LinkedIn</a>
        <a href="mailto:melissacontrerasvillafuerte@gmail.com" className="link-underline">Email</a>
        <a href="https://drive.google.com/file/d/1wrDI-cGFoVktjiFGFo9qgrI8_lUetKJ8/view?usp=drive_link" target="_blank" rel="noreferrer" className="link-underline">Resume</a>
      </div>
    </div>
    <div className="container-editorial pb-8 text-xs text-muted-foreground">
      © {new Date().getFullYear()} Melissa Contreras Villafuerte. All rights reserved.
    </div>
  </footer>
);
