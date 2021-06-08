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

function App() {
  // States:
  const [requestsRemaining, setRequestsRemaining] = useState<number>(0);
  const [rateLimitTotal, setRateLimitTotal] = useState<number>(0);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    // displayRequests();
    // searchRepo()
  }, []);

  const displayRequests = async () => {
    setRequestsRemaining(await getRateLimitRemaining());
    setRateLimitTotal(await getRateLimitTotal());
  };

  const toggleLogged = () => {
    setIsLogged(!isLogged);
  };
  return (
    <div>
      <HeaderBar
        callback={toggleLogged}
        isLogged={isLogged}
        requestsRemaining={requestsRemaining}
        rateLimitTotal={rateLimitTotal}
      />
      <SearchArea />
      <Profile />
    </div>
  );
}

export default App;
