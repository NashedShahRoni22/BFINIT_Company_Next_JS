import Hardwares from "@/components/hardwares/Hardwares";
import Container from "@/components/shared/Container";

export const metadata = {
  title: "BFINIT Hardwares | High-Performance Scalable Server Solutions",
  description:
    "BFINIT servers are the ideal choice for home or businesses, easily allowing you to increase server capacity as your workload or business grows. They are designed for always-on operation and offer all the reliability and performance benefits of server hardware, without the need to invest in expensive rack mounting hardware.",
};

export default function Page() {
  return (
    <Container>
      <Hardwares />
    </Container>
  );
}
