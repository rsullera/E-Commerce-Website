import styled from "styled-components";

const Wrapper = styled.section`
  margin: 0;
  padding: 0;
  font-family: "Roboto";

  .navbar-section {
    height: 70px;
    background-color: #174e4f;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999; /* make sure it's above other elements */
    display: flex;
    align-items: center;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 70px;
    position: relative; /* needed for centering logo */
  }

  .nav-btn,
  .nav-login {
    flex: 1;
  }

  .nav-btn ul {
    display: flex;
    gap: 40px;
    list-style: none;
    padding: 0;
    margin: 0;
    color: #f3e5ce;
    font-size: 18px;
    font-weight: 500;
  }

  .nav-logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .nav-logo-logo {
    height: 50px;
    width: 50px;
  }

  .nav-login {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
  }

  .nav-login button {
    font-size: 18px;
    padding: 8px 32px;
    border: none;
    border-radius: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    font-family: "Roboto";
  }

  /* Sign In button */
  .nav-login button:first-child {
    background-color: #f3e5ce;
    color: #174e4f;
  }

  /* Sign Up button */
  .nav-login button:last-child {
    background-color: #174e4f;
    color: #f3e5ce;
    border: 1px solid #f3e5ce;
  }
  .nav-login button:first-child:hover {
    background-color: #e7d5b8;
  }

  .nav-login button:last-child:hover {
    background-color: #0f3a3b;
  }
`;

export default Wrapper;

// import styled from "styled-components";

// const Wrapper = styled.section`
//   .main-nav {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     align-items: center;
//     height: 70px;
//     padding: 0 80px;
//     background: transparent;
//     border-bottom: 2px solid #fff;
//     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//     position: fixed;
//     top: 0;
//     width: 100%;
//     z-index: 100;
//   }

//   ul {
//     display: flex;
//     gap: 25px;
//     list-style: none;
//     margin: 0;
//     padding: 0;
//   }

//   li {
//     display: flex;
//     align-items: center;
//     font-size: 20px;
//     font-family: "Lekton", sans-serif;
//   }

//   .nav-link {
//     color: white;
//     text-decoration: none;
//     transition: 0.2s;
//   }

//   .nav-link:hover {
//     text-decoration: underline;
//   }

//   .nav-logo {
//     height: 40px;
//     width: 40px;
//   }

//   .nav-logo-wrapper {
//     display: flex;
//     justify-content: center;
//   }

//   .start {
//     justify-self: start;
//   }

//   .center {
//     justify-self: center;
//   }

//   .end {
//     justify-self: end;
//   }

//   .cart-icon {
//     color: white;
//     font-size: 20px;
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     margin-right: 10px;
//   }

//   .user-info {
//     display: flex;
//     align-items: center;
//     position: relative;
//   }

//   .welcome {
//     color: white;
//     font-size: 20px;
//     user-select: none;
//     cursor: default;
//     margin-right: 5px;
//   }

//   .username {
//     color: white;
//     font-size: 20px;
//     font-weight: bold;
//     cursor: pointer;
//     position: relative;
//   }

//   .dropdown {
//     position: relative;
//   }

//   .dropdown-content {
//     display: none;
//     position: absolute;
//     top: 28px;
//     right: 0;
//     background-color: #f5e9df;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     min-width: 140px;
//     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
//     flex-direction: column;
//     padding: 5px 0;
//     z-index: 10;
//   }

//   .username:hover + .dropdown-content,
//   .dropdown-content:hover {
//     display: flex;
//   }

//   .dropdown-item {
//     background: none;
//     border: none;
//     padding: 10px 15px;
//     font-size: 16px;
//     color: #4a2e2c;
//     text-align: left;
//     text-decoration: none;
//     cursor: pointer;
//     width: 100%;
//     font-family: "Judson", serif;
//   }

//   .dropdown-item:hover {
//     background-color: #e8d7c6;
//   }

//   button.dropdown-item {
//     width: 100%;
//   }
// `;

// export default Wrapper;
