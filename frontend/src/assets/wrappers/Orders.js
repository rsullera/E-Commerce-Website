import styled from "styled-components";

const Wrapper = styled.section`
  margin: 0;
  padding: 0;
  font-family: "Roboto";

  .page-container {
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px 20px 0 20px;
    box-sizing: border-box;
  }

  .table-scroll {
    max-height: 63vh; /* ✅ table scroll area */
    overflow-y: auto;
    border: 1px solid #ddd;
    border-radius: 8px;
  }

  .table-custom {
    width: 100%;
    border-collapse: collapse;
  }

  .table-custom thead th {
    position: sticky; /* Makes headers stick when scrolling */
    top: 0; /* Sticks to the top of the container */
    background-color: #f8f9fa; /* Keeps header background visible */
    z-index: 1; /* Ensures headers appear above table rows */
    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.2); /* Optional shadow for separation */
  }
  .table-custom th,
  .table-custom td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  .card {
    width: 100%;
    height: 80vh;
    background-color: white;
    border-radius: 6px;
    padding: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.075);
    overflow-x: auto;
    color: #174e4f;
  }

  .orders-dashboard {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .orders-dashboard h2 {
    font-size: 32px;
    font-weight: 600;
  }

  .table-custom {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #dee2e6;
  }

  .table-custom thead {
    background-color: #f8f9fa;
  }

  .table-custom th,
  .table-custom td {
    border: 1px solid #dee2e6;
    padding: 12px;
    text-align: left;
    vertical-align: middle;
  }

  .table-custom tbody tr:hover {
    background-color: #e9ecef;
  }

  .select-status {
    padding: 6px 12px;
    border-radius: 6px;
    border: 1px solid #dee2e6;
    cursor: pointer;
    font-weight: 500;
  }

  /* Status colors */
  .status-pending {
    background-color: #fff3cd;
    color: #856404;
    border: 1px solid #ffeeba;
  }

  .status-processing {
    background-color: #cce5ff;
    color: #004085;
    border: 1px solid #b8daff;
  }

  .status-shipped {
    background-color: #d1ecf1;
    color: #0c5460;
    border: 1px solid #bee5eb;
  }

  .status-completed {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  .status-cancelled {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }

  .items-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .item-row {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
  }

  .item-image {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 8px;
  }

  .text-center {
    text-align: center;
    padding: 20px;
  }
`;

export default Wrapper;
