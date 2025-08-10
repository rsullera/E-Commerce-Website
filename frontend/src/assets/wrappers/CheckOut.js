import styled from "styled-components";

const Wrapper = styled.section`
  .checkout-section {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    padding: 32px;
    background-color: #f3e5ce;
    padding-top: 100px;
    font-family: "Roboto";
  }

  .checkout {
    flex: 2;
    background-color: #f3e5ce;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .checkout h2 {
    margin-bottom: 8px;
    font-size: 22px;
    color: #174e4f;
    font-weight: 600;
  }

  .checkout hr {
    margin-bottom: 16px;
    border: none;
    border-top: 1px solid #174e4f;
  }

  .checkout-details {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  label {
    font-size: 14px;
    color: #174e4f;
    font-weight: 500;
  }

  .details {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 14px;
    transition: border 0.2s;
  }

  .details:focus {
    border-color: #174e4f;
  }

  button {
    margin-top: 24px;
    background: #174e4f;
    color: #f3e5ce;
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.2s;
  }

  button:hover {
    background: #005fd4;
  }

  .summary {
    flex: 1;
    background-color: #f3e5ce;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: #174e4f;
  }

  .summary p:first-child {
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  .summary hr {
    margin: 12px 0;
    border: none;
    border-top: 1px solid #174e4f;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .checkout-section {
      flex-direction: column;
    }
  }
`;

export default Wrapper;
