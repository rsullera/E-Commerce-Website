import styled from "styled-components";

const Wrapper = styled.main`
  padding: 0;
  margin: 0;
  height: 100vh;
  background-color: #f3e5ce;
  font-family: "Playfair Display";
  color: #1f4f4f;

  ///LEFT SIDE
  .product-page {
    padding: 70px;
    display: flex;
    gap: 30px;
  }

  .left {
    width: 40%;
    padding-top: 50px;
  }

  .right {
    height: 80vh;
    width: 60%;
    padding-top: 35px;
    /*  border: 2px solid red; */
  }

  .product-bg {
    display: flex;
    /* align-items: center; */
    justify-content: end;
    gap: 10px;
  }
  /*  .main-bg {
    height: 540px;
    width: 450px;
    border: 2px solid blue;
  } */

  .main-img {
    height: 530px;
    width: 450px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    /*  border: 4px solid #1f4f4f; */
    transition: transform 0.3s ease;
  }

  .main-img:hover {
    transform: scale(1.05);
  }

  .sub-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-right: 10px;
  }

  .sub-img {
    /*   border: 4px solid #1f4f4f; */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    height: 100px;
    width: 100px;
    transition: transform 0.3s ease;
  }

  .sub-img:hover {
    transform: scale(1.1) rotate(2deg);
  }

  ////RIGHT SIDE
  .product-info {
    /*   */
  }
  .product-title {
    font-size: 56px;
    font-weight: 600;
  }
  .product-category {
    font-size: 26px;
  }
  .product-price {
    font-size: 46px;
    font-weight: 600;
  }
  .product-description {
    font-size: 22px;
    /*   margin-bottom: 20px; */
    height: auto;
  }
  .product-stock {
    font-size: 26px;
    padding-top: 20px;
  }
  input {
    border: 2px solid #1f4f4f;
    padding-left: 20px;
    width: 15%;
    text-align: center;
  }
  .product-quantity {
    font-size: 26px;
    margin-bottom: 20px;
  }
  .product-btn {
    /* position: absolute;
   
    bottom: 90px; */
    /* ensures it starts from the left */
    /*    */ /* so flex covers full width */

    /*   display: flex;
    justify-content: center; /* or space-between / flex-end */
    align-items: center;
    padding-top: 40px;
    display: flex; /* vertical centering */
    gap: 20px; /* space between buttons */
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
  button:first-child:hover {
    background-color: #e7d5b8;
  }

  button:last-child:hover {
    background-color: #216b6c;
  }
`;

export default Wrapper;
