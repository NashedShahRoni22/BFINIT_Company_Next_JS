import Image from "next/image";
import { ecommerceFeat } from "../../../data/ecommerceFeat";

export default function Features({ sectionRef }) {
  return (
    <section ref={sectionRef} className="py-10">
      <h2 className="font-inter text-center text-2xl font-extrabold text-brand md:text-4xl">
        Innovative Features to Power Your Growth
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:py-20">
        {ecommerceFeat.map((feat) => (
          <div
            key={feat.id}
            className="border-gray-soft group rounded-xl border p-5 duration-300 ease-linear hover:bg-brand hover:text-white">
            <Image
              width={1000}
              height={1000}
              src={feat?.icon}
              alt=""
              loading="lazy"
              className="w-12"
            />
            <h5 className="font-inter mt-5 text-[20px] font-semibold text-brand duration-300 ease-linear group-hover:text-white md:text-[26px]">
              {feat.name}
            </h5>
            <p className="mt-2.5 text-[12px] md:text-[16px]">{feat.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
