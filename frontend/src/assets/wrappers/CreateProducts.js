import styled from "styled-components";

const Wrapper = styled.section`
  .create-product-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 30px;
    font-family: "Roboto";
    color: #174e4f;
  }

  .create-product-box {
    width: 100%;
    max-width: 900px;
    background-color: white;
    border-radius: 0.375rem; /* same rounded as create-user */
    padding: 1.5rem;
    box-sizing: border-box;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  }

  .create-product-box h2 {
    margin-bottom: 1.5rem;
    color: #174e4f;
    font-weight: 700;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  /* two columns layout */
  .form-columns {
    display: flex;
    gap: 1.5rem;
  }

  .left-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-right: 1.25rem; /* 20px */
    border-right: 1px solid rgba(23, 78, 79, 0.15);
  }

  .right-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: 1.25rem; /* 20px */
  }

  .form-group label {
    display: block;
    margin-bottom: 0.25rem;
    font-weight: 500;
    color: #174e4f;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    box-sizing: border-box;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }

  .form-group textarea {
    min-height: 260px;
    resize: none;
  }

  .submit-btn {
    margin: 2rem auto 0 auto;
    display: block;
    background-color: #198754;
    color: white;
    border: none;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    font-weight: 600;
  }

  .submit-btn:hover {
    background-color: #157347;
  }

  @media (max-width: 820px) {
    .form-columns {
      flex-direction: column;
    }
    .left-column {
      border-right: none;
      padding-right: 0;
    }
    .right-column {
      padding-left: 0;
    }
  }
`;

export default Wrapper;
