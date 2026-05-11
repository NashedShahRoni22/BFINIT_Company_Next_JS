import Link from "next/link";
import expertBg from "../../../../assets/server-home/expert-bg.jpg";
import Image from "next/image";

const benefitsData = [
  {
    id: 1,
    title: "550 Gbit/s",
    description:
      "Our backbone boasts a robust 550 Gbit/s capacity with a fully redundant MPLS ring for unmatched reliability and performance.",
    icon: "🚀",
  },
  {
    id: 2,
    title: "24/7 Support",
    description:
      "Got a question? Feel free to message us anytime. Together, we'll always find the solution!",
    icon: "❓",
  },
  {
    id: 3,
    title: "Ready in 24 hours",
    description:
      "Order your new Virtual or Dedicated Server now and be up and running in 24 hours — This is our promise!",
    icon: "⏳",
  },
  {
    id: 4,
    title: "Modern Data Centers",
    description:
      "Our state-of-the-art data centers in Strasbourg and St. Louis are independently tested and certified for excellence.",
    icon: "🖥️",
    button: "Learn more",
    href: "/data-center",
  },
];

export default function Benefits() {
  return (
    <section className="w-full px-5 py-10 text-brand md:container md:mx-auto md:px-0 md:py-20">
      {/* Section Heading */}
      <h3 className="text-accent text-sm font-bold uppercase">Top Benefits</h3>
      <h2 className="font-inter mt-2 text-3xl font-bold">
        Everything for peak performance and reliability
      </h2>

      {/* Benefits Grid */}
      <div className="mt-8 grid grid-cols-12 gap-6">
        {benefitsData.map((benefit, i) => (
          <div
            key={benefit.id}
            style={{
              backgroundImage: benefit.bgImg && `url(${benefit.bgImg.src})`,
            }}
            className={`border-neutral-200 rounded-2xl border p-6 text-center ${benefit.bgImg ? "flex flex-col justify-center bg-[#14161c] bg-cover bg-center text-white" : "bg-[#fafbff]"} ${
              i >= 3 ? "col-span-12 md:col-span-6" : "col-span-12 md:col-span-4"
            }`}>
            {benefit.icon && (
              <div className="mb-3 text-4xl text-red-500">{benefit.icon}</div>
            )}
            <h4 className={`text-xl font-semibold ${benefit.textColor}`}>
              {benefit.title}
            </h4>
            <p className={`mt-2`}>{benefit.description}</p>
            {benefit.button && (
              <Link
                href={benefit.href}
                className="mt-4 inline-block rounded-full border px-5 py-2 font-medium transition hover:bg-gray-200">
                {benefit.button}
              </Link>
            )}
          </div>
        ))}

        {/* Expert Contact Card */}
        <div className="border-neutral-200 relative col-span-12 h-auto max-h-73 overflow-hidden rounded-2xl border bg-[#fafbff] md:col-span-6">
          <Image
            src={expertBg}
            alt="expert"
            className="object-cover object-center"
          />
          <div className="absolute bottom-4 left-4">
            <Link
              href="/contact"
              className="flex items-center rounded-full bg-white px-5 py-2 font-medium">
              Contact an expert 💬
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
