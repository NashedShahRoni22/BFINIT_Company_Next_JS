import { BsCheck2 } from "react-icons/bs";
import { resellerPricing } from "../../../data/resellerPricing";
import Link from "next/link";

export default function Pricing({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      className="relative mx-4 py-10 grid grid-cols-1 md:grid-cols-2 md:container md:mx-auto md:py-20 md:gap-16">
      <div>
        <div className="md:sticky md:top-28">
          <h2 className="mb-6 text-2xl font-bold text-balance md:text-4xl">
            Reseller Package - Start Earning with Ease
          </h2>
          <p className="text-lg font-medium text-balance leading-normal">
            Launch your own white-label storefront and earn{" "}
            <span className="text-primary">up to 25% </span>
            commission!
          </p>
        </div>
      </div>
      {resellerPricing.map((price, i) => (
        <div key={i} className="border border-[#D4DBE0] rounded p-7">
          <p className="text-sm font-bold text-primary tracking-wider my-8">
            {price.name}
          </p>
          <p className="mt-8 mb-1.5 text-[13px] font-medium">Starting at</p>
          <h3 className="text-3xl font-bold">{price.pricing.current}</h3>
          <p className="text-xs font-medium mt-2 text-[#a1a1aa]">
            {price.pricing.renewal}
          </p>
          <Link
            href="https://www.bobosohomail.com/email_ins/signUp_email.php"
            target="_blank"
            className="my-6 text-sm font-semibold rounded block border-2 border-black py-3 w-full text-center transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
            Buy Now
          </Link>
          <ul className="space-y-3">
            {price.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2 font-medium">
                <BsCheck2 className="min-w-fit text-[#31c5f4]" />
                {feat}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
