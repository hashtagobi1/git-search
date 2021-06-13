import React, { useState, useEffect } from "react";
import { render } from "react-dom";

// Components
import HeaderBar from "./components/HeaderBar/HeaderBar";
import SearchArea from "./components/SearchArea/SearchArea";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";



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
import { MyButton } from "./components/HeaderBar/HeaderBar.styles";

function App() {



  const results = useSelector(
    (state: State) => state.fetchRepoReducer.items[0]
  );

  // ! to show loading states
  return (
    <div>
      <HeaderBar />
      <SearchArea />
      {results.length === 0 && <h2>floating search!</h2>}
      {/* <Profile /> */}

    </div>
  );
}

export default App;
