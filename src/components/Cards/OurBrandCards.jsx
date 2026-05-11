"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ourBrands } from "@/data/ourBrands.js";

export default function OurBrandCards() {
  const [Open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");

  const handleOpen = (content) => {
    setOpen((l) => !l);
    setDialogContent(content);
  };

  return (
    <section>
      <div className="w-full md:w-2/3 gap-5 grid grid-cols-2 md:grid-cols-3">
        {ourBrands.map((service, i) => (
          <div key={i} className="">
            <div className=" bg-white ">
              {service.youtubeUrl ? (
                <div
                  onClick={() => handleOpen(service.youtubeUrl)}
                  className="flex h-full cursor-pointer items-center justify-center rounded border p-4 shadow transition-all duration-200 ease-linear hover:border-brand">
                  <Image
                    width={1000}
                    height={1000}
                    src={service.icon}
                    alt={service.title}
                    className="size-14 object-cover"
                  />
                </div>
              ) : (
                <Link
                  href={service.websiteUrl}
                  target="_blanck"
                  className="flex h-full items-center justify-center rounded border p-4 shadow transition-all duration-200 ease-linear hover:border-brand">
                  <Image
                    width={1000}
                    height={1000}
                    src={service.icon}
                    alt={service.title}
                    className="size-14 object-cover"
                  />
                </Link>
              )}
            </div>
            <p className="mt-2.5 text-center text-sm font-semibold font-inter">
              {service.title}
            </p>
          </div>
        ))}
      </div>
      {Open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-full max-w-4xl rounded-xl bg-white p-4 shadow-xl">
            {/* close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 z-10 rounded-full bg-gray-200 px-3 py-1">
              X
            </button>

            {/* video */}
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src={dialogContent}
                title="Video player"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
