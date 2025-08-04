import styled from "styled-components";

const Wrapper = styled.section`
  margin: 0;
  padding: 0;
  overflow: hidden;

  header {
    scroll-behavior: smooth;
  }

  .main-nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    height: 70px;
    font-family: "Lekton", sans-serif;
    padding: 0 80px;
    position: fixed;
    width: 100%;
    z-index: 100;
    border-bottom: 2px solid #fff;
    background: #86624c;
    backdrop-filter: blur(20px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }

  .nav-logo {
    height: 40px;
    width: 40px;
    padding: 0;
    margin: 0;
  }

  ul {
    display: flex;
    gap: 30px;
    color: white;
    font-size: 22px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    color: white;
    cursor: pointer;
  }

  .nav-start:hover {
    background-color: red;
    height: 25px;
  }

  .nav-click {
    color: white;
    text-decoration: none;
  }

  .nav-list {
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
  }

  .nav-item {
    font-size: 22px;
    font-family: "Lekton", sans-serif;
    color: white;
    height: 36px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .nav-item:hover {
    background-color: red;
  }

  .dropdown {
    position: relative;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    top: 36px;
    right: 0;
    background-color: #fdf6f0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 6px;
    z-index: 10;
    flex-direction: column;
  }

  .dropdown:hover .dropdown-content {
    display: flex;
  }

  .dropdown-btn {
    font-family: "Judson", serif;
    font-size: 16px;
    padding: 8px 12px;
    background: none;
    border: none;
    color: #4a2e2c;
    cursor: pointer;
    text-align: left;
  }

  .dropdown-btn:hover {
    background-color: #ece0d1;
  }

  .member-btn {
    color: #4a2e2c;
    text-decoration: none;
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
`;

export default Wrapper;
