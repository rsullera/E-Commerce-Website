import styled from "styled-components";

const Wrapper = styled.section`
  margin: 0;
  padding: 0;

  .product-section {
    height: 100%;
    background-color: #f3e5ce;
    padding-top: 70px;
  }
  .product-banner {
    height: 50vh;

    background-image: url("src/assets/images/banner1.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .banner-text {
    font-size: 100px;
    text-transform: none;
    color: rgb(255, 255, 255);
    text-shadow: 0 8px 8px rgba(0, 0, 0, 0.5);
    line-height: 1.2;
    font-family: "Playfair Display";
    color: #f3e5ce;
    padding: 20px 70px 70px 70px;
  }

  ///PRODUCT-SIDEBAR

  .product-sidebar {
    height: 100%;
    width: 350px;
    border: 2px solid red;
  }
  .product-searchbar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0 20px 0;
  }
  .searchbar {
    border: 2px solid blue;
    width: 90%;
  }

  .product-sidebar {
    padding: 20px;
  }

  .category-title {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .category-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .category-button {
    background-color: #f3e5ce;
    border: none;
    padding: 10px 15px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .category-button:hover {
    background-color: #e2c49a;
  }
`;
export default Wrapper;
