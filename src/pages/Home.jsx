import Features from "../components/ui/Features";
import HowItWorks from "../components/ui/HowItWorks";
import Hero from "../components/ui/Hero";
import BackgroundGradient from "../components/ui/BackgroundGradient";
import BackgroundPattern from "../components/ui/BackgroundPattern";
import CTA from "../components/ui/Cta";

function Home() {
  return (
    <>
      <BackgroundGradient />
      <BackgroundPattern />

      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
    </>
  );
}

export default Home;
