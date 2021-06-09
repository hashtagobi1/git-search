import React, { useState } from "react";
import Input from "../FormFields/Input";
import { SearchWrapper } from "./SearchArea.styles";
import { MyButton } from "../HeaderBar/HeaderBar.styles";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";

const SearchArea = () => {
  const dispatch = useDispatch();
  const searches = useSelector((state: State) => state);
  console.log(searches)

  const { fetchRepos } = bindActionCreators(actionCreators, dispatch);

  return (
    <SearchWrapper>
      <Input />
      <MyButton onClick={() => fetchRepos()}>Console Logs the repo</MyButton>
      <div>
        {JSON.stringify(searches, null, 100)}
        <p></p>
      </div>
    </SearchWrapper>
  );
};

export default SearchArea;
