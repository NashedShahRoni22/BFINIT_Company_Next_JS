"use client";
import useScrollToSection from "../../hooks/useScrollToSection";
import Container from "../shared/Container";
import Contact from "./Contact/Contact";
import Guidelines from "./Guidelines/Guidelines";
import Hero from "./Hero/Hero";

const EcommerceGuide = () => {
  const { sectionRef, handleScrollToSection } = useScrollToSection();

  return (
    <Container>
      <Hero handleScrollToSection={handleScrollToSection} />
      <Guidelines sectionRef={sectionRef} />
      <Contact />
    </Container>
  );
};

export default EcommerceGuide;
