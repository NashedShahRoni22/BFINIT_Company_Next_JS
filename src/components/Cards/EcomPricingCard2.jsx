"use client";
import { useState } from "react";
import bonusProducts from "../../data/bonusProduct";
import { ecompricingPlan } from "../../data/ecomPricingPlan";
import formatPrice from "../../utils/formatPrice";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown, Gift, MoveRight } from "lucide-react";

export default function EcomPricingCard2({ plan, activeTab = 0 }) {
  const localPlan = ecompricingPlan.find((local) => plan.id === local.id);
  const parsedDescriptions = JSON.parse(plan.descriptions);
  const [showAll, setShowAll] = useState(false);
  const initialFeaturesCount = 5;

  const featuresToShow = showAll
    ? parsedDescriptions
    : parsedDescriptions.slice(0, initialFeaturesCount);

  const isPopular =
    plan.package_label === "Most Popular" ||
    plan.package_label === "best value";

  const isEnterprise = plan.id === "enterprise";

  return (
    <div
      className={`relative rounded-xl border p-6 ${
        isPopular ? "border-primary/40" : "border-gray-200"
      }`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium capitalize text-white">
            {plan.package_label}
          </div>
        </div>
      )}

      {/* Label */}
      <div
        className={`inline-flex rounded-md px-3 py-1 text-xs font-medium capitalize text-gray-600 ${!isPopular && "bg-gray-50"}`}>
        {isPopular ? "" : plan.package_label}
      </div>

      {/* Plan Name */}
      <h3 className="mt-4 text-xl font-semibold">{plan.name}</h3>

      {/* Details */}
      <p className="mt-1 text-sm text-gray-600">{plan.sort_description}</p>

      {/* Price */}
      <div className="mt-6">
        {activeTab === 0 ? (
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold">
              EUR €{formatPrice(plan.defaultStorage.price) || "Custom"}
            </span>
            {plan.defaultStorage.price && (
              <span className="text-sm text-gray-600">/month</span>
            )}
          </div>
        ) : (
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold">
              USD ${formatPrice(plan.defaultStorage.price * 12) || "Custom"}
            </span>
            {plan.defaultStorage.price && (
              <span className="text-sm text-gray-600">/year</span>
            )}
          </div>
        )}
      </div>

      {/* CTA Button */}
      <Link
        href={`https://hpanel.bfinit.com/checkout?productId=${plan.server_id}&packageType=server&ram=${plan.defaultStorage.ram}&storage=${plan.defaultStorage.storage}&timePeriod=${activeTab === 0 ? "1" : "12"}&currency=USD&currencyRate=1&storageVariantId=&order_type=ecommerce&ecommerce_package_id=${plan.id}&ecommerce_package_name=${plan.name?.split(" ")[0].toLowerCase()}`}
        target="_blank"
        className={`mt-6 inline-block w-full rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 ease-linear hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isPopular
            ? "bg-primary text-white hover:bg-blue-600 focus:ring-blue-500"
            : isEnterprise
              ? "bg-dark text-white hover:bg-gray-800 focus:ring-gray-500"
              : "bg-dark text-white hover:bg-gray-800 focus:ring-gray-500"
        }`}>
        <span className="flex items-center justify-center gap-2">
          {isEnterprise ? "Contact Sales" : "Get Started"}
          <MoveRight className="h-4 w-4" />
        </span>
      </Link>

      {/* Divider */}
      <div className="my-6 h-px bg-gray-200"></div>

      {/* Features Header */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-900">
          What&apos;s included:
        </h4>
      </div>

      {/* Features List */}
      <ul className="space-y-3">
        {featuresToShow.map((feat, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
            <span>{feat}</span>
          </li>
        ))}

        {showAll && (
          <>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
              <span>{plan.defaultStorage.ram}</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
              <span>{plan.defaultStorage.storage}</span>
            </li>
          </>
        )}

        {!showAll && parsedDescriptions.length > initialFeaturesCount && (
          <li>
            <button
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 focus:outline-none">
              <span>
                Show {parsedDescriptions.length - initialFeaturesCount} more
                features
              </span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </li>
        )}

        {showAll && (
          <li>
            <button
              onClick={() => setShowAll(false)}
              className="text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none">
              Show less
            </button>
          </li>
        )}
      </ul>

      {/* Divider */}
      <div className="my-6 h-px bg-gray-200"></div>

      {/* Bonus Product's */}
      {4 > 0 && (
        <div>
          {/* Header */}
          <div className="mb-3 flex items-center gap-2">
            <div className="flex gap-1.5 text-primary">
              <Gift className="mt-1 text-base" />
              <span className="text-sm font-semibold">
                {localPlan?.freeProductsIncluded}
              </span>
            </div>
          </div>

          <p className="mb-3 text-xs leading-relaxed text-gray-500">
            * Free product is valid for the duration of your e-commerce plan.
          </p>

          {/* Products list */}
          <div className="rounded-lg border border-gray-100 bg-gray-50/50 p-3">
            <h4 className="mb-2.5 text-xs font-medium uppercase tracking-wide text-gray-700">
              Available products:
            </h4>

            <div className="space-y-2">
              {(plan.name === "Starter Pack"
                ? bonusProducts.slice(0, 3)
                : bonusProducts
              ).map((item, index) => (
                <div key={index} className="group flex items-center gap-2.5">
                  <div className="flex items-center gap-2">
                    <Image
                      width={1000}
                      height={1000}
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="h-5 w-5 rounded object-contain"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium text-gray-900">
                        {item.name}
                      </span>
                      <span className="block truncate text-xs text-gray-500">
                        {item.description}
                      </span>
                    </div>
                    <div className="ml-2 whitespace-nowrap text-xs font-semibold text-primary">
                      {item.price}
                      <span className="text-gray-400">/yr</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
