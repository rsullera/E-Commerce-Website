import styled from "styled-components";

const Wrapper = styled.section`
  margin: 0;
  padding: 0;
  font-family: "Roboto";

  .page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
  }

  .card {
    width: 100%;
    height: auto;
    background-color: white;
    border-radius: 6px;
    padding: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.075);
    overflow-x: auto;
    color: #174e4f;
  }

  .users-dashboard {
    display: flex;
    justify-content: space-between;
  }

  .users-dashboard h2 {
    font-size: 32px;
    font-weight: 600;
  }

  .btn-add {
    margin-bottom: 16px;
    background-color: #198754;
    border: none;
    color: white;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    width: 200px;
    text-align: center;
  }

  .btn-add:hover {
    background-color: #157347;
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

  .btn-update {
    margin-right: 8px;
    background-color: #198754;
    border: none;
    color: white;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
    text-decoration: none;
  }

  .btn-update:hover {
    background-color: #157347;
  }

  .btn-delete {
    background-color: #dc3545;
    border: none;
    color: white;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
  }

  .btn-delete:hover {
    background-color: #bb2d3b;
  }

  .pagination-container {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  .btn {
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: background-color 0.3s ease;
  }

  .btn-outline-primary {
    color: #0d6efd;
    background-color: transparent;
    border-color: #0d6efd;
  }

  .btn-outline-primary:hover {
    background-color: #0d6efd;
    color: white;
  }

  .btn-primary {
    background-color: #0d6efd;
    color: white;
    border-color: #0d6efd;
    transition: background-color 0.3s ease;
  }

  .btn-primary:hover {
    background-color: #084298;
    color: white;
  }
`;

export default Wrapper;
