import React from "react";
import BfiniteWeb3Hero from "./Bfiniteweb3hero/Bfiniteweb3hero";
import SiteShowCase from "./SiteShowcase/SiteShowCase";
import NewPricing from "./NewPricing/NewPricing";
import FreeGifts from "./FreeGifts/FreeGifts";
import Overview from "./Overview/Overview";
import Features from "./Features/Features";
import Compare from "./Compare/Compare";
import SosayPromo from "./SosayPromo/SosayPromo";

const EcommerceHome = () => {
  return (
    <div>
      <BfiniteWeb3Hero />
      <SiteShowCase />
      {/* <NewPricing /> */}
      <FreeGifts />
      <Overview />
      <Features />
      <Compare />
      <SosayPromo />
    </div>
  );
};

export default EcommerceHome;
