import React from "react";
import Wrapper from "../assets/wrappers/Cart";
import coffee from "../assets/images/cofff.webp";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <Wrapper>
      <section className="cart">
        {/* Left side */}
        <div className="cart-section">
          <div className="cart-title">
            <label className="shopping-cart">Shopping Cart</label>
            <label className="cart-item">3 Item</label>
          </div>

          <hr />

          <ul className="cart-container">
            <li>
              <img src={coffee} alt="" className="cart-img" />
            </li>
            <li>Product Title</li>
            <li>
              <input
                type="number"
                className="number"
                min="1"
                defaultValue="1"
              />
            </li>
            <li>$20</li>
            <li>
              <input type="checkbox" className="checkbox" />
            </li>
          </ul>
          <hr />

          <ul className="cart-container">
            <li>
              <img src={coffee} alt="" className="cart-img" />
            </li>
            <li>Product Title</li>
            <li>
              <input
                type="number"
                className="number"
                min="1"
                defaultValue="1"
              />
            </li>
            <li>$20</li>
            <li>
              <input type="checkbox" className="checkbox" />
            </li>
          </ul>
          <hr />

          <ul className="cart-container">
            <li>
              <img src={coffee} alt="" className="cart-img" />
            </li>
            <li>Product Title</li>
            <li>
              <input
                type="number"
                className="number"
                min="1"
                defaultValue="1"
              />
            </li>
            <li>$20</li>
            <li>
              <input type="checkbox" className="checkbox" />
            </li>
          </ul>
          <hr />

          <ul className="cart-container">
            <li>
              <img src={coffee} alt="" className="cart-img" />
            </li>
            <li>Product Title</li>
            <li>
              <input
                type="number"
                className="number"
                min="1"
                defaultValue="1"
              />
            </li>
            <li>$20</li>
            <li>
              <input type="checkbox" className="checkbox" />
            </li>
          </ul>
          <hr />

          <ul className="cart-container">
            <li>
              <img src={coffee} alt="" className="cart-img" />
            </li>
            <li>Product Title</li>
            <li>
              <input
                type="number"
                className="number"
                min="1"
                defaultValue="1"
              />
            </li>
            <li>$20</li>
            <li>
              <input type="checkbox" className="checkbox" />
            </li>
          </ul>
          <hr />

          <ul className="cart-container">
            <li>
              <img src={coffee} alt="" className="cart-img" />
            </li>
            <li>Product Title</li>
            <li>
              <input
                type="number"
                className="number"
                min="1"
                defaultValue="1"
              />
            </li>
            <li>$20</li>
            <li>
              <input type="checkbox" className="checkbox" />
            </li>
          </ul>
          <hr />

          <ul className="cart-container">
            <li>
              <img src={coffee} alt="" className="cart-img" />
            </li>
            <li>Product Title</li>
            <li>
              <input
                type="number"
                className="number"
                min="1"
                defaultValue="1"
              />
            </li>
            <li>$20</li>
            <li>
              <input type="checkbox" className="checkbox" />
            </li>
          </ul>
          <hr />
        </div>

        {/* Right side */}
        <div className="summary-section">
          <div className="summary-container">
            <label className="summary">Summary</label>
            <div className="subtotal">
              <label className="summary-info">Subtotal</label>
              <label className="summary-info">$20</label>
            </div>
            <div className="subtotal">
              <label className="summary-info">Vat</label>
              <label className="summary-info">$40</label>
            </div>
            <hr />
            <div className="subtotal">
              <label className="summary-total">Total</label>
              <label className="summary-total">$60</label>
            </div>
            <Link to="/checkout" className="checkout-btn">
              <button>Check Out</button>
            </Link>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
export default Cart;
