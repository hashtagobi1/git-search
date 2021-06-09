import { useState } from "react";
import LoggedComp from "../Buttons/LoggedComp";
// Styles
// import Login from "../Buttons/LoggedComp";
// import Logout from "../Buttons/Logout";
import Logout from "../Buttons/LoggedComp";
import { HeaderWrapper, HeadingOne, HeadingThree } from "./HeaderBar.styles";

// Props
type HeaderBarProps = {
  requestsRemaining: number;
  rateLimitTotal: number;
  // isLogged: boolean;
  // callback: () => void;
};

// ! we need to display new
// !limits based on akant

const HeaderBar = ({ requestsRemaining, rateLimitTotal }: HeaderBarProps) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  // Functions:
  const toggleLogged = () => {
    setIsLogged(!isLogged);
  };

  return (
    <HeaderWrapper>
      <HeadingThree>
        API Requests Remaining: {requestsRemaining}/{rateLimitTotal}
      </HeadingThree>
      <HeadingOne>Repo Search </HeadingOne>
      <LoggedComp isLogged={isLogged} callback={toggleLogged} />

      {/* { isLogged ?
     <Login isLogged={isLogged} callback={toggleLogged} />
     :
     <Logout isLogged={isLogged} callback={toggleLogged} />

     
     } */}
      {/* {!isLogged ? <Login callback={callback}/> : <Logout />} */}

      {/* {(isLogged && <Logout   onClick={callback} />) || (!isLogged && <Login />)} */}
    </HeaderWrapper>
  );
};

export default HeaderBar;
