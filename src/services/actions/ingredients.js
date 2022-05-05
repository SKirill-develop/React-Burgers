import { url } from "../../utils/constants";
import { checkRes } from "../../utils/burger-api";
import { setLoading } from "../actions/loading";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../constants/index";

export const getIngredients = () => (dispatch) => {
  dispatch(setLoading(true));
  return fetch(`${url}/ingredients`)
    .then(checkRes)
    .then((res) => {
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        payload: res.data,
      });
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.error(err);
    });
};
