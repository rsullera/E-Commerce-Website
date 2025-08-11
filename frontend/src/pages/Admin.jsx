import React from "react";
import Wrapper from "../assets/wrappers/Admin";
import coffee from "../assets/images/nguso1.png";
import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";

const Admin = ({ user, setUser }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Sidebar items and paths
  const sideItems = [
    { label: "Users", path: "/admin" },
    { label: "Products", path: "/admin/products" },
    { label: "Orders", path: "/admin/order" },
  ];

  // Determine which sidebar item is active based on current path
  const activeItem =
    sideItems
      .slice()
      .sort((a, b) => b.path.length - a.path.length)
      .find(
        (item) =>
          location.pathname === item.path ||
          location.pathname.startsWith(item.path)
      )?.label || "Users";

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <Wrapper>
      <section className="admin-section left">
        <div className="admin-sidebar">
          <div className="admin-info">
            <img src={coffee} alt="Admin" className="admin-img" />
            <div>
              <label>{user?.username || "Admin"}</label>
              <br />
              <label>{user?.email || "admin@email.com"}</label>
            </div>
          </div>
          <hr />
          <div className="admin-panel">
            <label className="admin-text">Admin Sections</label>
            {sideItems.map(({ label, path }) => (
              <p
                key={label}
                className={activeItem === label ? "active" : ""}
                onClick={() => navigate(path)}
                style={{ cursor: "pointer" }}
              >
                {label}
              </p>
            ))}
          </div>
          <button className="sidebar-signout" onClick={handleLogout}>
            Sign Out
          </button>
        </div>

        <div className="admin-dashboard right">
          <div className="admin-welcome">
            <label>Admin Panel</label>
            <label>Welcome {user?.username || "Admin"}</label>
          </div>

          {/* Outlet renders nested routes here */}
          <div className="admin-content">
            <Outlet />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Admin;
