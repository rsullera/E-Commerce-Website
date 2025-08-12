import styled from "styled-components";

const Wrapper = styled.main`
  padding: 0;
  margin: 0;
  height: 100vh;
  background-color: #f3e5ce;
  font-family: "Playfair Display";
  color: #1f4f4f;

  .product-page {
    padding-top: 100px;
  }

  .product-bg {
    /*  border: 2px solid red */
    width: 700px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 50px;
  }
  .product-bg-bg {
    width: 550px;
    height: 550px;

    border: 25px solid #1f4f4f;

    border-radius: 80% 20% 80% 20% / 20% 80% 20% 80%;

    background-color: #f3e5ce;

    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product-page {
    display: flex;
  }

  .product {
    width: 525px;
    height: 525px;

    border-radius: 80% 20% 80% 20% / 20% 80% 20% 80%;

    /* transform: rotate(90deg); */

    background-image: url("src/assets/images/product1.webp");
    background-size: cover;
    background-position: center;

    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product-bg-bg:hover {
    transform: scale(1.1);
  }

  ////RIGHT
  .product-info {
    padding: 0 70px;
  }
  .product-title {
    font-size: 66px;
    font-weight: 700;
  }
  .product-category {
    font-size: 26px;
  }
  .product-price {
    font-size: 56px;
    font-weight: 600;
  }
  .product-description {
    font-size: 22px;
    margin-bottom: 20px;
    height: auto;
  }
  .product-stock {
    font-size: 26px;
  }
  .product-quantity {
    font-size: 26px;
    margin-bottom: 20px;
  }
  .product-btn {
    display: flex;
    justify-content: space-between;
  }
  button {
    font-size: 36px;
    border: 2px solid #1f4f4f;
    width: 48%;
    padding: 5px;
    cursor: pointer;
    border-radius: 8px;
  }
  button:last-child {
    background-color: #1f4f4f;
    color: #f3e5ce;
  }
`;

export default Wrapper;
