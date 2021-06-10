import LoggedComp from "../Buttons/LoggedComp";

// Styles
import { HeaderWrapper, HeadingOne, HeadingThree } from "./HeaderBar.styles";

// State Management
import { useSelector } from "react-redux";
import { State } from "../../state";

// ! we need to display new
// !limits based on akant

const HeaderBar = () => {
  const rateLimit = useSelector(
    (state: State) => state.fetchRepoReducer.rateLimit
  );
  const rateLimitRemaining = useSelector(
    (state: State) => state.fetchRepoReducer.rateLimitRemaining
  );
  return (
    <HeaderWrapper>
      <HeadingThree>
        API Requests Remaining: {rateLimitRemaining}/{rateLimit}
      </HeadingThree>
      <HeadingOne>Repo Search </HeadingOne>
      <LoggedComp />
    </HeaderWrapper>
  );
};

export default HeaderBar;
