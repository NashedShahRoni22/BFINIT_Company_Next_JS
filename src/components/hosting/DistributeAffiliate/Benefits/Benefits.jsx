import { FiDollarSign, FiGlobe, FiHeadphones } from "react-icons/fi";

const benefitsData = [
  {
    icon: <FiDollarSign className="text-3xl text-brand" />,
    title: "Lucrative Commissions",
    desc: "Earn up to 30% recurring commissions",
  },
  {
    icon: <FiGlobe className="text-3xl text-brand" />,
    title: "Global Opportunities",
    desc: "Sell to customers worldwide",
  },
  {
    icon: <FiHeadphones className="text-3xl text-brand" />,
    title: "Dedicated Support",
    desc: "Partner success team always available",
  },
];

export default function Benefits() {
  return (
    <div className="grid gap-8 divide-y py-5 md:grid-cols-3 md:divide-x md:divide-y-0">
      {benefitsData.map((item, i) => (
        <div key={i} className="p-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50">
            {item.icon}
          </div>
          <h3 className="mb-2 text-lg font-medium font-inter">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
