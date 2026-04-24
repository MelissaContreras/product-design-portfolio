import { ReactNode, useState, useEffect } from "react";

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

const findImageByLabel = (label: string): string | null => {
  // Normalize the label to match image filenames
  const normalizedLabel = label
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  // List of available images (from the images folder)
  const availableImages = [
    "add-to-cart clarity — mockup",
    "akeneo interface",
    "authentication timing — mockup",
    "benchmarking — louis vuitton · massimo dutti · stradivarius",
    "caratula card pim",
    "caratula card donna view",
    "caratula card dashboards",
    "cart visibility — mockup",
    "category structure — mockup",
    "checkout flow — mockup",
    "confirmation experience — mockup",
    "control tower dashboard — optimized version",
    "elements of guided onboarding",
    "entry & brand selection — mockup",
    "filter integration — mockup",
    "full onboarding screen",
    "guidelines regarding image requirements",
    "hero image placeholder",
    "initial dashboard — fragmented version",
    "larger alerts",
    "optimized dashboard — english version",
    "optimized dashboard — spanish version",
    "original intranet",
    "payment prioritization — mockup",
    "personal data form — mockup",
    "phone screen 1",
    "phone screen 2",
    "phone screen 3",
    "photo",
    "pre-load preview interface",
    "product detail focus — mockup",
    "product grid simplification — mockup",
    "purchase summary — mockup",
    "registration flow — mockup",
    "smartphone ownership & mobile purchases by generation — chart",
    "step 1 — log-in",
    "step 2",
    "step 3",
    "step 4",
    "step 5 — confirmation",
    "user flow diagram — donna moda & l'uomo moda",
    "visual navigation — mockup",
    "wireframes — sign-up & log-in flows",
  ];

  // Try to find a matching image
  for (const imageName of availableImages) {
    const normalizedImage = imageName.toLowerCase();
    // Check if the label contains the image name or vice versa
    if (normalizedLabel.includes(normalizedImage) || normalizedImage.includes(normalizedLabel)) {
      // Return the path to the image
      return `/images/${imageName}.jpg`;
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
      <div className="w-full overflow-hidden rounded-lg" style={{ aspectRatio: ratio }}>
        <img 
          src={imageSrc} 
          alt={label}
          className="w-full h-full object-cover"
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
