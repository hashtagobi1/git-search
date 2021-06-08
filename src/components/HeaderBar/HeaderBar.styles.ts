import styled from "styled-components";
import { ButtonStyles } from "../Buttons/Button.styles";

export const HeaderWrapper = styled.div`
  background: #d4fcff;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MyButton = styled(ButtonStyles)`
  :active {
    transform: scale(1.1);
  }
`;

export const HeadingOne = styled.h1`
  margin: 10px 10px;
`;
export const HeadingThree = styled.p`
  margin: 10px 10px;
`;
