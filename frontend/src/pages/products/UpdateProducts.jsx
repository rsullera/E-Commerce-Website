import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Wrapper from "../../assets/wrappers/UpdateProducts";

function UpdateProduct() {
  const { id } = useParams();
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:5000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setFormData(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setImageFile(files[0]);
    } else if (type === "number") {
      setFormData({ ...formData, [name]: Number(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const uploadImageToCloudinary = async () => {
    if (!imageFile) return formData.image; // No new file, keep old image URL

    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "E-Commerce-Website"); // Your Cloudinary upload preset

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/da9zx5zbi/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const cloudData = await res.json();
      return cloudData.secure_url;
    } catch (error) {
      console.error("Cloudinary upload failed", error);
      return formData.image; // fallback to old image URL if upload fails
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You must be logged in to update a product.");
      navigate("/login");
      return;
    }

    try {
      const imageUrl = await uploadImageToCloudinary();

      const updatedProductData = { ...formData, image: imageUrl };

      await axios.put(
        `http://localhost:5000/api/products/${id}`,
        updatedProductData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("✅ Product updated successfully!");
      navigate("/admin/products");
    } catch (err) {
      console.error(err);
      alert("Failed to update product. Please try again.");
    }
  };

  return (
    <Wrapper>
      <div className="update-product-container">
        <div className="update-product-box">
          <h2>Update Product</h2>
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
                  />
                  {/* Image preview */}
                  {imageFile ? (
                    <img
                      src={URL.createObjectURL(imageFile)}
                      alt="Preview"
                      style={{ maxWidth: "40px", marginTop: "10px" }}
                    />
                  ) : formData.image ? (
                    <img
                      src={formData.image}
                      alt="Current"
                      style={{ maxWidth: "40px", marginTop: "10px" }}
                    />
                  ) : null}
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
              UPDATE
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default UpdateProduct;
