import BonusProductHighlight from "@/components/home/hosting-home/BonusProductHighlight/BonusProductHighlight";
import Container from "@/components/shared/Container";
import ProductHero from "@/components/ProductHero";
import Pricing from "./Pricing";

export default function WebHosting() {
  return (
    <Container>
      <section className="py-10 md:py-20">
        <ProductHero
          title="Your Web Hosting Needs? Covered!"
          subTitle="If you're looking for a fast, flexible and affordable solution, our Web Hosting are ready to meet your demands!"
        />
        <Pricing />
        <BonusProductHighlight />
      </section>
    </Container>
  );
}
