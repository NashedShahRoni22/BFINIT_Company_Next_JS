"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ECOM_BASE_URL } from "@/config";
import { useParams } from "next/navigation";
import Container from "../shared/Container";
import Heading from "./Heading";
import CheckoutForm from "./CheckoutForm";
import CheckoutSkeleton from "../loader/CheckoutSkeleton";

const currencies = [
  {
    id: "eur",
    label: "Euro",
    symbol: "€",
    icon: (
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
        €
      </span>
    ),
  },
  {
    id: "spump",
    label: "SPUMP",
    icon: (
      <Image
        width={1000}
        height={1000}
        src="https://scottypumpkin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.ecd1dcc2.png&w=640&q=75"
        alt=""
        className="h-4 w-4 rounded-full"
      />
    ),
  },
  {
    id: "usff",
    label: "USFF",
    icon: (
      <Image
        width={1000}
        height={1000}
        src="https://usfranc.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.bdd0bb3c.webp&w=640&q=100"
        alt=""
        className="h-4 w-4 rounded-full"
      />
    ),
  },
  {
    id: "usdc",
    label: "USDC",
    icon: (
      <Image
        width={1000}
        height={1000}
        src="https://assets.coingecko.com/coins/images/6319/small/usdc.png"
        alt=""
        className="h-4 w-4 rounded-full"
      />
    ),
  },
];

export default function Checkout() {
  const { id, duration } = useParams();
  const [packDetails, setPackDetails] = useState(null);
  const [bankInfo, setBankInfo] = useState(null);
  const [loadingPack, setLoadingPack] = useState(true);
  const [loadingBank, setLoadingBank] = useState(true);

  useEffect(() => {
    const fetchPackageDetails = async () => {
      setLoadingPack(true);
      const res = await fetch(
        `${ECOM_BASE_URL}/api/v1/package/get-single/${id}/${duration}`,
      );
      const data = await res.json();
      if (data?.success) setPackDetails(data?.data);
      setLoadingPack(false);
    };
    fetchPackageDetails();
  }, [id, duration]);

  useEffect(() => {
    const fetchBankInfo = async () => {
      setLoadingBank(true);
      const res = await fetch(
        `${ECOM_BASE_URL}/api/v1/platform-bank-payment/get-all`,
      );
      const data = await res.json();
      if (data?.success && data?.data?.length > 0) setBankInfo(data?.data[0]);
      setLoadingBank(false);
    };
    fetchBankInfo();
  }, []);

  const loading = loadingPack || loadingBank;

  let content = null;

  if (loading) {
    content = <CheckoutSkeleton />;
  }

  if (!loading && packDetails?.id) {
    content = (
      <CheckoutForm
        details={packDetails}
        currencies={currencies}
        bankInfo={bankInfo}
      />
    );
  }

  return (
    <section className="pt-28">
      <Container>
        <Heading currencies={currencies} />
        {content}
      </Container>
    </section>
  );
}
