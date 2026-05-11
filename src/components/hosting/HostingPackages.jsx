import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function HostingPackages({ s }) {
  const [storages, setStorages] = useState([]);
  const [exchangeRates, setExchangeRates] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [currencyCode, setCurrencyCode] = useState("USD");

  // Initialize with default values
  const [serverId, setServerId] = useState(s.id);
  const [ramId, setRamId] = useState(s.uniqueRams[0]);
  const [storageId, setStorageId] = useState(s.storages[0]);
  const [contract, setContract] = useState("3");

  // Prices data
  const [updatedPrice, setUpdatedPrice] = useState("");
  const [standardPrice, setStandardPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");

  // Get storage options based on the serverId and RAM
  useEffect(() => {
    if (serverId && ramId) {
      let url = `https://hpanel.bfinit.com/api/product/storages/${serverId}/${ramId}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setStorages(data?.data);
          setStorageId(data?.data[0]?.storage);
        });
    }
  }, [serverId, ramId]);

  // Get price based on the selected RAM and storage
  useEffect(() => {
    if (serverId && ramId && storageId) {
      let priceurl = `https://hpanel.bfinit.com/api/product/price/${serverId}/${ramId}/${storageId}`;
      fetch(priceurl)
        .then((res) => res.json())
        .then((data) => setUpdatedPrice(data?.data?.price));
    }
  }, [serverId, ramId, storageId]);

  useEffect(() => {
    const basePrice = parseFloat(updatedPrice || s?.defaultStorage?.price);

    // Apply discount based on contract
    let discountPercentage = 0;
    let month = 1;
    if (contract === "1") {
      discountPercentage = 0;
      month = 1;
    } else if (contract === "3") {
      discountPercentage = 15;
      month = 3;
    } else if (contract === "6") {
      discountPercentage = 19;
      month = 6;
    } else if (contract === "12") {
      discountPercentage = 28;
      month = 12;
    } else if (contract === "24") {
      discountPercentage = 34;
      month = 24;
    }
    const calculatedStandardPrice = basePrice * month;
    setStandardPrice((calculatedStandardPrice * exchangeRate).toFixed(2));

    const calculatedDiscountedPrice =
      calculatedStandardPrice * ((100 - discountPercentage) / 100);
    setDiscountedPrice((calculatedDiscountedPrice * exchangeRate).toFixed(2));
  }, [contract, updatedPrice, exchangeRate]);

  // Get exchange rates
  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        setExchangeRates(Object.entries(data?.rates));
      });
  }, []);

  // Handle the currency and rate change
  const handleCurrencyChange = (e) => {
    const selectedCurrencyCode = e.target.value;
    const selectedCurrencyRate = exchangeRates.find(
      ([currency, rate]) => currency === selectedCurrencyCode,
    )[1];

    setCurrencyCode(selectedCurrencyCode);
    setExchangeRate(selectedCurrencyRate);
  };

  return (
    <div className="flex flex-col justify-between gap-2.5 rounded p-6 shadow">
      <h5 className="font-bold text-brand">{s?.name}</h5>
      <div className="flex items-center gap-2">
        <Image
          width={1000}
          height={1000}
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Intel_Inside_Logo_%282020%29.svg"
          alt=""
          loading="lazy"
          className="h-15 w-auto"
        />
        <div>
          <p className="text-sm">{s?.processor}</p>
          <hr />
          <h5 className="text-sm font-semibold">{s?.core}</h5>
        </div>
      </div>

      {s?.ips !== null && (
        <p className="flex gap-2">
          <FaCheck className="text-brand" />
          <span className="flex-1 text-sm">{s?.ips}</span>
        </p>
      )}

      {/* description 1 */}
      {s?.description1 !== null &&
        s?.description1?.includes("[") &&
        JSON.parse(s.description1)?.map((desc, i) => (
          <p key={i} className="flex gap-2">
            <FaCheck className="text-brand" />
            <span className="flex-1 text-sm">{desc}</span>
          </p>
        ))}

      {s?.description1 !== null && !s?.description1?.includes("[") && (
        <p className="flex gap-2">
          <FaCheck className="text-brand" />
          <span className="flex-1 text-sm">{s?.description1}</span>
        </p>
      )}

      {!s?.description1 && s?.description2 !== null && (
        <p className="flex gap-2">
          <FaCheck className="text-brand" />
          <span className="flex-1 text-sm">{s?.description2}</span>
        </p>
      )}
      {!s?.description1 && s?.description3 !== null && (
        <p className="flex gap-2">
          <FaCheck className="text-brand" />
          <span className="flex-1 text-sm">{s?.description3}</span>
        </p>
      )}

      {/* Select RAM with default value */}
      {s?.uniqueRams[0] !== "0 setup fee" && (
        <div className="flex flex-col gap-2.5">
          <label htmlFor="" className="text-sm font-semibold text-brand">
            Ram
          </label>
          <select
            value={ramId}
            onChange={(e) => setRamId(e.target.value)}
            className="rounded border border-brand px-4 py-1 focus:outline-none">
            {s?.uniqueRams?.map((ur, index) => (
              <option key={index} value={ur}>
                {ur}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Select Storage with default value */}
      <div className="flex flex-col gap-2.5">
        <label htmlFor="" className="text-sm font-semibold text-brand">
          Storage
        </label>
        {storages?.length > 0 ? (
          <select
            value={storageId}
            onChange={(e) => setStorageId(e.target.value)}
            className="rounded border border-brand px-4 py-1 focus:outline-none">
            {storages?.map((us, index) => (
              <option key={index} value={us?.storage}>
                {us?.storage}
              </option>
            ))}
          </select>
        ) : (
          <select
            value={storageId}
            onChange={(e) => setStorageId(e.target.value)}
            className="rounded border border-brand px-4 py-1 focus:outline-none">
            {s?.storages?.map((us, index) => (
              <option key={index} value={us}>
                {us}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Select Contract with default value */}
      <div className="flex flex-col gap-2.5">
        <label htmlFor="" className="text-sm font-semibold text-brand">
          Contract
        </label>
        <select
          value={contract}
          onChange={(e) => setContract(e.target.value)}
          className="rounded border border-brand px-4 py-1 focus:outline-none">
          <option value="1">1 Months</option>
          <option value="3">3 Months</option>
          <option value="6">6 Months</option>
          <option value="12">12 Months</option>
          <option value="24">24 Months</option>
        </select>
      </div>

      {/* Currency Select Box */}
      <div className="flex flex-col gap-2.5">
        <label htmlFor="" className="text-sm font-semibold text-brand">
          Currencey
        </label>
        <select
          value={currencyCode}
          onChange={handleCurrencyChange}
          className="rounded border border-brand px-4 py-1 focus:outline-none">
          {exchangeRates.map(([currencyCode], i) => (
            <option key={i} value={currencyCode}>
              {currencyCode}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2.5">
        <label htmlFor="" className="text-sm font-semibold text-brand">
          Server Location
        </label>
        {JSON.parse(s?.data_center).map((dc, i) => (
          <div key={i} className="flex items-center gap-2">
            {dc === "usa" && (
              <Image
                width={1000}
                height={1000}
                src="https://cdn-icons-png.flaticon.com/512/330/330426.png"
                alt=""
                loading="lazy"
                className="h-10 w-fit"
              />
            )}
            {dc === "europe" && (
              <Image
                width={1000}
                height={1000}
                src="https://cdn-icons-png.flaticon.com/512/555/555526.png"
                alt=""
                loading="lazy"
                className="h-10 w-fit"
              />
            )}
          </div>
        ))}
      </div>
      {/* Display Standard and Discounted Prices */}
      <p className="text-center font-semibold text-brand">
        {updatedPrice !== "" ? (
          (updatedPrice * exchangeRate).toFixed(2)
        ) : (
          <>{(s?.defaultStorage?.price * exchangeRate).toFixed(2)}</>
        )}{" "}
        {currencyCode} / <span className="text-sm">Per month</span>
      </p>

      {/* Discounted price */}
      {/* {discountedPrice !== "" && (
        <>
          <p className="text-center text-sm font-semibold">You are paying</p>
          <p className="text-center text-xl font-semibold text-brand md:text-2xl">
            {discountedPrice} {currencyCode}
          </p>
        </>
      )} */}

      <p className="text-center text-sm font-semibold">You are paying</p>
      <p className="text-center text-xl font-semibold text-brand md:text-2xl">
        {standardPrice} {currencyCode}
      </p>

      {/* Standard regular price */}
      {/* {contract !== "1" && (
        <>
          {standardPrice !== "" && (
            <>
              <p className="text-center text-sm">
                Standard regular price for {contract} month
              </p>
              <p className="text-center font-semibold text-red-400 line-through">
                {standardPrice} {currencyCode}
              </p>
            </>
          )}
        </>
      )} */}

      <Link
        href={`https://hpanel.bfinit.com/checkout?productId=${serverId}&packageType=server&ram=${ramId}&storage=${storageId}&timePeriod=${contract}&currency=${currencyCode}&currencyRate=${exchangeRate}&storageVariantId=`}
        target="_blank"
        className="mt-10 rounded-xl bg-brand px-4 py-2 text-center text-white">
        Order Now
      </Link>
    </div>
  );
}
