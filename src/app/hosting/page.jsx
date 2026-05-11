import HostingHome from "@/components/home/hosting-home/HostingHome";

export const metadata = {
  title: "High-Performance Dedicated & Virtual Servers | BFINIT Hosting",
  description:
    "Experience unparalleled speed and 24/7 support with BFINIT's Virtual and Dedicated server solutions. Plans starting at €4.99. Free setup and no extra renewal fees.",
  keywords: [
    "Dedicated Server Hosting",
    "Virtual Private Server",
    "VPS SSD",
    "High-performance hosting",
    "Web Hosting Solutions",
    "Bitss Security Suite",
    "BFINIT eCommerce Web Builder",
  ],
  openGraph: {
    title: "Reliable Dedicated & Virtual Servers | BFINIT",
    description:
      "Ready in 24 hours. Get up to 5 FREE bonus products including security and payroll tools with our hosting plans.",
    url: "http://localhost:3000/hosting",
    siteName: "BFINIT",
    images: [
      {
        url: "../../assets/server-home/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "BFINIT Hosting Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BFINIT | Professional Hosting Solutions",
    description:
      "Unbeatable pricing for VPS and Dedicated Servers. Fast setup and 24/7 expert support.",
    images: ["/assets/server-home/hero-bg.webp"],
  },
};

export default function Hosting() {
  return (
    <>
      <HostingHome />
    </>
  );
}
