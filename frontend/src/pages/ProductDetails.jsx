import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/ProductDetails";
import { useCart } from "../context/CartContext"; // ✅ import cart context

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // ✅ track quantity
  const { addToCart } = useCart(); // ✅ get addToCart function

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity); // add the product with selected quantity
    alert(`${product.name} added to cart!`);
  };

  return (
    <Wrapper>
      <div className="product-page">
        {/* Image Section */}
        <div className="product-bg left">
          <div className="sub-container">
            <div className="sub-bg">
              <img src={product.image} alt={product.name} className="sub-img" />
            </div>
            <div className="sub-bg">
              <img src={product.image} alt={product.name} className="sub-img" />
            </div>
            <div className="sub-bg">
              <img src={product.image} alt={product.name} className="sub-img" />
            </div>
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
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </p>
          <div className="product-btn">
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ProductDetails;
