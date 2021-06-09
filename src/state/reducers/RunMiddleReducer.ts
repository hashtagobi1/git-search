import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState = "";

const RM_reducer = (state = initialState, action: Action) => {
  // console.log("Middleware Has Run");
  switch (action.type) {
    case ActionType.RUN_MIDDLE:
      return state 
    default:
      return state;
  }
};

export default RM_reducer;
