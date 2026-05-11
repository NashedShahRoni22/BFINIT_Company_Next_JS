"use client";
import Script from "next/script";

export default function Chatbot() {
  return (
    <>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        strategy="lazyOnload"></Script>
      <div
        className="elfsight-app-e34ef31a-32e1-4ba8-8bc4-d184204b824d"
        data-elfsight-app-lazy></div>
    </>
  );
}
