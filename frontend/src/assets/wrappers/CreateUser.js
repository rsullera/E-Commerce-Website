import styled from "styled-components";

const Wrapper = styled.section`
  .create-user-container {
    display: flex;
    height: auto;

    justify-content: center;
    align-items: center;
    margin: 100px;
    color: #174e4f;
    font-family: "Roboto";
  }

  .create-user-box {
    width: 50%;
    background-color: white;
    border-radius: 6px;
    padding: 24px;
    box-sizing: border-box;
  }

  .create-user-box h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #174e4f;
  }

  .create-user-form-group {
    margin-bottom: 8px;
  }

  .create-user-form-group label {
    display: block;
    margin-bottom: 4px;
    font-weight: 500;
  }

  .create-user-form-group input {
    width: 100%;
    padding: 6px 12px;
    font-size: 16px;
    line-height: 1.5;
    border: 1px solid #ced4da;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .create-user-form-group input:focus {
    outline: none;
    border-color: #86b7fe;
    box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.25);
  }

  .create-user-submit-btn {
    background-color: #198754;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
  }

  .create-user-submit-btn:hover {
    background-color: #157347;
  }
`;

export default Wrapper;
