"use client";

import Container from "@/components/shared/Container";
import Loader from "@/components/shared/Loader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { ECOM_BASE_URL } from "@/config";
import useAuth from "@/hooks/useAuth";
import formatDate from "@/utils/formatDate";
import {
  CalendarRange,
  Check,
  ChevronDown,
  CreditCard,
  Database,
  Hash,
  Landmark,
  Package2,
  Store,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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

function StatusBadge({ status }) {
  const styles = {
    pending: "bg-amber-100 text-amber-800 border-amber-200",
    active: "bg-emerald-100 text-emerald-800 border-emerald-200",
    cancelled: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border capitalize ${
        styles[status] ?? "bg-muted text-muted-foreground"
      }`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

function SectionLabel({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand/10">
        <Icon className="w-3.5 h-3.5 text-brand" />
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function InfoRow({ label, children }) {
  return (
    <div className="flex items-center justify-between py-2.5 gap-4">
      <span className="text-xs text-muted-foreground shrink-0">{label}</span>
      <span className="text-sm font-medium text-foreground text-right">
        {children}
      </span>
    </div>
  );
}

export function PackageOrderDetails({ order }) {
  const [featuresOpen, setFeaturesOpen] = useState(false);

  // Safety check to prevent crashes if order is null/undefined
  if (!order || !order.package) {
    return <div className="p-8 text-center">No order data available.</div>;
  }

  const {
    package: pkg,
    subscriptionPeriod: sub,
    user,
    packageInvoice: inv,
  } = order;

  // Accessing the manual payment from the invoice object
  const manualPayment = inv?.manualPayments?.[0];

  return (
    <Container>
      <div className="min-h-screen bg-muted/40 py-8 px-4">
        <div className=" space-y-4">
          {/* ── Page Header ── */}
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-xl font-bold text-foreground tracking-tight">
                Order Details
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Order #{order.id}
              </p>
            </div>
            <StatusBadge status={order.status} />
          </div>

          {/* ── Package Card ── */}
          <Card className="overflow-hidden border-border shadow-none">
            <div className="h-1 w-full bg-brand" />
            <CardHeader className="pb-0 pt-5 px-5">
              <SectionLabel icon={Package2} label="Package" />
            </CardHeader>

            <CardContent className="px-5 pb-5 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-foreground leading-tight">
                    {pkg?.package_name}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed max-w-sm">
                    {pkg?.short_description}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  {inv.payment_method === "stripe" ? (
                    <p className="text-2xl font-bold text-brand">
                      ${inv?.payment_amount}
                    </p>
                  ) : (
                    <p className="text-2xl font-bold text-brand">
                      ${manualPayment?.amount}
                    </p>
                  )}
                  <p className="text-[11px] text-muted-foreground">
                    / {sub?.duration} months
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Store, label: `${pkg?.max_store} Store` },
                  { icon: Package2, label: `${pkg?.product_limit} Products` },
                  { icon: Database, label: `${pkg?.max_storage} GB Storage` },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium text-brand bg-brand/10 border border-brand/20 px-2.5 py-1 rounded-md">
                    <Icon className="w-3 h-3" />
                    {label}
                  </span>
                ))}
              </div>

              <Separator />

              <Collapsible open={featuresOpen} onOpenChange={setFeaturesOpen}>
                <CollapsibleTrigger className="flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-brand/80 transition-colors group">
                  {featuresOpen ? "Hide" : "View all"} features
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      featuresOpen ? "rotate-180" : ""
                    }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {pkg?.description?.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-muted-foreground">
                        <Check className="w-3.5 h-3.5 text-brand mt-0.5 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* ── Subscription + Customer (2-col) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="border-border shadow-none">
              <CardHeader className="pb-0 pt-5 px-5">
                <SectionLabel icon={CalendarRange} label="Subscription" />
              </CardHeader>
              <CardContent className="px-5 pb-5">
                <div className="relative flex items-center gap-0 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand border-2 border-brand/30 shrink-0" />
                  <div className="flex-1 h-px bg-linear-to-r from-brand/40 to-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30 border-2 border-border shrink-0" />
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Start
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {formatDate(order.start_at)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Expires
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {formatDate(order.expire_at)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-none">
              <CardHeader className="pb-0 pt-5 px-5">
                <SectionLabel icon={User} label="Customer" />
              </CardHeader>
              <CardContent className="px-5 pb-3">
                <div className="divide-y divide-border/60">
                  <InfoRow label="Name">{user?.name}</InfoRow>
                  <InfoRow label="Email">
                    <span className="text-brand break-all">{user?.email}</span>
                  </InfoRow>
                  <InfoRow label="Phone">{user?.phone}</InfoRow>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ── Invoice ── */}
          <Card className="border-border shadow-none">
            <CardHeader className="pb-0 pt-5 px-5">
              <div className="flex items-center justify-between">
                <SectionLabel icon={Hash} label="Invoice" />
                <StatusBadge status={inv?.status} />
              </div>
            </CardHeader>
            <CardContent className="px-5 pb-3">
              <div className="divide-y divide-border/60">
                <InfoRow label="Invoice No.">
                  <span className="font-bold text-brand tracking-wide">
                    #{inv?.invoice_number}
                  </span>
                </InfoRow>
                <InfoRow label="Type">
                  <span className="capitalize">{inv?.invoice_type}</span>
                </InfoRow>
                <InfoRow label="Amount">
                  <span className="text-base font-bold text-brand">
                    ${inv?.payment_amount}
                    <span className="ml-1 text-xs font-normal text-muted-foreground">
                      {manualPayment?.currency || "USD"}
                    </span>
                  </span>
                </InfoRow>
                <InfoRow label="Method">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted border border-border px-2 py-0.5 rounded capitalize">
                    <CreditCard className="w-3 h-3" />
                    {inv?.payment_method?.replace("_", " ")}
                  </span>
                </InfoRow>
              </div>
            </CardContent>
          </Card>

          {/* ── Bank Transfer Details (Manual Payment) ── */}
          {manualPayment && (
            <Card className="border-border shadow-none">
              <CardHeader className="pb-0 pt-5 px-5">
                <SectionLabel icon={Landmark} label="Bank Transfer Details" />
              </CardHeader>
              <CardContent className="px-5 pb-3">
                <div className="divide-y divide-border/60">
                  <InfoRow label="Bank">{manualPayment.bank_name}</InfoRow>
                  <InfoRow label="Branch">{manualPayment.branch}</InfoRow>
                  <InfoRow label="Account No.">
                    {manualPayment.account_no}
                  </InfoRow>
                  <InfoRow label="Transaction ID">
                    <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
                      {manualPayment.transaction_id}
                    </span>
                  </InfoRow>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Container>
  );
}
