import React from "react";

// Styles
import {
  HeaderWrapper,
  HeadingOne,
  HeadingThree,
  MyButton,
} from "./HeaderBar.styles";

const HeaderBar = () => {
  return (
    <HeaderWrapper>
      <HeadingThree>Requests: $/60</HeadingThree>
      <HeadingOne>Repo Search </HeadingOne>
      <MyButton>Sign In</MyButton>
    </HeaderWrapper>
  );
};

export default HeaderBar;
