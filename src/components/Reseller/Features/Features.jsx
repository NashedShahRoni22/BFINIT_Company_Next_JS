import SectionContainer from "@/components/shared/SectionContainer";
import resellerFeats from "../../../data/resellerFeats";
import Image from "next/image";

export default function Features() {
  return (
    <SectionContainer>
      <h2 className="mb-16 text-2xl text-center font-bold md:text-4xl font-inter">
        Why Partner With Us?
      </h2>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        {resellerFeats.map((feat, i) => (
          <div key={i} className="">
            <Image
              width={1000}
              height={1000}
              src={feat.image}
              alt={feat.title}
              loading="lazy"
              className="mb-7 size-16 md:size-20"
            />
            <h4 className="text-2xl font-semibold">{feat.title}</h4>
            <p className="mt-3 font-medium">{feat.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
