"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Pricing({ sectionRef }) {
  const cores = [1, 2, 4, 6];
  const rams = [
    "4 GB RAM DDR4 ECC",
    "8 GB RAM DDR4 ECC",
    "16 GB RAM DDR4 ECC",
    "32 GB RAM DDR4 ECC",
  ];

  const configMap = {
    1: {
      ram: "4 GB RAM DDR4 ECC",
      storages: ["100 GB SSD", "250 GB HDD"],
      price: 14.5,
      productId: 9,
    },
    2: {
      ram: "8 GB RAM DDR4 ECC",
      storages: ["200 GB SSD", "500 GB HDD"],
      price: 21.5,
      productId: 10,
    },
    4: {
      ram: "16 GB RAM DDR4 ECC",
      storages: ["300 GB SSD", "1TB HDD"],
      price: 40.5,
      productId: 11,
    },
    6: {
      ram: "32 GB RAM DDR4 ECC",
      storages: ["500 GB SSD", "2TB HDD"],
      price: 69.5,
      productId: 12,
    },
  };

  const ramToCoreMap = {
    "4 GB RAM DDR4 ECC": 1,
    "8 GB RAM DDR4 ECC": 2,
    "16 GB RAM DDR4 ECC": 4,
    "32 GB RAM DDR4 ECC": 6,
  };

  const [core, setCore] = useState("");
  const [ram, setRam] = useState("");
  const [storage, setStorage] = useState("");
  const [storages, setStorages] = useState([]);
  const [price, setPrice] = useState(0);
  const [productId, setProductId] = useState("");

  // Sync RAM when core changes
  useEffect(() => {
    if (core && configMap[core]) {
      setRam(configMap[core].ram);
    }
  }, [core]);

  // Sync Core when RAM changes
  useEffect(() => {
    if (ram && ramToCoreMap[ram]) {
      const matchingCore = ramToCoreMap[ram];
      setCore(matchingCore);
    }
  }, [ram]);

  // Update storage, price, and productId when core changes
  useEffect(() => {
    if (core && configMap[core]) {
      const config = configMap[core];
      setStorages(config.storages);
      setPrice(config.price);
      setProductId(config.productId);
      setStorage(""); // reset storage when config changes
    }
  }, [core]);

  return (
    <div
      ref={sectionRef}
      className="mx-5 py-5 md:flex md:justify-center md:py-10">
      <div className="rounded p-5 shadow-lg md:w-1/2 lg:w-1/3">
        <h5 className="text-center text-2xl font-inter font-semibold">
          Build your own VPS!
        </h5>
        <div className="my-5 flex flex-col gap-2.5">
          {/* Core Selection */}
          <label className="text-sm">Processor (Core)</label>
          <select
            onChange={(e) => setCore(Number(e.target.value))}
            value={core}
            className="border-royal-blue w-full rounded-full border px-4 py-2 text-sm focus:outline-none">
            <option value="">Choose an option</option>
            {cores.map((c, i) => (
              <option key={i} value={c}>
                {c} Core
              </option>
            ))}
          </select>

          {/* RAM Selection */}
          <label className="text-sm">RAM</label>
          <select
            onChange={(e) => setRam(e.target.value)}
            value={ram}
            className="border-royal-blue w-full rounded-full border px-4 py-2 text-sm focus:outline-none">
            <option value="">Choose an option</option>
            {rams.map((r, i) => (
              <option key={i} value={r}>
                {r}
              </option>
            ))}
          </select>

          {/* Storage Options */}
          {storages.length > 0 && (
            <>
              <label className="text-sm">Storage</label>
              <select
                onChange={(e) => setStorage(e.target.value)}
                value={storage}
                className="border-royal-blue w-full rounded-full border px-4 py-2 text-sm focus:outline-none">
                <option value="">Choose an option</option>
                {storages.map((s, i) => (
                  <option key={i} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </>
          )}

          {/* Price Display */}
          {core && ram && storage && (
            <div className="my-4 text-center text-lg font-semibold">
              <p>
                Total Price:{" "}
                <span className="text-royal-blue">€{price.toFixed(2)}</span>{" "}
                <span className="text-xs">/ Per month</span>
              </p>
            </div>
          )}
        </div>

        {core && ram && storage && (
          <Link
            href={`https://hpanel.bfinit.com/checkout?productId=${productId}&packageType=server&ram=${ram}&storage=${storage}&timePeriod=1&currency=USD&currencyRate=1&storageVariantId=`}
            target="_blank"
            className="bg-royal-blue inline-block w-full rounded-full bg-brand px-4 py-2 text-center text-white">
            Order Now
          </Link>
        )}
      </div>
    </div>
  );
}
