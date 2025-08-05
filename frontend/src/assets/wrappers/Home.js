import styled from "styled-components";

const Wrapper = styled.main`
  margin: 0;
  padding: 0;
  overflow: hidden;

  header {
    scroll-behavior: smooth;
  }

  /////HOME-SECTION
  .home-section {
    height: 100vh;
    background-image: linear-gradient(
        rgba(107, 66, 38, 0.5),
        rgba(107, 66, 38, 0.5)
      ),
      url("src/assets/images/bg35.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .home-section h1 {
    font-size: 128px;
    color: rgb(255, 255, 255);
    text-align: center;
    font-family: "Young Serif", serif;
    padding: 100px 100px 50px 100px;
    text-shadow: 0 8px 8px rgba(0, 0, 0, 0.5);
    text-transform: none;
    display: flex;
    line-height: 1.2;
  }

  .home-section p {
    font-size: 44px;
    color: rgb(255, 255, 255);
    font-family: "Judson", serif;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
  }

  .home-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home-btn-btn {
    padding: 15px 50px 15px 50px;
    font-size: 20px;
    font-family: "Lekton";
    color: rgb(255, 255, 255);
    border: 2px solid #fff;
    border-radius: 50px;
    cursor: pointer;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
  .home-btn-btn:hover {
    background-color: #fdfdfd;
    color: #333333;
  }

  ////OFF-SECTION/////
  .off-section {
    height: 50vh;
    background-color: #533a35;
  }
  .off-row {
    display: flex;
    height: 100%;
  }
  .off-container {
    width: 200rem;
    padding: 80px 0px 0 80px;
    font-family: "Judson", serif;
  }
  .off {
    color: rgb(255, 255, 255);
  }
  .off-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .off-btn-btn {
    padding: 15px 50px;
    font-size: 20px;
    font-family: "Lekton";
    color: rgb(255, 255, 255);
    border: 2px solid #fff;
    border-radius: 50px;
    margin-top: 40px;
    cursor: pointer;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
  .off-btn-btn:hover {
    background-color: #fdfdfd;
    color: #333333;
  }
  .off-section p {
    font-size: 56px;
  }
  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: center;
    margin-top: 70px;
  }
  .off-img {
    height: 300px;
    width: 300px;
  }
  .off-img1 {
    height: 250px;
    width: 250px;
  }

  ////TOP SELLING ITEM/////
  .top-container {
    height: 100vh;
    background-color: #eae0d5;
  }
  .top-container p {
    font-size: 66px;
    font-family: "Judson", serif;
    text-align: center;
    padding-top: 80px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    color: #4a2e2c;
  }

  .selling {
    display: flex;
    justify-content: center;
    gap: 40px;
  }
  .selling-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    background-color: #fdfdfd;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }
  .selling-container:hover {
    transform: scale(1.02);
  }
  .selling-img {
    height: 300px;
    width: 300px;
  }
  .selling-text {
    width: 300px;
    font-family: "Lekton";
    padding: 20px;
    background-color: #fdfdfd;
  }

  /////INFO SECTION///

  .info-section {
    height: 210vh;
    /*    background-color: #eae0d5; */
    background-image: url(src/assets/images/12.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    font-family: "Times New Roman";
  }

  .info-img-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    margin: 60px;
    text-align: justify;
    gap: 40px;
  }
  .info-section h1 {
    color: #4a2e2c;
    font-size: 150px;
    display: flex;
    justify-content: center;
    padding-top: 120px;
    font-family: "Times New Roman";
    font-style: oblique;
  }
  .info-section h3 {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    font-family: "Times New Roman";
    color: #4a2e2c;
  }

  .info-section h4 {
    display: flex;
    justify-content: center;
    padding: 30px;
    background-color: #533a35;
    background-color: #533a35;
    margin-bottom: 40px;
    color: #fdfdfd;
    text-align: center;
    font-size: 58px;
    text-transform: uppercase;
  }

  .info-section h5 {
    display: flex;
    justify-content: center;
    padding: 5px;
    font-size: 58px;
    margin-bottom: 20px;
    color: #4a2e2c;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
  }

  p {
    font-size: 20px;
    color: #4a2e2c;
  }

  .info-image {
    height: 580px;
    width: 580px;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-items: center;
  }

  hr {
    width: 95%;
    margin: 20px auto;
    border: none;
    height: 0.1px;
    background-color: black;
    opacity: 0.25;
  }

  .info-number {
    text-align: center;
    padding: 20px;
    font-family: "Lekton";
  }

  /* .info-costumer {
    padding-bottom: 1000px;
  } */

  .info-costumer h2 {
    font-size: 86px;
    margin-bottom: 20px;
    color: #4a2e2c;
  }

  .info-costumer span {
    font-size: 20px;
    font-weight: 600;
  }

  .item1 {
    grid-row: span 2;
    grid-column: 1;
  }

  .item2 {
    grid-column: 2;
    grid-row: 1;
  }

  .item3 {
    grid-column: 3;
    grid-row: 1;
  }

  .item3:hover {
  }

  .item4 {
    grid-column: 2 / span 2; /* spans column 2 to 3 */
    grid-row: 2;
  }
`;
export default Wrapper;
