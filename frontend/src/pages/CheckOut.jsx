import React from "react";
import Wrapper from "../assets/wrappers/CheckOut";

function CheckOut() {
  return (
    <Wrapper>
      <section className="checkout-section">
        <div className="checkout">
          <h2>Delivery Contact</h2>
          <hr />
          <div className="checkout-details">
            <label>First Name</label>
            <input type="text" placeholder="Real" className="details" />
            <label>Last Name</label>
            <input type="text" placeholder="Sullera" className="details" />
            <label>Contact</label>
            <input type="text" placeholder="09123456789" className="details" />
            <label>Email</label>{" "}
            <input
              type="text"
              placeholder="rsullera@sscgi.com"
              className="details"
            />
            <label>Address</label>{" "}
            <input
              type="text"
              placeholder="1012 Metropolitan Avenue, Makati City, 1203"
              className="details"
            />
            <label>Payment</label>
            <label>
              Cod <input type="checkbox" name="" id="" />
            </label>
            <label>
              Paypal
              <input type="checkbox" name="" id="" />
            </label>
          </div>
          <button>Continue</button>
        </div>
        <div className="summary">
          <p>Order Summary</p>
          <p>img</p>
          <p>Product Title</p>
          <p>Price</p>
          <p>QTY</p>
          <hr />
          <p>Subtotal</p>
          <p>Delivery Fee</p>
          <p>Total</p>
        </div>
      </section>
    </Wrapper>
  );
}

export default CheckOut;
