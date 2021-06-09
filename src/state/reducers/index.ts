import { combineReducers } from "redux";
import RM_reducer from "./RunMiddleReducer";
import fetchRepoReducer from "./fetchRepoReducer";

const allReducers = combineReducers({
  RM_reducer,
  fetchRepoReducer,
});
export default allReducers;

export type State = ReturnType<typeof allReducers>;
