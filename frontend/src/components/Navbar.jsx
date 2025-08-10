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

// import { Link, useNavigate } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
// import Wrapper from "../assets/wrappers/Navbar";
// import logo1 from "../assets/images/kklogo2.svg";

// const Navbar = ({ user, setUser }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <Wrapper>
//       <nav className="main-nav">
//         {/* Left Navigation */}
//         <div className="nav-list start">
//           <ul>
//             <li>
//               <Link to="/costumer" className="nav-link">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/product" className="nav-link">
//                 Product
//               </Link>
//             </li>
//             <li>
//               <Link to="/costumer#info-section" className="nav-link">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="nav-link">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Center Logo */}
//         <div className="nav-logo-wrapper center">
//           <img src={logo1} alt="logo" className="nav-logo" />
//         </div>

//         {/* Right - Auth / User Info */}
//         <div className="nav-list end">
//           <ul>
//             {!user ? (
//               <>
//                 <li>
//                   <Link to="/login" className="nav-link">
//                     Login
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/register" className="nav-link">
//                     Register
//                   </Link>
//                 </li>
//               </>
//             ) : (
//               <li className="user-info">
//                 <Link to="/cart" className="cart-icon">
//                   <FaShoppingCart />
//                 </Link>
//                 <span className="welcome">Welcome,&nbsp;</span>
//                 <div className="dropdown">
//                   <span className="username">{user.username}</span>
//                   <div className="dropdown-content">
//                     <Link to="/settings" className="dropdown-item">
//                       Settings
//                     </Link>
//                     <button onClick={handleLogout} className="dropdown-item">
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               </li>
//             )}
//           </ul>
//         </div>
//       </nav>
//     </Wrapper>
//   );
// };

// export default Navbar;

//  <div className="nav-login">
//             <button>Sign In</button>
//             <button>Sign Up</button>
//           </div>
