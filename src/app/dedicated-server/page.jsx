import DedicatedServer from "@/components/hosting/DedicatedServer/DedicatedServer";

export const metadata = {
  title: "Powerful Dedicated Servers | Fast, Flexible, Affordable",
  description:
    "Get fully or self managed dedicated servers from $66/mo. High RAM, multiple IPs, SSD/HDD storage & 0 setup fees. Boost performance with BFINIT servers!",
  keywords: [
    "powerful dedicated servers",
    "cheap dedicated server hosting",
    "fully managed dedicated servers",
    "self managed dedicated hosting",
    "high RAM dedicated servers",
    "SSD dedicated server storage",
    "dedicated server with multiple IPs",
    "no setup fee dedicated servers",
    "enterprise bare metal servers",
    "BFINIT dedicated hosting",
  ],
  openGraph: {
    title: "Powerful Dedicated Servers | Fast, Flexible, Affordable",
    description:
      "Get fully or self managed dedicated servers from $66/mo. High RAM, multiple IPs, SSD/HDD storage & 0 setup fees. Boost performance with BFINIT servers!",
    url: "http://localhost:3000/dedicated-server",
    siteName: "Bfinit",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BFINIT High-Performance Dedicated Server Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  return (
    <div>
      <DedicatedServer />
    </div>
  );
}
