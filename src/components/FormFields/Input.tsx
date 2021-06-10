import React, { useEffect } from "react";
import { SearchBoxForm, SubmitButton } from "./Input.styles";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";

const Input = () => {




  const dispatch = useDispatch();
  const { setInput, fetchRepos } = bindActionCreators(actionCreators, dispatch);
  const text = useSelector((state: State) => state.inputReducer.input);
  const results = useSelector(
    (state: State) => state.fetchRepoReducer.items[0]
  );


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // alert(text);
    fetchRepos(text);

    // fetchRepos(text)
  };
  return (
    <SearchBoxForm>
      <SearchBoxForm.Control
        placeholder="search for a github repository"
        onChange={handleChange}
      />
      <SubmitButton type="submit" onClick={handleSubmit}>
        Search!
      </SubmitButton>
    </SearchBoxForm>
  );
};

export default Input;
