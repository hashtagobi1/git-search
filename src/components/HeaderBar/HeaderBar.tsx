// Styles
import Login from "../Buttons/Login";
import Logout from "../Buttons/Logout";
import { HeaderWrapper, HeadingOne, HeadingThree } from "./HeaderBar.styles";

// Props
type HeaderBarProps = {
  requestsRemaining: number;
  rateLimitTotal: number;
  isLogged: boolean;
  callback: () => void;
};

// ! we need to display new
// !limits based on akant

const HeaderBar = ({
  requestsRemaining,
  isLogged,
  callback,
  rateLimitTotal,
}: HeaderBarProps) => {
  return (
    <HeaderWrapper>
      <HeadingThree>
        API Requests Remaining: {requestsRemaining}/{rateLimitTotal}
      </HeadingThree>
      <HeadingOne>Repo Search </HeadingOne>
      {!isLogged ? <Login /> : <Logout />}

      {/* {(isLogged && <Logout   onClick={callback} />) || (!isLogged && <Login />)} */}
    </HeaderWrapper>
  );
};

export default HeaderBar;
