import WebHosting from "@/components/hosting/WebHosting/WebHosting";

export const metadata = {
  title: "Affordable & Fast Web Hosting | Plans from $4.99/mo",
  description:
    "Launch your website with high speed SSD hosting from just $4.99/month. Free website builder, 0 setup fee, unlimited mailboxes & 24/7 support.",
  keywords: [
    "affordable web hosting",
    "fast SSD hosting",
    "free website builder hosting",
    "unlimited email hosting",
    "cheap web hosting for small business",
    "reliable hosting services",
    "no setup fee hosting",
    "high speed server hosting",
    "managed web hosting",
    "24/7 support hosting",
  ],
  openGraph: {
    title: "Affordable & Fast Web Hosting | Plans from $4.99/mo",
    description:
      "Launch your website with high speed SSD hosting from just $4.99/month. Free website builder, 0 setup fee, unlimited mailboxes & 24/7 support.",
    url: "http://localhost:3000/web-hosting",
    siteName: "Bfinit",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hardware Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  return (
    <>
      <WebHosting />
    </>
  );
}
