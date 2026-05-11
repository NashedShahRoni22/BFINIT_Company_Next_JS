import VpsHosting from "@/components/hosting/VpsHosting/VpsHosting";

export const metadata = {
  title: "Affordable VPS Hosting | Fully Managed & Self Managed",
  description:
    "Powerful VPS hosting from just $14.50/mo. Choose fully or self-managed plans with SSD storage, DDR4 RAM and 0 setup fee. Scale your server easily!",
  keywords: [
    "affordable VPS hosting",
    "fully managed VPS servers",
    "self managed VPS hosting",
    "SSD VPS storage",
    "DDR4 RAM VPS",
    "scalable virtual private servers",
    "cheap high performance VPS",
    "no setup fee VPS",
    "enterprise VPS solutions",
    "managed server hosting",
  ],
  openGraph: {
    title: "Affordable VPS Hosting | Fully Managed & Self Managed",
    description:
      "Powerful VPS hosting from just $14.50/mo. Choose fully or self-managed plans with SSD storage, DDR4 RAM and 0 setup fee. Scale your server easily!",
    url: "http://localhost:3000/vps-hosting",
    siteName: "Bfinit",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "High-Performance VPS Hosting Plans by Bfinit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  return (
    <>
      <VpsHosting />
    </>
  );
}
