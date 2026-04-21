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
        <Waitlist count={247} />
        <Offre />
        <FAQ />
      </main>
      <Footer />
      <BigWordmark />
    </RevealBoundary>
  );
}
