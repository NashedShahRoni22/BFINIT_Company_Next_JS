import CustomVps from "@/components/hosting/CustomVps/CustomVps";

export const metadata = {
  title: "Custom VPS Hosting | Build Your Own High Speed Server",
  description:
    "Design your own VPS server with BFINIT. Choose your RAM, CPU and more. High speed, secure, scalable hosting built to fit your business needs.",
};

export default function page() {
  return (
    <div>
      <CustomVps />
    </div>
  );
}
