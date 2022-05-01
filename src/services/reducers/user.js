import { SET_USER_AUTH, SET_USER, CLEAR_USER } from "../actions/auth";

export const isAuth = (state = false, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return action.payload;
    default:
      return state;
  }
};

export const user = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case CLEAR_USER:
      return null;
    default:
      return state;
  }
};
