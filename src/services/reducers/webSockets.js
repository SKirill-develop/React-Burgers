import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_CLOSE_CONNECTION,
  WS_CUSTOM_URL_CONNECTION_START,
  WS_GET_ORDERS,
  WS_SEND_MESSAGE,
} from "../actions/webSockets.js";

export const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsCustomUrlInit: WS_CUSTOM_URL_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  wsSendMessage: WS_SEND_MESSAGE,
  onOrder: WS_GET_ORDERS,
  wsClose: WS_CLOSE_CONNECTION,
};
