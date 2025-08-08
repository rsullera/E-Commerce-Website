import styled from "styled-components";

const Wrapper = styled.section`
  /* Container for entire page with full viewport height, centered content */
  /*  .page-container {
    display: flex;
    height: auto; 
    background-color: #0d6efd; 
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
  } */
  .page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
  }

  /* Inner white card with padding and rounded corners */
  .card {
    width: 100%;
    height: auto;
    background-color: white;
    border-radius: 0.375rem; /* similar to Bootstrap rounded */
    padding: 1.5rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    overflow-x: auto; /* horizontal scroll on small screens */
  }

  /* Add button */
  .btn-add {
    margin-bottom: 1rem;
    background-color: #198754; /* Bootstrap success green */
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
  }

  .btn-add:hover {
    background-color: #157347;
  }

  /* Table styling */
  .table-custom {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #dee2e6;
  }

  .table-custom thead {
    background-color: #f8f9fa; /* light gray */
  }

  .table-custom th,
  .table-custom td {
    border: 1px solid #dee2e6;
    padding: 0.75rem;
    text-align: left;
    vertical-align: middle;
  }

  .table-custom tbody tr:hover {
    background-color: #e9ecef;
  }

  /* Buttons in action column */
  .btn-update {
    margin-right: 0.5rem;
    background-color: #198754;
    border: none;
    color: white;
    padding: 0.375rem 0.75rem;
    border-radius: 0.375rem;
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
    padding: 0.375rem 0.75rem;
    border-radius: 0.375rem;
    cursor: pointer;
  }

  .btn-delete:hover {
    background-color: #bb2d3b;
  }

  /* Pagination container */
  .pagination-container {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export default Wrapper;
