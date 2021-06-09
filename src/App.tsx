import React, { useState, useEffect } from "react";
// Components
import HeaderBar from "./components/HeaderBar/HeaderBar";
import SearchArea from "./components/SearchArea/SearchArea";

// Styles

// API Requests
import {
  getRateLimitRemaining,
  searchRepo,
  getRateLimitTotal,
} from "./API/API";
import Profile from "./components/Profile/Profile";

// Props

// Authentication
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  // States:
  const [requestsRemaining, setRequestsRemaining] = useState<number>(0);
  const [rateLimitTotal, setRateLimitTotal] = useState<number>(0);

  useEffect(() => {
    displayRequests();
    searchRepo("simple dashboard 100 coin")
  }, [
    requestsRemaining,
    setRequestsRemaining,
    rateLimitTotal,
    setRateLimitTotal,
  ]);

  const displayRequests = async () => {
    setRequestsRemaining(await getRateLimitRemaining());
    setRateLimitTotal(await getRateLimitTotal());
  };

  // Auth0 Methods
  // const { isLoading } = useAuth0();
  // if (isLoading) return <div>mans lllllll</div>;

  // ! to show loading states
  return (
    <div>
      <HeaderBar
        // callback={toggleLogged}
        // isLogged={isLogged}
        requestsRemaining={requestsRemaining}
        rateLimitTotal={rateLimitTotal}
      />
      <SearchArea  />
      {/* <Profile /> */}
    </div>
  );
}

export default App;
