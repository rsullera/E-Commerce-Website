import React from "react";
import { useCart } from "../context/CartContext";
import Wrapper from "../assets/wrappers/Cart";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const vat = subtotal * 0.12;
  const total = subtotal + vat;

  const handleQuantityChange = (item, delta) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity <= 0) {
      removeFromCart(item._id);
    } else {
      addToCart(item, delta);
    }
  };

  return (
    <Wrapper>
      <section className="cart">
        {/* Left Side - Cart Items */}
        <div className="cart-section">
          <div className="cart-title">
            <label className="shopping-cart">Shopping Cart</label>
            <label className="cart-item">{cartItems.length} Items</label>
          </div>
          <hr />

          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <ul className="cart-container" key={item._id}>
                <li>
                  <img src={item.image} alt={item.name} className="cart-img" />
                </li>
                <li>{item.name}</li>
                <li>
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleQuantityChange(item, -1)}
                      className="qty-btn"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="number"
                      min="1"
                      value={item.quantity}
                      readOnly
                    />
                    <button
                      onClick={() => handleQuantityChange(item, 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>
                </li>
                <li>₱{item.price * item.quantity}</li>
                <li>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </li>
              </ul>
            ))
          )}
        </div>

        {/* Right Side - Summary */}
        <div className="summary-section">
          <div className="summary-container">
            <label className="summary">Summary</label>
            <div className="subtotal">
              <label className="summary-info">Subtotal</label>
              <label className="summary-info">₱{subtotal.toFixed(2)}</label>
            </div>
            <div className="subtotal">
              <label className="summary-info">VAT (12%)</label>
              <label className="summary-info">₱{vat.toFixed(2)}</label>
            </div>
            <hr />
            <div className="subtotal">
              <label className="summary-total">Total</label>
              <label className="summary-total">₱{total.toFixed(2)}</label>
            </div>
            {cartItems.length > 0 && (
              <Link to="/checkout" className="checkout-btn">
                <button>Check Out</button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Cart;
