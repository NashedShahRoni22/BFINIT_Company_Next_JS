"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Container from "@/components/shared/Container";
import Heading from "./Heading";
import OrderDetailsCard from "./OrderDetailsCard";
import TokenBreakDown from "./TokenBreakDown";
import ChooseWallet from "./ChooseWallet";
import { ECOM_BASE_URL } from "@/config";

export default function CryptoCheckout() {
  const { packageId, duration: durationQuery } = useParams();
  const [loadingPack, setLoadingPack] = useState(true);
  const [packDetails, setPackDetails] = useState({});

  useEffect(() => {
    const fetchPackageDetails = async () => {
      setLoadingPack(true);
      const res = await fetch(
        `${ECOM_BASE_URL}/api/v1/package/get-single/${packageId}/${durationQuery}`,
      );
      const data = await res.json();
      if (data?.success) setPackDetails(data?.data);
      setLoadingPack(false);
    };
    fetchPackageDetails();
  }, [packageId, durationQuery]);

  const { pricing } = packDetails || {};

  const isYearly = pricing?.duration >= 12;
  const originalPrice = pricing?.selected_month_price;
  const discountAmount = isYearly ? originalPrice * 0.3 : 0;
  const subTotalPrice = originalPrice - discountAmount;
  const perMonthPrice = pricing?.base_price;
  const duration = isYearly ? "1 Year" : "1 Month";

  console.log(packDetails);

  return (
    <main className="py-14 min-h-dvh md:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: heading */}
          <Heading />

          {/* Right: cards */}
          <div className="space-y-3">
            <OrderDetailsCard
              packDetails={packDetails}
              perMonthPrice={perMonthPrice}
              originalPrice={originalPrice}
              discountAmount={discountAmount}
              subTotalPrice={subTotalPrice}
              isYearly={isYearly}
              duration={duration}
            />
            <TokenBreakDown originalPrice={originalPrice} isYearly={isYearly} />
            <ChooseWallet />
          </div>
        </div>
      </Container>
    </main>
  );
}
