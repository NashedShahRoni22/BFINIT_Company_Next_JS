"use client";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import Overview from "./Overview/Overview";
import Proudcts from "./Prouducts/Proudcts";
import Contact from "./Contact/Contact";
import Faq from "./Faq/Faq";
import DistributorProducts from "./DistributorProducts/DistributorProducts";
import useScrollToSection from "@/hooks/useScrollToSection";
import Container from "../shared/Container";

export default function Reseller() {
  const { sectionRef, handleScrollToSection } = useScrollToSection();

  return (
    <main>
      <Container>
        <Hero handleScrollToSection={handleScrollToSection} />
        <Features />
        {/* <Pricing sectionRef={sectionRef} /> */}
        <DistributorProducts sectionRef={sectionRef} />
        <Overview />
        <Proudcts />
      </Container>
      <Contact />
      <Container>
        <Faq />
      </Container>
    </main>
  );
}
