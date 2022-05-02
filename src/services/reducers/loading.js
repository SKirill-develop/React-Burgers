import { SET_LOADING } from "../actions/loading";

export const isLoading = (state = true, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};
