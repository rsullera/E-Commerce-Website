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
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setImageFile(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const uploadImageToCloudinary = async () => {
    if (!imageFile) return "";
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "E-Commerce-Website"); // replace with Cloudinary upload preset
    data.append("cloud_name", "da9zx5zbi"); // replace with your Cloudinary cloud name
    data.append("folder", "E-Commerce-website");

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/da9zx5zbi/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const cloudData = await res.json();
      return cloudData.secure_url; // The hosted image URL
    } catch (err) {
      console.error("Cloudinary upload failed", err);
      return "";
    }
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
      // 1. Upload image to Cloudinary
      const imageUrl = await uploadImageToCloudinary();
      if (!imageUrl) {
        alert("Image upload failed.");
        return;
      }

      // 2. Send product data to backend with Cloudinary image URL
      const productData = { ...formData, image: imageUrl };

      await axios.post("http://localhost:5000/api/products", productData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("✅ Product created successfully!");
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
                  <label>Image</label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    accept="image/*"
                    required
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
