import React, { useEffect, useState } from "react";
import axios from "axios";
import Wrapper from "../../assets/wrappers/Orders";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  // Fetch all orders
  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data);
    } catch (err) {
      console.error(
        "❌ Error fetching orders:",
        err.response?.data || err.message
      );
    }
  };

  // Update order status
  const updateStatus = async (id, newStatus) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `http://localhost:5000/api/orders/${id}/status`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setOrders((prev) =>
        prev.map((order) => (order._id === id ? res.data : order))
      );
    } catch (err) {
      console.error(
        "❌ Error updating status:",
        err.response?.data || err.message
      );
    }
  };

  return (
    <Wrapper>
      <div className="page-container">
        <div className="card">
          <div className="orders-dashboard">
            <h2>Orders Dashboard</h2>
          </div>

          {orders.length === 0 ? (
            <p className="text-center">No orders yet.</p>
          ) : (
            <div className="table-scroll">
              <table className="table-custom">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Total</th>
                    <th>Placed</th>
                    <th>Items</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td>{order._id}</td>
                      <td>
                        ₱
                        {typeof order.totalAmount === "number"
                          ? order.totalAmount.toFixed(2)
                          : "0.00"}
                      </td>
                      <td>{new Date(order.createdAt).toLocaleString()}</td>

                      {/* Items */}
                      <td>
                        <ul className="items-list">
                          {order.items.map((item) => (
                            <li key={item._id} className="item-row">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="item-image"
                              />
                              <span>
                                {item.name} — {item.quantity} × ₱{item.price}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </td>

                      {/* Status dropdown */}
                      <td>
                        <select
                          className={`select-status status-${order.status.toLowerCase()}`}
                          value={order.status}
                          onChange={(e) =>
                            updateStatus(order._id, e.target.value)
                          }
                        >
                          <option value="Pending">Pending</option>
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default AdminOrders;
