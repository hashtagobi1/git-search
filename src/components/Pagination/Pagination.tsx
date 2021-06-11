import React from "react";
import {
  PaginationEl,
  PaginationWrapper,
} from "../Pagination/Pagination.styles";
// State Management
import { useSelector } from "react-redux";
import { State } from "../../state";

let defaultitems:any = [1,2,3];




const Pagination = () => {
  return (
    <PaginationWrapper>
      <PaginationEl.Item>{defaultitems.length}</PaginationEl.Item>
    </PaginationWrapper>
  );
};

export default Pagination;
