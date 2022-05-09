import { SET_USER_AUTH, SET_USER, CLEAR_USER } from "../constants/index";
import { TUserType } from "../types/index";
import { ISetUserAuth, ISetUser, IClearUser } from "../actions/interfaces";

export const isAuth = (state: boolean = false, action: ISetUserAuth) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return action.payload;
    default:
      return state;
  }
};

export const user = (
  state: TUserType | null = null,
  action: ISetUser | IClearUser
) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case CLEAR_USER:
      return null;
    default:
      return state;
  }
};
