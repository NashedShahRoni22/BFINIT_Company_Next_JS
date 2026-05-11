import { BsArrowRight } from "react-icons/bs";
import heroImg from "../../../assets/reseller/hero.webp";
import Image from "next/image";

const distributionProducts = [
  "Bfinit Hosting",
  "Web Builder",
  "Omada HR Payroll",
  "Bitss Cybersecurity",
];

export default function Hero({ handleScrollToSection }) {
  return (
    <section className="mx-5 flex flex-col items-center gap-8 py-10 md:container md:mx-auto md:flex-row md:gap-16 md:py-20">
      <div className="w-full md:w-1/2">
        <h6 className="font-bold text-brand">Become a Distributor</h6>
        <h1 className="mt-2 text-3xl font-bold md:text-4xl">
          Our Brand, Powered by You
        </h1>
        <p className="my-4 text-lg leading-relaxed text-gray-900">
          <span className="font-semibold">Earn 20-30% as a Distributor</span> by
          distributing Bfinit&apos;s premium solutions:{" "}
          {distributionProducts.map((product, i) => (
            <span
              key={i}
              className="mr-2 mt-2 inline-block whitespace-nowrap rounded-full bg-brand/10 px-3 py-1 text-sm font-medium text-brand">
              {product}
            </span>
          ))}
        </p>
        <p className="my-3">
          Grow your revenue with performance-driven, trusted solutions.
        </p>
        <button
          onClick={handleScrollToSection}
          className="group inline-flex items-center rounded-lg bg-brand px-6 py-3 font-medium text-white shadow">
          <span className="flex items-center px-3">
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              Explore Packages
            </span>
          </span>
          <BsArrowRight className="-ml-3 scale-0 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          width={1000}
          height={1000}
          src={heroImg}
          alt="bfinit reseller program"
          loading="lazy"
          className="h-65 w-full rounded-2xl rounded-br-[96px] rounded-tl-[96px] object-cover md:h-fit"
        />
      </div>
    </section>
  );
}
