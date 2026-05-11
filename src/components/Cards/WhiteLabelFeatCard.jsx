import Image from "next/image";

export default function WhiteLabelFeatCard({ feat }) {
  return (
    <div className="rounded-md border p-5">
      <Image
        width={1000}
        height={1000}
        src={feat.icon}
        alt={feat.title}
        loading="lazy"
        className="mb-4 size-10"
      />
      <h3 className="mb-2 text-xl font-semibold">{feat.title}</h3>
      <p className="text-gray-800">{feat.description}</p>
    </div>
  );
}
