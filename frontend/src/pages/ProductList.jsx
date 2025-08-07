import React from "react";
import Wrapper from "../assets/wrappers/ProductList";

import banner from "../assets/images/banner1.jpg";

function ProductList() {
  return (
    <Wrapper>
      <section className="product-section">
        <div className="product-content">
          <div
            className="product-banner"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <p className="banner-text">
              Great morning
              <br /> start here!
            </p>
          </div>

          <div className="product-sidebar">
            <div className="product-searchbar">
              <input
                type="search"
                placeholder="Search..."
                className="searchbar"
              />
            </div>

            <div className="product-categories">
              <p className="category-title">Categories</p>
              <ul className="category-list">
                <li>
                  <button className="category-button">Coffee</button>
                </li>
                <li>
                  <button className="category-button">Tea</button>
                </li>
                <li>
                  <button className="category-button">Pastries</button>
                </li>
                <li>
                  <button className="category-button">Cold Drinks</button>
                </li>
              </ul>
            </div>

            <div className="product-list"></div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default ProductList;
