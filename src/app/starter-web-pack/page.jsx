import StarterWebPack from "@/components/hosting/StarterWebPack/StarterWebPack";

export const metadata = {
  title: "Starter Micro Hosting",
  description:
    "Get best performance cost effective web hosting for you mico business, Fresetup, 24/7 support, web builder, and free upgrade.",
  keywords: [
    "starter micro hosting",
    "affordable web hosting for small business",
    "cheap micro hosting plans",
    "beginner friendly web hosting",
    "low cost hosting with web builder",
    "budget friendly website hosting",
    "free setup micro hosting",
    "small business digital hosting",
    "entry level web hosting services",
    "BFINIT starter web pack",
  ],
  openGraph: {
    title: "Starter Micro Hosting",
    description:
      "Get best performance cost effective web hosting for you mico business, Fresetup, 24/7 support, web builder, and free upgrade.",
    url: "http://localhost:3000/starter-web-pack",
    siteName: "Bfinit",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BFINIT Starter Micro Hosting for Small Businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function page() {
  return (
    <>
      <StarterWebPack />
    </>
  );
}
