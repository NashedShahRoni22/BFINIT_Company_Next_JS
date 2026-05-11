"use client";
import { useEffect, useState } from "react";
import { LiaSpinnerSolid } from "react-icons/lia";
import { useRouter } from "next/navigation";
import { sassCheckoutData } from "@/data/sassCheckoutData";
import { whiteLabelChecoutData } from "@/data/whiteLabelCheckoutData";

export default function WhiteLabelCheckout({ type, id }) {
  const navigate = useRouter();
  const productData =
    type === "whitelabel"
      ? whiteLabelChecoutData[id] || whiteLabelChecoutData["1"]
      : sassCheckoutData[id] || sassCheckoutData["1"];
  const [countries, setCountries] = useState([]);
  const [selectedSoftware, setSelectedSoftware] = useState(productData);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    country: "",
    software: selectedSoftware.name,
    basePrice: selectedSoftware.price,
    totalPrice: totalPrice,
    paymentType: "full payment",
    paymentMethod: "bank transfer",
    ...(type === "whitelabel" && {
      addonsSoftwares:
        type === "whitelabel"
          ? selectedSoftware.features
              .filter((feat) => feat.required)
              .map((feat) => ({ name: feat.name, price: feat.price }))
          : [],
      freeProduct: "payroll admin",
    }),
    ...(type === "sass-software" && {
      partialPrice: 0,
      duePrice: 0,
    }),
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      if (type === "checkbox") {
        const feature = selectedSoftware.features.find(
          (feat) => feat.name === value,
        );

        return {
          ...prev,
          addonsSoftwares: checked
            ? [
                ...prev.addonsSoftwares,
                { name: feature.name, price: feature.price },
              ] // Add feature as object
            : prev.addonsSoftwares.filter((f) => f.name !== feature.name), // Remove feature
        };
      }

      return { ...prev, [name]: value };
    });
  };

  //  Update software info on Select Software Dropdown
  const handleSoftwareChange = (e) => {
    const newSoftware = whiteLabelChecoutData[e.target.value];
    setSelectedSoftware(newSoftware);

    setFormData((prev) => ({
      ...prev,
      software: newSoftware.name,
      addonsSoftwares: newSoftware.features
        .filter((feat) => feat.required)
        .map((feat) => ({ name: feat.name, price: feat.price })), // Ensure objects with price
    }));
  };

  // Handle Checkout Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const {
      name,
      email,
      address,
      country,
      software,
      paymentType,
      totalPrice,
      addonsSoftwares,
      partialPrice,
    } = formData;

    const newOrderData = {
      name,
      email,
      address,
      country,
      software,
      payment_type: paymentType,
      price: totalPrice,
      addone_software: addonsSoftwares,
      paid_amount: partialPrice ? partialPrice : totalPrice,
    };

    try {
      const res = await fetch(
        "https://paymentapi.bfinit.com/api/v1/payments/payment/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newOrderData),
        },
      );
      const data = await res.json();
      if (data.success === true) {
        setLoading(false);
        window.alert(data.message);
        const localData = {
          ...formData,
          order_id: data.data.order_id,
          createdAt: data.data.createdAt,
        };
        localStorage.setItem("orderData", JSON.stringify(localData));
        navigate("/invoice");
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      window.alert(error.message);
    }
  };

  // update price on software dropdown change or additional feature checkbox click
  useEffect(() => {
    setTotalPrice(selectedSoftware?.price);

    if (type === "whitelabel") {
      const newTotal =
        selectedSoftware.price +
        formData.addonsSoftwares.reduce(
          (acc, feat) => acc + (feat.price || 0),
          0,
        );
      setTotalPrice(newTotal);
      setFormData((prev) => ({
        ...prev,
        totalPrice: newTotal,
      }));
      return;
    }

    // update the form price for sass products
    setFormData((prev) => {
      if (prev.paymentType === "partial payment") {
        return {
          ...prev,
          totalPrice: selectedSoftware?.price,
          partialPrice: (selectedSoftware?.price / 100) * 20,
          duePrice:
            selectedSoftware?.price - (selectedSoftware?.price / 100) * 20,
        };
      } else {
        // Remove partialPrice and duePrice when payment type is "full payment"
        const { partialPrice, duePrice, ...newData } = prev;
        return {
          ...newData,
          totalPrice: selectedSoftware?.price,
        };
      }
    });
  }, [
    selectedSoftware,
    formData?.addonsSoftwares,
    formData?.paymentType,
    type,
  ]);

  // fetch all country name & dial code
  useEffect(() => {
    fetch("/country.json")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setFormData((prev) => ({ ...prev, country: data[0].name }));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="w-full px-5 py-10 font-roboto md:mx-auto md:max-w-4xl md:py-20">
      <h1 className="mb-16 text-center font-montserrat text-2xl font-semibold md:text-3xl">
        Buy BFIN {selectedSoftware?.name}
      </h1>

      <form onSubmit={handleSubmit} className="w-full rounded border p-5">
        {/* name filed */}
        <div>
          <label htmlFor="name" className="font-medium">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="mt-2.5 w-full rounded border px-3 py-1.5 outline-none focus:border-primary"
          />
        </div>

        {/* email field */}
        <div className="mt-4">
          <label htmlFor="email" className="font-medium">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="mt-2.5 w-full rounded border px-3 py-1.5 outline-none focus:border-primary"
          />
        </div>

        {/* contact field */}
        <div className="mt-4">
          <label htmlFor="contact" className="font-medium">
            Contact:
          </label>
          <input
            type="text"
            name="contact"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            placeholder="Enter your contact number"
            className="mt-2.5 w-full rounded border px-3 py-1.5 outline-none focus:border-primary"
          />
        </div>

        {/* address field */}
        <div className="mt-4">
          <label htmlFor="address" className="font-medium">
            Address:
          </label>
          <textarea
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Enter your address"
            className="mt-2.5 w-full rounded border px-3 py-1.5 outline-none focus:border-primary"
          />
        </div>

        {/* country dropdown */}
        <div className="mt-4">
          <label htmlFor="country" className="font-medium">
            Country:
          </label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-2.5 w-full rounded border px-3 py-1.5 outline-none focus:border-primary">
            {countries.map((country, i) => (
              <option key={i} value={country?.name}>
                {country?.name}
              </option>
            ))}
          </select>
        </div>

        {/* select software dropdown */}
        <div className="mt-8 flex w-full justify-between">
          <label htmlFor="software" className="w-1/2 font-medium">
            Select Software:
          </label>
          {type === "whitelabel" ? (
            <select
              onChange={handleSoftwareChange}
              name="software"
              id="software"
              className="w-1/2 rounded border px-3 py-1.5 outline-none focus:border-primary">
              {Object.entries(whiteLabelChecoutData).map((software, i) => (
                <option
                  key={i}
                  value={software[0]}
                  defaultValue={id === software[0]}>
                  {software[1]?.name}
                </option>
              ))}
            </select>
          ) : (
            <p className="w-1/2">{selectedSoftware?.name}</p>
          )}
        </div>

        {/* product name */}
        <div className="mt-4 flex w-full justify-between">
          <p className="w-1/2 font-medium">Product Name:</p>
          <p className="w-1/2 text-gray-600">
            Hosting panel, create your own branded products, dedicated to you,
            view and manage clients invoicing, support and more.
          </p>
        </div>

        {/* base price */}
        {type === "whitelabel" && (
          <div className="mt-4 flex w-full justify-between font-medium">
            <p className="w-1/2">Price:</p>
            <p className="w-1/2 text-lg text-primary">
              €{selectedSoftware?.price}
            </p>
          </div>
        )}

        {/* total price */}
        <div className="mt-4 flex w-full justify-between font-medium">
          <p className="w-1/2">Total Price:</p>
          <p className="w-1/2 text-lg text-primary">€{totalPrice}</p>
        </div>

        {/* partial price */}
        {type !== "whitelabel" &&
          formData.paymentType === "partial payment" && (
            <div className="mt-4 flex w-full justify-between font-medium">
              <p className="w-1/2">Partial Price:</p>
              <p className="w-1/2 text-lg text-primary">
                €{(selectedSoftware?.price / 100) * 20}
              </p>
            </div>
          )}

        {/* Due price */}
        {type !== "whitelabel" &&
          formData.paymentType === "partial payment" && (
            <div className="mt-4 flex w-full justify-between font-medium">
              <p className="w-1/2">Due Price:</p>
              <p className="w-1/2 text-lg text-primary">
                €
                {selectedSoftware?.price - (selectedSoftware?.price / 100) * 20}
              </p>
            </div>
          )}

        {/* additional feature items */}
        {type === "whitelabel" && (
          <div className="mt-4">
            <p className="font-medium">Add Items From Below:</p>
            <div className="mt-2.5">
              {selectedSoftware.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <input
                    type="checkbox"
                    name={feat.name}
                    id={feat.name}
                    value={feat.name}
                    checked={formData.addonsSoftwares.some(
                      (f) => f.name === feat.name,
                    )}
                    onChange={handleChange}
                    disabled={feat.required}
                  />
                  <label htmlFor={feat.name}>
                    {feat.name} €{feat.price}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Free White Label Product */}
        {/* {type === "whitelabel" && (
          <div className="mt-4">
            <p className="font-medium">
              Select one of the the below white label software for free
              including in hosting:
            </p>
            <div className="mt-2.5 flex items-center gap-2.5 md:gap-6">
              <div className="space-x-2">
                <input
                  type="radio"
                  name="freeProduct"
                  id="payroll"
                  value="payroll admin"
                  checked={formData.freeProduct === "payroll admin"}
                  onChange={handleChange}
                />
                <label htmlFor="payroll">Payroll Admin</label>
              </div>
              <div className="space-x-2">
                <input
                  type="radio"
                  name="freeProduct"
                  id="accounting"
                  value="accounting admin"
                  checked={formData.freeProduct === "accounting admin"}
                  onChange={handleChange}
                />
                <label htmlFor="accounting">Accounting Admin</label>
              </div>
            </div>
          </div>
        )} */}

        {/* payment type */}
        <div className="mt-4">
          <p className="font-medium">Payment Type:</p>
          <div className="mt-2.5 flex items-center gap-2.5 md:gap-6">
            <div className="mt-2.5 space-x-2">
              <input
                type="radio"
                name="paymentType"
                id="fullPayment"
                value="full payment"
                checked={formData.paymentType === "full payment"}
                onChange={handleChange}
              />
              <label htmlFor="fullPayment">Full Payment</label>
            </div>
            {type !== "whitelabel" && (
              <div className="mt-2.5 space-x-2">
                <input
                  type="radio"
                  name="paymentType"
                  id="partialPayment"
                  value="partial payment"
                  checked={formData.paymentType === "partial payment"}
                  onChange={handleChange}
                />
                <label htmlFor="partialPayment">
                  Partial Payment (20% in first installment)
                </label>
              </div>
            )}
          </div>
        </div>

        {/* payment method */}
        <div className="mt-4">
          <p className="font-medium">Payment Method:</p>
          <div className="mt-2.5 space-x-2">
            <input
              type="radio"
              name="paymentMethod"
              id="paymentMethod"
              value="bank transfer"
              checked
              readOnly
            />
            <label htmlFor="paymentMethod">Pay by Bank Transfer to BFIN</label>
          </div>
        </div>

        {/* bank info */}
        <div className="mt-4">
          <p className="font-medium">Our Bank Transfer Details:</p>
          <p className="mt-2.5">
            <span className="font-medium">Bank:</span> LCL Bank France
          </p>
          <p className="my-1">
            <span className="font-medium">IBAN:</span> FR62 3000 2030 3700 0007
            3125 M63
          </p>
          <p>
            <span className="font-medium">BIC:</span> CRLYFRPP
          </p>
        </div>

        {/* bank payment details */}
        <div className="mt-4 space-y-1 border-t pt-4 text-gray-600">
          <p>
            Make your payment directly into the BFIN SASU bank account.{" "}
            <span className="font-bold text-black">
              Please use your Order ID as the Payment Reference.
            </span>
          </p>
          <p>
            Your order will not be shipped electronically (the software transfer
            process to your server ) until the funds have cleared in our
            account. Once payment is received BFIN will contact you to start
            transferring the full software ownership to your server, loading the
            raw code backend and frontend with full ownership licence)
          </p>
          <p>
            Bank Transfer payments are made to BFIN SASU Reg no 53521773100012
            RCS Montpellier France registration office address 8 RUE DUBLIN
            34200 SETE FRANCE. All deliveries and returns to this electronic
            address support@boboshomail.com. Bobosoho by BFIN.
          </p>
          <p>
            www.officetools.bobosoho.com is managed by BFIN group. After
            verifying your payment the product will be activated within 24H.
          </p>
        </div>

        {/* submit button */}
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 rounded bg-primary px-4 py-2 text-lg font-medium text-white transition-all duration-200 ease-linear hover:bg-[#145a97]">
            Confirm Order{" "}
            {loading && (
              <LiaSpinnerSolid className="animate-spin text-2xl text-white" />
            )}
          </button>
        </div>

        {/* Contact Details */}
        {/* <div className="mt-12 border-t pt-4">
          <h3 className="text-center text-2xl font-semibold md:text-3xl">
            Contact Us
          </h3>
          <div className="mt-4 flex justify-center gap-2 md:items-center">
            <p className="font-medium">Email:</p>
            <span>
              <a
                href="mailto:bfinsasu@gmail.com"
                className="text-primary underline"
              >
                bfinsasu@gmail.com
              </a>{" "}
              or{" "}
              <a
                href="mailto:support@bobosohomail.com"
                className="text-primary underline"
              >
                support@bobosohomail.com
              </a>
            </span>
          </div>
          <p className="mt-2.5 md:text-center">
            <span className="font-medium">Skype: </span>
            bfin.ltd [Text or Call Appointment Only]
          </p>
        </div> */}
      </form>
    </section>
  );
}
