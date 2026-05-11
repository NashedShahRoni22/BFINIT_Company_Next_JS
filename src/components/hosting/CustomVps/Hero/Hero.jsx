import Image from "next/image";
import heroImg from "../../../../assets/hosting-packages/custom-vps-hero.svg";

export default function Hero({ handleScrollToSection }) {
  return (
    <div className="mx-5 flex flex-col items-center gap-8 py-10 md:container md:mx-auto md:flex-row md:py-20">
      {/* left container */}
      <div className="w-full md:w-1/2">
        <h5 className="text-lg font-semibold">
          <span className="text-brand">High-Performance</span> Custom VPS:
          Optimized for Your Needs
        </h5>
        <h1 className="mt-1 font-inter text-2xl font-semibold md:text-4xl">
          Elevate your Business with <br /> a{" "}
          <span className="text-brand">Custom VPS Server</span>
        </h1>
        <p className="mt-3 text-[#737373]">
          Experience top-tier performance, security, and scalability with our
          custom VPS solutions. Tailor your server to meet your exact business
          requirements.
        </p>
        <p className="mt-1 text-[#737373]">
          Our high-speed infrastructure ensures uptime and reliability,
          empowering your applications with seamless connectivity and
          performance.
        </p>
        <button
          onClick={handleScrollToSection}
          className="mt-4 w-fit rounded-lg bg-brand px-12 py-3 font-bold text-white transition-all duration-200 ease-linear hover:bg-[#145c9b]">
          Experience our Custom VPS
        </button>
      </div>
      <div className="flex w-full items-center justify-center md:w-1/2">
        <Image
          width={1000}
          height={1000}
          src={heroImg}
          alt="bfinit custom vps"
          loading="lazy"
          className="w-full max-w-lg object-cover"
        />
      </div>
    </div>
  );
}
