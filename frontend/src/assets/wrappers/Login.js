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
    background-color: #f3e5ce;
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
    cursor: pointer;
    display: inline-block;
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
  .register {
    color: red;
    font-weight: 700;
    text-decoration: none;
  }

  .error {
    color: #ef4444; /* red-500 */
    margin: 0 60px 16px 60px; /* 16px */
    font-size: 14px;
  }
  //////LOGIN SECTION///////////////
  /* .login-section {
    height: 100vh;
    background-image: url("src/assets/images/kk.jpg");

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 100px;
    font-family: "Judson";
  }
  .login-container {
    height: 500px;
    width: 500px;
    border: 2px solid red;
    background-color: #f3e5ce;
    border-radius: 24px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
    border: 1px solid #174e4f;
    backdrop-filter: blur(12px);
    
    background-color: transparent;
    
    backdrop-filter: blur(12px) brightness(1.2) saturate(120%);
    -webkit-backdrop-filter: blur(12px) brightness(1.2) saturate(120%);
  }
  .login-container p {
    font-size: 36px;
    text-align: center;
    padding: 40px 40px 20px 40px;
    color: #174e4f;
    font-weight: 600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  }

  .login-input {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  input {
    height: 46px;
    width: 400px;
    border: 2px solid #281d17;
    border-radius: 12px;
    background-color: rgba(61, 44, 36, 0.9);
    font-family: "Judson";
    font-size: 26px;
    padding-left: 20px;
    color: rgba(255, 255, 255, 1);
  }

  input::placeholder {
    opacity: 0.4;
    color: rgba(255, 255, 255, 0.75);
    font-size: 26px;
  }
  .login-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 20px 0px 20px;
  }

  .login-btn-btn {
    padding: 10px;
    width: 150px;
    border-radius: 12px;
    font-size: 28px;

    font-family: "Judson";
    background-color: rgba(61, 44, 36, 1);
    color: #ffffff;
    border-style: none;
    cursor: pointer;
  }
  .login-btn-btn:hover {
    background-color: rgba(61, 44, 36, 0.9);
  }
  h7 {
    color: #403026;
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding: 20px;
  }

  span {
    font-weight: 600;
    cursor: pointer;
    font-size: 24px;
  } */
`;
export default Wrapper;
