import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/ProductList";
import banner from "../assets/images/banner1.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]); // Store all products
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // 🔍 new state

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
        setAllProducts(res.data);

        // Get unique categories
        const uniqueCategories = [
          "All",
          ...new Set(res.data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      })
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

  const filterByCategory = (category) => {
    setActiveCategory(category);
    let filtered = allProducts;

    if (category !== "All") {
      filtered = filtered.filter((p) => p.category === category);
    }

    // Apply search filter after category filter
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setProducts(filtered);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    let filtered = allProducts;

    // Filter by category first
    if (activeCategory !== "All") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    // Then filter by search query (name, category, or price)
    if (value.trim() !== "") {
      const lowerValue = value.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerValue) ||
          p.category.toLowerCase().includes(lowerValue) ||
          p.price.toString().includes(lowerValue) // 🔹 match price too
      );
    }

    setProducts(filtered);
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
                  value={searchQuery}
                  onChange={handleSearch} // 🔍 filter products while typing
                />
              </div>

              <div className="product-categories">
                <p className="category-title">Categories</p>
                <hr />
                <ul className="category-list">
                  {categories.length > 0 ? (
                    categories.map((category) => (
                      <li key={category}>
                        <button
                          className={`category-button ${
                            activeCategory === category ? "active" : ""
                          }`}
                          onClick={() => filterByCategory(category)}
                        >
                          {category}
                        </button>
                      </li>
                    ))
                  ) : (
                    <li>No categories</li>
                  )}
                </ul>
              </div>
            </div>

            {/* Product list */}
            <div className="product-list">
              <div className="product-header">
                <p className="product-category">{activeCategory} Products</p>
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
              <span className="modal-price">₱{selectedProduct.price}</span>
              <div className="modal-img">
                <div className="modal-img-img">
                  <Link to={`/productdetails/${selectedProduct._id}`}>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="modal-right">
              <span className="modal-name">{selectedProduct.name}</span>
              <span className="modal-category">{selectedProduct.category}</span>
            </div>
            <div className="modal-left-right">
              <span className="modal-stock">
                Stock: <span className="stock">{selectedProduct.stock}</span>
              </span>
              <span className="modal-quantity">
                Quantity:
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  max={selectedProduct.stock}
                  className="modal-input"
                />
              </span>
            </div>
            <div className="modal-container">
              <span className="modal-description">
                {selectedProduct.description.split(" ").slice(0, 15).join(" ")}
                {selectedProduct.description.split(" ").length > 15
                  ? "..."
                  : ""}
              </span>
            </div>
            <Link
              to={`/productdetails/${selectedProduct._id}`}
              className="view-more"
              onClick={closeModal}
            >
              View More...
            </Link>
            <div className="modal-buttons">
              <button className="add-to-cart-btn modal-btn">
                {" "}
                <Link to="/cart">Add to Cart</Link>
              </button>
              <button className="buy-now-btn modal-btn">Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default ProductList;
