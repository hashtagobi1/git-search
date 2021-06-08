import { useAuth0 } from "@auth0/auth0-react";

import { MyButton } from "../HeaderBar/HeaderBar.styles";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <MyButton onClick={() => loginWithRedirect()}>Sign In</MyButton>;
};

export default Login;
