import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initState = {
  input: "",
};

const inputReducer = (state: any = initState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_INPUT:
      return { ...state, input: action.payload };
    default:
      return state;
  }
};

export default inputReducer;
