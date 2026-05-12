import About from "@/components/company/About/About";

export const metadata = {
  title: "BFIN SASU – Cybersecurity Research & IT Solutions",
  description:
    "BFIN SASU is French research company offering advanced cybersecurity with Bitss, secure server hosting, SaaS software and e commerce solutions. Explore our global presence and innovation driven mission to protect digital environments.",
  keywords: ["About", "About-us", "equipment", "Bitss", "Bfinit"],
  openGraph: {
    title: "BFIN SASU – Cybersecurity Research & IT Solutions",
    description:
      "BFIN SASU is French research company offering advanced cybersecurity with Bitss, secure server hosting, SaaS software and e commerce solutions. Explore our global presence and innovation driven mission to protect digital environments.",
    url: "http://localhost:3000/about",
    siteName: "Bfinit",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  return <About />;
}
