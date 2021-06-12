import styled from "styled-components";
import Pagination from "react-bootstrap/Pagination";
import Container from "react-bootstrap/Container";

export const PaginationWrapper = styled.div`
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* list-style-type: none; */
  max-width: 100vw;
`;

export const PaginContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  background: red;
  /* background:red; */
`;

export const PaginationEl = styled(Pagination)`
  /* display: flex; */
  /* margin: 90px 90px; */
  /* justify-content: center; */
  /* align-items: center; */
  background: #66c6cc;
`;
