import api from "./api";

export const getMyOrders = async () => {
  const response = await api.get("/orders");
  return response.data;
};

export const createOrder = async (totalAmount, items) => {
  const response = await api.post("/orders", {
    totalAmount,
    items,
  });

  return response.data;
};