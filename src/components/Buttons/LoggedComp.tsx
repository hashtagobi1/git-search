import { useAuth0 } from "@auth0/auth0-react";
import { MyButton } from "../HeaderBar/HeaderBar.styles";

const LoggedComp = () => {
  const {
    loginWithPopup,
    isAuthenticated,
    logout,
    isLoading,
    user,
    getIdTokenClaims,
  } = useAuth0();

  if (isLoading)
    return <MyButton background="background">Signing in...</MyButton>;

  return (
    <>
      {!isAuthenticated ? (
        <MyButton
          onClick={() => {
            loginWithPopup();
            // ! callback is needed to manage state
            // callback();
          }}
        >
          Sign In
        </MyButton>
      ) : (
        isAuthenticated && (
          // isLogged &&
          <>
            {user && (
              <>
                <p>Welcome {user.nickname}</p>
                <img alt="profile-pic" src={user.picture} height="50" />
              </>
            )}
            <MyButton
              onClick={() => {
                logout();
                // callback();
              }}
            >
              Log out
            </MyButton>
          </>
        )
      )}
    </>
  );
};

export default LoggedComp;
