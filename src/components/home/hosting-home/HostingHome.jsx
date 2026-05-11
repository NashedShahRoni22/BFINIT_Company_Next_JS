import React from "react";
import HeroNew from "./HeroNew/HeroNew";
import Pricing from "./Pricing/Pricing";
import BonusProductHighlight from "./BonusProductHighlight/BonusProductHighlight";
import Container from "@/components/shared/Container";
import DistributorAffiliation from "./DistributorAffiliation/DistributorAffiliation";
import KeyFeats from "./KeyFeats/KeyFeats";
import ServerCompare from "./ServerCompare/ServerCompare";
import Benefits from "./Benefits/Benefits";
import ServerSection from "./ServerSection/ServerSection";
import Blogs from "./Blogs/Blogs";

export default function HostingHome() {
  return (
    <Container>
      <HeroNew />
      <Pricing />
      <BonusProductHighlight />
      <DistributorAffiliation />
      <KeyFeats />
      <ServerCompare />
      <Benefits />
      <ServerSection />
      <Blogs />
    </Container>
  );
}
