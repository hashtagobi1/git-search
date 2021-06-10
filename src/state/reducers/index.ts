import { combineReducers } from "redux";
import fetchRepoReducer from "./fetchRepoReducer";
import inputReducer from "./inputReducer";

const allReducers = combineReducers({
  fetchRepoReducer,
  inputReducer,
});
export default allReducers;

export type State = ReturnType<typeof allReducers>;
