import styled from "styled-components";
import { Form } from "react-bootstrap";
import { ButtonStyles } from "../Buttons/Button.styles";

export const SearchBoxForm = styled(Form)`
  /* background: #eee; */
  margin: 60px 30px 30px 30px;
  display: flex;
  justify-content: center;
  align-items:center;
  /* border: 1px solid rgba(0, 0, 0, 0.3); */
  border-radius: 10px;


`;
export const selectorInput = styled(Form)`
display:flex;
`
export const SubmitButton = styled(ButtonStyles)`
  background: #66c6cc;
`;
