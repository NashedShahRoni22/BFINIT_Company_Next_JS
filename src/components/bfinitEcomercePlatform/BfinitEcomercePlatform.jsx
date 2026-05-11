import React from "react";
import Hero from "./Hero/Hero";
import Container from "../shared/Container";
import NewPricing from "../home/ecommerce-home/NewPricing/NewPricing";
import Features from "./Features/Features";
import FreeWebBuilderHero from "./FreeWebBuilderHero/FreeWebBuilderHero";
import DesignShowCase from "./DesignShowCase/DesignShowCase";
import LaunchFeatures from "./LaunchFeatures/LaunchFeatures";

export default function BfinitEcomercePlatform() {
  return (
    <Container>
      <Hero />
      {/* <NewPricing /> */}
      <Features />
      <FreeWebBuilderHero />
      <DesignShowCase />
      <LaunchFeatures />
    </Container>
  );
}
