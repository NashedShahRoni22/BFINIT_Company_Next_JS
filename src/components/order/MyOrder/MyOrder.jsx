"use client";
import { useState, useEffect } from "react";
import { Package, XCircle } from "lucide-react";
import useAuth from "@/hooks/useAuth";
import { ECOM_BASE_URL } from "@/config";
import OrderTableSkeleton from "../../skeletons/OrderTableSkeleton/OrderTableSkeleton";
import { useRouter } from "next/navigation";
import Container from "@/components/shared/Container";
import OrderTable from "./OrderTable";

export default function MyOrders() {
  const { token, user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [meta, setMeta] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!token || !user) {
      router.replace("/login");
      return;
    }
    async function fetchOrders() {
      try {
        setLoading(true);
        const res = await fetch(
          `${ECOM_BASE_URL}/api/v1/package-order/user-orders`,
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
          setOrders(data.data);
          setMeta(data.meta);
        } else {
          throw new Error(data.message || "Failed to fetch orders");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, [token, router, user]);

  return (
    <Container>
      <div className="min-h-screen py-16">
        <div className="py-10">
          {/* Page Header */}
          <div className="pb-4">
            <h1 className="font-inter text-3xl font-extrabold leading-tight text-gray-900">
              My Orders
            </h1>
            {meta && !loading && (
              <p className="mt-1 font-sora text-sm text-gray-400">
                {meta.total} order{meta.total !== 1 ? "s" : ""} found
              </p>
            )}
          </div>

          {/* Content */}
          {loading && (
            <div className="space-y-4">
              <OrderTableSkeleton />
            </div>
          )}

          {error && (
            <div
              className="flex items-start gap-4 rounded-2xl p-6"
              style={{ background: "#fff5f5", border: "1.5px solid #fecaca" }}>
              <XCircle
                size={22}
                color="#ef4444"
                strokeWidth={2}
                className="mt-0.5 shrink-0"
              />
              <div>
                <p className="mb-1 font-montserrat font-bold text-red-700">
                  Failed to load orders
                </p>
                <p className="font-sora text-sm text-red-500">{error}</p>
              </div>
            </div>
          )}

          {!loading && !error && orders.length === 0 && (
            <div
              className="rounded-2xl p-12 text-center"
              style={{ background: "white", border: "1.5px solid #e8edf2" }}>
              <Package
                size={40}
                className="mx-auto mb-4 text-gray-300"
                strokeWidth={1.5}
              />
              <p className="font-montserrat text-lg font-bold text-gray-500">
                No orders yet
              </p>
              <p className="mt-1 font-sora text-sm text-gray-400">
                Your subscription orders will appear here.
              </p>
            </div>
          )}

          {!loading && !error && orders.length > 0 && (
            <div className="space-y-4">
              <div className="w-full">
                <OrderTable orders={orders} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
