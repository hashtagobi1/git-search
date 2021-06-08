import React, { useState, useEffect } from "react";
// Components
import HeaderBar from "./components/HeaderBar/HeaderBar";
import SearchArea from "./components/SearchArea/SearchArea";

// Styles

// API
import { getCurrentRequests } from "./API/API";

// Props

function App() {
  // States:
  const [requests, setRequests] = useState<number>(0);

  useEffect(() => {
    displayRequests();
  });

  const displayRequests = async () => {
    setRequests(await getCurrentRequests());
  };

  return (
    <div>
      <HeaderBar  requests={requests} />
      <SearchArea />
    </div>
  );
}

export default App;
