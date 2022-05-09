import { SET_ERROR_MESSAGE } from "../constants/index";
import { ISetErrorMessage } from "../actions/interfaces";

export const errorMessage = (state: string = "", action: ISetErrorMessage) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};
