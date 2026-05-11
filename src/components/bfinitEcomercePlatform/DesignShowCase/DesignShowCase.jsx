import img1 from "../../../assets/ecommerce/mockup-3.webp";
import img2 from "../../../assets/ecommerce/mockup-2.webp";
import img3 from "../../../assets/ecommerce/mockup-4.webp";
import Image from "next/image";

export default function DesignShowCase() {
  return (
    <section className="py-10 md:py-20">
      <div className="text-center text-[#202124]">
        <p className="font-inter text-lg font-semibold text-brand">Design</p>
        <h2 className="font-inter mt-3 text-2xl font-bold md:text-4xl">
          Crafted for clarity.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed tracking-wide text-[#5F6368]">
          Every layout is intentionally designed to guide users seamlessly—from
          browsing products to checkout. See how our clean interfaces and
          thoughtful interactions elevate your store.
        </p>
      </div>

      <Image
        width={1000}
        height={1000}
        src={img2}
        className="mx-auto w-full max-w-4xl"
        alt="Website mockup"
      />

      <div className="mt-8 grid grid-cols-12 items-center gap-8">
        <div className="col-span-12 md:col-span-7">
          <Image width={1000} height={1000} src={img1} alt="Website mockup" />
        </div>
        <div className="col-span-12 md:col-span-5">
          <Image
            width={1000}
            height={1000}
            src={img3}
            alt="Website mockup"
            className="ml-auto h-auto max-h-58.75 w-auto md:h-full md:max-h-full md:w-full"
          />
        </div>
      </div>
    </section>
  );
}
