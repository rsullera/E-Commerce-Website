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
    font-size: 16px;
    padding: 5px 10px;
    border: 1px solid #174e4f;
    border-radius: 4px;
    color: #174e4f;
    background-color: #f3e5ce;
    margin-bottom: 15px;
    font-family: "Roboto";
    /*   position: absolute;
    right: 30px; */
  }
  .card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 columns */
    gap: 30px;
    margin: 30px;
  }

  ////// CARD PRODUCT START

  .card {
    border: 2px solid #174e4f;
    width: 270px;
    height: 420px;
    border-radius: 16px;
    background: linear-gradient(145deg, #174e4f 50%, #f3e5ce 50%);
    position: relative;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }

  .card-category {
    color: #f3e5ce;
    padding-top: 10px;
  }
  .price {
    background-color: #f3e5ce;
    color: #174e4f;
    padding: 14px;
    border: 2px solid #174e4f;
    min-width: 100px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 26px;
    text-align: center;
    position: absolute;
    right: -20px;
    top: -20px;
    width: auto;
    font-family: "Roboto";
  }

  .category {
    padding: 20px;
    font-style: italic;
  }
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0 10px 0;
    transition: all 0.3s ease;
  }

  .image-image-container {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 6px solid #f3e5ce;
    overflow: hidden;
    display: flex;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid #f3e5ce;
  }

  .image-container:hover {
    transform: scale(1.1);
  }
  .card-header {
    text-align: center;
    font-size: 26px;
    padding: 5px 35px 10px 35px;
  }

  .add-to-cart {
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    font-weight: 600;
    background-color: #174e4f;
    margin-top: 10px;
    color: #f3e5ce;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
  }

  .add-to-cart:hover {
    background-color: #0f3a3b;
  }

  //////CARD  PRODUCT END

  ///PRODUCT-SIDEBAR

  .product-sidebar {
    height: auto;
    min-width: 290px;
    width: 290px;
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
  hr {
    margin: 10px;
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

  .category-button {
    cursor: pointer;
    text-align: left;

    transition: all 0.2s ease;
  }

  .category-button:hover {
    background-color: #e2c49a;
  }

  .category-button.active {
    background-color: #174e4f;
    color: #f3e5ce;
    font-weight: bold;
  }

  //modal

  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    padding-top: 50px;
  }
  .modal-content {
    width: 400px;
    height: 500px;
    height: auto;
    background-color: #f3e5ce;
    display: flex;

    border-radius: 16px;
    flex-direction: column;
    /* background: linear-gradient(165deg, #174e4f 1%, #f3e5ce 40%); */
    background: linear-gradient(145deg, #174e4f 1%, #f3e5ce 40%);
    padding: 30px;
    position: relative;
  }
  .modal-price {
    background-color: #174e4f;
    color: #f3e5ce;
    padding: 14px;
    border: 1px solid #f3e5ce;
    min-width: 100px;
    font-family: "Roboto";
    border-radius: 50%;

    font-weight: bold;
    font-size: 26px;
    text-align: center;
    position: absolute;
    right: -30px;
    top: -20px;
    width: auto;
  }
  .modal-left {
    display: flex;
    justify-content: center;
  }

  .modal-img {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0 10px 0;
    transition: all 0.3s ease;
  }

  .modal-img-img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 6px solid #f3e5ce;
    overflow: hidden;
    display: flex;

    align-items: center;
    /*  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3); */
  }

  .modal-img img {
    width: 100%;
    height: 100%;
  }

  .modal-img {
    /*   height: 200px;
    width: 170px;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
    transition: transform 0.3s ease; */
  }
  .modal-img:hover {
    transform: scale(1.05);
  }
  .modal-right {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal-name {
    font-size: 28px;
    font-weight: 600;
    text-align: center;
  }
  .modal-category {
    font-style: italic;
    font-size: 20px;
    margin-bottom: 10px;
  }
  .modal-left-right {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 18px;
  }
  .stock {
    font-family: "Roboto";
  }
  .modal-input {
    width: 60px;
    text-align: center;
    font-size: 18px;
    border: 1px solid #174e4f;
    margin-left: 5px;
    border-radius: 4px;
    font-family: "Roboto";
    line-height: 20px;
  }
  .modal-description {
    font-size: 16px;
    /*  font-weight: 600; */
    /*  letter-spacing: 1px; */
  }
  .view-more {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: underline;
  }
  .view-more:hover {
    color: #216b6c;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    gap: 20px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .modal-btn {
    padding: 10px;
    width: 50%;
    border: 2px solid #174e4f;
    cursor: pointer;
    transition: 0.3s ease;
    border-radius: 8px;
  }

  .modal-btn:first-child:hover {
    background-color: #e2c49a;
  }
  .modal-btn:last-child {
    background-color: #174e4f;
    color: #f3e5ce;
  }
  .modal-btn:last-child:hover {
    background-color: #216b6c;
  }
`;
export default Wrapper;
