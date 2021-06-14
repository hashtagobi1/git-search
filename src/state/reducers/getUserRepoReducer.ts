import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initState = {
  repoEndpoint: "",
  loading: false,
  errorState: false,
  
};

const getUserRepoReducer = (
  state: typeof initState = initState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.GET_USER_REPO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_USER_REPO_SUCCESS:

      return {
        ...state,
        loading: false,
        errorState: action.errorState,
        repoEndpoint: action.repoEndpoint,
      };
    case ActionType.GET_USER_REPO_ERROR:
      return {
        ...state,
        loading: false,
        errorState: action.errorState,
      };
    default:
      return state;
  }
};

export default getUserRepoReducer;
