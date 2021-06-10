import React, { useState, useEffect } from "react";

// Components
import HeaderBar from "./components/HeaderBar/HeaderBar";
import SearchArea from "./components/SearchArea/SearchArea";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";

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
import { MyButton } from "./components/HeaderBar/HeaderBar.styles";

function App() {
  // State

  // Auth0 Methods
  // const { isLoading } = useAuth0();
  // if (isLoading) return <div>mans lllllll</div>;

  // ! to show loading states
  return (
    <div>
      <HeaderBar />
      <SearchArea />
      {/* <Profile /> */}
    </div>
  );
}

export default App;
