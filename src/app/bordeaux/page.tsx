import type { Metadata } from "next";
import SiteHome from "@/components/v2/SiteHome";

// Color-variant of the landing for A/B testing: same DA, burgundy + beige +
// gold palette (im8-inspired). noindex — it's a duplicate of `/` content.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Bordeaux() {
  return (
    <div className="theme-bordeaux">
      <SiteHome source="bordeaux" />
    </div>
  );
}
