import { BsArrowDown } from "react-icons/bs";

export default function Hero({ handleScrollToSection }) {
  return (
    <section className="py-10 md:py-20">
      <h1 className="text-3xl text-center text-balance font-bold md:text-5xl font-inter">
        Master the Steps to Build & Grow Your <br /> E-Commerce Business
      </h1>
      <p className="my-8 text-center leading-relaxed text-balance text-lg md:text-xl">
        From market analysis to customer support, discover actionable strategies
        with our <br />{" "}
        <span className="text-brand font-medium">BFINIT Guide</span> to elevate
        your E-Commerce success.
      </p>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
        <button
          onClick={handleScrollToSection}
          className="group shadow border-brand border text-brand transition-all duration-200 ease-linear hover:bg-brand hover:text-white inline-flex items-center px-6 py-3 font-semibold rounded">
          <span className="flex items-center px-3">
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              Explore Full Guide Below
            </span>
          </span>
          <BsArrowDown className="-ml-3 opacity-0 scale-0 group-hover:scale-125 transition-all duration-300 group-hover:opacity-100" />
        </button>
        <a
          href="/bfinit-ecommerce-guide.pdf"
          download="bfinit e-commerce guide.pdf"
          className="px-6 py-3 group border hover:bg-[#135996] border-brand bg-brand text-white font-semibold rounded shadow w-fit transition-all duration-200 ease-linear">
          Download Free Resources
        </a>
      </div>
    </section>
  );
}
