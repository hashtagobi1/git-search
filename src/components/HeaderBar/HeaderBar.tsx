import LoggedComp from "../Buttons/LoggedComp";

// Styles
import { HeaderWrapper, HeadingOne, HeadingThree } from "./HeaderBar.styles";

// Props
type HeaderBarProps = {
  requestsRemaining: number;
  rateLimitTotal: number;
};

// ! we need to display new
// !limits based on akant

const HeaderBar = ({ requestsRemaining, rateLimitTotal }: HeaderBarProps) => {
  return (
    <HeaderWrapper>
      <HeadingThree>
        API Requests Remaining: {requestsRemaining}/{rateLimitTotal}
      </HeadingThree>
      <HeadingOne>Repo Search </HeadingOne>
      <LoggedComp />
    </HeaderWrapper>
  );
};

export default HeaderBar;
