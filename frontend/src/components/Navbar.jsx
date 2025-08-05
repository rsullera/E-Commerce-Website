import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Navbar";
import logo1 from "../assets/images/kklogo2.svg";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <Wrapper>
      <nav className="main-nav">
        {/* Left Navigation */}
        <div className="nav-list start">
          <ul>
            <li>
              <Link to="/costumer" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" className="nav-link">
                Product
              </Link>
            </li>
            <li>
              <Link to="/costumer#info-section" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Center Logo */}
        <div className="nav-logo-wrapper center">
          <img src={logo1} alt="logo" className="nav-logo" />
        </div>

        {/* Right - Auth / User Info */}
        <div className="nav-list end">
          <ul>
            {!user ? (
              <>
                <li>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li className="user-info">
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
                    <button onClick={handleLogout} className="dropdown-item">
                      Logout
                    </button>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
