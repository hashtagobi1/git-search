import styled from "styled-components";
import Pagination from "react-bootstrap/Pagination";
import Container from "react-bootstrap/Container";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
`;

export const PaginContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  justify-content: center;
  align-items: center;
`;

export const PaginationEl = styled(Pagination)`
  color: black;
  border: solid 0.1rem black;
  border-radius: 10px;
  width: 100vw;
  margin: 10px 10px 10px 10px;
  padding: 10px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Gap = styled.div`
  height: 100%;
  margin: 1rem 1rem 1rem 1rem;
  border-left: 1px solid #6c757d;
`;
