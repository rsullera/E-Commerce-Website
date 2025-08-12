import React from "react";
import Wrapper from "../assets/wrappers/ProductDetails";
import coffee from "../assets/images/product1.webp";

function ProductDetails() {
  return (
    <Wrapper>
      <div className="product-page">
        <div className="product-bg left">
          <div className="product-bg-bg">
            <img src={coffee} alt="" className="product" />
          </div>
        </div>

        <div className="product-info right">
          <p className="product-title">Product Title</p>
          <p className="product-category">Category</p>
          <p className="product-price">Price</p>
          <p className="product-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi
            suscipit vero ad ducimus nisi nostrum asperiores. Quia animi minus a
            fugit illo dolores earum assumenda amet repellat reprehenderit,
            totam nisi fuga debitis ipsa quasi perferendis et tempore!
            Necessitatibus, tenetur.
          </p>
          <p className="product-stock">Stock:</p>
          <p className="product-quantity">Qty:</p>
          <div className="product-btn">
            <button>Add to Cart</button> <button>Buy Now</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ProductDetails;
