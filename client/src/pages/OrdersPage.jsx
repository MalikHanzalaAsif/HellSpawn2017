import React, { useEffect } from "react";
import Orders from "../components/Orders";
import { getOrdersApi } from "../api/orderApi";

const OrdersPage = () => {
  useEffect(() => {
    const getOrders = async () => {
      await getOrdersApi();
    };
    getOrders();
  }, []);
  return <Orders />;
};

export default OrdersPage;
