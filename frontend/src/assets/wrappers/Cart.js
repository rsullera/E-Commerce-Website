import styled from "styled-components";

const Wrapper = styled.section`
  margin: 0;
  padding: 0;
  font-family: "Playfair Display";

  .cart {
    height: auto;
    display: flex;
  }
  .cart-section {
    height: auto;
    background-color: #f3e5ce;
    padding-top: 100px;
    width: 75%;
    color: #174e4f;
  }
  hr {
    width: 95%;
    margin: 20px auto;
    border: none;
    height: 0.1px;
    background-color: black;
    opacity: 0.25;
  }
  .cart-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 70px 0 70px;
  }
  .shopping-cart {
    font-size: 38px;
    font-weight: 600;
    font-family: "Playfair Display";
  }
  .cart-item {
    font-size: 20px;
    font-family: "Playfair Display";
  }
  .cart-container {
    font-size: 26px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 30px 70px 30px 70px;

    justify-items: center;
    align-items: center;
  }

  .number {
    font-size: 26px;
    height: 40px;
    width: 60px;
    border: 2px solid #174e4f;
    text-align: center;
  }

  .checkbox {
    height: 30px;
    width: 30px;
    background-color: #174e4f;
  }

  .cart-img {
    height: 100px;
    width: 100px;
  }

  //SUMMARY SECTION
  .summary-section {
    background-color: #f3e5ce;
    padding-top: 100px;
    border-left: 3px solid #174e4f;

    top: 0;
    right: 0;
    height: auto; /* full screen height */
    width: 25%; /* adjust to your layout */
  }
  .summary-container {
    display: flex;
    flex-direction: column;
    padding: 0 40px 0 40px;
  }
  .summary {
    font-size: 32px;
    padding-bottom: 40px;
    font-weight: 600;
    font-family: "Playfair Display";
    color: #174e4f;
  }
  .subtotal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 10px 20px;
  }

  .summary-info {
    font-size: 26px;
    color: #174e4f;
  }
  .summary-total {
    font-size: 30px;
    font-weight: 600;
    color: #174e4f;
  }
  .checkout-btn {
    font-size: 22px;
    padding: 10px;

    margin-top: 20px;
    background-color: #174e4f;
    color: #f3e5ce;
    font-weight: 600;
    text-align: center;
  }

  .checkout-btn:hover {
    background-color: #216b6c;
  }
`;
export default Wrapper;
