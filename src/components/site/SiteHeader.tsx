import { Link, useLocation } from "react-router-dom";

const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export const SiteHeader = () => {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b" style={{ borderColor: "hsl(var(--hairline))" }}>
      <div className="container-editorial flex items-center justify-between h-16">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-serif text-xl leading-none">Melissa Contreras V.</span>
        </Link>
        <nav className="flex items-center gap-7">
          {nav.map((n) => (
            <a
              key={n.href}
              href={onHome ? n.href.replace("/", "") : n.href}
              className="link-underline text-sm text-foreground/80 hover:text-foreground hidden md:inline-flex"
            >
              {n.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1uyXP_Bn9u7hisFCItcEzBWKIisHK3McS/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="link-underline text-sm font-medium"
          >
            Resume ↗
          </a>
        </nav>
      </div>
    </header>
  );
};
