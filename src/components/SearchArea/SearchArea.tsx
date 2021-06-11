import React, { useEffect } from "react";
import Input from "../FormFields/Input";
import { SearchWrapper, Paragraph } from "./SearchArea.styles";

// State Management
import { useSelector } from "react-redux";
import { State } from "../../state";
import ResultCardComponent from "../Result/ResultCardComponent";
import Pagination from "../Pagination/Pagination"

const SearchArea = () => {
  const totalCount = useSelector(
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

  const input = useSelector((state: State) => state.inputReducer.input);
  console.log(results);

  const fetch = () => {
    if (loadingState === true) {
      return <h1>Loading! Framer Motion</h1>;
    } else if (errorState) {
      return (
        <div>
          <Paragraph>{errorMessage}</Paragraph>
          <h1>Display search limit here</h1>
        </div>
      );
    } else {
      return <ResultCardComponent />;
    }
  };

  return (
    <SearchWrapper>
      {results.length > 0 && <Pagination />}

      <Input />
      {input && (
        <Paragraph>Showing {totalCount} available repository results</Paragraph>
      )}
      {fetch()}
      {/* <Pagination /> */}

    </SearchWrapper>
  );
};

export default SearchArea;
