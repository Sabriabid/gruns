import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PressCarousel from "@/components/sections/PressCarousel";
import Benefits from "@/components/sections/Benefits";
import Statistics from "@/components/sections/Statistics";
import Results from "@/components/sections/Results";
import BuyBox from "@/components/sections/BuyBox";
import Testimonials from "@/components/sections/Testimonials";
import Comparison from "@/components/sections/Comparison";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <PressCarousel />
        <Benefits />
        <Statistics />
        <Results />
        <BuyBox />
        <Testimonials />
        <Comparison />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
