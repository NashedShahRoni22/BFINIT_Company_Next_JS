import overviewImg from "../../../assets/reseller/overview.webp";
import { FiUserPlus } from "react-icons/fi";
import Image from "next/image";
import SectionContainer from "@/components/shared/SectionContainer";
import Link from "next/link";

export default function Overview() {
  return (
    <SectionContainer flex="flex">
      <div className="w-full md:w-1/2">
        <Image
          width={1000}
          height={1000}
          src={overviewImg}
          alt=""
          loading="lazy"
          className="h-65 w-full rounded-xl rounded-bl-[116px] rounded-tr-[116px] object-cover md:h-fit"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="mb-6 text-2xl font-bold md:text-4xl font-inter">
          Shape Your Earnings, <br /> Your Way
        </h2>
        <p className="text-balance font-medium">
          Unlike other programs that limit your earnings, we empower you to set
          your own margins. You decide how much you make on each product, giving
          you the flexibility and control to maximize your profits.
        </p>
        <Link
          href={"https://hpanel.bfinit.com/distributor/register"}
          target="_blank"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-brand px-8 py-3.5 font-medium text-white transition-all hover:shadow-lg">
          <FiUserPlus className="mr-2" />
          Become a Partner
        </Link>
      </div>
    </SectionContainer>
  );
}
