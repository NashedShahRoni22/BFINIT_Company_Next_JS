"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/shared/Loader";
import { usePathname } from "next/navigation";

export default function Blogs() {
  const location = usePathname();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    fetch("https://api.blog.bfinit.com/api/v1/show_blog/31")
      .then((res) => res.json())
      .then((data) => {
        setData(data?.data?.data);
        setLoader(false);
      });
  }, []);

  return (
    <section className="mx-5 py-10 md:container md:mx-auto">
      <div className="flex justify-between">
        <h2 className="font-semibold text-primary md:text-2xl">
          Recent Blogs & Information
        </h2>
        {location.pathname === "/" && (
          <Link
            href={"/blogs"}
            className="rounded bg-primary px-4 py-2 text-white shadow">
            View All
          </Link>
        )}
      </div>
      {loader ? (
        <Loader />
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {location.pathname === "/" ? (
            <>
              {data?.slice(0, 6)?.map((data, i) => (
                <div key={i} className="flex flex-col rounded border">
                  <Image
                    width={1000}
                    height={1000}
                    src={data.thumbnail}
                    alt=""
                    loading="lazy"
                    className="h-auto w-full rounded-t"
                  />
                  <div className="mt-4 flex-1 px-4">
                    <h5 to="/" className="text-xl font-semibold">
                      {data.title}
                    </h5>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.content.slice(0, 200),
                      }}
                      className="mb-5 mt-1.5 text-justify"
                    />
                  </div>

                  <div className="p-4 text-right">
                    <Link
                      href={`/blog/${data.custom_url}`}
                      className="inline-block w-fit self-start rounded bg-primary px-4 py-2 text-white">
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {data?.map((data, i) => (
                <div key={i} className="flex flex-col rounded border">
                  <Image
                    width={1000}
                    height={1000}
                    src={data.thumbnail}
                    alt=""
                    loading="lazy"
                    className="h-auto w-full rounded-t"
                  />
                  <div className="p-4">
                    <h5 to="/" className="text-xl font-semibold">
                      {data.title}
                    </h5>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.content.slice(0, 200),
                      }}
                      className="mb-5 mt-1.5 text-justify"
                    />
                    <Link
                      href={`/blog/${data.custom_url}`}
                      className="inline-block w-fit self-start rounded bg-primary px-4 py-2 text-white">
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </section>
  );
}
