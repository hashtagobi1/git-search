import { ActionType } from "../action-types";
import { Action } from "../actions/index";
import { SearchResponseData } from "../../API/API";

const initialState: any = [ [], 0];

const fetchRepoReducer = (state = initialState, action: Action) => {
  console.log("Middleware: Fetch Repos");
  switch (action.type) {
    case ActionType.FETCH_REPOS:
      console.log("Repos fetching...");
      return [action.payload.items, action.total_count];
    default:
      return state;
  }
};

export default fetchRepoReducer;
