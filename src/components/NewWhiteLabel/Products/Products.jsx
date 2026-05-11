import WhiteLabelFeatCard from "../../../components/Cards/WhiteLabelFeatCard";
import ArrowBtn from "../../../components/buttons/ArrowBtn";
import { whiteLabelProducts } from "../../../data/whiteLabelProducts";

export default function Products({ sectionRef }) {
  return (
    <div ref={sectionRef}>
      {whiteLabelProducts.map((product) => (
        <div
          key={product.id}
          className="relative mx-5 flex flex-col justify-between gap-8 py-10 font-roboto md:container md:mx-auto md:flex-row md:gap-16 md:py-20"
        >
          {/* Sticky Product Details Section */}
          <div className="h-fit w-full text-center md:sticky md:top-28 md:w-2/5 md:text-left">
            <p className="text-sm text-gray-600">{product.tagLine}</p>
            <h2 className="mt-4 font-montserrat text-3xl font-bold md:mt-2 md:text-4xl">
              {product.title}
            </h2>
            <p className="mb-6 mt-8 text-gray-700 md:mt-4">
              {product.description}
            </p>
            <ArrowBtn
              to={`/checkout/whitelabel/${product.id}`}
              label={product.cta}
            />
          </div>

          {/* Product Pricing & Feautes Card Section */}
          <div className="w-full md:w-3/5">
            {/* Pricing Details */}
            <div className="mt-8 md:mt-0">
              <h4 className="text-center font-montserrat text-3xl font-semibold text-gray-900">
                Pricing
              </h4>
              <p className="mt-2 text-center text-gray-600">
                Choose the best plan that fits your business needs.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6">
                {product.pricingDetails.map((price, i) => (
                  <div
                    key={i}
                    className="flex flex-col rounded-md border bg-white p-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-lg font-semibold">{price.title}</h3>
                        <p className="text-lg font-bold">{price.price}</p>
                      </div>
                      <p className="my-3 text-gray-600">{price.description}</p>
                    </div>
                    {price.optional && (
                      <p className="w-fit rounded bg-gray-100 px-2 py-1 text-xs">
                        Can be added at checkout
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mt-16">
              <h2 className="text-center text-3xl font-semibold text-gray-900">
                Features
              </h2>
              <p className="mt-2 text-center text-gray-600">
                Explore powerful tools designed to streamline your workflow.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {product.features.map((feat, i) => (
                  <WhiteLabelFeatCard key={i} feat={feat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
