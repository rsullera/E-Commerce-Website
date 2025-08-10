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
    border-radius: 0.375rem; /* similar to bootstrap rounded */
    padding: 1.5rem;
    box-sizing: border-box;
  }

  .create-user-box h2 {
    margin-bottom: 1rem;
  }

  .create-user-form-group {
    margin-bottom: 0.5rem;
  }

  .create-user-form-group label {
    display: block;
    margin-bottom: 0.25rem;
    font-weight: 500;
  }

  .create-user-form-group input {
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    box-sizing: border-box;
  }

  .create-user-form-group input:focus {
    outline: none;
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }

  .create-user-submit-btn {
    background-color: #198754; /* bootstrap success green */
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .create-user-submit-btn:hover {
    background-color: #157347;
  }
`;

export default Wrapper;
