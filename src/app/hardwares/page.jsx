import Hardwares from "@/components/hardwares/Hardwares";
import Container from "@/components/shared/Container";

export const metadata = {
  title: "BFINIT Hardwares | High-Performance Scalable Server Solutions",
  description:
    "BFINIT servers are the ideal choice for home or businesses, easily allowing you to increase server capacity as your workload or business grows. They are designed for always-on operation and offer all the reliability and performance benefits of server hardware, without the need to invest in expensive rack mounting hardware.",
  keywords: [
    "BFINIT server hardware",
    "scalable business servers",
    "enterprise server solutions",
    "high performance hardware",
    "home office server setup",
    "reliable server systems",
    "expandable server capacity",
    "workstation and server hardware",
    "custom server builds for business",
    "low cost rackless servers",
  ],
  openGraph: {
    title: "BFINIT Hardwares | High-Performance Scalable Server Solutions",
    description:
      "BFINIT servers are the ideal choice for home or businesses, easily allowing you to increase server capacity as your workload or business grows. They are designed for always-on operation and offer all the reliability and performance benefits of server hardware, without the need to invest in expensive rack mounting hardware.",
    url: "http://localhost:3000/hardwares",
    siteName: "Bfinit",
    images: [
      {
        url: "../../assets/server-home/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "BFINIT Scalable Server Hardware for Business",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <Container>
      <Hardwares />
    </Container>
  );
}
