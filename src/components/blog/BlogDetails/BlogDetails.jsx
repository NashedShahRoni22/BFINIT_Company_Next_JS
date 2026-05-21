"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "@/components/shared/Loader";
import formatDate from "@/utils/formatDate";
import Container from "@/components/shared/Container";

function readingTime(html) {
  if (!html) return "1 min read";
  const words = html
    .replace(/<[^>]+>/g, "")
    .trim()
    .split(/\s+/).length;
  return `${Math.ceil(words / 200)} min read`;
}

export default function BlogDetailPage({ slug }) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchBlogDetails = async () => {
      try {
        const res = await fetch(
          `https://api.blog.bfinit.com/api/v1/single_blog_view/${slug}`,
        );
        const data = await res.json();
        if (data.status) {
          setBlog(data.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [slug]);

  const tags = ["SSD", "Server", "Web Hosting", "Performance"];

  if (loading) {
    return <Loader />;
  }

  if (!blog) {
    return <p className="text-center mt-10 text-gray-500">No details found</p>;
  }

  return (
    <Container>
      <div className="pb-12 mt-20">
        {/* ── Nav bar ── */}
        <header className="flex items-center justify-between py-3.5 pb-5 border-b border-[#e5e7eb] mb-7">
          <Link
            href="/blogs"
            className="flex items-center gap-1.5 text-[13px] text-[#6b7280] no-underline hover:text-[#111827]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to blog
          </Link>
          <div className="flex gap-2">
            <button
              className="flex items-center gap-1.5 text-[12px] text-[#6b7280] bg-transparent border border-[#d1d5db] rounded-full px-3 py-1.25 cursor-pointer hover:bg-[#f3f4f6] hover:text-[#111827]"
              aria-label="Share on Twitter">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="max-[480px]:hidden">Tweet</span>
            </button>
            <button
              className="flex items-center gap-1.5 text-[12px] text-[#6b7280] bg-transparent border border-[#d1d5db] rounded-full px-3 py-1.25 cursor-pointer hover:bg-[#f3f4f6] hover:text-[#111827]"
              aria-label="Share">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              <span className="max-[480px]:hidden">Share</span>
            </button>
            <button
              className="flex items-center gap-1.5 text-[12px] text-[#6b7280] bg-transparent border border-[#d1d5db] rounded-full px-3 py-1.25 cursor-pointer hover:bg-[#f3f4f6] hover:text-[#111827]"
              aria-label="Bookmark">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </button>
          </div>
        </header>

        {/* ── Main layout ── */}
        <div className="flex gap-10 items-start">
          {/* ── Article ── */}
          <article className="flex-1 min-w-0">
            <span className="inline-block text-[11px] font-semibold tracking-wider px-2.5 py-0.75 rounded-full bg-[#dbeafe] text-[#1e40af]">
              {blog.category_name}
            </span>

            <h1 className="text-[28px] font-bold leading-[1.3] text-[#111827] mt-3 mb-0 max-[768px]:text-[22px]">
              {blog.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center flex-wrap gap-3.5 mt-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 height-9 rounded-full bg-[#dbeafe] text-[#1e40af] text-[12px] font-semibold flex items-center justify-center shrink-0">
                  BF
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#111827] m-0">
                    BFINIT Team
                  </p>
                  <p className="text-[12px] text-[#6b7280] m-0">Staff writer</p>
                </div>
              </div>
              <div className="w-px h-5 bg-[#e5e7eb] max-[480px]:hidden" />
              <span className="flex items-center gap-1.25 text-[13px] text-[#6b7280]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <time dateTime={blog.created_at}>
                  {formatDate(blog.created_at)}
                </time>
              </span>
              <span className="flex items-center gap-1.25 text-[13px] text-[#6b7280]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {readingTime(blog.content)}
              </span>
            </div>

            {/* Hero image */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#e5e7eb] bg-[#f9fafb] mt-6 mb-8">
              {blog.thumbnail && (
                <Image
                  src={blog.thumbnail}
                  alt={blog.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              )}
            </div>

            {/* Body */}
            <div
              className="text-[#1f2937] [&_h2]:text-[20px] [&_h2]:font-bold [&_h2]:text-[#111827] [&_h2]:mt-8 [&_h2]:mb-[0.6rem] [&_h3]:text-[16px] [&_h3]:font-semibold [&_h3]:text-[#111827] [&_h3]:mt-[1.4rem] [&_h3]:mb-[0.4rem] [&_p]:text-[15px] [&_p]:leading-[1.8] [&_p]:mb-4 [&_a]:text-[#1d4ed8] [&_a]:no-underline hover:[&_a]:underline [&_strong]:font-semibold [&_ul]:pl-6 [&_ul]:mt-2 [&_ul]:mb-4 [&_li]:text-[15px] [&_li]:leading-[1.8] [&_li]:mb-1"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Footer row */}
            <div className="flex items-center justify-between flex-wrap gap-3 pt-6 border-t border-[#e5e7eb] mt-9">
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-0.75 rounded-full bg-[#f3f4f6] text-[#6b7280] border border-[#e5e7eb]">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-1.5 text-[12px] text-[#6b7280] bg-transparent border border-[#d1d5db] rounded-full px-3 py-1.25 cursor-pointer hover:bg-[#f3f4f6] hover:text-[#111827]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                Share article
              </button>
            </div>

            {/* Author card */}
            <div className="border border-[#e5e7eb] rounded-xl p-5 mt-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af] mt-0 mb-3">
                Written by
              </p>
              <div className="flex gap-3.5 items-start">
                <div className="w-11 h-11 text-[14px] rounded-full bg-[#dbeafe] text-[#1e40af] font-semibold flex items-center justify-center shrink-0">
                  BF
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#111827] m-0">
                    BFINIT Team
                  </p>
                  <p className="text-[13px] text-[#6b7280] mt-1 mb-2 leading-[1.65]">
                    BFINIT specialises in high-performance hosting solutions.
                    Our team shares practical insights on servers,
                    infrastructure, and the web.
                  </p>
                  <Link
                    href="https://bfinit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-[#1d4ed8] no-underline hover:underline">
                    Visit bfinit.com →
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Container>
  );
}
