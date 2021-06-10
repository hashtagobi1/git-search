import React, { useState } from "react";
import Input from "../FormFields/Input";
import { SearchWrapper } from "./SearchArea.styles";
import { MyButton } from "../HeaderBar/HeaderBar.styles";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import { SearchResponseData } from "../../API/API";

const SearchArea = () => {
  const dispatch = useDispatch();
  // !selector gets access to state
  const totalCount = useSelector((state: State) => state.fetchRepoReducer[1]);
  const results = useSelector((state: State) => state.fetchRepoReducer[0]);
  console.log(results);

  const { fetchRepos } = bindActionCreators(actionCreators, dispatch);

  return (
    <SearchWrapper>
      <Input />
      <MyButton onClick={() => fetchRepos()}>Console Logs the repo</MyButton>
      <div>
        {results.map((result: any) => {
          return (
            <div key={result.id}>
              <h3 >RepoOwner: {result.full_name}</h3>
              <p>Stars 🌟:  {result.stargazers_count}</p>
            </div>
          );
        })}

        {/* {JSON.stringify(searches, null, 100)} */}
        <p></p>
      </div>
      <MyButton>Search Results: {totalCount}</MyButton>
    </SearchWrapper>
  );
};

export default SearchArea;
