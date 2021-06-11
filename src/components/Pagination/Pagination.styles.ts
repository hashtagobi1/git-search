import styled from "styled-components";
import { Pagination } from "react-bootstrap";

export const PaginationWrapper = styled.div`
  /* background: red; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  max-width:100vw;

`;

export const pagSection = styled.div`
  /* margin: 10px 10px; */
  /* padding: 10px 10px;*/
`;

export const PaginationEl = styled(Pagination)`
  background: #66c6cc;
`;
