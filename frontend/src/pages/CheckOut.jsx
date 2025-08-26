import React, { useState } from "react";
import Wrapper from "../assets/wrappers/CheckOut";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { useLocation } from "react-router-dom";

function CheckOut() {
  const { cartItems, clearCart } = useCart();
  const location = useLocation();

  // If navigated via Buy Now, use that product; otherwise, use cart
  const checkoutItems = location.state?.products || cartItems;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(""); // COD or PayPal

  // Calculate subtotal
  const subtotal = checkoutItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const vat = subtotal * 0.12; // 12% VAT
  const total = subtotal + vat;

  const handleContinue = async () => {
    if (
      !firstName ||
      !lastName ||
      !contact ||
      !email ||
      !address ||
      !paymentMethod
    ) {
      alert("Please fill all fields and select a payment method.");
      return;
    }

    const order = {
      customerName: `${firstName} ${lastName}`,
      contact,
      email,
      address,
      paymentMethod,
      items: checkoutItems.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      subtotal,
      vat,
      totalAmount: total,
    };

    console.log("🛒 Sending order payload:", order);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post("http://localhost:5000/api/orders", order, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Order submitted successfully!");
      console.log("Saved order:", res.data);

      if (!location.state?.products) clearCart();

      window.location.href = "/";
    } catch (err) {
      console.error("❌ Order error:", err.response?.data || err.message);
      alert("Error submitting order.");
    }
  };

  return (
    <Wrapper>
      <section className="checkout-section">
        {/* Left Side - Delivery Form */}
        <div className="checkout">
          <h2>Delivery Contact</h2>
          <hr />
          <div className="checkout-details">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Real"
              className="details"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label>Last Name</label>
            <input
              type="text"
              placeholder="Sullera"
              className="details"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <label>Contact</label>
            <input
              type="text"
              placeholder="09123456789"
              className="details"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />

            <label>Email</label>
            <input
              type="text"
              placeholder="rsullera@sscgi.com"
              className="details"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Address</label>
            <input
              type="text"
              placeholder="1012 Metropolitan Avenue, Makati City, 1203"
              className="details"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <label>Payment</label>
            <label>
              COD{" "}
              <input
                type="radio"
                name="payment"
                value="COD"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </label>
            <label>
              PayPal{" "}
              <input
                type="radio"
                name="payment"
                value="PayPal"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </label>
          </div>

          <button onClick={handleContinue}>Continue</button>
        </div>

        {/* Right Side - Order Summary */}
        <div className="summary">
          <p>Order Summary</p>
          {checkoutItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            checkoutItems.map((item) => (
              <div key={item._id} className="summary-item">
                <img src={item.image} alt={item.name} width={50} />
                <p>{item.name}</p>
                <p>₱{item.price}</p>
                <p>QTY: {item.quantity}</p>
              </div>
            ))
          )}
          <hr />
          <p>Subtotal: ₱{subtotal.toFixed(2)}</p>
          <p>VAT (12%): ₱{vat.toFixed(2)}</p>
          <p>Total: ₱{total.toFixed(2)}</p>
        </div>
      </section>
    </Wrapper>
  );
}

export default CheckOut;
