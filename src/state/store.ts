import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers/index";
import thunk from "redux-thunk";
//! @ts-ignore
import { composeWithDevTools } from "redux-devtools-extension";



export const store = createStore(
  allReducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
