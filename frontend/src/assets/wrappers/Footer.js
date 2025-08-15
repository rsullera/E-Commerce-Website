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
