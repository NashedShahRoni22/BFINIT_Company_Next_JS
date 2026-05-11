"use client";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { resellerFaq } from "../../../data/resellerFaq";

export default function Faq() {
  const [open, setOpen] = useState("");

  const toggleAccordion = (que) => {
    setOpen((prev) => (prev === que ? "" : que));
  };

  return (
    <section className="mx-5 py-10 md:container md:mx-auto md:py-20 md:max-w-3xl">
      <h2 className="mb-16 text-2xl text-center font-bold md:text-4xl font-inter">
        Frequently asked <br /> questions
      </h2>

      <div className="divide-y divide-[#D4DBE0]">
        {resellerFaq.map((faq, i) => (
          <div key={i} className="py-5 px-1 cursor-pointer">
            <h3
              onClick={() => toggleAccordion(faq.que)}
              className="text-xl font-semibold flex items-center justify-between">
              {faq.que}{" "}
              <SlArrowDown
                className={`min-w-fit text-base transition-all duration-300 ease-in-out ${
                  faq.que === open ? "rotate-180" : "rotate-0"
                }`}
              />
            </h3>

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                faq.que === open
                  ? "grid-rows-[1fr] opacity-100 pt-3"
                  : "grid-rows-[0fr] opacity-0"
              }`}>
              <div className="overflow-hidden">{faq.ans}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
