import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  const { id } = useParams(); // ✅ Fix here
  const [username, setName] = useState(""); // ✅ Init with ""
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`http://localhost:5000/api/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setName(res.data.username); // Should match your DB schema
        setEmail(res.data.email);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    axios
      .put(
        `http://localhost:5000/api/users/${id}`,
        { username, email },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => navigate("/users"))
      .catch((err) => console.log("Error updating user:", err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label>Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
