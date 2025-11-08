import React, { useEffect, useState } from "react";
import { getAllOrders } from "../api/orderApi";

function OrdersList() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await getAllOrders();
                setOrders(data);
            } catch (error) {
                console.error("Error fetching orders:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    if (loading) return <p className="text-center mt-5">Loading orders...</p>;
    if (orders.length === 0) return <p className="text-center mt-5">No orders found.</p>;

    return (
        <div className="container mt-4">
            <h2 className="mb-3 text-primary text-center">📦 All Orders</h2>
            <table className="table table-bordered table-striped">
                <thead className="table-primary">
                    <tr>
                        <th>Order ID</th>
                        <th>User ID</th>
                        <th>Total Amount (₹)</th>
                        <th>Status</th>
                        <th>Order Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.orderId}>
                            <td>{order.orderId}</td>
                            <td>{order.user ? order.user.userId : "N/A"}</td>
                            <td>{order.totalAmount}</td>
                            <td>
                                <span
                                    className={`badge ${order.status === "COMPLETED"
                                            ? "bg-success"
                                            : order.status === "PENDING"
                                                ? "bg-warning text-dark"
                                                : "bg-danger"
                                        }`}
                                >
                                    {order.status}
                                </span>
                            </td>
                            <td>{order.orderDate ? order.orderDate.replace("T", " ").split(".")[0] : "-"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrdersList;
