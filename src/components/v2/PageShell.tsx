import RevealBoundary from "@/components/v2/RevealBoundary";
import AnnouncementBar from "@/components/v2/AnnouncementBar";
import Header from "@/components/v2/Header";
import Footer from "@/components/v2/Footer";
import BigWordmark from "@/components/v2/BigWordmark";

/**
 * Chrome shared by every standalone content page (Carrières, Certifications,
 * Presse, Blog, Contact). Same announcement bar + header + footer + big
 * wordmark as the homepage, but the header runs in its "page" variant so its
 * nav anchors and CTA point back to `/` instead of scrolling the current page.
 */
export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RevealBoundary>
      <AnnouncementBar />
      <Header variant="page" />
      <main>{children}</main>
      <Footer />
      <BigWordmark />
    </RevealBoundary>
  );
}
