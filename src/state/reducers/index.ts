import { combineReducers } from "redux";
import fetchRepoReducer from "./fetchRepoReducer";
import inputReducer from "./inputReducer";
import readMeReducer from "./readMeReducer";
import showModalReducer from "./showModalReducer";
import getUserRepoReducer from "./getUserRepoReducer"


const allReducers = combineReducers({
  fetchRepoReducer,
  inputReducer,
  readMeReducer,
  showModalReducer,
  getUserRepoReducer,
});
export default allReducers;

export type State = ReturnType<typeof allReducers>;
