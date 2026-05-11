"use client";
import { FiGift } from "react-icons/fi";
import { useCallback, useEffect, useState } from "react";
import { FaCheck, FaServer } from "react-icons/fa";
import Stepper from "../Stepper/Stepper";
import bonusProducts from "../../../data/bonusProduct";
import Image from "next/image";

const dedicateServerProducts = [
  {
    id: 3,
    title: "Self Managed Server",
    description:
      "Perfect for technical teams who want full control over server management",
  },
  {
    id: 1,
    title: "Fully Managed Server",
    description:
      "We handle all server management, updates, and maintenance for you",
  },
];

// Mock packages data
const mockPackages = [
  {
    id: 1,
    name: "Enterprise Basic",
    processor: "Intel Xeon E5-2680v4",
    core: "14 Cores / 28 Threads",
    ips: "1 Dedicated IP",
    defaultStorage: { price: 199 },
    uniqueRams: ["16GB DDR4", "32GB DDR4", "64GB DDR4"],
    storages: ["500GB SSD", "1TB SSD", "2TB SSD"],
    server_subscription_periods: [
      { id: 1, period_time: 3, discount: 0 },
      { id: 2, period_time: 6, discount: 5 },
      { id: 3, period_time: 12, discount: 10 },
      { id: 4, period_time: 24, discount: 15 },
    ],
    data_center: '["usa", "europe"]',
  },
  {
    id: 2,
    name: "Enterprise Pro",
    processor: "Intel Xeon Gold 6248",
    core: "20 Cores / 40 Threads",
    ips: "2 Dedicated IPs",
    defaultStorage: { price: 299 },
    uniqueRams: ["32GB DDR4", "64GB DDR4", "128GB DDR4"],
    storages: ["1TB SSD", "2TB SSD", "4TB SSD"],
    server_subscription_periods: [
      { id: 1, period_time: 3, discount: 0 },
      { id: 2, period_time: 6, discount: 5 },
      { id: 3, period_time: 12, discount: 10 },
      { id: 4, period_time: 24, discount: 15 },
    ],
    data_center: '["usa", "europe"]',
  },
];

export default function CustomPack() {
  // Selection states
  const [selectedServerType, setSelectedServerType] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedRam, setSelectedRam] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [contractId, setContractId] = useState(null);
  const [contract, setContract] = useState("3");

  // Data states
  const [packages, setPackages] = useState([]);
  const [storages, setStorages] = useState([]);
  const [exchangeRates, setExchangeRates] = useState([
    ["USD", 1],
    ["EUR", 0.85],
    ["GBP", 0.73],
  ]);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [currencyCode, setCurrencyCode] = useState("USD");

  // Price states
  const [updatedPrice, setUpdatedPrice] = useState("");
  const [standardPrice, setStandardPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");

  // Loading states
  const [loadingPackages, setLoadingPackages] = useState(false);
  const [loadingStorages, setLoadingStorages] = useState(false);

  // Stepper states
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);

  const fetchAllDedicatedServer = async (id) => {
    const res = await fetch(`https://hpanel.bfinit.com/api/product/list/${id}`);
    const data = await res.json();

    if (data.success === true) {
      setPackages(data.data);
      setLoadingPackages(false);
    }
  };

  // Step 1: Handle server type selection
  const handleServerTypeSelection = (serverType) => {
    setSelectedServerType(serverType);
    setSelectedPackage(null);
    setSelectedRam(null);
    setSelectedStorage(null);

    // Update stepper
    setCompletedSteps([1]);
    setCurrentStep(2);

    // Server packages API call - using mock data
    fetchAllDedicatedServer(serverType.id);
  };

  // Step 2: Handle package selection
  const handlePackageSelection = (packageData) => {
    setSelectedPackage(packageData);
    setSelectedRam(null);
    setSelectedStorage(null);

    // Update stepper
    setCompletedSteps([1, 2]);
    setCurrentStep(3);
  };

  // Step 3: Handle RAM selection
  const handleRamSelection = (ram) => {
    setSelectedRam(ram);
    setSelectedStorage(null);

    // Update stepper
    setCompletedSteps([1, 2, 3]);
    setCurrentStep(4);

    // Mock storage loading
    if (selectedPackage && ram) {
      setLoadingStorages(true);
      setTimeout(() => {
        setStorages([]);
        setLoadingStorages(false);
      }, 300);
    }
  };

  // Step 4: Handle storage selection
  const handleStorageSelection = (storage) => {
    setSelectedStorage(storage);

    // Update stepper
    setCompletedSteps([1, 2, 3, 4]);
    setCurrentStep(5);
  };

  // Get price when all selections are made
  useEffect(() => {
    if (selectedPackage && selectedRam && selectedStorage) {
      // Mock price calculation
      setUpdatedPrice(selectedPackage.defaultStorage.price);
    }
  }, [selectedPackage, selectedRam, selectedStorage]);

  // Find default contract ID
  const getDefaultContractId = useCallback(() => {
    const threeMonthPeriod = selectedPackage?.server_subscription_periods?.find(
      (period) => period.period_time === 3,
    );
    return (
      threeMonthPeriod?.id ??
      selectedPackage?.server_subscription_periods?.[0]?.id
    );
  }, [selectedPackage?.server_subscription_periods]);

  // Calculate prices
  useEffect(() => {
    if (
      selectedPackage &&
      (updatedPrice || selectedPackage?.defaultStorage?.price)
    ) {
      const selectedContractId = contractId
        ? contractId
        : getDefaultContractId();
      const selectedDuration =
        selectedPackage?.server_subscription_periods?.find(
          (duration) =>
            duration?.id?.toString() === selectedContractId?.toString(),
        );

      if (selectedDuration) {
        const basePrice = parseFloat(
          updatedPrice || selectedPackage?.defaultStorage?.price,
        );
        const month = selectedDuration?.period_time;
        const discountPercentage = selectedDuration?.discount || 0;

        setContract(month);

        const calculatedStandardPrice = basePrice * month;
        setStandardPrice((calculatedStandardPrice * exchangeRate).toFixed(2));

        const calculatedDiscountedPrice =
          calculatedStandardPrice * ((100 - discountPercentage) / 100);
        setDiscountedPrice(
          (calculatedDiscountedPrice * exchangeRate).toFixed(2),
        );
      }
    }
  }, [
    contractId,
    updatedPrice,
    selectedPackage,
    exchangeRate,
    getDefaultContractId,
  ]);

  // Handle currency change
  const handleCurrencyChange = (e) => {
    const selectedCurrencyCode = e.target.value;
    const selectedCurrencyRate = exchangeRates.find(
      ([currency, rate]) => currency === selectedCurrencyCode,
    )[1];

    setCurrencyCode(selectedCurrencyCode);
    setExchangeRate(selectedCurrencyRate);
  };

  const getBonusCount = (contractMonth) => {
    if (contractMonth >= 24) return 5;
    if (contractMonth >= 12) return 4;
    if (contractMonth >= 6) return 2;
    if (contractMonth >= 3) return 1;
    return 0;
  };

  const bonusCount = getBonusCount(parseInt(contract));

  return (
    <>
      <div>
        {/* Stepper */}
        <Stepper currentStep={currentStep} completedSteps={completedSteps} />

        <div className="mx-auto max-w-4xl">
          {/* Step 1: Server Type Selection */}
          {currentStep === 1 && (
            <div className="mb-12 scroll-mt-8">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold text-blue-600">
                  Choose Server Management Type
                </h2>
                <p className="text-gray-600">
                  Select the level of server management that fits your technical
                  requirements
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {dedicateServerProducts.map((serverType) => (
                  <div
                    key={serverType.id}
                    className={`cursor-pointer rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl ${
                      selectedServerType?.id === serverType.id
                        ? "border-blue-500 ring-2 ring-blue-500"
                        : "border border-gray-200"
                    }`}
                    onClick={() => handleServerTypeSelection(serverType)}>
                    <div className="text-center">
                      <FaServer className="mx-auto mb-4 text-4xl text-blue-600" />
                      <h3 className="mb-2 text-xl font-bold text-blue-600">
                        {serverType.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {serverType.description}
                      </p>
                      {selectedServerType?.id === serverType.id && (
                        <div className="mt-4 font-semibold text-green-600">
                          ✓ Selected
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Package Selection */}
          {currentStep === 2 && selectedServerType && (
            <div className="animate-fade-in mb-12 scroll-mt-8">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold text-blue-600">
                  Choose Server Package
                </h2>
                <p className="text-gray-600">
                  Select from available {selectedServerType.title.toLowerCase()}{" "}
                  packages
                </p>
              </div>

              {loadingPackages ? (
                <div className="py-8 text-center">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
                  <p className="mt-2 text-gray-600">Loading packages...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`cursor-pointer rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl ${
                        selectedPackage?.id === pkg.id
                          ? "border-blue-500 ring-2 ring-blue-500"
                          : "border border-gray-200"
                      }`}
                      onClick={() => handlePackageSelection(pkg)}>
                      <h3 className="mb-2 text-lg font-bold text-blue-600">
                        {pkg.name}
                      </h3>

                      <div className="mb-4 flex items-center gap-2">
                        <div className="flex h-10 w-16 items-center justify-center rounded bg-blue-100">
                          <span className="text-xs font-semibold text-blue-600">
                            Intel
                          </span>
                        </div>
                        <div>
                          <p className="text-sm">{pkg.processor}</p>
                          <h5 className="text-sm font-semibold">{pkg.core}</h5>
                        </div>
                      </div>

                      {pkg.ips && (
                        <p className="mb-2 flex gap-2">
                          <FaCheck className="mt-1 text-sm text-blue-600" />
                          <span className="flex-1 text-sm">{pkg.ips}</span>
                        </p>
                      )}

                      <div className="mt-4 border-t border-gray-100 pt-4">
                        <p className="text-center font-semibold text-blue-600">
                          Starting from ${pkg.defaultStorage?.price}/month
                        </p>
                        {selectedPackage?.id === pkg.id && (
                          <div className="mt-2 text-center font-semibold text-green-600">
                            ✓ Selected
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 3: RAM Selection */}
          {currentStep === 3 &&
            selectedPackage &&
            selectedPackage.uniqueRams[0] !== "0 setup fee" && (
              <div className="animate-fade-in mb-12 scroll-mt-8">
                <div className="mb-8 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-blue-600">
                    Choose RAM Configuration
                  </h2>
                  <p className="text-gray-600">
                    Select the RAM configuration for {selectedPackage.name}
                  </p>
                </div>

                <div className="mx-auto mb-8 grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
                  {selectedPackage.uniqueRams.map((ram, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer rounded-lg bg-white p-4 shadow transition-all hover:shadow-lg ${
                        selectedRam === ram
                          ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500"
                          : "border border-gray-200"
                      }`}
                      onClick={() => handleRamSelection(ram)}>
                      <div className="text-center">
                        <h4 className="font-semibold text-blue-600">{ram}</h4>
                        {selectedRam === ram && (
                          <div className="mt-2 text-sm font-semibold text-green-600">
                            ✓ Selected
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Step 4: Storage Selection */}
          {currentStep === 4 && selectedRam && (
            <div className="animate-fade-in mb-12 scroll-mt-8">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold text-blue-600">
                  Choose Storage Configuration
                </h2>
                <p className="text-gray-600">
                  Select the storage configuration for your server
                </p>
              </div>

              {loadingStorages ? (
                <div className="py-8 text-center">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
                  <p className="mt-2 text-gray-600">
                    Loading storage options...
                  </p>
                </div>
              ) : (
                <div className="mx-auto mb-8 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {(storages?.length > 0
                    ? storages
                    : selectedPackage.storages || []
                  ).map((storage, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer rounded-lg bg-white p-4 shadow transition-all hover:shadow-lg ${
                        selectedStorage ===
                        (storages?.length > 0 ? storage.storage : storage)
                          ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500"
                          : "border border-gray-200"
                      }`}
                      onClick={() =>
                        handleStorageSelection(
                          storages?.length > 0 ? storage.storage : storage,
                        )
                      }>
                      <div className="text-center">
                        <h4 className="font-semibold text-blue-600">
                          {storages?.length > 0 ? storage.storage : storage}
                        </h4>
                        {selectedStorage ===
                          (storages?.length > 0
                            ? storage.storage
                            : storage) && (
                          <div className="mt-2 text-sm font-semibold text-green-600">
                            ✓ Selected
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 5: Final Configuration and Pricing */}
          {currentStep === 5 && selectedStorage && (
            <div className="animate-fade-in mb-12 scroll-mt-8">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold text-blue-600">
                  Final Configuration & Pricing
                </h2>
                <p className="text-gray-600">
                  Review your selections and choose contract duration
                </p>
              </div>

              <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Configuration Summary */}
                  <div>
                    <h3 className="mb-4 border-b pb-2 text-xl font-semibold text-blue-600">
                      Your Configuration
                    </h3>

                    <div className="mb-6 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Server Type:</span>
                        <span className="font-medium">
                          {selectedServerType.title}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Package:</span>
                        <span className="font-medium">
                          {selectedPackage.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">RAM:</span>
                        <span className="font-medium">{selectedRam}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Storage:</span>
                        <span className="font-medium">{selectedStorage}</span>
                      </div>
                    </div>

                    {/* Contract Duration */}
                    <div className="mb-4">
                      <label className="mb-2 block text-sm font-semibold text-blue-600">
                        Contract Duration
                      </label>
                      <select
                        value={contractId ?? getDefaultContractId()}
                        onChange={(e) => setContractId(e.target.value)}
                        className="w-full rounded border border-blue-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600/20">
                        {selectedPackage.server_subscription_periods?.map(
                          (duration) => (
                            <option key={duration.id} value={duration.id}>
                              {duration.period_time} Months{" "}
                              {duration.discount &&
                                `(${duration.discount}% Off)`}
                            </option>
                          ),
                        )}
                      </select>
                    </div>

                    {/* Currency */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-blue-600">
                        Currency
                      </label>
                      <select
                        value={currencyCode}
                        onChange={handleCurrencyChange}
                        className="w-full rounded border border-blue-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600/20">
                        {exchangeRates.map(([currencyCode], i) => (
                          <option key={i} value={currencyCode}>
                            {currencyCode}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Pricing Summary */}
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="mb-4 text-xl font-semibold text-blue-600">
                      Pricing Summary
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600">Monthly Price</p>
                        <p className="text-lg font-semibold text-blue-600">
                          {updatedPrice !== ""
                            ? (updatedPrice * exchangeRate).toFixed(2)
                            : (
                                selectedPackage?.defaultStorage?.price *
                                exchangeRate
                              ).toFixed(2)}{" "}
                          {currencyCode}
                        </p>
                      </div>

                      <div className="border-t pt-4">
                        <p className="mb-2 text-sm font-semibold">
                          Total Amount ({contract} months)
                        </p>
                        <p className="text-2xl font-bold text-blue-600">
                          {discountedPrice ? discountedPrice : standardPrice}{" "}
                          {currencyCode}
                        </p>
                      </div>

                      {/* Server Location */}
                      <div className="border-t pt-4">
                        <p className="mb-2 text-sm font-semibold text-blue-600">
                          Server Locations
                        </p>
                        <div className="flex items-center gap-3">
                          {JSON.parse(selectedPackage?.data_center || "[]").map(
                            (dc, i) => (
                              <div key={i} className="flex items-center gap-2">
                                {dc === "usa" && (
                                  <>
                                    <div className="flex h-6 w-6 items-center justify-center rounded bg-red-500">
                                      <span className="text-xs text-white">
                                        🇺🇸
                                      </span>
                                    </div>
                                    <span className="text-sm">USA</span>
                                  </>
                                )}
                                {dc === "europe" && (
                                  <>
                                    <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-500">
                                      <span className="text-xs text-white">
                                        🇪🇺
                                      </span>
                                    </div>
                                    <span className="text-sm">Europe</span>
                                  </>
                                )}
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bonus Products */}
                {bonusCount > 0 && (
                  <div className="mt-8 border-t border-gray-100 pt-6">
                    <div className="rounded-lg bg-linear-to-r from-blue-50 to-blue-100 p-6">
                      <div className="mb-4 flex items-center gap-2">
                        <FiGift className="text-xl text-blue-600" />
                        <h3 className="text-lg font-semibold text-blue-600">
                          {bonusCount} Free Product{bonusCount > 1 ? "s" : ""}{" "}
                          Included
                        </h3>
                      </div>

                      <p className="mb-4 text-sm text-gray-600">
                        Choose your preferred products during checkout. * Free
                        products are valid for the duration of your hosting
                        plan.
                      </p>

                      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        {bonusProducts
                          .slice(0, bonusCount)
                          .map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 rounded bg-white p-3">
                              <Image
                                width={1000}
                                height={1000}
                                src={item.logo}
                                alt={`${item.name} logo`}
                                className="h-8 w-8 object-contain"
                              />
                              <div className="flex-1">
                                <p className="text-sm font-medium">
                                  {item.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                              <div className="text-sm font-semibold text-blue-600">
                                {item.price}/yr
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Order Button */}
                <div className="mt-8 text-center">
                  <button className="inline-block rounded-lg bg-linear-to-r from-blue-600 to-blue-700 px-8 py-4 text-lg font-semibold text-white transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-lg">
                    Order Enterprise Pack Now
                  </button>
                  <p className="mt-2 text-sm text-gray-500">
                    Includes both server hosting and enterprise e-commerce
                    features
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 flex items-center justify-center gap-4">
            {currentStep > 1 && (
              <>
                <button
                  disabled={currentStep === 1}
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className={`${currentStep === 1 ? "bg-gray-100" : "bg-blue-600 text-white"} rounded px-3 py-1`}>
                  Previous
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
