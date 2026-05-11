import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { MdArrowDownward } from "react-icons/md";
import bgOverlay from "../../../assets/white-label/bg-overlay.png";
import deviceImg from "../../../assets/sass-software/device.png";
import giftIcon from "../../../assets/icons/gift.png";
import "swiper/css";
import "swiper/css/pagination";
import "./hero.css";
import Image from "next/image";

export default function Hero({ scrollToProduct }) {
  const heroData = [
    {
      id: 1,
      title: "HR Payroll software & Project Management",
      details:
        "Comprehensive payroll solution with Built-In Project Management tools to streamline employee payments, task tracking and financial reporting.",
      image: deviceImg,
    },
    {
      id: 2,
      title: "Classic payroll software",
      details:
        "Classic Payroll software typically includes a range of features designed to help businesses manage their payroll processes.",
      image: deviceImg,
    },
    {
      id: 4,
      title: "Mobile Invoicing App",
      details:
        "Invoicing software provides customizable invoice templates that businesses can use to create professional-looking invoices with their own branding and logo.",
      image: deviceImg,
    },
    {
      id: 3,
      title: "Accounting GAAP",
      details:
        "GAAP requires businesses to report information that is relevant to the decision-making needs of investors, creditors, and other stakeholders.",
      image: deviceImg,
    },
  ];

  return (
    <div
      id="sass-hero"
      style={{
        background: `linear-gradient(to right, rgba(255, 255, 255, 0.9) 15%, rgba(255, 255, 255, 0.3)), url(${bgOverlay}) no-repeat center/cover`,
      }}>
      <Swiper
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}>
        {heroData.map((data, i) => (
          <SwiperSlide key={i}>
            <div className="mx-5 flex flex-col gap-8 py-10 font-roboto md:container md:mx-auto md:flex-row md:items-center md:justify-between md:gap-16 md:py-20">
              {/* product title container */}
              <div className="w-full text-center md:w-1/2 md:pl-5 md:text-left">
                {data.id === 3 ? (
                  <div className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full bg-[#EDF6FD]/60 px-3 py-1 font-medium text-primary md:mx-0">
                    <Image
                      width={1000}
                      height={1000}
                      src={giftIcon}
                      alt="label icon"
                      className="size-6"
                    />
                    FREE - with any White Label Products!
                  </div>
                ) : (
                  <p className="mx-auto w-fit rounded-full bg-[#EDF6FD]/60 px-3 py-1 font-semibold text-primary md:mx-0">
                    White Label Business
                  </p>
                )}
                <h1 className="mt-4 text-balance font-montserrat text-3xl font-bold capitalize md:text-5xl">
                  {data.title}
                </h1>
                <p className="mt-8 text-xl text-gray-800">{data.details}</p>
                <button
                  onClick={() => scrollToProduct(data.id)}
                  className="group mt-8 inline-flex items-center rounded bg-primary px-6 py-3 font-medium text-white shadow">
                  <span className="flex items-center px-3">
                    <span className="transition-transform duration-300 group-hover:-translate-x-2">
                      {data.id !== 3 ? "Buy Now" : "See Details"}
                    </span>
                  </span>
                  <MdArrowDownward className="-ml-3 scale-0 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
                </button>

                {data.id !== 3 && (
                  <div className="mt-8 flex w-fit gap-2 rounded-full bg-[#EDF6FD]/60 px-3 py-1 font-medium text-primary md:items-center">
                    <Image
                      width={1000}
                      height={1000}
                      src={giftIcon}
                      alt="label icon"
                      className="size-6"
                    />
                    GET FREE - Accounting GAAP Software with any White Label!
                  </div>
                )}
              </div>

              {/* image container */}
              <div className="w-full md:w-1/2">
                <Image
                  width={1000}
                  height={1000}
                  src={deviceImg}
                  alt="sass software img"
                  loading="lazy"
                  className="mx-auto h-115 w-full max-w-96 object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
