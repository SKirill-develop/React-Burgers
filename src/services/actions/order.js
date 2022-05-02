import { orderBurger as api } from "../../utils/burger-api";
import { setLoading } from '../actions/loading';

export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED';
export const RESET_ORDER = 'RESET_ORDER';

export const orderBurger = (orderData) => (dispatch) => {
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
    })
    .finally(() => dispatch(setLoading(false)));
}