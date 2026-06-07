import BlogDetails from "@/components/blog/BlogDetails/BlogDetails";
import React from "react";

export default async function page({ params }) {
  const { slug } = await params;
  return (
    <>
      <BlogDetails slug={slug} />
    </>
  );
}
