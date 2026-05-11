import CustomVps from "@/components/hosting/CustomVps/CustomVps";

export const metadata = {
  title: "Custom VPS Hosting | Build Your Own High Speed Server",
  description:
    "Design your own VPS server with BFINIT. Choose your RAM, CPU and more. High speed, secure, scalable hosting built to fit your business needs.",
  keywords: [
    "custom VPS hosting",
    "build your own VPS",
    "scalable cloud servers",
    "configurable VPS resources",
    "custom RAM and CPU hosting",
    "on-demand VPS scaling",
    "flexible virtual private servers",
    "tailored server solutions",
    "BFINIT custom hosting",
    "high performance cloud infrastructure",
  ],
  openGraph: {
    title: "Custom VPS Hosting | Build Your Own High Speed Server",
    description:
      "Design your own VPS server with BFINIT. Choose your RAM, CPU and more. High speed, secure, scalable hosting built to fit your business needs.",
    url: "http://localhost:3000/build-your-own-vps",
    siteName: "Bfinit",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custom VPS Builder Interface - BFINIT",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  return (
    <div>
      <CustomVps />
    </div>
  );
}
