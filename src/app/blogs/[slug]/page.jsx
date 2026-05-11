import React from "react";

export default async function page({ props }) {
  const { slug } = await props;
  return <div>this is {slug} page</div>;
}
