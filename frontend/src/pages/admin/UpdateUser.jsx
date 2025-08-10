import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../../assets/wrappers/UpdateUser";

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
      .then((result) => {
        alert("Account successfully Updated!");
        console.log(result);
        navigate("/admin");
      })
      .catch((err) => console.log("Error updating user:", err));
  };

  return (
    <Wrapper>
      <div className="form-container">
        <form onSubmit={handleUpdate}>
          <h2>Update User</h2>
          <label htmlFor="username">Name</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Update</button>
        </form>
      </div>
    </Wrapper>
  );
}

export default UpdateUser;
