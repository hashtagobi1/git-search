import { Button } from "react-bootstrap";
import styled from "styled-components";

export const ButtonStyles = styled(Button)`
  text-align: center;
  outline: none !important;
  background: #66c6cc;
  color: black;
  margin: 10px 10px;

  :hover {
    background: #014e53;

    outline: none !important;
    box-shadow: none;
  }
  :active {
    background: #014e53;

    outline: none !important;
    box-shadow: none;
  }
  :active:focus {
    outline: none !important;
    box-shadow: none;
  }
  :focus {
    background: #014e53;

    outline: 0 !important;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
  }

  :visited {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
  }
`;
