import { FaServer, FaStore, FaUserTie } from "react-icons/fa";
import bitssLogo from "../../../assets/logo/bitss.png";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    icon: FaServer,
    title: "BFINIT Hosting",
    intro: "We offer our hosting from these solutions:",
    details:
      "Our hosting solutions include Web Hosting for reliable and affordable service, VPS Hosting for scalable and secure virtual servers, Custom VPS tailored to your exact needs, and the Starter Webpack for blazing fast web access.",
    price: "From $4.90/month",
    link: "/web-hosting",
  },
  {
    icon: FaStore,
    title: "E-commerce Web Builder",
    intro:
      "Get free e-commerce web builder with purchase of e-commerce hosting pack.",
    details:
      "Build up to 4 fully functional e-commerce websites at no extra cost when you purchase our e-commerce hosting pack. This offer enables startups and small businesses to establish an online presence without added expenses.",
    price: "Free",
    link: "/bfinit-ecomerce-platform",
  },
  {
    icon: FaUserTie,
    title: "Omada HR Payroll",
    intro:
      "Empower your workflow with comprehensive HR management starting at:",
    details:
      "Omada HR Payroll simplifies employee management with features like unlimited payslip runs, time and attendance tracking, holiday scheduling, and task assignments. It also includes a private staff panel, multilingual payslips in 16 languages, and unlimited training and support to ensure smooth operations.",
    price: "From €5/month",
    link: "https://omada-clasico.com/omada-hr-payroll",
  },
  {
    logo: bitssLogo,
    title: "Bitss Cybersecurity",
    intro: "Multi-layered protection solutions for websites and databases.",
    details:
      "Bitss Cybersecurity offers comprehensive tools including the C Contact Form for anti-spam and virus filtering, WAP for login protection, and VWAR for database security and code filtering. These tools are available across multiple platforms such as WordPress, JavaScript, Windows, and Server—many already supported, with continuous upgrades for wider coverage.",
    price: "From €7.50",
    link: "https://bitss.one",
  },
];

const DistributorProducts = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      className="mx-4 py-10 md:container md:mx-auto md:py-20">
      <div className="text-center">
        <h2 className="text-center text-2xl font-bold md:text-4xl font-inter">
          Partner-Ready Products to <br className="hidden md:block" />
          <span className="bg-linear-to-r from-brand to-brand/70 bg-clip-text text-transparent">
            Empower Your Clients
          </span>
        </h2>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl border border-gray-200 p-6">
            <div className="mb-5 flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                {product.icon ? (
                  <product.icon className="size-6" />
                ) : (
                  <Image
                    width={1000}
                    height={1000}
                    src={product.logo}
                    alt=""
                    className="size-6"
                  />
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold font-inter text-gray-900">
                  {product.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-gray-700">
                  {product.intro}
                </p>
              </div>
            </div>

            <p className="mb-6 flex-1 text-sm text-gray-700">
              {product.details}
            </p>

            <div className="flex flex-wrap justify-between gap-4 border-t pt-4">
              <div>
                <p className="text-sm font-medium text-gray-600">Starting at</p>
                <p className="text-lg font-bold text-gray-900">
                  {product.price}
                </p>
              </div>

              <Link
                href={product.link}
                target="_blanck"
                className="group inline-flex items-center rounded-full bg-brand/10 px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:bg-brand hover:text-white">
                <span className="flex items-center px-3">
                  <span className="transition-transform duration-300 group-hover:-translate-x-2">
                    Learn More
                  </span>
                </span>
                <BsArrowRight className="-ml-3 scale-0 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DistributorProducts;
