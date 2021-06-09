import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";


// State Management
// import {createStore} from "redux"
import { Provider } from "react-redux";
import { store } from "./state/index";

// Styles
import { GlobalStyle } from "./App.styles";
import "bootstrap/dist/css/bootstrap.min.css";

// Accessing Auth0 Information

// let domain: string;
// let clientId: string = "clientId";
// if (
//   process.env.REACT_APP_AUTH0_DOMAIN &&
//   process.env.REACT_APP_AUTH0_CLIENT_ID
// ) {
//   domain = process.env.REACT_APP_AUTH0_DOMAIN;
//   clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
// } else {
//   // throw new Error();
//   console.log("asdasd");
// }

// * it thinks the variable is undefined which it isn't....
// ! figure out why
// ! or just pass in the url lmao

const domain: string = process.env.REACT_APP_AUTH0_DOMAIN!;
const clientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID!;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
