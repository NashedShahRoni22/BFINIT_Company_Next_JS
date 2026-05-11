import { MessageCircle, MoveRight, Share2, Store, Zap } from "lucide-react";
import Container from "@/components/shared/Container";
import Link from "next/link";

const features = [
  {
    icon: <Share2 className="text-xl" />,
    title: "Ecommerce Social Networking",
    description:
      "Connect, chat, and engage with friends and communities on Sosay.",
  },
  {
    icon: <MessageCircle className="text-xl" />,
    title: "Product Focused Content",
    description:
      "Create product videos, reviews, and promotional posts to boost your store visibility.",
  },
  {
    icon: <Store className="text-xl" />,
    title: "E-commerce Hub",
    description:
      "Sell products directly through your Sosay profile with zero hassle.",
  },
  {
    icon: <Share2 className="text-xl" />,
    title: "Crypto Integration",
    description:
      "Manage, trade, and transact with cryptocurrencies seamlessly.",
  },
];

const SosayPromo = () => {
  return (
    <div className="py-10 md:py-20">
      <Container>
        <div className="mb-16 text-center">
          {/* Badge */}
          <div className="mx-auto mb-4 inline-flex items-center gap-1 rounded-full border border-gray-200/50 bg-background px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <div className="items-center justify-center rounded-full bg-dark/85 p-1">
              <Zap className="size-4 text-secondary" />
            </div>
            <p>Social Commerce</p>
          </div>

          {/* Title */}
          <h2 className="text-center font-inter text-3xl font-bold md:text-4xl">
            Amplify Your Reach with{" "}
            <span className="text-[#F44336]">Sosay</span>
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-balance text-gray-600">
            Transform your store&apos;s visibility by leveraging our integrated
            social platform. Showcase products, engage with customers, and build
            your brand - all in one ecosystem.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl border border-secondary/10 bg-white/10 p-4 text-center shadow-sm transition-all hover:shadow`}>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                {item.icon}
              </div>
              <h3 className="mt-4 text-balance text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-balance text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://sosay.org/"
            target="_blank"
            className="group flex items-center rounded-lg border border-transparent bg-brand px-6 py-3 font-medium text-white transition-all duration-300 ease-linear hover:bg-brand/80 hover:text-dark">
            Start Sharing on Sosay
            <MoveRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default SosayPromo;
