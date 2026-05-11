"use client";
import { useEffect, useState } from "react";
import CardSkeleton from "@/components/Cards/CardSkleton";
import HostingPricingCard from "@/components/Cards/WebHostingPricingCard";
import { getData } from "@/components/shared/GetData";

const vpsHostingProducts = [
  {
    id: 8,
    title: "Self Managed VPS",
  },
  {
    id: 2,
    title: "Fully Managed VPS",
  },
];

export default function Pricing() {
  const [loading, setLoading] = useState(true);
  const [productId, setProductId] = useState(2);
  const [products, setProducts] = useState([]);
  const [skeletonCount, setSkeletonCount] = useState(4);

  useEffect(() => {
    getData(`https://hpanel.bfinit.com/api/product/list/${productId}`).then(
      (data) => {
        setProducts(data.data);
        setSkeletonCount(data.data.length || 4);
        setLoading(false);
      },
    );
  }, [productId]);

  return (
    <div className="px-5 py-10 text-brand md:container md:mx-auto md:px-0 md:py-20">
      {/* section title */}
      <p className="text-center text-lg">Choose Your VPS Hosting Plan!</p>
      <h2 className="font-urbanist mt-4 font-inter text-center text-4xl font-bold">
        More Performance. Less Cost
      </h2>

      {/* tab button */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 py-2.5">
        {vpsHostingProducts.map((product, i) => (
          <button
            key={i}
            onClick={() => setProductId(product.id)}
            className={`min-w-fit cursor-pointer rounded-full font-inter px-4 py-2 ${
              product.id === productId ? "bg-brand text-white" : "bg-white"
            }`}>
            {product.title}
          </button>
        ))}
      </div>

      {/* Products Container */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {loading || !products.length
          ? Array.from({ length: skeletonCount }).map((_, i) => (
              <CardSkeleton key={i} />
            ))
          : products.map((product) => (
              <HostingPricingCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
}
