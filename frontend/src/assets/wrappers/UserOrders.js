import styled from "styled-components";

const Wrapper = styled.main`
  margin: 0;
  padding: 40px;
  min-height: 100vh;
  font-family: "Playfair Display", serif;
  background-color: #f3e5ce;

  h2 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  .no-orders {
    font-size: 20px;
  }

  .orders-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .order-card {
    background-color: #fff;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
  }

  .order-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .order-header p {
    margin: 6px 0;
  }

  .order-header span {
    font-weight: 600;
  }

  .placed {
    font-size: 14px;
    color: #555;
  }

  .order-status {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 12px;
    font-weight: 600;
    margin-top: 8px;
  }

  .pending {
    background-color: #fff3bf;
    color: #d89614;
  }

  .processing {
    background-color: #cfe2ff;
    color: #084298;
  }

  .shipped {
    background-color: #e0cffc;
    color: #5b00b3;
  }

  .completed {
    background-color: #d1e7dd;
    color: #0f5132;
  }

  .cancelled {
    background-color: #f8d7da;
    color: #842029;
  }

  .order-items {
    margin-top: 16px;
    padding-left: 0;
    list-style: none;
  }

  .order-items li {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }

  .order-items img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 12px;
    border: 1px solid #ccc;
  }
`;

export default Wrapper;
