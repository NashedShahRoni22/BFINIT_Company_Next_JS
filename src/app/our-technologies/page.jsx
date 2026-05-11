import OurTechnologies from "@/components/company/OurTechnologies/OurTechnologies";

export const metadata = {
  title: "Our Technologies | Digital Solutions by BFINIT",
  description:
    "Explore BFINIT’s tech stack: secure hosting, cybersecurity, HR tools, invoicing apps, e commerce and communication platforms built for growth.",
  keywords: [
    "BFINIT tech stack",
    "secure web hosting technology",
    "cybersecurity software solutions",
    "HR management tools",
    "cloud invoicing applications",
    "ecommerce platform development",
    "enterprise communication tools",
    "modern software infrastructure",
    "scalable digital solutions",
    "BFINIT product technologies",
  ],
  openGraph: {
    title: "Our Technologies | Digital Solutions by BFINIT",
    description:
      "Explore BFINIT’s tech stack: secure hosting, cybersecurity, HR tools, invoicing apps, e commerce and communication platforms built for growth.",
    url: "http://localhost:3000/our-technologies",
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
      <OurTechnologies />
    </>
  );
}
