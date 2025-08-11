import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../assets/wrappers/CreateProducts";

function CreateProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stock: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You must be logged in to create a product.");
      navigate("/login");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/products", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/admin/products");
    } catch (err) {
      console.error(err);
      alert("Failed to create product. Please try again.");
    }
  };

  return (
    <Wrapper>
      <div className="create-product-container">
        <div className="create-product-box">
          <h2>Add Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-columns">
              <div className="left-column">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <input
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Image Url</label>
                  <input
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Stock</label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="right-column">
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <button className="submit-btn" type="submit">
              CREATE
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default CreateProduct;
