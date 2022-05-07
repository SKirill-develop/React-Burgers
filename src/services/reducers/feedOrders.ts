import { SET_WS_ORDERS } from '../actions/webSockets'

interface IOrdersInfo {
  orders: any
  total: number
  totalToday: number
}

type TWsState = {
  wsConnected: boolean
  messages: IOrdersInfo
}

const initialState = {
  wsConnected: false,
  messages: {
    orders: [],
    total: 0,
    totalToday: 0
  }
}

export const feedOrders = (state: TWsState = initialState, action: any) => {
  switch (action.type) {
    case SET_WS_ORDERS:
      return action.payload;
    default:
      return state;
  }
};