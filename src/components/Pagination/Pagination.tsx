import React from "react";
import {
  PaginationEl,
  PaginationWrapper,
  PaginContainer,
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

const Pagination = ({
  totalCount,
  totalResults,
  resultsArray,
}: PaginationProps) => {
  const dispatch = useDispatch();
  const { fetchRepos } = bindActionCreators(actionCreators, dispatch);

  const pageNumber: number = useSelector(
    (state: State) => state.fetchRepoReducer.pageNumber
  );
  const perPage: number = useSelector(
    (state: State) => state.fetchRepoReducer.perPage
  );
  const totalPages: undefined[] = useSelector(
    (state: State) => state.fetchRepoReducer.totalPages
  );
  const extraPages: number = useSelector(
    (state: State) => state.fetchRepoReducer.pagesShownAmount[1]
  );
  const text: string = useSelector((state: State) => state.inputReducer.input);

  const checkPage = () => {
    if (pageNumber >= extraPages) {
      console.log(extraPages);
    }

    console.log("this is the page number" + pageNumber);
    console.log("this is the totalPages" + totalPages.length);
    if (
      pageNumber >= totalPages.length ||
      (totalCount === 0 && totalResults === 0)
    ) {
      console.log("Total Repos = " + totalCount);
      console.log("Total Results showing = " + totalResults);

      return fetchRepos(text, 1, perPage);
    }
    fetchRepos(text, pageNumber + 1, perPage);
  };

  const prevPage = () => {
    if (pageNumber <= 1) {
      console.log("we here");
      return fetchRepos(text, totalPages.length, perPage);
    }

    return fetchRepos(text, pageNumber - 1, perPage);
  };

  return (
    <PaginationWrapper>
      <PaginContainer>
        <PaginationEl>
          <PaginationEl.First
            activeLabel=""
            onClick={() => {
              fetchRepos(text, 1, perPage);
            }}
          />
          <PaginationEl.Prev onClick={prevPage} />
          {/* Filling in the pages */}

          {totalPages.map((page: undefined, arrayIndex: number) => {
            if (arrayIndex === 0) {
              return;
            } else if (totalCount > 0 && arrayIndex <= extraPages) {
              console.log(extraPages);
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
            } else if (arrayIndex > 20) {
              return;
            }
          })}

          {totalPages.length > extraPages && (
            <PaginationEl.Ellipsis
              activeLabel="stuff"


              // * BEST SOLUTION. WE INITIALLY RENDER OUT 15 ELEMENTS. 
              // * ON CLICK WE PUSH EACH ELEMENT OUT
              // * STARTING AT PAGE NUMBER THEN ADD 15 TO EXTRA PAGES


              // ! or just wrap them round

              // ? WOULD BE FOR NEXT + PREVIOS BUTTONS
            />
          )}

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

          <PaginationEl.Next activeLabel="stuff" onClick={checkPage} />
          <PaginationEl.Last
            activeLabel=""
            onClick={() => {
              fetchRepos(text, totalPages.length, perPage);
            }}
          />
        </PaginationEl>
      </PaginContainer>
    </PaginationWrapper>
  );
};

export default Pagination;
