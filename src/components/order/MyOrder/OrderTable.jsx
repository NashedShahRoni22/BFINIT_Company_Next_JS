import React from "react";
import Link from "next/link";
import { Building2, CreditCard, ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function formatDate(dateStr) {
  if (!dateStr) return "—";

  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function OrderTable({ orders = [] }) {
  const formattedOrders = orders.map((order) => {
    const amount = Number(order.packageInvoice?.payment_amount);

    return {
      ...order,
      formattedAmount: Number.isInteger(amount)
        ? amount
        : amount.toFixed(2),
      duration:
        order.subscriptionPeriod?.duration === 1 ? "month" : "year",
    };
  });

  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/30 hover:bg-muted/30">
            <TableHead className="font-semibold">Invoice</TableHead>
            <TableHead className="font-semibold">Package</TableHead>
            <TableHead className="font-semibold">Price</TableHead>
            <TableHead className="font-semibold">Ordered At</TableHead>
            <TableHead className="font-semibold">Method</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="text-right font-semibold">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {formattedOrders.length > 0 ? (
            formattedOrders.map((order, index) => (
              <TableRow
                key={index}
                className="transition-colors hover:bg-muted/40">
                {/* Invoice */}
                <TableCell className="font-medium">
                  #{order.packageInvoice?.invoice_number}
                </TableCell>

                {/* Package */}
                <TableCell>
                  {order.package?.package_type}
                </TableCell>

                {/* Price */}
                <TableCell>
                  <div className="flex items-baseline gap-1">
                    <span className="font-semibold text-foreground">
                      € {order.formattedAmount}
                    </span>

                    <span className="text-xs text-muted-foreground">
                      / {order.duration}
                    </span>
                  </div>
                </TableCell>

                {/* Ordered At */}
                <TableCell className="text-muted-foreground">
                  {formatDate(order.created_at)}
                </TableCell>

                {/* Payment Method */}
                <TableCell>
                  {order.packageInvoice?.payment_method ===
                  "bank_transfer" ? (
                    <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                      <Building2 size={14} />
                      <span>Bank</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                      <CreditCard size={14} />
                      <span>Stripe</span>
                    </div>
                  )}
                </TableCell>

                {/* Status */}
                <TableCell>
                  <Badge
                    variant="secondary"
                    className="rounded-full capitalize px-3 py-1">
                    {order.packageInvoice?.status}
                  </Badge>
                </TableCell>

                {/* Action */}
                <TableCell className="text-right">
                  <Link
                    href={`/my-orders/${order.packageInvoice?.invoice_number}`}
                    className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors hover:bg-muted">
                    View
                    <ArrowRight size={15} />
                  </Link>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={7}
                className="h-32 text-center text-muted-foreground">
                No orders found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}