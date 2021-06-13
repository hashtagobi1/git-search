import React, { useEffect } from "react";
import {
  SearchBoxForm,
  SubmitButton,
  InputGroupBox,
  Inputs,
  SearchBoxWrapper,
  MagGlass,
} from "./Input.styles";
import { DropdownEl } from "../Buttons/Button.styles";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import { ButtonStyles } from "../Buttons/Button.styles";

const Input = () => {
  const dispatch = useDispatch();
  const { setInput, fetchRepos, showModal } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const text = useSelector((state: State) => state.inputReducer.input);
  const pageNumber = useSelector(
    (state: State) => state.fetchRepoReducer.pageNumber
  );
  const perPage = useSelector((state: State) => state.fetchRepoReducer.perPage);
  const resultsPerPage = useSelector(
    (state: State) => state.fetchRepoReducer.resultsPerPage
  );
  const modalState: boolean = useSelector(
    (state: State) => state.showModalReducer.showModal
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLButtonElement>) => {
    showModal(false)

    e.preventDefault();
    fetchRepos(text, pageNumber, perPage);
  };

  const searchClick = () => {
    showModal(false)

    fetchRepos(text, pageNumber, perPage);

    // console.log("hey");
  };
  const handleKeyDown = (e: any) => {
    showModal(false)
    if (e.code === "Enter") {
      fetchRepos(text, pageNumber, 10);
    }
    return;
  };
  return (
    <SearchBoxWrapper>
      <SearchBoxForm>
        <SearchBoxForm.Group>
          <InputGroupBox>
            <Inputs
              placeholder="   search for a github repository"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <MagGlass onClick={searchClick} />
          </InputGroupBox>
        </SearchBoxForm.Group>
        <InputGroupBox>
          <DropdownEl>
            {/* <SearchBoxForm.Label >Results Per Page:</SearchBoxForm.Label> */}
            <DropdownEl.Toggle as={ButtonStyles}>
              Results per Page: {perPage}
            </DropdownEl.Toggle>
            <DropdownEl.Menu>
              {resultsPerPage.map((perPageAmount: number, i: number) => {
                return (
                  <DropdownEl.Item
                    key={perPageAmount}
                    onClick={() => {
                      showModal(false);

                      fetchRepos(text, pageNumber, perPageAmount);
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
