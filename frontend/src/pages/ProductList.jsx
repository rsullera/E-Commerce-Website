import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/ProductList";
import banner from "../assets/images/banner1.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

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
                    <div
                      className="card"
                      key={product._id}
                      onClick={() => openModal(product)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="card-category">
                        <span className="category">{product.category}</span>
                        <span className="price">₱{product.price}</span>
                      </div>

                      <div className="image-container">
                        <div className="image-image-container">
                          <img src={product.image} alt={product.name} />
                        </div>
                      </div>
                      <div className="card-header">
                        <h3>{product.name}</h3>
                      </div>
                      <Link to="/cart">
                        <button className="add-to-cart">Add to cart</button>
                      </Link>
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

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-left-right">
              <div className="modal-left">
                <Link to={`/productdetails/${selectedProduct._id}`}>
                  <img
                    className="modal-img"
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                  />
                </Link>
              </div>
              <div className="modal-right">
                <span className="modal-name">{selectedProduct.name}</span>
                <span className="modal-category">
                  {selectedProduct.category}
                </span>
                <span className="modal-price">${selectedProduct.price}</span>
                <span className="modal-stock">
                  Stock: {selectedProduct.stock}
                </span>
                <span className="modal-quantity">
                  Quantity:
                  <input type="modal-number" min="1" defaultValue="1" />
                </span>
              </div>
            </div>
            <div className="modal-container">
              <span className="modal-description">
                {selectedProduct.description.split(" ").slice(0, 30).join(" ")}
                {selectedProduct.description.split(" ").length > 30
                  ? "..."
                  : ""}
              </span>
            </div>{" "}
            <Link
              to={`/productdetails/${selectedProduct._id}`}
              className="view-more"
              onClick={closeModal} // close modal when navigating
            >
              View More...
            </Link>
            <div className="modal-buttons">
              <button className="add-to-cart-btn modal-btn">Add to Cart</button>
              <button className="buy-now-btn modal-btn">Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default ProductList;
