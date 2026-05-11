import { sassProducts } from "../../../data/sassProducts";
import giftIcon from "../../../assets/icons/gift.png";
import Image from "next/image";
import WhiteLabelFeatCard from "@/components/Cards/WhiteLabelFeatCard";
import ArrowBtn from "@/components/buttons/ArrowBtn";

export default function Products({ productRefs }) {
  return (
    <>
      {sassProducts.map((product) => (
        <div
          key={product.id}
          ref={(el) => (productRefs.current[product.id] = el)}
          className="mx-5 py-10 font-roboto md:container md:mx-auto md:py-20">
          {product.id === 3 && (
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-[#EDF6FD]/60 px-3 py-1 font-medium text-brand">
              <Image
                width={1000}
                height={1000}
                src={giftIcon}
                alt="label icon"
                className="size-6"
              />
              FREE - with any White Label Products!
            </div>
          )}
          <h2 className="mt-4 text-center font-montserrat text-3xl font-bold capitalize md:mt-2 md:text-4xl">
            {product.title}
          </h2>
          <p className="mx-auto mt-8 w-full max-w-2xl text-center text-lg text-gray-700 md:mt-4">
            {product.description}
          </p>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {product.features.map((feat, i) => (
              <WhiteLabelFeatCard key={i} feat={feat} />
            ))}
          </div>

          <div className="mt-12 text-center">
            {product.id !== 3 && (
              <ArrowBtn
                to={`/checkout/sass-software/${product.id}`}
                label={`Buy Now - €${product.cta}`}
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
}
