"use client";
import { freeGifts } from "../Pricing/Pricing";
import Image from "next/image";
import Link from "next/link";
import { Gift } from "lucide-react";

export default function FreeGifts() {
  return (
    <section className="py-10 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold font-inter text-gray-900 md:text-4xl">
            Exclusive Bonus Gifts Included
          </h2>
          <p className="mb-2 text-lg text-gray-600">
            Each pack includes exclusive{" "}
            <Link
              href="#free-tools"
              className="inline-flex items-center gap-1 text-orange-500 underline transition-colors hover:text-orange-600">
              Bonus Gifts <Gift className="shrink-0" />
            </Link>
          </p>
          <p className="mx-auto max-w-3xl text-gray-700">
            With e-Bfinit you are receiving tools that will help your business,
            these free gifts are equivalent to{" "}
            <span className="inline-flex items-center gap-1 rounded-full bg-orange-500 px-3 py-1 text-lg font-bold text-white shadow-lg">
              20% to 100%
            </span>{" "}
            discount with free gifts referred to each pack for detail.
          </p>
        </div>

        {/* Free Gifts Grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {freeGifts.map((gift, i) => (
            <div
              key={i}
              className="transform rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="mb-4 inline-block rounded-lg bg-gray-50 p-4">
                  <Image
                    width={1000}
                    height={1000}
                    src={gift.logo}
                    alt={gift.title}
                    className="mx-auto h-12 w-auto"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {gift.title}
                </h3>
                <div className="flex items-center justify-center gap-2 text-primary">
                  <span className="text-sm font-medium">FREE</span>
                  <Gift className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
