// Auto-resolves image filenames in /public/images by label using fuzzy matching.
// We can't list the public folder at runtime, so we maintain the canonical list here,
// matching the exact filenames currently present on disk (case-sensitive for the URL).

const AVAILABLE_IMAGES: string[] = [
  "Add-to-Cart Clarity — mockup.jpg",
  "Akeneo Interface.jpg",
  "Authentication Timing — mockup.jpg",
  "Benchmarking — Louis Vuitton · Massimo Dutti · Stradivarius.png",
  "Caratula_card_pim.jpg",
  "Cart Visibility — mockup.jpg",
  "Category Structure — mockup.jpg",
  "Checkout Flow — mockup.jpg",
  "Confirmation Experience — mockup.jpg",
  "Control Tower dashboard — Optimized version.jpg",
  "Elements of guided onboarding.jpg",
  "Entry & Brand Selection — mockup.jpg",
  "Filter Integration — mockup.jpg",
  "Full onboarding screen.jpg",
  "Guidelines regarding image requirements.png",
  "Hero image placeholder.jpg",
  "Initial dashboard — fragmented version.jpg",
  "Larger alerts.png",
  "Optimized dashboard — English version.jpg",
  "Optimized dashboard — Spanish version.jpg",
  "Original Intranet.jpg",
  "Payment Prioritization — mockup.jpg",
  "Personal Data Form — mockup.jpg",
  "Phone screen 1.png",
  "Phone screen 2.png",
  "Phone screen 3.png",
  "Photo.jpg",
  "Pre-load preview interface.jpg",
  "Product Detail Focus — mockup.jpg",
  "Product Grid Simplification — mockup.jpg",
  "Purchase Summary — mockup.jpg",
  "Registration Flow — mockup.jpg",
  "Smartphone ownership & mobile purchases by generation — chart.jpg",
  "Step 1 — Log-in.jpg",
  "Step 2.jpg",
  "Step 3.jpg",
  "Step 4.jpg",
  "Step 5 — Confirmation.jpg",
  "User flow diagram — Donna Moda & L'UOMO MODA.jpg",
  "Visual Navigation — mockup.jpg",
  "Wireframes — sign-up & log-in flows.jpg",
  "caratula_card_Donna_View.jpg",
  "caratula_card_dashboards.jpg",
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
