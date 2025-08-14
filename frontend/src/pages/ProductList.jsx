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
  const [sortOption, setSortOption] = useState("");

  const handleSort = (option) => {
    setSortOption(option);
    let sortedProducts = [...products];

    switch (option) {
      case "price-low-high":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setProducts(sortedProducts);
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
                <select
                  className="sort-dropdown"
                  value={sortOption}
                  onChange={(e) => handleSort(e.target.value)}
                >
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
            <div className="modal-left">
              <span className="modal-price">
                ₱{selectedProduct.price}
                {/* PRODUCT PRICE */}
              </span>

              <div className="modal-img">
                <div className="modal-img-img">
                  <Link to={`/productdetails/${selectedProduct._id}`}>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                    />{" "}
                    {/* PRODUCT IMAGE */}
                  </Link>
                </div>
              </div>
            </div>
            <div className="modal-right">
              <span className="modal-name">
                {selectedProduct.name}
                {/* PRODUCT NAME */}
              </span>

              <span className="modal-category">
                {selectedProduct.category}
                {/* PRODUCT CATEGORY */}
              </span>
            </div>
            <div className="modal-left-right">
              <span className="modal-stock">
                Stock: {selectedProduct.stock}
                {/* PRODUCT STOCK */}
              </span>
              <span className="modal-quantity">
                Quantity:{/* PRODUCT QUANTITY */}
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="modal-input"
                />
              </span>
            </div>
            {/*    </div> */}
            <div className="modal-container">
              <span className="modal-description">
                {/* PRODUCT DESCRIPTION */}
                {selectedProduct.description.split(" ").slice(0, 15).join(" ")}
                {selectedProduct.description.split(" ").length > 15
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
              {/* PRODUCT BUTTON */}
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
