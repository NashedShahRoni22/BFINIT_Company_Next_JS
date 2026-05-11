import Image from "next/image";
import euroImg from "../../../assets/data-center/european-dc.jpg";
import usaImg from "../../../assets/data-center/us-dc.jpg";

const locationInfo = [
  {
    img: euroImg,
    title: "Bfinit servers housed at European DataDock in Strasbourg",
    desc1:
      "Datadock has been in planning since 2007 and first became operational in 2010. The brand aim was a certain energy efficiency, to reduce both environmental impact and also operating costs.",
    desc2:
      "With the integration of a unique well-cooling into the data center concept, energy consumption at datadock can be kept so low that it has been acclaimed the greenest data center in Europe.",
  },
  {
    img: usaImg,
    title: "Bfinit servers housed at US DataPort in St. Louis, MO",
    desc1:
      "The data center in St. Louis became operational in 2013 and is currently considered one of the most modern data centers worldwide. It stands out particularly for its strategically optimal location in the heart of the USA, has connectivity to all major carriers and sits directly on the main artery of the American network.",
  },
];

export default function Location() {
  return (
    <>
      {locationInfo.map((info, i) => (
        <div
          key={i}
          className={`text-brand flex flex-col gap-8 px-5 py-10 md:container md:mx-auto md:flex-row md:px-0 md:py-20 ${
            i % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}>
          {/* Image Wrapper */}
          <div className="relative h-96 w-full md:w-1/2">
            <Image
              src={info.img}
              alt="reliable"
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="font-urbanist text-4xl font-bold font-inter text-balance">
              {info.title}
            </h2>
            {info.desc1 && <p className="mt-4">{info.desc1}</p>}
            {info.desc2 && <p className="mt-4">{info.desc2}</p>}
          </div>
        </div>
      ))}
    </>
  );
}
