import { ActionType } from "../action-types";
import { Action } from "../actions/index";
import { SearchResponseData } from "../../API/API";

const initialState: any = {
  items: [[], 0],
  loading: false,
  error: null,
};

const fetchRepoReducer = (state = initialState, action: Action) => {
  // console.log("Middleware: Fetch Repos");
  switch (action.type) {
    case ActionType.FETCH_REPOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.FETCH_REPO_SUCCESS:
      console.log("FETCH_REPO_SUCCESS: Repos fetching...");
      return {
        ...state,
        loading: false,
        items: [action.payload.items, action.total_count],
      };
    case ActionType.FETCH_REPOS_ERROR:
      return {
        ...state,
        loading: false,
        error: [],
      };
    default:
      return state;
  }
};

export default fetchRepoReducer;
