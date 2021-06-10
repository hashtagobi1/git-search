import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated && user && (
        <>
          <img src={user.picture} alt={user.name} />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          {JSON.stringify(user, null, 2)}
        </>
      )}
    </div>
  );
};

export default Profile;
