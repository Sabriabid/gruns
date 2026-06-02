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
import StickyCTA from "@/components/lp-v2/StickyCTA";
import type { LpAngle } from "@/lib/lp-angles";

/**
 * Shared landing-page composition for the 3-angle experiment.
 *
 * EXPERIMENT INVARIANT: only Hero, Marquee, Problem, Solution and Transparence
 * receive angle props. Every other section renders with ZERO props → it is
 * byte-identical across all angles. Do NOT pass angle data to a "shared"
 * section, or the experiment's single-variable control breaks.
 *
 * Same section order as the homepage (src/app/page.tsx), minus the homepage's
 * closing "/lp/un-sachet" CTA — an LP converts on its own in-page Offre.
 */
export default function LandingPage({ angle }: { angle: LpAngle }) {
  return (
    <RevealBoundary>
      <Header />
      <main>
        <Hero
          eyebrow={angle.hero.eyebrow}
          h1={angle.hero.h1}
          subtitle={angle.hero.subtitle}
          ctaHref="#offre"
        />
        <Marquee items={angle.proof.marqueeOrder} />
        <Problem
          eyebrow={angle.problem.eyebrow}
          headline={angle.problem.headline}
          body={angle.problem.body}
          handwritten={angle.problem.handwritten}
          stats={angle.problem.stats}
        />
        <Solution
          eyebrow={angle.benefits.eyebrow}
          headline={angle.benefits.headline}
          intro={angle.benefits.intro}
          order={angle.benefits.order}
        />
        <Ingredients />
        <Science />
        <Rituel />
        <Transparence framingLine={angle.proof.transparenceLine} />
        <Comparatif />
        <Waitlist />
        <Offre />
        <FAQ />
      </main>
      <Footer />
      <BigWordmark />
      <StickyCTA />
    </RevealBoundary>
  );
}
