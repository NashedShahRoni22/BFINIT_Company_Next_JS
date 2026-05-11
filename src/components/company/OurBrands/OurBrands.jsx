import OurBrandCards from "@/components/Cards/OurBrandCards";
import { ourBrands } from "@/data/ourBrands";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function OurBrands() {
  return (
    <section className="py-10 md:py-20">
      <h2 className="text-center text-3xl font-bold font-inter md:text-4xl">
        Explore Our Leading Brands
      </h2>
      <p className="mt-6 text-center text-lg leading-relaxed md:text-balance">
        Each of our brands adds integrated value, offering features that benefit
        both private and business users. <br /> We strive to enhance our brands,
        continually adding new technologies to ensure their utility remains
        infinite.
      </p>

      <div className="mt-20 flex gap-8 md:gap-16">
        {/* Left Side Services Name */}
        <div className="hidden flex-col gap-4 md:flex font-inter w-3/5">
          {ourBrands.map((brand, i) => {
            return (
              brand.websiteUrl && (
                <Link
                  key={i}
                  href={brand?.websiteUrl}
                  target="_blanck"
                  className="group flex items-center gap-1 transition-all duration-200 ease-linear hover:font-semibold hover:text-brand">
                  <MdOutlineArrowOutward className="min-w-fit text-lg transition-all duration-200 ease-linear group-hover:rotate-45 font-inter" />
                  {brand.title}
                </Link>
              )
            );
          })}
        </div>

        {/* Services Image Card Container */}
        <div className="w-full">
          <OurBrandCards />
        </div>
      </div>
    </section>
  );
}
