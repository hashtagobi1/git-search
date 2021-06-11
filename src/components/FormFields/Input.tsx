import React, { useEffect } from "react";
import { SearchBoxForm, SubmitButton, selectorInput } from "./Input.styles";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";

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
    <SearchBoxForm>
      <SearchBoxForm.Group>
        <SearchBoxForm.Control
          placeholder="search for a github repository"
          onChange={handleChange}
        />
      </SearchBoxForm.Group>
      <SearchBoxForm.Group>
        <SearchBoxForm.Label>Show:</SearchBoxForm.Label>

        <SearchBoxForm.Control size="sm" as="select">
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </SearchBoxForm.Control>
      </SearchBoxForm.Group>

      <SubmitButton type="submit" onClick={handleSubmit}>
        Search!
      </SubmitButton>
    </SearchBoxForm>
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
