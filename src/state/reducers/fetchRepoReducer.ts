import { ActionType } from "../action-types";
import { Action } from "../actions/index";

type SearchResponseData = {
  inCompleteResults: boolean;
  items: {}[];
  totalCount: number;
};

const initialState: any = [{
  inCompleteResults: false,
  items:[],
  totalCount:0,

}];

const fetchRepoReducer = (state = initialState, action: Action) => {
  console.log("Middleware: Fetch Repos");
  switch (action.type) {
    case ActionType.FETCH_REPOS:
      console.log("this fetch works");
      return [
        ...state,
        action.inCompleteResults,
        action.items,
        action.totalCount,
      ];
    default:
      return state;
  }
};

export default fetchRepoReducer;
