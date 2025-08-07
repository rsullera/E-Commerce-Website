import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Login";

function Login({ setUser }) {
  const [formData, setFormData] = useState({
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
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      setUser(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login Failed mali ngani");
    }
  };

  return (
    <Wrapper>
      {/*    <div className="back-btn">
        <Link to="/costumer" className="member-btn">
          <p>← Back</p>
        </Link>
      </div> */}
      <form onSubmit={handleSubmit}>
        <div className="login-section">
          <div className="login-container">
            <p>Welcome! Please sign in to continue.</p>

            {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

            <div className="login-input">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="login-input">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="login-btn">
              <button className="login-btn-btn">Login</button>
            </div>
            <h7>
              Don’t have an account?
              <Link to="/register" className="member-btn">
                <span> &nbsp;Register</span>
              </Link>
            </h7>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}

export default Login;
