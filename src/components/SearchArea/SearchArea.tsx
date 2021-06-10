import React, { useState } from "react";
import Input from "../FormFields/Input";
import { SearchWrapper } from "./SearchArea.styles";
import { MyButton } from "../HeaderBar/HeaderBar.styles";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import { SearchResponseData } from "../../API/API";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";

const SearchArea = () => {
  const dispatch = useDispatch();
  // !selector gets access to state
  
  const totalCount = useSelector((state: State) => state.fetchRepoReducer.items[1]);
  const results = useSelector((state: State) => state.fetchRepoReducer.items[0]);
  const loadingState = useSelector((state: State) => state.fetchRepoReducer.loading);
  console.log(results);

  const { fetchRepos } = bindActionCreators(actionCreators, dispatch);

  const fetch = () => {
    if(loadingState  === true){
      return <h1>Loading!!</h1>
    } else{
    return  results.map((result: any) => {
        return (
          <div key={result.id}>
            <h3 >RepoOwner: {result.full_name}</h3>
            <p>Stars 🌟:  {result.stargazers_count}</p>
          </div>
        );
      })
    }
  }

  return (
    <SearchWrapper>
      <Input />
      <MyButton onClick={() => fetchRepos()}>Console Logs the repo</MyButton>
        {fetch()}
      <MyButton>Search Results: {totalCount}</MyButton>
    </SearchWrapper>
  );
};

export default SearchArea;
