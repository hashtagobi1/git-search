import { combineReducers } from "redux";
import fetchRepoReducer from "./fetchRepoReducer";
import inputReducer from "./inputReducer";
import readMeReducer from "./readMeReducer";

const allReducers = combineReducers({
  fetchRepoReducer,
  inputReducer,
  readMeReducer
});
export default allReducers;

export type State = ReturnType<typeof allReducers>;
