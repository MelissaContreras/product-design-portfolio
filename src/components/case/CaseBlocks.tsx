import { ReactNode, useState, useEffect } from "react";

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

const findImageByLabel = (label: string): string | null => {
  const normalizedLabel = label.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();
  
  const availableImages: [string, string][] = [
    ["add-to-cart clarity — mockup", "Add-to-Cart Clarity — mockup.jpg"],
    ["akeneo interface", "Akeneo Interface.jpg"],
    ["authentication timing — mockup", "Authentication Timing — mockup.jpg"],
    ["benchmarking — louis vuitton · massimo dutti · stradivarius", "Benchmarking — Louis Vuitton · Massimo Dutti · Stradivarius.jpg"],
    ["caratula card pim", "Caratula CARD PIM.jpg"],
    ["caratula card donna view", "caratula Card Donna View.jpg"],
    ["caratula card dashboards", "CARATULA CARD DASHBOARDs.jpg"],
    ["cart visibility — mockup", "Cart Visibility — mockup.jpg"],
    ["category structure — mockup", "Category Structure — mockup.jpg"],
    ["checkout flow — mockup", "Checkout Flow — mockup.jpg"],
    ["confirmation experience — mockup", "Confirmation Experience — mockup.jpg"],
    ["control tower dashboard — optimized version", "Control Tower dashboard — Optimized version.jpg"],
    ["elements of guided onboarding", "Elements of guided onboarding.jpg"],
    ["entry & brand selection — mockup", "Entry & Brand Selection — mockup.jpg"],
    ["filter integration — mockup", "Filter Integration — mockup.jpg"],
    ["full onboarding screen", "Full onboarding screen.jpg"],
    ["guidelines regarding image requirements", "Guidelines regarding image requirements.jpg"],
    ["hero image placeholder", "Hero image placeholder.jpg"],
    ["initial dashboard — fragmented version", "Initial dashboard — fragmented version.jpg"],
    ["larger alerts", "Larger alerts.jpg"],
    ["optimized dashboard — english version", "Optimized dashboard — English version.jpg"],
    ["optimized dashboard — spanish version", "Optimized dashboard — Spanish version.jpg"],
    ["original intranet", "Original Intranet.jpg"],
    ["payment prioritization — mockup", "Payment Prioritization — mockup.jpg"],
    ["personal data form — mockup", "Personal Data Form — mockup.jpg"],
    ["phone screen 1", "Phone screen 1.png"],
    ["phone screen 2", "Phone screen 2.png"],
    ["phone screen 3", "Phone screen 3.png"],
    ["photo", "Photo.jpg"],
    ["pre-load preview interface", "Pre-load preview interface.jpg"],
    ["product detail focus — mockup", "Product Detail Focus — mockup.jpg"],
    ["product grid simplification — mockup", "Product Grid Simplification — mockup.jpg"],
    ["purchase summary — mockup", "Purchase Summary — mockup.jpg"],
    ["registration flow — mockup", "Registration Flow — mockup.jpg"],
    ["smartphone ownership & mobile purchases by generation — chart", "Smartphone ownership & mobile purchases by generation — chart.jpg"],
    ["step 1 — log-in", "Step 1 — Log-in.jpg"],
    ["step 2", "Step 2.jpg"],
    ["step 3", "Step 3.jpg"],
    ["step 4", "Step 4.jpg"],
    ["step 5 — confirmation", "Step 5 — Confirmation.jpg"],
    ["user flow diagram — donna moda & l'uomo moda", "User flow diagram — Donna Moda & L'UOMO MODA.jpg"],
    ["visual navigation — mockup", "Visual Navigation — mockup.jpg"],
    ["wireframes — sign-up & log-in flows", "Wireframes — sign-up & log-in flows.jpg"],
  ];

  for (const [key, filename] of availableImages) {
    const normalizedKey = key.toLowerCase();
    if (normalizedLabel.includes(normalizedKey) || normalizedKey.includes(normalizedLabel)) {
      return `/images/${filename}`;
    }
  }
  return null;
};

export const Placeholder = ({ ratio = "16/9", label = "Image Placeholder" }: { ratio?: string; label?: string }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const src = findImageByLabel(label);
    if (src) {
      // Verify the image exists
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setIsLoading(false);
      };
      img.onerror = () => {
        setImageSrc(null);
        setIsLoading(false);
      };
      img.src = src;
    } else {
      setImageSrc(null);
      setIsLoading(false);
    }
  }, [label]);

  if (imageSrc && !isLoading) {
    return (
      <div
        className="w-full overflow-hidden rounded-lg flex items-center justify-center"
        style={{ aspectRatio: ratio, background: "#F5F5F5" }}
      >
        <img
          src={imageSrc}
          alt={label}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className="image-placeholder w-full"
      style={{ aspectRatio: ratio }}
    >
      <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.18em]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        {label}
      </div>
    </div>
  );
};

export const CaseSection = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) => (
  <section className="py-12 md:py-16 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
    <div className="grid md:grid-cols-12 gap-8">
      <div className="md:col-span-4">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="font-semibold text-2xl md:text-3xl tracking-tight leading-tight">{title}</h2>
      </div>
      <div className="md:col-span-8 space-y-5 text-base md:text-lg leading-relaxed text-foreground/80">
        {children}
      </div>
    </div>
  </section>
);

export const MetricRow = ({ items }: { items: { k: string; v: string }[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-px hairline pt-8 mt-4" style={{ background: "hsl(var(--hairline))" }}>
    {items.map((it) => (
      <div key={it.v} className="bg-background p-5">
        <div className="font-serif text-3xl">{it.k}</div>
        <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground mt-2">{it.v}</div>
      </div>
    ))}
  </div>
);
