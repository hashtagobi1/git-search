import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initState = {
  showModal: false,
};

const showModalReducer = (
  state: typeof initState = initState,
  action: Action
) => {

  switch (action.type) {
    case ActionType.INVERT_MODAL:
      // console.log("Modal Middleware State = " + action.showModal);

      return { ...state, showModal: action.showModal };
    default:
      return state;
  }
};

export default showModalReducer;
