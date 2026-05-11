import Image from "next/image";
import img1 from "../../../assets/ecommerce/mockup-1.webp";

export default function FreeWebBuilderHero({ handleScrollToPricing }) {
  return (
    <section className="bg-gray-soft my-10 flex flex-col items-center gap-8 rounded-3xl p-6 md:flex-row md:gap-16 md:pb-0">
      <div className="min-w-fit">
        <h2 className="font-inter mb-1.5 text-2xl font-bold text-brand md:text-4xl">
          Free!
        </h2>
        <h2 className=" font-inter text-2xl font-bold text-[#202124] md:text-4xl">
          Ecommerce Web Builder
        </h2>
        <p className="mt-3 max-w-xl text-[#3C4043]">
          Build and manage your online store with ease. From adding products to
          customizing your storefront — everything you need to launch is
          included.
        </p>
        <p className="mt-2 text-sm text-[#5F6368]">
          Included free with your hosting plan. Optimized for performance,
          security, and mobile devices.
        </p>
        <button
          onClick={handleScrollToPricing}
          className="mt-4 rounded-lg bg-brand px-5 py-2 text-white transition hover:bg-blue-700">
          Launch My Store
        </button>
      </div>
      <div className="hidden max-h-96 min-h-96 overflow-hidden md:block">
        <Image
          width={1000}
          height={1000}
          src={img1}
          alt="iPad Mockup"
          className="md:scale-125"
        />
      </div>
    </section>
  );
}
