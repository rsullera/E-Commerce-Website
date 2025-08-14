import styled from "styled-components";

const Wrapper = styled.section`
  .update-product-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 30px;
    font-family: "Roboto", sans-serif;
    color: #174e4f;
  }

  .update-product-box {
    width: 100%;
    max-width: 900px;
    background-color: white;
    border-radius: 6px;
    padding: 15px 24px 15px 24px;
    box-sizing: border-box;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  }

  .update-product-box h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #174e4f;
  }

  .form-columns {
    display: flex;
    gap: 24px;
  }

  .left-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-right: 20px;
    border-right: 1px solid rgba(23, 78, 79, 0.15);
  }

  .right-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-left: 20px;
  }

  .form-group label {
    display: block;
    margin-bottom: 4px;
    font-weight: 500;
    color: #174e4f;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 6px 12px;
    font-size: 16px;
    line-height: 1.5;
    border: 1px solid #ced4da;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #86b7fe;
    box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.25);
  }

  .form-group textarea {
    min-height: 260px;
    resize: none;
  }

  .submit-btn {
    /*  margin: 32px auto 0 auto; */
    margin: 15px auto 0 auto;
    display: block;
    background-color: #198754;
    color: white;
    border: none;
    padding: 8px 24px;
    font-size: 16px;
    border-radius: 4px;
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
