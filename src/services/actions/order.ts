import { orderBurger as api } from "../../utils/burger-api";
import { setLoading } from "./loading";
import { setErrorMessage } from "./errorMessage";
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
} from "../constants/index";
import { AppThunk, AppDispatch } from "../types/index";

export const orderBurger: AppThunk = (orderData: Array<string>) => (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  dispatch({
    type: CREATE_ORDER_REQUEST,
  });
  return api(orderData)
    .then((res) => {
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_ORDER_FAILED,
        payload: err,
      });
      dispatch(setErrorMessage(err.message));
    })
    .finally(() => dispatch(setLoading(false)));
};
