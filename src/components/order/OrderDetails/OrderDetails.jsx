"use client";
import Loader from "@/components/shared/Loader";
import { ECOM_BASE_URL } from "@/config";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PackageOrderDetails } from "./PackageOrderDetails";

export default function OrderDetails({ invoice }) {
  const [loading, setLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  const { token, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!token || !isAuthenticated) {
      return router.push("/login");
    }
    async function fetchOrderDetails() {
      try {
        const res = await fetch(
          `${ECOM_BASE_URL}/api/v1/package-order/user-order?invoice_number=${invoice}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        if (!res.ok)
          throw new Error(`Request failed with status ${res.status}`);
        const data = await res.json();
        if (data.success) {
          setOrderDetails(data.data);
          // setMeta(data.meta);
        } else {
          throw new Error(data.message || "Failed to fetch orders");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchOrderDetails();
  }, [token, invoice, isAuthenticated, router]);

  if (loading) return <Loader />;
  return <PackageOrderDetails order={orderDetails} />;
}
