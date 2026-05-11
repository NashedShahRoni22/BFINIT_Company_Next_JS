import BfinitEcomercePlatform from "@/components/bfinitEcomercePlatform/BfinitEcomercePlatform";

export const metadata = {
  title: "Bfinit Ecommerce Engine | Build & Scale Your Online Store",
  description:
    "Take your business to the next level with Bfinit Ecommerce. Get free pre-built templates, payment integration, and SEO control. Part of the Scotty Pumpkin Web3 Ecosystem.",
  keywords: [
    "Bfinit Ecommerce Platform",
    "Ecommerce Web Builder",
    "Scotty Pumpkin Web3 Ecosystem",
    "Free online store builder",
    "Ecommerce hosting solutions",
    "Payment gateway integration",
    "Pre-built store templates",
  ],
  openGraph: {
    title: "Launch Your Store with Bfinit Ecommerce Platform",
    description:
      "Everything you need to launch and grow: 10,000 products, custom branding, and ultra-fast hosting starting at $10.50/mo.",
    url: "http://localhost:3000/bfinit-ecomerce-platform",
    siteName: "Bfinit",
    images: [
      {
        url: "../../assets/ecommerce/mockup-1.webp",
        width: 1200,
        height: 630,
        alt: "Bfinit Ecommerce Platform Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bfinit Ecommerce | The Next Level of Online Selling",
    description:
      "SEO control, payment integration, and high-performance hosting in one platform.",
    images: ["../../assets/ecommerce/mockup-1.webp"],
  },
};

export default function page() {
  return (
    <>
      <BfinitEcomercePlatform />
    </>
  );
}
