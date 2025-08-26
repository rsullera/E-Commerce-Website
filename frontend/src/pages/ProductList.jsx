import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/ProductList";
import banner from "../assets/images/banner1.jpg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalQuantity, setModalQuantity] = useState(1);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
        setAllProducts(res.data);

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
    setModalQuantity(1); // Reset quantity whenever modal opens
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

    if (activeCategory !== "All") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    if (value.trim() !== "") {
      const lowerValue = value.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerValue) ||
          p.category.toLowerCase().includes(lowerValue) ||
          p.price.toString().includes(lowerValue)
      );
    }

    setProducts(filtered);
  };

  // Add to cart with quantity
  const handleAddToCart = (product, quantity = 1) => {
    addToCart(product, quantity);
    navigate("/cart");
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
                  onChange={handleSearch}
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

                      {/* Add to Cart button from card */}
                      <button
                        className="add-to-cart"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product, 1); // Card always adds 1
                        }}
                      >
                        Add to cart
                      </button>
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
                  max={selectedProduct.stock}
                  value={modalQuantity}
                  onChange={(e) => {
                    let val = Number(e.target.value);
                    if (val < 1) val = 1;
                    if (val > selectedProduct.stock)
                      val = selectedProduct.stock;
                    setModalQuantity(val);
                  }}
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
              {/* Add to Cart with quantity */}
              <button
                className="add-to-cart-btn modal-btn"
                onClick={() => handleAddToCart(selectedProduct, modalQuantity)}
              >
                Add to Cart
              </button>

              {/* Buy Now button */}
              <button
                className="buy-now-btn modal-btn"
                onClick={() => {
                  closeModal(); // Close modal
                  // Navigate to checkout with only this product
                  navigate("/checkout", {
                    state: {
                      products: [
                        { ...selectedProduct, quantity: modalQuantity },
                      ],
                    },
                  });
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default ProductList;
