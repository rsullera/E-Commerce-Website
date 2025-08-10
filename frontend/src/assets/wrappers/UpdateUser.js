import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  height: auto;

  justify-content: center;
  align-items: center;
  margin: 100px;
  color: #174e4f;
  font-family: "Roboto";

  .form-container {
    width: 50%;
    background-color: white;
    border-radius: 6px; /* 0.375rem */
    padding: 16px 24px;
    box-sizing: border-box;
  }

  form h2 {
    margin-bottom: 16px;
    font-weight: 600;
  }

  label {
    display: block;
    margin-bottom: 4px;
    font-weight: 500;
  }

  input {
    width: 100%;
    margin-bottom: 16px;
    padding: 6px 12px;
    border: 1px solid #ced4da;
    border-radius: 6px;
    font-size: 16px;
    box-sizing: border-box;
  }

  button {
    background-color: #198754; /* Bootstrap success green */
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
  }

  button:hover {
    background-color: #157347;
  }
`;

export default Wrapper;
