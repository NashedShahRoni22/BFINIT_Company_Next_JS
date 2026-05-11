import HostingProducts from "@/components/hosting/HostingProducts";

export default async function HostingDynamic({ params }) {
  const { id } = await params;
  return (
    <>
      <HostingProducts id={id} />
    </>
  );
}
