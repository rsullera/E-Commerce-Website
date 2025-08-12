import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Register";

function Register({ setUser }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/register", formData);

      alert("✅ Account successfully created! Please log in to continue.");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <section className="login-section">
          <div className="login-container">
            <div className="login-input">
              <p className="login-welcome">
                Welcome! Please sign in
                <br /> to continue.
              </p>

              <label>Username: </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="mamamo21"
                required
              />

              <label>Email: </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="rsullera@sscgi.com"
                required
              />
              <label>Password: </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mamamobentesais"
                required
              />
              {error && <p className="error">{error}</p>}
              <div className="login-btn ">
                <button className="login-btn-btn">Register</button>
              </div>
              <p className="login-account">
                Don’t have an account?
                <Link to="/login" className="login">
                  <span> &nbsp;Sign In Now</span>
                </Link>
              </p>
            </div>
          </div>
        </section>
      </form>
    </Wrapper>
  );
}

export default Register;
