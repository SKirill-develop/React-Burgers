import { MiddlewareAPI } from "redux";
import { IWsActions } from "../types/index";

export const socketMiddleware =
  (wsUrl: string, wsActions: IWsActions) => (store: MiddlewareAPI) => {
    let socket: WebSocket | null = null;

    return (next: (arg: { type: string; payload: string }) => void) =>
      (action: { type: string; payload: string }) => {
        const { dispatch } = store;
        const { type, payload } = action;
        const {
          wsInit,
          onOpen,
          onClose,
          wsClose,
          onError,
          wsCustomUrlInit,
          onMessage,
        } = wsActions;

        if (type === wsCustomUrlInit) {
          socket = new WebSocket(payload);
        }

        if (type === wsInit) {
          socket = new WebSocket(wsUrl);
        }

        if (socket) {
          socket.onopen = (event: Event) => {
            dispatch({ type: onOpen, payload: event });
          };

          socket.onerror = (event: Event) => {
            dispatch({ type: onError, payload: event });
          };

          socket.onmessage = (event: MessageEvent) => {
            const { data } = event;
            const parsedData = JSON.parse(data);
            dispatch({ type: onMessage, payload: parsedData });
          };

          socket.onclose = (event: Event) => {
            dispatch({ type: onClose, payload: event });
          };

          if (type === wsClose) {
            socket.close();
          }
        }

        next(action);
      };
  };
