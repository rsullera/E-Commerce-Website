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
  }
  .price {
    background-color: #f3e5ce;
    color: #174e4f;
    padding: 14px;
    border: 2px solid #174e4f;
    width: 100px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 26px;
    text-align: center;
    position: absolute;
    right: -20px;
    top: -20px;
  }

  .category {
    padding: 20px;
  }
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0 10px 0;
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
  /* .card {
    width: 270px;
    height: 400px;
    background: linear-gradient(155deg, #174e4f 55%, #f3e5ce 50%);
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
    margin-top: 20px;
  }

  .card-header {
    font-size: 26px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #174e4f;
    border: none;
    font-family: "Playfair Display";
    padding-left: 10px;
    text-align: center;
  }

  .price {
    background-color: #f3e5ce;
    color: #174e4f;
    padding: 14px;
    border: 2px solid #174e4f;
    width: 100px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 26px;
    text-align: center;
    position: absolute;
    right: -20px;
    top: -20px;
  }

  .image-container {
    min-width: 180px;
    min-height: 180px;
    border-radius: 50%;
    overflow: hidden;
    border: 6px solid #f3e5ce;
    margin-top: 5px;
    transition: all 0.3s ease;
    margin-top: 20px;
  }

  .image-container:hover {
    transform: scale(1.1);
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
    margin: 20px;
    padding: 10px 28px;
    border-radius: 12px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .add-to-cart:hover {
    background-color: #0f3a3b;
  } */

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

  //modal
  .modal-overlay {
    position: fixed;

    background-color: pink;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  .modal-content {
    background-color: #f3e5ce;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 24px;
    max-width: 400px;
    width: 90%;
    height: auto;
    border: 1px solid #174a43;
  }

  .modal-left-right {
    display: flex;
    gap: 10px;
  }
  .modal-left {
    width: 40%;
  }
  .modal-right {
    margin: 0;
    padding: 0;
    width: 60%;
    display: flex;
    flex-direction: column;
  }
  .modal-img {
    width: 200px;
    height: 200px;
    border: 2px solid #174e4f;
    border-radius: 12px;
    transition: transform 0.3s ease;
  }
  .modal-img:hover {
    transform: scale(1.05);
  }

  .modal-name {
    white-space: nowrap;
    font-size: clamp(16px, 4vw, 36px); /* auto-resize but max 36px */
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
  }
  .modal-category {
    font-size: 18px;
  }
  .modal-price {
    font-size: 36px;
    font-weight: 600;
  }
  .modal-stock {
    font-size: 18px;
  }
  .modal-quantity {
    font-size: 18px;
  }
  .modal-number {
    font-size: 18px;
  }
  input {
    font-size: 18px;
    width: 100px;
    text-align: start;
    padding-left: 20px;
  }
  .modal-container {
    padding: 10px 5px 0 5px;
  }
  .modal-description {
    font-size: 18px;
  }
  .view-more {
    margin: 5px 5px 20px 5px;
    color: rgba(23, 78, 79, 0.7);
    cursor: pointer;
  }
  .view-more:hover {
    color: #216b6c;
  }
  .modal-buttons {
    display: flex;
    gap: 20px;
  }
  .modal-btn {
    background: transparent;
    border: 1px solid #174a43;
    color: #174a43;
    padding: 10px 24px;
    font-size: 16px;
    font-family: inherit;
    cursor: pointer;
    transition: 0.3s ease;
    width: 50%;
    border-radius: 12px;
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
