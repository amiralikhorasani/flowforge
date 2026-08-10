import Features from "../features/landing/Features";
import HowItWorks from "../features/landing/HowItWorks";
import Hero from "../features/landing/Hero";
import BackgroundGradient from "../components/ui/BackgroundGradient";
import BackgroundPattern from "../components/ui/BackgroundPattern";
import CTA from "../features/landing/Cta";

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
