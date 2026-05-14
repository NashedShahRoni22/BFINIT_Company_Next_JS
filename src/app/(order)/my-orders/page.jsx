import MyOrders from "@/components/order/MyOrder/MyOrder";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

export default function page() {
  return (
    <PrivateRoute>
      <MyOrders />
    </PrivateRoute>
  );
}
