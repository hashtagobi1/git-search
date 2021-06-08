import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { MyButton } from "../HeaderBar/HeaderBar.styles";

const Logout = () => {
  const { logout } = useAuth0();

  return <MyButton onClick={() => logout()}>Log out</MyButton>;
};

export default Logout;

/*

const Logout = () => {

  return (<
};

export default Logout;



*/
