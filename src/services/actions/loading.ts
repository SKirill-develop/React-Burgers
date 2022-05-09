import { SET_LOADING } from "../constants/index";
import { ISetLoading } from "../actions/interfaces";

export const setLoading = (data: boolean): ISetLoading => ({
  type: SET_LOADING,
  payload: data,
});
