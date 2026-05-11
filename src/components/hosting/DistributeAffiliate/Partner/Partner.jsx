import { FiBarChart2, FiDollarSign, FiHeadphones } from "react-icons/fi";
import parterShipImg from "../../../../assets/distributor-affiliate/partnership.jpg";
import Image from "next/image";

const benefits = [
  {
    title: "Higher Earnings",
    description:
      "Industry-leading 30% recurring commissions with no caps on earnings.",
    icon: <FiDollarSign className="h-6 w-6" />,
    bgColor: "oklch(96.2% 0.018 272.314)",
    iconColor: "oklch(58.5% 0.233 277.117)",
  },
  {
    title: "Proven Performance",
    description: "98% uptime guarantee and enterprise-grade infrastructure.",
    icon: <FiBarChart2 className="h-6 w-6" />,
    bgColor: "oklch(97.9% 0.021 166.113)",
    iconColor: "oklch(69.6% 0.17 162.48)",
  },
  {
    title: "Dedicated Support",
    description:
      "24/7 partner success team and co-branded marketing materials.",
    icon: <FiHeadphones className="h-6 w-6" />,
    bgColor: "oklch(98.7% 0.022 95.277)",
    iconColor: "oklch(76.9% 0.188 70.08)",
  },
];

export default function Partner() {
  return (
    <div className="py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2">
            {/* mobile device section title */}
            <h2 className="text-3xl font-inter font-bold text-gray-900 sm:text-4xl md:hidden">
              Why Partner With Us?
            </h2>

            <div className="relative mt-8 overflow-hidden rounded-xl md:mt-0">
              <Image
                width={1000}
                height={1000}
                src={parterShipImg}
                alt="Happy partner discussing business"
                className="h-auto w-full object-cover"
              />
              {/* Decorative badge on image */}
              <div className="absolute right-2 top-2 rounded-lg border border-gray-100 bg-white px-3 py-1.5">
                <div className="flex items-center gap-2 text-sm">
                  <FiDollarSign className="text-green-500" />
                  <span className="font-bold text-gray-800">
                    20-30% Commission
                  </span>
                </div>
              </div>
            </div>

            {/* mobile device section sub-title */}
            <p className="mt-4 text-lg text-gray-600 md:hidden">
              Join our network of 5,000+ partners already growing their business
              with our premium hosting solutions.
            </p>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2">
            {/* desktop section title and sub-title */}
            <div className="hidden md:block">
              <h2 className="text-3xl font-inter font-bold text-gray-900 sm:text-4xl">
                Why Partner With Us?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Join our network of 5,000+ partners already growing their
                business with our premium hosting solutions.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="shrink-0">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-md"
                      style={{ backgroundColor: benefit.bgColor }}>
                      <div style={{ color: benefit.iconColor }}>
                        {benefit.icon}
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-inter font-medium text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
