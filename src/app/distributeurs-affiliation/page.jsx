import DistributeAffiliate from "@/components/hosting/DistributeAffiliate/DistributeAffiliate";

export const metadata = {
  title: "Become a Distributor | Earn 30% Recurring Commission | BFIT",
  description:
    "Join the BFIT elite partner network. Sell enterprise-grade hosting solutions with up to 30% recurring commissions, 24/7 support, and premium marketing tools.",
  keywords: [
    "hosting distributor program",
    "affiliate hosting commissions",
    "recurring commission hosting",
    "reseller hosting partner",
    "enterprise infrastructure partner",
  ],
  openGraph: {
    title: "Earn 30% Recurring Commission as a BFIT Distributor",
    description:
      "Promote premium hosting solutions and grow your business with our global partner network.",
    images: ["../../assets/distributor-affiliate/hero.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a BFIT Hosting Partner",
    description:
      "Join 5,000+ partners earning recurring commissions with enterprise-grade infrastructure.",
  },
};

export default function page() {
  return (
    <>
      <DistributeAffiliate />
    </>
  );
}
