import styled from "styled-components";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ButtonStyles } from "../Buttons/Button.styles";
import { BsSearch } from "react-icons/bs";

export const SearchBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
`;

export const SearchBoxForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
export const InputGroupBox = styled(InputGroup)`
  margin: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 2.1rem;
  width: 1.1rem;
  border-radius: 10px;
  background: #ced4da;
  cursor: pointer;
  path {
    pointer-events: auto;
  }
`;
