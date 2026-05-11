"use client";
import { useRef } from "react";

export default function useScrollToSection() {
  const sectionRef = useRef(null);

  const handleScrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return { sectionRef, handleScrollToSection };
}
