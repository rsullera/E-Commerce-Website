import styled from "styled-components";

const Wrapper = styled.section`
  .main-nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    height: 70px;
    padding: 0 80px;
    background: transparent;
    border-bottom: 2px solid #fff;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  ul {
    display: flex;
    gap: 25px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: "Lekton", sans-serif;
  }

  .nav-link {
    color: white;
    text-decoration: none;
    transition: 0.2s;
  }

  .nav-link:hover {
    text-decoration: underline;
  }

  .nav-logo {
    height: 40px;
    width: 40px;
  }

  .nav-logo-wrapper {
    display: flex;
    justify-content: center;
  }

  .start {
    justify-self: start;
  }

  .center {
    justify-self: center;
  }

  .end {
    justify-self: end;
  }

  .cart-icon {
    color: white;
    font-size: 20px;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-right: 10px;
  }

  .user-info {
    display: flex;
    align-items: center;
    position: relative;
  }

  .welcome {
    color: white;
    font-size: 20px;
    user-select: none;
    cursor: default;
    margin-right: 5px;
  }

  .username {
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    position: relative;
  }

  .dropdown {
    position: relative;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    top: 28px;
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
    font-size: 16px;
    color: #4a2e2c;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    font-family: "Judson", serif;
  }

  .dropdown-item:hover {
    background-color: #e8d7c6;
  }

  button.dropdown-item {
    width: 100%;
  }
`;

export default Wrapper;
