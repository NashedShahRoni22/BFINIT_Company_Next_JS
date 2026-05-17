import DedicatedServer from "@/components/hosting/DedicatedServer/DedicatedServer";

export const metadata = {
  title: "Powerful Dedicated Servers | Fast, Flexible, Affordable",
  description:
    "Get fully or self managed dedicated servers from $66/mo. High RAM, multiple IPs, SSD/HDD storage & 0 setup fees. Boost performance with BFINIT servers!",
};

export default function page() {
  return (
    <div>
      <DedicatedServer />
    </div>
  );
}
