import { useLanguage, type Lang } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const options: { code: Lang; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
];

export const LanguageToggle = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("Language")}
      className="inline-flex items-center rounded-lg border overflow-hidden"
      style={{ borderColor: "hsl(var(--hairline))" }}
    >
      {options.map((o) => {
        const active = lang === o.code;
        return (
          <button
            key={o.code}
            type="button"
            lang={o.code}
            onClick={() => setLang(o.code)}
            aria-pressed={active}
            aria-label={o.name}
            title={o.name}
            className={cn(
              "px-2.5 py-1 text-xs font-medium tracking-[0.08em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              active
                ? "bg-primary text-primary-foreground"
                : "text-foreground/60 hover:text-foreground",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
};
