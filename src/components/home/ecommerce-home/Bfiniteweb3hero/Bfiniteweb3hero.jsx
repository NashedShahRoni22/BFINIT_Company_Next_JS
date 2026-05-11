import scottyLogo from "../../../../assets/logo/scotty.webp";
import Image from "next/image";
import Container from "@/components/shared/Container";
import Link from "next/link";
import { Globe, Layers, MoveRight } from "lucide-react";

const BfiniteWeb3Hero = () => {
  return (
    <section className="flex h-screen max-h-270 min-h-fit w-full flex-col justify-center bg-linear-to-b from-[#e6f9f3] to-[#f5fbff] px-2 py-10 md:py-20">
      <Container>
        <div className="flex flex-col items-center text-dark">
          {/* Scotty Pumpkin — vertical logo block */}
          <Link
            href="https://scottypumpkin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-8 flex flex-col items-center gap-2 transition-all duration-200">
            {/* Logo — large, with layered glow rings */}
            <Image
              width={1000}
              height={1000}
              src={scottyLogo}
              alt="Scotty Pumpkin"
              className="w-full"
            />

            {/* Label beneath logo */}
            <span className="flex flex-col items-center leading-tight">
              <span className="text-xs font-semibold uppercase tracking-widest">
                Part of the
              </span>
              <span className="text-sm font-bold text-orange-600">
                Scotty Pumpkin Web3 Ecosystem
              </span>
            </span>
          </Link>

          {/* Subtitle */}
          <p className="font-inter mt-6 text-center text-lg font-medium text-primary/70 md:text-2xl">
            Build, sell & market your business within the{" "}
            <span className="relative inline-block">
              <span className="relative z-10 px-1 bg-brand/20 p-0.5 rounded-xl">
                Scotty Pumpkin ecosystem
              </span>
              <span className="absolute inset-0 rounded-md bg-secondary opacity-70"></span>
            </span>
            .
          </p>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-balance text-center leading-relaxed md:text-xl">
            Bfinit enables businesses to create professional ecommerce websites
            while offering optional{" "}
            <span className="font-medium text-brand">Web3 integration</span>{" "}
            powered by Scotty Pumpkin.
          </p>

          {/* Feature Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              {
                icon: <Layers className="size-3.5" />,
                label: "Ecommerce Websites",
              },
              {
                icon: <Globe className="size-3.5" />,
                label: "Web3 Integration",
              },
              {
                icon: <Globe className="size-3.5" />,
                label: "Scotty Pumpkin Powered",
              },
            ].map(({ icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-600">
                {icon}
                {label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/bfinit-ecomerce-platform"
              className="group flex items-center rounded-lg border border-transparent bg-brand px-6 py-3 font-medium text-white transition-all duration-300 ease-linear hover:bg-brand/80 hover:text-dark">
              Get Started with Bfinit
              <MoveRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/scotty-pumpkin"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:text-primary">
              Explore the Ecosystem
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default BfiniteWeb3Hero;
