export default function Info() {
  return (
    <div className="mx-5 py-10 font-roboto md:container md:mx-auto md:py-20">
      <h2 className="mb-16 text-center font-montserrat text-2xl font-bold md:text-4xl">
        BFINIT White Label Business
      </h2>
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
        <div className="h-full rounded-lg border border-gray-200 bg-white p-8 text-left">
          <h3 className="mb-4 text-xl font-semibold md:text-2xl">Overview</h3>
          <p className="leading-relaxed text-gray-600">
            BFIN is a research and product distribution company. Its IT division
            develops software and sells it directly to enterprises requiring
            full ownership for rebranding. BFIN also distributes software via
            its white-label brand. Buying the software outright saves buyers
            huge amounts in development costs.
          </p>
        </div>

        <div className="h-full rounded-md border border-gray-200 bg-white p-8 text-left">
          <h3 className="mb-4 text-xl font-semibold md:text-2xl">
            In-App Purchase Options
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <span className="text-primary">✔</span> Backend raw code & source
              code access
            </li>
            <li>
              <span className="text-primary">✔</span> Full installation on
              client&apos;s server
            </li>
            <li>
              <span className="text-primary">✔</span> 6 months of issue
              resolution & dedicated support
            </li>
            <li>
              <span className="text-primary">✔</span> Frontend customization
              including login pages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
