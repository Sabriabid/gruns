import { ArrowRight } from "lucide-react";
import RevealBoundary from "@/components/v2/RevealBoundary";
import AnnouncementBar from "@/components/v2/AnnouncementBar";
import Header from "@/components/v2/Header";
import Hero from "@/components/v2/Hero";
import Marquee from "@/components/v2/Marquee";
import PressLogos from "@/components/v2/PressLogos";
import FindYourFlavor from "@/components/v2/FindYourFlavor";
import Problem from "@/components/v2/Problem";
import Solution from "@/components/v2/Solution";
import ScrollMorph from "@/components/v2/ScrollMorph";
import Ingredients from "@/components/v2/Ingredients";
import Science from "@/components/v2/Science";
import TastesLike from "@/components/v2/TastesLike";
import Rituel from "@/components/v2/Rituel";
import Transparence from "@/components/v2/Transparence";
import Comparatif from "@/components/v2/Comparatif";
import SocialProofBand from "@/components/v2/SocialProofBand";
import Waitlist from "@/components/v2/Waitlist";
import Offre from "@/components/v2/Offre";
import FAQ from "@/components/v2/FAQ";
import Footer from "@/components/v2/Footer";
import BigWordmark from "@/components/v2/BigWordmark";
import Btn from "@/components/v2/Btn";

/**
 * Full homepage composition, shared by the default landing (`/`) and the
 * color-variant route (`/bordeaux`, which wraps this in `.theme-bordeaux`).
 *
 * `source` is the attribution param appended to the closing CTA so each
 * colorway can be tracked separately.
 */
export default function SiteHome({ source = "homepage" }: { source?: string } = {}) {
  return (
    <RevealBoundary>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <PressLogos />
        <FindYourFlavor />
        <Problem />
        <Solution />
        <ScrollMorph />
        <Ingredients />
        <Science />
        <TastesLike />
        <Rituel />
        <Transparence />
        <Comparatif />
        <SocialProofBand />
        <Waitlist />
        <Offre />
        <FAQ />
        <section className="bg-gomu-cream pb-20 md:pb-28 text-center">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <Btn href={`/lp/un-sachet?source=${source}`} className="w-full sm:w-auto">
              Voir le produit <ArrowRight size={18} />
            </Btn>
          </div>
        </section>
      </main>
      <Footer />
      <BigWordmark />
    </RevealBoundary>
  );
}
