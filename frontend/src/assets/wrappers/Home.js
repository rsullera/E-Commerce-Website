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
    height: 100%;
    background-color: #f3e5ce;
    color: #174e4f;
    padding-bottom: 50px;
  }
  .best-text {
    display: flex;
    justify-content: space-between;
    padding: 100px 70px 50px 70px;
  }
  .main-best-text {
    font-size: 48px;
    font-weight: 600;
  }
  .sub-best-text {
    font-size: 32px;
    cursor: pointer;
  }

  /* ✅ copied from ProductList */
  .card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 cards per row */
    gap: 30px;
    margin: 0 70px 30px 70px;
  }

  ////// CARD PRODUCT START
  .card {
    border: 2px solid #174e4f;
    width: 270px;
    height: 420px;
    border-radius: 16px;
    background: linear-gradient(145deg, #174e4f 50%, #f3e5ce 50%);
    position: relative;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }

  .card-category {
    color: #f3e5ce;
    padding-top: 10px;
  }
  .price {
    background-color: #f3e5ce;
    color: #174e4f;
    padding: 14px;
    border: 2px solid #174e4f;
    min-width: 100px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 26px;
    text-align: center;
    position: absolute;
    right: -20px;
    top: -20px;
    width: auto;
    font-family: "Roboto";
  }
  .category {
    padding: 20px;
    font-style: italic;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0 10px 0;
    transition: all 0.3s ease;
  }
  .image-image-container {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 6px solid #f3e5ce;
    overflow: hidden;
    display: flex;
  }
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid #f3e5ce;
  }
  .image-container:hover {
    transform: scale(1.1);
  }

  .card-header {
    text-align: center;
    font-size: 26px;
    padding: 5px 35px 10px 35px;
  }

  .add-to-cart {
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    font-weight: 600;
    background-color: #174e4f;
    margin-top: 10px;
    color: #f3e5ce;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
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
