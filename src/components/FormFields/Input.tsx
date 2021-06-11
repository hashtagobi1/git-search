import React, { useEffect } from "react";
import {
  SearchBoxForm,
  SubmitButton,
  InputGroupBox,
  DropdownEl,
  Inputs,
  SearchBoxWrapper,
} from "./Input.styles";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import { ButtonStyles } from "../Buttons/Button.styles";

const Input = () => {
  const dispatch = useDispatch();
  const { setInput, fetchRepos } = bindActionCreators(actionCreators, dispatch);
  const text = useSelector((state: State) => state.inputReducer.input);
  const pageNumber = useSelector(
    (state: State) => state.fetchRepoReducer.pageNumber
  );
  const perPage = useSelector((state: State) => state.fetchRepoReducer.perPage);
  const resultsPerPage = useSelector(
    (state: State) => state.fetchRepoReducer.resultsPerPage
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetchRepos(text, pageNumber, perPage);
  };
  return (
    <SearchBoxWrapper>
      <SearchBoxForm>
        <SearchBoxForm.Group>
          <Inputs
            placeholder="   search for a github repository"
            onChange={handleChange}
          />
        </SearchBoxForm.Group>
        <InputGroupBox>
          <DropdownEl>
            {/* <SearchBoxForm.Label >Results Per Page:</SearchBoxForm.Label> */}
            <DropdownEl.Toggle as={ButtonStyles}>
              Results per Page:{resultsPerPage}
            </DropdownEl.Toggle>
            <DropdownEl.Menu>
              {resultsPerPage.map((perPageAmount: number, i: number) => {
                return (
                  <DropdownEl.Item
                    key={perPageAmount}
                    onClick={() => {
                      fetchRepos(text, pageNumber, perPageAmount);
                      // console.log(fetchRepos(text, 1, 3);)

                      // console.log(i);
                    }}
                  >
                    {[perPageAmount]}
                  </DropdownEl.Item>
                );
              })}
            </DropdownEl.Menu>
          </DropdownEl>
        </InputGroupBox>

        <SubmitButton type="submit" onClick={handleSubmit}>
          Search!
        </SubmitButton>
      </SearchBoxForm>
    </SearchBoxWrapper>
  );
};

export default Input;
