import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #174e4f;
  color: #f3e5ce;
  font-family: "Roboto";
  padding: 30px 70px 10px 70px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  align-items: start;
  position: relative;

  .footer-logo {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }

  .footer-logo img {
    height: 80px;
    width: auto;
  }

  .footer-logo p {
    font-size: 44px;
    font-weight: bold;
    color: #f3e5ce;
    padding-top: 20px;
  }

  .footer-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .footer-section h4 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #f3e5ce;
  }

  .footer-section a {
    color: #f3e5ce;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s;
  }

  .footer-section a:hover {
    color: #e7d5b8;
  }

  .subscribe {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .subscribe p {
    font-size: 14px;
    margin-bottom: 4px;
  }

  .subscribe input {
    padding: 10px 16px;
    border-radius: 40px;
    border: 2px solid #f3e5ce;
    outline: none;
    font-size: 14px;
  }

  .subscribe button {
    background-color: #f3e5ce;
    color: #174e4f;
    padding: 10px 20px;
    border: none;
    border-radius: 40px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .subscribe button:hover {
    background-color: #e7d5b8;
    color: #174e4f;
  }

  .footer-rights {
    grid-column: 1 / -1;
    text-align: center;
    font-size: 14px;

    color: #f3e5ce;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;

    .footer-logo,
    .footer-section,
    .subscribe {
      align-items: center;
    }

    .subscribe {
      max-width: 100%;
    }
  }
`;

export default Wrapper;

// import styled from "styled-components";
// const Wrapper = styled.section`
//   .footer-section {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-template-rows: auto auto auto;
//     gap: 20px;
//     background-color: rgb(83, 58, 53);
//     padding: 40px 80px;
//     color: #fcebd5;
//     font-family: "Lekton", monospace;
//   }

//   .footer-item {
//     padding: 10px;
//   }

//   /* Col1 (logo + description) spans 2 rows and centers vertically */
//   .first {
//     grid-row: 1 / 3;
//     display: flex;
//     flex-direction: column;
//     justify-content: center; /* vertical centering */
//   }

//   /* Col2 – top right */
//   .second {
//     grid-column: 2;
//     grid-row: 1;
//   }

//   /* Col3 – top far right */
//   .third {
//     grid-column: 3;
//     grid-row: 1;
//   }

//   /* Col4 – bottom right */
//   .fourth {
//     grid-column: 2;
//     grid-row: 2;
//   }

//   /* Col5 – bottom far right */
//   .fifth {
//     grid-column: 3;
//     grid-row: 2;
//   }

//   /* Footer bottom centered */
//   .six {
//     grid-column: 1 / 4;
//     text-align: center;
//     margin-top: 30px;
//     font-size: 14px;
//   }
//   .footer-logo {
//   }
//   .footer-logo-logo {
//     height: 200px;
//     width: 200px;
//     padding-bottom: 20px;
//     margin-left: 25%;
//   }

//   .footer-column p:first-child {
//     min-height: 56px;
//     font-size: 36px;
//     font-weight: 600;
//   }
//   .kape-kalakal {
//     font-size: 56px;
//     font-weight: 600;
//   }

//   .first p,
//   .second p,
//   .third p,
//   .fourth p,
//   .fifth p {
//     color: #fdfdfd;
//     padding-bottom: 10px;
//     margin: 0;
//   }
//   .footer-gmail {
//     padding: 8px;
//     border: none;
//     border-radius: 4px;
//     width: 70%;
//     margin-bottom: 10px;
//   }
//   .footer-btn {
//     padding: 8px 14px;
//     background-color: #fcebd5;
//     border: none;
//     border-radius: 4px;
//     color: #38220f;
//     font-weight: bold;
//     cursor: pointer;
//     margin-left: 10px;
//   }
//   .footer-logo p,
//   .footer-reserved p {
//     color: #fdfdfd;
//   }
// `;

// export default Wrapper;
