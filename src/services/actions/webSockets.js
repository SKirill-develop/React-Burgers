export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';

export const WS_CUSTOM_URL_CONNECTION_START = 'WS_CUSTOM_URL_CONNECTION_START';

export const WS_CLOSE_CONNECTION = 'WS_CLOSE_CONNECTION';
export const WS_GET_ORDERS = 'WS_GET_ORDERS';
export const SET_WS_ORDERS = 'SET_WS_ORDERS';
export const WS_SEND_MESSAGE = 'WS_SEND_MESSAGE';

export const wsConnectionStart = () => ({
  type: WS_CONNECTION_START,
});

export const wsCustomUrlConnectionStart = (customUrl) => ({
  type: WS_CUSTOM_URL_CONNECTION_START,
  payload: customUrl,
});

export const wsClose = () => ({
  type: WS_CLOSE_CONNECTION,
});