import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../assets/wrappers/CreateUser";

function CreateUser() {
  const [username, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [date, setDate] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users/register", {
        username,
        email,
        password,
        role,
        date,
      })
      .then((result) => {
        alert("Account successfully created!");
        console.log(result);
        navigate("/admin");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <div className="create-user-container">
        <div className="create-user-box">
          <form onSubmit={Submit}>
            <h2>Add User</h2>

            <div className="create-user-form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
                value={username}
                required
              />
            </div>

            <div className="create-user-form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>

            <div className="create-user-form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>

            <button type="submit" className="create-user-submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default CreateUser;
