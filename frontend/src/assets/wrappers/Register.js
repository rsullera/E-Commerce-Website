import styled from "styled-components";
const Wrapper = styled.section`
  margin: 0;
  padding: 0;

  .login-section {
    height: 100vh;
    background-image: url("src/assets/images/kk.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-container {
    margin-top: 70px;
    height: auto;
    width: 500px;
    /*  border: 2px solid #174e4f; */
    background-color: #f3e5ce;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }
  .login-welcome {
    font-size: 36px;
    font-family: "Playfair Display";
    margin: 50px 50px 20px 50px;
    text-align: center;
    color: #174e4f;
    font-weight: 700;
  }
  .login-input {
    display: flex;
    flex-direction: column;
  }
  label {
    margin: 0 60px 0 60px;
    font-size: 20px;
    font-family: "Playfair Display";
    color: #174e4f;
    font-weight: 600;
  }
  input {
    height: 45px;
    font-size: 22px;
    background-color: transparent;
    border: 2px solid #174e4f;
    margin: 0 60px 10px 60px;
    border-radius: 8px;
    padding-left: 10px;
  }

  input::placeholder {
    font-size: 22px;
  }

  .login-btn {
    text-align: center;
    font-family: "Playfair Display";
    font-size: 28px;
    height: 45px;
    border: 2px solid #174e4f;
    margin: 20px 60px 20px 60px;
    background-color: #174e4f;
    color: #f3e5ce;
    font-weight: 600;
    border-radius: 8px;
  }
  .login-btn-btn {
    display: inline-block;
    height: auto;
    width: 100%;
    cursor: pointer;
  }
  .login-btn-btn:hover {
    background-color: #216b6c;
  }

  .login-account {
    margin: 0 60px 0 60px;
    font-size: 20px;
    font-family: "Playfair Display";
    color: #174e4f;
    font-weight: 600;
    text-align: center;
    margin: 5px 0 50px 0;
  }
  .login {
    color: red;
    font-weight: 700;
    text-decoration: none;
  }

  .error {
    color: #ef4444; /* red-500 */
    margin: 0 60px 16px 60px; /* 16px */
    font-size: 14px;
  }
`;
export default Wrapper;
