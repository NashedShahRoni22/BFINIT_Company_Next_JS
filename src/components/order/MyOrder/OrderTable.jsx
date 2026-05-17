import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Building2, CreditCard } from "lucide-react";
import Link from "next/link";
import React from "react";

function formatDate(dateStr) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function OrderTable({ orders }) {
  const table_heading = [
    "Invoice",
    "Package Name",
    "Price",
    "Ordered At",
    "Method",
    "Status",
    "Action",
  ];

  const cellClass = "border border-gray-300 text-muted-foreground text-center";

  const formattedOrders = orders.map((order) => {
    const amount = Number(order.packageInvoice?.payment_amount);
    const duration = order.subscriptionPeriod.duration === 1 ? "month" : "year";

    return {
      ...order,
      formattedAmount: Number.isInteger(amount) ? amount : amount.toFixed(2),
      duration,
    };
  });

  const getTableData = (order, idx) => {
    return [
      order.packageInvoice.invoice_number,
      order.package.package_type,

      <>
        <span className="font-inter text-base font-bold">
          {order.formattedAmount}
        </span>

        <span>/</span>

        <span className="text-sm">{order.duration}</span>
      </>,

      formatDate(order.created_at),

      <span key={idx} className="flex items-center justify-center">
        {order.packageInvoice.payment_method === "bank_transfer" ? (
          <span className="flex items-center gap-1">
            <Building2 size={14} /> Bank
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <CreditCard size={14} />
            Stripe
          </span>
        )}
      </span>,

      <Badge className="bg-brand/20 capitalize text-gray-700" key={idx}>
        {order.packageInvoice?.status}
      </Badge>,

      <button
        className="bg-brand rounded-sm px-2 py-1.5 text-white"
        type="button"
        key={idx}>
        <Link
          href={`/my-orders/${order.packageInvoice.invoice_number}`}
          className="cursor-pointer text-sm transition">
          View Details
        </Link>
      </button>,
    ];
  };

  return (
    <Table className="w-full border-spacing-y-px">
      <TableHeader className={"bg-brand/20"}>
        <TableRow>
          {table_heading.map((heading) => (
            <TableHead
              key={heading}
              className={"border border-gray-300 text-center"}>
              {heading}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {formattedOrders.map((order, idx) => {
          const rowData = getTableData(order, idx);
          return (
            <TableRow key={idx}>
              {rowData.map((item, i) => (
                <TableCell
                  key={i}
                  className={`
                    ${cellClass}
                  `}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
