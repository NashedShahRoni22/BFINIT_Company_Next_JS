import OurBrands from "@/components/company/OurBrands/OurBrands";
import Container from "@/components/shared/Container";

export const metadata = {
  title:
    "BFIN Company – Innovative Hosting, Software & Cybersecurity Solutions | France",
  description:
    "BFIN Company based in Sète, France. Your trusted partner for web hosting, cybersecurity, software development, HR solutions and white label platforms. Explore our top brands including Bitss, BFINIT, Ifgaap, and Omada.",
  keywords: [
    "BFIN Company France",
    "Bitss cybersecurity solutions",
    "BFINIT software development",
    "Ifgaap HR solutions",
    "Omada white label platform",
    "web hosting providers Sète",
    "SaaS ecosystem brands",
    "innovative software solutions France",
    "cybersecurity and hosting company",
    "BFIN group brands",
  ],
  openGraph: {
    title:
      "BFIN Company – Innovative Hosting, Software & Cybersecurity Solutions | France",
    description:
      "BFIN Company based in Sète, France. Your trusted partner for web hosting, cybersecurity, software development, HR solutions and white label platforms. Explore our top brands including Bitss, BFINIT, Ifgaap, and Omada.",
    url: "http://localhost:3000/our-brands",
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
    <Container>
      <OurBrands />
    </Container>
  );
}
