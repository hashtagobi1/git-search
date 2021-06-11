import React from "react";
import {
  PaginationEl,
  PaginationWrapper,
  pagSection,
} from "../Pagination/Pagination.styles";
// State Management
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";

// utils
import _ from "lodash";

interface PaginationProps {
  totalCount: number;
  totalResults: number;
  resultsArray: any;
}

// ! Total Pages STATE =  search results / [psts per page (passed in from fetch repos)

let defaultitems: any = [1, 2, 3];

const Pagination = ({
  totalCount,
  totalResults,
  resultsArray,
}: PaginationProps) => {
  const dispatch = useDispatch();
  const { fetchRepos } = bindActionCreators(actionCreators, dispatch);

  const pageNumber = useSelector(
    (state: State) => state.fetchRepoReducer.pageNumber
  );
  const perPage = useSelector((state: State) => state.fetchRepoReducer.perPage);
  const totalPages = useSelector(
    (state: State) => state.fetchRepoReducer.totalPages
  );
  const text = useSelector((state: State) => state.inputReducer.input);

  const space = <br></br>;
  const pageClick = () => {};
  return (
    <PaginationWrapper>
      {space}{" "}
      {/*
      <p>PerPage = {totalResults}</p>
      {space}
      <p>total Pages = {totalPages.length}</p>
      {space} */}
      {/* <PaginationEl.First /> */}
      {/* <PaginationEl.Prev /> */}
      {/* ! asddasd */}
      {totalPages.map((page: any, i: any) => {
        if (i === 0) {
          return;
        } else if (totalCount > 0 || totalCount <= 1000) {
          return (
            <PaginationEl.Item
              onClick={() => {
                console.log("this is page: " + i);
                fetchRepos(text, i, perPage);
              }}
              key={i}
              active={pageNumber === i}
              activeLabel=""
            >
              {i}
            </PaginationEl.Item>
          );
        } else if (totalCount > 1000) {
          return;
        }
      })}
      {/* Last Item */}
      <PaginationEl.Item
        onClick={() => {
          console.log(`this is page:  ${totalPages.length}`);
          fetchRepos(text, totalPages.length, perPage);
        }}
      >
        Last Item: {totalPages.length}
      </PaginationEl.Item>
    </PaginationWrapper>
  );
};

export default Pagination;
