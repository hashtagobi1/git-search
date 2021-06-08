import React from "react";
import axios from "axios";

// Styles
import {
  HeaderWrapper,
  HeadingOne,
  HeadingThree,
  MyButton,
} from "./HeaderBar.styles";

// Props
type HeaderBarProps = {
  requests: number;
};

const HeaderBar = ({ requests }: HeaderBarProps) => {
  return (
    <HeaderWrapper>
      <HeadingThree>Requests: {requests}/60</HeadingThree>
      <HeadingOne>Repo Search </HeadingOne>
      <MyButton>Sign In</MyButton>
    </HeaderWrapper>
  );
};

export default HeaderBar;
