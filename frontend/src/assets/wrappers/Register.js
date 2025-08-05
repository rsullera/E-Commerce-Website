import styled from "styled-components";
const Wrapper = styled.section`
  margin: 0;
  padding: 0;

  .register-section {
    height: 100vh;
    background-image: linear-gradient(
        to right,
        rgba(42, 24, 21, 0.9),
        rgba(255, 255, 255, 0.2)
      ),
      url("src/assets/images/kkplace.jpg");

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 100px;
    font-family: "Judson";
  }

  .register-container {
    height: 570px;
    width: 500px;
    border: 2px solid red;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 24px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
    border: 1px solid #38220f;

    backdrop-filter: blur(12px) brightness(1.2) saturate(120%);
    -webkit-backdrop-filter: blur(12px) brightness(1.2) saturate(120%);
  }

  .register-container p {
    font-size: 44px;
    text-align: center;
    padding: 50px 50px 30px 50px;
    color: #403026;
    font-weight: 600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  }

  .register-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 20px 0px 20px;
  }

  .register-btn-btn {
    padding: 10px;
    width: 180px;
    border-radius: 12px;
    font-size: 28px;

    font-family: "Judson";
    background-color: rgba(61, 44, 36, 1);
    color: #ffffff;
    border-style: none;
    cursor: pointer;
  }
  .register-btn-btn:hover {
    background-color: rgba(61, 44, 36, 0.9);
  }

  .member-btn {
    color: #403026;
  }

  .back-btn .member-btn {
    font-size: 28px;

    font-weight: 600;
    color: #fdfdfd;

    cursor: pointer;
    display: flex;
    position: absolute;
    margin: 40px;
    font-family: "Judson";
  }

  .login-section {
    height: 100vh;
    background-image: linear-gradient(
        to right,
        rgba(42, 24, 21, 0.9),
        rgba(255, 255, 255, 0.2)
      ),
      url("src/assets/images/kkplace.jpg");

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
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 24px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
    border: 1px solid #38220f;
    /* backdrop-filter: blur(12px); */
    /* 
    background-color: transparent;*/

    backdrop-filter: blur(12px) brightness(1.2) saturate(120%);
    -webkit-backdrop-filter: blur(12px) brightness(1.2) saturate(120%);
  }
  .login-container p {
    font-size: 44px;
    text-align: center;
    padding: 50px 50px 30px 50px;
    color: #403026;
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
    height: 56px;
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
  }
`;
export default Wrapper;
