import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/ProductList";
import { Link } from "react-router-dom";
import banner from "../assets/images/banner1.jpg";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <Wrapper>
      <section className="product-section" id="product-section">
        <div className="product-content">
          {/* Banner */}
          <div
            className="product-banner"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <p className="banner-text">
              Great morning
              <br /> start here!
            </p>
          </div>

          <div className="product-info">
            {/* Sidebar */}
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
            </div>

            {/* Product list */}
            <div className="product-list">
              <div className="product-header">
                <p className="product-category">All Products</p>
                <select className="sort-dropdown">
                  <option value="">Sort by</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="name-asc">Name: A-Z</option>
                  <option value="name-desc">Name: Z-A</option>
                </select>
              </div>

              <div className="card-container">
                {products.length > 0 ? (
                  products.map((product) => (
                    <div className="card" key={product._id}>
                      <div className="card-header">
                        <h3>{product.name}</h3>
                        <span className="price">₱{product.price}</span>
                      </div>
                      <Link to={`/productdetails/${product._id}`}>
                        <div className="image-container">
                          <img src={product.image} alt={product.name} />
                        </div>
                      </Link>
                      <button className="add-to-cart">Add to cart</button>
                    </div>
                  ))
                ) : (
                  <p>No products available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default ProductList;
