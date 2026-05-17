import OurBrands from "@/components/company/OurBrands/OurBrands";
import Container from "@/components/shared/Container";

export const metadata = {
  title:
    "BFIN Company – Innovative Hosting, Software & Cybersecurity Solutions | France",
  description:
    "BFIN Company based in Sète, France. Your trusted partner for web hosting, cybersecurity, software development, HR solutions and white label platforms. Explore our top brands including Bitss, BFINIT, Ifgaap, and Omada.",
};

export default function page() {
  return (
    <Container>
      <OurBrands />
    </Container>
  );
}
