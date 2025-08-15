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

    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    font-family: "Roboto";
  }

  .sign-in {
    background-color: #f3e5ce;
    color: #174e4f;
    border: 1px solid #f3e5ce;
  }

  .sign-in:hover {
    background-color: #e7d5b8;
  }

  .sign-up {
    background-color: #174e4f;
    color: #f3e5ce;
    border: 1px solid #f3e5ce;
  }
  .sign-up:hover {
    background-color: #0f3a3b;
  }

  .cart-icon {
    color: #f3e5ce;
    font-size: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-right: 30px;
  }

  .user-info {
    display: flex;
    align-items: center;
    position: relative;
  }

  .welcome {
    color: #f3e5ce;
    font-size: 18px;
    user-select: none;
    cursor: default;
    margin-right: 5px;
  }

  .username {
    color: #f3e5ce;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
  }

  .username:hover {
    color: #e7d5b8;
  }

  .dropdown {
    position: relative;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    top: 22px;
    right: 0;
    background-color: #f5e9df;
    border: 1px solid #ccc;
    border-radius: 5px;
    min-width: 140px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    flex-direction: column;
    padding: 5px 0;
    z-index: 10;
  }

  .username:hover + .dropdown-content,
  .dropdown-content:hover {
    display: flex;
  }

  .dropdown-item {
    background: none;
    border: none;
    padding: 10px 15px;
    font-size: 20px;
    color: #4a2e2c;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    font-family: "Roboto";
  }

  .dropdown-item:hover {
    background-color: #e8d7c6;
  }
`;

export default Wrapper;
