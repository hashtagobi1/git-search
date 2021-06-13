import styled from "styled-components";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ButtonStyles } from "../Buttons/Button.styles";
import { BsSearch } from "react-icons/bs";

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
  justify-content: center;
  align-items: center;
  /* text-align:start; */

`;
export const SubmitButton = styled(ButtonStyles)`
  background: #66c6cc;
  display: flex;
`;

export const Inputs = styled.input`
  border-radius: 5px;
  width: 50vw;
  height: 3vh;
  border: solid 1px #ced4da;
`;

export const MagGlass = styled(BsSearch)`
  /* height: 1vh; */
  /* width: 1vw; */
  /* margin:10px 10px 10px 10px; */
  /* position: relative; */
  /* padding-right: -100px; */
  height:2.1rem;
  width:1.1rem;
  border-radius:10px;
  background:#ced4da;
  cursor:pointer;

  path{
    pointer-events: auto;
}

`;
