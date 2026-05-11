import bg from "../../../assets/reseller/contact-bg.png";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="relative flex items-center bg-[#d7e4f7] md:min-h-125 md:bg-transparent">
      <Image
        width={1000}
        height={1000}
        src={bg}
        alt=""
        loading="lazy"
        className="absolute -z-10 h-full w-full object-cover"
      />
      <div className="mx-5 py-10 md:container md:mx-auto md:py-20">
        <div className="w-full md:ml-auto md:w-1/2">
          <p className="mb-7 text-lg font-bold">Reach Out Today</p>
          <h2 className="text-2xl font-bold md:text-4xl font-inter">
            Got Questions? <br />
            <span className="mt-1.5 inline-block">We&apos;re Here to Help</span>
          </h2>
          <p className="my-6 text-pretty leading-relaxed tracking-wide">
            If you’ve still got questions, contact us today! Whether you’re
            exploring options or need support, we’re here to help. Reach out to
            get the answers you need.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center rounded bg-brand px-4 py-2 font-medium text-white shadow">
            <span className="flex items-center px-3">
              <span className="transition-transform duration-300 group-hover:-translate-x-2">
                Get in Touch
              </span>
            </span>
            <BsArrowRight className="-ml-3 scale-0 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />
          </Link>
        </div>
      </div>
    </section>
  );
}
