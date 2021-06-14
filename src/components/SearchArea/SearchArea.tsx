import Input from "../FormFields/Input";
import {
  SearchWrapper,
  DarkParagraph,
  LightParagraph,
  ResultDetails,
  SpinnerLoad,
  SpinnerWrapper,
} from "./SearchArea.styles";

// State Management
import { useSelector } from "react-redux";
import { State } from "../../state";
// Components
import ResultCardComponent from "../Result/ResultCardComponent";
import Pagination from "../Pagination/Pagination";

const SearchArea = () => {
  // States
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

  const modalState: boolean = useSelector(
    (state: State) => state.showModalReducer.showModal
  );
  const input = useSelector((state: State) => state.inputReducer.input);

  const displayResults = (): string => {
    // Calculation to display the current amount of results on screen
    let resultsLeft = 0;
    let resultsRight = 0;
    let hold = pageNumber - 1;
    resultsLeft = hold * perPage;
    if (hold === 0) {
      resultsLeft = 1;
    }
    resultsRight = perPage * pageNumber;
    if (resultsRight > totalCount) {
      resultsRight = totalCount;
    }
    if (results.length === 1) {
      return `Showing results:  ${totalCount} of ${totalCount}`;
    }
    if (totalCount === 0) {
      return "";
    }
    return `Showing results: ${resultsLeft} - ${resultsRight}`;
  };
  const renderPagination = () => {
    return (
      results.length > 0 && (
        <Pagination
          totalCount={totalCount}
          totalResults={results.length}
          resultsArray={results}
        />
      )
    );
  };

  const fetch = () => {
    if (loadingState === true) {
      return (
        <SearchWrapper>
          <SpinnerWrapper>
            <h1>Loading...</h1>
            <SpinnerLoad
              variant="success"
              animation="border"
              role="status"
            ></SpinnerLoad>
          </SpinnerWrapper>
        </SearchWrapper>
      );
    } else if (errorState) {
      return (
        <div>
          <DarkParagraph>{errorMessage}</DarkParagraph>
          <SpinnerWrapper>
            <h1>hold on...</h1>
            <SpinnerLoad  animation="grow" role="status" variant="danger" />
          </SpinnerWrapper>
        </div>
      );
    } else {
      return <ResultCardComponent />;
    }
  };
  return (
    <SearchWrapper>
      <Input />
      {input && results && (
        <ResultDetails>
          <DarkParagraph>
            Showing {totalCount} available repository results
          </DarkParagraph>
          {!modalState && <LightParagraph> {displayResults()}</LightParagraph>}
        </ResultDetails>
      )}
      {responseMessage && (
        <>
          <DarkParagraph>{responseMessage}</DarkParagraph>
          <LightParagraph>"{input}"</LightParagraph>
          <SpinnerWrapper>
            <h1>search something else instead...</h1>
            <SpinnerLoad  animation="grow" role="status" variant="primary" />
          </SpinnerWrapper>
        </>
      )}
      {!modalState && renderPagination()}
      {fetch()}
      {!modalState && renderPagination()}
    </SearchWrapper>
  );
};

export default SearchArea;
