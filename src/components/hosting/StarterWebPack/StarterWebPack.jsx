import Container from "@/components/shared/Container";
import Pricing from "./Pricing";
import ProductHero from "@/components/ProductHero";

export default function StarterWebPack() {
  return (
    <Container>
      <section className="py-10 md:py-20">
        <ProductHero
          title="Starter Micro Hosting"
          subTitle="Get best performance cost effective web hosting for you mico business, Fresetup, 24/7 support, web builder, and free upgrade"
        />
        <Pricing />
      </section>
    </Container>
  );
}
