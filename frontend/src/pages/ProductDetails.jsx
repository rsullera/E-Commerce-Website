import React from "react";
import Wrapper from "../assets/wrappers/ProductDetails";

function ProductDetails() {
  return (
    <Wrapper>
      <div className="product-page">
        <div className="left-section">
          <div className="main-image">Main Image</div>
          <div className="thumbnail-images">
            <div className="thumb">Image 1</div>
            <div className="thumb">Image 2</div>
            <div className="thumb">Image 3</div>
          </div>
        </div>

        <div className="right-section">
          <h1 className="product-title">Product Title</h1>
          <p className="price">₱ Price</p>
          <p className="details">Product Details</p>
          <p className="category">Category</p>
          <p className="stock">Stock</p>
          <button className="add-to-cart">ADD TO CART</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default ProductDetails;
