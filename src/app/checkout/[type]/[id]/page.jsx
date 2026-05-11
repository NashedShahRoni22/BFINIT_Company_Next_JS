import WhiteLabelCheckout from "@/components/WhiteLabelCheckout/WhiteLabelCheckout";

export default async function HostingDynamic({ params }) {
  const { type, id } = await params;
  return (
    <>
      <WhiteLabelCheckout type={type} id={id} />
    </>
  );
}
