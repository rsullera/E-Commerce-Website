import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/Admin";
import coffee from "../assets/images/nguso1.png";
import { Link, redirect, useNavigate } from "react-router-dom";

// Import the section components
import Users from "./admin/Users";
import Products from "./admin/UpdateUser";
import Orders from "./admin/CreateUser";

const Admin = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("Users");
  /*   console.log(1, user);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
 */
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  const sideItem = ["Users", "Products", "Orders"];

  // Function to render the selected component
  const renderSection = () => {
    switch (activeItem) {
      case "Users":
        return <Users />;
      case "Products":
        return <Products />;
      case "Orders":
        return <Orders />;
      default:
        return <Users />;
    }
  };

  return (
    <Wrapper>
      <section className="admin-section left">
        <div className="admin-sidebar">
          <div className="admin-info">
            <img src={coffee} alt="" className="admin-img" />
            <div>
              <label>{user?.username || "Admin"}</label>
              <br />
              <label>{user?.email || "admin@email.com"}</label>
            </div>
          </div>
          <hr />
          <div className="admin-panel">
            <label className="admin-text">Admin Sections</label>
            {sideItem.map((item) => (
              <p
                key={item}
                className={activeItem === item ? "active" : ""}
                onClick={() => setActiveItem(item)}
              >
                {item}
              </p>
            ))}
          </div>
          <button className="sidebar-signout">
            <Link to="/login" onClick={handleLogout} className="dropdown-item">
              Sign Out
            </Link>
          </button>
        </div>

        <div className="admin-dashboard right">
          <div className="admin-welcome">
            <label>Admin Panel</label>
            <p>Welcome {user?.username || "Admin"}</p>
          </div>

          {/* This is where the selected section will appear */}
          <div className="admin-content">{renderSection()}</div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Admin;
