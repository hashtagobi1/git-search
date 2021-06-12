import { ActionType } from "../action-types";
import { Action } from "../actions/index";
import { SearchResponseData } from "../../API/API";

const initialState: any = {
  items: [[], 0],
  loading: false,
  errorState: false,
  errorMessage: "",
  error: null,
  rateLimit: 10,
  rateLimitRemaining: 10,
  pageNumber: 1,
  perPage: 3,
  totalPages: [],
  responseMessage: null,
  resultsPerPage: [10, 25, 50, 100],
  pagesShownAmount: [1, 15],

  // ! want to have it like, whatever page we are on. we add 14 more pages to the screen
  // ! pagesShownAmount: [1, 10], => pagesShownAmount: [pageNumber, pageNumber + 14]
  // ! [mutable, fixed]
};

const fetchRepoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_REPOS_REQUEST:
      return {
        ...state,
        errorState: false,
        loading: true,
        error: null,
      };
    case ActionType.FETCH_REPO_SUCCESS:
      console.log("FETCH_REPO_SUCCESS: Repos fetching...");
      return {
        ...state,
        loading: false,
        errorState: false,
        items: [action.payload.items, action.total_count],
        rateLimit: action.rateLimit,
        rateLimitRemaining: action.rateLimitRemaining,
        pageNumber: action.pageNumber,
        perPage: action.perPage,
        totalPages: action.totalPages,
        responseMessage: action.responseMessage,
        resultsPerPage: action.resultsPerPage,
        pagesShownAmount: action.pagesShownAmount,
      };
    case ActionType.FETCH_REPOS_ERROR:
      return {
        ...state,
        loading: false,
        errorState: true,
        errorMessage: action.errorMessage,
        items: [[], 0],
        perPage: action.perPage,
      };
    default:
      return state;
  }
};

export default fetchRepoReducer;
