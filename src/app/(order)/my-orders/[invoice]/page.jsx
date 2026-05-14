import OrderDetails from "@/components/order/OrderDetails/OrderDetails";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

export default async function page({ params }) {
  const { invoice } = await params;
  return (
    <PrivateRoute>
      <OrderDetails invoice={invoice} />
    </PrivateRoute>
  );
}
