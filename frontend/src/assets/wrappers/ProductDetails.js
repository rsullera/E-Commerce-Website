import styled from "styled-components";

const Wrapper = styled.main`
  margin: 0;
  padding: 0;
  font-family: "Playfair Display", serif;
  color: #174e4f;
  padding-top: 70px;

  .product-page {
    display: flex;
    gap: 40px;
    padding: 40px 70px;
    justify-content: center;
    align-items: flex-start;
  }

  .left-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .main-image {
    width: 100%;
    max-width: 600px;
    height: 450px;
    background-color: #f3e5ce;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(23, 78, 79, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
  }

  .thumbnail-images {
    display: flex;
    gap: 16px;
    max-width: 600px;
  }

  .thumb {
    flex: 1;
    height: 100px;
    background-color: #f3e5ce;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(23, 78, 79, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
    transition: transform 0.3s ease;
  }

  .thumb:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(23, 78, 79, 0.4);
  }

  .right-section {
    flex: 1;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .product-title {
    font-size: 48px;
    font-weight: 700;
    font-family: "Playfair Display", serif;
  }

  .price {
    font-size: 32px;
    font-weight: 700;
    background-color: #f3e5ce;
    color: #174e4f;
    padding: 14px 24px;
    border-radius: 50px;
    width: fit-content;
  }

  .details,
  .category,
  .stock {
    font-size: 20px;
    line-height: 1.4;
  }

  .add-to-cart {
    background-color: #174e4f;
    color: #f3e5ce;
    border: none;
    padding: 16px 40px;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: fit-content;
  }

  .add-to-cart:hover {
    background-color: #0f3a3b;
  }

  @media (max-width: 900px) {
    .product-page {
      flex-direction: column;
      align-items: center;
      padding: 20px 30px;
    }

    .left-section,
    .right-section {
      max-width: 100%;
    }

    .main-image {
      height: 300px;
    }

    .thumbnail-images {
      max-width: 100%;
    }
  }
`;

export default Wrapper;
