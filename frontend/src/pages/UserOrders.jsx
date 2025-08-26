import React, { useEffect, useState } from "react";
import axios from "axios";
import Wrapper from "../assets/wrappers/UserOrders";

function UserOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchUserOrders();
  }, []);

  const fetchUserOrders = async () => {
    try {
      const token = localStorage.getItem("token"); // get JWT
      const res = await axios.get("http://localhost:5000/api/orders/my", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data);
    } catch (err) {
      console.error(
        "❌ Error fetching user orders:",
        err.response?.data || err.message
      );
    }
  };

  return (
    <Wrapper>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">🛒 My Orders</h2>

        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="border rounded-lg p-4 shadow-md bg-white"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">
                      Order ID:{" "}
                      <span className="text-gray-600">{order._id}</span>
                    </p>
                    <p>
                      Tracking:{" "}
                      <span className="text-blue-600 font-mono">
                        {order.trackingNumber || "Not assigned"}
                      </span>
                    </p>
                    <p>
                      Total: ₱
                      {typeof order.totalAmount === "number"
                        ? order.totalAmount.toFixed(2)
                        : "0.00"}
                    </p>
                    <p className="text-sm text-gray-500">
                      Placed: {new Date(order.createdAt).toLocaleString()}
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold">Status: </span>
                      <span
                        className={`px-2 py-1 rounded ${
                          order.status === "Pending"
                            ? "bg-yellow-200 text-yellow-800"
                            : order.status === "Processing"
                            ? "bg-blue-200 text-blue-800"
                            : order.status === "Shipped"
                            ? "bg-purple-200 text-purple-800"
                            : order.status === "Completed"
                            ? "bg-green-200 text-green-800"
                            : "bg-red-200 text-red-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </p>
                  </div>
                </div>

                <h3 className="mt-4 font-semibold">Items</h3>
                <ul className="ml-4 list-disc">
                  {order.items.map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <span>
                        {item.name} — {item.quantity} × ₱{item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default UserOrders;
