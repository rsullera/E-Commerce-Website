import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Navbar";
import logo from "../assets/images/mainlogo.svg";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  console.log(1, user);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <Wrapper>
      <section className="navbar-section">
        <nav>
          <div className="nav-btn">
            <ul>
              <Link to="/#hero-section" className="nav-link">
                <li>Home</li>
              </Link>
              <Link to="/productlist#product-section" className="nav-link">
                <li>Product</li>
              </Link>
              <Link to="/#about-section" className="nav-link">
                <li>About</li>
              </Link>
              <Link to="/#footer-section" className="nav-link">
                <li>Contact</li>
              </Link>
            </ul>
          </div>

          <div className="nav-logo">
            <img src={logo} alt="Logo" className="nav-logo-logo" />
          </div>

          <div className="nav-login">
            {!user ? (
              <>
                <Link to="/login">
                  <button className="sign-in">Sign In</button>
                </Link>
                <Link to="/register">
                  <button className="sign-up">Sign Up</button>
                </Link>
              </>
            ) : (
              <div className="user-info">
                <Link to="/cart" className="cart-icon">
                  <FaShoppingCart />
                </Link>
                <span className="welcome">Welcome,&nbsp;</span>
                <div className="dropdown">
                  <span className="username">{user.username}</span>
                  <div className="dropdown-content">
                    <Link to="/settings" className="dropdown-item">
                      Settings
                    </Link>
                    <Link
                      to="/login"
                      onClick={handleLogout}
                      className="dropdown-item"
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </section>
    </Wrapper>
  );
};

export default Navbar;
