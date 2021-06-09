import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers/index";
import thunk from "redux-thunk";
//! @ts-ignore
import { composeWithDevTools } from "redux-devtools-extension";

// const logger = (store: any) => (next: any) => (action: any) => {
//   console.log("2nd middleware");
//   console.log(store)
//   return next(action);
// };

export const store = createStore(
  allReducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
