import styled from "styled-components";
const Wrapper = styled.section`
  .footer-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 20px;
    background-color: rgb(83, 58, 53);
    padding: 40px 80px;
    color: #fcebd5;
    font-family: "Lekton", monospace;
  }

  .footer-item {
    padding: 10px;
  }

  /* Col1 (logo + description) spans 2 rows and centers vertically */
  .first {
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center; /* vertical centering */
  }

  /* Col2 – top right */
  .second {
    grid-column: 2;
    grid-row: 1;
  }

  /* Col3 – top far right */
  .third {
    grid-column: 3;
    grid-row: 1;
  }

  /* Col4 – bottom right */
  .fourth {
    grid-column: 2;
    grid-row: 2;
  }

  /* Col5 – bottom far right */
  .fifth {
    grid-column: 3;
    grid-row: 2;
  }

  /* Footer bottom centered */
  .six {
    grid-column: 1 / 4;
    text-align: center;
    margin-top: 30px;
    font-size: 14px;
  }
  .footer-logo {
  }
  .footer-logo-logo {
    height: 200px;
    width: 200px;
    padding-bottom: 20px;
    margin-left: 25%;
  }

  .footer-column p:first-child {
    min-height: 56px;
    font-size: 36px;
    font-weight: 600;
  }
  .kape-kalakal {
    font-size: 56px;
    font-weight: 600;
  }

  .first p,
  .second p,
  .third p,
  .fourth p,
  .fifth p {
    color: #fdfdfd;
    padding-bottom: 10px;
    margin: 0;
  }
  .footer-gmail {
    padding: 8px;
    border: none;
    border-radius: 4px;
    width: 70%;
    margin-bottom: 10px;
  }
  .footer-btn {
    padding: 8px 14px;
    background-color: #fcebd5;
    border: none;
    border-radius: 4px;
    color: #38220f;
    font-weight: bold;
    cursor: pointer;
    margin-left: 10px;
  }
  .footer-logo p,
  .footer-reserved p {
    color: #fdfdfd;
  }
`;

export default Wrapper;
