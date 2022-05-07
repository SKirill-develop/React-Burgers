import { url } from "../../utils/constants";
import { checkRes } from "../../utils/burger-api";
import { setLoading } from "./loading";
import { setErrorMessage } from "./errorMessage";
import { GET_INGREDIENTS_SUCCESS } from "../constants/index";
import { AppThunk, AppDispatch } from "../types/index";

export const getIngredients: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  return fetch(`${url}/ingredients`)
    .then(checkRes)
    .then((res) => {
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(setErrorMessage("Ингридиенты не получены!"))
      setTimeout(() => {
        dispatch(setErrorMessage(''));
      }, 2000);
    })
    .finally(() => dispatch(setLoading(false)));
};
