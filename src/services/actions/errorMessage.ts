import { SET_ERROR_MESSAGE } from "../constants/index";
import { ISetErrorMessage } from "../actions/interfaces";

export const setErrorMessage = (errorMessage: string): ISetErrorMessage => ({
  type: SET_ERROR_MESSAGE,
  payload: errorMessage,
});
