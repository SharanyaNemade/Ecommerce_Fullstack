import api from "./axios";

//  Fetch all orders
export const getAllOrders = async () => {
    const response = await api.get("/orders");
    return response.data;
};

//  (Optional) Fetch orders by user ID
export const getOrdersByUser = async (userId) => {
    const response = await api.get(`/orders/user/${userId}`);
    return response.data;
};
