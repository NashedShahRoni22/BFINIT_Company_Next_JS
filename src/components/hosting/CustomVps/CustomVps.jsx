"use client";
import { useRef } from "react";
import Hero from "./Hero/Hero";
import Pricing from "./Pricing/Pricing";
import VpsFeats from "./VpsFeats/VpsFeats";
import Container from "@/components/shared/Container";

export default function CustomVps() {
  const sectionRef = useRef(null);

  const handleScrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <section className="py-10 font-roboto">
        <Hero handleScrollToSection={handleScrollToSection} />
        <Pricing sectionRef={sectionRef} />
        <VpsFeats />
      </section>
    </Container>
  );
}
