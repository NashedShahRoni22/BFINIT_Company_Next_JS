import Pricing from "./Pricing";
import BonusProductHighlight from "@/components/BonusProductHighlight";
import Container from "@/components/shared/Container";
import ProductHero from "@/components/ProductHero";

export default function DedicatedServer() {
  return (
    <Container>
      <section className="py-10 md:py-20">
        {/* <Helmet>
          <title>Powerful Dedicated Servers | Fast, Flexible, Affordable</title>
          <meta
            name="description"
            content="Get fully or self managed dedicated servers from $66/mo. High RAM, multiple IPs, SSD/HDD storage & 0 setup fees. Boost performance with BFINIT servers!"
          />
        </Helmet> */}

        <ProductHero
          title="Your Dedicated Server Needs? Covered!"
          subTitle="If you're looking for a fast, flexible, and affordable solution, our
        dedicated servers are ready to meet your demands!"
        />

        <Pricing />
        <BonusProductHighlight />
      </section>
    </Container>
  );
}
