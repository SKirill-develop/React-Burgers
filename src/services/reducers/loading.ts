import { SET_LOADING } from "../constants/index";
import { ISetLoading } from "../actions/interfaces";

export const isLoading = (state: boolean = true, action: ISetLoading) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};


