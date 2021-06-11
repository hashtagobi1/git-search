import styled from "styled-components";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { ButtonStyles } from "../Buttons/Button.styles";

export const SearchBoxWrapper = styled.div`
  /* background: red; */
  /* display */
  display: flex;
  /* flex-direction: row; */
  justify-content: center;

  align-items: center;
  margin: 10px 10px;
`;

export const SearchBoxForm = styled(Form)`
  /* margin: 30px 30px 30px 30px; */
  display: flex;
  justify-content: center;
  align-items: center;

  /* align-items:center; */
  border-radius: 10px;
`;
export const InputGroupBox = styled(InputGroup)`
  /* display: flex; */
  margin: 10px 10px;
  /* display */
  display: flex;
  /* text-align:start; */


  justify-content: center;
`;
export const SubmitButton = styled(ButtonStyles)`
  background: #66c6cc;
  display: flex;
`;
export const DropdownEl = styled(Dropdown)`
  /* background: #66c6cc; */
  
  color:#66c6cc;
`;
export const Inputs = styled.input`
border-radius:5px;
width:50vw;
height:3vh;
border: solid 1px #CED4DA;
`
