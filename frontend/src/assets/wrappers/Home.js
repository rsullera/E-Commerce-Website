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
    padding: 0 50px 0 70px;
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
    padding: 40px 70px 40px 70px;
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

// import styled from "styled-components";

// const Wrapper = styled.main`
//   margin: 0;
//   padding: 0;
//   overflow: hidden;

//   header {
//     scroll-behavior: smooth;
//   }

//   /////HOME-SECTION
//   .home-section {
//     height: 100vh;
//     background-image: linear-gradient(
//         rgba(107, 66, 38, 0.5),
//         rgba(107, 66, 38, 0.5)
//       ),
//       url("src/assets/images/bg35.jpg");
//     background-repeat: no-repeat;
//     background-position: center;
//     background-size: cover;
//   }
//   .home-section h1 {
//     font-size: 128px;
//     color: rgb(255, 255, 255);
//     text-align: center;
//     font-family: "Young Serif", serif;
//     padding: 100px 100px 50px 100px;
//     text-shadow: 0 8px 8px rgba(0, 0, 0, 0.5);
//     text-transform: none;
//     display: flex;
//     line-height: 1.2;
//   }

//   .home-section p {
//     font-size: 44px;
//     color: rgb(255, 255, 255);
//     font-family: "Judson", serif;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 30px;
//   }

//   .home-btn {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   .home-btn-btn {
//     padding: 15px 50px 15px 50px;
//     font-size: 20px;
//     font-family: "Lekton";
//     color: rgb(255, 255, 255);
//     border: 2px solid #fff;
//     border-radius: 50px;
//     cursor: pointer;
//     backdrop-filter: blur(12px);
//     -webkit-backdrop-filter: blur(12px);
//     background: rgba(255, 255, 255, 0.15);
//     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//   }
//   .home-btn-btn:hover {
//     background-color: #fdfdfd;
//     color: #333333;
//   }

//   ////OFF-SECTION/////
//   .off-section {
//     height: 50vh;
//     background-color: #533a35;
//   }
//   .off-row {
//     display: flex;
//     height: 100%;
//   }
//   .off-container {
//     width: 200rem;
//     padding: 80px 0px 0 80px;
//     font-family: "Judson", serif;
//   }
//   .off {
//     color: rgb(255, 255, 255);
//   }
//   .off-btn {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   .off-btn-btn {
//     padding: 15px 50px;
//     font-size: 20px;
//     font-family: "Lekton";
//     color: rgb(255, 255, 255);
//     border: 2px solid #fff;
//     border-radius: 50px;
//     margin-top: 40px;
//     cursor: pointer;
//     backdrop-filter: blur(12px);
//     -webkit-backdrop-filter: blur(12px);
//     background: rgba(255, 255, 255, 0.15);
//     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//   }
//   .off-btn-btn:hover {
//     background-color: #fdfdfd;
//     color: #333333;
//   }
//   .off-section p {
//     font-size: 56px;
//   }
//   .img {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     justify-self: center;
//     margin-top: 70px;
//   }
//   .off-img {
//     height: 300px;
//     width: 300px;
//   }
//   .off-img1 {
//     height: 250px;
//     width: 250px;
//   }

//   ////TOP SELLING ITEM/////
//   .top-container {
//     height: 100vh;
//     background-color: #eae0d5;
//   }
//   .top-container p {
//     font-size: 66px;
//     font-family: "Judson", serif;
//     text-align: center;
//     padding-top: 80px;
//     text-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
//     color: #4a2e2c;
//   }

//   .selling {
//     display: flex;
//     justify-content: center;
//     gap: 40px;
//   }
//   .selling-container {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     margin-top: 60px;
//     background-color: #fdfdfd;
//     box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
//     transition: transform 0.3s ease;
//   }
//   .selling-container:hover {
//     transform: scale(1.02);
//   }
//   .selling-img {
//     height: 300px;
//     width: 300px;
//   }
//   .selling-text {
//     width: 300px;
//     font-family: "Lekton";
//     padding: 20px;
//     background-color: #fdfdfd;
//   }

//   /////INFO SECTION///

//   .info-section {
//     height: 210vh;
//     /*    background-color: #eae0d5; */
//     background-image: url(src/assets/images/12.jpg);
//     background-repeat: no-repeat;
//     background-position: center;
//     background-size: cover;
//     font-family: "Times New Roman";
//   }

//   .info-img-section {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-template-rows: auto auto;
//     margin: 60px;
//     text-align: justify;
//     gap: 40px;
//   }
//   .info-section h1 {
//     color: #4a2e2c;
//     font-size: 150px;
//     display: flex;
//     justify-content: center;
//     padding-top: 120px;
//     font-family: "Times New Roman";
//     font-style: oblique;
//   }
//   .info-section h3 {
//     display: flex;
//     justify-content: center;
//     padding-top: 30px;
//     font-family: "Times New Roman";
//     color: #4a2e2c;
//   }

//   .info-section h4 {
//     display: flex;
//     justify-content: center;
//     padding: 30px;
//     background-color: #533a35;
//     background-color: #533a35;
//     margin-bottom: 40px;
//     color: #fdfdfd;
//     text-align: center;
//     font-size: 58px;
//     text-transform: uppercase;
//   }

//   .info-section h5 {
//     display: flex;
//     justify-content: center;
//     padding: 5px;
//     font-size: 58px;
//     margin-bottom: 20px;
//     color: #4a2e2c;
//     text-align: center;
//     font-weight: 600;
//     text-transform: uppercase;
//   }

//   p {
//     font-size: 20px;
//     color: #4a2e2c;
//   }

//   .info-image {
//     height: 580px;
//     width: 580px;
//     margin-left: auto;
//     display: flex;
//     align-items: center;
//     justify-items: center;
//   }

//   hr {
//     width: 95%;
//     margin: 20px auto;
//     border: none;
//     height: 0.1px;
//     background-color: black;
//     opacity: 0.25;
//   }

//   .info-number {
//     text-align: center;
//     padding: 20px;
//     font-family: "Lekton";
//   }

//   /* .info-costumer {
//     padding-bottom: 1000px;
//   } */

//   .info-costumer h2 {
//     font-size: 86px;
//     margin-bottom: 20px;
//     color: #4a2e2c;
//   }

//   .info-costumer span {
//     font-size: 20px;
//     font-weight: 600;
//   }

//   .item1 {
//     grid-row: span 2;
//     grid-column: 1;
//   }

//   .item2 {
//     grid-column: 2;
//     grid-row: 1;
//   }

//   .item3 {
//     grid-column: 3;
//     grid-row: 1;
//   }

//   .item3:hover {
//   }

//   .item4 {
//     grid-column: 2 / span 2; /* spans column 2 to 3 */
//     grid-row: 2;
//   }
// `;
// export default Wrapper;
