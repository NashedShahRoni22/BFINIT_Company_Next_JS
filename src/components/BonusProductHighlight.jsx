import bonusProducts from "@/data/bonusProduct";
import Image from "next/image";
import { FiBarChart2, FiGift } from "react-icons/fi";
import Container from "./shared/Container";

const duration = [
  {
    duration: "3 Months",
    bonus: 1,
  },
  {
    duration: "6 Months",
    bonus: 2,
  },
  {
    duration: "12 Months",
    bonus: 4,
  },
  {
    duration: "24 Months",
    bonus: 5,
  },
];

export default function BonusProductHighlight() {
  return (
    <Container>
      <div className="px-5 py-10 text-brand md:py-20">
        {/* section title */}
        <p className="text-center text-lg">
          Free login guard, spam blocker & payroll tools with hosting
        </p>
        <h2 className="mt-4 text-center text-4xl font-inter font-bold">
          Get Up to 5 FREE Bonus Products
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 text-gray-700 md:grid-cols-2 md:gap-16">
          {/* Left: Bonus by Duration */}
          <div>
            <div className="flex items-center gap-1.5 text-lg font-semibold text-brand">
              <FiBarChart2 />
              <h3>Free Product Tiers</h3>
            </div>

            <p className="mt-2 text-sm font-medium leading-relaxed">
              Unlock up to 5 free bonus products based on your hosting duration
              — a total value of up to{" "}
              <span className="font-semibold text-brand">€356.50/year</span>
            </p>

            <div className="mt-4 rounded p-5 ring-1 ring-gray-100/50">
              {duration?.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-3 first:pt-0 last:pb-0 not-last:border-b not-last:border-gray-100">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg text-sm font-semibold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.duration}</p>
                    <p className="text-sm text-gray-600">
                      {item.bonus} free{" "}
                      {item.bonus === 1 ? "product" : "products"}
                    </p>
                  </div>
                  <div className="hidden text-xs font-medium text-brand sm:block">
                    +{item.bonus} {item.bonus === 1 ? "product" : "products"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Bonus Products List */}
          <div>
            <h3 className="flex items-center gap-1.5 text-base font-semibold text-brand">
              <FiGift /> Available Bonus Products
            </h3>
            <p className="mt-2 text-sm font-medium leading-relaxed">
              Unlock premium tools like login security, anti-spam, malware
              defense, and payroll software — worth up to{" "}
              <span className="font-semibold text-brand">€356.50/year</span> —
              free with eligible hosting plans.
            </p>
            <p className="mt-2 text-[13px] font-medium italic text-brand/75">
              * Free product is valid for the duration of your hosting plan.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {bonusProducts.map((item, index) => (
                <div
                  key={index}
                  className="rounded p-3 shadow-sm ring-1 ring-gray-100/50">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center">
                      <Image
                        width={1000}
                        height={1000}
                        src={item.logo}
                        alt={`logo of ${item.name}`}
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col font-medium text-gray-900">
                      <p>
                        {item.name} – Gift Value: {item.price}
                        <span className="text-xs">/yr</span>
                      </p>
                      <p className="text-xs font-normal text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
