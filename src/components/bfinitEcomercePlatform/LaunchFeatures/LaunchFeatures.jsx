import { IoIosArrowForward } from "react-icons/io";
import { LiaStoreAltSolid } from "react-icons/lia";
import { IoSpeedometerOutline } from "react-icons/io5";
import { PiChartLineUp } from "react-icons/pi";

export default function LaunchFeatures({ handleScrollToPricing }) {
  return (
    <section className="my-12 text-center">
      <h2 className="font-inter text-2xl font-bold text-[#202124] md:text-3xl">
        <span className="text-brand">Everything</span> You Need to <br /> Launch
        & Grow.
      </h2>
      <p className="mt-2 text-sm text-[#5F6368]">
        Plans starting at just $10.50/mo — full-featured from $49.50/mo
      </p>
      <button
        onClick={handleScrollToPricing}
        className="mt-2 inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-brand hover:underline">
        Buy a Pack Now <IoIosArrowForward />
      </button>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {/* Card 1 */}
        <div className="rounded-2xl bg-[#F8F9FA] px-6 py-8 text-left shadow-sm">
          <LiaStoreAltSolid className="size-8 text-brand" />
          <h3 className="mb-1 text-lg font-semibold text-[#202124]">
            Powerful Ecommerce Store
          </h3>
          <p className="text-sm text-[#5F6368]">
            Launch with pre-built templates, 10,000 products, custom branding,
            and advanced sales features.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl bg-[#F8F9FA] px-6 py-8 text-left shadow-sm">
          <IoSpeedometerOutline className="size-7 text-brand" />
          <h3 className="mb-1 text-lg font-semibold text-[#202124]">
            Ultra-Fast & Reliable Hosting
          </h3>
          <p className="text-sm text-[#5F6368]">
            32GB ECC RAM, 500GB SSD, free SSL, unlimited bandwidth, weekly
            backups, and free hosting setup.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl bg-[#F8F9FA] px-6 py-8 text-left shadow-sm">
          <PiChartLineUp className="size-8 text-brand" />
          <h3 className="mb-1 text-lg font-semibold text-[#202124]">
            Growth & Support Included
          </h3>
          <p className="text-sm text-[#5F6368]">
            SEO control, blog tools, business insights, unlimited revisions,
            24/7 support, and 3 months free with yearly plans.
          </p>
        </div>
      </div>
    </section>
  );
}
