import OrderConfirmation from "@/components/order/OrderConfirmation/OrderConfirmation";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import React from "react";

export default async function page({ params }) {
  const { invoice } = await params;
  return (
    <>
      <PrivateRoute>
        <OrderConfirmation invoice={invoice} />
      </PrivateRoute>
    </>
  );
}
