// Auto-resolves image filenames in /public/images by label using fuzzy matching.
// We can't list the public folder at runtime, so we maintain the canonical list here,
// matching the exact filenames currently present on disk (case-sensitive for the URL).

const AVAILABLE_IMAGES: string[] = [
  "Add-to-Cart Clarity — mockup.webp",
  "Akeneo Interface.webp",
  "Authentication Timing — mockup.webp",
  "Benchmarking — Louis Vuitton · Massimo Dutti · Stradivarius.webp",
  "Caratula_card_pim.webp",
  "Cart Visibility — mockup.webp",
  "Category Structure — mockup.webp",
  "Checkout Flow — mockup.webp",
  "Confirmation Experience — mockup.webp",
  "Control Tower dashboard — Optimized version.webp",
  "Elements of guided onboarding.webp",
  "Entry & Brand Selection — mockup.webp",
  "Filter Integration — mockup.webp",
  "Full onboarding screen.webp",
  "Guidelines regarding image requirements.webp",
  "Hero image placeholder.webp",
  "Initial dashboard — fragmented version.webp",
  "Larger alerts.webp",
  "Optimized dashboard — English version.webp",
  "Optimized dashboard — Spanish version.webp",
  "Original Intranet.webp",
  "Payment Prioritization — mockup.webp",
  "Personal Data Form — mockup.webp",
  "Phone screen 1.webp",
  "Phone screen 2.webp",
  "Phone screen 3.webp",
  "Photo.webp",
  "Pre-load preview interface.webp",
  "Product Detail Focus — mockup.webp",
  "Product Grid Simplification — mockup.webp",
  "Purchase Summary — mockup.webp",
  "Registration Flow — mockup.webp",
  "Smartphone ownership & mobile purchases by generation — chart.webp",
  "Step 1 — Log-in.webp",
  "Step 2.webp",
  "Step 3.webp",
  "Step 4.webp",
  "Step 5 — Confirmation.webp",
  "User flow diagram — Donna Moda & L'UOMO MODA.webp",
  "Visual Navigation — mockup.webp",
  "Wireframes — sign-up & log-in flows.webp",
  "caratula_card_Donna_View.webp",
  "caratula_card_dashboards.webp",
];

// Normalize: lowercase, strip extension, remove non-alphanumeric (treat `_`, spaces, dashes, em-dashes equally).
const normalize = (s: string): string =>
  s
    .toLowerCase()
    .replace(/\.(jpg|jpeg|png|webp|gif)$/i, "")
    .replace(/[^a-z0-9]/g, "");

const INDEX: { key: string; filename: string }[] = AVAILABLE_IMAGES.map((filename) => ({
  key: normalize(filename),
  filename,
}));

export const findImageByLabel = (label: string): string | null => {
  const target = normalize(label);
  if (!target) return null;

  // 1. Exact match
  const exact = INDEX.find((e) => e.key === target);
  if (exact) return `/images/${encodeURIComponent(exact.filename)}`;

  // 2. Substring match (either direction), prefer longest key
  const candidates = INDEX.filter(
    (e) => e.key.includes(target) || target.includes(e.key),
  ).sort((a, b) => b.key.length - a.key.length);

  if (candidates.length > 0) {
    return `/images/${encodeURIComponent(candidates[0].filename)}`;
  }

  return null;
};
