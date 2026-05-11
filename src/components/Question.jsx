import question from "../assets/home/question.png";
import arrow from "../assets/arrow.png";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

export default function Question() {
  return (
    <section className="relative mx-5 mb-10 grid gap-8 rounded-xl border-2 border-brand pt-10 shadow-xl md:container md:mx-auto md:mb-20 md:grid-cols-2 md:items-center md:gap-16 md:pt-20">
      <div className="flex flex-col items-center gap-4 p-8">
        <h5 className="text-center text-2xl font-semibold font-inter text-brand md:text-4xl">
          Have more questions
        </h5>
        <p className="text-center">
          If you still can’t find the answer you’re looking for, let we help
          you.
        </p>
        <Link
          href={"/contact"}
          className="group flex w-fit items-center gap-4 rounded bg-brand px-6 py-3 font-semibold text-white shadow duration-300 ease-linear md:hover:scale-110">
          <span className="md:text-xl">Contact</span>
          <MdArrowOutward className="duration-300 ease-linear group-hover:rotate-45 md:text-xl" />
        </Link>
      </div>
      <div>
        <Image
          width={1000}
          height={1000}
          src={question}
          alt=""
          loading="lazy"
          className="w-full"
        />
      </div>
      <Image
        width={1000}
        height={1000}
        className="absolute bottom-0 left-0 hidden md:block w-auto h-20"
        src={arrow}
        alt=""
        loading="lazy"
      />
    </section>
  );
}
