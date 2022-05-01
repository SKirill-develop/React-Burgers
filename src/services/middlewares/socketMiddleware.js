import { setLoading } from '../actions/loading';
import { SET_WS_ORDERS } from '../actions/webSockets';

export const socketMiddleware = (wsUrl, wsActions) => (store) => {
  let socket = null;

  return (next) => (action) => {
    const { dispatch } = store;
    const { type, payload } = action;
    const {
      wsInit, onOpen, onClose, wsClose, onError, wsCustomUrlInit,
    } = wsActions;

    if (type === wsCustomUrlInit) {
      socket = new WebSocket(payload);
    }

    if (type === wsInit) {
      dispatch(setLoading(true));
      socket = new WebSocket(wsUrl);
    }

    if (socket) {
      socket.onopen = (event) => {
        dispatch({ type: onOpen, payload: event });
      };

      socket.onerror = (event) => {
        dispatch({ type: onError, payload: event });
      };

      socket.onmessage = (event) => {
        const { data } = event;
        const parsedData = JSON.parse(data);
        const { success, ...restParsedData } = parsedData;
        dispatch({ type: SET_WS_ORDERS, payload: restParsedData });
        dispatch(setLoading(false));
      };

      socket.onclose = (event) => {
        dispatch({ type: onClose, payload: event });
      };

      if (type === wsClose) {
        socket.close();
      }
    }

    next(action);
  };
};