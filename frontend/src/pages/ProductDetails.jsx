import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/ProductDetails";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  // Add to cart normally
  const handleAddToCart = () => {
    if (quantity > product.stock) {
      alert(`Only ${product.stock} items in stock.`);
      return;
    }
    addToCart(product, quantity);
    alert(`${quantity} x ${product.name} added to cart!`);
  };

  // Buy Now functionality
  const handleBuyNow = () => {
    if (quantity > product.stock) {
      alert(`Only ${product.stock} items in stock.`);
      return;
    }

    // Navigate to checkout with only this product
    navigate("/checkout", {
      state: { products: [{ ...product, quantity }] },
    });
  };

  return (
    <Wrapper>
      <div className="product-page">
        {/* Image Section */}
        <div className="product-bg left">
          <div className="sub-container">
            {[...Array(3)].map((_, i) => (
              <div className="sub-bg" key={i}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="sub-img"
                />
              </div>
            ))}
          </div>
          <div className="main-bg">
            <img src={product.image} alt={product.name} className="main-img" />
          </div>
        </div>

        {/* Info Section */}
        <div className="product-info right">
          <p className="product-title">{product.name}</p>
          <p className="product-category">{product.category}</p>
          <p className="product-price">₱{product.price}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-stock">Stock: {product.stock}</p>
          <p className="product-stock">
            Quantity:{" "}
            <input
              type="number"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={(e) => {
                let val = Number(e.target.value);
                if (val < 1) val = 1;
                if (val > product.stock) val = product.stock;
                setQuantity(val);
              }}
            />
          </p>

          <div className="product-btn">
            <button onClick={handleAddToCart} disabled={product.stock === 0}>
              Add to Cart
            </button>
            <button onClick={handleBuyNow} disabled={product.stock === 0}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ProductDetails;
