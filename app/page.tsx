import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Plans } from "@/components/Plans";
import { WhyUs } from "@/components/WhyUs";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Calculator } from "@/components/Calculator";
import { Blog } from "@/components/Blog";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Plans />
        <WhyUs />
        <HowItWorks />
        <Testimonials />
        <Calculator />
        <Blog />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
