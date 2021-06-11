import styled from "styled-components";
import { Pagination } from "react-bootstrap";

export const PaginationWrapper = styled.div`
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`;

export const pagSection = styled.div`
  /* margin: 10px 10px; */
  /* padding: 10px 10px;*/
`;

export const PaginationEl = styled(Pagination)`

  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  background: #66c6cc;
`;
