import { IoArrowRedoSharp } from "react-icons/io5";
import OurBrands from "../OurBrands/OurBrands";
import Container from "@/components/shared/Container";
import Link from "next/link";

export default function OurTechnologies() {
  const data = [
    {
      header: "Bitss Cyber Security",
      subChild: [
        {
          name: "Bitss WAP",
          link: "https://bitss.one/products",
        },
        {
          name: "Bitss C",
          link: "https://bitss.one/products",
        },
        {
          name: "Bitss VWAR",
          link: "https://bitss.one/products",
        },
      ],
    },
    {
      header: "Database Hosting & Security",
      subChild: [
        {
          name: "Data Center",
          link: "/data-center",
        },
        {
          name: "Hosting",
          link: "/hosting-products/7",
        },
        {
          name: "H Panel",
          link: "https://hpanel.bfinit.com/login",
        },
      ],
    },
    {
      header: "Build Business",
      subChild: [
        {
          name: "SaaS Software",
          link: "/sass-software",
        },
        {
          name: "White Label",
          link: "/white-label",
        },
        {
          name: "Become a Distributor",
          link: "/reseller-program",
        },
        {
          name: "E-commerce Platform",
          link: "/bfinit-ecomerce-platform",
        },
        {
          name: "E-commerce Guide",
          link: "/ecommerce-guide",
        },
      ],
    },
    {
      header: "Expand Business",
      subChild: [
        {
          name: "Pensaki Blackboard",
          link: "https://pensaki.org/",
        },
        {
          name: "Omada HR Payroll",
          link: "https://omada-clasico.com/omada-hr-payroll",
        },
        {
          name: "Omada Project Management",
          link: "https://omada-clasico.com/project-management",
        },
        {
          name: "Clasico Payslips",
          link: "https://omada-clasico.com/clasico-payslip",
        },
        {
          name: "Ifgaap Mobile Invoicing",
          link: "https://ifgaap.org/",
        },
        {
          name: "Ifgaap GL Accounting",
          link: "https://ifgaap.org/",
        },
      ],
    },
    {
      header: "Social Communication",
      subChild: [
        {
          name: "Sosay",
          link: "https://sosay.org/",
        },
        {
          name: "Bobosoho",
          link: "https://bobosoho.com/",
        },
      ],
    },
  ];

  return (
    <Container>
      <section className="mx-5 py-10 md:container md:mx-auto md:py-28">
        <h5 className="text-2xl font-semibold md:text-4xl font-inter">
          Our Technologies
        </h5>

        <div className="mt-5 grid gap-5 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
          {data.map((d, i) => (
            <div key={i} className="rounded p-4 shadow">
              <h5 className="text-xl font-semibold text-brand">{d.header}</h5>
              <ul className="ml-5 mt-2.5">
                {d.subChild.map((ds, i) => (
                  <li key={i} className="list-disc">
                    <Link href={ds.link} className="flex justify-between">
                      {ds.name} <IoArrowRedoSharp className="text-brand" />{" "}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <OurBrands />
      </section>
    </Container>
  );
}
