import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Contact() {
  return (
    <section className="md:py-28">
      <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl font-inter">
        Ready to Start Your E-Commerce Journey?
      </h2>
      <p className="mx-auto w-full max-w-3xl text-center text-sm text-brand">
        <span className="font-medium">* Disclaimer:</span> While this guide
        provides a comprehensive overview of E-Commerce strategies, we encourage
        users to conduct their own research tailored to their specific business
        needs.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row">
        <Link
          href="/bfinit-ecomerce-platform"
          className="group inline-flex items-center rounded border border-brand px-6 py-3 font-semibold text-brand shadow transition-all duration-200 ease-linear hover:bg-brand hover:text-white">
          <span className="flex items-center px-3">
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              Get Started with BFINIT
            </span>
          </span>
          <BsArrowRight className="-ml-3 scale-0 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />
        </Link>
        <Link
          href="/contact"
          className="group w-fit rounded border border-brand bg-brand px-6 py-3 font-semibold text-white shadow transition-all duration-200 ease-linear hover:bg-[#135996]">
          Contact Us for Support
        </Link>
      </div>
    </section>
  );
}
