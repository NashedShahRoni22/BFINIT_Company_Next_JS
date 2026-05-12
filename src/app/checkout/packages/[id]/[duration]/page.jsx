import Checkout from "@/components/Checkout/Checkout";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import React from "react";

export default function page() {
  return (
    <PrivateRoute>
      <Checkout />
    </PrivateRoute>
  );
}
