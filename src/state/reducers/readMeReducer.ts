import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initState = {
  readMe: "",
  loading: false,
  errorState: false,
};

const readMeReducer = (state: typeof initState = initState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_README_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_README_SUCCESS:
      return {
        ...state,
        readMe: action.readMe,
        loading: false,
        errorState: action.errorState,
      };
    case ActionType.GET_README_ERROR:
      return {
        ...state,
        readMe: action.readMe,
        loading: false,
        errorState: action.errorState,
      };
    default:
      return state;
  }
};

export default readMeReducer;
