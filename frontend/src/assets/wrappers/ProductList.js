import styled from "styled-components";

const Wrapper = styled.section`
  margin: 0;
  padding: 0;
  font-family: "Playfair Display";
  color: #174e4f;

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

  .product-info {
    display: flex;
  }
  .product-category {
    font-size: 48px;
    margin: 40px 40px 0 40px;
    color: #174e4f;
    font-weight: 600;
  }

  .product-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-right: 30px;
  }

  .sort-dropdown {
    font-size: 20px;
    padding: 5px 10px;
    border: 1px solid #174e4f;
    border-radius: 4px;
    color: #174e4f;
    background-color: #f3e5ce;
    margin-bottom: 15px;
  }
  .card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 columns */
    gap: 20px;
    margin: 30px;
  }

  ////// CARD PRODUCT START
  .card {
    width: 270px;
    height: 370px;
    background: linear-gradient(135deg, #174e4f 55%, #f3e5ce 50%);
    border-radius: 16px;
    padding: 10px;
    position: relative;
    font-family: "Roboto";
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    color: #fff;
    border: 1px solid #174e4f;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }

  .card-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f3e5ce;
    border: none;
  }

  .price {
    background-color: #f3e5ce;
    color: #174e4f;
    padding: 14px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 26px;
  }

  .image-container {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    overflow: hidden;
    border: 6px solid #f3e5ce;
    margin-top: 5px;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .add-to-cart {
    background-color: #174e4f;
    color: #f3e5ce;
    border: none;
    padding: 10px 28px;
    border-radius: 12px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .add-to-cart:hover {
    background-color: #0f3a3b;
  }

  //////CARD  PRODUCT END

  ///PRODUCT-SIDEBAR

  .product-sidebar {
    height: auto;
    width: 350px;
    border-right: 2px solid #174e4f;
  }
  .product-searchbar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0 20px 0;
  }
  .searchbar {
    border: 2px solid #174e4f;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border-radius: 8px;
    font-size: 26px;
  }

  .product-sidebar {
    padding: 20px;
  }

  .category-title {
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 26px;
  }

  .category-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 22px;
  }

  .category-button {
    background-color: #f3e5ce;
    border: none;
    padding: 10px 15px;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    text-align: start;
    transition: background-color 0.6s ease, width 0.6s ease;
  }

  .category-button:hover {
    background-color: #e2c49a;
    width: 100%;
  }
`;
export default Wrapper;
