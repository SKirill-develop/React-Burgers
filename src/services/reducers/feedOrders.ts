import { ISetWSOrders } from "../actions/interfaces";
import { SET_WS_ORDERS } from "../actions/webSockets";
import { TWsOrdersType } from "../types";

const initialState = {
  success: false,
  orders: [],
  total: 0,
  totalToday: 0,
};

export const feedOrders = (
  state: TWsOrdersType = initialState,
  action: ISetWSOrders
): TWsOrdersType => {
  switch (action.type) {
    case SET_WS_ORDERS:
      return action.payload;
    default:
      return state;
  }
};
