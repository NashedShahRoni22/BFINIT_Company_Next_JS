"use client";
import { useRef } from "react";
import Hero from "./Hero/Hero";
import KeyFeats from "./KeyFeats/KeyFeats";
import Products from "./Products/Products";
import Container from "../shared/Container";

export default function NewWhiteLabel() {
  const sectionRef = useRef(null);

  const handleScrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <Hero handleScrollToSection={handleScrollToSection} />
      <KeyFeats />
      <Products sectionRef={sectionRef} />
    </Container>
  );
}
