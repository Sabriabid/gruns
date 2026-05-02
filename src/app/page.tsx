import { ArrowRight } from "lucide-react";
import RevealBoundary from "@/components/v2/RevealBoundary";
import Header from "@/components/v2/Header";
import Hero from "@/components/v2/Hero";
import Marquee from "@/components/v2/Marquee";
import Problem from "@/components/v2/Problem";
import Solution from "@/components/v2/Solution";
import Ingredients from "@/components/v2/Ingredients";
import Science from "@/components/v2/Science";
import Rituel from "@/components/v2/Rituel";
import Transparence from "@/components/v2/Transparence";
import Comparatif from "@/components/v2/Comparatif";
import Waitlist from "@/components/v2/Waitlist";
import Offre from "@/components/v2/Offre";
import FAQ from "@/components/v2/FAQ";
import Footer from "@/components/v2/Footer";
import BigWordmark from "@/components/v2/BigWordmark";
import Btn from "@/components/v2/Btn";

export default function Home() {
  return (
    <RevealBoundary>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Solution />
        <Ingredients />
        <Science />
        <Rituel />
        <Transparence />
        <Comparatif />
        <Waitlist />
        <Offre />
        <FAQ />
        <section className="bg-gomu-cream pb-20 md:pb-28 text-center">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <Btn
              href="/lp/un-sachet?source=homepage"
              className="w-full sm:w-auto"
            >
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
