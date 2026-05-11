import HardwarePriceCard from "./HardwarePriceCard";
import hardwarePrices from "./HardwaresPrice";

export default function Pricing() {
  return (
    <section className="px-5 py-10 text-primary md:container md:mx-auto md:px-0 md:py-20">
      {/* section title */}
      <p className="text-center text-lg">Choose Your Hardware!</p>
      {/* <h2 className="font-urbanist mt-4 text-center text-4xl font-bold">
                Servers designed for a wide range of applications
            </h2> */}
      <h2 className="font-urbanist mt-4 text-center text-4xl font-bold">
        Performance + Reliability
      </h2>
      {/* Products Container */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {hardwarePrices.map((product, index) => (
          <HardwarePriceCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}
