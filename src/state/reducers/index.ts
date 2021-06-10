import { combineReducers } from "redux";
import fetchRepoReducer from "./fetchRepoReducer";

const allReducers = combineReducers({
  fetchRepoReducer,
});
export default allReducers;

export type State = ReturnType<typeof allReducers>;
