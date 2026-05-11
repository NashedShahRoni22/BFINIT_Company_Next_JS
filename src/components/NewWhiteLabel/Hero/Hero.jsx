import { MdArrowDownward } from "react-icons/md";
import alertIcon from "../../../assets/icons/alert.png";
import bgOverlay from "../../../assets/white-label/bg-overlay.png";
import handshake from "../../../assets/icons/handshake.png";
import lightingBolt from "../../../assets/icons/lighting-bolt.png";
import user from "../../../assets/icons/user.png";
import Image from "next/image";

const highlightedFeats = [
  { icon: lightingBolt, title: "Power Your Brand" },
  { icon: handshake, title: "Software You Can Trust" },
  { icon: user, title: "We Make It Yours" },
];

export default function Hero({ handleScrollToSection }) {
  return (
    <div
      style={{
        background: `linear-gradient(to top, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3)), url(${bgOverlay.src}) no-repeat center/cover`,
      }}>
      <div className="mx-5 py-10 text-center font-roboto md:container md:mx-auto md:py-20">
        <p className="mx-auto flex w-fit items-center gap-0.5 rounded-full bg-[#EDF6FD]/60 px-3 py-1 font-semibold text-brand">
          <Image
            width={1000}
            height={1000}
            src={alertIcon}
            alt="alert icon"
            className="size-6 object-cover"
          />
          This is not a reseller account
        </p>
        <h1 className="mt-4 text-balance font-montserrat text-3xl font-bold md:text-5xl">
          White Label Your <br /> Focused Own Business
        </h1>

        <p className="mt-8 text-xl text-gray-800">
          Your websites, your brand, your customers, your payments, your
          business - <br /> your way. Build custom software under your own brand
          today!
        </p>
        <button
          onClick={handleScrollToSection}
          className="group mt-8 inline-flex items-center rounded bg-brand px-6 py-3 font-medium text-white shadow">
          <span className="flex items-center px-3">
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              View Plans & Pricing
            </span>
          </span>
          <MdArrowDownward className="-ml-3 scale-0 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
        </button>

        {/* Highlighted Features */}
        <div className="mt-10 grid grid-cols-3 gap-4 md:mt-20">
          {highlightedFeats.map((feat, i) => (
            <div key={i} className="py-6">
              <Image
                width={1000}
                height={1000}
                src={feat.icon}
                alt={feat.title}
                className="mx-auto size-10"
              />
              <p className="mt-4 text-sm font-semibold md:text-base">
                {feat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
