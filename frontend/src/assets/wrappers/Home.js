import styled from "styled-components";

const Wrapper = styled.main`
  margin: 0;
  padding: 0;
  font-family: "Playfair Display";

  ////HERO SECTION

  .hero-section {
    height: 100vh;
    background-color: #f3e5ce;
    padding-top: 70px;
    position: relative;
    color: #174e4f;
    z-index: 2;
  }
  .main-text {
    font-size: 110px;
    line-height: 130px;
    padding: 60px 60px 50px 60px;
    position: relative;
    z-index: 2;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    font-weight: 600;
  }
  .sub-text {
    font-size: 44px;
    padding: 0 50px 30px 70px;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  }

  .hero-image-image {
    position: absolute;
    right: 0;
    top: 100px;
    height: 650px;
    width: 650px;
    padding-right: 50px;
    z-index: 22;
    /*  padding: 50px 50px 50px 50px; */
  }
  .hero-btn {
    padding-left: 70px;
  }
  .hero-btn-btn {
    font-size: 22px;
    padding: 15px 25px 15px 25px;
    border-radius: 50px;
    background-color: #174e4f;
    color: #f3e5ce;
    border: none;
    font-family: "Roboto";
  }
  .hero-btn-btn:hover {
    background-color: #0f3a3b;
  }
  ////BEST SECTION

  .best-section {
    height: 100vh;
    background-color: #f3e5ce;
    color: #174e4f;
  }
  .best-text {
    display: flex;
    justify-content: space-between;
    padding: 100px 70px 50px 70px;
  }
  .main-best-text {
    font-size: 48px;
  }
  .sub-best-text {
    font-size: 32px;
  }

  .best-container {
    display: flex;
    margin: 0 70px 0 70px;
    gap: 40px;
  }
  .best-container-image {
    height: 410px;
    width: 410px;
    border: 5px solid red;
    background-color: #174e4f;
  }

  ////// CARD PRODUCT START
  .card {
    width: 270px;
    height: 370px;
    background: linear-gradient(135deg, #174e4f 55%, #f3e5ce 50%);
    border-radius: 16px;
    padding: 10px;
    position: relative;
    font-family: "Roboto";
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    color: #fff;
    border: 1px solid #174e4f;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }

  .card-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f3e5ce;
    border: none;
  }

  .price {
    background-color: #f3e5ce;
    color: #174e4f;
    padding: 14px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 26px;
  }

  .image-container {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    overflow: hidden;
    border: 6px solid #f3e5ce;
    margin-top: 5px;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .add-to-cart {
    background-color: #174e4f;
    color: #f3e5ce;
    border: none;
    padding: 10px 28px;
    border-radius: 12px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .add-to-cart:hover {
    background-color: #0f3a3b;
  }

  ////// END PRODUCT START

  /// OFF SECTION
  .off-section {
    height: 50vh;
    background-color: #174e4f;
    position: relative;
  }
  .main-off-text {
    font-size: 58px;
    line-height: 88px;
    color: #f3e5ce;
    padding: 40px 70px 15px 70px;
  }

  .off-btn {
    padding-left: 70px;
  }
  .off-btn-btn {
    font-size: 22px;
    padding: 15px 25px 15px 25px;
    border-radius: 50px;
    background-color: #f3e5ce;
    color: #174e4f;
    border: none;
    font-family: "Roboto";
  }
  .off-btn-btn:hover {
    background-color: #e7d5b8;
  }

  .off-image {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 350px;
    padding-right: 70px;
    /* width: 350px; */
  }

  /// ABOUT SECTION

  .about-section {
    height: 100vh;
    background-color: #f3e5ce;
    color: #174e4f;

    padding: 100px 70px 70px 70px;
  }

  .about-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 50px;
  }
  .main-about-text {
    font-size: 48px;
  }
  .sub-about-text {
    font-size: 22px;
    line-height: 32px;
  }

  .about-image {
    display: flex;
    justify-content: end;
  }

  .about-image-image {
    height: 400px;
    width: 500px;
  }
`;
export default Wrapper;
