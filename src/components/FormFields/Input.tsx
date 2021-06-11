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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    // fetchRepos(text, 1, 3);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // alert(text);
    fetchRepos(text, 1, 3);
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
            <DropdownEl.Toggle as={ButtonStyles}>
              Results per Page:{" "}
            </DropdownEl.Toggle>
            <DropdownEl.Menu>
              <DropdownEl.Item>10</DropdownEl.Item>
              <DropdownEl.Item>25</DropdownEl.Item>
              <DropdownEl.Item>50</DropdownEl.Item>
              <DropdownEl.Item>100</DropdownEl.Item>
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

{
  /* <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>4</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group> */
}
