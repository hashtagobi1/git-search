import React, { useEffect } from "react";
import Input from "../FormFields/Input";
import {
  SearchWrapper,
  DarkParagraph,
  LightParagraph,
} from "./SearchArea.styles";

// State Management
import { useSelector } from "react-redux";
import { State } from "../../state";
import ResultCardComponent from "../Result/ResultCardComponent";
import Pagination from "../Pagination/Pagination";

const SearchArea = () => {
  const totalCount: number = useSelector(
    (state: State) => state.fetchRepoReducer.items[1]
  );
  const results = useSelector(
    (state: State) => state.fetchRepoReducer.items[0]
  );
  const loadingState = useSelector(
    (state: State) => state.fetchRepoReducer.loading
  );
  const errorState = useSelector(
    (state: State) => state.fetchRepoReducer.errorState
  );
  const errorMessage = useSelector(
    (state: State) => state.fetchRepoReducer.errorMessage
  );
  const responseMessage = useSelector(
    (state: State) => state.fetchRepoReducer.responseMessage
  );
  const pageNumber = useSelector(
    (state: State) => state.fetchRepoReducer.pageNumber
  );
  const perPage = useSelector((state: State) => state.fetchRepoReducer.perPage);
  const totalPages = useSelector(
    (state: State) => state.fetchRepoReducer.totalPages
  );

  const input = useSelector((state: State) => state.inputReducer.input);
  console.log(results);

  const displayResults = (): string => {
    let resultsLeft = 0;
    let resultsRight = 0;
    let hold = pageNumber - 1;
    resultsLeft = hold * perPage;
    if (hold === 0) {
      resultsLeft = 1;
    }
    resultsRight = perPage * pageNumber;

    return `Showing results: ${resultsLeft} - ${resultsRight};`;
  };

  const fetch = () => {
    if (loadingState === true) {
      return <h1>Loading! Framer Motion</h1>;
    } else if (errorState) {
      return (
        <div>
          <DarkParagraph>{errorMessage}</DarkParagraph>
          <h1>Display framer motion error here</h1>
        </div>
      );
    } else {
      return <ResultCardComponent />;
    }
  };
  // ! firstNumber = pageNumber*perPage
  // ! secondNumber =

  return (
    <SearchWrapper>
      <Input />
      <p>Total Repositories = {totalCount}</p>
      {input && results && (
        <div>
          <DarkParagraph>
            Showing {totalCount} available repository results
          </DarkParagraph>

          <LightParagraph> {displayResults()}</LightParagraph>
        </div>
      )}
      {responseMessage && (
        <>
          <DarkParagraph>{responseMessage}</DarkParagraph>
          <LightParagraph>"{input}"</LightParagraph>
        </>
      )}
      {results.length > 0 && (
        <Pagination
          totalCount={totalCount}
          totalResults={results.length}
          resultsArray={results}
        />
      )}
      {fetch()}
    </SearchWrapper>
  );
};

export default SearchArea;
