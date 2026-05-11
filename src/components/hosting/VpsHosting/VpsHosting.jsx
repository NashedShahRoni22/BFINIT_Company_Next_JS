import BonusProductHighlight from "@/components/BonusProductHighlight";
import Pricing from "./Pricing";
import ProductHero from "@/components/ProductHero";
import Container from "@/components/shared/Container";

export default function VpsHosting() {
  return (
    <Container>
      <section className="py-10 md:py-20">
        <ProductHero
          title="Your VPS Hosting Needs? Covered!"
          subTitle="If you're looking for a fast, flexible and affordable solution, our VPS
        Hosting are ready to meet your demands!"
        />

        <Pricing />
        <BonusProductHighlight />
      </section>
    </Container>
  );
}
