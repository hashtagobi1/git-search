import React from "react";
import { ButtonStyles } from "../Buttons/Button.styles";
import { SearchBoxForm, SubmitButton } from "./Input.styles";

const Input = () => {
  return (
    <SearchBoxForm>
      {/* <SearchBoxForm.Label>sta!</SearchBoxForm.Label> */}
      <SearchBoxForm.Control placeholder="search for a github repository" />
      <SubmitButton type="submit">Search!</SubmitButton>
    </SearchBoxForm>
  );
};

export default Input;
