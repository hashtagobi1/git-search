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

  const checkPage = () => {
    console.log("this is the page number" + pageNumber);
    console.log("this is the totalPages" + totalPages.length);
    if (
      pageNumber >= totalPages.length ||
      (totalCount === 0 && totalResults === 0)
    ) {
      console.log("we made it here");
      console.log("Total Repos = " + totalCount);
      console.log("Total Results showing = " + totalResults);

      return fetchRepos(text, 1, perPage);
    }
    fetchRepos(text, pageNumber + 1, perPage);
  };

  return (
    <PaginationWrapper>
      <PaginationEl>
        <PaginationEl.First
          activeLabel=""
          onClick={() => {
            fetchRepos(text, 1, perPage);
          }}
        />
        <PaginationEl.Prev
          onClick={() => {
            fetchRepos(text, pageNumber - 1, perPage);
          }}
        />

        {/* Filling in the pages */}
        {totalPages.map((page: any, arrayIndex: any) => {
          if (arrayIndex === 0) {
            return;
          } else if (totalCount > 0) {
            return (
              <PaginationEl.Item
                onClick={() => {
                  fetchRepos(text, arrayIndex, perPage);
                }}
                key={arrayIndex}
                active={pageNumber === arrayIndex}
                activeLabel=""
              >
                {arrayIndex}
              </PaginationEl.Item>
            );
          } else if (arrayIndex > totalCount) {
            return;
          }
        })}

        {/* Last Item */}
        <PaginationEl.Item
          active={pageNumber === totalPages.length}
          activeLabel=""
          onClick={() => {
            fetchRepos(text, totalPages.length, perPage);
          }}
        >
          {totalPages.length}
        </PaginationEl.Item>

        <PaginationEl.Next onClick={checkPage} />
        <PaginationEl.Last
          activeLabel=""
          onClick={() => {
            fetchRepos(text, totalPages.length, perPage);
          }}
        />
      </PaginationEl>
    </PaginationWrapper>
  );
};

export default Pagination;
