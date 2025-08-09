import styled from "styled-components";

const Wrapper = styled.section`
  margin: 0;
  padding: 0;
  color: #f3e5ce;

  .admin-section {
    height: 100vh;
    background-color: #f3e5ce;
    display: flex;
  }
  .admin-sidebar {
    height: 100%;
    width: 320px;
    border: 2px solid #174e4f;
    background-color: #174e4f;
    color: #f3e5ce;
    font-family: "Roboto";
    position: relative;
  }
  .admin-info {
    display: flex;

    align-items: center;
    font-family: "Roboto";
  }
  .admin-img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 2px solid #f3e5ce;
    margin: 20px 20px 20px 20px;
  }

  hr {
    width: 90%;
    margin: auto;
  }

  .admin-sidebar p {
    margin: 0;
    padding: 15px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .admin-sidebar p:hover {
    background-color: #216b6c;
  }

  .admin-sidebar p.active {
    background-color: #2e8b8c;
    font-weight: bold;
  }

  .admin-panel {
    margin: 20px;
  }
  .admin-text {
    font-size: 26px;
  }
  p {
    font-size: 22px;
  }

  .sidebar-signout {
    font-size: 26px;

    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

  .sidebar-signout:hover {
    background-color: #216b6c;
    width: 200px;
    height: 50px;
  }

  .admin-dashboard {
    flex: 1; /* take all remaining width next to sidebar */
    background-color: #f3e5ce;
    padding: 20px;
  }

  .admin-welcome {
    display: flex;
    justify-content: space-between; /* left & right */
    align-items: center; /* vertical alignment */
    background-color: #174e4f;
    color: #f3e5ce;
    padding: 20px 20px;
    border-radius: 8px;
    font-size: 18px;

    font-family: "Roboto";
  }
  .admin-container {
    height: auto;
    background-color: pink;
  }
  .admin-content {
    color: white;
  }
`;
export default Wrapper;
