import React from "react";
import {
  Gap,
  PaginationEl,
  PaginationWrapper,
  PaginContainer,
} from "../Pagination/Pagination.styles";
import { DropdownEl, ButtonStyles } from "../Buttons/Button.styles";
// State Management
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";

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
  const { fetchRepos, showModal } = bindActionCreators(
    actionCreators,
    dispatch
  );

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
  const modalState: boolean = useSelector(
    (state: State) => state.showModalReducer.showModal
  );
  const text: string = useSelector((state: State) => state.inputReducer.input);

  const checkPage = () => {
    showModal(false);

    if (pageNumber >= extraPages) {
    }

    if (
      pageNumber >= totalPages.length ||
      (totalCount === 0 && totalResults === 0)
    ) {
      return fetchRepos(text, 1, perPage);
    }
    fetchRepos(text, pageNumber + 1, perPage);
  };

  const prevPage = () => {
    showModal(false);

    if (pageNumber <= 1) {
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
              showModal(false);

              fetchRepos(text, 1, perPage);
            }}
          />
          <PaginationEl.Prev onClick={prevPage} />
          {/* Filling in the pages */}

          <Gap>&nbsp;</Gap>
          {totalPages.map((page: undefined, arrayIndex: number) => {
            if (arrayIndex === 0) {
              return;
            } else if (totalCount > 0 && arrayIndex <= extraPages) {
              return (
                <PaginationEl.Item
                  onClick={() => {
                    showModal(false);

                    fetchRepos(text, arrayIndex, perPage);
                  }}
                  key={arrayIndex}
                  disabled={pageNumber === arrayIndex}
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
            // <PaginationEl.Ellipsis activeLabel="stuff" />

            <DropdownEl>
              <DropdownEl.Toggle as={ButtonStyles}>...More</DropdownEl.Toggle>
              <DropdownEl.Menu>
                {totalPages.map((page: undefined, arrayIndex: number) => {
                  if (arrayIndex === 0) {
                    return;
                  } else if (totalCount > 0 && arrayIndex > extraPages) {
                    return (
                      <DropdownEl.Item
                        as={PaginationEl.Item}
                        onClick={() => {
                          showModal(false);

                          fetchRepos(text, arrayIndex, perPage);
                        }}
                        key={arrayIndex}
                        active={pageNumber === arrayIndex}
                        disabled={pageNumber === arrayIndex}
                      >
                        {arrayIndex}
                      </DropdownEl.Item>
                    );
                  }
                })}
              </DropdownEl.Menu>
            </DropdownEl>
          )}

          {/* Last Item */}
          <PaginationEl.Item
            active={pageNumber === totalPages.length}
            activeLabel=""
            disabled={pageNumber === totalPages.length}
            onClick={() => {
              showModal(false);

              fetchRepos(text, totalPages.length, perPage);
            }}
          >
            {totalPages.length}
          </PaginationEl.Item>
          <Gap>&nbsp;</Gap>

          <PaginationEl.Next activeLabel="stuff" onClick={checkPage} />
          <PaginationEl.Last
            activeLabel=""
            onClick={() => {
              showModal(false);

              fetchRepos(text, totalPages.length, perPage);
            }}
          />
        </PaginationEl>
      </PaginContainer>
    </PaginationWrapper>
  );
};

export default Pagination;
