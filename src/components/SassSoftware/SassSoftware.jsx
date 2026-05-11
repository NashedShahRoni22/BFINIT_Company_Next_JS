"use client";
import { useRef } from "react";
import Hero from "./Hero/Hero";
import Info from "./Info/Info";
import Products from "./Products/Products";
import Container from "../shared/Container";

export default function SassSoftware() {
  const productRefs = useRef({});

  const scrollToProduct = (id) => {
    if (productRefs.current[id]) {
      productRefs.current[id].scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <Hero scrollToProduct={scrollToProduct} />
      <Info />
      <Products productRefs={productRefs} />
    </Container>
  );
}
