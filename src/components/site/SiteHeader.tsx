import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageProvider";
import { CV_LINKS } from "@/lib/cv";
import { LanguageToggle } from "@/components/site/LanguageToggle";

const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export const SiteHeader = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onHome = pathname === "/";
  const { lang, t } = useLanguage();

  const handleNameClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
    }
  };


  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b" style={{ borderColor: "hsl(var(--hairline))" }}>
      <div className="container-editorial flex items-center justify-between h-16">
        <Link to="/" onClick={handleNameClick} className="flex items-baseline gap-2 group">
          <span className="font-serif text-xl leading-none">Melissa Contreras V.</span>
        </Link>
        <nav className="flex items-center gap-7">
          {nav.map((n) => {
            const id = n.href.split("#")[1];
            const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              const scrollToId = () => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              };
              if (onHome) {
                scrollToId();
              } else {
                navigate("/");
                setTimeout(scrollToId, 100);
              }
            };
            return (
              <a
                key={n.href}
                href={n.href}
                onClick={handleClick}
                className="link-underline text-sm text-foreground/80 hover:text-foreground hidden md:inline-flex"
              >
                {t(n.label)}
              </a>
            );
          })}
          <a
            href={CV_LINKS[lang]}
            target="_blank"
            rel="noreferrer"
            className="link-underline text-sm font-medium"
          >
            {t("Resume ↗")}
          </a>
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
};
