import { SET_WS_ORDERS } from '../actions/webSockets'

export const feedOrders = (state = null, action) => {
  switch (action.type) {
    case SET_WS_ORDERS:
      return action.payload;
    default:
      return state;
  }
};