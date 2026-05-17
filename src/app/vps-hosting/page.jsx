import VpsHosting from "@/components/hosting/VpsHosting/VpsHosting";

export const metadata = {
  title: "Affordable VPS Hosting | Fully Managed & Self Managed",
  description:
    "Powerful VPS hosting from just $14.50/mo. Choose fully or self-managed plans with SSD storage, DDR4 RAM and 0 setup fee. Scale your server easily!",
};

export default function page() {
  return (
    <>
      <VpsHosting />
    </>
  );
}
