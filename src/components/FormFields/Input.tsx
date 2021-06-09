import React, { useState, useRef } from "react";
import { ButtonStyles } from "../Buttons/Button.styles";
import { SearchBoxForm, SubmitButton } from "./Input.styles";

const Input = () => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<any>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setInput(inputRef.current.value)
    setInput(e.target.value);
    // console.log(input);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    alert(input);
  };

  return (
    <SearchBoxForm>
      {/* <SearchBoxForm.Label>sta!</SearchBoxForm.Label> */}
      <SearchBoxForm.Control
        ref={inputRef}
        placeholder="search for a github repository"
        onChange={handleChange}
      />
      {/* <input onChange={handleChange}/>  */}
      <SubmitButton type="submit" onClick={handleSubmit}>
        Search!
      </SubmitButton>
    </SearchBoxForm>
  );
};

export default Input;
